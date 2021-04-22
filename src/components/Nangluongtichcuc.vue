<template>
    <div class="main-container">
                <div class="container">
<ul class="breadcrumb">
    
    <li class="item">
        <a href="/nang-luong-tich-cuc">Năng Lượng Tích Cực</a>
        <a id="follow" href="/nang-luong-tich-cuc" class="follow login-required"><i class="far fa-star"></i></a>  
    </li>
    <li class="right">
    </li>
</ul>
    <div class="main-col">
<div class="timeline loadmore" data-track="|timeline">
    
    <div class="story" data-aid="38587826" data-track="|index0">
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
<img alt="" class="lazy" data-src="//log.baomoi.com/imps?data=eyJrZXkiOiJpbXBzL3dlYnRyYWNrL2FydGljbGUiLCJ2YWx1ZSI6IjM4NTg3ODI2IiwicmFuZCI6MC40MjU5OTI2ODQ1NDczOTQ3LCJ1aWQiOiIxNTI5MTgwMDEyNjkyMDQ3MTgiLCJzb3VyY2UiOiJ0b3Bjb250ZW50fHRpbWVsaW5lfGluZGV4MCIsInZpc2l0b3JJZCI6IjMwMDAuU1NaemVqeUQ2anlhWF8yZ2RXQ1Fzb1o4bFJWRzNHQU9URGd0Z0M5RjQ4dmNyVWNXbW1mUlpzM1R4UU04MnJ3ODlESmhlOEdBTU9xdkRHLjEifQ==" style="width: 0px; height: 0px;" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="></div>

    <div class="story" v-for="content in (bodyData.content || '').slice(1,8)" :key="content.id">
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
<img alt="" class="lazy" data-src="//log.baomoi.com/imps?data=eyJrZXkiOiJpbXBzL3dlYnRyYWNrL2FydGljbGUiLCJ2YWx1ZSI6IjM4NTg2NTA1IiwicmFuZCI6MC4zMTQ5MDQ3NDI2MzM2NTMxLCJ1aWQiOiIxNTI5MTgwMDEyNjkyMDQ3MTgiLCJzb3VyY2UiOiJ0b3Bjb250ZW50fHRpbWVsaW5lfGluZGV4MSIsInZpc2l0b3JJZCI6IjMwMDAuU1NaemVqeUQ2anlhWF8yZ2RXQ1Fzb1o4bFJWRzNHQU9URGd0Z0M5RjQ4dmNyVWNXbW1mUlpzM1R4UU04MnJ3ODlESmhlOEdBTU9xdkRHLjEifQ==" style="width: 0px; height: 0px;" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="></div>

  
</div>
<div class="pagination">
    <div class="pagination__controls">
        <a class="btn btn-sm btn-primary" href="/" style="display:inline-block;">
            <span>Xem thêm</span> 
            <i class="fi-chevron-right"></i>
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
    title: 'Năng lượng tích cực - BAOMOI.COM',
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
        this.$router.push('/nang-luong-tich-cuc');
    }
}
</script>
<style scoped>
.breadcrumb .follow i {
    font-size: 1.2rem;
    margin-top: -2px;
}
.breadcrumb .follow {
    position: relative;
    align-items: center;
    margin-left: 5px;
}
.story__thumb img:hover {
    transform: scale(1.05);
    transition: all 1s;
}
.main-container {
    background: url(https://baomoi-static.zadn.vn/web/styles/img/events/top_338-3.jpg) center top no-repeat;
}


.main-container {
    position: relative;
    z-index: 0;
}
div {
    display: block;
}
.main-container .container {
    padding-top: 85px;
}
.main-container>.container {
   
    padding-bottom: 15px;
}
.container {
    width: 970px;
}
@media (min-width: 992px){
.container {
    max-width: 970px;
}
}
.container {
    width: 100%;
    padding-right: 0;
    padding-left: 0;
    margin-right: auto;
    margin-left: auto;
}
*, ::after, ::before {
    box-sizing: border-box;
}
body {
    margin: 0;
    font-family: baomoi,AvenirNextCondensed-Medium,HelveticaNeue-CondensedBold,sans-serif-condensed,Calibri,Corbel,"Liberation Sans Narrow","Lohit Odia";
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.3;
    color: #212529;
    text-align: left;
    background-color: #fff;
}

.breadcrumb {
    position: relative;
    height: 57px;
   
    background-color: rgba(54,25,12,.6);

    border-left: none;
    display: flex;
    align-items: center;
    padding-left: 20px;
    margin-bottom: 40px;
}
.breadcrumb {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    font-size: 1.5rem;
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
    font-size: 2rem;
    line-height: 3rem;
    font-weight: 400;
}
.breadcrumb .item {
    display: flex;
    align-items: center;
    text-transform: uppercase;
    height: 20px;
}
.breadcrumb .item a {
    color: #fff;
}
.breadcrumb .item:first-child>* {
    display: inline-flex;
}
.breadcrumb .item a {
    display: inline-flex;
    font-weight: 350;
    color: #2fa1b3;
}
.breadcrumb .item a {
    color: #fff;
}
.breadcrumb .item:first-child>* {
    display: inline-flex;
}
.breadcrumb .right {
    margin-left: auto;
}
/* .main-col {
    width: 100%;
} */
.main-col {
    width: 625px;
   
}
.timeline {
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
}
.timeline {
    display: flex;
    flex-flow: wrap row;
    position: relative;
}
.story:nth-child(1) .story__thumb {
    height: 300px;
    margin-top: 10px;
}
.story:nth-child(-n+5) {
    background-color: #fff;
    margin-top: 0px;
    padding-top: 0;
    overflow: hidden;
    box-shadow: 0 0 10px 0 rgba(0,0,0,.3);
}
.story__thumb {
    height: 260px;
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
.story__thumb a {
    display: flex;
    width: 100%;
    height: 100%;
    transition: transform .5s ease-out .1s;
}
.timeline {
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
}

.timeline .story:first-child {
    border-top: none;
    margin-top: 0;
    padding-top: 0;
}
.story {
    border-top: none;
    width: 311px;
    padding-top: 0;
    margin-top: 30px;
}

.main-col {
    width: 100%;
}
.story::after {
    display: block;
    clear: both;
    content: "";
}
.main-container .container .main-col ::after, ::before {
    box-sizing: border-box;
}
.story:nth-child(2), .story:nth-child(3), .story:nth-child(4), .story:nth-child(5) {
    width: 227px;
    height: 240px;
    margin-left: 17px;
    padding: 10px;
}
.story:nth-child(4) {
    right: 248px;
}
.story:nth-child(4), .story:nth-child(5) {
    position: absolute;
    top: 260px;
}
.story:nth-child(5) {
    right: 0;
}
.story:nth-child(4), .story:nth-child(5) {
    position: absolute;
    top: 260px;
}

.story:nth-child(1) {
    width: 475px;
    height: 500px;
    margin-bottom: 10px;
    padding: 10px;
}
.story__thumb {
    overflow: hidden;
    background-color: #adb5bd;
    position: relative;
    margin-top: 0;
    margin-bottom: 10px;
}
.story__thumb {
    border-radius: 4px;
    background: url(https://baomoi-static.zadn.vn/web/styles/img/logo-baomoi-gray.png) center calc(50% - 3px)/20% auto no-repeat #e9ecef;
}  
.story:nth-child(2) .story__thumb, .story:nth-child(3) .story__thumb, .story:nth-child(4) .story__thumb,.story:nth-child(5) .story__thumb {
    height: 120px;
}
.story:nth-child(-n+5) .story__thumb {
    width: 100%;
    float: none;
    margin-right: 0;
   
    border-radius: 0;
}
.story:nth-child(1) .story__heading {
    font-size:1.6rem;
    line-height: 2.5rem;
    font-weight: 600;
    padding: 0 0 0;
}
.h4, h4 {
    font-size: 1.18rem;
}
.story .story__thumb {
    width: 100%;
    height: 175px;
    float: none;
    margin-right: 0;
    margin-top: 0;
    border-radius: 0;
    overflow: hidden;
}
</style>
