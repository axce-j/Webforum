"use client";
import { useState, useEffect } from 'react';
import { FaUserCircle, FaChevronDown } from 'react-icons/fa';
import { 
  collection, 
  doc, 
  setDoc, 
  getDoc,
  serverTimestamp,
  query,
  orderBy
} from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db, auth } from '@/config/FirebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';

// Interface for post data
interface PostData {
  id: string;
  userId: string;
  title: string;
  content: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  timestamp: any;
}

// Interface for reply data
interface ReplyData {
  id: string;
  postId: string;
  userId: string;
  content: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  timestamp: any;
}

const Page = () => {
  // Authentication state
  const [user] = useAuthState(auth);

  // UI state management
  const [isReplyModalOpen, setIsReplyModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<PostData | null>(null);
  const [replyContent, setReplyContent] = useState('');
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
  
  // Username cache state
  const [usernames, setUsernames] = useState<{ [key: string]: string }>({});

  // Fetch posts and replies with timestamps
  const [postsSnapshot] = useCollection(
    query(collection(db, "posts"), orderBy("timestamp", "desc"))
  );

  const [repliesSnapshot] = useCollection(
    query(collection(db, "replies"), orderBy("timestamp", "desc"))
  );

  // Fetch usernames for all users
  useEffect(() => {
    const fetchUsernames = async () => {
      const newUsernames: { [key: string]: string } = {};
      const userIds = new Set<string>();
      
      // Collect unique user IDs from posts and replies
      postsSnapshot?.docs.forEach(doc => {
        userIds.add(doc.data().userId);
      });
      
      repliesSnapshot?.docs.forEach(doc => {
        userIds.add(doc.data().userId);
      });

      // Fetch username for each unique user
      for (const userId of userIds) {
        try {
          const userDoc = await getDoc(doc(db, "users", userId));
          if (userDoc.exists()) {
            newUsernames[userId] = userDoc.data().username;
          }
        } catch (error) {
          console.error("Error fetching username:", error);
        }
      }

      setUsernames(newUsernames);
    };

    if (postsSnapshot && repliesSnapshot) {
      fetchUsernames();
    }
  }, [postsSnapshot, repliesSnapshot]);

  // Handle reply submission
  const handleReplySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !replyContent.trim() || !selectedPost) return;

    try {
      const repliesRef = collection(db, "replies");
      const newReplyRef = doc(repliesRef);

      const replyData = {
        id: newReplyRef.id,
        postId: selectedPost.id,
        content: replyContent,
        userId: user.uid,
        timestamp: serverTimestamp()
      };

      await setDoc(newReplyRef, replyData);
      setReplyContent('');
      setIsReplyModalOpen(false);
      setSelectedPost(null);
    } catch (error) {
      console.error("Error saving reply:", error);
    }
  };

  // Toggle accordion state
  const toggleAccordion = (postId: string) => {
    setActiveAccordion(activeAccordion === postId ? null : postId);
  };

  return (
    <div className="h-[87dvh] md:h-[95dvh] bg-gray-50 p-8 flex flex-col">
      <h2 className='text-4xl font-bold mb-6 text-gray-800'>Activity</h2>

      {/* Reply Modal */}
      {isReplyModalOpen && selectedPost && (
        <div className='fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center'>
          <div className='bg-white rounded-2xl p-6 w-full max-w-md shadow-lg'>
            <div className='flex justify-between items-center mb-4'>
              <h3 className='text-xl font-semibold text-gray-800'>Reply to Post</h3>
              <button 
                onClick={() => {
                  setIsReplyModalOpen(false);
                  setSelectedPost(null);
                  setReplyContent('');
                }}
                className='text-gray-500 hover:text-gray-700'
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="mb-4">
              <h4 className="font-medium text-gray-800">{selectedPost.title}</h4>
              <p className="text-sm text-gray-600 mt-1">{selectedPost.content}</p>
            </div>

            <form onSubmit={handleReplySubmit} className='space-y-4'>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>Your Reply</label>
                <textarea
                  value={replyContent}
                  onChange={(e) => setReplyContent(e.target.value)}
                  className='w-full px-4 text-black py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[100px] resize-none'
                  placeholder='Write your reply...'
                  required
                />
              </div>
              <button
                type="submit"
                className='w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors'
              >
                Submit Reply
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Scrollable Posts Container */}
      <div className="flex-1 overflow-y-auto space-y-4 pr-2">
        {postsSnapshot?.docs.map((doc) => {
          const post = doc.data() as PostData;
          const postReplies = repliesSnapshot?.docs
            .filter(replyDoc => replyDoc.data().postId === post.id)
            .map(replyDoc => replyDoc.data() as ReplyData) || [];

          return (
            <div key={post.id} className="bg-white rounded-lg shadow-lg">
              {/* Accordion Header */}
              <div 
                onClick={() => toggleAccordion(post.id)}
                className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center flex-1">
                    <FaUserCircle className="text-gray-500 w-12 h-12 mr-4" />
                    <div className="flex-1">
                      <div className="font-semibold text-lg text-gray-900">
                        {usernames[post.userId] || 'Anonymous'}
                      </div>
                      <div className="text-gray-700">
                        {post.title && <div className="font-medium text-gray-800 mb-2">{post.title}</div>}
                        <p>{post.content}</p>
                        <p>{post.timestamp?.toDate().toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                  <FaChevronDown 
                    className={`w-6 h-6 transform transition-transform ${
                      activeAccordion === post.id ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </div>

              {/* Accordion Content */}
              {activeAccordion === post.id && (
                <div className="border-t border-gray-200 p-6">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPost(post);
                      setIsReplyModalOpen(true);
                    }}
                    className="mb-4 bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                  >
                    Reply
                  </button>

                  {/* Replies Section */}
                  {postReplies.length > 0 && (
                    <div className="space-y-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">
                        Replies ({postReplies.length})
                      </h4>
                      {postReplies.map((reply) => (
                        <div key={reply.id} className="bg-gray-50 p-4 rounded-lg shadow-sm">
                          <div className="flex items-center mb-2">
                            <FaUserCircle className="text-gray-400 w-5 h-5 mr-2" />
                            <span className="text-sm font-medium text-gray-700">
                              {usernames[reply.userId] || 'Anonymous'}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600">{reply.content}</p>
                          <span className="text-xs text-gray-400">
                            {reply.timestamp?.toDate().toLocaleString()}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;