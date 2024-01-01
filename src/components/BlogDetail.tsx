import { PostDetailProps } from '../_interface/posts';
import ReactMarkdown from 'react-markdown';

const BlogDetail = ({ data }: { data: PostDetailProps }) => {
  const { title, tags, createDate, content } = data;
  return (
    <>
      <div className="prose">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
      {/* <div dangerouslySetInnerHTML={{ __html: content }} /> */}
    </>
  );
};

export default BlogDetail;
