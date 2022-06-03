import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';

import Menu from './menu/menu.component';
import FooterBar from './footer/footer.component';

import { TITLE, SITE_TITLE } from '../config/constants';
import { ILayoutProperty } from 'pages/interfaces';

const Layout = (layoutData: ILayoutProperty) => {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Personal website" />
                <meta name="og:title" content={SITE_TITLE} />
            </Head>
            <Menu />
            <br></br>
            <header className={styles.header}>
                {layoutData.home ? (
                    <>
                        <Image
                            priority
                            src="/images/profile.jpg"
                            className={utilStyles.borderCircle}
                            height={144}
                            width={144}
                            alt={TITLE}
                        />
                        <h1 className={utilStyles.heading2Xl}>{TITLE}</h1>
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <a>
                                <Image
                                    priority
                                    src="/images/profile.jpg"
                                    className={utilStyles.borderCircle}
                                    height={108}
                                    width={108}
                                    alt={TITLE}
                                />
                            </a>
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/">
                                <a className={utilStyles.colorInherit}>{TITLE}</a>
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>{layoutData.children}</main>
            {!layoutData.home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
            <br></br>
            <FooterBar></FooterBar>
        </div>
    );
};
export default Layout;
