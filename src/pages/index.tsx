import Head from 'next/head';
import Image from 'next/image';
import BlogList from '@/components/BlogList';

export default function Home() {
  return (
    <>
      <Head>
        <title>YEON LOG</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <div className="contents">
          <h1 className="contents__title">Toy Project</h1>
        </div>
        <div className="contents">
          <h1 className="contents__title">Blog</h1>
          <div>
            <BlogList />
          </div>
        </div>
      </main>
    </>
  );
}
