<template>

  <router-link to="/articles/3">Go to a different article</router-link>

  <div v-if="Object.keys(article).length !== 0">

    <!-- <div class="p-4 p-md-5 mb-4 text-white rounded bg-dark">
      <div class="col-md-6 px-0">
        <h1 class="display-4 fst-italic">
          Incididunt ut labore et dolore magna aliqua
        </h1>
        <p class="lead my-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation
        </p>
      </div>
    </div> -->
  
    <div class="row g-5">
      <div class="col-md-8">
        <h3 class="pb-4 mb-4 fst-italic border-bottom">
          {{ article.title}}
        </h3>
  
        <article class="blog-post">
          <p class="blog-post-meta">
            {{ article.date  }} by <strong>{{ article.author }}</strong>
          </p>
          <div v-html="article.content"></div>
        </article>
      </div>
  
      <div class="col-md-4">
        <div class="position-sticky" style="top: 2rem">
          <div class="p-4 mb-3 bg-light rounded">
            <h4 class="fst-italic">About</h4>
            <p class="mb-0">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
    import axios from 'axios'
    import { onMounted,ref, watch } from 'vue';
    import { useRoute,onBeforeRouteUpdate } from 'vue-router';

    const props = defineProps(['crazy']);
    console.log(props.crazy)

    const route = useRoute();
    const article = ref({});

    const loadArticleData = (articleID) => {
      axios.get(`http://localhost:3005/articles/${articleID}`)
      .then(response=>{
        article.value = response.data
      })
    }

    onMounted(()=>{
      loadArticleData(route.params.articleID)
    })
    onBeforeRouteUpdate(async(to,from)=>{
      loadArticleData(to.params.articleID);
    })

    // watch(
    //   () => route.params.articleID,
    //   async newId => {
    //     loadArticleData(newId)
    //   }
    // )
</script>