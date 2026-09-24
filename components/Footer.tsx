import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/public/logo.png';
import React from 'react';

const Footer = () => {
    return (
        <div className="bg-[#090A0D] px-6 md:px-16 lg:px-24 xl:px-32 py-10">
            <div className="flex justify-between items-center">
                {' '}
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src={Logo}
                        alt={'Logo'}
                        width={22}
                        height={22}
                        className="-rotate-45 text-[#CCFF00]"
                    />

                    <span className="font-black text-[18px] tracking-[1px] font-oswald text-white">
                        FITLOG
                    </span>
                </Link>
                <p className="text-[#6B7280] text-sm">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>
            </div>
        </div>
    );
};

export default Footer;
