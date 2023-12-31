import Head from 'next/head';
import Image from 'next/image';
import { Roboto_Mono } from 'next/font/google';

const roboto = Roboto_Mono({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>YEON LOG</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${roboto.className}`}></main>{' '}
    </>
  );
}
