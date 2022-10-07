import { APIKEY } from "@/globals/globals";
import { ref } from "vue";

const fetchCategoryArticles = () => {
    const technologyData = ref([])
    const businessData = ref([])
    const sportsData = ref([])
    const countryData = ref([])

    const error = ref(null)

    const fetchArticles = async (category, type) => {
        const query = type === 'country' ? `country=${ category }` : `category=${ category }`;

        try {
            const res = await fetch(`https://newsapi.org/v2/top-headlines?${ query }&language=en`, {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + APIKEY
                }
            });
            const newsData = await res.json()
            const randomNumber1 = Math.floor(Math.random() * 17);
            const randomNumber2 = randomNumber1 + 3;
            switch ( category ) {
                case 'technology':
                    technologyData.value = newsData.articles.slice( randomNumber1, randomNumber2 )
                    break;
                case 'business':
                    businessData.value = newsData.articles.slice( randomNumber1, randomNumber2 )
                    break;
                case 'sports':
                    sportsData.value = newsData.articles.slice( randomNumber1, randomNumber2 )
                    break;
                case 'us':
                    countryData.value = newsData.articles.slice( randomNumber1, randomNumber2 )
                    break;
                default:
                    break;
            }
        } catch (err) {
            error.value = err.message
        }
    }
    return { technologyData, businessData, sportsData, countryData, error, fetchArticles }
}

export default fetchCategoryArticles