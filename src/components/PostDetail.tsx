import { PostDetailProps } from '../_interface/posts';
import { FiCalendar } from 'react-icons/fi';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula, prism } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import markdownStyles from '@/styles/Markdown.module.css';
import styles from '@/styles/Component.module.scss';

const PostDetail = ({ data }: { data: PostDetailProps }) => {
  const { title, tags, date, content } = data;
  return (
    <>
      <div className={styles['post-header']}>
        {tags.length > 0 && (
          <ul className={styles.post__tags}>
            {tags?.map((tag, i) => {
              return <li key={i}>{tag}</li>;
            })}
          </ul>
        )}
        <div className={styles.post__wrap}>
          <h1 className={styles.post__title}>{title}</h1>
          <div className={`${styles.post__date}`}>
            <FiCalendar stroke="#999" />
            {date}
          </div>
        </div>
      </div>
      <div className={styles['post-body']}>
        <div className={markdownStyles['markdown-body']} data-theme="light" prefers-color-scheme="light">
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
    </>
  );
};

export default PostDetail;
