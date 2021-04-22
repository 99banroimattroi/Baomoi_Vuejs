<template>
  <div class="main-container">
    <div class="container">
      <ul class="name_container">
        <li class="item">
          <a href="/dexuat">Đề Xuất</a>
        </li>
        <li class="right">
        </li>
      </ul>
      <div class="main-col">
        <div class="media-list loadmore">
          <div class="story story--dexuat" v-for="content in (dexuatData.content || '').slice(0, 9)" :key="content.id">
            <div class="story__thumb">
              <a :href="content.url" target="_blank">
                <img
                    :src="content.attachmentUrls ? content.attachmentUrls.length > 0 ? content.attachmentUrls[0].url : 'https://cdn.infocare.vn/10,5d58fbbcfd7e3df2f22a.jpg' : 'https://cdn.infocare.vn/10,5d58fbbcfd7e3df2f22a.jpg' "
                    alt="">
              </a>
            </div>
            <h4 class="story__heading">
              <a :href="content.url" target="_blank">
                {{ content.title }}
              </a>
            </h4>
            <h6 class="description">
              <!--              {{content.description}}-->
            </h6>
          </div>
        </div>
      </div>

        <div class="sub-col">
          <div class="sidebar">
            <div class="rightBox-3">
              <h2 class="block__header">
                <span>Nóng 24h</span>
              </h2>
              <div class="small-list">
                <div class="story" v-for="content in (dexuatData.content || '').slice(2,10)" :key="content.id">
                  <div class="story__thumb">
                    <a :href="content.url" target="_blank">
                      <img
                          :src="content.attachmentUrls ? content.attachmentUrls.length > 0 ? content.attachmentUrls[0].url : 'https://cdn.infocare.vn/10,5d58fbbcfd7e3df2f22a.jpg' : 'https://cdn.infocare.vn/10,5d58fbbcfd7e3df2f22a.jpg' "
                          alt="">
                    </a>
                  </div>
                  <h4 class="story__heading">
                    <a :href="content.url" target="_blank">
                      {{ content.title }}
                    </a>
                  </h4>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
  name: "dexuat",
  metaInfo:{
    title: 'Tin đề xuất - BAOIMOI.COM',
    titleTemplate: null
  },
  data() {
    return {
      dexuatData:  [{image:{url: "../assets/logo.png"}}],
    }
  },

  created() {
    axios.post(`https://api.infocare.vn/processor/api/v1/search/find-data-news`, {})
        .then(response => {
          this.dexuatData = response.data
        })
        .catch(e => {
          this.errors.push(e)
        });
  },
  mounted() {
        this.$router.push('/dexuat');
    }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

div {
  display: block;
}

.main-container {
  margin: 0;
  font-family: baomoi, AvenirNextCondensed-Medium, HelveticaNeue-CondensedBold, sans-serif-condensed, Calibri, Corbel, "Liberation Sans Narrow", "Lohit Odia";
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.3;
  color: #212529;
  text-align: left;
  background-color: #fff;
}
.main-container::after {
    display: block;
    clear: both;
    content: "";
}

.main-container {

  z-index: 0;

}

.container {
  width: 970px;
}

.main-container > .container {
  padding-top: 15px;
  padding-bottom: 15px;
}

.container {
  width: 100%;
  padding-right: 0;
  padding-left: 0;
  margin-right: auto;
  margin-left: auto;
}

.name_container {
  display: flex;
  align-items: center;
  margin-bottom: 11px;
  font-size: 1.5rem;
  font-weight: 700;
}

ul {
  padding-left: 0;
  list-style: none;
  margin: 0;
}

.name_container .item {
  display: flex;
  align-items: center;
  text-transform: uppercase;
  height: 20px;
}

.name_container .item:first-child > * {
  display: inline-flex;
}

.name_container .item a {
  display: inline-flex;
  font-weight: 200;
  color: #2fa1b3;
  font-size: 20px;
}

a {
  color: #212529;
  text-decoration: none;
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
}

li {
  display: list-item;
  text-align: -webkit-match-parent;
}

.main-col {
  width: 625px;
  float: left;
}

.media-list {
  position: relative;
  font-size: 0;
  display: flex;
  flex-flow: wrap row;
  justify-content: space-between;
}

.media-list::after {
  display: block;
  clear: both;
  content: "";
}

.media-list .story {
  width: 198px;
  vertical-align: top;
  display: inline-block;
  margin-bottom: 20px;
}

.story--photo .story__thumb, .stomoi .story__thumb {
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

.media-list .story__thumb {
  width: 196px;
  height: 125px;
}

.stomoi .story__thumb {
  position: relative;
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

.story__thumb:hover {
  overflow: hidden;
}

.story__thumb:hover a {
  -webkit-transform: scale(1.05);
  -moz-transform: scale(1.05);
  -ms-transform: scale(1.05);
  -o-transform: scale(1.05);
  transform: scale(1.05);
}

img {
  vertical-align: middle;
  border-style: none;
}

.media-list .story .story__heading {
  margin-top: 5px;
  font-size: 2.2rem;
  line-height: 2.8rem;
  font-weight: 600;
}

h4 {
  display: block;
  margin-block-start: 1.33em;
  margin-block-end: 1.33em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}

:focus {
  outline: -webkit-focus-ring-color auto 1px;
}

.story__heading a {
  display: block;
}

.story:hover .story__heading a {
  color: #2fa1b3;
  text-decoration: none;
}

.media-list .story .story__heading {
  margin-top: 5px;
  font-size: 1.2rem;
  line-height: 1.8rem;
  font-weight: 450;
}

.sub-col {
  width: 330px;
  float: right;
}

.sub-col > :first-child {
  margin-top: 0;
}

.sub-col > * {
  margin-top: 25px;
}

.sidebar > * {
  margin-bottom: 30px;
}

.block__header {
  text-transform: uppercase;
  margin-bottom: 25px;
  font-size: 2.6rem;
  line-height: 0.5rem;
  font-weight: 370;
  background-repeat: repeat-x;
  color: #db562b;
  position: relative;
}

.h2, h2 {
  font-size: 3.2rem;
}

.block__header span {
  display: block;
  float: left;
  margin-top: 10px;
  background-color: #fff;
  padding-right: 15px;
  position: relative;
}

.rightBox-3 .small-list {
  padding: 15px;
  padding-bottom: 8px;
  background-color: #f7f7f7;
}

.rightBox-3 .story:first-child {
  border-top: none;
  margin-top: 0;
  padding-top: 0;
}

.rightBox-3 .story {
  border-top: 1px solid #e9ecef;
  margin-top: 8px;
  padding-top: 12px;
}

.small-list .story:first-child {
  border-top: none;
  margin-top: -5px;
  padding-top: 0;
}

.small-list .story {
  border-top: 1px solid #e9ecef;
  margin-top: 8px;
  padding-top: 12px;
}

.rightBox-3 .story__thumb {
  float: left;
  clear: left;
  margin-top: 3px;
  margin-right: 10px;
  margin-bottom: 7px;
  margin-left: 0;
  width: 60px;
  height: 60px;
  background-size: 35% auto;
}

.small-list .story__thumb {
  float: left;
  clear: left;
  margin-top: 3px;
  margin-right: 10px;
  margin-bottom: 7px;
  margin-left: 0;
  width: 60px;
  height: 60px;
  background-size: 35% auto;
  vertical-align: center;
}

.rightBox-3 .story__heading, .rightBox-3 .story__meta {
  margin-left: 70px;
}

.rightBox-3 .story__heading {
  font-size: 1.9rem;
  line-height: 2.5rem;
  font-weight: 600;

}

.small-list .story__heading, .small-list .story__meta {
  margin-left: 70px;
}

.small-list .story__heading {
  font-size: 1.25rem;
  line-height: 1.25rem;
  font-weight: 400;
  margin-top: 1px;
}

.h4, h4 {
  font-size: 2.4rem;
}

.story__thumb:hover {
  overflow: hidden;
}

.block__header:before {
  content: '';
  height: 2px;
  width: 100%;
  display: inline-flex;
  position: absolute;
  bottom: 6px;
  left: 0;
  background-color: #db562b;
}

.block__header::after {
  display: block;
  clear: both;
  content: "";
}

.story::after {
  display: block;
  clear: both;
  content: "";
}

</style>
