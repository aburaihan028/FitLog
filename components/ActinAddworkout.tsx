'use client';
import { usePlan } from '@/provider/AddToProvider';
import { Worker } from '@/types';
import { toast } from 'react-toastify';

interface Props {
    workout: Worker;
}

const ActinAddworkout = ({ workout }: Props) => {
    const { setAddToPlan, setSaveToPlan, addToPlan, saveToPlan } = usePlan();

    // handle AddPlan function
    const handleAddPlan = (workout: Worker) => {
        const alreadyAdded = addToPlan?.some(
            (item: Worker) => item.id === workout.id,
        );

        if (alreadyAdded) {
            toast.error('Already in your plan', {
                position: 'top-right',
                autoClose: 5000,
                pauseOnHover: true,
                draggable: true,
            });
            return;
        }

        setAddToPlan((prev: Worker[]) => [...prev, workout]);
        toast.success("Added to today's plan", {
            position: 'top-right',
            autoClose: 5000,
            pauseOnHover: true,
            draggable: true,
        });
    };

    // handle Save Plan function
    const handleSaveLater = (workout: Worker) => {
        const alreadySaved = saveToPlan?.some(
            (item: Worker) => item.id === workout.id,
        );

        if (alreadySaved) {
            toast.error('Already Saved!');
            return;
        }

        setSaveToPlan((prev: Worker[]) => [...prev, workout]);
        toast.success('Save for later');
    };
    return (
        <div className="flex flex-wrap sm:flex-nowrap gap-3 pt-2">
            <button
                onClick={() => handleAddPlan(workout)}
                className="flex-1 bg-[#c2f900] hover:bg-[#b0e300] text-black font-semibold text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition cursor-pointer"
            >
                <span>📅</span> Add to today&apos;s plan
            </button>
            <button
                onClick={() => handleSaveLater(workout)}
                className="flex-1 bg-[#121824] hover:bg-[#1a2333] border border-gray-800 text-gray-200 font-semibold text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition cursor-pointer"
            >
                <span>🔖</span> Save for later
            </button>
        </div>
    );
};

export default ActinAddworkout;
