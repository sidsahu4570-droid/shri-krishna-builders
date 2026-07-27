import React from 'react';
import { Link } from 'react-router-dom';
import { useProperties } from '../context/PropertyContext';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';

export default function Blogs() {
  const { blogs } = useProperties();

  return (
    <div className="blogs-page-wrapper">
      {/* Banner */}
      <section className="blogs-banner-header">
        <div className="blogs-banner-overlay"></div>
        <div className="container banner-text-centered">
          <span className="subtitle-premium">INSIGHTS & GUIDES</span>
          <h1>Latest Real Estate Blogs</h1>
          <p>Read about Indore real estate investment, modern architecture trends, legal requirements, and home styling tips.</p>
        </div>
      </section>

      {/* Blogs Grid */}
      <section className="section blogs-grid-sec">
        <div className="container">
          <div className="grid-3" style={{ rowGap: '3rem' }}>
            {blogs.map((post) => (
              <article key={post.id} className="card-premium blog-card-item">
                <div className="blog-card-img-box">
                  <img src={post.image} alt={post.title} className="zoom-hover-target" />
                  <span className="blog-cat-badge">{post.category}</span>
                </div>

                <div className="blog-card-body-box">
                  <div className="blog-meta-row">
                    <span className="meta-unit"><Calendar size={14} /> {post.date}</span>
                    <span className="meta-unit"><Clock size={14} /> {post.readTime}</span>
                  </div>
                  <h3 className="blog-title-h3">
                    <Link to={`/blogs/${post.id}`}>{post.title}</Link>
                  </h3>
                  <p className="blog-summary-p">{post.summary}</p>
                  
                  <div className="blog-author-line">
                    <User size={14} className="author-icon" />
                    <span>By {post.author}</span>
                  </div>

                  <Link to={`/blogs/${post.id}`} className="btn btn-primary w-full read-post-btn">
                    <span>Read Full Post</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {styleTag}
    </div>
  );
}

const styleTag = (
  <style>{`
    .blogs-banner-header {
      height: 45vh;
      position: relative;
      background-image: url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80');
      background-size: cover;
      background-position: center;
      display: flex;
      align-items: center;
      color: var(--color-white);
    }

    .blogs-banner-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(30, 30, 30, 0.85);
    }

    /* Custom Blog cards layout */
    .blog-card-item {
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .blog-card-img-box {
      position: relative;
      height: 220px;
      overflow: hidden;
    }

    .blog-card-img-box img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .blog-cat-badge {
      position: absolute;
      top: 15px;
      right: 15px;
      background-color: var(--color-secondary);
      color: var(--color-white);
      font-size: 0.7rem;
      text-transform: uppercase;
      font-weight: 600;
      padding: 4px 10px;
      border-radius: 3px;
      letter-spacing: 1px;
    }

    .blog-card-body-box {
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 12px;
      flex-grow: 1;
      justify-content: space-between;
    }

    .blog-meta-row {
      display: flex;
      gap: 15px;
      font-size: 0.75rem;
      color: #777;
    }

    .meta-unit {
      display: flex;
      align-items: center;
      gap: 5px;
    }

    .blog-title-h3 {
      font-size: 1.2rem;
      line-height: 1.35;
      color: var(--color-dark);
    }

    .blog-title-h3 a:hover {
      color: var(--color-secondary);
    }

    .blog-summary-p {
      font-size: 0.85rem;
      color: #666;
      line-height: 1.5;
    }

    .blog-author-line {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 0.75rem;
      color: #888;
      border-top: 1px solid rgba(30, 30, 30, 0.05);
      padding-top: 10px;
    }

    .author-icon {
      color: var(--color-secondary);
    }

    .read-post-btn {
      width: 100%;
      justify-content: space-between;
      padding: 10px 20px;
      font-size: 0.8rem;
    }
  `}</style>
);
