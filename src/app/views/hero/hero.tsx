import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

export const Hero: FC = () => {
  return (
    <main className="container flex items-center justify-between">
      <div className="flex flex-col gap-6 items-start">
        <h2 className="max-w-[25ch] text-left text-7xl italic font-big-noodle">
          Unlock the enhanced competitive experience
        </h2>
        <p className="max-w-[50ch]">
          PlayScrim is a free-to-use and open-source platform that provides a
          competitive experience for Overwatch players of all skill levels.
        </p>
        <div className="flex gap-4">
          <Link
            href="/"
            className="flex items-center font-bold border-[3px] border-[#94e9f7] animate-shine-blue rounded-lg"
          >
            <span className="animate-shine-green py-4 px-5">Get Started</span>
          </Link>
          <Link
            href="/docs"
            className="flex items-center font-bold border-2 border-black py-2 px-4 rounded"
          >
            Documentation
          </Link>
        </div>
      </div>
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
        src="/heros/tracer.png"
        alt=""
        width={500}
        height={651}
        priority
      />
    </main>
  );
};
