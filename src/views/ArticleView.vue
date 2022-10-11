<template>
  <!-- <div class="article-page"> -->
  <div>{{ document }}</div>
  <!-- <div class="article-heading">
      <h1 class="article-title">Title of the article goes here. Thank you</h1>
      <div class="article-attribution">
        <p class="article-source">BBC</p>
        <p class="article-published">05/01/2021</p>
      </div>
    </div>
    <div class="img-wrapper">
      <img :src="placeholder" alt="title" />
    </div>
    <div class="article-body">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ipsa
      dolor a itaque blanditiis, eius optio consequuntur iure facere velit alias
      temporibus ducimus doloribus, voluptatem adipisci similique soluta
      deleniti! Quisquam! Lorem, ipsum dolor sit amet consectetur adipisicing
      elit. Eligendi qui vitae corporis veniam consectetur ducimus, quisquam
      molestiae? Ad, quo natus. Sed accusantium quibusdam assumenda, esse fugiat
      numquam in rem nesciunt! Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Impedit perferendis officia saepe molestias recusandae
      animi dicta odit perspiciatis sunt id nihil corrupti ad, delectus laborum
      earum rerum nobis deserunt corporis! Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Totam eligendi perferendis, magni alias
      voluptates tempora quis minus, vel perspiciatis provident eius sint
      exercitationem rem ipsa. Consectetur odio aut inventore atque? Lorem ipsum
      dolor sit amet consectetur adipisicing elit. Quam perferendis error unde
      debitis reiciendis? Repudiandae in id ut cumque suscipit architecto nihil
      maiores quisquam nostrum natus corporis fuga, assumenda ea. Lorem ipsum
      dolor sit, amet consectetur adipisicing elit. Vitae iure dolorem autem
      saepe adipisci, corrupti voluptatum tenetur provident quasi iste esse sint
      perferendis, eius delectus dolores quibusdam odio ratione eligendi! Lorem
      ipsum dolor, sit amet consectetur adipisicing elit. Autem beatae, maxime
      suscipit repellendus praesentium facilis commodi maiores officia incidunt
      itaque quos harum nulla sapiente alias architecto modi nam id asperiores?
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea atque culpa
      non rem omnis facere corrupti aperiam rerum quisquam, ad reiciendis, error
      ducimus quia cupiditate, quos dolorem. Quas, et error! Lorem ipsum dolor
      sit amet consectetur adipisicing elit. Aut aliquid debitis dolorem
      excepturi explicabo tempora? Ipsum ab accusamus itaque perspiciatis
      temporibus at, repudiandae rem eos obcaecati deserunt earum adipisci
      aspernatur. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      Tempore, nobis! Quas ipsam ipsa ex vitae nesciunt suscipit voluptas, quam
      eius aspernatur praesentium fugit voluptates velit sunt! Tempore quae
      dolor voluptates. Lorem ipsum dolor sit, amet consectetur adipisicing
      elit. Voluptatum alias, quisquam doloremque sit impedit veniam ullam sed
      quia natus eius rem autem eligendi obcaecati ratione nulla ea
      consequuntur! Commodi, beatae! Lorem ipsum dolor sit, amet consectetur
      adipisicing elit. Aperiam animi suscipit iure velit nesciunt delectus, et
      consectetur nam exercitationem debitis tenetur cum voluptas facilis
      officia modi eum natus consequatur nobis. Lorem ipsum dolor sit amet
      consectetur, adipisicing elit. Modi omnis officiis ipsa earum! Error, a
      officia. Excepturi doloremque velit, porro magnam nisi assumenda corporis
      impedit atque doloribus accusamus eius iusto? Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Blanditiis iure perferendis, maiores nostrum
      quaerat cumque atque saepe expedita voluptatem tenetur velit nisi. Nam
      nihil perspiciatis cumque facilis quam alias inventore. Lorem ipsum dolor
      sit amet consectetur adipisicing elit. Officiis, delectus? Quibusdam a
      necessitatibus molestias fugiat. Excepturi a vero sapiente deserunt maxime
      tempore similique eveniet quod repellat. Quod velit ut reiciendis. Lorem,
      ipsum dolor sit amet consectetur adipisicing elit. Maxime impedit expedita
      corporis cumque autem, distinctio facere, vero temporibus fugit inventore
      illum nam iste in facilis pariatur sit quis aliquid omnis? Lorem ipsum
      dolor sit amet consectetur adipisicing elit. Aspernatur unde, inventore
      vel facere quas assumenda illo magnam iusto architecto veniam quibusdam
      error est consequatur enim nam esse quaerat asperiores nesciunt?
    </div> -->
  <!-- </div> -->
</template>

<script>
import placeholder from "../assets/img/placeholder.jpg";
import fetchArticleContent from "../composables/fetchArticleContent";

export default {
  props: ["url"],
  setup() {
    const link = localStorage.getItem("link");
    const { document, getArticleData } = fetchArticleContent();
    getArticleData(link);
    console.log(document);

    return { placeholder, document };
  },
};
</script>

<style>
.article-page {
  margin: 3rem 1rem;
}
.article-page .article-title {
  font-size: 1.5rem;
}
.article-heading {
  margin: 1rem 0 1.5rem 0;
}
.article-attribution {
  display: flex;
  justify-content: space-between;
}
.img-wrapper {
  margin: 0 0 2rem 0;
}
.img-wrapper img {
  width: 100%;
}
@media (min-width: 37.5em) {
  .article-page {
    padding: 5rem 1rem 3rem 1rem;

    /* margin: 5rem 1rem 3rem 1rem; */
  }
}
@media (min-width: 50em) {
  .article-page {
    max-width: 1000px;
    margin: 0 auto;
  }
}
</style>