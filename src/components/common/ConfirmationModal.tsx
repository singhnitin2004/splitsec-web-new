'use client';

import { useEffect } from 'react';
import { X } from 'lucide-react';

interface FeatureCard {
    icon: string;
    title: string;
    description: string;
    color: 'blue' | 'pink';
}

interface NextStep {
    number: number;
    text: string;
}

interface ConfirmationModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    subtitle: string;
    featureCards: FeatureCard[];
    nextSteps: NextStep[];
}

export default function ConfirmationModal({
    isOpen,
    onClose,
    title,
    subtitle,
    featureCards,
    nextSteps
}: ConfirmationModalProps) {
    // Close modal on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen, onClose]);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 z-10 p-2 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="Close modal"
                >
                    <X className="w-5 h-5 text-gray-500" />
                </button>

                {/* Content */}
                <div className="p-8">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-linear-to-br from-[#006DFF] to-[#FF3FA6] mb-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                            {title}
                        </h2>
                        <p className="text-gray-600">
                            {subtitle}
                        </p>
                    </div>

                    {/* Feature Cards */}
                    <div className="grid gap-4 mb-8">
                        {featureCards.map((card, index) => (
                            <div
                                key={index}
                                className={`p-4 rounded-2xl border-2 ${card.color === 'blue'
                                        ? 'border-[#006DFF]/20 bg-[#006DFF]/5'
                                        : 'border-[#FF3FA6]/20 bg-[#FF3FA6]/5'
                                    }`}
                            >
                                <div className="flex gap-3">
                                    <div className="text-2xl shrink-0">{card.icon}</div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">{card.title}</h3>
                                        <p className="text-sm text-gray-600">{card.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Next Steps */}
                    <div className="bg-gray-50 rounded-2xl p-6">
                        <h3 className="font-bold text-gray-900 mb-4">What happens next</h3>
                        <div className="space-y-3">
                            {nextSteps.map((step) => (
                                <div key={step.number} className="flex gap-3">
                                    <div className="shrink-0 w-6 h-6 rounded-full bg-linear-to-br from-[#006DFF] to-[#FF3FA6] text-white text-sm font-bold flex items-center justify-center">
                                        {step.number}
                                    </div>
                                    <p className="text-sm text-gray-700 pt-0.5">{step.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="w-full mt-6 py-3 px-6 bg-linear-to-r from-[#006DFF] to-[#FF3FA6] text-white font-bold rounded-2xl hover:shadow-lg transition-shadow"
                    >
                        Got it, thanks!
                    </button>
                </div>
            </div>
        </div>
    );
}
