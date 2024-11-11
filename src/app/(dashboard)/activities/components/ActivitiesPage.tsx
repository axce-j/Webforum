"use client"
import React, { useState, useEffect } from 'react'
import { useCollection, useDocument } from 'react-firebase-hooks/firestore'
import { collection, setDoc, doc, query, orderBy, where, serverTimestamp } from 'firebase/firestore'
import { db } from '@/config/FirebaseConfig' // Adjust this path
import  { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/config/FirebaseConfig'
import { useRouter } from 'next/navigation'
import { FaSignOutAlt } from 'react-icons/fa'
import { signOut } from 'firebase/auth'

const Page = () => {
  const [user] = useAuthState(auth);
  const router = useRouter();
  
  const [isReplyModalOpen, setIsReplyModalOpen] = useState(false);
  const [activePost, setActivePost] = useState<any>(null);
  const [replyContent, setReplyContent] = useState('');
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    content: ''
  });

  const [userDoc] = useDocument(
    user ? doc(db, "users", user.uid) : null
  );
  

  // console.log("Current user email:", user?.email);

  const [postsSnapshot] = useCollection(
    user ? query(
      collection(db, "posts"),
      where("userEmail", "==", user.email)
    ) : null
  );

  const [repliesSnapshot] = useCollection(
    activePost ? query(
      collection(db, "replies"),
      where("postId", "==", activePost.id),
      orderBy("timestamp", "desc")
    ) : null
  );

  

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    
    try {
      const postRef = doc(collection(db, "posts"));
      
      const postData = {
        userId: user.uid,
        userEmail: user.email, // Make sure this matches exactly
        title: formData.title,
        content: formData.content,
        timestamp: serverTimestamp(),
        id: postRef.id
      };

      console.log("Creating post with data:", postData); // Add this log

      await setDoc(postRef, postData);
      
      console.log("Post created successfully");
      
      setFormData({ title: '', content: '' });
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error adding document:", error);
    }
};

if (!user) return null;

const handleReply = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!user || !replyContent.trim() || !activePost) return;

  try {
    const replyRef = doc(collection(db, "replies"));
    await setDoc(replyRef, {
      id: replyRef.id,
      postId: activePost.id,
      userId: user.uid,
      userEmail: user.email,
      content: replyContent,
      timestamp: serverTimestamp()
    });

    setReplyContent('');
    setIsReplyModalOpen(false);
  } catch (error) {
    console.error("Error adding reply:", error);
  }
};

  return (
    <div className='relative flex flex-col bg-slate-50 group/design-root h-[87dvh] md:h-[95dvh]' style={{fontFamily: '"Work Sans", "Noto Sans", sans-serif'}}>
      {/* Modal Overlay */}
      {isModalOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4'>
          <div className='bg-white rounded-2xl p-6 w-full max-w-md'>
            <div className='flex justify-between items-center mb-4'>
              <h3 className='text-xl font-bold text-[#0c141d]'>Create New Post</h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className='text-[#4573a1] hover:text-[#0c141d]'
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <form onSubmit={handleSubmit} className='space-y-4'>
              <div>
                <label className='block text-sm font-medium text-[#0c141d] mb-1'>Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className='w-full px-4 py-2 border text-black border-[#cddbea] rounded-xl focus:outline-none focus:border-[#0066cc]'
                  placeholder='Enter post title'
                  required
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-[#0c141d] mb-1'>Content</label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  className='w-full px-4 text-black py-2 border border-[#cddbea] rounded-xl focus:outline-none focus:border-[#0066cc] min-h-[100px] resize-none'
                  placeholder='Add post content'
                  required
                />
              </div>
              <button
                type="submit"
                className='w-full bg-[#0066cc] text-white py-2 rounded-xl font-medium hover:bg-[#0052a3] transition-colors'
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      <div className='layout-container flex h-full grow flex-col'>
        <div className='px-4 md:px-40 flex flex-1 justify-center py-3 md:py-5'>
          <div className='layout-content-container flex flex-col max-w-[960px] flex-1'>
            <div className='flex p-4 @container'>
              <div className='flex w-full flex-col gap-4 items-center'>
                <div className='flex gap-4 flex-col items-center'>
                  <div
                    className='bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-24 w-24 md:min-h-32 md:w-32'
                    style={{backgroundImage: 'url("https://cdn.usegalileo.ai/stability/e8277fd2-ec07-42ec-98d0-d4d3f062648f.png")'}}
                  />
                  <div className="flex items-center gap-4">
                    <div className='flex flex-col items-center justify-center'>
                      <p className='text-[#0c141d] text-xl md:text-[22px] font-bold leading-tight tracking-[-0.015em] text-center'>
                        {userDoc?.data()?.username || 'Loading...'}  {/* Replace Helen Smith with this */}
                      </p>
                    </div>
                    <button
                      onClick={() => signOut(auth)}
                      className='text-black p-2transition-colors mr-9'
                      title="Logout"
                    >
                      <FaSignOutAlt size={20} />
                    </button>
                  </div>
                  
                </div>
              </div>
            </div>

            <div className='pb-3'>
              <div className='flex border-b border-[#cddbea] px-2 md:px-4 justify-between overflow-x-auto'>
                <div className='flex flex-col items-center justify-center border-b-[3px] border-b-[#0066cc] text-[#0c141d] pb-[13px] pt-4 flex-1 min-w-[100px]'>
                  <p className='text-[#0c141d] text-sm font-bold leading-normal tracking-[0.015em]'>Posts</p>
                </div>
              </div>
            </div>

            <div className='flex justify-between items-center px-4 pb-3 pt-5'>
              <h2 className='text-[#0c141d] text-xl md:text-[22px] font-bold leading-tight tracking-[-0.015em]'>Posts</h2>
              <button
                onClick={() => setIsModalOpen(true)}
                className='bg-[#0066cc] text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-[#0052a3] transition-colors'
              >
                Create New Post
              </button>
            </div>

            {postsSnapshot?.docs.map((doc, index) => {
  const post = doc.data();
  return (
    <div key={doc.id} className='mb-2'>
      <div 
        onClick={() => toggleAccordion(index)}
        className='flex items-center gap-4 bg-slate-50 px-4 min-h-[72px] py-2 cursor-pointer hover:bg-slate-100'
      >
        
      
      </div>
      {activeAccordion === index && (
        <div className='px-20 py-4 bg-slate-50 border-t border-slate-200 transition-all'>
          <p className='text-[#4573a1] text-sm md:text-base'>{post.content}</p>
          
          <button
            onClick={() => {
              setActivePost(post);
              setIsReplyModalOpen(true);
            }}
            className="mt-4 bg-[#0066cc] text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-[#0052a3] transition-colors"
          >
            Reply
          </button>

          {/* Display replies */}
          <div className="mt-4 space-y-4">
            {repliesSnapshot?.docs
              .filter(replyDoc => replyDoc.data().postId === post.id)
              .map(replyDoc => {
                const reply = replyDoc.data();
                return (
                  <div key={reply.id} className="pl-4 border-l-2 border-gray-200">
                    <div className="font-medium text-sm">{reply.userEmail}</div>
                    <div className="text-sm text-gray-600">{reply.content}</div>
                    <div className="text-xs text-gray-400">
                      {reply.timestamp?.toDate().toLocaleDateString()}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
            })}

            {/* Reply Modal */}
            {isReplyModalOpen && activePost && (
              <div className='fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4'>
                <div className='bg-white rounded-2xl p-6 w-full max-w-md'>
                  <div className='flex justify-between items-center mb-4'>
                    <h3 className='text-xl font-bold text-[#0c141d]'>Reply to Post</h3>
                    <button 
                      onClick={() => {
                        setIsReplyModalOpen(false);
                        setActivePost(null);
                        setReplyContent('');
                      }}
                      className='text-[#4573a1] hover:text-[#0c141d]'
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium text-[#0c141d]">{activePost.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{activePost.content}</p>
                  </div>

                  <form onSubmit={handleReply} className='space-y-4'>
                    <div>
                      <label className='block text-sm font-medium text-[#0c141d] mb-1'>Your Reply</label>
                      <textarea
                        value={replyContent}
                        onChange={(e) => setReplyContent(e.target.value)}
                        className='w-full px-4 text-black py-2 border border-[#cddbea] rounded-xl focus:outline-none focus:border-[#0066cc] min-h-[100px] resize-none'
                        placeholder='Write your reply...'
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className='w-full bg-[#0066cc] text-white py-2 rounded-xl font-medium hover:bg-[#0052a3] transition-colors'
                    >
                      Submit Reply
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page