import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-300 text-black py-6">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="mr-9">
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p>
            We are a dedicated team committed to delivering timely and insightful coverage of the latest advancements in technology. Our goal is to empower our readers with the knowledge they need to stay informed and ahead in a rapidly evolving digital landscape.

            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li>About Us</li>
              <li>Contact</li>
              <li>Blog</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Section 3: Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link
                href="https://twitter.com"
                target="_blank"
                className="text-black hover:text-white"
              >
                Twitter
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                className="text-black hover:text-white"
              >
                Facebook
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="text-black hover:text-white"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center text-black">
          <p>
            &copy; {new Date().getFullYear()} Developed By Abid Ali. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
