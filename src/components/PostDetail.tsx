import Link from 'next/link';
import { categoryLink } from '@/pages/_constans';
import { PostDetailProps, PostProps } from '@/_interface/posts';
import { FiCalendar } from 'react-icons/fi';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula, prism } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import markdownStyles from '@/styles/Markdown.module.css';
import styles from '@/styles/Post.module.scss';

const PostDetail = ({
  data,
  prevPost,
  nextPost
}: {
  data: PostDetailProps;
  prevPost: PostProps;
  nextPost: PostProps;
}) => {
  const { title, tags, date, content } = data;
  return (
    <>
      <div className={styles['post-header']}>
        <h1 className={styles.post__title}>{title}</h1>
        <div className={`${styles.post__date}`}>
          <FiCalendar stroke="#999" />
          {date}
        </div>
        {tags.length > 0 && (
          <div className={styles.post__tags}>
            {tags.map((tag, i) => (
              <span key={i}>{tag}</span>
            ))}
          </div>
        )}
      </div>
      <div className={styles['post-body']}>
        <div
          className={markdownStyles['markdown-body']}
          data-theme="light"
          prefers-color-scheme="light"
        >
          <ReactMarkdown
            components={{
              code({ node, inline, className, children, ...props }: any) {
                const match = /language-(\w+)/.exec(className || '');

                return !inline && match ? (
                  <SyntaxHighlighter
                    className={markdownStyles.code}
                    style={prism} // try passing different color schemes, drak, dracula etc.
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code>{children}</code>
                );
              }
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </div>
      <div className={styles['post-footer']}>
        <div className={styles.post__button}>
          <Link href={categoryLink['blog']}>목록보기</Link>
        </div>
        <ul className={styles.post__navigator}>
          {!!prevPost && (
            <li>
              <span className={styles.navigator__title}>이전글</span>
              <Link className={styles.navigator__link} href={`/blog/${prevPost.id}`}>
                {prevPost.title}
              </Link>
            </li>
          )}
          {!!nextPost && (
            <li>
              <span className={styles.navigator__title}>다음글</span>
              <Link className={styles.navigator__link} href={`/blog/${nextPost.id}`}>
                {nextPost.title}
              </Link>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default PostDetail;
