<template>
  <van-cell
    class="article-item"
    :to="{
      name: 'article',
      params: {
        articleId: article.art_id
      }
    }"
  >
      <div
        slot="title"
        class="title van-multi-ellipsis--l2"
      >{{ article.title }}</div>
      <div slot="label">
          <div
            class="cover-wrap"
            v-if="article.cover.type === 3"
          >
              <div
                class="cover-wrap-item"
                v-for="(img, index) in article.cover.images"
                :key="index"
              >
                  <van-image
                    class="cover-item"
                    fit="cover"
                    :src="img"
                  />
              </div>
          </div>
          <div class="label-wrap">
            <span>{{article.aut_name}}</span>
            <span>{{article.comm_count}} 评论</span>
            <span>{{ article.pubdate | relativeTime }}</span>
          </div>
      </div>
      <van-image
        class="right-cover"
        v-if="article.cover.type === 1"
        slot="default"
        fit="cover"
        :src="article.cover.images[0]"
      />
  </van-cell>
</template>

<script>
export default {
  name: 'ArticleItem',
  components: {},
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang='less'>
.article-item{
    .title{
        font-size: 16px;
        color: #3a3a3a;
        text-align: justify;
    }
    .van-cell__value{
        flex: unset;
        width: 116px;
        height: 73px;
        margin-left: 12px;
    }
    .right-cover{
        width: 116px;
        height: 73px;
    }
    .cover-wrap{
        padding: 5px 0 10px;
        display: flex;
        .cover-wrap-item{
            flex: 1;
            height: 73px;
            // 除去最后一个盒子的样式
            &:not(:last-child) {
                padding-right: 4px;
            }
            .cover-item{
                width: 100%;
                height: 73px;
            }
        }
    }
    .label-wrap{
        font-size: 12px;
        color: #b4b4b4;
        span{
            // 除去最后一个盒子的样式
            &:not(:last-child) {
                margin-right: 12px;
            }
        }
    }
}
</style>
