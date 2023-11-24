import Link from 'next/link';
import { FC } from 'react';

const navigation = [{ name: 'Home', href: '/' }];

export const Nav: FC = () => {
  return (
    <div className="container flex justify-between items-center">
      <h1 className="text-5xl font-big-noodle">
        PLAYSCRIM
        <span className="text-[#f06414]">.</span>
      </h1>
      <div>
        {navigation.map(({ name, href }) => (
          <Link key={name} href={href}>
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
};
