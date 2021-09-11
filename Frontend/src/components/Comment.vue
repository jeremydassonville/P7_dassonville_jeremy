<template>
<div>
  <b-card class=" mx-auto commentContainer">
      <div class="commentTitle">
        <h4>{{comment.auteur}}</h4>
        <p>{{comment.createdAt}}</p>
      </div>
    <b-card-text class="commentContent">
      {{comment.content}}
    </b-card-text>

  </b-card>
</div>


</template>



<script>
export default {
    props: {
        comment: {
            type: Object,
            required: true,
        }
    }
}
</script>



<style>

.commentTitle{
    display: flex;
    align-items: baseline;
    font-size: 12px;
}

.commentTitle h4{
    font-size: 12px;
}

.commentTitle p {
    margin-left: 5px;
}

.commentContainer{
    margin-top: 10px;
    max-width: 640px;
}

.commentContent{
    font-size: 15px;
}
</style>