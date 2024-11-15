"use client";

import Link from 'next/link';
import BlochSphere from './blochsphere';
import Image from 'next/image';
import './globals.css';
import { useEffect, useState } from 'react';

// Custom hook to detect mobile screens
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile;
}

export default function Layout({ children }) {
  const isMobile = useIsMobile();

  return (
    <html lang="en">
      <body>
        <div className="layout-container">
          <main className="main-content">
            <header className="header">
              <h1 className="blog-title">
                <Link href="/">Mark Deaconu</Link> {/* Link to homepage */}
              </h1>
              <div className="social-links">
                <a
                  href="https://github.com/MarkNDeaconu"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src="/images/githublogo2.png" alt="GitHub" width={24} height={24} />
                </a>
                <a
                  href="https://www.youtube.com/@markdeaconu1245"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src="/images/youtubelogo2.webp" alt="YouTube" width={24} height={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/mark-deaconu-621b44220/"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src="/images/linkedinlogo.webp" alt="LinkedIn" width={24} height={24} />
                </a>
              </div>
            </header>
            <div className="container">{children}</div>
          </main>
          {!isMobile && ( // Render Bloch Spheres only for non-mobile users
            <div className="bloch-sphere">
              <BlochSphere />
            </div>
          )}
        </div>
      </body>
    </html>
  );
}
















