import NewsList from "../../components/_common/newsList";
import {FC} from "react";
import "./home.css";

const Home: FC = () => {
    return (
        <NewsList headlines={'general'}/>
    )
}

export default Home;