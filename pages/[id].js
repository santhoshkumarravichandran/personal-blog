import Layout from '../components/layout';
import Date from '../components/date/date.component';
import { getAllBlogPostIds, getBlogPostDataById } from '../lib/blogs';
import utilStyles from '../styles/utils.module.css'



export async function getStaticPaths() {
  const paths = getAllBlogPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const blogPostData = await getBlogPostDataById(params.id);
  return {
    props: {
      blogPostData,
    },
  };
}


export default function Post({ blogPostData }) {
    return (
      <Layout>
         <h2 className={utilStyles.headingLg}> {blogPostData.title}</h2>
        <br />
       <Date dateString={blogPostData.date}></Date>
        <br></br>
        <div dangerouslySetInnerHTML={{ __html: blogPostData.contentHtml }} />
      </Layout>
    );
  }