<style lang="stylus" rel="stylesheet/stylus">
#vcomments {
  max-width: 740px;
  padding: 10px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
<template>
<div class="page">
    <section class="page-edit">
      <div>
        <!-- id 将作为查询条件 -->
        <span class="leancloud-visitors"
              data-flag-title="Your Article Title">
          <em class="post-meta-item-text">阅读量： </em>
          <i class="leancloud-visitors-count"></i>
        </span>
      </div>
      <h3>
        <a href="javascript:;"></a>
        评 论：
      </h3>
      <div id="vcomments"></div>
    </section>
</div>
</template>
<script>
export default {
  name: "Valine",
  data() {
    return {
      //
    };
  },
  methods: {
    createValine() {
      const Valine = require("valine");
      if (typeof window !== "undefined") {
        this.window = window;
        window.AV = require("leancloud-storage");
      }
      let path = location.origin + location.pathname
      document.getElementsByClassName('leancloud-visitors')[0].id = path
      const valine = new Valine({
        el: "#vcomments",
        appId: "IYyWOHVyWEI9WnoDu9QftJff-gzGzoHsz",
        appKey: "GX7px3pBxqO5P7e981oXe2hz",
        notify: false,
        verify: false,
        visitor:true,//阅读量统计
        avatar: "monsterid",
        path: path,
        placeholder: "欢迎留言与我分享您的想法"
      });
      this.valineRefresh = false;
    }
  },
  watch: {
    $route(to, from) {
      if (to.path !== from.path) {
        setTimeout(() => {
          //重新刷新valine
          this.createValine();
        }, 300);
      }
    }
  },
  mounted() {
    this.createValine();
  }
};
</script>
