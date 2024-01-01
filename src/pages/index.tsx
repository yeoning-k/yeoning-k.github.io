import Head from 'next/head';
import Image from 'next/image';
import BlogList from '@/components/BlogList';
import { getAllPostData } from './api/loadPost';
import { PostProps } from '@/_interface/posts';

export default function Home({ posts, ...props }: { posts: string }) {
  const datas = JSON.parse(posts) as PostProps[];

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
            <BlogList posts={datas} />
          </div>
        </div>
      </main>
    </>
  );
}

export const getStaticProps = () => {
  const allPostsData = getAllPostData();
  const posts = JSON.stringify(allPostsData);
  return {
    props: { posts }
  };
};
