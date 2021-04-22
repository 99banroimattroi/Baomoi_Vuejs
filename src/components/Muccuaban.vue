<template>
  <div class="main-container">
    <div class="container">
      <div class="user-container">
        <div class="user-info">
          <p class="user-info__thumb">
            <img id="user-avatar" alt="avatar " src="https://s120.avatar.talk.zdn.vn/f/3/c/4/2/120/995d30775471e36144a46df0cd67f304.jpg " width="120 " height="120 " style>
          </p>
          <div class="user-info__content">
            <p class="name">
              <span class="dplname">Hà</span>
            </p>
            <div class="statistic">
              <span class="block" id="stats-total ">Tổng số mục :  <b>0</b></span>
              <span class="block" id="stats-private ">Mục riêng tư :  <b>0</b></span>
              <span class="block" id="stats-public ">Mục công khai :  <b>0</b></span>
            </div>
          </div>
          <a id="btn-create-channel " href="# " class="user-info__create-button btn-create-channel"><span class="create-channel ">Tạo Mục</span></a>
        </div>
        <div class="user-content ">
          <div class="user-content__tabs ">
            <a href="/muccuaban " class="btn is-active ">Mục của bạn</a>
            <a href="/datheodoi " class="btn ">Nội dung đã theo dõi</a>
            <a href="/docganday " class="btn ">Tin đọc gần đây</a>
            <a href="/tindaluu " class="btn ">Tin đã lưu</a>
          </div>
          <div class="user-content_panels ">
            <div class="my-channel panel is-active ">
              <div class="my-channel__list small-list ">
              </div>
              <div class="loading-more " style="display: none; "><span>Đang tải</span></div>
              <div class="notice empty-state ">
                <span>Tạo mục của bạn để theo dõi những tin tức yêu thích và chia sẻ cùng bạn bè</span>
                <a id="btn-create-channel" href="# " class="user-info__create-button btn-create-channel ">Tạo mục</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "muccuaban",
  metaInfo:{
    title: 'Mục của bạn - BAOIMOI.COM',
    titleTemplate: null
  },
  mounted() {
        this.$router.push('/muccuaban');
    }
}
</script>

<style scoped >
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

div {
  display: block;
}

body {
  margin: 0;
  font-family: baomoi, AvenirNextCondensed-Medium, HelveticaNeue-CondensedBold, sans-serif-condensed, Calibri, Corbel, "Liberation Sans Narrow", "Lohit Odia";
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.3;
  color: #212529;
  text-align: left;
  background-color: #fff;
}

.user-info {
  height: 90px;
  width: 970px;
  background-color: #f9f9f9;
  border: 1px solid #eee;
  padding: 15px;
  margin-top: 15px;

}

.user-info__thumb {
  float: left;
  width: 60px;
  height: 60px;
  margin-right: 13px;
}

p {
  margin-bottom: 0;
  margin-top: 0;
  margin-bottom: 1rem;
}

img {
  vertical-align: middle;
  border-style: none;
}

.user-info__thumb img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.user-content {

  background-color: #f9f9f9;
  border: 1px solid #eee;
  margin-top: 15px;
  min-width: 970px;
}

.user-info__content {
  float: left;
}

.user-info__content .name span {
  font-size: 18px;
  line-height: 1rem;
  font-weight: 600;
}

.user-info__content .name {
  font-size: 0;
}

.user-info__content .statistic {
  margin-top: 5px;
}

.user-info__content .statistic span {
  color: #555;
  /* display: inline-block; */
  float: left;
  margin-right: 30px;
  font-size: 16px;
}

a {
  color: #212529;
  text-decoration: none;
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
}

.user-info__create-button .create-channel {
  background-color: #ff9800;
}

.user-info__create-button span {
  text-align: center;
  color: #fff;
  font-size: 1.2rem;
  line-height: 2rem;
  font-weight: 600;
  border-radius: 3px;
  margin-top: 14px;
  float: right;
  background-color: #ff9800;
  padding: 0 20px;
}

.main-container {
  margin-bottom: 70px;
  height: 100%;
  width: 100%;
}

.user-content__tabs {
  height: 38px;
  border-bottom: 2px solid #2fa1b3;
}

.user-content {
  margin-top: 15px;
}

.user-content__tabs .btn.is-active {
  color: #fff;
  background-color: #2fa1b3;
  border-left: 1px solid #2fa1b3;
  border-top: 1px solid #2fa1b3;
}

.btn:not(:disabled):not(.disabled) {
  cursor: pointer;
}

.btn:not(:disabled):not(.disabled) {
  cursor: pointer;
}

.user-content__tabs .btn {
  font-size: 16px;
  text-transform: none;
  border-radius: 0;
  border-left: 1px solid #eee;
  border-top: 1px solid #eee;
  display: block;
  float: left;
  width: 220px;
  height: 36px;
  padding-left: 15px;
  text-align: left;
  background-color: #f9f9f9;
}

.btn {
  font-size: 12px;
  text-transform: uppercase;
}

.btn {
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: .65rem 1.5rem;
  font-size: 1.6rem;
  line-height: 1.3;
  border-radius: .25rem;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}

.user-content__panels .panel.is-active {
  display: block;
}

.user-content__panels .panel {
  display: none;
  background-color: #f9f9f9;
  border: 1px solid #eee;
  border-top: none;
  min-height: 300px;
  padding: 15px 15px 15px 15px;
}

.user-content .my-channel.panel {
  padding-left: 20px;
}

.user-content .my-channel__list {
  counter-reset: section;
}

.user-content .loading-more {
  padding: 10px 15px 30px;
  background-color: #f9f9f9;
  text-align: center;
  background: #f9f9f9 url(https://baomoi-static.zadn.vn/web/styles/img/loadmore-03.gif) center bottom 12px no-repeat;
}

.user-content .my-channel .notice {
  max-width: 580px;
  margin: 0 auto;
}

.user-content .notice {
  padding: 10px 15px;
  background-color: #f9f9f9;
}

.user-content .notice span {
  text-align: center;
  font-size: 1.65rem;
  color: #555;
  display: block;
  margin-top: 45px;
}

.user-content .notice a {
  display: block;
  height: 40px;
  width: 120px;
  font-size: 1.25rem;
  line-height: 2.5rem;
  font-weight: 400;
  color: #fff;
  text-align: center;
  border-radius: 5px;
  background-color: #ff9800;
  margin: 20px auto 20px;
  text-transform: uppercase;
}

.user-content .notice:before {
  display: block;
  content: '';
  width: 150px;
  height: 105px;
  background-image: url(https://baomoi-static.zadn.vn/web/styles/img/bm-icon-2.0.3.png);
  background-size: 150px 6375px;
  background-position: 0 -3900px;
  margin: 20px auto;
}

.my-channel panel is-active {
  display: none;
  background-color: #f9f9f9;
  border: 1px solid #eee;
  border-top: none;
  min-height: 300px;
  padding: 15px 15px 15px 15px;
  width: 580px;
  height: 335.2px;
}

.container {
    width: 100%; 
    padding-right: 0;
    padding-left: 0;
    margin-right: auto;
    margin-left: auto;
}
</style>
