import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Lightbox({ isOpen, images, activeIndex, onClose, onPrev, onNext }) {
  
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onPrev, onNext, onClose]);

  if (!isOpen || activeIndex === null || !images || images.length === 0) return null;

  const currentImg = images[activeIndex];

  return (
    <div className="lightbox-overlay">
      <button className="lightbox-close-btn" onClick={onClose} aria-label="Close lightbox">
        <X size={32} />
      </button>

      <button className="lightbox-nav-btn prev" onClick={onPrev} aria-label="Previous image">
        <ChevronLeft size={40} />
      </button>

      <div className="lightbox-image-container">
        <img src={currentImg.url} alt={currentImg.title} className="lightbox-img" />
        <div className="lightbox-caption">
          <span className="lightbox-category">{currentImg.category}</span>
          <h4 className="lightbox-title">{currentImg.title}</h4>
        </div>
      </div>

      <button className="lightbox-nav-btn next" onClick={onNext} aria-label="Next image">
        <ChevronRight size={40} />
      </button>

      <style>{`
        .lightbox-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(27, 27, 27, 0.96);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lightbox-close-btn {
          position: absolute;
          top: 30px;
          right: 30px;
          background: none;
          border: none;
          color: var(--color-white);
          cursor: pointer;
          transition: var(--transition-fast);
          z-index: 2010;
        }

        .lightbox-close-btn:hover {
          color: var(--color-secondary);
          transform: rotate(90deg);
        }

        .lightbox-nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--color-white);
          cursor: pointer;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-smooth);
          z-index: 2010;
        }

        .lightbox-nav-btn:hover {
          background-color: var(--color-secondary);
          border-color: var(--color-secondary);
        }

        .lightbox-nav-btn.prev {
          left: 40px;
        }

        .lightbox-nav-btn.next {
          right: 40px;
        }

        .lightbox-image-container {
          max-width: 80%;
          max-height: 80%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
        }

        .lightbox-img {
          max-width: 100%;
          max-height: 70vh;
          object-fit: contain;
          border-radius: 4px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.5);
          border: 2px solid rgba(255, 255, 255, 0.05);
        }

        .lightbox-caption {
          text-align: center;
          color: var(--color-white);
          font-family: var(--font-body);
        }

        .lightbox-category {
          color: var(--color-secondary);
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 600;
          display: block;
          margin-bottom: 4px;
        }

        .lightbox-title {
          font-family: var(--font-headings);
          font-size: 1.35rem;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .lightbox-nav-btn {
            width: 45px;
            height: 45px;
          }
          .lightbox-nav-btn.prev {
            left: 10px;
          }
          .lightbox-nav-btn.next {
            right: 10px;
          }
          .lightbox-image-container {
            max-width: 90%;
          }
          .lightbox-img {
            max-height: 60vh;
          }
          .lightbox-title {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </div>
  );
}
