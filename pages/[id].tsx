import React from 'react';
import { IPost } from './interfaces';
import Date from '../components/date/date.component';
import { getAllBlogPostIds, getBlogPostDataById } from '../lib/blogs';
import utilStyles from '../styles/utils.module.css';

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

const Post = ({ title, date, contentHtml }: IPost) => {
    return (
        <>
            <h2 className={utilStyles.headingLg}> {title}</h2>
            <br />
            <Date date={date}></Date>
            <br />
            <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </>
    );
};
export default Post;
