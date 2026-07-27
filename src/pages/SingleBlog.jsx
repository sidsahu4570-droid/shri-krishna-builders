import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProperties } from '../context/PropertyContext';
import { Calendar, User, Clock, ArrowLeft, ShieldAlert } from 'lucide-react';

export default function SingleBlog() {
  const { id } = useParams();
  const { blogs } = useProperties();
  const post = blogs.find((b) => b.id === id);

  if (!post) {
    return (
      <div className="container" style={{ padding: '120px 0 80px', textAlign: 'center' }}>
        <ShieldAlert size={60} style={{ color: 'var(--color-secondary)', marginBottom: '1rem' }} />
        <h2>Post Not Found</h2>
        <p>The real estate article you are looking for has been archived or is no longer available.</p>
        <Link to="/blogs" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
          Back to Blogs
        </Link>
      </div>
    );
  }

  // Helper to render text with newlines as paragraphs
  const renderContent = (content) => {
    return content.split('\n\n').map((paragraph, index) => {
      if (paragraph.startsWith('###')) {
        return <h3 key={index} className="blog-body-subheading">{paragraph.replace('###', '')}</h3>;
      }
      if (paragraph.startsWith('-')) {
        return (
          <ul key={index} className="blog-body-list">
            {paragraph.split('\n').map((item, idx) => (
              <li key={idx}>{item.replace('-', '').trim()}</li>
            ))}
          </ul>
        );
      }
      return <p key={index} className="blog-body-paragraph">{paragraph}</p>;
    });
  };

  return (
    <div className="single-blog-page">
      <div className="container" style={{ maxWidth: '800px' }}>
        
        {/* Back Link */}
        <div className="blog-back-nav">
          <Link to="/blogs" className="back-link-btn">
            <ArrowLeft size={16} />
            <span>Back to Blogs</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="blog-article-header">
          <span className="article-category-tag">{post.category}</span>
          <h1 className="article-title">{post.title}</h1>
          
          <div className="article-meta-info">
            <div className="meta-block">
              <Calendar size={15} />
              <span>{post.date}</span>
            </div>
            <div className="meta-block">
              <Clock size={15} />
              <span>{post.readTime}</span>
            </div>
            <div className="meta-block">
              <User size={15} />
              <span>By {post.author}</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="article-featured-image">
          <img src={post.image} alt={post.title} />
        </div>

        {/* Article Body */}
        <div className="article-content-body">
          {renderContent(post.content)}
        </div>

        {/* Author bio footer */}
        <div className="article-author-card glass-panel">
          <div className="author-avatar-stub">
            <User size={30} className="avatar-icon" />
          </div>
          <div className="author-bio-details">
            <h4>{post.author}</h4>
            <p>Senior Advisory Board Specialist at Shri Krishna Builder's & Developers. Shaping Indore's luxury real estate portfolios and structural safety standards.</p>
          </div>
        </div>

      </div>

      {styleTag}
    </div>
  );
}

const styleTag = (
  <style>{`
    .single-blog-page {
      padding: 120px 0 80px 0;
      background-color: var(--color-bg-light);
      font-family: var(--font-body);
    }

    .blog-back-nav {
      margin-bottom: 2rem;
    }

    .back-link-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--color-primary);
    }

    .back-link-btn:hover {
      color: var(--color-secondary);
    }

    /* Article header styles */
    .blog-article-header {
      margin-bottom: 2rem;
    }

    .article-category-tag {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: var(--color-secondary);
      font-weight: 600;
      display: block;
      margin-bottom: 10px;
    }

    .article-title {
      font-family: var(--font-headings);
      font-size: 2.25rem;
      color: var(--color-dark);
      line-height: 1.25;
      margin-bottom: 1.25rem;
    }

    .article-meta-info {
      display: flex;
      gap: 20px;
      font-size: 0.8rem;
      color: #666;
      border-top: 1px solid rgba(30, 30, 30, 0.08);
      border-bottom: 1px solid rgba(30, 30, 30, 0.08);
      padding: 12px 0;
    }

    .meta-block {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    /* Showcase Image */
    .article-featured-image {
      border-radius: var(--border-radius-lg);
      overflow: hidden;
      height: 420px;
      margin-bottom: 2.5rem;
      box-shadow: var(--shadow-sm);
    }

    .article-featured-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    /* Body paragraphs formatting */
    .article-content-body {
      margin-bottom: 3.5rem;
    }

    .blog-body-paragraph {
      font-size: 1rem;
      color: #3b3b3b;
      line-height: 1.7;
      margin-bottom: 1.5rem;
      font-weight: 300;
    }

    .blog-body-subheading {
      font-family: var(--font-headings);
      font-size: 1.5rem;
      color: var(--color-dark);
      margin: 2.5rem 0 1rem 0;
    }

    .blog-body-list {
      margin: 1rem 0 1.5rem 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .blog-body-list li {
      font-size: 0.95rem;
      color: #3b3b3b;
    }

    /* Author card layout */
    .article-author-card {
      display: flex;
      gap: 20px;
      padding: 2rem;
      border-radius: var(--border-radius-md);
      align-items: center;
      background-color: var(--color-white);
    }

    .author-avatar-stub {
      width: 60px;
      height: 60px;
      background-color: rgba(30, 30, 30, 0.05);
      border: 1px solid rgba(30, 30, 30, 0.1);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--color-primary);
    }

    .author-bio-details h4 {
      font-size: 1.1rem;
      margin-bottom: 4px;
    }

    .author-bio-details p {
      font-size: 0.8rem;
      color: #666;
      line-height: 1.5;
    }

    @media (max-width: 600px) {
      .article-title {
        font-size: 1.75rem;
      }
      .article-featured-image {
        height: 250px;
      }
      .article-author-card {
        flex-direction: column;
        text-align: center;
      }
    }
  `}</style>
);
