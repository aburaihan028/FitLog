import { Worker } from '@/types';

export const getWorkouts = async (): Promise<Worker[]> => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    if (!res.ok) {
        throw new Error('Failed to fetch workouts');
    }
    return await res.json();
};
export const getSingleWorkouts = async (id: string): Promise<Worker> => {
    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
    if (!res.ok) {
        throw new Error('Failed to fetch workouts');
    }
    return await res.json();
};
