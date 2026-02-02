'use client';

import * as React from 'react';

interface SelectContextValue {
    value: string;
    onValueChange: (value: string) => void;
    open: boolean;
    setOpen: (open: boolean) => void;
}

const SelectContext = React.createContext<SelectContextValue | undefined>(undefined);

interface SelectProps {
    value: string;
    onValueChange: (value: string) => void;
    children: React.ReactNode;
}

export function Select({ value, onValueChange, children }: SelectProps) {
    const [open, setOpen] = React.useState(false);

    return (
        <SelectContext.Provider value={{ value, onValueChange, open, setOpen }}>
            <div className="relative">
                {children}
            </div>
        </SelectContext.Provider>
    );
}

interface SelectTriggerProps {
    children: React.ReactNode;
    className?: string;
}

export function SelectTrigger({ children, className = '' }: SelectTriggerProps) {
    const context = React.useContext(SelectContext);
    if (!context) throw new Error('SelectTrigger must be used within Select');

    return (
        <button
            type="button"
            onClick={() => context.setOpen(!context.open)}
            className={className}
        >
            {children}
            <svg
                className={`ml-2 h-4 w-4 transition-transform ${context.open ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
        </button>
    );
}

interface SelectValueProps {
    placeholder?: string;
}

export function SelectValue({ placeholder }: SelectValueProps) {
    const context = React.useContext(SelectContext);
    if (!context) throw new Error('SelectValue must be used within Select');

    return <span>{context.value || placeholder}</span>;
}

interface SelectContentProps {
    children: React.ReactNode;
}

export function SelectContent({ children }: SelectContentProps) {
    const context = React.useContext(SelectContext);
    if (!context) throw new Error('SelectContent must be used within Select');

    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (!target.closest('[role="listbox"]') && !target.closest('button')) {
                context.setOpen(false);
            }
        };

        if (context.open) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [context.open]);

    if (!context.open) return null;

    return (
        <div
            role="listbox"
            className="absolute z-50 mt-2 w-full overflow-hidden rounded-2xl border-2 border-slate-200 bg-white shadow-lg"
        >
            <div className="max-h-60 overflow-y-auto p-1">
                {children}
            </div>
        </div>
    );
}

interface SelectItemProps {
    value: string;
    children: React.ReactNode;
}

export function SelectItem({ value, children }: SelectItemProps) {
    const context = React.useContext(SelectContext);
    if (!context) throw new Error('SelectItem must be used within Select');

    return (
        <div
            role="option"
            aria-selected={context.value === value}
            onClick={() => {
                context.onValueChange(value);
                context.setOpen(false);
            }}
            className={`cursor-pointer rounded-xl px-4 py-2.5 text-sm transition-colors ${
                context.value === value
                    ? 'bg-[#006DFF] text-white'
                    : 'hover:bg-slate-100'
            }`}
        >
            {children}
        </div>
    );
}
