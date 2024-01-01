import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { markdownToText } from './markdownToHtml';
import { PostDataProps } from '@/_interface/posts';

const BASE_PATH = 'src/_posts';
const POSTS_DIR = path.join(process.cwd(), BASE_PATH);

export const getPostDetailData = async (postId: string) => {
  const file = fs.readFileSync(`${POSTS_DIR}/${postId}.md`, 'utf-8');

  const {
    data: { title, tags, createDate },
    content
  } = matter(file);

  // const post = await markdownToHtml(content || '');

  return {
    title,
    tags,
    date: createDate,
    content: content
  };
};

export const getAllPostData = () => {
  const files = fs.readdirSync(POSTS_DIR);
  const getPostsData = files.map((file) => {
    const id = file.replace(/\.md$/, '');
    const filePath = path.join(POSTS_DIR, file);
    const fileContents = fs.readFileSync(filePath, 'utf-8');

    const {
      data: { title, tags, createDate },
      content
    } = matter(fileContents);
    const description = markdownToText(content || '');

    return {
      id,
      tags,
      title,
      description,
      date: createDate
    };
  });

  return getPostsData.sort((a, b) => (a.date > b.date ? -1 : 1));
};
