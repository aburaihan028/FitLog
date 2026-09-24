'use client';
import { usePlan } from '@/provider/AddToProvider';

import { useCallback, useMemo, useState } from 'react';
import MyPlanCard from './MyPlanCard';
import { toast } from 'react-toastify';

const MyPlanButton = () => {
    const { addToPlan, saveToPlan, setAddToPlan, setSaveToPlan } = usePlan();
    const [activeTab, setActiveTab] = useState<'today' | 'saved'>('today');
    const [sortBy, setSortBy] = useState('Duration');

    const handleClose = (id: number) => {
        if (activeTab === 'today') {
            setAddToPlan((prev) => prev.filter((item) => item.id !== id));
            toast.error("Removed from today's plan");
        } else {
            setSaveToPlan((prev) => prev.filter((item) => item.id !== id));
            toast.error('Removed from saved list');
        }
    };

    const sortItems = useCallback(
        (items: typeof addToPlan) => {
            if (!items) return items;
            const sorted = [...items];

            switch (sortBy) {
                case 'Duration':
                    return sorted.sort((a, b) => a.duration - b.duration);
                case 'Calories':
                    return sorted.sort(
                        (a, b) => a.caloriesBurned - b.caloriesBurned,
                    );
                case 'Name':
                    return sorted.sort((a, b) => a.name?.localeCompare(b.name));
                default:
                    return sorted;
            }
        },
        [sortBy],
    );

    const currentList = useMemo(
        () => sortItems(activeTab === 'today' ? addToPlan : saveToPlan),
        [activeTab, addToPlan, saveToPlan, sortItems],
    );
    return (
        <>
            <div className="bg-[#121824] border border-gray-800/80 rounded-2xl p-6 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-800/80">
                <div className="flex flex-col pb-4 md:pb-0 md:pr-6">
                    <span className="text-xs text-gray-400 font-medium">
                        Exercises
                    </span>
                    <span className="text-3xl font-black text-[#c2f900] mt-1">
                        {activeTab === 'today'
                            ? addToPlan?.length
                            : saveToPlan?.length}
                    </span>
                </div>
                <div className="flex flex-col py-4 md:py-0 md:px-6">
                    <span className="text-xs text-gray-400 font-medium">
                        Minutes
                    </span>
                    <span className="text-3xl font-black text-white mt-1">
                        {activeTab === 'today'
                            ? addToPlan?.reduce(
                                  (total, item) => total + item.duration,
                                  0,
                              )
                            : saveToPlan?.reduce(
                                  (total, item) => total + item.duration,
                                  0,
                              )}
                    </span>
                </div>
                <div className="flex flex-col pt-4 md:pt-0 md:pl-6">
                    <span className="text-xs text-gray-400 font-medium">
                        Calories
                    </span>
                    <span className="text-3xl font-black text-white mt-1">
                        {activeTab === 'today'
                            ? addToPlan.reduce(
                                  (total, item) => total + item.caloriesBurned,
                                  0,
                              )
                            : saveToPlan?.reduce(
                                  (total, item) => total + item.caloriesBurned,
                                  0,
                              )}
                    </span>
                </div>
            </div>
            {/* Navigation Controls & Filter */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                {/* Tab Switcher */}
                <div className="bg-[#121824] p-1.5 rounded-xl border border-gray-800 flex gap-1">
                    <button
                        onClick={() => setActiveTab('today')}
                        className={`px-5 py-2 rounded-lg text-xs font-semibold transition-all ${
                            activeTab === 'today'
                                ? 'bg-[#1e293b] text-white shadow'
                                : 'text-gray-400 hover:text-white'
                        }`}
                    >
                        Today&apos;s Plan
                    </button>
                    <button
                        onClick={() => setActiveTab('saved')}
                        className={`px-5 py-2 rounded-lg text-xs font-semibold transition-all ${
                            activeTab === 'saved'
                                ? 'bg-[#1e293b] text-white shadow'
                                : 'text-gray-400 hover:text-white'
                        }`}
                    >
                        Saved
                    </button>
                </div>

                {/* Sort By Dropdown */}
                <div className="flex items-center gap-2 text-xs">
                    <span className="text-gray-400">Sort By</span>
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="bg-[#121824] border border-gray-800 text-white rounded-xl px-3 py-2 text-xs font-medium focus:outline-none focus:border-gray-600 cursor-pointer"
                    >
                        <option value="Duration">Duration</option>
                        <option value="Calories">Calories</option>
                        <option value="Name">Name</option>
                    </select>
                </div>
            </div>
            {/* Empty State Box */}

            <MyPlanCard
                addToPlan={currentList}
                handleClose={handleClose}
                activeTab={activeTab}
            />
        </>
    );
};

export default MyPlanButton;
