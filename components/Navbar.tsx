'use client';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/public/logo.png';
import { usePathname } from 'next/navigation';
import { usePlan } from '@/provider/AddToProvider';

const Navbar = () => {
    const path = usePathname();
    const { addToPlan, saveToPlan } = usePlan();

    return (
        <header className="border-b border-[#25262a]">
            <div className="mx-auto flex h-17.5 px-6 md:px-16 lg:px-24 xl:px-32 items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src={Logo}
                        alt={'Logo'}
                        width={22}
                        height={22}
                        className="text-[#CCFF00]"
                    />

                    <span className="font-black text-[18px] tracking-[1px] font-oswald text-white">
                        FITLOG
                    </span>
                </Link>

                {/* Navigation */}
                <nav className="flex items-center gap-x-6">
                    <Link
                        href="/"
                        className={`text-[12px] font-bold uppercase ${path === '/' ? 'text-[#ccff00] rounded-full px-4 py-1.5 bg-[#1A2312]' : 'text-gray-400'}`}
                    >
                        Workouts
                    </Link>
                    <Link
                        href="/my-plan"
                        className={`text-[12px] font-bold uppercase ${path === '/my-plan' ? 'text-[#ccff00] rounded-full px-4 py-1.5 bg-[#1A2312]' : 'text-gray-400'}`}
                    >
                        My Plan
                    </Link>
                </nav>

                {/* Right badges */}
                <div className="flex items-center gap-5">
                    {/* Plan */}
                    <Link
                        href="/my-plan"
                        className="flex font-medium items-center gap-2 text-[12px] text-gray-300"
                    >
                        <span>Plan</span>

                        <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-[#ccff00] px-1 text-[11px] font-bold text-black">
                            {addToPlan.length}
                        </span>
                    </Link>

                    {/* Saved */}
                    <Link
                        href="/my-plan"
                        className="flex items-center gap-2 font-medium text-[12px] text-[#D1D5DB]"
                    >
                        <span>Saved</span>

                        <span className="flex h-4 min-w-4 items-center justify-center rounded-full border border-[#45464b] px-1 text-[11px] text-[#9CA3AF]">
                            {saveToPlan.length}
                        </span>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
