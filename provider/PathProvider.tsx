'use client';
import { PathContext } from '@/contexts/PathContext';
import { usePathname } from 'next/navigation';
import type { Context } from 'react';
import React, { use } from 'react';

interface Props {
    children: React.ReactNode;
}

export const PathProvider = ({ children }: Props) => {
    const url = usePathname();
    const TypedPathContext = PathContext as unknown as Context<{
        url: string;
    }>;
    return <TypedPathContext value={{ url }}>{children}</TypedPathContext>;
};

export const usePath = () => {
    const context = use(PathContext);
    if (!context) {
        throw new Error('useCart must be used within CartProvider');
    }
    return context;
};
