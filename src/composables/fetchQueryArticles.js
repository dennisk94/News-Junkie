import { ref } from "vue";
// import { APIKEY } from "@/globals/globals";

const fetchQueryArticles = () => {
    const queriedArticles = ref(null)
    const error = ref(null)

    const fetchQueriedArticles = async ( q ) => {
        try {
            const res = await fetch(`https://newsapi.org/v2/everything?q=${ q }&language=en`, {
                headers: {
                    'Accept': 'application/json',
                    'Access-Control-Allow-Origin':'*',
                    'Authorization': 'Bearer ' + '16f6938cc5c14aa7ab3ef17f1d678d83'
                }
            });
            const newsData = await res.json()
            // Guard clause if there are no matching articles for the query
            if ( newsData.totalResults.length === 0 ) {
                alert('There were no matching results. Please try another search term.')
                return
            }
            queriedArticles.value = newsData.articles.slice( 0, 20 );
        } catch (err) {
            error.value = 'Something went wrong. Please try again in a few minutes.'
        }
    }
    return { queriedArticles, error, fetchQueriedArticles }
}

export default fetchQueryArticles