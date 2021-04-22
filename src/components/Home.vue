<template>
  <!--  <div v-if="bodyData">-->
  <!--    <div v-for="content in bodyData.content" :key="content.id" class="post" >-->
  <!--      {{content|attachmentUrls|url}}-->
  <!--    </div>-->
  <div class="container111">
    <div class="container">
      <div class="main111-col">
        <div class="list-posts">
          <div class="story">
            <div class="story_thumb">

              <a :href="firstContent.url" target="_blank">
                <img :src="firstContent.attachmentUrls ? firstContent.attachmentUrls.length > 0 ? firstContent.attachmentUrls[0].url : 'https://cdn.infocare.vn/10,5d58fbbcfd7e3df2f22a.jpg' : 'https://cdn.infocare.vn/10,5d58fbbcfd7e3df2f22a.jpg' ">
              </a>
            </div>
            <h4 class="story_heading">
              <a :href="firstContent.url">
                {{ firstContent.title }}
              </a>
            </h4>
            <h6 class="description">
              {{firstContent.description ? firstContent.description.length>0 ? '' : firstContent.description : firstContent.description }}
            </h6>

          </div>
        </div>

        <div class="list2-posts">
          <div class="story" v-for="content in (bodyData.content || '').slice(1,4)" :key="content.id">
            <div class="story_thumb">
              <a :href="content.url" target="_blank">
                <img :src="content.attachmentUrls ? content.attachmentUrls.length > 0 ? content.attachmentUrls[0].url : 'https://cdn.infocare.vn/10,5d58fbbcfd7e3df2f22a.jpg' : 'https://cdn.infocare.vn/10,5d58fbbcfd7e3df2f22a.jpg' " alt="">

              </a>
            </div>
            <h4 class="story_heading">
              <a :href="content.url" target="_blank">
                {{content.title}}
              </a>
            </h4>
            <h6 class="description">
              {{content.description ? content.description.length>0 ? '' : content.description : content.description }}
            </h6>

          </div>
        </div>
        <div class="list3-posts" v-if="bodyData">
          <div class="story"  v-for="content_list3 in (bodyData.content || '').slice(0, 10)" :key="content_list3.id">
            <div class="story_thumb">
              <a :href="content_list3.url" target="_blank">
                <img :src="content_list3.attachmentUrls ? content_list3.attachmentUrls.length > 0 ? content_list3.attachmentUrls[0].url : 'https://cdn.infocare.vn/10,5d58fbbcfd7e3df2f22a.jpg' : 'https://cdn.infocare.vn/10,5d58fbbcfd7e3df2f22a.jpg' " alt="">

              </a>
            </div>
            <h4 class="story_heading">
              <a :href="content_list3.url" target="_blank">
                {{content_list3.title}}
              </a>
            </h4>
            <h6 class="description">
              {{content_list3.description ? content_list3.description.length>0 ? '' : content_list3.description : content_list3.description}}
            </h6>

          </div>
        </div>
      </div>
      <div class="sub-col">
        <div class="list-col">
          <div class="small-listpost">
            <div class="story" v-for="content_small in (bodyData.content || '').slice(3,10)" :key="content_small.id">
              <div class="story_thumb">
                <a :href="content_small.url" target="_blank">
                  <img :src="content_small.attachmentUrls ? content_small.attachmentUrls.length > 0 ? content_small.attachmentUrls[0].url : 'https://cdn.infocare.vn/10,5d58fbbcfd7e3df2f22a.jpg' : 'https://cdn.infocare.vn/10,5d58fbbcfd7e3df2f22a.jpg' " alt="">

                </a>
              </div>
              <h4 class="story_heading">
                <a :href="content_small.url">
                  {{content_small.title}}
                </a>
              </h4>
              <h6 class="description">
                {{content_small.description? content_small.description.length>0 ? '' : content_small.description : content_small.description}}
              </h6>

            </div>
          </div>
          <div class="fyi--300x250">
            <div class="story no-visited-mark">
              <a rel="noreferrer" href="https://bluezone.gov.vn/taiapp" target="_blank">
                <img class="" data-src="//baomoi-static.zadn.vn/events/bluezone_3_min.jpg" width="300" height="250" alt="Bluezone - Ứng dụng phát hiện tiếp xúc gần, bảo vệ mình, bảo vệ cộng đồng chống COVID-19" src="//baomoi-static.zadn.vn/events/bluezone_3_min.jpg">
              </a>
            </div>
          </div>
          <div class="fyi--300x250">
            <div class="story no-visited-mark" data-track="|hcm">
              <a href="/chu-tich-ho-chi-minh/top/114.epi">
                <img class="" data-src="//baomoi-static.zadn.vn/events/banner_hcm_02-min.png" width="300" height="250" alt="Học tập và làm theo tấm gương đạo đức Hồ Chí Minh" src="//baomoi-static.zadn.vn/events/banner_hcm_02-min.png">
              </a>
            </div>
          </div>
          <div class="rightBox-1" >
            <h2 class="block__header">
              <a href="/tin-video.epi"><span>Video</span></a>
            </h2>

            <div class="rightBox-1__content">
              <div class="wrap">
                <div
                    class="story story--video"
                    data-aid="38472347"
                    data-track="|index0"
                    v-for="content in (bodyData.content || '').slice(1,4)" :key="content.id"
                >
                  <div class="story_thumb">
                    <a :href="content.url" target="_blank">
                      <img :src="content.attachmentUrls ? content.attachmentUrls.length > 0 ? content.attachmentUrls[0].url : 'https://cdn.infocare.vn/10,5d58fbbcfd7e3df2f22a.jpg' : 'https://cdn.infocare.vn/10,5d58fbbcfd7e3df2f22a.jpg' " alt="">
                    </a>
                  </div>
                  <h4 class="story_heading">
                    <a :href="content.url" target="_blank">
                      {{content.title}}
                    </a>
                  </h4>


                  <img
                      alt=""
                      class="lazy"
                      data-src="//log.baomoi.com/imps?data=eyJrZXkiOiJpbXBzL3dlYnRyYWNrL2FydGljbGUiLCJ2YWx1ZSI6IjM4NDcyMzQ3IiwicmFuZCI6MC44MzMxMjU4NDgzNjY0NTYzLCJ1aWQiOiIxNTI5MTgwMDEyNjkyMDQ3MTgiLCJzb3VyY2UiOiJ0aG9pLXN1fHZpZGVvX2JveHxpbmRleDAiLCJ2aXNpdG9ySWQiOiIzMDAwLlNTWnplanlENmp5YVhfMmdkV0NRc29aOGxSVkczR0FPVERndGdDOUY0OHZkclVjV21XZlJaczdUeFFNOTJydzhBamRZZXVTRkxPcW9FMC4xIn0="
                      style="width: 0px; height: 0px"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                  />
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import axios from 'axios';
export default {
  name: 'Home',
  metaInfo:{
    title: 'Báo Mới - Tin tức nóng nhất, tin tức mới cập nhật liên tục 24H - BAOMOI.COM',
    titleTemplate: null
  },
  data() {
    return {
        bodyData: [{image:{url: "../assets/logo.png"}}],
        firstContent: [{image:{url: "../assets/logo.png"}}],
        attachmentUrls: [{image:{url: "../assets/logo.png"}}],
        content: [{image:{url: "../assets/logo.png"}}],
        content_small : [{image:{url: "../assets/logo.png"}}],
        content_list3 :  [{image:{url: "../assets/logo.png"}}],

    }
  },

  created() {
    axios.post(`https://api.infocare.vn/processor/api/v1/search/find-data-news`, {})
        .then(response => {
          // JSON responses are automatically parsed.
          this.bodyData = response.data
          this.firstContent = this.bodyData.content[0];
          // this.secondContent =  this.bodyData.content.slice(1,4);

        })
        .catch(e => {
          this.errors.push(e)
        });
  },
   mounted() {
        this.$router.push('/');
    }
}
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
div{
  display: block;
}
.container111 {
  width:100% ;
  height: 2300px;

}
.container111>.container {
  padding-top: 15px;
  padding-bottom: 15px;
}

.container{
  width: 970px;
  height: 100%;
}
.container{
  width: 100%;

  padding-right: 0;
  padding-left: 0;
  margin-right: auto;
  margin-left: auto;
}
.container111 a {
  text-decoration: none;
  color: #212529;
}

.story_thumb img {
  vertical-align: middle;
  border-style: none;
}

.container111 {
  text-decoration: none;
  font-family: baomoi, AvenirNextCondensed-Medium, HelveticaNeue-CondensedBold, sans-serif-condensed, Calibri, Corbel, "Liberation Sans Narrow", "Lohit Odia";
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.3;
  color: #212529;

}

.main111-col {
  display: block;
  margin-top: 20px;
  width: 625px;
  float: left;
}

.story_thumb {
  border-radius: 4px;
  overflow: hidden;
  position: relative;
}

.story_thumb img {
  display: flex;
  width: 100%;
  height: 100%;
  transition: all 1s;
  -webkit-transform: scale(1);
  transform: scale(1);
}

.story_thumb img:hover {
  -webkit-transform: scale(1.05);
  transform: scale(1.05);
}

.main111-col .story_heading {
  font-size: 40px;
  line-height: 2.5rem;
  font-weight: 200;
  margin-top: 10px;

}

.story:hover .story_heading a {
  color: #2FA1C4;
  text-decoration: none;
}

.story_info {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  overflow: hidden;
  color: #adb5bd;
  font-size: 15px;
  line-height: 40px;
}

.story_info .realate {
  opacity: .5;
}

.story_info .source {
  height: 20px;
  display: flex;
  align-items: center;
}

.story_info > :first-child {
  margin-left: -11px;
}

.story_info > * {
  margin-left: 10px;

}

.story_info .source > * {
  margin-left: 10px;
}

.story_info .source img {
  height: 15px;
  width: auto;
}

.story:hover::after {
  display: block;
  clear: both;
  content: "";
}

.list2-posts {
  width: 100%;
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 15px;
  border-bottom: 1px solid #ddd;
  margin-bottom: 15px;
}

.list2-posts .story {
  width: 198px;
}

.story img {
  width: 100%;
  height: auto;
  vertical-align: middle;
}

.list2-posts .story_heading {
  display: block;
  font-size: 1rem;
  line-height: 2.6rem;
  font-weight: 550;
  overflow: hidden;
}


.sub-col {
  display: block;
  width: 330px;
  float: right;
  margin-top: 20px;

}

.small-listpost .story,
.list3-posts .story {
  border-top: 1px solid #e9ecef;
  margin-top: 5px;
  padding-top: 12px;
}

.small-listpost .story:first-child,
.list3-posts .story:first-child {
  border: none;
  margin: 0;
  padding: 0;
}

.small-listpost .story_thumb,
.list3-posts .story_thumb {
  float: left;
  clear: left;
  width: 60px;
  height: 60px;
  margin: 10px 10px 7px 0px;
}

.small-listpost .story_heading,
.small-listpost .story_info,
.list3-posts .story_heading {
  margin-left: 70px;
}

.list3-posts .story_thumb {
  width: 150px;
  height: 100px;
}

.list3-posts .story .story_heading {
  margin-left: 170px;
  font-size: 20px;
  line-height: 2rem;
  font-weight: 520;
}

.list3-posts .story_info {
  margin-left: 170px;
}

.small-listpost .story .story_heading {
  font-size: 20px;
}
.description{
  opacity: 0.5;
  font-size: 14px;
  margin-top: 8px;
}
.list-col h6 {
  margin-left: 70px;
}
.list3-posts h6 {
  margin-left: 170px;
}
.list3-posts {
  display: flex;
  flex-flow: wrap row;
  position: relative;
}
.small-listpost .story{
  width: 100%;
  height: auto;
  overflow: hidden;
}
.fyi--300x250 {
  padding: 15px;
  width: 330px;
  height: 280px;
  background-color: #f7f7f7;
  margin-top: 30px;
}
.rightBox-1 .block__header {
  text-transform: uppercase;
  margin-bottom: 7px;
  font-size: 2.3rem;
  line-height: 4.4rem;
  font-weight: 600;
  background-repeat: repeat-x;
  color: #db562b;
  position: relative;
  background-position: 0 -1279px;
}
/* .rightBox-1 .block__header:before {
    content: '';
    height: 3px;
    width: 100%;
    display: inline-flex;
    position: absolute;
    bottom: 21px;
    left: 0;
    background-color: #db562b;
} */
.rightBox-1 .block__header a {
  color: #2fa1b3;
}
.block__header a {
  color: #db562b;
  display: block;
}
.rightBox-1 .block__header a:before {
  background-color: #2fa1b3;
}
/* .rightBox-1 .block__header a:before {
    content: '';
    height: 3px;
    width: 100%;
    display: inline-flex;
    position: absolute;
    bottom: 11px;
    left: 0;
    background-color: #db562b;
} */
.block__header:before {
  content: '';
  height: 3px;
  width: 100%;
  display: inline-flex;
  position: absolute;
  bottom: 23px;
  left: 0;
  background-color: #db562b;
}
/* .rightBox-1 .block__header a:before {
    background-color: #2fa1b3;
} */
.rightBox-1 .block__header:before {
  content: '';
  height: 3px;
  width: 100%;
  display: inline-flex;
  position: absolute;
  bottom: 24px;
  left: 0;
  background-color: #db562b;
}
.rightBox-1 .block__header a:before {
  content: '';
  height: 3px;
  width: 100%;
  display: inline-flex;
  position: absolute;
  bottom: 24px;
  left: 0;

}
.rightBox-1 .block__header span {
  display: block;
  float: left;
  background-color: #fff;
  padding-right: 15px;
  position: relative;
}
.rightBox-1 .block__header a::after {
  display: block;
  clear: both;
  content: "";
}
.rightBox-1 .story:first-child {
  margin-top: 0;
}
.rightBox-1 .story {
  margin-top: 15px;
}
.rightBox-1 .story_thumb {
  width: 300px;
  height: 150px;
  margin-bottom: 10px;
}
.story--photo .story_thumb, .story--video .story_thumb {
  position: relative;
}.story--video .story_thumb:after {
   background-position: 0 -750px;
 }



</style>
