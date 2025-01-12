"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

interface BlogContent {
  title: string;
  description: string;
  image: string;
  content: string;
}

const blogs: { [key: string]: BlogContent } = {
  "ai-revolution": {
    title: "The Cutting-Edge of AI: Transforming the Future",
    description:
      "Artificial Intelligence (AI) has evolved into a pivotal technology, driving innovation, efficiency, and transformation across all sectors. From generative AI to ethical considerations, discover how AI is shaping our future.",
    image: "/image/blog01.jpeg",
    content: `
       What is AI?

Artificial Intelligence (AI) is the development of machines and systems that can perform tasks requiring human intelligence. It encompasses a wide range of technologies that enable learning, reasoning, problem-solving, and decision-making. With recent advancements in deep learning, neural networks, and natural language models, AI is becoming more sophisticated and accessible than ever.

Key Advancements in AI:

1. Foundation Models:
Foundation models, such as OpenAI's GPT and Google's Bard, are large-scale, pre-trained AI systems that can be fine-tuned for diverse applications. These models power chatbots, content generation, customer support, and more.

2. Generative AI:
Generative AI tools create new content—text, images, music, and even code. Applications include tools like ChatGPT for conversational AI, DALL-E for image creation, and AlphaCode for programming assistance.

3. Multimodal AI:
Multimodal AI combines multiple data types, such as text, images, and audio, for more comprehensive insights and interactions. For example, OpenAI's GPT models now support multimodal functionalities.

4. Explainable AI (XAI):
Explainable AI focuses on transparency, ensuring users understand AI decisions. This is crucial for building trust, especially in industries like healthcare, finance, and law.

AI Applications Across Industries:

Healthcare:
1. **Drug Discovery**: AI accelerates drug discovery by analyzing biological data, predicting molecular interactions, and simulating drug trials.
2. **Precision Medicine**: AI tailors treatments based on individual genetic, environmental, and lifestyle factors, improving outcomes.
3. **Diagnostic Tools**: AI-driven systems detect diseases like cancer from medical imaging with exceptional accuracy.

Manufacturing:
1. **Smart Factories**: AI optimizes workflows, automates assembly lines, and enhances production efficiency through real-time data analysis.
2. **Predictive Maintenance**: Sensors and AI algorithms detect anomalies, minimizing downtime and preventing equipment failure.

Finance:
1. **Risk Assessment**: AI evaluates credit risk, fraud detection, and market volatility with unprecedented accuracy.
2. **Algorithmic Trading**: Real-time AI models execute trades at lightning speed, capitalizing on market patterns.

Retail:
1. **Hyper-Personalization**: AI enhances customer experiences by providing tailored recommendations and dynamic pricing.
2. **Supply Chain Optimization**: Real-time AI-driven demand forecasting streamlines inventory and logistics.

Transportation:
1. **Autonomous Vehicles**: AI powers self-driving cars and drones, enabling safer and more efficient transportation.
2. **Traffic Management**: AI optimizes traffic flow, reducing congestion and emissions in smart cities.

Emerging Trends and Challenges:
1. **AI Ethics**: Addressing bias, fairness, and ethical implications remains a critical challenge.
2. **Green AI**: Reducing the carbon footprint of AI models is becoming a key focus.
3. **Quantum AI**: Combining quantum computing with AI has the potential to solve problems previously deemed unsolvable.

Conclusion:
Artificial Intelligence is revolutionizing how we live and work. Its transformative impact spans across every industry, enabling smarter solutions, reducing inefficiencies, and opening new opportunities. As AI technology continues to advance, it is essential to address ethical and environmental challenges to ensure its benefits are accessible to all.
    `,
  },

  "future-of-work": {
    title: "The Future of Work: Trends in a Hyperconnected World",
    description:
      "Workplaces are undergoing a paradigm shift fueled by cutting-edge technologies, societal changes, and evolving expectations. Explore how AI, automation, hybrid work models, and a focus on well-being are shaping the future of work in the digital age.",
    image: "/image/blog02.jpg",
    content: `
      ### The Evolving Landscape of Work

The future of work is being shaped by rapid advancements in technology, globalization, and shifting workforce dynamics. Traditional employment models are giving way to innovative approaches that prioritize flexibility, creativity, and purpose. Here's how work is transforming in a hyperconnected world.

Hybrid Work Models

Beyond Remote Work:
The hybrid work model is emerging as the new norm, blending in-office and remote work to offer employees greater flexibility. Companies are designing adaptive policies to balance productivity with employee preferences. 

Tools and Technologies:
- **Unified Communication Platforms**: Tools like Microsoft Teams, Slack, and Zoom streamline collaboration.
- **Smart Office Spaces**: IoT-enabled workspaces optimize resource usage and improve employee experience.

Challenges:
Hybrid models require robust digital infrastructure, effective leadership, and strategies to maintain inclusivity and engagement for distributed teams.

The Rise of Digital Nomadism

Advances in connectivity and remote work tools have given rise to a new class of workers: digital nomads. These professionals leverage technology to work from anywhere, enabling a lifestyle that blends work and travel.

Key Enablers:
1. High-speed internet access in remote locations.
2. Platforms like Remote and Deel for cross-border payroll and compliance.
3. Co-working hubs and digital nomad communities.

AI and Automation in the Workforce

Intelligent Systems Driving Efficiency:
AI technologies, including generative AI and machine learning, are automating repetitive tasks, enhancing decision-making, and driving innovation. Examples include:
- **Generative AI**: Automates content creation, design, and code development.
- **Natural Language Processing**: Powers chatbots and sentiment analysis for enhanced customer experiences.

Collaborative AI:
AI is not just replacing human labor but augmenting it. Tools like GitHub Copilot assist developers, while AI-driven analytics platforms empower business leaders to make data-informed decisions.

Workforce Upskilling and Lifelong Learning

The accelerated pace of technological change has emphasized the importance of continuous learning. Workers must adapt by acquiring new skills and staying ahead of industry trends.

Strategies for Lifelong Learning:
1. **Microlearning Platforms**: Apps like Coursera and LinkedIn Learning offer bite-sized, targeted learning experiences.
2. **AI-Driven Personalization**: Adaptive learning systems tailor content to individual skill gaps.
3. **Corporate Training Programs**: Companies are investing in internal academies and partnerships with educational institutions.

Employee Well-being and Mental Health

A Holistic Approach:
Organizations are increasingly prioritizing employee well-being by integrating physical, mental, and emotional health into workplace culture.

Initiatives:
- Mental health support via apps like BetterUp and Calm.
- Flexible work arrangements to prevent burnout.
- Wellness stipends for fitness and healthy living.

The Gig Economy and Portfolio Careers

The gig economy continues to thrive, with professionals opting for portfolio careers that encompass multiple roles and projects instead of traditional 9-to-5 employment.

Drivers:
- Platforms like Upwork, Fiverr, and Toptal enable freelancers to connect with clients worldwide.
- Workers seek autonomy, variety, and control over their professional lives.

Challenges:
Freelancers face unique challenges, including inconsistent income, lack of benefits, and the need for self-promotion and financial planning.

Data-Driven Workplaces

Analytics for Decision-Making:
Big data and advanced analytics are revolutionizing workplace strategies by enabling:
1. Real-time monitoring of employee performance and engagement.
2. Predictive modeling for talent acquisition and retention.
3. Optimized resource allocation and productivity tracking.

Privacy Considerations:
As data usage increases, ensuring employee privacy and ethical data handling will be critical.

Immersive Technologies in Workspaces

AR and VR in the Workplace:
Augmented Reality (AR) and Virtual Reality (VR) are creating immersive experiences for:
- Virtual meetings and training sessions.
- Simulations for skill development and team-building.
- Enhanced customer interactions in sectors like retail and real estate.

Future Challenges and Opportunities

Addressing Inequality:
The digital divide and access to technology remain pressing issues. Bridging these gaps will be essential for creating equitable opportunities.

Ethical AI and Automation:
Ensuring fairness, transparency, and accountability in AI systems will define the future of ethical innovation.

Sustainability in Work Practices:
Green technologies and sustainable business practices will be at the forefront of future workplaces.

Conclusion

The future of work is dynamic, inclusive, and technology-driven. As organizations and workers adapt to these transformations, the focus must remain on fostering innovation, promoting well-being, and ensuring that the benefits of this new era are shared equitably. With the right strategies and tools, the future promises unparalleled opportunities for growth and collaboration.
    `,
  },

  
  "cybersecurity-trends": {
    "title": "Emerging Cybersecurity Frontiers: Challenges and Innovations in 2025",
    "description": "Stay ahead of the curve with the latest cybersecurity developments. Explore cutting-edge innovations, pressing challenges, and transformative strategies shaping digital security in 2025.",
    "image": "/image/blog03.jpg",
    "content": `
1. AI-Driven Defense Systems Take Center Stage

AI and machine learning are redefining the cybersecurity landscape in 2025, not only for detecting threats but also for predicting and preventing them. Cybersecurity solutions powered by AI are now capable of identifying anomalies and responding to attacks in real-time. Key advancements include:
- Behavioral Analytics: AI systems analyze user behavior patterns to detect insider threats or compromised accounts.
- Threat Intelligence Automation: Machine learning models process global threat data to provide actionable insights, enabling faster and more proactive responses.

As attackers also utilize AI for sophisticated breaches, a robust AI-first approach is no longer optional—it's essential.

2. Quantum Computing: The Next Cybersecurity Frontier

Quantum computing, once theoretical, is becoming a reality in 2025. While it holds transformative potential for industries, it also threatens traditional cryptographic protocols. The focus is now on:
- Post-Quantum Cryptography: Organizations are adopting algorithms resilient to quantum attacks to protect sensitive data.
- Quantum-Key Distribution (QKD): Secure communication channels using quantum principles are gaining traction for high-stakes industries like finance and defense.

Enterprises must urgently assess their cryptographic systems to prepare for the quantum leap.

3. RansomOps: Evolution of Ransomware Attacks

Ransomware attacks have evolved into "RansomOps," where attackers use sophisticated, persistent techniques to infiltrate organizations before launching targeted encryption and data exfiltration campaigns.
- Human-Operated Ransomware: These attacks bypass automated defenses by exploiting human vulnerabilities, including spear phishing and social engineering.
- Double and Triple Extortion: Beyond encryption, attackers threaten to leak sensitive data or disrupt critical infrastructure unless a ransom is paid.

Strategies like immutable backups, continuous endpoint monitoring, and robust incident response plans are crucial for mitigation.

4. Zero Trust Architecture Becomes the Norm

The zero-trust security model has become the gold standard in 2025. Its principles—verify everything, trust nothing—address the risks posed by remote work, hybrid environments, and increasingly sophisticated attacks. Features include:
- Identity-Centric Security: Strong identity verification methods, such as biometrics and passwordless authentication, are now baseline requirements.
- Dynamic Access Controls: Continuous validation of user privileges ensures the least-privilege access across networks.

The shift to zero trust has also fueled innovation in micro-segmentation, encryption, and continuous compliance monitoring.

5. Cybersecurity for IoT and Edge Devices

The Internet of Things (IoT) continues to grow exponentially, with billions of connected devices deployed across industries. However, these devices remain a weak link in the cybersecurity chain. Emerging solutions in 2025 include:
- IoT Security Frameworks: Standardized protocols for authentication, encryption, and device updates across IoT ecosystems.
- Edge Computing Security: Advanced firewalls and intrusion detection systems tailored for edge devices that process data locally.

Organizations are prioritizing device visibility and secure firmware updates to reduce the risk of large-scale breaches.

6. Privacy Regulations Drive Global Security Practices

Governments worldwide are implementing stricter data protection laws in response to public demand for privacy. Key developments include:
- Unified Data Protection Standards: Cross-border data transfers are now governed by stricter global agreements to ensure compliance.
- AI Ethics in Cybersecurity: Ethical considerations for AI-driven surveillance and security tools are becoming mandatory, balancing privacy with safety.

Organizations must stay updated on compliance requirements to avoid penalties and reputational damage.

7. Rise of Cyber-Physical Security Integration

Critical infrastructure, including power grids, water systems, and transportation networks, is increasingly at risk. In 2025, cybersecurity extends beyond the digital realm to protect physical assets.
- Operational Technology (OT) Security: AI-driven tools monitor and secure industrial control systems against cyber-physical threats.
- Smart Cities Resilience: Urban centers are investing in integrated security solutions to safeguard connected infrastructure from attacks.

The convergence of IT and OT security strategies is now a priority for government and enterprise leaders alike.

8. Cybersecurity Talent Shortage and Upskilling Efforts

The demand for skilled cybersecurity professionals continues to outpace supply. Innovative approaches to address this gap include:
- AI-Enhanced Skill Development: Interactive training platforms use AI to create tailored learning paths for professionals.
- Diversity and Inclusion in Cybersecurity: Programs aimed at recruiting talent from underrepresented communities are helping to expand the workforce.

Closing the talent gap is critical to keeping pace with the rapidly evolving threat landscape.

Conclusion

As we navigate 2025, cybersecurity is more dynamic and complex than ever. Emerging technologies like quantum computing, AI, and IoT are reshaping the landscape, offering both opportunities and challenges. To stay ahead, organizations must adopt proactive, multi-layered security strategies and invest in continuous innovation and workforce development. The road ahead demands resilience, collaboration, and a steadfast commitment to safeguarding the digital future.
`
}


};

const BlogPage: React.FC = () => {  
  const { slug } = useParams();
  const blog = slug ? blogs[slug as string] : null;

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
    localStorage.setItem("comments", JSON.stringify(updatedComments));
  };

  const handleEditComment = (id: string, newText: string) => {
    const updatedComments = comments.map((comment) =>
      comment.id === id ? { ...comment, text: newText } : comment
    );
    setComments(updatedComments);
    localStorage.setItem("comments", JSON.stringify(updatedComments));
  };

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold text-red-600">Blog not found! 😔</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto bg-gray-50 shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">{blog.title}</h1>
        <Image
          src={blog.image}
          alt={blog.title}
          layout="responsive"
          width={800}
          height={400}
          className="w-full h-auto rounded-md shadow-md mb-6"
        />
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



