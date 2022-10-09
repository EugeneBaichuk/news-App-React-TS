import {Link, useMatch} from  'react-router-dom';

export const CustomLink = ({children, to, ...props}) => {
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