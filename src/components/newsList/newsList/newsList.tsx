import NewsService from "../../../services"
import { useEffect, useState } from "react";

export const NewsList = () => {
  const [news, setNews] = useState();

  useEffect(() => {
    NewsService.getResource().then(res => {
      let firstResult = res.data.articles[4].content;
      setNews(firstResult);
    })
  }, []);

  return (
  <>
  {!!news && <div >{news}</div>}
  </>
  );
}