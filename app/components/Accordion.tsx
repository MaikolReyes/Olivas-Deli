"use client";
import { useState } from "react";

type AccordionItem = {
    title: string;
    content: React.ReactNode;
};

export default function Accordion({ items }: { items: AccordionItem[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full max-w-2xl mx-auto py-8" id="preguntas">
            {items.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                    <div key={index} className="border-b border-gray-200">
                        <button
                            onClick={() => toggle(index)}
                            className="w-full flex items-center justify-between py-4 text-left font-semibold text-gray-800 hover:text-primary"
                        >
                            <span>{item.title}</span>

                            {/* Flecha */}
                            <span
                                className={`transform transition-transform duration-300 ${isOpen ? "rotate-180 text-primary" : ""
                                    }`}
                            >
                                ▼
                            </span>
                        </button>

                        <div
                            className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-250 pb-4" : "max-h-0"
                                }`}
                        >
                            <div className="text-gray-600 text-sm space-y-2">
                                {item.content}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
