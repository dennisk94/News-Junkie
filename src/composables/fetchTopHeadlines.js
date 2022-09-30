const APIKEY = "91ee0a843cd04e0d84abf0eea02b880e";

export const fetchTopHeadlines = async () => {

    const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us`, {
        headers: {
            'Accept': 'application/json',
            // 'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + APIKEY
        }
    });

    let rawNewsData = await res.json();
    console.log(rawNewsData.articles);
}