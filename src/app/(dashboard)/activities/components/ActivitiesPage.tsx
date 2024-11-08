"use client";


import { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';

const ActivitiesPage = () => {
  const [postsData, setPostsData] = useState([
    {
      id: 1,
      content: "Just merged the latest feature branch into main. It includes the user authentication module.",
      userName: "USER",
      timestamp: "2 hours ago",
      replies: [
        { 
          id: 1, userName: "John Doe", text: "Nice work! How are we handling session expiration?", 
          timestamp: "1 hour ago",
          nestedReplies: [
            { id: 1, userName: "USER", text: "We’re using JWT for token management. Sessions will expire after 30 minutes of inactivity." , timestamp: "50 mins ago" }
          ]
        },
        { 
          id: 2, userName: "Emily Clark", text: "Will the new feature affect the current login system?", 
          timestamp: "30 mins ago",
          nestedReplies: [
            { id: 1, userName: "USER", text: "No, it's backward compatible. The login flow stays the same." , timestamp: "10 mins ago" }
          ]
        },
        { 
          id: 3, userName: "Robert Green", text: "Can you update the README to reflect these changes?", 
          timestamp: "5 mins ago",
          nestedReplies: []
        },
      ],
    },
    {
      id: 2,
      content: "I’ve started implementing the API for our new product recommendation engine.",
      userName: "USER",
      timestamp: "5 hours ago",
      replies: [
        { 
          id: 1, userName: "Sarah Lee", text: "What technology are you using for the API? REST or GraphQL?", 
          timestamp: "3 hours ago",
          nestedReplies: [
            { id: 1, userName: "USER", text: "I'm using REST for simplicity. It’s easier to implement for our use case." , timestamp: "2 hours ago" }
          ]
        },
        { 
          id: 2, userName: "David Smith", text: "How do we plan to handle large datasets in this API?", 
          timestamp: "2 hours ago",
          nestedReplies: []
        },
      ],
    },
    {
      id: 3,
      content: "Refactored the codebase to implement a more efficient search algorithm in the product catalog.",
      userName: "USER",
      timestamp: "1 day ago",
      replies: [
        { 
          id: 1, userName: "Daniel Walker", text: "That’s awesome! What’s the time complexity of the new algorithm?", 
          timestamp: "20 hours ago",
          nestedReplies: [
            { id: 1, userName: "USER", text: "The new algorithm has a time complexity of O(log n), which is a significant improvement." , timestamp: "19 hours ago" }
          ]
        },
        { 
          id: 2, userName: "Fiona Gray", text: "Can we expect any impact on the frontend performance with the new search?", 
          timestamp: "18 hours ago",
          nestedReplies: [
            { id: 1, userName: "USER", text: "The backend improvements should make the search faster, which will improve the frontend experience." , timestamp: "16 hours ago" }
          ]
        },
      ],
    },
    {
      id: 4,
      content: "Pushed the final version of the user profile page. The design is responsive and mobile-friendly.",
      userName: "USER",
      timestamp: "2 days ago",
      replies: [
        { 
          id: 1, userName: "Charlie Brown", text: "Looking forward to trying it out! Any challenges with mobile responsiveness?", 
          timestamp: "1 day ago",
          nestedReplies: []
        },
        { 
          id: 2, userName: "Eva Green", text: "Great job! Is it compatible with all screen sizes?", 
          timestamp: "12 hours ago",
          nestedReplies: []
        },
      ],
    },
  ]);

  const [newPostContent, setNewPostContent] = useState('');
  const [expandedPosts, setExpandedPosts] = useState({});
  const [expandedReplies, setExpandedReplies] = useState({});

  const toggleReplies = (postId) => {
    setExpandedPosts((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  const toggleNestedReplies = (postId, replyId) => {
    setExpandedReplies((prev) => ({
      ...prev,
      [`${postId}-${replyId}`]: !prev[`${postId}-${replyId}`],
    }));
  };

  const handleNewPost = () => {
    if (newPostContent.trim()) {
      const newPost = {
        id: postsData.length + 1,
        content: newPostContent,
        userName: "USER", // Assume current user is "Alice Johnson"
        timestamp: "Just now",
        replies: []
      };
      setPostsData([newPost, ...postsData]);
      setNewPostContent('');
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <textarea
          className="w-full h-20 p-3 border rounded focus:outline-none text-black focus:ring-2 focus:ring-blue-400"
          placeholder="Write a new post..."
          value={newPostContent}
          onChange={(e) => setNewPostContent(e.target.value)}
        />
        <button
          className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          onClick={handleNewPost}
        >
          Post
        </button>
      </div>
  
      {/* Container for posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {postsData.map((post) => (
          <div key={post.id} className="p-8 bg-white rounded-lg shadow-lg w-full max-w-3xl mx-auto">
            <div className="flex items-start mb-4">
              <FaUserCircle className="text-gray-500 w-12 h-12 mr-4" />
              <div>
                <div className="font-semibold text-lg text-gray-900">{post.userName}</div>
                <div className="text-gray-500 text-sm">{post.timestamp}</div>
                <div className="text-gray-700 mt-1">{post.content}</div>
              </div>
            </div>
  
            <div className="mt-4 space-y-4">
              {post.replies.slice(0, expandedPosts[post.id] ? post.replies.length : 2).map((reply) => (
                <div key={reply.id} className="flex items-start ml-16">
                  <FaUserCircle className="text-blue-500 w-10 h-10 mr-3" />
                  <div className="w-full">
                    <div className="font-semibold text-gray-800">{reply.userName}</div>
                    <div className="text-gray-500 text-sm">{reply.timestamp}</div>
                    <div className="text-gray-600">{reply.text}</div>
  
                    {reply.nestedReplies && (
                      <button
                        className="text-blue-600 font-medium text-sm mt-2 hover:underline"
                        onClick={() => toggleNestedReplies(post.id, reply.id)}
                      >
                        {expandedReplies[`${post.id}-${reply.id}`] ? "Hide replies" : "View replies"}
                      </button>
                    )}
  
                    {reply.nestedReplies && expandedReplies[`${post.id}-${reply.id}`] && (
                      <div className="mt-2 ml-10 space-y-2">
                        {reply.nestedReplies.map((nestedReply) => (
                          <div key={nestedReply.id} className="flex items-start">
                            <FaUserCircle className="text-green-500 w-8 h-8 mr-2" />
                            <div>
                              <div className="font-semibold text-gray-800">{nestedReply.userName}</div>
                              <div className="text-gray-500 text-sm">{nestedReply.timestamp}</div>
                              <div className="text-gray-600">{nestedReply.text}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
  
              {post.replies.length > 2 && (
                <button
                  className="text-blue-600 font-medium text-sm mt-2 ml-16 hover:underline"
                  onClick={() => toggleReplies(post.id)}
                >
                  {expandedPosts[post.id] ? "See less" : "See more"}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default ActivitiesPage;
