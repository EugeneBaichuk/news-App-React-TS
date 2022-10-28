export interface blogListInterface {
    id: number;
    name: string;
    img: string;
    descr: string;
}

export interface errorInputInterface {
    name: boolean;
    img: boolean;
    descr: boolean;
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

export interface searchStateInterface {
    searchValue: string,
    search: string
}

export interface loginValsInterface {
    name: string,
    email: string
}

export interface formErrorInterface {
    name: boolean,
    email: boolean
}

export type protectedRouteProps = {
    children: any
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

export type CustomLinkProps = {
    children: React.ReactNode,
    to: string,
}

export type NewsCardProps = {
    headline: string,
    cardObj: cardInterface;
    id: number;
    onShowDetails: (id: number) => void
}

export type NewsListProps = {
    headlines: string
    search?: string
}

export type RespDrawerProps = {
    window?: () => Window;
}

export type NavbarProps = {
    handleDrawerToggle: () => void;
}

export interface reduxStateInterface {
    activeCard: any;
    addBlogCardSlice: any;
    login: string;
    email: string;
    name: string;
    search: any;
    searchValue: string;
}
