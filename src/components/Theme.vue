<template>
  <div class="main-container">
    <ul class="breadcrumb">
      <li class="item"><a href="">Chủ đề</a></li>
      <li class="right">







      </li>
    </ul>
    <div class="list-topic">
      <div class="loadmore">
        <div class="item style-1">
          <div class="box-heading">
            <a href="nang-luong-tich-cuc" class="title">Năng Lượng tích cực</a>
            <a href="#" ></a>
          </div>
          <div class="box-content">
            <div class="story story--photo"  v-for="content in (bodyData.content || '').slice(0, 6)" :key="content.id">
              <div class="story__thumb">
                <a :href="content.url" target="_blank">
                     <img :src="content.attachmentUrls ? content.attachmentUrls.length > 0 ? content.attachmentUrls[0].url : 'https://cdn.infocare.vn/10,5d58fbbcfd7e3df2f22a.jpg' : 'https://cdn.infocare.vn/10,5d58fbbcfd7e3df2f22a.jpg' " alt="">
                </a>
              </div>
              <h4 class="story__heading">
                <a :href="content.url">
                  {{content.title}}
                </a>
              </h4>
            </div>
          </div>
          <div class="box-footer">
            <span class="resize-topic">
              <i class="fi-expand-alt"></i>
            </span>
            <a href="">
              <i class="fi-link">Xem chi tiết chủ đề</i>
            </a>
          </div>
        </div>
        <div class="item style-2">
          <div class="box-heading">
            <a href="/kham-pha-the-gioi" class="title">Khám phá Thế Giới</a>
            <a href="javascript:;" class="follow login-required"></a>
          </div>
          <div class="box-content">
            <div class="story story--photo"   v-for="content in (bodyData.content || '').slice(6,8)" :key="content.id">
              <div class="story__thumb">
                <a :href="content.url" target="_blank">
                     <img :src="content.attachmentUrls ? content.attachmentUrls.length > 0 ? content.attachmentUrls[0].url : 'https://cdn.infocare.vn/10,5d58fbbcfd7e3df2f22a.jpg' : 'https://cdn.infocare.vn/10,5d58fbbcfd7e3df2f22a.jpg' " alt="">
                </a>
              </div>
              <h4 class="story__heading">
                <a :href="content.url">
                  {{content.title}}
                </a>
              </h4>
            </div>
          </div>
          <div class="box-footer">
            <span class="resize-topic">
              <i class="fi-expand-alt"></i>
            </span>
            <a href="">
              <i class="fi-link">Xem chi tiết chủ đề</i>
            </a>
          </div>
        </div>
        <div class="item style-2">
          <div class="box-heading">
            <a href="/kham-pha-viet-nam" class="title">Khám phá Việt Nam</a>
            <a href="javascript:;" class="follow login-required"></a>
          </div>
          <div class="box-content">
            <div class="story story--photo" v-for="content in (bodyData.content || '').slice(8,10)" :key="content.id">
              <div class="story__thumb">
            <img :src="content.attachmentUrls ? content.attachmentUrls.length > 0 ? content.attachmentUrls[0].url : 'https://cdn.infocare.vn/10,5d58fbbcfd7e3df2f22a.jpg' : 'https://cdn.infocare.vn/10,5d58fbbcfd7e3df2f22a.jpg' " alt="">
              </div>
              <h4 class="story__heading">
                <a :href="content.url">{{content.title}}</a>
              </h4>
            </div>
          </div>
          <div class="box-footer">
            <span class="resize-topic">
              <i class="fi-expand-alt"></i>
            </span>
            <a href="">
              <i class="fi-link">Xem chi tiết chủ đề</i>
            </a>
          </div>
        </div>
        <div class="item style-3">
          <div class="box-heading">
            <a href="phong-chong-dich-covid-19" class="title">#Phòng Chống Covid 19</a>
            <a href=" " class="follow login-required"><i></i></a>
          </div>
          <div class="box-content">
            <div class="story" v-for="content in (bodyData.content || '').slice(4, 7)" :key="content.id">
              <div class="story__thumb" >
                <a :href="content.url" target="_blank">
                     <img :src="content.attachmentUrls ? content.attachmentUrls.length > 0 ? content.attachmentUrls[0].url : 'https://cdn.infocare.vn/10,5d58fbbcfd7e3df2f22a.jpg' : 'https://cdn.infocare.vn/10,5d58fbbcfd7e3df2f22a.jpg' " alt="">
                </a>
              </div>
              <h4 class="story__heading">
                <a :href="content.url">{{content.title}}</a>
              </h4>
            </div>
          </div>
          <div class="box-footer">
            <span class="resize-topic">
              <i class="fi-expand-alt"></i>
            </span>
            <a href="">
              <i class="fi-link">Xem chi tiết chủ đề</i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  metaInfo:{
    title: 'Chủ đề - BAOMOI.COM',
    titleTemplate: null
  },
  data() {
    return {
      bodyData: [{image:{url: "./assets/logo.png"}}],
      firstContent: [{image:{url: "./assets/logo.png"}}],
    }
  },

  created() {
    axios.post(`https://api.infocare.vn/processor/api/v1/search/find-data-news`, {})
        .then(response => {
// JSON responses are automatically parsed.
          this.bodyData = response.data
          this.firstContent = this.bodyData.content[0];
// this.secondContent = this.bodyData.content.slice(1,4);

        })
        .catch(e => {
          this.errors.push(e)
        });
  },
  mounted() {
        this.$router.push('/theme');
    }
}
</script>

<style scoped>
*, ::after, ::before {
  box-sizing: border-box;
}
.main-container {
  position: relative;
  z-index: 0;
  margin: 0;
  font-family: 'Roboto', sans-serif;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.3;
  color: #212529;
  text-align: left;
  background-color: #fff;
}
div{
  display: block;
}
.breadcrumb {
  margin: 15px auto 0;
}
.breadcrumb {
  display: flex;
  align-items: center;
  margin-bottom: 11px;
  font-size: 1.125rem;
  font-weight: 700;
}
ul {
  padding-left: 0;
  list-style: none;
  margin: 0;
}
dl, ol, ul {
  margin-top: 0;
  margin-bottom: 1rem;
}
ul {
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}
.breadcrumb .item {
  display: flex;
  align-items: center;
  text-transform: uppercase;
  height: 20px;
}
li {
  display: list-item;
  text-align: -webkit-match-parent;
}
.breadcrumb .item:first-child>* {
  display: inline-flex;
}
.breadcrumb .item a {
  display: inline-flex;
  font-weight: 400;
  color: #2fa1b3;
}
a {
  color: #212529;
  text-decoration: none;
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
}
.breadcrumb .right {
  margin-left: auto;
}
li {
  display: list-item;
  text-align: -webkit-match-parent;
}
.list-topic {
  margin: 0 auto 20px;
}
.loadmore {
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
}
.loadmore>.item {
  position: relative;
  width: calc(50%);
  display: inline-block;
  padding: 10px 20px 20px;
}
.loadmore>.item .box-heading {
  z-index: 10;
  display: inline-flex;
  align-items: center;
  padding-left: 2px;
  position: relative;
}
:focus {
  outline: -webkit-focus-ring-color auto 1px;
}
.loadmore>.item .box-heading:before {
  content: '';
  display: inline-block;
  width: 8px;
  height: 22px;
  transform: skew(-10deg);
  margin-right: 15px;
  background: #2fa1b3;
  margin-bottom: 3px;
}

a:hover {
  color: #2fa1b3;
  text-decoration: none;
}
.loadmore>.item a.title {
  display: inline-flex;
  width: 100%;
  align-items: center;
  text-transform: uppercase;
  font-size: 1.55rem;
  line-height: 2.4rem;
  font-weight: 350;
}
a {
  color: #212529;
  text-decoration: none;
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
}
.loadmore>.item a.follow i {
  font-size: 14px;
  margin-left: 7px;
  color: #adb5bd;
}
.fi-star:before {
  content: '\e813';
}
.loadmore>.style-1 .box-content {
  justify-content: space-between;
}
.loadmore>.item .box-content {
  display: flex;
  flex-flow: row wrap;
  margin-top: 13px;
}
.loadmore>.style-1 .story:nth-child(1), .loadmore>.style-1 .story:nth-child(2) {
  margin-top: 0;
}
.loadmore>.style-1 .story {
  margin-top: 20px;
  width: calc(50% - 5px);
}
.loadmore>.style-1 .story__thumb {
  width: 60px;
  height: 60px;
  float: left;
}
.loadmore>.item .story__thumb {
  position: relative;
  z-index: 20;
}
.story__thumb, .story--video .story__thumb {
  position: relative;
}
.story__thumb {
  border-radius: 4px;
  background: url(https://baomoi-static.zadn.vn/web/styles/img/logo-baomoi-gray.png) center calc(50% - 3px)/20% auto no-repeat #e9ecef;
}
.story__thumb {
  overflow: hidden;
  background-color: #adb5bd;
  position: relative;
  margin-bottom: 0;
}
.story__thumb a {
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform .5s ease-out .1s;
}
.story__thumb img {
  position: absolute;
  width: 100%;
  min-height: 100%;
  height: auto;
}
.story__thumb img {
  text-indent: -9999px;
}
img {
  vertical-align: middle;
  border-style: none;
}
.story--photo .story__thumb:after {
  background-position: 0 -700px;
}
.story--photo .story__thumb:after, .story--video .story__thumb:after {
  position: absolute;
  content: " ";
  display: inline-block;
  background-image: url(https://baomoi-static.zadn.vn/web/styles/img/bm-icon-2.0.3.png);
  background-color: rgba(0,0,0,.5);
  right: 5px;
  bottom: 5px;
  width: 23px;
  height: 23px;
  border-radius: 15px;
  background-size: 100px 4250px;
}
.loadmore>.style-1 .story__heading {
  font-size: 0.9rem;
  line-height: 1.1rem;
  font-weight: 390;
  margin-left: 70px;
}
.loadmore>.item .story__heading {
  position: relative;
  z-index: 20;
}
.h4, h4 {
  font-size: 2.4rem;
}
.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
  margin-bottom: 0;
  font-family: inherit;
  font-weight: 500;
  line-height: 1.3;
  color: inherit;
}
h1, h2, h3, h4, h5, h6 {
  margin-top: 0;
  margin-bottom: 0;
}
.story__heading a {
  display: block;
}
.list-topic {
  width: 1010px;
}
.breadcrumb {
  width: 1050px;
}
.breadcrumb {

  background-color: white;
}
.loadmore>.item {
  position: relative;
  width: calc(50%);
  display: inline-block;
  padding: 10px 20px 20px;
}
.topiclist_page .loadmore>.item:before {
  content: '';
  width: 1px;
  position: absolute;
  height: calc(100% - 95px);
  top: 65px;
  left: 0;
  z-index: 0;
  background-color: #dee2e6;
}
.topiclist_page .loadmore>.item .box-content {
  display: flex;
  flex-flow: row wrap;
  margin-top: 13px;
}
.loadmore>.style-2 .story:first-child {
  margin-top: 0;
}
.loadmore>.style-2 .story {
  margin-top: 20px;
}
.loadmore>.style-2 .story__thumb {
  width: 180px;
  height: 120px;
  float: left;
}
.topiclist_page .loadmore>.item .story__thumb {
  position: relative;
  z-index: 20;
}
.story__thumb {
  border-radius: 4px;
  background: url(https://baomoi-static.zadn.vn/web/styles/img/logo-baomoi-gray.png) center calc(50% - 3px)/20% auto no-repeat #e9ecef;
}
.story__thumb {
  overflow: hidden;
  background-color: #adb5bd;
  position: relative;
  margin-bottom: 0;
}
.story__thumb a {
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform .5s ease-out .1s;
}
.story--photo .story__thumb:after {
  background-position: 0 -700px;
}
.story--photo .story__thumb:after, .story--video .story__thumb:after {
  position: absolute;
  content: " ";
  display: inline-block;
  background-image: url(https://baomoi-static.zadn.vn/web/styles/img/bm-icon-2.0.3.png);
  background-color: rgba(0,0,0,.5);
  right: 5px;
  bottom: 5px;
  width: 23px;
  height: 23px;
  border-radius: 15px;
  background-size: 100px 4250px;
}
.loadmore>.style-2 .story__heading {
  font-size: 1rem;
  line-height: 1.6rem;
  font-weight: 450;
  margin-left: 200px;
}
.loadmore>.item .story__heading {
  position: relative;
  z-index: 20;
}
.story__heading a {
  display: block;
}
.main-container::after {
  display: block;
  clear: both;
  content: "";
}
.loadmore>.style-2 .story:nth-child(n+3) {
  display: none;
}
.loadmore>.style-2 .story {
  margin-top: 20px;
}
.loadmore>.style-1 .story:nth-child(n+7) {
  display: none;
}
.loadmore>.style-1 .story {
  margin-top: 20px;
  width: calc(50% - 5px);
}
.loadmore>.style-3 .box-content {
  justify-content: space-between;
}
.loadmore>.style-3 .story:first-child {
  margin-top: 0;
}
.loadmore>.style-3 .story {
  width: calc(33.33% - 8px);
  display: flex;
  flex-direction: column;
}

.loadmore>.style-3 .story__thumb {
  height: 125px;
}
.topiclist_page .loadmore>.style-3 .story__thumb {
  width: 100%;
  height: 100px;
}
.topiclist_page .loadmore>.item .story__thumb {
  position: relative;
  z-index: 20;
}
.loadmore>.style-3 .story__heading {
  font-size: 1.2rem;
  line-height: 1.75rem;
  font-weight: 450;
  margin-top: 5px;
}

.loadmore>.style-3 .story:nth-child(n+4) {
  display: none;
}
.loadmore>.style-3 .story {
  width: calc(33.33% - 8px);
  display: flex;
  flex-direction: column;
}

.loadmore>.item .box-footer>span {
  position: absolute;
  top: 5px;
  right: 5px;
  padding: 10px 15px;
  z-index: 10;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid transparent;
  z-index: 10;
}

i {
  font-style: italic;
}
.loadmore>.item .box-footer>span {
  position: absolute;
  top: 5px;
  right: 5px;
  padding: 10px 15px;
  z-index: 10;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid transparent;
  z-index: 10;
}
.loadmore>.item:before {
    content: '';
    width: 1px;
    position: absolute;
    height: calc(100% - 95px);
    top: 65px;
    left: 0;
    z-index: 0;

}
.fi-expand-alt:before {
  content: '\e822';
}
[class*=fa-]:before, [class*=fi-]:before {
  font-family: bmwebfont;
  font-style: normal;
  font-weight: 400;
  display: inline-block;
  text-decoration: inherit;
  width: 1em;
  text-align: center;
  font-variant: normal;
  text-transform: none;
  line-height: 1.5em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.loadmore>.item .box-footer {
    visibility: hidden;
    content: '';
    width: calc(100%);
    height: calc(100%);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);
}
.loadmore>.item .box-footer {
    visibility: hidden;
}
</style>
