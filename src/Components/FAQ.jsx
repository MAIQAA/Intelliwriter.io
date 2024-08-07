import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // Function to toggle FAQ visibility
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Is the Content Unique ?",
      answer:
        "95% of the content generated by the AI is unique and original. We also provide a uniqueness score for longer form content generated so you can have peace of mind to know that the content you have received is unique.",
    },
    {
      question: "How is the content generated",
      answer:
        "We make use of a variety of AI models, with Generative Pre-trained Transformer 3 is an autoregressive language model which uses deep learning to produce human-like text. It's a game changer for content creators.",
    },
    {
      question: "Who retains the copyright?",
      answer:
        "You do. We will not claim copyright over content generated by the AI for you.",
    },
    {
      question: "What languages do you support?",
      answer:
        "We currently support all languages supported by Google Translate.",
    },
    {
      question: "Is there discount for non-profits??",
      answer: "Please get in touch with us below.",
    },
  ];

  return (
    <div className="grid gap-14 p-10 lg:px-[110px] pt-32 2xl:px-[17%]">
      {/* TITLE */}
      <div className="relative grid lg:text-6xl md:text-5xl text-4xl lg:left-4">
        <div className="uppercase absolute text-border text-gray-200 text-opacity-75  bottom-4 lg:bottom-5 lg:-left-4">
          FRequently AskeD
        </div>
        <div className="uppercase relative font-semibold bg-gradient-to-r from-[#CC95FF] via-[#F056FF] to-[#F056FF] text-transparent bg-clip-text">
          QuestiONs
        </div>
      </div>

      {/* TEXT */}
      <div className="">
        <p className="md:text-[21px] text-base text-white font-medium !leading-8">
          We`re dedicated to assisting individuals interested in generating
          AI-driven content and images.
        </p>
      </div>

      {/* FAQ */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className=" rounded-md overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)} // Change index accordingly
              className={`w-full md:px-7 md:py-4 p-3 text-left font-medium text-lg hover:bg-[#2c2349] ${openIndex === index ? "bg-[#2c2349]" : "bg-[#21193C] "} focus:outline-none flex justify-between justify-items-center content-center`}
            >
              <h1 className="md:text-xl text-sm font-semibold text-white">
                {faq.question}
              </h1>
              {openIndex === index ? (
                <FaMinus className="text-white" />
              ) : (
                <FaPlus className="text-white" />
              )}
            </button>
            <div
              className={` bg-[#21193c] text-[#C5CBD0] transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-screen px-7 py-4 bg-[#2c2349]" : "max-h-0 px-7 overflow-hidden"}`}
            >
              <hr className="mb-3 bg-gray-500 border-0 h-px" />
              {faq.answer}
            </div>
          </div>
        ))}

        {/* Add more FAQ items similarly */}
      </div>
    </div>
  );
};

export default FAQ;
