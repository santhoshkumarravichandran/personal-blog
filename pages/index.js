import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import Date from '../components/date/date.component'
import utilStyles from '../styles/utils.module.css';

import { getSortedBlogData } from '../lib/blogs';

export async function getStaticProps() {
  const allPostsData = await getSortedBlogData();
  return {
    props: {
      allPostsData,
    },
  };
}


export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
        Passionate software engineer with 12 years of experience, Highly experienced in all aspect of software development lifecycle.My Practical experience includes designing and implementing Digital Customer Experience platform using NX Workspace following Domain Driven Design pattern supporting Multi-brand Multi-theme Micro-Frontend Architecture and Micro-Service using Latest Angular, Node and Nx-Dev Tools in AWS Cloud Platform. Defining the strategies for source code management, continuous integration and deployment, Artifact management and release patterns
        </p>
        <p>
        <a href="https://www.linkedin.com/in/santhosh-kumar-ravichandran-04711024/">Santhosh Kumar(LinkedIn)</a>
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Recent Blogs</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={id}>{title}
              </Link>
              <br />
              <Date dateString={date}></Date>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}