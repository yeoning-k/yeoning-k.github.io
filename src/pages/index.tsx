import Head from 'next/head';
import Link from 'next/link';
import { getAllPostData } from './api/loadPost';
import PostItems from '@/components/PostItems';
import { PostProps } from '@/_interface/posts';
import { categoryLink } from '@/pages/_constans';
import PageTtitle from '@/components/PageTitle';

export default function Home({ posts, project, ...props }: { project: string; posts: string }) {
  const postDatas = JSON.parse(posts) as PostProps[];
  const projectDatas = JSON.parse(project) as PostProps[];

  return (
    <>
      <Head>
        <title>YEON LOG</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <div className="wrap">
          <PageTtitle title="yeoning" text="Front-end developer" image="/img/me.png" />
          <div className="contents">
            <h3 className="contents__title">
              Project
              <Link className="more__btn" href={categoryLink['project']}>
                더보기 →
              </Link>
            </h3>
            <PostItems cardType="image" posts={projectDatas} />
          </div>
          <div className="contents">
            <h3 className="contents__title">
              Recent Posts
              <Link className="more__btn" href={categoryLink['blog']}>
                더보기 →
              </Link>
            </h3>
            <PostItems cardType="list" posts={postDatas} />
          </div>
        </div>
      </main>
    </>
  );
}

export const getStaticProps = () => {
  const allPostsData = getAllPostData('post');
  const allProjectData = getAllPostData('project');

  const posts = JSON.stringify(allPostsData?.slice(0, 3));
  const project = JSON.stringify(allProjectData?.slice(0, 4));
  return {
    props: { posts, project }
  };
};
