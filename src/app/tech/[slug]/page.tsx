"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";

interface BlogContent {
  title: string;
  description: string;
  image: string;
  content: string;
}

const techArticles: { [key: string]: BlogContent } = {
  "ai-ml": {
    title: "Artificial Intelligence & Machine Learning: Transforming the Future",
    description:
      "Artificial Intelligence (AI) and Machine Learning (ML) are transforming industries and reshaping the world. AI enables machines to replicate human intelligence, while ML allows systems to learn from data and improve over time. This article explores the latest advancements, applications, and key differences between AI and ML in 2025 and beyond.",
    image: "/image/blog10.jpg",
    content: `
      **What is Artificial Intelligence (AI)?**

      Artificial Intelligence refers to the simulation of human intelligence in machines designed to think, learn, and make decisions. AI spans a broad spectrum, from narrow AI, which excels in specific tasks, to general AI, capable of performing any intellectual task a human can do. Modern AI technologies include natural language processing (NLP), computer vision, robotics, and generative AI systems like ChatGPT.

      **What is Machine Learning (ML)?**

      Machine Learning, a subset of AI, focuses on creating algorithms and models that enable machines to learn and improve from data. ML eliminates the need for explicit programming by analyzing patterns and making predictions. Popular ML methods include supervised learning, unsupervised learning, reinforcement learning, and deep learning.

      **Key Advancements in AI and ML (2025)**

      1. **Generative AI**: Tools like ChatGPT and DALL·E are revolutionizing content creation, enabling the generation of text, images, and even music with unprecedented realism.
      2. **Edge AI**: AI computation is shifting from centralized cloud systems to edge devices like smartphones and IoT sensors, enabling faster and more efficient real-time decision-making.
      3. **Explainable AI (XAI)**: With increasing AI adoption, XAI ensures that AI decisions are transparent, interpretable, and ethical.
      4. **ML Automation (AutoML)**: AutoML tools simplify model development, making ML accessible to non-experts while improving efficiency.
      5. **AI Ethics and Regulation**: Governments and organizations are increasingly focusing on ethical AI, addressing issues like bias, privacy, and fairness.

      **Differences Between AI and ML**

      - **Scope**: AI is the broader concept of building intelligent systems, while ML is a specialized approach focused on learning from data.
      - **Functionality**: AI systems can include rule-based logic and reasoning, whereas ML relies on statistical methods to identify patterns and make predictions.
      - **Applications**: AI encompasses fields like robotics and NLP, while ML powers specific applications such as fraud detection, recommendation systems, and predictive analytics.

      **Applications of AI and ML in 2025**

      1. **Healthcare**: AI-driven diagnostic tools and ML-based drug discovery are transforming patient care and medical research.
      2. **Finance**: ML algorithms detect fraudulent transactions and optimize investment strategies.
      3. **Transportation**: AI powers autonomous vehicles and traffic management systems, improving efficiency and safety.
      4. **Retail**: AI-enhanced chatbots, demand forecasting, and personalized shopping experiences are reshaping the retail landscape.
      5. **Education**: AI tutors and adaptive learning platforms personalize education to individual student needs.

      **Future Trends**

      1. **Hyperautomation**: Combining AI, ML, and robotics to automate complex workflows and decision-making processes.
      2. **AI-Augmented Creativity**: Expanding human creativity in fields like art, design, and storytelling.
      3. **Human-Centric AI**: Focusing on AI that enhances human capabilities and ensures inclusivity and accessibility.

      **Conclusion**

      Artificial Intelligence and Machine Learning are no longer futuristic concepts; they are central to innovation across industries. As we advance into 2025, understanding AI and ML is essential for navigating the rapidly evolving technological landscape. Embracing these technologies will unlock new opportunities, drive productivity, and redefine the future of work and life.

    `,
  },
  "quantum-computing": {
    title: "The Quantum Leap: Exploring Quantum Computing",
    description: 
        "Quantum computing represents the next frontier in computational power, leveraging the principles of quantum mechanics to solve problems beyond the reach of classical computers. From revolutionizing cryptography to transforming drug discovery, quantum computing is poised to reshape industries and address some of the most complex challenges of our time.",
    image: "/image/blog12.jpg",
    content: `
        What is Quantum Computing?

Quantum computing is a revolutionary technology that harnesses the principles of quantum mechanics—superposition, entanglement, and quantum interference—to process information. Unlike classical computers that use bits (0 or 1), quantum computers use qubits, which can exist in multiple states simultaneously. This enables them to perform complex calculations at unprecedented speeds.

Key Features of Quantum Computing

1. **Superposition**: Qubits can exist in multiple states at once, enabling parallel computations that vastly outpace classical systems.
2. **Entanglement**: Qubits can be interdependent regardless of distance, allowing for highly efficient data processing and communication.
3. **Quantum Interference**: Quantum algorithms exploit interference patterns to enhance computational accuracy and reduce errors.

Applications of Quantum Computing

1. **Cryptography and Cybersecurity**:
   - Quantum computers could break current encryption methods, posing challenges for data security.
   - Quantum-safe cryptography is being developed to ensure secure communication in the quantum era.

2. **Drug Discovery and Healthcare**:
   - Quantum computers can simulate molecular interactions at an atomic level, speeding up drug discovery.
   - They enable personalized medicine by modeling genetic data more efficiently.

3. **Artificial Intelligence and Machine Learning**:
   - Quantum machine learning accelerates data processing and improves optimization tasks.
   - It enhances natural language processing, image recognition, and predictive analytics.

4. **Optimization and Logistics**:
   - Quantum algorithms can solve complex optimization problems in supply chain management, transportation, and scheduling.
   - Industries like aviation and e-commerce benefit from more efficient route planning and resource allocation.

5. **Climate Modeling and Energy**:
   - Quantum computers can model intricate climate systems to predict environmental changes more accurately.
   - They also aid in optimizing renewable energy grids and battery technology.

Challenges in Quantum Computing

1. **Hardware Limitations**:
   - Qubits are highly sensitive to environmental disturbances, causing errors in computations.
   - Quantum systems require ultra-cold environments and precise engineering to maintain stability.

2. **Quantum Error Correction**:
   - Errors in quantum states must be corrected without disrupting the system, adding layers of complexity.

3. **Scalability**:
   - Building quantum computers with thousands or millions of stable qubits is a significant hurdle.

4. **Quantum Algorithms**:
   - While a few algorithms, like Shor's and Grover's, have demonstrated quantum advantage, developing more use-case-specific algorithms remains a challenge.

Future of Quantum Computing

The next decade promises breakthroughs in quantum hardware, software, and applications:
- Companies like IBM, Google, and Microsoft are leading the charge in developing scalable quantum systems.
- Hybrid quantum-classical computing models are emerging, combining the strengths of both technologies.
- Governments and industries worldwide are investing in quantum research to maintain a competitive edge.

Conclusion

Quantum computing is not just an incremental improvement—it's a paradigm shift that will redefine the boundaries of computation. While challenges remain, the rapid advancements in this field point toward a future where quantum systems will solve problems once thought impossible, revolutionizing industries and addressing global challenges.
    `,
},
  "iot-explained": {
    title: "Understanding the Internet of Things (IoT)",
    description:
      "The Internet of Things (IoT) is transforming the way we interact with technology, connecting billions of devices to streamline processes, improve efficiency, and enhance daily life. By enabling seamless communication between smart devices and systems, IoT is reshaping industries, homes, and cities worldwide.",
    image: "/image/blog14.jpg",
    content: `
      What is the Internet of Things (IoT)?

The Internet of Things (IoT) refers to a network of interconnected physical devices embedded with sensors, software, and other technologies that allow them to collect, exchange, and analyze data over the internet. These devices range from everyday objects like smart home appliances and wearables to industrial machinery and smart city infrastructure.

How IoT Works

IoT devices communicate through sensors and internet connectivity. Data is collected from the physical environment, transmitted to cloud-based platforms for processing, and then used to trigger actions or provide insights. For instance, a smart thermostat adjusts a home’s temperature based on the user's habits, while industrial IoT sensors monitor equipment performance to predict maintenance needs.

Applications of IoT Across Industries

1. Smart Homes:
   IoT enables home automation through devices like smart thermostats, lights, and security cameras. These systems offer convenience, energy efficiency, and enhanced security.

2. Healthcare:
   IoT-powered wearable devices monitor vital signs in real-time, enabling remote patient care and early detection of health issues. IoT also supports advanced healthcare solutions, like connected medical devices and automated medication dispensers.

3. Industrial IoT (IIoT):
   In manufacturing and logistics, IoT optimizes supply chains, tracks assets, and enables predictive maintenance to reduce downtime and increase efficiency.

4. Smart Cities:
   IoT enhances urban living by enabling smart traffic management, waste disposal, and energy-efficient systems, improving sustainability and quality of life.

5. Agriculture:
   IoT helps monitor soil moisture, weather conditions, and crop health, allowing farmers to optimize irrigation and increase yield while reducing waste.

Benefits of IoT

- Enhanced Efficiency: Automation and real-time monitoring improve operational efficiency and reduce human intervention.
- Data-Driven Insights: IoT generates valuable data to optimize processes and decision-making.
- Improved Quality of Life: IoT applications in healthcare, smart homes, and cities improve convenience, safety, and well-being.

Challenges of IoT Adoption

1. Security and Privacy:
   With billions of connected devices, safeguarding sensitive data and preventing cyberattacks is a significant challenge.

2. Interoperability:
   Ensuring compatibility between various IoT devices and platforms is critical for seamless communication and integration.

3. Scalability:
   As IoT networks grow, managing large volumes of data and devices becomes increasingly complex.

Conclusion

The Internet of Things is revolutionizing industries and daily life by creating a seamlessly connected world. Despite challenges like security and scalability, the rapid advancements in IoT technology promise a future where smart devices and systems enhance efficiency, sustainability, and convenience on an unprecedented scale.
    `,
  },
};
export default function TechArticleDetails() {
  const { slug } = useParams();
  const article = slug ? techArticles[slug as string] : null;

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

  const handleCommentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newComment.trim() && userName.trim()) {
      const newCommentObj = {
        id: Math.random().toString(36).substr(2, 9),
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
    setComments(updatedComments);
    localStorage.setItem("blog-comments", JSON.stringify(updatedComments));
  };

  const handleEditComment = (id: string, newText: string) => {
    const updatedComments = comments.map((comment) =>
      comment.id === id ? { ...comment, text: newText } : comment
    );
    setComments(updatedComments);
    localStorage.setItem("blog-comments", JSON.stringify(updatedComments));
  };

  if (!article) {
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
          {article.title}
        </h1>
        <Image
          src={article.image}
          alt={article.title}
          width={800}
          height={400}
          className="w-full h-auto rounded-md shadow-md mb-6"
        />
        <p className="text-lg text-gray-600 mb-4">{article.description}</p>
        <p className="text-lg text-gray-700 whitespace-pre-line">
          {article.content}
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
}
