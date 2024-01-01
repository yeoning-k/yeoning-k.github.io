import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { mdToHtmlForDescription } from './markdownToHtml';
import { PostProps } from '@/_interface/posts';

const BASE_PATH = 'src/_posts';
const POSTS_DIR = path.join(process.cwd(), BASE_PATH);

export const getPostBySlug = (slug: string) => {
  const id = slug.replace(/\.md$/, '');
  const filePath = path.join(POSTS_DIR, slug);
  const fileContents = fs.readFileSync(filePath, 'utf-8');

  const { data, content } = matter(fileContents);

  return {
    id,
    data,
    content
  };
};

export const getAllPosts = () => {
  const slugs = fs.readdirSync(POSTS_DIR);
  const getPostsData = slugs.map((slug) => {
    const { id, data, content } = getPostBySlug(slug);
    console.log('data', data);
    const convertContent = mdToHtmlForDescription(content || '');
    return {
      id,
      data: {
        ...(data as PostProps),
        description: convertContent
      }
    };
  });
  return getPostsData.sort((a, b) => (a.data < b.data ? -1 : 1));
};
