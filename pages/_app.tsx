import React from 'react';

import '../styles/global.css';
import { IApp } from './interfaces';

const App = (props: IApp) => {
    return <props.Component {...props.pageProps} />;
};

export default App;
