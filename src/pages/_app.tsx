import '@/styles/reset.css';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import Header from '@/components/Header';
import { Noto_Sans_KR } from 'next/font/google';
const NotoSans_KR = Noto_Sans_KR({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <div id="container" className={NotoSans_KR.className}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
