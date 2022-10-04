import axios from "axios";
//import puppeteer from 'puppeteer';

export const NewsService = {
    _apiBase: "https://newsapi.org/v2/",
    headlines: "top-headlines?country=ru&category=business",
    _apiKey: "&apiKey=fb3087e6a6ce48739e9a8f0fe5b8cd00",
    async getResource () {
      const res = await axios.get(`${this._apiBase}${this.headlines}${this._apiKey}`);
      return res;
    },
  //   async fetchProductList(url: any) {
  //     const browser = await puppeteer.launch({ 
  //         headless: true, 
  //         defaultViewport: null, 
  //     });
  //     const page = await browser.newPage();
  //     await page.goto(url, { waitUntil: 'networkidle2' });
  // }
}