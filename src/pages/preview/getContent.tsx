import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';
import { Octokit } from '@octokit/core';
import { getPostById } from "@starknet-io/cms-data/src/posts";

const octokit = new Octokit({ auth: process.env.GITHUB_ACCESS_TOKEN });
async function getContent(id: string, locale: string): Promise<any> {
  const { slug } = await getPostById(id, 'en');
  
  
  const response = await octokit.request('GET /repos/{owner}/{repo}/{path}', {
    owner: 'starknet-io',
    repo: 'starknet-website',
    path: `data/posts/en/${id}.json`,
    ref: `cms/posts/${slug}`, // Use the correct branch based on the slug
  });

  const fileBuffer = Buffer.from(response.data.content, 'base64');
  const fileContent = fileBuffer.toString();

  const { data, content } = matter(fileContent);

  const processedContent = await remark()
    .use(html)
    .process(content);
  const contentHtml = processedContent.toString();

  return {
    title: data.title,
    body: contentHtml,
  };
}
export default getContent;