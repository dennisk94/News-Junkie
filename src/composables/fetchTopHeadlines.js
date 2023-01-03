import { ref } from "vue";
// import { APIKEY } from "@/globals/globals";

const fetchTopHeadlines = () => {
    const featuredHeadline = ref([])
    const headlines = ref([])
    const error = ref(null)

    const fetchHeadlines = async () => {
        try {
            const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us`, {
                headers: {
                    'Accept': 'application/json',
                    'Access-Control-Allow-Origin':'*',
                    'Authorization': 'Bearer ' + '16f6938cc5c14aa7ab3ef17f1d678d83'
                }
            });
            const newsData = await res.json()
            featuredHeadline.value = newsData.articles.slice(0, 1)
            headlines.value = newsData.articles.slice(1, 4)
        } catch (err) {
            error.value = 'Something went wrong. Please try refreshing the page.'
        }
    }
    return { featuredHeadline, headlines, fetchHeadlines }
}

export default fetchTopHeadlines