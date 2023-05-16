
import matter from 'gray-matter';
import remarkParse from "remark-parse";
import { unified } from "unified";
import { Octokit } from '@octokit/core';
import { getPostById } from "@starknet-io/cms-data/src/posts";
async function getContent(id: string, locale: string): Promise<any> {
  let slug;
  let contentHtml;
  let dataTitle;
  async function fetchData() {
      const octokit = new Octokit({ auth: process.env.GITHUB_ACCESS_TOKEN });
      console.log('octokit je --------------------- ', octokit)
      // const response = await fetch(`/api/getPostById?id=${id}&locale=en`);
      // slug = await response.json();
      const response1 = await getPostById(id, locale);
      slug = response1?.slug;
      console.log('response1 1 je ------------- ', response1)
      const response = await octokit.request('GET /repos/{owner}/{repo}/{path}', {
        owner: 'starknet-io',
        repo: 'starknet-website',
        path: `_data/posts/${slug}.yml`,
        ref: `cms/posts/${slug}`, // Use the correct branch based on the slug
      });
      console.log('response je --------------------- ', response)
      const fileBuffer = Buffer.from(response.data.content, 'base64');
      const fileContent = fileBuffer.toString();
    
      const { data, content } = matter(fileContent);
      dataTitle = data.title;
      const processedContent = await unified()
        .use(remarkParse)
        .process(content);
        contentHtml = processedContent.toString();
        console.log('dataTitle je ------------- ', dataTitle)
        console.log('contentHtml je ------------- ', contentHtml)
      return {
        title: dataTitle,
        body: contentHtml,
      };
    }
    fetchData();

}
export default getContent;