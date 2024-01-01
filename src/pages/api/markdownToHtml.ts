import { markdownToTxt } from 'markdown-to-txt';

export const mdToHtmlForDescription = (markdown: string) => {
  const resultText = markdownToTxt(markdown).substring(0, 150) + '...';
  return resultText?.split('\n').join('');
};
