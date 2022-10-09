import {Link, useMatch} from  'react-router-dom';
import {FC} from 'react';

type Props = {
    children: React.ReactNode,
    to: string,
}

export const CustomLink: FC<Props> = ({children, to, ...props}) => {
    const much = useMatch(to);
    return (
        <Link to={to}
        {...props}
        style ={{color: much ? "green": "black", padding: 2, textDecoration: "none"}}
        >
            {children}
        </Link>
    )
}