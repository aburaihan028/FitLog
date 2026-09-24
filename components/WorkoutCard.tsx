import { Worker } from '@/types';
import { Clock3, Flame, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
interface Props {
    workout: Worker;
}

const WorkoutCard = ({ workout }: Props) => {
    return (
        <Link
            href={`/workout/${workout.id}`}
            className="group overflow-hidden rounded-xl border border-white/10 bg-[#1b1c20] transition hover:-translate-y-1 hover:border-lime-400/40"
        >
            {/* Image */}
            <div className="aspect-16/7 overflow-hidden">
                <Image
                    src={workout.image}
                    alt={workout.name}
                    width={600}
                    height={600}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="p-5">
                {/* Muscle Groups */}
                <div className="mb-4 flex flex-wrap gap-2">
                    {workout.muscleGroups.map((muscle) => (
                        <span
                            key={muscle}
                            className="rounded-full bg-lime-400 px-3 py-1 text-[10px] font-black uppercase tracking-wide text-black"
                        >
                            {muscle}
                        </span>
                    ))}
                </div>

                {/* Workout Name */}
                <h2 className="text-lg text-white font-black uppercase tracking-tight">
                    {workout.name}
                </h2>

                {/* Equipment */}
                <p className="mt-1 text-sm text-zinc-400">
                    {workout.equipment}
                </p>

                {/* Divider */}
                <div className="my-5 h-px bg-white/5" />

                {/* Stats */}
                <div className="flex items-center gap-5 text-xs text-zinc-400">
                    {/* Duration */}
                    <div className="flex items-center gap-1.5">
                        <Clock3 size={14} />
                        <span>{workout.duration} min</span>
                    </div>

                    {/* Calories */}
                    <div className="flex items-center gap-1.5">
                        <Flame size={14} />
                        <span>{workout.caloriesBurned} kcal</span>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1.5">
                        <Star size={14} className="fill-current" />
                        <span>{workout.rating}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default WorkoutCard;
