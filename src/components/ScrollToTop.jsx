import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // If navigating to the contact page with a selected service, bypass reset
    if (location.state?.selectedService) {
      return;
    }
    // Scroll window, documentElement and body to absolute top instantly
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.documentElement.scrollTo(0, 0);
    document.body.scrollTo(0, 0);
  }, [location.pathname, location.state]);

  return null;
}
