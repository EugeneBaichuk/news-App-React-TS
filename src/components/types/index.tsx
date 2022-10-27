export interface blogListInterface {
    id: number;
    name: string;
    img: string;
    descr: string;
}

export type BlogAddFormProps = {
    isAuth: boolean
    setBlogList: (blogList: Array<blogListInterface>) => void
}

export type BlogCardProps = {
    isAuth: boolean
    img: string,
    name: string,
    descr: string,
    id: number,
    onDeleteCard: (id: number) => (e: React.MouseEvent<HTMLElement>) => void,
}

export interface cardInterface {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: Source;
    title: string;
    url: string;
    urlToImage: string;
}

export interface Source {
    id: string;
    name: string;
}