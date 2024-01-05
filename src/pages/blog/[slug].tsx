import PostDetail from '@/components/PostDetail';
import UtterancesComments from '@/components/UtterancesComments';
import { getAllPostData, getPostDetailData } from '@/pages/api/loadPost';
import { PostDetailProps } from '@/_interface/posts';
import styles from '@/styles/Component.module.scss';

const BlogDetailPage = ({ post }: { post: PostDetailProps }) => {
  return (
    <>
      <div className="contents">
        <PostDetail data={post} />
      </div>
      <div className={`contents ${styles['post-body']}`}>
        <UtterancesComments />
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const allPostsData = await getAllPostData();
  const paths = allPostsData.map((post) => ({
    params: { slug: post.id }
  }));

  return {
    paths,
    fallback: false
  };
};
export const getStaticProps = async ({ params: { slug } }: { params: { slug: string } }) => {
  const detailData = await getPostDetailData(slug);

  return {
    props: { post: detailData }
  };
};

export default BlogDetailPage;
