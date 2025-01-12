"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const LatestBlogs: React.FC = () => {
  const latestBlogs = [
    {
      title: "The Cutting-Edge of AI: Transforming the Future",
      description:
        "Unveil the latest advancements in AI shaping the future, revolutionizing industries, and redefining possibilities.",
      link: "/blog/ai-revolution",
      slug: "ai-revolution",
      image: "/image/blog1.jpg",
      
    },
    {
      title: "The Future of Work: Trends in a Hyperconnected World",
      description:
        "Explore emerging trends reshaping work in a hyperconnected world, from remote collaboration to AI-driven innovation.",
      link: "/blog/future-of-work",
      slug: "future-of-work",
      image: "/image/blog2.jpg",
      content: `
      As digital tools transform the workplace, this blog examines trends like remote work, AI integration, and new career opportunities.
    `,
    },
    {
      title: "Emerging Cybersecurity Frontiers: Challenges and Innovations in 2025",
      description: "Discover the key trends and strategies redefining cybersecurity in 2025.",
      link: "/blog/cybersecurity-trends",
      slug: "cybersecurity-trends",
      image: "/image/blog3.jpg",
      content: `
      With evolving threats, cybersecurity is more critical than ever. Discover key trends and best practices for 2024.
    `,
    },
  ];

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8 ">
      <h1 className="text-3xl font-bold mb-6">Latest Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {latestBlogs.map((blog, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
            <Image
              src={blog.image}
              alt={blog.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
            <p className="text-gray-600 mb-4">{blog.description}</p>
            <Link
              href={`/latest/${blog.slug}`}
              className="text-blue-500 hover:underline"
            >
              Read more
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestBlogs;
