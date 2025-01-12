"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import React, { useState, useEffect } from "react";

interface BlogContent {
  title: string;
  description: string;
  image: string;
  content: string;
}

const blogData: { [key: string]: BlogContent } = {
  "ai-tools": {
    title: "Revolutionary AI Tools Transforming 2025",
    description:
      "Explore the most advanced AI tools of 2025, empowering innovation, automation, and creativity across industries. Stay ahead with cutting-edge technology!",
    image: "/image/blog44.jpg",
    content: `
      1. ChatGPT 5: The Evolution of Conversational AI

The latest iteration of ChatGPT, powered by OpenAI's GPT-5, has set new benchmarks in natural language processing. With improved context understanding, real-time learning, and multi-lingual capabilities, it is revolutionizing customer support, education, and content creation.

Key Features:
- Dynamic, real-time responses
- Advanced emotional intelligence in conversations
- Industry-specific customization options

Applications include AI-driven tutoring, personalized marketing campaigns, and seamless virtual assistants.

2. MidJourney X: Redefining Creativity in AI Art

MidJourney X takes AI-generated art to the next level with hyper-realistic image synthesis and advanced customization. From concept art to full-scale commercial design, this tool caters to creative professionals and businesses alike.

Innovations:
- Support for complex multi-prompt projects
- Real-time collaboration in art generation
- Ultra-high-resolution outputs for professional use

This tool empowers artists, designers, and marketers to create unique visual narratives with ease.

3. PyTorch 3.0: Simplifying Deep Learning

PyTorch 3.0 builds upon its legacy as a versatile, open-source framework for machine learning. With enhanced performance and streamlined APIs, it is the go-to platform for developing AI models in academia and industry.

Highlights:
- Integrated support for edge computing and IoT
- Real-time inference capabilities
- Simplified model deployment workflows

PyTorch 3.0 is driving innovation in autonomous vehicles, predictive analytics, and healthcare solutions.

4. Synthesia Pro: AI-Powered Video Creation

Synthesia Pro allows users to create realistic AI-generated videos with customizable avatars, voices, and scripts. This tool is ideal for corporate training, e-learning, and digital marketing.

Why Choose Synthesia Pro?
- Multi-language video generation
- Realistic avatars with lifelike expressions
- Integration with popular content platforms

With Synthesia Pro, businesses can scale their video production without compromising quality.

5. AutoML 2025: Democratizing Machine Learning

Google's AutoML 2025 has made AI accessible to non-experts by automating the model-building process. From small startups to large enterprises, anyone can leverage machine learning without extensive coding knowledge.

Core Features:
- Pre-trained models for rapid deployment
- Explainable AI insights for transparency
- Seamless integration with cloud ecosystems

AutoML is empowering businesses to make data-driven decisions faster and more efficiently.

Conclusion

The AI tools of 2025 are pushing the boundaries of innovation, making technology more accessible, efficient, and impactful. From creating stunning visuals to building advanced machine learning models, these tools are transforming industries and redefining possibilities. Embrace these advancements and unlock new potentials for your business or creative projects today.
    `,
  },

"Blockchain": {
  title: "Blockchain: Transforming Industries in 2025",
  description:
    "Blockchain technology has evolved beyond cryptocurrencies to become a foundational technology transforming industries worldwide. From finance to healthcare, supply chain management to digital identity, blockchain is revolutionizing how data is managed, secured, and shared. In this article, we delve into the latest advancements in blockchain technology, its applications, and the challenges shaping its adoption in 2025.",
  image: "/image/blog6.jpg",
  content: `
    What is Blockchain?

    Blockchain is a decentralized, distributed ledger technology that records transactions across multiple computers in a way that ensures security, transparency, and immutability. Each block contains a record of transactions, and these blocks are linked together in a chain. Once a block is added to the blockchain, its data cannot be altered without altering all subsequent blocks, making the system highly secure.

    Key Features of Blockchain:
    - **Decentralization**: No single authority controls the data, reducing the risk of centralized failures.
    - **Transparency**: Transactions are visible to all participants, ensuring accountability.
    - **Immutability**: Once recorded, data on the blockchain cannot be changed.

    Latest Advancements in Blockchain Technology

    1. **Scalability Solutions**

    As blockchain adoption grows, scalability has been a critical focus for developers. Layer-2 solutions, such as rollups and sidechains, have emerged to handle higher transaction volumes while reducing costs. These solutions work alongside primary blockchains like Ethereum, enabling faster and more efficient operations.

    Another major advancement is the implementation of sharding, a process that splits the blockchain into smaller partitions (shards) to process transactions in parallel, significantly enhancing speed and scalability.

    2. **Integration with Artificial Intelligence (AI)**

    Blockchain and AI are increasingly being integrated to unlock new possibilities. AI algorithms can analyze vast amounts of blockchain data to identify patterns, detect fraud, and optimize smart contracts. Conversely, blockchain ensures the integrity and security of AI-generated data, providing a trust layer for AI-driven applications.

    3. **Decentralized Finance (DeFi) Evolution**

    DeFi continues to disrupt traditional finance by offering decentralized alternatives to banking, lending, and trading. Innovations such as yield farming, staking, and decentralized exchanges (DEXs) are becoming more sophisticated, attracting both retail and institutional investors. Cross-chain interoperability is also improving, allowing seamless asset transfers across different blockchains.

    4. **Sustainability in Blockchain**

    Environmental concerns have led to the rise of energy-efficient consensus mechanisms. Proof of Stake (PoS) is gaining traction as an eco-friendly alternative to Proof of Work (PoW), significantly reducing energy consumption. Major blockchains like Ethereum have transitioned to PoS, setting a new standard for sustainable blockchain practices.

    5. **Tokenization of Assets**

    The tokenization of real-world assets is revolutionizing industries such as real estate, art, and supply chain. Blockchain enables fractional ownership, liquidity, and transparency, making asset management more accessible. Non-fungible tokens (NFTs) are also evolving, moving beyond art and collectibles into areas like intellectual property and digital identity.

    Applications of Blockchain in 2025

    1. **Supply Chain Management**

    Blockchain ensures transparency and traceability in supply chains. By recording every transaction and movement of goods on a blockchain, businesses can prevent fraud, reduce inefficiencies, and enhance consumer trust. For instance, blockchain is used to verify the authenticity of products like pharmaceuticals and luxury goods.

    2. **Healthcare**

    Blockchain is transforming healthcare by providing secure and interoperable electronic health records (EHRs). Patients can control their data and share it with healthcare providers as needed. Additionally, blockchain ensures the integrity of clinical trials and pharmaceutical supply chains.

    3. **Digital Identity**

    Blockchain-based digital identity solutions empower individuals to own and control their personal data. These solutions enhance privacy, reduce identity theft, and simplify verification processes in sectors like finance, travel, and government services.

    4. **Finance and Banking**

    Beyond cryptocurrencies, blockchain is streamlining cross-border payments, reducing costs and transaction times. Central Bank Digital Currencies (CBDCs) are being developed by several nations, leveraging blockchain to create secure and efficient digital currencies.

    5. **Gaming and Metaverse**

    Blockchain is integral to the growth of the metaverse and gaming industries. It enables ownership of digital assets, interoperability across virtual worlds, and secure marketplaces for buying, selling, and trading in-game items.

    Challenges Facing Blockchain Adoption

    1. **Regulatory Uncertainty**

    The lack of clear regulations continues to hinder blockchain adoption. Governments worldwide are working to establish frameworks for cryptocurrencies, NFTs, and blockchain applications, but the pace of regulation varies across regions.

    2. **Interoperability Issues**

    With numerous blockchain platforms emerging, ensuring compatibility and seamless data sharing across chains remains a challenge. Cross-chain solutions and standards are critical for fostering interoperability.

    3. **User Adoption and Education**

    Many potential users are still unfamiliar with blockchain technology. Simplifying user interfaces and providing educational resources are essential to drive adoption among non-technical users.

    4. **Scalability and Performance**

    Despite advancements, scalability and performance limitations persist in some blockchain networks. Continued innovation and infrastructure improvements are necessary to support mass adoption.

    Conclusion

    Blockchain technology is rapidly evolving, offering transformative solutions across industries. As scalability, sustainability, and interoperability improve, blockchain is set to become an integral part of our digital future. By addressing challenges and embracing innovation, businesses and individuals can unlock the full potential of this groundbreaking technology.
  `,
},  
 "5g-and-next-gen-connectivity": {
    title: "5G and Next-Gen Connectivity (6G)",
    description:
      "5G has transformed the way we connect and communicate, enabling ultra-fast speeds, low latency, and massive device connectivity. But as we embrace 5G globally, the next frontier, 6G, is already on the horizon, promising revolutionary advancements in connectivity. This article explores the current state of 5G, its applications, and what the next generation of connectivity, 6G, holds for the future.",
    image: "/image/blog8.png",
    content: `
      What is 5G?

5G, the fifth generation of wireless technology, offers significant improvements over its predecessor, 4G LTE. It provides faster data speeds (up to 10 Gbps), ultra-low latency (as low as 1 millisecond), and the ability to connect millions of devices per square kilometer. This technology powers applications that were previously unimaginable, such as real-time remote surgeries, autonomous vehicles, and smart cities.

The Three Pillars of 5G:
1. **Enhanced Mobile Broadband (eMBB):** Enables high-speed internet for applications like 4K streaming, AR/VR, and cloud gaming.
2. **Ultra-Reliable Low Latency Communication (URLLC):** Powers mission-critical applications like autonomous driving and industrial automation.
3. **Massive Machine-Type Communication (mMTC):** Supports IoT ecosystems with billions of connected devices.

Applications of 5G

1. **Autonomous Vehicles:** 5G’s low latency enables real-time communication between vehicles and infrastructure, ensuring safer and more efficient transportation.
2. **Healthcare:** Remote surgeries, real-time patient monitoring, and telemedicine are made possible with 5G’s high-speed and reliable connectivity.
3. **Smart Cities:** 5G powers smart grids, traffic management systems, and connected public services, creating more sustainable urban environments.
4. **Augmented Reality (AR) and Virtual Reality (VR):** With faster speeds and lower latency, 5G enhances immersive experiences in gaming, training, and education.
5. **Industrial IoT:** Enables real-time monitoring and automation in manufacturing and supply chains, improving efficiency and reducing costs.

The Future of Connectivity: 6G

While 5G continues to roll out globally, researchers and technologists are already looking ahead to 6G, expected to launch commercially around 2030. 6G will build upon 5G’s foundation and introduce groundbreaking advancements in wireless technology.

Key Features of 6G:
1. **Terahertz (THz) Frequency Bands:** 6G will operate on higher frequency bands, enabling data rates up to 1 Tbps (terabits per second).
2. **Sub-Millisecond Latency:** Further reducing latency to enable seamless real-time applications.
3. **AI-Driven Networks:** Artificial intelligence will play a central role in optimizing network performance, predicting demand, and enhancing user experiences.
4. **Holographic Communication:** 6G will make holographic calls and immersive telepresence a reality, revolutionizing how we communicate.
5. **Massive Connectivity:** 6G will support even more devices, facilitating advanced IoT ecosystems and smart environments.

Potential Applications of 6G

1. **Digital Twins:** 6G will enable real-time synchronization of digital twins for industries like healthcare, manufacturing, and urban planning.
2. **Space-Based Connectivity:** Satellite networks integrated with 6G will provide global coverage, including remote and underserved areas.
3. **Brain-Computer Interfaces (BCIs):** Ultra-low latency and high data rates will support direct communication between human brains and devices, opening new possibilities in healthcare and technology.
4. **Environmental Monitoring:** 6G sensors will monitor environmental changes in real-time, aiding in climate change mitigation and disaster response.
5. **Quantum Communication:** Integration with quantum technologies will ensure ultra-secure communication networks.

Challenges in 5G and 6G Development

1. **Infrastructure Costs:** Deploying 5G and preparing for 6G requires significant investment in infrastructure, including small cells, antennas, and fiber-optic networks.
2. **Spectrum Availability:** Higher frequency bands for 6G require global coordination to allocate and regulate spectrum usage.
3. **Energy Consumption:** Ensuring energy efficiency in 5G and 6G networks is critical to reducing environmental impact.
4. **Security and Privacy:** Advanced networks must address new cybersecurity threats and ensure data privacy for users.

Conclusion

5G has already transformed industries and everyday life, but the promise of 6G holds even greater potential. As we continue to push the boundaries of connectivity, the future of wireless technology will unlock new possibilities for innovation, productivity, and global collaboration. By addressing the challenges and embracing the opportunities, 5G and 6G will shape the next decade and beyond.
 `,
  },
 
};

const BlogPage: React.FC = () => {
  const { slug } = useParams();
  const blog = slug ? blogData[slug as string] : null;

  // State for comments and form inputs
  const [comments, setComments] = useState<
    {
      id: string;
      name: string;
      text: string;
    }[]
  >([]);
  const [newComment, setNewComment] = useState<string>("");
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    const savedComments = localStorage.getItem("blog-comments");
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, []);

  useEffect(() => {
    if (comments.length > 0) {
      localStorage.setItem("blog-comments", JSON.stringify(comments));
    }
  }, [comments]);

  // Handle form submission
  const handleCommentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newComment.trim() && userName.trim()) {
      const newCommentObj = {
        id: Math.random().toString(36).substr(2, 9), // Unique ID for each comment
        name: userName.trim(),
        text: newComment.trim(),
      };
      const updatedComments = [...comments, newCommentObj];
      setComments(updatedComments);
      setNewComment("");
      setUserName("");
    } else {
      alert("Please fill in both name and comment.");
    }
  };

  const handleDeleteComment = (id: string) => {
    const updatedComments = comments.filter((comment) => comment.id !== id);
    setComments(updatedComments); // Update state
    localStorage.setItem("blog-comments", JSON.stringify(updatedComments)); // Update localStorage
  };

  const handleEditComment = (id: string, newText: string) => {
    const updatedComments = comments.map((comment) =>
      comment.id === id ? { ...comment, text: newText } : comment
    );
    setComments(updatedComments);
    localStorage.setItem("blog-comments", JSON.stringify(updatedComments)); // Update localStorage
  };

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center ">
        <p className="text-lg text-gray-700">
          Blog not found. Please check the URL.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-gray-50 shadow-lg rounded-lg p-8 ">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
          {blog.title}
        </h1>
        <Image
          src={blog.image}
          alt={blog.title}
          width={800}
          height={400}
          className="w-full h-auto rounded-md shadow-md mb-6"
        />
        <p className="text-lg text-gray-600 mb-4">{blog.description}</p>
        <p className="text-lg text-gray-700 whitespace-pre-line">
          {blog.content}
        </p>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Comments
          </h2>

          <div className="space-y-6">
            {comments.length > 0 ? (
              comments.map((comment) => (
                <div
                  key={comment.id}
                  className="p-4 sm:p-6 bg-gray-100 rounded-lg shadow-sm text-gray-800"
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start space-y-4 sm:space-y-0">
                    <div>
                      <p className="font-medium text-gray-700">
                        {comment.name}
                      </p>
                      <p className="text-gray-600 text-sm">{comment.text}</p>
                    </div>
                    <div className="flex justify-between sm:justify-end space-x-4 text-sm">
                      <button
                        onClick={() => handleDeleteComment(comment.id)}
                        className="text-red-600 hover:underline transition"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => {
                          const editedText = prompt(
                            "Edit your comment:",
                            comment.text
                          );
                          if (editedText !== null) {
                            handleEditComment(comment.id, editedText);
                          }
                        }}
                        className="text-blue-600 hover:underline transition"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-600">
                No comments yet. Be the first to comment!
              </p>
            )}
          </div>

          <form
            onSubmit={handleCommentSubmit}
            className="mt-8 bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-600"
          >
            <div className="mb-6">
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Your name or email"
                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="mb-6">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Write a comment..."
                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows={5}
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Post Comment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
