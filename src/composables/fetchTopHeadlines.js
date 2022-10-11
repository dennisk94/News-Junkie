import { ref } from "vue";
import { APIKEY } from "@/globals/globals";

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
            error.value = 'Something went wrong. Please try refreshing the page.'
        }
    }
    // console.log(featuredHeadline.value);
    return { featuredHeadline, headlines, fetchHeadlines }
}

export default fetchTopHeadlines