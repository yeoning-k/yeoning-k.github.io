/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import styles from '@/styles/Post.module.scss';
import { getAllPostData } from '@/pages/api/loadPost';
import { PostProps } from '@/_interface/posts';
import PostItems from '@/components/PostItems';
import classNames from 'classnames';
import PageTtitle from '@/components/PageTitle';
import { FiSearch } from 'react-icons/fi';

const BlogListPage = ({ posts }: { posts: string }) => {
  const searchParams = useSearchParams();
  const params = searchParams.get('tag');

  const router = useRouter();
  const { pathname } = router;

  const postDatas = JSON.parse(posts) as PostProps[];
  const allTags = postDatas?.map((item) => item.tags).flat();
  const uniqueTags = allTags.filter((item, idx) => allTags.indexOf(item) === idx);

  const [activeTab, setActiveTab] = useState<string>('');
  const [postList, setPostList] = useState<PostProps[]>([]);
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    setActiveTab(params ?? 'all');
  }, [params]);

  useEffect(() => {
    const filterDatas = postDatas.filter((item) => {
      const title = item.title.toLowerCase();
      if (activeTab === 'all') {
        return title.includes(search);
      }
      return item.tags.includes(activeTab) && title.includes(search);
    });
    setPostList(filterDatas);
  }, [activeTab, search]);

  return (
    <div className="wrap">
      <PageTtitle title="Blog" text="쪼랭이 개발자의 개발일기" emoji="📔" />
      <div className={`contents ${styles['blog']}`}>
        {uniqueTags?.length > 0 && (
          <ul className={styles.tab__menu}>
            <li
              onClick={() => router.push(`${pathname}`)}
              className={classNames({ [styles['tab__menu--active']]: activeTab === 'all' })}
            >
              <p>#All</p>
            </li>
            {uniqueTags.map((tag, idx) => {
              return (
                <li
                  key={idx}
                  onClick={() => router.push(`${pathname}?tag=${tag}`)}
                  className={classNames({ [styles['tab__menu--active']]: activeTab === tag })}
                >
                  <p>#{tag}</p>
                </li>
              );
            })}
          </ul>
        )}
        <div className={styles['tag-list']}>
          <div className={styles['tag-list__header']}>
            <h3 className="contents__title">All Posts ({postList.length})</h3>
            <div className={styles['tag-list__search']}>
              <input
                type="text"
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
                placeholder="블로그 제목 검색하기"
              />
              <FiSearch />
            </div>
          </div>
          <PostItems cardType="list" posts={postList} />
        </div>
      </div>
    </div>
  );
};

export default BlogListPage;

export const getStaticProps = () => {
  const allPostsData = getAllPostData('post');

  const posts = JSON.stringify(allPostsData);
  return {
    props: { posts }
  };
};
