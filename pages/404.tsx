import React from 'react';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';

const Custom404 = () => {
    return (
        <Layout home={false}>
            <h2 className={utilStyles.headingLg}>Not Found</h2>
            <br />
            <p> The content you are looking for, is currently unavailable.</p>
        </Layout>
    );
};
export default Custom404;
