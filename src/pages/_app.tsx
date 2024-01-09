import '@/styles/reset.css';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import Header from '@/components/Header';
import { Noto_Sans } from 'next/font/google';

const NotoSans = Noto_Sans({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <div id="container" className={NotoSans.className}>
        <Component {...pageProps} />
      </div>
      <div className="footer">
        <p className="copyright">
          Made by <b>yeoning</b> (c) 2024 yeoning-k all rights reserved.
        </p>
      </div>
    </>
  );
}
