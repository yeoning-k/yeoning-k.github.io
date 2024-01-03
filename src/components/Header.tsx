import Link from 'next/link';
import { Roboto_Mono } from 'next/font/google';
import { FiFile, FiFolder, FiUser, FiSun, FiMoon, FiGithub } from 'react-icons/fi';

const roboto = Roboto_Mono({ subsets: ['latin'], weight: ['700'] });

interface CategoryType {
  name: string;
  link: string;
  icon: React.ReactNode;
}
const categoryItems: CategoryType[] = [
  {
    name: 'Blog',
    link: '/blog/list',
    icon: <FiFile stroke="#999" />
  },
  {
    name: 'Project',
    link: '/work/list',
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
    <header className={`header`}>
      <h1 className={`header__logo  ${roboto.className}`}>
        <Link href="/">
          <span className="header__logo-icon">👩🏼‍💻</span>
          yeon.log
        </Link>
      </h1>
      <p className="header__description">made by yeoning</p>
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
      <div className="header__utils">
        <div className="button button__theme">
          <FiSun />
        </div>
        <Link href="/" className="button button__link">
          <FiGithub />
        </Link>
      </div>
    </header>
  );
}
