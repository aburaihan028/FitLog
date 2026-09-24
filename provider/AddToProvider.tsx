'use client';
import { AddToPlanContext } from '@/contexts';
import { Worker } from '@/types';
import React, { use, useState } from 'react';

interface Props {
    children: React.ReactNode;
}

export const AddToProvider = ({ children }: Props) => {
    const [addToPlan, setAddToPlan] = useState<Worker[]>([]);
    const [saveToPlan, setSaveToPlan] = useState<Worker[]>([]);
    return (
        <AddToPlanContext
            value={{ addToPlan, setAddToPlan, saveToPlan, setSaveToPlan }}
        >
            {children}
        </AddToPlanContext>
    );
};

export const usePlan = () => {
    const res = use(AddToPlanContext);
    if (!res) {
        throw new Error('usePlan must be used within AddToProvider');
    }
    return res;
};
