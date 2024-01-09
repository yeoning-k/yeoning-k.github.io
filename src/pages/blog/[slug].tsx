import PostDetail from '@/components/PostDetail';
import UtterancesComments from '@/components/UtterancesComments';
import { getAllPostData, getPostDetailData } from '@/pages/api/loadPost';
import { PostDetailProps, PostProps } from '@/_interface/posts';

const BlogDetailPage = ({
  post,
  prevPost,
  nextPost
}: {
  post: PostDetailProps;
  prevPost: PostProps;
  nextPost: PostProps;
}) => {
  return (
    <div className="wrap">
      <PostDetail data={post} prevPost={prevPost} nextPost={nextPost} />
      <div className="contents">
        <h3 className="contents__title">댓글달기 💬</h3>
        <UtterancesComments />
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const allPostsData = await getAllPostData('post');
  const paths = allPostsData?.map((post) => ({
    params: { slug: post.id }
  }));

  return {
    paths,
    fallback: false
  };
};
export const getStaticProps = async ({ params: { slug } }: { params: { slug: string } }) => {
  const detailData = await getPostDetailData(slug);
  const allPostsData = getAllPostData('post');
  const postIdx = allPostsData?.findIndex((post) => post.id === slug);

  return {
    props: {
      post: detailData,
      prevPost: (postIdx !== undefined && allPostsData?.[postIdx - 1]) || null,
      nextPost: (postIdx !== undefined && allPostsData?.[postIdx + 1]) || null
    }
  };
};

export default BlogDetailPage;
