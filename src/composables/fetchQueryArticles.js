import { ref } from "vue";
import { APIKEY } from "@/globals/globals";

const fetchQueryArticles = () => {
    const queriedArticles = ref(null)
    const error = ref(null)

    const fetchQueriedArticles = async ( q ) => {
        try {
            const res = await fetch(`https://newsapi.org/v2/everything?q=${ q }&language=en`, {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + APIKEY
                }
            });
            const newsData = await res.json()
            queriedArticles.value = newsData.articles.slice( 0, 20 );
        } catch (err) {
            error.value = err.message
        }
    }
    return { queriedArticles, error, fetchQueriedArticles }
}

export default fetchQueryArticles