// Importing the NPM packages that we installed
// import * as cheerio from 'cheerio';
// import fetch from 'node-fetch';
// const { JSDOM } = require('jsdom');
// const { Readability } = require('@mozilla/readability');
import { ref } from "vue";

// Function starts here
// const fetchArticleContent = async ( url ) => {
//   const document = ref(null)

//   const getArticleData = async () => {
//     try {
//       // Fetch data from URL and store the response into a const
//       const response = await fetch(url);
//       // Convert the response into text
//       const body = await response.text();
//       // let dom = new JSDOM(body, { url })
//       let parser = new DOMParser();
//       let doc = parser.parseFromString( body, 'text/html' )
//       console.log(doc);
//       document.value = body
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   return { document, getArticleData }
// }
// export default fetchArticleContent

const fetchArticleContent = () => {
  const document = ref(null)

  const getArticleData = async (url) => {
      try {
  // Fetch data from URL and store the response into a const
  const response = await fetch(url);
  // Convert the response into text
  const body = await response.text();
  // let dom = new JSDOM(body, { url })
  let parser = new DOMParser();
  let doc = parser.parseFromString( body, 'text/html' )
  console.log(doc.querySelector('body'));
  const bodyDom = doc.querySelector('.content')
  document.value = bodyDom;
      } catch (err) {
      console.log(err);
      }
  }
  return { document, getArticleData }
}

export default fetchArticleContent

// Run fetchArticleContent
// fetchArticleContent();

// import { APIKEY } from "@/globals/globals";

// export const fetchArticleContent = async ( url ) => {
//     try {
//         const res = await fetch( `https://www.cbssports.com/nfl/news/chiefs-vs-raiders-score-takeaways-travis-kelce-explodes-as-kansas-city-edges-vegas-in-prime-time-shootout/live/`, {
//                 headers: {
//                     "Content-Type": "application/json",
//                     "Access-Control-Allow-Origin": "*",
//                     'Accept': 'application/json',
//                     'Authorization': 'Bearer ' + APIKEY
//                 }
//             });
//             const newsData = await res.json()
//             console.log(newsData);
//     } catch (err) {
//         console.log(err, err.message);
//     }
// }
// fetchArticleContent()

// // const axios = require('axios');
// import axios from 'axios';
// // const { JSDOM } = require('jsdom');
// // const { Readability } = require('@mozilla/readability');

// export const fetchArticleContent = ( url ) => {
//     // ...and download the HTML for it, again with axios
//     axios.get(url, {
//         headers: {
//             "Content-Type": "application/json",
//             "Access-Control-Allow-Origin": "*",
//             "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
//             "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token, Authorization, Accept,charset,boundary,Content-Length"
//         }
//     }).then(function(r2) {
//         console.log(r2);
//         // We now have the article HTML, but before we can use Readability to locate the article content we need jsdom to convert it into a DOM object
//         // let dom = new JSDOM(r2.data, { url });
    
//         // now pass the DOM document into readability to parse
//         // let article = new Readability(dom.window.document).parse();
    
//         // Done! The article content is in the textContent property
//         // console.log(article.textContent);
//     })
// }
// export const fetchArticleContent = ( url ) => {
//     try {
//         axios(url),
//         {
//             headers: {
//                 "Access-Control-Allow-Origin": "*",
//                 // "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
//                 // "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
//               }
//         }
//         .then((response) => {
//           const html = response.data;
//           console.log(html);
//         });
//       } catch (error) {
//         console.log(error, error.message);
//       }
// }