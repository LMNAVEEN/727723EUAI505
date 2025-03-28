import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Heart, MessageCircle } from 'lucide-react';
import './Feed.css';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/posts')
      .then((response) => setPosts(response.data))
      .catch((error) => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div className="container">
      <h2 className="text-3xl font-bold mb-4">Feed</h2>
      <div className="feed-posts">
        {posts.map(post => (
          <div key={post.id} className="post-card">
            <p className="post-content">{post.content}</p>
            {post.image && (
              <img src={post.image} alt={post.content} className="post-image" />
            )}
            <div className="post-actions">
              <button className="like-btn">
                <Heart size={24} /> <span>{post.likes} Likes</span>
              </button>
              <button className="comment-btn">
                <MessageCircle size={24} /> <span>{post.comments} Comments</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feed;
