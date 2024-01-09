import { PostProps } from '@/_interface/posts';
import Image from 'next/image';
import styles from '@/styles/Component.module.scss';
import Link from 'next/link';
import { FiCalendar } from 'react-icons/fi';

const PostItems = ({ cardType, posts }: { cardType: 'image' | 'list'; posts: PostProps[] }) => {
  if (posts?.length <= 0) return <div className="empty">🥲 게시글이 없습니다.</div>;

  const isImageType = cardType === 'image';
  const isListType = cardType === 'list';

  return (
    <div className={`${styles[`post-${cardType}-type`]}`}>
      <ul className={styles.card}>
        {posts?.map((item, idx) => {
          const { id, title, description, thumbnail, tags, date } = item;
          return (
            <li className={styles.card__item} key={idx}>
              <Link className={styles.card__link} href={`/blog/${id}`}>
                {isImageType && !!thumbnail && (
                  <Image
                    className={styles.card__thumbnail}
                    src={thumbnail}
                    width={0}
                    height={0}
                    alt={`${title} thumbnail`}
                  />
                )}
                <div className={styles.card__wrap}>
                  {tags.length > 0 && (
                    <div className={styles.card__tags}>
                      {tags.map((tag, i) => (
                        <span key={i}>{tag}</span>
                      ))}
                    </div>
                  )}
                  <div className={styles.card__title}>{title}</div>
                  <div className={styles.card__text}>{description}</div>
                  {isListType && (
                    <div className={styles.card__date}>
                      <FiCalendar stroke="#999" />
                      {date}
                    </div>
                  )}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PostItems;
