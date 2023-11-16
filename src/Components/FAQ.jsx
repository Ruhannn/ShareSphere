/* eslint-disable react/no-unescaped-entities */
import { Typewriter } from "react-simple-typewriter";

const FAQ = () => {
  const faqData = [
    {
      question:
        "How can I trust the authenticity of service providers on the platform?",
      answer:
        "To ensure trust, the platform verifies the identity of service providers. Additionally, you can review their profiles, ratings, and feedback from other users before engaging in any offline services.",
    },
    {
      question: "What happens if a service provider cancels on me last minute?",
      answer:
        "If a service provider cancels unexpectedly, contact them directly to understand the situation. If needed, report the issue to the platform, and they will assist you in finding an alternative or resolving the matter.",
    },
    {
      question: "Can I schedule recurring offline services with a provider?",
      answer:
        "Yes, many service providers offer the option to schedule recurring services. Discuss your requirements with the provider and set up a convenient schedule that works for both parties.",
    },
    {
      question: "How do I update my availability as a service provider?",
      answer:
        "As a service provider, you can easily update your availability through your profile settings. Keep your calendar up-to-date to ensure accurate information for users interested in your services.",
    },
    {
      question: "What should I do if I forget to mark a service as completed?",
      answer:
        "If you forget to mark a service as completed, reach out to the user and confirm the completion. It's essential to keep the platform updated for transparency and to maintain a positive user experience.",
    },
  ];

  return (
    <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8 dark:text-[#ffffffd6]">
      <h2 className="text-2xl font-semibold sm:text-4xl">
        <Typewriter
          words={["Frequently Asked Questions"]}
          typeSpeed={70}></Typewriter>
      </h2>
      <p className="mt-4 mb-8">
        <Typewriter
          words={["Here, we've answered some questions that people often ask. Feel free to explore!"]}
          typeSpeed={100}></Typewriter>
      </p>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <details key={index} className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
              {item.question}
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
