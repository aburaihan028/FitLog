import AddworkoutDetails from '@/components/AddworkoutDetails';
import { getSingleWorkouts } from '@/queries';
import Image from 'next/image';

interface Props {
    params: Promise<{ id: string }>;
}

const WorkoutDetailsPage = async ({ params }: Props) => {
    const { id } = await params;
    const workout = await getSingleWorkouts(id);

    return (
        <div className="bg-[#0b0f17] text-white p-4 md:p-10 flex justify-center items-center">
            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 my-12 items-start">
                {/* Left Side - Image */}
                <div className="w-full h-87.5 sm:h-112.5 lg:h-137.5 rounded-2xl overflow-hidden border border-gray-800 shadow-xl">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        width={650}
                        height={650}
                        className="w-full h-full object-cover"
                        loading="eager"
                    />
                </div>

                {/* Right Side - Details */}
                <div className="flex flex-col gap-6">
                    {/* Header Details */}
                    <div>
                        <h1 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide text-white">
                            {workout.name}
                        </h1>
                        <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                            {workout.description}
                        </p>

                        {/* Muscle Groups Badges */}
                        <div className="flex flex-wrap gap-2 mt-4">
                            {workout.muscleGroups?.map((group, index) => (
                                <span
                                    key={index}
                                    className="bg-[#c2f900] text-black text-xs font-bold px-3 py-1 rounded-full capitalize"
                                >
                                    {group}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Stats List Card */}
                    <div className="bg-[#121824] p-5 rounded-2xl border border-gray-800/60 divide-y divide-gray-800/80 text-sm">
                        <div className="flex justify-between py-2.5">
                            <span className="text-gray-400 font-semibold uppercase text-xs tracking-wider">
                                Equipment
                            </span>
                            <span className="font-semibold text-gray-200">
                                {workout.equipment}
                            </span>
                        </div>
                        <div className="flex justify-between py-2.5">
                            <span className="text-gray-400 font-semibold uppercase text-xs tracking-wider">
                                Difficulty
                            </span>
                            <span className="font-semibold text-gray-200">
                                {workout.difficulty}
                            </span>
                        </div>
                        <div className="flex justify-between py-2.5">
                            <span className="text-gray-400 font-semibold uppercase text-xs tracking-wider">
                                Sets
                            </span>
                            <span className="font-semibold text-gray-200">
                                {workout.sets}
                            </span>
                        </div>
                        <div className="flex justify-between py-2.5">
                            <span className="text-gray-400 font-semibold uppercase text-xs tracking-wider">
                                Reps
                            </span>
                            <span className="font-semibold text-gray-200">
                                {workout.reps}
                            </span>
                        </div>
                        <div className="flex justify-between py-2.5">
                            <span className="text-gray-400 font-semibold uppercase text-xs tracking-wider">
                                Duration
                            </span>
                            <span className="font-semibold text-gray-200">
                                {workout.duration} min
                            </span>
                        </div>
                        <div className="flex justify-between py-2.5">
                            <span className="text-gray-400 font-semibold uppercase text-xs tracking-wider">
                                Calories
                            </span>
                            <span className="font-semibold text-gray-200">
                                {workout.caloriesBurned} kcal
                            </span>
                        </div>
                        <div className="flex justify-between py-2.5">
                            <span className="text-gray-400 font-semibold uppercase text-xs tracking-wider">
                                Rating
                            </span>
                            <span className="font-semibold text-gray-200">
                                {workout.rating}
                            </span>
                        </div>
                    </div>

                    {/* Instructions Section */}
                    <div>
                        <h2 className="text-base font-bold uppercase tracking-wider text-white mb-3">
                            Instructions
                        </h2>
                        <ol className="space-y-3 text-gray-300 text-sm">
                            {workout.instructions?.map((instruction, index) => (
                                <li
                                    key={index}
                                    className="flex gap-2 leading-relaxed"
                                >
                                    <span className="font-semibold text-gray-400">
                                        {index + 1}.
                                    </span>
                                    <span>{instruction}</span>
                                </li>
                            ))}
                        </ol>
                    </div>

                    {/* Action Buttons */}
                    <AddworkoutDetails workout={workout} />
                </div>
            </div>
        </div>
    );
};

export default WorkoutDetailsPage;
