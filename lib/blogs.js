import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const blogsDirectory = path.join(process.cwd(), 'blogs');


/**
 * A function to go through all the post available in blogs
 * folder and return their file name as id's
 * @returns list of blog past name's as ID
 */
export function getAllBlogPostIds() {
  const postNames = fs.readdirSync(blogsDirectory);
  return postNames.map((postName)=> {
    return {
      params: {
        id: postName.replace(/\.md$/, '')
      }
    }
  })
}


/**
 * a function to give post data 
 * @returns 
 */
export async function getBlogPostDataById(postId) {
const fullPath = path.join(blogsDirectory, `${postId}.md`);
const postContent = fs.readFileSync(fullPath, 'utf-8');

const metaData = matter(postContent);
// convert the markdown into HTML string
const processedContent = await remark()
    .use(html)
    .process(metaData.content);
  const contentHtml = processedContent.toString();

return {
  postId, 
  contentHtml,
  ...metaData.data
}
}

export async function getSortedBlogData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(blogsDirectory);
  const allBlogData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(blogsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allBlogData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}