import {Link, useMatch} from  'react-router-dom';
import {FC} from 'react';
import {CustomLinkProps} from "../../types"

export const CustomLink: FC<CustomLinkProps> = ({children, to, ...props}) => {
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