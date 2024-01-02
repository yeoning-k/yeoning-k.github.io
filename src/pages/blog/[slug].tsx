import PostDetail from '../../components/PostDetail';
import { getAllPostData, getPostDetailData } from '../api/loadPost';
import { useParams } from 'next/navigation';
import { PostDetailProps } from '@/_interface/posts';

const BlogDetailPage = ({ post }: { post: PostDetailProps }) => {
  return <>{<PostDetail data={post} />}</>;
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
