<template>
    <div class="main-container">
      <div class="container">
        <div
          class="vertical-menu nav__menu"
          style="position: absolute; top: 15px"
        >
          <a href="/" class="popular">
            <i class="fi-fire-alt"></i>
            <span>Nóng</span>
          </a>
          <a href="/tin-moi.epi" class="latest">
            <i class="fi-clock"></i>
            <span>Mới</span>
            <span class="number">12</span></a
          >
          <a href="/tin-video.epi" class="video">
            <i class="fi-video"></i>
            <span>Video</span>
          </a>

          <a href="/chu-de.epi" class="topiclist">
            <i class="fi-layer-group"></i>
            <span>Chủ đề</span>
          </a>
          <a href="/de-xuat.epi" class="is-last recommend login-required">
            <i class="fi-award"></i>
            <span>Đề xuất</span>
          </a>
          <a href="/doi-tac.epi" class="publisher is-last">
            <i class="fi-handshake-alt"></i>
            <span>Đối tác</span>
          </a>
        </div>

        <ul class="breadcrumb">
          <li class="item">
            <a href="/newpost">NewPost</a>
          </li>

      

          <li class="right">
            <a href="/" class="hot">Nóng</a>
            <a href="/moi" class="latest">Mới</a>
          </li>
        </ul>

        <div class="main-col">
          <div data-track="|hotnews">
            <div class="rank1-stories">
              <div class="story" data-aid="38472320" data-track="|index0">
                <div class="story__thumb">
                  <a :href="firstContent.url" target="_blank">
            <img :src="firstContent.attachmentUrls ? firstContent.attachmentUrls.length > 0 ? firstContent.attachmentUrls[0].url : 'https://cdn.infocare.vn/10,5d58fbbcfd7e3df2f22a.jpg' : 'https://cdn.infocare.vn/10,5d58fbbcfd7e3df2f22a.jpg' ">
        </a>
                </div>
                <h4 class="story__heading">
                   <a :href="firstContent.url">
            {{ firstContent.title }}
        </a>
                </h4>
                

                <img
                  alt=""
                  class="lazy"
                  data-src="//log.baomoi.com/imps?data=eyJrZXkiOiJpbXBzL3dlYnRyYWNrL2FydGljbGUiLCJ2YWx1ZSI6IjM4NDcyMzIwIiwicmFuZCI6MC4wMDUwODI1NTEwMTc3Njc0NDUsInVpZCI6IjE1MjkxODAwMTI2OTIwNDcxOCIsInNvdXJjZSI6InRob2ktc3V8aG90bmV3c3xpbmRleDAiLCJ2aXNpdG9ySWQiOiIzMDAwLlNTWnplanlENmp5YVhfMmdkV0NRc29aOGxSVkczR0FPVERndGdDOUY0OHZkclVjV21XZlJaczdUeFFNOTJydzhBamRZZXVTRkxPcW9FMC4xIn0="
                  style="width: 0px; height: 0px"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                />
              </div>
            </div>
            <div class="rank2-stories">
              <div
                class="story is-first "
                data-aid="38472366"
                data-track="|index1"
                v-for="content in (bodyData.content || '').slice(1,4)" :key="content.id">
              
                <div class="story__thumb">
                  <a :href="content.url" target="_blank">
            <img :src="content.attachmentUrls ? content.attachmentUrls.length > 0 ? content.attachmentUrls[0].url : 'https://cdn.infocare.vn/10,5d58fbbcfd7e3df2f22a.jpg' : 'https://cdn.infocare.vn/10,5d58fbbcfd7e3df2f22a.jpg' " alt="">
        </a>
                </div>
                <h4 class="story__heading">
                <a :href="content.url" target="_blank">
            {{content.title}}
        </a>
                </h4>
              
              </div>
            </div>
          </div>
          <div id="BaoMoi_Hot"></div>

          <div class="timeline loadmore" data-track="|timeline" id="action_render">
            <div class="story" data-aid="38472292" data-track="|index1"   v-for="content in (bodyData.content || '').slice(0,10)" :key="content.id">
              
              <div class="story__thumb">
                 <a :href="content.url" target="_blank">
            <img :src="content.attachmentUrls ? content.attachmentUrls.length > 0 ? content.attachmentUrls[0].url : 'https://cdn.infocare.vn/10,5d58fbbcfd7e3df2f22a.jpg' : 'https://cdn.infocare.vn/10,5d58fbbcfd7e3df2f22a.jpg' " alt="">
        </a>
              </div>
              <h4 class="story__heading">
                <a :href="content.url" target="_blank">
            {{content.title}}
        </a>
              </h4>
      
              <img
                alt=""
                class="lazy"
                data-src="//log.baomoi.com/imps?data=eyJrZXkiOiJpbXBzL3dlYnRyYWNrL2FydGljbGUiLCJ2YWx1ZSI6IjM4NDcyMjkyIiwicmFuZCI6MC42ODQ3NzkwODExOTU5MjQyLCJ1aWQiOiIxNTI5MTgwMDEyNjkyMDQ3MTgiLCJzb3VyY2UiOiJ0aG9pLXN1fHRpbWVsaW5lfGluZGV4MSIsInZpc2l0b3JJZCI6IjMwMDAuU1NaemVqeUQ2anlhWF8yZ2RXQ1Fzb1o4bFJWRzNHQU9URGd0Z0M5RjQ4dmRyVWNXbVdmUlpzN1R4UU05MnJ3OEFqZFlldVNGTE9xb0UwLjEifQ=="
                style="width: 0px; height: 0px"
                src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
              />
            </div>


          </div>
                    <div class="timeline loadmore" data-track="|timeline" id="action_render">
            <div class="story" data-aid="38472292" data-track="|index1"   v-for="content in (bodyData.content || '').slice(0,9)" :key="content.id">
              
              <div class="story__thumb">
                 <a :href="content.url" target="_blank">
            <img :src="content.attachmentUrls ? content.attachmentUrls.length > 0 ? content.attachmentUrls[0].url : 'https://cdn.infocare.vn/10,5d58fbbcfd7e3df2f22a.jpg' : 'https://cdn.infocare.vn/10,5d58fbbcfd7e3df2f22a.jpg' " alt="">
        </a>
              </div>
              <h4 class="story__heading">
                <a :href="content.url" target="_blank">
            {{content.title}}
        </a>
              </h4>
      
              <img
                alt=""
                class="lazy"
                data-src="//log.baomoi.com/imps?data=eyJrZXkiOiJpbXBzL3dlYnRyYWNrL2FydGljbGUiLCJ2YWx1ZSI6IjM4NDcyMjkyIiwicmFuZCI6MC42ODQ3NzkwODExOTU5MjQyLCJ1aWQiOiIxNTI5MTgwMDEyNjkyMDQ3MTgiLCJzb3VyY2UiOiJ0aG9pLXN1fHRpbWVsaW5lfGluZGV4MSIsInZpc2l0b3JJZCI6IjMwMDAuU1NaemVqeUQ2anlhWF8yZ2RXQ1Fzb1o4bFJWRzNHQU9URGd0Z0M5RjQ4dmRyVWNXbVdmUlpzN1R4UU05MnJ3OEFqZFlldVNGTE9xb0UwLjEifQ=="
                style="width: 0px; height: 0px"
                src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
              />
            </div>


          </div>
          <br>
          <div class="pagination">
            <div class="pagination__controls">
            
              <a
                class="btn btn-sm btn-primary"
                href="/"
                style="display: inline-block"
              >
                <span>Xem thêm</span>
                <i class="fi-chevron-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="sub-col">
          <div class="sidebar">
            
            <div class="rightBox-3" data-track="|mostread_box">
              <h2 class="block__header">
                <span>Nóng 24h</span>
              </h2>
              <div class="small-list">
                <div class="story" data-aid="38462000" data-track="|index0" v-for="content in (bodyData.content || '').slice(1,4)" :key="content.id">
                  <div class="story__thumb" >
                  <a :href="content.url" target="_blank">
            <img :src="content.attachmentUrls ? content.attachmentUrls.length > 0 ? content.attachmentUrls[0].url : 'https://cdn.infocare.vn/10,5d58fbbcfd7e3df2f22a.jpg' : 'https://cdn.infocare.vn/10,5d58fbbcfd7e3df2f22a.jpg' " alt="">
        </a>
                  </div>
                  <h4 class="story__heading">
                      <a :href="content.url" target="_blank">
            {{content.title}}
        </a>
                  </h4>
                

                  <img
                    alt=""
                    class="lazy"
                    data-src="//log.baomoi.com/imps?data=eyJrZXkiOiJpbXBzL3dlYnRyYWNrL2FydGljbGUiLCJ2YWx1ZSI6IjM4NDYyMDAwIiwicmFuZCI6MC40MzM1ODI3MDcyNzI2MjQ0LCJ1aWQiOiIxNTI5MTgwMDEyNjkyMDQ3MTgiLCJzb3VyY2UiOiJ0aG9pLXN1fG1vc3RyZWFkX2JveHxpbmRleDAiLCJ2aXNpdG9ySWQiOiIzMDAwLlNTWnplanlENmp5YVhfMmdkV0NRc29aOGxSVkczR0FPVERndGdDOUY0OHZkclVjV21XZlJaczdUeFFNOTJydzhBamRZZXVTRkxPcW9FMC4xIn0="
                    style="width: 0px; height: 0px"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                  />
                </div>
              </div>
            </div>

            <div class="rightBox-1" data-track="|video_box">
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
                    <div class="story__thumb">
                      <a :href="content.url" target="_blank">
            <img :src="content.attachmentUrls ? content.attachmentUrls.length > 0 ? content.attachmentUrls[0].url : 'https://cdn.infocare.vn/10,5d58fbbcfd7e3df2f22a.jpg' : 'https://cdn.infocare.vn/10,5d58fbbcfd7e3df2f22a.jpg' " alt="">
        </a>
                    </div>
                    <h4 class="story__heading">
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

            <div class="rightBox-2" data-track="|photo_box">
              <h2 class="block__header">
                <a href="/tin-anh.epi"> <span>Photo</span></a>
              </h2>
              <div class="rightBox-2__content">
                <div
                  class="story story--photo"
                  data-aid="38472397"
                  data-track="|index0"
                  v-for="content in (bodyData.content || '').slice(1,4)" :key="content.id"
                >
                  <div class="story__thumb">
                  
                  <a :href="content.url" target="_blank">
            <img :src="content.attachmentUrls ? content.attachmentUrls.length > 0 ? content.attachmentUrls[0].url : 'https://cdn.infocare.vn/10,5d58fbbcfd7e3df2f22a.jpg' : 'https://cdn.infocare.vn/10,5d58fbbcfd7e3df2f22a.jpg' " alt="">
        </a>
                 
                  </div>

                  <h4 class="story__heading">
                      <a :href="content.url" target="_blank">
            {{content.title}}
        </a>
                  </h4>
        
                </div>

              </div>
            </div>

            <div class="topic-sidebar">
              <h2 class="block__header">
                <a href="/chu-de.epi"><span>Sự kiện</span></a>
              </h2>
              <div class="topic-sidebar__content">
                <div class="small-list" data-track="|topics_box">
                  <h3 class="topic-sidebar__title">
                    <a href="/"
                      >#Intlabs VN</a
                    >
                  </h3>

                  <div class="story" data-aid="38470804" data-track="|index0" v-for="content in (bodyData.content || '').slice(1,4)" :key="content.id">
                    <div class="story__thumb">
                       <a :href="content.url" target="_blank">
            <img :src="content.attachmentUrls ? content.attachmentUrls.length > 0 ? content.attachmentUrls[0].url : 'https://cdn.infocare.vn/10,5d58fbbcfd7e3df2f22a.jpg' : 'https://cdn.infocare.vn/10,5d58fbbcfd7e3df2f22a.jpg' " alt="">
        </a>
                    </div>
                    <h4 class="story__heading">
                      <a :href="content.url" target="_blank">
            {{content.title}}
        </a>
                    </h4>
                   

                    <img
                      alt=""
                      class="lazy"
                      data-src="//log.baomoi.com/imps?data=eyJrZXkiOiJpbXBzL3dlYnRyYWNrL2FydGljbGUiLCJ2YWx1ZSI6IjM4NDcwODA0IiwicmFuZCI6MC4yMDgxNTEzMjA2MTgxODc3NSwidWlkIjoiMTUyOTE4MDAxMjY5MjA0NzE4Iiwic291cmNlIjoidGhvaS1zdXx0b3BpY3NfYm94fGluZGV4MCIsInZpc2l0b3JJZCI6IjMwMDAuU1NaemVqeUQ2anlhWF8yZ2RXQ1Fzb1o4bFJWRzNHQU9URGd0Z0M5RjQ4dmRyVWNXbVdmUlpzN1R4UU05MnJ3OEFqZFlldVNGTE9xb0UwLjEifQ=="
                      style="width: 0px; height: 0px"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                    />
                  </div>

 
                </div>

           
              </div>
            </div>

            <div class="rightBox-3" data-track="|picked_box">
              <h2 class="block__header small-header">
                <a href="/goc-nhin-va-phan-tich/top/103.epi"
                  ><span>Góc nhìn &amp; Phân tích</span></a
                >
              </h2>
              <div class="small-list">
                <div class="story" data-aid="38462429" data-track="|index0"  v-for="content in (bodyData.content || '').slice(1,4)" :key="content.id">
                  <div class="story__thumb">
                     <a :href="content.url" target="_blank">
            <img :src="content.attachmentUrls ? content.attachmentUrls.length > 0 ? content.attachmentUrls[0].url : 'https://cdn.infocare.vn/10,5d58fbbcfd7e3df2f22a.jpg' : 'https://cdn.infocare.vn/10,5d58fbbcfd7e3df2f22a.jpg' " alt="">
        </a>
                  
                  </div>
                  <h4 class="story__heading">
                      <a :href="content.url" target="_blank">
            {{content.title}}
        </a>
                  </h4>
                  
                  </div>

                  <img
                    alt=""
                    class="lazy"
                    data-src="//log.baomoi.com/imps?data=eyJrZXkiOiJpbXBzL3dlYnRyYWNrL2FydGljbGUiLCJ2YWx1ZSI6IjM4NDYyNDI5IiwicmFuZCI6MC4wMTQ4MTAwOTc4NTQ1OTE1MywidWlkIjoiMTUyOTE4MDAxMjY5MjA0NzE4Iiwic291cmNlIjoidGhvaS1zdXxwaWNrZWRfYm94fGluZGV4MCIsInZpc2l0b3JJZCI6IjMwMDAuU1NaemVqeUQ2anlhWF8yZ2RXQ1Fzb1o4bFJWRzNHQU9URGd0Z0M5RjQ4dmRyVWNXbVdmUlpzN1R4UU05MnJ3OEFqZFlldVNGTE9xb0UwLjEifQ=="
                    style="width: 0px; height: 0px"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                  />
                

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
    metaInfo:{
    title: 'NewPost - BAOMOI.COM',
    titleTemplate: null
  },
  data() {
    return {
      bodyData: [{image:{url: "../assets/logo.png"}}],
      firstContent: [{image:{url: "../assets/logo.png"}}],
    }
  },
  created() {
    axios.post(`https://api.infocare.vn/processor/api/v1/search/find-data-news`, {})
        .then(response => {
          this.bodyData = response.data
          this.firstContent = this.bodyData.content[0];
        })
        .catch(e => {
          this.errors.push(e)
        });
  },
  mounted() {
        this.$router.push('/newpost');
    }
}

</script>
<style scoped>
.main-container {
    position: relative;
    z-index: 0;
}
.main-container::after {
    display: block;
    clear: both;
    content: "";
}
.main-container>.container {
    padding-top: 15px;
    padding-bottom: 15px;
}
.container {
    width: 970px;
}
.vertical-menu {
    display: none;
}
.category_page .breadcrumb, .search_page .breadcrumb, .video_page .breadcrumb {
    margin-bottom: 15px;
}
.breadcrumb {
    display: flex;
    align-items: center;
    margin-bottom: 11px;
    font-size: 1rem;
    font-weight: 700;
    background-color:white  ;
}
ul {
    padding-left: 0;
    list-style: none;
    margin: 0;
}
.breadcrumb .item {
    display: flex;
    align-items: center;
    text-transform: uppercase;
    height: 20px;
}
.breadcrumb .item:first-child>* {
    display: inline-flex;
}
.breadcrumb .item a {
    display: inline-flex;
    font-weight: 700;
    color: #2fa1b3;
}
.breadcrumb .item:nth-child(n+2):nth-child(2) {
    margin-left: 0;
}
.breadcrumb .item:nth-child(n+2) {
    margin-left: 20px;
}
.breadcrumb .item:nth-child(n+2):nth-child(2):before {
    content: '>';
    display: inline-flex;
    padding: 0 16px 0 12px;
    font-size: 1rem;
    color: #6c757d;

    width: 1em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.breadcrumb .item:nth-child(n+2) a {
    color: #6c757d;
}
.breadcrumb .item:nth-child(n+2)>* {
    display: inline-flex;
}
.breadcrumb .right {
    margin-left: auto;
}
.breadcrumb .hot, .breadcrumb .latest {
    display: inline-flex;
    padding: 0 5px;
    margin-left: 1px;
    color: #2fa1b3;
    text-transform: uppercase;
}
.main-col {
    width: 625px;
    float: left;
}
.rank1-stories .story__thumb {
    width: 625px;
    height: 340px;
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
/* .story__thumb a {
    display: flex;
    width: 100%;
    height: 100%;
    transition: transform .5s ease-out .1s;
} */
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
.rank1-stories .story__heading {
    font-size: 1.5rem;
    line-height: 3.8rem;
    font-weight: 600;
    margin-top: 10px;
}
.story__heading a {
    display: block;
}
.story__meta {
    color: #adb5bd;
    font-size: 1.3rem;
    height: 20px;
    line-height: 20px;
}
.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
    margin-bottom: .5rem;
    font-weight: 540;
    line-height: 1.8;
}

.h4, h4 {
    font-size: 1.2rem;
}
.story__meta {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    overflow: hidden;
}
.story__meta .source {
    height: 20px;
    display: flex;
    align-items: center;
}
.story__meta>:first-child {
    margin-left: 0;
}
.story__meta a {
    color: #adb5bd;
}
.story__meta a {
    display: flex;
}
.story__meta>* {
    margin-left: 12px;
}
.story__meta .cache {
    display: none;
    font-size: 0;
    margin-left: 10px;
}
.bm--baomoi {
    background-position: 0 0;
    width: 20px;
    height: 20px;
}
.bm {
    background-image: url(https://baomoi-static.zadn.vn/web/styles/img/bm-icon-2.0.3.png);
    background-size: 100px 4250px;
    display: inline-block;
    vertical-align: middle;
}
i {
    font-style: italic;
}
.story__meta::after {
    display: block;
    clear: both;
    content: "";
}
.lazy {
    width: 0;
    height: 0;
    float: left;
}

element.style {
    width: 0px;
    height: 0px;
}
img {
    vertical-align: middle;
    border-style: none;
}
.story::after {
    display: block;
    clear: both;
    content: "";
}
.rank2-stories {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    padding-bottom: 15px;
    border-bottom: 1px solid #ddd;
    margin-bottom: 15px;
}
.rank2-stories .story {
    width: 198px;
}
.rank2-stories .story__thumb {
    height: 125px;
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
.rank2-stories .story__heading {
    margin-top: 7px;
    font-size: 1.2rem;
    line-height: 1.8rem;
    font-weight: 400;
}
.story__heading a {
    display: block;
}
.rank2-stories .story__meta {
    margin-top: 5px;
}
.story__meta {
    color: #adb5bd;
    font-size: 1.3rem;
    height: 20px;
    line-height: 20px;
}
.story__meta {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    overflow: hidden;
}
.story::after {
    display: block;
    clear: both;
    content: "";
}
.rank2-stories .story {
    width: 198px;
}
.rank2-stories .story__thumb {
    height: 125px;
}
.story__thumb {
    border-radius: 4px;
    background: url(https://baomoi-static.zadn.vn/web/styles/img/logo-baomoi-gray.png) center calc(50% - 3px)/20% auto no-repeat #e9ecef;
}
.story__meta .source {
    height: 20px;
    display: flex;
    align-items: center;
}
.story__meta>:first-child {
    margin-left: 0;
}
.story__meta a {
    color: #adb5bd;
}
.story__meta .source img {
    opacity: .8;
    height: 16px;
    width: auto;
}
.timeline {
    display: flex;
    flex-flow: wrap row;
    position: relative;
}
.timeline .story:first-child {
    border-top: none;
    margin-top: 0;
    padding-top: 0;
}
.timeline .story {
    width: 100%;
    border-top: 1px solid #e9ecef;
    margin-top: 15px;
    padding-top: 11px;
}
.timeline .story .story__thumb {
    width: 155px;
    height: 100px;
    float: left;
    clear: left;
    margin-top: 4px;
    margin-right: 15px;
    margin-bottom: 0;
    margin-left: 0;
}
.timeline .story .story__heading {
    margin-left: 170px;
    font-size: 2.2rem;
    line-height: 1.8rem;
    font-weight: 400;
}
.story__heading a {
    display: block;
}
.timeline .story .story__meta {
    margin-left: 170px;
}
.story__summary {
    font-size: 1.4rem;
    line-height: 2rem;
    color: #343a40;
    display: none;
}
.timeline .story--4-imgs {
    padding-top: 8px;
    display: table;
}
.timeline .story {
    width: 100%;
    border-top: 1px solid #e9ecef;
    margin-top: 15px;
    padding-top: 11px;
}
.timeline .story--4-imgs .story__thumb {
    width: inherit;
    height: 95px;
    float: none;
    clear: none;
    margin-top: 0;
    margin-right: 0;
    margin-bottom: 0;
    margin-left: 0;
    margin-bottom: 5px;
    margin-top: 5px;
    background: #fff;
}
.timeline .story .story__thumb {
    width: 155px;
    height: 100px;
    float: left;
    clear: left;
    margin-top: 4px;
    margin-right: 15px;
    margin-bottom: 0;
    margin-left: 0;
}
.story--photo .story__thumb, .story--video .story__thumb {
    position: relative;
}
.timeline .story--4-imgs .story__thumb:after {
    right: inherit;
    left: 123px;
    bottom: 5px;
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
.timeline .story--4-imgs .story__heading, .timeline .story--4-imgs .story__meta {
    margin-left: 0;
}
.timeline .story--4-imgs .story__heading {
    display: table-header-group;
}
.timeline .story .story__heading {
    margin-left: 170px;
    font-size: 1.2rem;
    line-height: 2.8rem;
    font-weight: 540;
}
.story__heading a {
    display: block;
}



.sub-col {
    width: 330px;
    float: right;
}
.sub-col>:first-child {
    margin-top: 0;
}
.sub-col>* {
    margin-top: 25px;
}
.fyi--group {
    background-color: #f7f7f7;
    padding-bottom: 15px;
    min-height: 630px;
}
.sidebar>* {
    margin-bottom: 30px;
}
.fyi--300 {
    width: 330px;
    min-height: 250px;
    padding: 15px;
    padding-bottom: 0;
    text-align: center;
    background-color: #f7f7f7;
}
.z2-zads-zone, [id^="adtima-zone-"], [z2-zoneid] {
    position: relative;
}
.adtima-logo.adtima-logo-bottom {
    top: auto;
    bottom: 0;
}
.adtima-logo {
    position: absolute;
    top: 0;
    right: 0;
    text-decoration: none;
    padding: 0 !important;
    height: 18px !important;
    width: auto !important;
    z-index: 10001;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue", Arial,"Noto Sans", "Liberation Sans",sans-serif;
}
.adtima-logo.adtima-logo-bottom .adtima-logo-image, .adtima-logo.adtima-logo-bottom .adtima-logo-attribution {
    border-bottom-left-radius: 0;
    border-top-left-radius: 3px;
}
.adtima-logo .adtima-logo-attribution {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue", Arial,"Noto Sans", "Liberation Sans",sans-serif;
    position: absolute;
    top: 0;
    right: 100%;
    white-space: nowrap;
    background: rgba(239,239,239,0.9);
    height: 18px;
    line-height: 18px;
    padding: 0 5px;
    color: #000;
    font-size: 10px;
    display: none;
    border-bottom-left-radius: 3px;
}
.adtima-logo>span {
    display: block;
}
b, strong {
    font-weight: bolder;
}
.adtima-logo.adtima-logo-bottom .adtima-logo-image, .adtima-logo.adtima-logo-bottom .adtima-logo-attribution {
    border-bottom-left-radius: 0;
    border-top-left-radius: 3px;
}
.adtima-logo .adtima-logo-image {
    display: block;
    float: left;
    height: 18px;
    width: 18px;
    border-bottom-left-radius: 3px;
    background: rgba(239,239,239,0.9) url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAA5FBMVEVHcEwApf8AAIcAAIcAAIgAAIIAAIYAqv8ApP8ApP8AAIkAAIcAo/8AAIQAs/8AAIgAAIcApP8ApP8ApP8ApP8ApP8ApP8ApP8Apf8ApP8ApP8AAIgApf8AIZoAAIgAAIgAAIgAw/8Ao/8AAIgAAIgAAIkAAHsAAIgAr/8AAIoAx/8Apf8AFIsAAIgAAIMAAHQAr/8Ak9kAAIwAAHEAAHUAAHsAv/8Ar/8AofwAAHcAAHoAAH0AedYAAIcAF4sA1P8AAIEAAHcAr/8AAHgAuf8ApP8AAIgAAIkAof8Apv8AAIEAsf+lVELoAAAARXRSTlMA1SE8E9SnJqOnlqXrWhH+6Aeda/s92rKIfQOOlEoZg8U2YGt2nn7t5/cMuGjZt7WCMcthGJIeo9YPvgw+8CjIojaINVwQmjcEAAAAtklEQVQYGZXA1XLCABRF0Q0kJMHr7u7uLvfctP3//+lAyCAPzLAYabWyU2LY9t7BLkO2pN9jBhUlP+OwQb+qy6+JjuhTaspv4DzdpOdEaj1xm1ptkVxd8jrcmdkCXUFLCuH5z8ymIzIVyb/g3trm6ChK/g7fP9YxQ9up1PygUbNMYQJYkRTCp+WmgLJLj1CwXAIsSXp54C21rkkgWJc8fL3Yt8xsBBCslauXV2wsJ3EcJ/MRY/gH++MlWpbjGPIAAAAASUVORK5CYII=) no-repeat center center/10px auto;
}
.adtima-logo>span {
    display: block;
}
.adtima-logo .adtima-logo-fb {
    margin-left: 1px;
    height: 18px;
    width: 18px;
    background: rgba(239,239,239,0.9) url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUBAMAAAB/pwA+AAAAGFBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAABoAtTLAAAAB3RSTlMAe3hZRxB1VF7w2wAAAEBJREFUCNdjYCAJOIEIFTBTXICBgbEQzAwqYmBQV4WoSFdgKoMqZiw2F4BpNC9mwGQiKUBoCwQZJopuBZLFRAMAz8oI1v3fzJoAAAAASUVORK5CYII=) no-repeat center center/16px auto;
    cursor: pointer;
    float: right;
}
.adtima-logo:after {
    content: '';
    display: table;
    clear: both;
}
.block__header {
    text-transform: uppercase;
    margin-bottom: 7px;
    font-size: 2.3rem;
    line-height: 4.4rem;
    font-weight: 600;
    background-repeat: repeat-x;
    color: #db562b;
    position: relative;
}
/* .block__header:before {
    content: '';
    height: 3px;
    width: 100%;
    display: inline-flex;
    position: absolute;
    bottom: 21px;
    left: 0;
    background-color: #db562b;
} */
.block__header span {
    display: block;
    float: left;
    background-color: #fff;
    padding-right: 15px;
    position: relative;
}
.block__header::after {
    display: block;
    clear: both;
    content: "";
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
.rightBox-3 .story__heading, .rightBox-3 .story__meta {
    margin-left: 70px;
}
.rightBox-3 .story__heading {
    font-size: 1.9rem;
    line-height: 1.8rem;
    font-weight: 600;
}
.rightBox-3 .story__heading, .rightBox-3 .story__meta {
    margin-left: 70px;
}
.rightBox-3 .story {
    border-top: 1px solid #e9ecef;
    margin-top: 8px;
    padding-top: 12px;
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
/* .rightBox-1 .block__header a {
    color: #db562b;
    display: block;
} */
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
.rightBox-1 .story__thumb {
    width: 300px;
    height: 150px;
    margin-bottom: 10px;
}
.story--photo .story__thumb, .story--video .story__thumb {
    position: relative;
}.story--video .story__thumb:after {
    background-position: 0 -750px;
}
.rightBox-2 .rightBox-2__content {
    padding: 15px;
    padding-bottom: 12px;
    background-color: #fcf2ee;
}
.rightBox-2 .story:first-child {
    margin-top: 0;
}
.rightBox-2 .story {
    margin-top: 15px;
}
.rightBox-2 .story__thumb {
    width: 300px;
    height: 135px;
    margin-bottom: 10px;
    background: 0 0;
}
.story--photo .story__thumb, .story--video .story__thumb {
    position: relative;
}
.rightBox-2 .story__thumb a {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
}
.rightBox-2 .story__thumb>a {
    display: block;
}
.rightBox-2 .story__heading {
    font-size: 1.2rem;
    line-height: 1.8rem;
    font-weight: 540;
}
.rightBox-2 .story {
    margin-top: 15px;
}
.topic-sidebar__content {
    padding: 15px;
    background-color: #f7f7f7;
}
.topic-sidebar .small-list {
    margin-bottom: 20px;
}
.topic-sidebar__title {
    margin-bottom: 7px;
}
.topic-sidebar .small-list .story:nth-child(2) {
    margin-top: 0;
    padding-top: 0;
    border-top: none;
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
}
.small-list .story__heading, .small-list .story__meta {
    margin-left: 70px;
}
.small-list .story__heading {
    font-size: 1.2rem;
    line-height: 1.8rem;
    font-weight: 540;
}
.small-list .story__heading, .small-list .story__meta {
    margin-left: 70px;
}
.story__meta {
    color: #adb5bd;
    font-size: 0.8rem;
    height: 20px;
    line-height: 20px;
}
.story__meta {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    overflow: hidden;
}
.story__thumb:hover a {
    -webkit-transform: scale(1.05);
    -moz-transform: scale(1.05);
    -ms-transform: scale(1.05);
    -o-transform: scale(1.05);
    transform: scale(1.05);
}
.story__thumb a {
    display: flex;
    width: 100%;
    height: 100%;
    transition: transform .5s ease-out .1s;
}
.story--photo .story__thumb, .story--video .story__thumb {
    position: relative;
}

.small-list .story {
    border-top: 1px solid #e9ecef;
    margin-top: 8px;
    padding-top: 12px;
}
.story::after {
    display: block;
    clear: both;
    content: "";
}
.topic-sidebar__content {
    padding: 15px;
    background-color: #f7f7f7;
}
.topic-sidebar .small-list {
    margin-bottom: 20px;
}
.topic-sidebar__title {
    margin-bottom: 7px;
}
.block__header.small-header a:before, .block__header.small-header:before {
    bottom: 5px;
}
.topic-sidebar__title a {
    float: left;
    border: 1px solid #e27957;
    font-size: 0.8rem;
    line-height: 2rem;
    font-weight: 400;
    border-radius: 3px;
    font-weight: 400;
    display: block;
    color: #db562b;
    padding: 5px 10px;
    text-transform: uppercase;
}
.breadcrumb .hot.is-active, .breadcrumb .hot:hover, .breadcrumb .latest.is-active, .breadcrumb .latest:hover {
    color: #1c616b;
}
.breadcrumb .item:hover a {
    color: #1c616b;
}
.topic-sidebar__title::after {
    display: block;
    clear: both;
    content: "";
}
.block__header.small-header {
    line-height: 26px;
}
.block__header.small-header span {
    font-size: 24px;
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
.small-list .story:first-child {
    border-top: none;
    margin-top: 0;
    padding-top: 0;
}
.rightBox-3 .story {
    border-top: 1px solid #e9ecef;
    margin-top: 8px;
    padding-top: 12px;
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
.rightBox-3 .story__heading, .rightBox-3 .story__meta {
    margin-left: 70px;
}
.rightBox-3 .story__heading {
    font-size: 1.2rem;
    line-height: 1.8rem;
    font-weight: 540;
}
.rightBox-3 .story__heading, .rightBox-3 .story__meta {
    margin-left: 70px;
}
.small-list .story__heading, .small-list .story__meta {
    margin-left: 70px;
}
.story__meta {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    overflow: hidden;
}
.rightBox-1 .rightBox-1__content {
    padding: 15px;
    background-color: #eef8f9;
}
.rightBox-2 .rightBox-2__content {
    padding: 15px;
    padding-bottom: 12px;
    background-color: #fcf2ee;
}

</style>