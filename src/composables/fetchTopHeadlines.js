import { ref } from "vue";
// const APIKEY = "91ee0a843cd04e0d84abf0eea02b880e";
const APIKEY = "16f6938cc5c14aa7ab3ef17f1d678d83";

const fetchTopHeadlines = () => {
    const featuredHeadline = ref([])
    const headlines = ref([])
    const error = ref(null)

    const fetchHeadlines = async () => {
        try {
            const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us`, {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + APIKEY
                }
            });
            const newsData = await res.json()
  
            featuredHeadline.value = newsData.articles.slice(0, 1)

            headlines.value = newsData.articles.slice(1, 4)
        } catch (err) {
            error.value = err.message
        }
    }
    return { featuredHeadline, headlines, error, fetchHeadlines }
}

export default fetchTopHeadlines