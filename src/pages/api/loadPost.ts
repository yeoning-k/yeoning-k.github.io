import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { markdownToText } from './markdownToHtml';
import { PostDataProps } from '@/_interface/posts';

const POST_PATH = 'src/_posts';
const PROJECT_PATH = 'src/_project';

const DATA_DIR: {
  post: string;
  project: string;
} = {
  post: path.join(process.cwd(), POST_PATH),
  project: path.join(process.cwd(), PROJECT_PATH)
};

export const getPostDetailData = async (postId: string) => {
  const file = fs.readFileSync(`${DATA_DIR['post']}/${postId}.md`, 'utf-8');

  const {
    data: { title, tags, createDate },
    content
  } = matter(file);

  return {
    title,
    tags,
    date: createDate,
    content: content
  };
};

export const getAllPostData = (dir: 'post' | 'project') => {
  if (!DATA_DIR[dir]) return;
  const files = fs.readdirSync(DATA_DIR[dir]);
  const getPostsData = files.map((file) => {
    const id = file.replace(/\.md$/, '');
    const filePath = path.join(DATA_DIR[dir], file);
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    const {
      data: { title, tags, createDate, description, thumbnail },
      content
    } = matter(fileContents);
    const mdContent = markdownToText(content || '');

    return {
      id,
      tags,
      title,
      description: description || mdContent,
      thumbnail,
      date: createDate
    };
  });

  return getPostsData.sort((a, b) => (a.date > b.date ? -1 : 1));
};
