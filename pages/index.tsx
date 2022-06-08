import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { TITLE } from '../config/constants';
import { IPostData } from './interfaces';
import { getSortedBlogData } from '../lib/blogs';

export async function getStaticProps() {
    const allPostsData = await getSortedBlogData();
    return {
        props: {
            allPostsData,
        },
    };
}

const HomeComponent = (allPostsData: IPostData[]) => {
    return (
        <Layout home>
            <Head>
                <title>{TITLE}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>
                    Passionate software engineer with 12 years of experience, Highly experienced in all aspect of
                    software development lifecycle.My Practical experience includes designing and implementing Digital
                    Customer Experience platform using NX Workspace following Domain Driven Design pattern supporting
                    Multi-brand Multi-theme Micro-Frontend Architecture and Micro-Service using Latest Angular, Node and
                    Nx-Dev Tools in AWS Cloud Platform. Defining the strategies for source code management, continuous
                    integration and deployment, Artifact management and release patterns
                </p>
                <p>
                    <a href="https://www.linkedin.com/in/santhosh-kumar-ravichandran-04711024/">
                        Santhosh Kumar(LinkedIn)
                    </a>
                </p>
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Recent Blogs</h2>
                <ul className={utilStyles.list}>
                    {/* {allPostsData?.map(({ id, date, title }: IPostData) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={id}>
                                <a>{title} </a>
                            </Link>
                            <br />
                            <Date date={date}></Date>
                        </li>
                    ))} */}
                </ul>
            </section>
        </Layout>
    );
};

export default HomeComponent;
