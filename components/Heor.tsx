import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Banner from '@/public/Banner.webp';
import Link from 'next/link';

const Heor = () => {
    return (
        <>
            <main className="mt-12">
                <section className="flex items-center justify-between rounded-xl border border-[#2a2b30] bg-[#15171D] py-18 px-14">
                    <div className="flex flex-col items-start gap-y-5 w-[55%]">
                        {/* Hero Content */}
                        {/* Eyebrow */}
                        <p className="text-[11px] font-bold font-inter text-[#C2F800]">
                            WORKOUT LIBRARY
                        </p>

                        {/* Heading */}
                        <h1 className="text-white text-[60px] font-oswald font-black uppercase leading-[0.98] tracking-[-3px]">
                            Train With Intent. Log Every Set.
                        </h1>

                        {/* Description */}
                        <p className="max-w-117.5 font-inter text-[16px] leading-5 text-[#9CA3AF]">
                            FitLog is a dark, no-nonsense gym companion: pick a
                            lift, lock it into today&apos;s plan, and watch the
                            week&apos;s work add up.
                        </p>

                        {/* CTA */}
                        <Link
                            href="#library"
                            className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#ccff00] px-5 py-3 text-[12px] font-black text-black transition hover:bg-[#b8e600]"
                        >
                            BROWSE WORKOUTS
                            <ArrowRight size={14} strokeWidth={3} />
                        </Link>
                    </div>
                    {/* Hero Image */}
                    <div className="">
                        <Image
                            src={Banner}
                            alt="Workout illustration"
                            width={400}
                            height={400}
                            className="h-auto w-auto object-contain"
                            loading="eager"
                        />
                    </div>
                </section>
            </main>
        </>
    );
};

export default Heor;
