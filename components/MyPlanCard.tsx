import { Worker } from '@/types';
import { XIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface DataPlan {
    addToPlan: Worker[];
    handleClose: (id: number) => void;
    activeTab?: 'today' | 'saved';
}

const MyPlanCard = ({ addToPlan, handleClose, activeTab }: DataPlan) => {
    return (
        <div className="space-y-3">
            {addToPlan?.length === 0 ? (
                <div className="flex flex-col items-center justify-center text-center border border-dashed border-gray-800 rounded-2xl bg-[#0e131f]/50 p-12 md:p-20 ">
                    {' '}
                    <h2 className="text-xl md:text-2xl font-black uppercase tracking-wider text-white">
                        Nothing Here Yet
                    </h2>
                    <p className="text-gray-400 text-xs md:text-sm mt-2 max-w-sm">
                        Browse the library and add a lift to get today moving.
                    </p>
                    <Link
                        href="/"
                        className="mt-6 bg-[#c2f900] hover:bg-[#b0e300] text-black font-extrabold text-xs px-6 py-3 rounded-full transition shadow-lg shadow-[#c2f900]/10"
                    >
                        Go to workouts
                    </Link>
                </div>
            ) : (
                addToPlan.map((item) => (
                    <div
                        key={item?.id}
                        className="flex items-center gap-4 rounded-2xl border border-gray-800 bg-[#121824] p-5"
                    >
                        {/* Image */}
                        <Image
                            src={item?.image}
                            alt={item?.name}
                            width={150}
                            height={150}
                            className="w-45 h-30 rounded-xl object-cover"
                        />

                        {/* Workout info */}
                        <div className="flex-1">
                            <h3 className="text-sm font-black text-white">
                                {item?.name}
                            </h3>

                            <p className="mt-1 text-xs text-gray-500">
                                {item?.equipment}
                            </p>

                            <div className="mt-2 flex items-center gap-4 text-xs text-gray-400">
                                <span>◷ {item?.duration} min</span>

                                <span>♨ {item?.caloriesBurned} kcal</span>

                                <span>☆ {item?.rating}</span>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-3">
                            <Link
                                href={`workout/${item?.id}`}
                                className="rounded-full border border-gray-700 px-4 py-2 text-xs text-white"
                            >
                                View Details
                            </Link>
                            {activeTab === 'today' ? (
                                <button className="rounded-full bg-[#c2f900] px-4 py-2 text-xs font-bold text-black">
                                    ✓ Mark as Done
                                </button>
                            ) : (
                                ''
                            )}

                            <button
                                onClick={() => handleClose(item.id)}
                                className="text-gray-500 hover:text-white cursor-pointer"
                            >
                                <XIcon />
                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default MyPlanCard;
