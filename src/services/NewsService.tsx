import axios from "axios";

export const NewsService = {
    _apiBase: "https://newsapi.org/v2/",
    _apiKey: "&apiKey=fb3087e6a6ce48739e9a8f0fe5b8cd00",
    async getResource (headlines: string) {
      const res = await axios.get(`${this._apiBase}${headlines}${this._apiKey}`);
      return res;
    }
}