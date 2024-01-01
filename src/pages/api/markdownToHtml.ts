// import { remark } from 'remark';
// import html from 'remark-html';
import { markdownToTxt } from 'markdown-to-txt';

// export default async function markdownToHtml(markdown: string) {
//   const result = await remark().use(html).process(markdown);
//   return result.toString();
// }

// export const markdownToHtml = async (markdown: string) => {
//   const resultText = await remark().use(html).process(markdown);
//   return resultText.toString();
// };

export const markdownToText = (markdown: string) => {
  const resultText = markdownToTxt(markdown).substring(0, 150) + '...';
  return resultText?.split('\n').join('');
};
