"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Tech: React.FC = () => {
  const techArticles = [
    {
      title: "Artificial Intelligence & Machine Learning: Transforming the Future",
      description:
        "Artificial Intelligence (AI) and Machine Learning (ML) are transforming industries and reshaping the world. AI enables machines to replicate human intelligence, while ML allows systems to learn from data and improve over time. This article explores the latest advancements, applications, and key differences between AI and ML in 2025 and beyond.",
      slug: "ai-ml",
      image: "/image/blog9.jpg",

    },
    {
      title: "The Quantum Leap: Exploring Quantum Computing.",
      description:
        "Quantum computing leverages quantum mechanics to solve problems impossible for classical computers, revolutionizing fields like cryptography and drug discovery while reshaping industries worldwide.",
      slug: "quantum-computing",
      image: "/image/blog11.jpg",
      },
    {
      title: "Understanding the Internet of Things (IoT)",
      description:
        "The Internet of Things (IoT) is transforming the way we interact with technology, connecting billions of devices to streamline processes, improve efficiency, and enhance daily life. By enabling seamless communication between smart devices and systems, IoT is reshaping industries, homes, and cities worldwide.",
      slug: "iot-explained",
      image: "/image/blog13.png",
   },
  ];

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Technology Articles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {techArticles.map((article, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
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
              href={`/tech/${article.slug}`}
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

export default Tech;
