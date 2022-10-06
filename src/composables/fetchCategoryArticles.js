import { APIKEY } from "@/globals/globals";
import { ref } from "vue";

const fetchCategoryArticles = ( category ) => {
    const articleData = ref([])
    const error = ref(null)

    const fetchArticles = async (category) => {
        try {
            const res = await fetch(`https://newsapi.org/v2/top-headlines?category=${ category }&language=en`, {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + APIKEY
                }
            });
            const newsData = await res.json()
            const randomNumber1 = Math.floor(Math.random() * 17);
            const randomNumber2 = randomNumber1 + 3;
            articleData.value = newsData.articles.slice( randomNumber1, randomNumber2 )
        } catch (err) {
            error.value = err.message
        }
    }
    return { articleData, error, fetchArticles }
}

export default fetchCategoryArticles