import matter from 'gray-matter';
import remarkParse from "remark-parse";
import { unified } from "unified";
import { Octokit } from '@octokit/core';

const octokit = new Octokit({ auth: process.env.GITHUB_ACCESS_TOKEN });
async function getContent(id: string, locale: string): Promise<any> {
  let slug;
    async function fetchData() {
      const response = await fetch(`/api/getPostById?id=${id}&locale=en`);
      slug = await response.json();
    }
    fetchData();
  
  const response = await octokit.request('GET /repos/{owner}/{repo}/{path}', {
    owner: 'starknet-io',
    repo: 'starknet-website',
    path: `data/posts/en/${id}.json`,
    ref: `cms/posts/${slug}`, // Use the correct branch based on the slug
  });

  const fileBuffer = Buffer.from(response.data.content, 'base64');
  const fileContent = fileBuffer.toString();

  const { data, content } = matter(fileContent);

  const processedContent = await unified()
    .use(remarkParse)
    .process(content);
  const contentHtml = processedContent.toString();

  return {
    title: data.title,
    body: contentHtml,
  };
}
export default getContent;