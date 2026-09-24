import { Suspense } from 'react';
import WorkoutCard from './WorkoutCard';
import Loading from './Loading';
import { getWorkouts } from '@/queries';

const TheLibrary = async () => {
    const workouts = await getWorkouts();
    return (
        <main className="my-25">
            <section>
                <h2 className="font-oswald font-bold text-3xl text-white mb-2">
                    THE LIBRARY
                </h2>
                <p className="font-inter text-sm text-[#9CA3AF]">
                    Twelve lifts covering every major muscle group.
                </p>
            </section>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-10">
                <Suspense fallback={<Loading />}>
                    {workouts.map((workout) => (
                        <WorkoutCard key={workout.id} workout={workout} />
                    ))}
                </Suspense>
            </div>
        </main>
    );
};

export default TheLibrary;
