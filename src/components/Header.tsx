import { Fragment } from 'react';
import Link from 'next/link';
import { Noto_Sans_KR } from 'next/font/google';
import { FiFile, FiFolder, FiUser, FiSun, FiMoon } from 'react-icons/fi';

const notoSans_KR = Noto_Sans_KR({ subsets: ['latin'] });

interface CategoryType {
  name: string;
  link: string;
  icon: React.ReactNode;
}
const categoryItems: CategoryType[] = [
  {
    name: 'Blog',
    link: '/blog',
    icon: <FiFile stroke="#999" />
  },
  {
    name: 'Project',
    link: '/work',
    icon: <FiFolder stroke="#999" />
  },
  {
    name: 'About Me',
    link: '/about',
    icon: <FiUser stroke="#999" />
  }
];

export default function Header() {
  return (
    <header className={`header ${notoSans_KR.className}`}>
      <h1 className="header__logo">
        <Link href="/">
          <span className="header__logo-icon">👩🏼‍💻</span>
          yeon.log
        </Link>
      </h1>
      <div className="header__category">
        {categoryItems?.map((item, idx) => {
          const { name, link, icon } = item;
          return (
            <Link key={idx} href={link}>
              {name}
              {icon}
            </Link>
          );
        })}
      </div>
      <div className="header__theme">{/* <BsSun className="header__theme-btn" /> */}</div>
    </header>
  );
}
