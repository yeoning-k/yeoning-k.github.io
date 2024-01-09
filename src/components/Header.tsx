/* eslint-disable react-hooks/exhaustive-deps */
import { useLayoutEffect, useCallback, useState } from 'react';

import Link from 'next/link';
import { Roboto_Mono } from 'next/font/google';
import { FiSun, FiMoon, FiGithub } from 'react-icons/fi';
import { categoryLink } from '@/pages/_constans';
import classNames from 'classnames';

const Roboto = Roboto_Mono({ subsets: ['latin'], weight: ['700'] });
const categoryItems: string[] = ['Blog', 'Project', 'About me'];

export default function Header() {
  const [isFixed, setIsFixed] = useState(false);
  const [isVisivle, setIsVisivle] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(
    (e: Event) => {
      const currentScrollY = window.scrollY;

      setIsFixed(currentScrollY > 0 ? true : false);
      setIsVisivle(currentScrollY > lastScrollY ? false : true);
      setLastScrollY(currentScrollY);
    },
    [lastScrollY]
  );

  useLayoutEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={classNames('header', { 'header--fix': isFixed, 'header--hide': !isVisivle })}
    >
      <div className="wrap">
        <h1 className={`header__logo ${Roboto.className}`}>
          <Link href="/">yeon.log</Link>
        </h1>
        <div className="header__category">
          {categoryItems?.map((item, idx) => {
            const link = categoryLink[item.toLowerCase().replaceAll(' ', '')];
            return (
              <Link key={idx} href={link}>
                {item}
              </Link>
            );
          })}
        </div>
        <div className="header__utils">
          <Link href="/" className="button button__link">
            <FiGithub />
          </Link>
          <div className="button button__theme">
            <FiSun />
            {/* <FiMoon /> */}
          </div>
        </div>
      </div>
    </header>
  );
}
