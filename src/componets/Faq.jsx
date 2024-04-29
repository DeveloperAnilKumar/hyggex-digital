import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const AccordionItem = ({ title, content, isActive, onClick }) => (
    <div className="font-sans gradient-border mb-3">
        <div role="accordion">
            <button
                type="button"
                className={`w-full text-base font-semibold text-left py-4 px-6 ${isActive ? 'text-[#fffff]' : 'text-[#333]'} flex items-center transition-all duration-300`}
                onClick={onClick}
            >
                <span className="text-[16px] font-[600] leading-[26px] text-[#28262C]">{title}</span>
                <span className={`w-[17px]  text-[#28262] ml-auto shrink-0 transition-transform duration-300 ${isActive ? 'rotate-0' : 'rotate-180'}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.855 7.49599C4.91074 7.44006 4.97698 7.39567 5.04991 7.36539C5.12284 7.33511 5.20103 7.31952 5.28 7.31952C5.35897 7.31952 5.43716 7.33511 5.51009 7.36539C5.58302 7.39567 5.64926 7.44006 5.705 7.49599L12.48 14.272L19.255 7.49599C19.3677 7.38328 19.5206 7.31995 19.68 7.31995C19.8394 7.31995 19.9923 7.38328 20.105 7.49599C20.2177 7.60871 20.281 7.76159 20.281 7.92099C20.281 8.0804 20.2177 8.23328 20.105 8.34599L12.905 15.546C12.8493 15.6019 12.783 15.6463 12.7101 15.6766C12.6372 15.7069 12.559 15.7225 12.48 15.7225C12.401 15.7225 12.3228 15.7069 12.2499 15.6766C12.177 15.6463 12.1107 15.6019 12.055 15.546L4.855 8.34599C4.79907 8.29025 4.75468 8.22401 4.7244 8.15108C4.69412 8.07815 4.67853 7.99996 4.67853 7.92099C4.67853 7.84202 4.69412 7.76383 4.7244 7.6909C4.75468 7.61797 4.79907 7.55173 4.855 7.49599Z" fill="#28262C" />
                    </svg>

                </span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${isActive ? 'max-h-screen' : 'max-h-0'}`}>
                <div className="py-4 px-6">
                    <p className="text-sm text-gray-500">{content}</p>
                </div>
            </div>
        </div>
    </div>
);

function Faq() {
    const [activeIndexes, setActiveIndexes] = useState([]);

    const toggleAccordion = (index) => {
        setActiveIndexes((prevIndexes) => {
            if (prevIndexes.includes(index)) {
                return prevIndexes.filter((i) => i !== index);
            } else {
                return [...prevIndexes, index];
            }
        });
    };

    const faqData = [
        {
            title: 'Can education flashcards be used for all age groups?',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui. Maecenas vestibulum a turpis in lacinia. Proin aliquam turpis at erat venenatis malesuada...',
        },
        {
            title: 'How do education flashcards work?',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui. Maecenas vestibulum a turpis in lacinia. Proin aliquam turpis at erat venenatis malesuada...',
        },
        {
            title: 'Can education flashcards be used for test preparation?',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui. Maecenas vestibulum a turpis in lacinia. Proin aliquam turpis at erat venenatis malesuada...',
        },
    ];

    return (
        <div className="font-sans max-w-7xl mx-auto px-10 mt-28">
            <div className="mb-8">
                <h2 className="font-bold text-[48px] leading-[58.09px] text-transparent bg-clip-text bg-gradient-to-b from-[#06286E] to-[#164EC0]">FAQ</h2>
            </div>

            <div className="w-full max-w-[848px]">
                {faqData.map((item, index) => (
                    <AccordionItem
                        key={index}
                        title={item.title}
                        content={item.content}
                        isActive={activeIndexes.includes(index)}
                        onClick={() => toggleAccordion(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Faq;
