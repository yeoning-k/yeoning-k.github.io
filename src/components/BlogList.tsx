import { PostProps } from '@/_interface/posts';
import styles from '@/styles/Component.module.scss';
import Link from 'next/link';
import { FiCalendar } from 'react-icons/fi';

const BlogList = ({ posts }: { posts: PostProps[] }) => {
  return posts?.map((item, idx) => {
    const { id, title, tags, description, date } = item;

    return (
      <div className={`mt-10 mb-10 ${styles.card}`} key={idx}>
        <Link href={`/blog/${id}`}>
          {tags.length > 0 && (
            <div className={`${styles.cart_tags}`}>
              {tags?.map((tag, i) => {
                return <span key={i}>{tag}</span>;
              })}
            </div>
          )}
          <div className={`${styles.card_title}`}>{title}</div>
          <div className={`${styles.card_text}`}>{description}</div>
          <div className={`${styles.card_date}`}>
            <FiCalendar stroke="#999" />
            {date}
          </div>
        </Link>
      </div>
    );
  });
};

export default BlogList;
