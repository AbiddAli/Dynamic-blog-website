"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Article {
  title: string;
  description: string;
  slug: string;
  image: string;
}

const Highlighted: React.FC = () => {
  const [HighlightedArticles, setHighlightedArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const articles = [
        {
          title: "Revolutionary AI Tools Transforming 2025",
          description: "Explore the most advanced AI tools of 2025, empowering innovation, automation, and creativity across industries. Stay ahead with cutting-edge technology.",
          slug: "ai-tools",
          image: "/image/blog4.jpg",
        },
        {
          title: "Blockchain: Transforming Industries in 2025",
          description:
            "Blockchain is reshaping industries, offering secure, decentralized solutions for finance, healthcare, supply chains, and more. Explore its latest advancements and challenges in 2025.",
          slug: "Blockchain",
          image: "/image/blog5.jpg",
        },
        {
          title: "5G and Next-Gen Connectivity (6G)",
          description:
            "5G has revolutionized connectivity with ultra-fast speeds and low latency. As 6G emerges on the horizon, it promises groundbreaking advancements, redefining how we connect and communicate.",
          slug: "5g-and-next-gen-connectivity",
          image: "/image/blog7.png",
        },
      ];
      setHighlightedArticles(articles);
    };

    fetchArticles();
  }, []);

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Highlighted Articles</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {HighlightedArticles.length === 0 ? (
          <div className="col-span-3 text-center text-gray-600">
            Loading articles...
          </div>
        ) : (
          HighlightedArticles.map((article, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <Image
                src={article.image}
                alt={article.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="text-gray-600 mb-4">{article.description}</p>

              <Link
                href={`/highlight/${article.slug}`}
                className="text-blue-500 hover:underline"
              >
                Read more
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Highlighted;
