export interface IDate {
    date: string;
}
export interface IPostData extends IDate {
    id: string;
    title: string;
}
export interface IPost extends IPostData {
    contentHtml: string;
}

export interface ILayoutProperty {
    children: any;
    home: boolean;
}

export interface IApp {
    Component: any;
    pageProps: any;
}
