'use client';

import { Worker } from '@/types';
import React, { createContext } from 'react';
interface AddToPlanContextType {
    addToPlan: Worker[] | [];
    setAddToPlan: React.Dispatch<React.SetStateAction<Worker[] | []>>;
    saveToPlan: Worker[] | [];
    setSaveToPlan: React.Dispatch<React.SetStateAction<Worker[] | []>>;
}

const AddToPlanContext = createContext<AddToPlanContextType | null>(null);

export { AddToPlanContext };
