import { PostProps } from '@/_interface/posts';
import styles from '@/styles/Component.module.scss';
import Link from 'next/link';
import { FiCalendar } from 'react-icons/fi';

const PostItems = ({ posts }: { posts: PostProps[] }) => {
  return posts?.map((item, idx) => {
    const { id, title, tags, description, date } = item;

    return (
      <div className={`mt-10 mb-10 ${styles.card}`} key={idx}>
        <Link href={`/blog/${id}`}>
          {tags.length > 0 && (
            <ul className={styles.card__tags}>
              {tags?.map((tag, i) => {
                return <li key={i}>{tag}</li>;
              })}
            </ul>
          )}
          <div className={`${styles.card__title}`}>{title}</div>
          <div className={`${styles.card__text}`}>{description}</div>
          <div className={`${styles.card__date}`}>
            <FiCalendar stroke="#999" />
            {date}
          </div>
        </Link>
      </div>
    );
  });
};

export default PostItems;
