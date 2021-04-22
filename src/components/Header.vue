<template>
     
<!--Page Head-->

  <div class="header">
    <div class="container">
          <a href="/" class="logo"></a> 
          <div class="header__search bm-search">
            <input type="text" class="text-search is-focus" placeholder="Nhập nội dung tìm kiếm">
            <button aria-label="Tìm kiếm"><i class="fa fa-search" aria-hidden="true"></i></button>
            <div class="suggest-holder"></div>
          </div>
          <div class="header__user">
            <div class="login" v-if="isShow">
                <a href="#" class="thumb" id="dropdownMenuButton-1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                   <i class="fa fa-user-o" aria-hidden="true"></i>
                </a>
                <div class="bm-dropdown-menu login-board dropdown-menu">
                    <span class="h6">Đăng nhập</span>
                    <span class="desc">Đăng nhập để trải nghiệm thêm những tính năng hữu ích</span>
                    <a class="btn btn-lg btn-zalo" @click=" loginat">
                        <i class="bm bm--login-zalo"></i>
                        <span>Zalo</span>
                    </a>
                </div>
            </div>
            <div class="logged user" :class="{hidden: hiat}">
                <a href="#" class="uName thumb" id="dropdownMenuButton-2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="">
                    <div class="uName__thumb img">
                    <img id="user-avatar" alt="avatar" src="https://static.topcv.vn/company_logos/cong-ty-co-phan-cong-nghe-intlabs-viet-nam-5e7a238440736.jpg" style="width: 24px; height: 24px;"></div>

                    <span class="text" id="text_user" >IntLabs Viet Nam 2021</span>
                </a>
                <div class="user-board bm-dropdown-menu dropdown-menu" aria-labelledby="dropdownMenuButton-2" x-placement="bottom-start" style="position: absolute; transform: translate3d(0px, -214px, 0px); top: 0px; left: 0px; will-change: transform;">
                    <ul>
                        <li class="is-first"><a href="/dexuat"><i class="fa fa-star" aria-hidden="true"></i><span>Đề xuất</span></a></li>
                        <li><a href="/docganday"><i class="fa fa-history" aria-hidden="true"></i><span>Đã đọc</span></a></li>
                        <li><a href="/tindaluu"><i class="fa fa-bookmark" aria-hidden="true"></i><span>Đã lưu</span></a></li>
                        <li><a href="/muccuaban"><i class="fa fa-user" aria-hidden="true"></i><span>Cá nhân</span></a></li>
                        <li class="log-out"><button aria-label="Đăng xuất" class="btn-logout" @click="logout"><i class="fa fa-sign-out"  aria-hidden="true"></i><span>Đăng xuất</span></button></li>
                    </ul>
                </div> 
            </div>
        </div>
        <a href="/" data-target-host="https://m.baomoi.com" class="header__switch-mobile">
          <i class="fa fa-mobile" aria-hidden="true"></i>
          </a>
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return{
            hiat: true,
            isShow: true,
        }
    },
    methods: {
        loginat() 
        {
            this.hiat =! this.hiat;
            this.isShow =! this.isShow;
            sessionStorage.setItem("isLogin", true)
        },
        
        logout() 
        {
            this.hiat =true;
            this.isShow =true;
            sessionStorage.setItem("isLogin", false)
            alert('Do you want Logout ?')
        }
    },
    mounted() {
           
        if (sessionStorage.getItem("isLogin") == "true") {
            this.loginat()
        }
    }
}
</script>
<style>
.nav-wrap .nav__parent>a:before {
    content: '';
    display: inline-block;
    width: 3px;
    height: calc(100% - 20px);
    position: absolute;
    top: 10px;
    left: -13px;
    background-color: #2fa1b3;
}
.nav-wrap .nav__child li {
    width: 100%;
}
.bm-search:hover {
    border-color: #82c7d1;
}
.ul,li {
  list-style-type: none;
}
.nav-wrap .nav__parent {
    display: block!important;
    width: calc(100%/5);
    margin-right: 0;
    margin-bottom: 10px;
    line-height: 26px;
    float: none;
    position: relative;
}
*::after,
::before {
  box-sizing: border-box;
}
.nav-wrap .nav__child li a {
    font-size: 0.9rem;
    line-height: 1.8rem;
    font-weight: 600;
    height: 25px;
    color: #495057;
    display: flex;
    height: 100%;
}

.li {
  text-align: -webkit-match-parent;

}
.body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  background-color: #fff;
}
.nav-wrap .nav__parent>a {
    font-size: 1rem;
    line-height: 2.5rem;
    font-weight: 600;
    height: 40px;
    text-transform: uppercase;
    display: block;
    color: #2fa1b3;
    position: relative;
}

.nav-wrap .full-menu {
    position: absolute; 
     /* visibility: hidden; */
    /* opacity: 0; */
    background-color: #f3f3f3;
    box-shadow: 0 2px 4px rgba(0,0,0,.1);
    border-bottom: 1px solid #dee2e6;
    width: 100%;
    padding: 20px 0 10px 30px;
}
.nav-wrap .full-menu {
    position: absolute;
 /* visibility: hidden; */
    /* opacity: 0; */
    display: none;
}
.nav-wrap .nav_expand .dropd >button {
    border: none;
    font-size: 1rem;
    line-height: 2.5rem;
    font-weight: 600;
    height: 40px;
    display: block;
    padding: 0 13px;
    color: #fff;
    cursor: pointer;
    border-left: 1px solid rgba(255,255,255,.2);
    border-right: 1px solid rgba(255,255,255,.2);
    background-color: #2b94a5;
}
.nav-wrap .nav_expand {
    margin-left: auto;
}
.nav-wrap .nav_expand .dropd >button.is-active, .nav-wrap .nav_expand .dropd >button:hover {
    background-color: #247a88;
    border-left: 1px solid #247a88;
}

.nav-wrap .full-menu .container ul {
    display: flex;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    justify-content: flex-start;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    overflow: visible;
}
.nav-wrap .full-menu .nav__parent {
    padding-right: 20px;
}

.nav__menu a.sub {
  height: 20px;
  line-height: 18px;
  padding: 0 8px;
  margin: 0 4px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  font-size: 13px;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  
}

a.main_topic {
  font-size: 1rem;
  line-height: 2.5rem;
  height: 40px;
  text-transform: uppercase;
  display: block;
  padding: 0 10px;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
}

.nav-wrap .nav__menu a {
    position: relative;
    background-size: 2px 10px;
    border-left: 1px solid rgba(255,255,255,.2);
    font-size: 1rem;
    line-height: 2.5rem;
    font-weight: 600;
    height: 40px;
    text-transform: uppercase;
    display: block;
    padding: 0 12px;
    color: #fff;
    cursor: pointer;
    overflow: hidden;
}
.nav-wrap .nav_topic .sub {
    height: 20px;
    line-height: 18px;
    padding: 0 8px;
    margin: 0 4px;
    border: 1px solid rgba(255,255,255,.3);
    border-radius: 10px;
    font-size: 13px;
    color: #fff;
}
.header .header__user {
    position: absolute;
    right: 50px;
    top: 18px;
}

.header .header__user .login .thumb {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    border-radius: 3px;
    border: 1px solid #fff;
}
.header .header__user .user .thumb .img img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 1px solid #fff;
    vertical-align: top;
}
img {
    vertical-align: middle;
    border-style: none;
}
.header .header__user .user .thumb.has-touched .text, .header .header__user .user .thumb:hover .text {
    color: #000;
}
.header .header__user .user .thumb .img {
    margin-right: 10px;
    overflow: hidden;
}
.header .header__user .user .thumb .text {
    line-height: 30px;
    height: 30px;
    display: inline-block;
    font-size: 14px;
    color: #777;
}
.header .header__user .user .thumb.has-touched:after, .header .header__user .user .thumb:hover:after {
    color: #212529;
}
.header .header__user .user .thumb:after {
    color: #6c757d;
}

a:hover {
    color: #2fa1b3;
    text-decoration: none;
}
.header .header__user .user .thumb::after {
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: .17em;
    vertical-align: .17em;
    content: "";
    border-top: .2em solid;
    border-right: .2em solid transparent;
    border-bottom: 0;
    border-left: .2em solid transparent;
}


element.style {
    position: absolute;
    transform: translate3d(0px, 30px, 0px);
    top: 0px;
    left: 0px;
    will-change: transform;
}
.bm-dropdown-menu {
    border-radius: 5px;
    position: relative;
    border: 1px solid #dee2e6;
    padding: 0;
    width: 200px;
    left: inherit!important;
    font-size: 1.4rem;
    line-height: 2.2rem;
    font-weight: 400;
}
.header__user .user .user-board {
    right: -31px;
    padding: 5px 0;
    font-size: 0;
    box-shadow: 0 0.5rem 1rem rgba(0,0,0,.15);
}
.header__user .user .user-board li {
    font-size: 14px;
    position: relative;
    height: 40px;
    border-top: 1px solid #eee;
}
.header__user .user .user-board li:first-child {
    border-top: none;
}
.header__user .user .user-board li a, .header__user .user .user-board li button {
    height: 40px;
    width: 100%;
    display: flex;
    align-items: center;
    color: #333;

    border: none;
    padding: 0 15px 0;
    width: 100%;
    text-align: left;
    text-decoration: none;
}
.dropdown-menu.show {
    display: block;
}
.header__user .user .user-board li i {
    margin-right: 10px;
    font-size: 1.1rem;
}
ul {
    padding-left: 0;
    list-style: none;
    margin: 0;
}

[class*=fa-]:before, [class*=fi-]:before {
    font-style: normal;
    font-weight: 400;
    display: inline-block;
    text-decoration: inherit;
    width: 1em;
    text-align: center;
    font-variant: normal;
    text-transform: none;
    line-height: 0.5em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.fi-award:before {
    content: '\e80d';
}
.header__user .user .user-board li button {
    cursor: pointer;
    border: none;
    background-color: #fff;
}




.header .header__switch-mobile:hover {
    background-color: #f8f9fa;
    border: 1px solid #e9ecef;
}
.header__switch-mobile {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 120px;
    top: 15px;
    border-radius: 3px;
    font-size: 0;
    border: 1px solid #fff;
    padding: 2px;
}

.header .header__switch-mobile:hover i {
    font-weight: 700;
    color: #2fa1b3;
}
.fi-mobile:before {
    content: '\e808';
}
.header .header__switch-mobile i {
    font-size: 25px;
    color: #6c757d;
}





.header-2020 .header__search {
    position: absolute;
    top: 15px;
    left: 204px;
}
.bm-search {
    height: 36px;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #e9ecef;
    background-color: #fff;
    font-size: 0;
}
.bm-search input {
    font-size: 0.9rem;
    line-height: 1.5rem;
    font-weight: 200;
    color: #000;
    border: none;
    height: 34px;
    width: calc(100% - 32px);
    padding-left: 10px;
}
button, input {
    overflow: visible;
}
button, input, optgroup, select, textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}
.bm-search button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    color: #777;
    cursor: pointer;
    width: 30px;
    height: 10px;
    background-color: #fff;
    vertical-align: top;
}
.button {
    padding: 0;
    background-color: transparent;
    cursor: pointer;
    border: none;
}
.button {
    border-radius: 0;
}
.bm-search button i {
    font-size: 1.2rem;
}
.fi-search:before {
    content: '\e800';
}
.header .header__user .login .thumb i {
    font-size: 1.1rem;
    color: #6c757d;
}
.header .header__user .login .thumb.has-touched i, .header .header__user .login .thumb:hover i, .header .header__user .login .thumb[aria-expanded=true] i {
    font-weight: 700;
    color: #2fa1b3;
}
.btn-zalo {
    background-color: #03a5fa;
}
.btn-fb, .btn-zalo {
    color: #fff;
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    padding: .5rem;
}
.bm--login-zalo {
    background-position: 0 -3450px;
    width: 32px;
    height: 32px;
}
.bm {
    background-image: url(https://baomoi-static.zadn.vn/web/styles/img/bm-icon-2.0.3.png);
    background-size: 100px 4250px;
    display: inline-block;
    vertical-align: middle;
}
.btn-fb span:before, .btn-zalo span:before {
    width: 1px;
    height: 18px;
    background-color: rgba(255,255,255,.5);
    position: absolute;
    content: '';
    left: 0;
    top: 5.5px;
}
.btn-fb span, .btn-zalo span {
    position: relative;
    padding-left: 10px;
    margin-left: 5px;
    text-transform: none;
}
.btn-fb:hover, .btn-zalo:hover {
    color: #fff;
    background-color: #0284c8;
}
.nav__child li a.is-active, .nav__child li a:hover {
    color: #2fa1b3;
}


.nav__menu a.is-active+a, .nav__menu a:hover+a {
    border-left: 1px solid rgba(255,255,255,.2);
}
.nav__topic .main.is-active, .nav__topic .main:hover {
    background-color: #2b94a5;
}

.nav-wrap .nav_topic .sub:hover {
    background-color: rgba(255,255,255,.1);
}





.nav-wrap .nav.is-fixed:last-child {
    display: block;
}

.nav-wrap .is-fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
}
.nav-wrap .is-fixed {
    z-index: 1040;
    background-color: #2fa1b3;  
}







.nav__topic .main.is-active, .nav__topic .main:hover {
    background-color: #2b94a5;
}








.nav-wrap {
    position: relative;
    height: 40px;
    z-index: 100;
}
.nav-wrap .nav_a {
    z-index: 1040;
    background-color: #2fa1b3;
}



.nav-wrap .nav_a>.container {
    display: flex;
    justify-content: flex-start;
    height: 40px;
    overflow: hidden;
}

@media (min-width: 992px) {
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
.container {
    width: 970px;
}




.nav-wrap .nav__menu {
    display: flex;
}

.nav-wrap .nav__menu a:first-child {
    border-left: 1px solid rgba(255,255,255,.2);
}
.nav-wrap .nav__menu a.is-active, .nav-wrap .nav__menu a:hover {
    background-color: #2b94a5;
    border-left: 1px solid rgba(255,255,255,.2);
}

.nav-wrap .nav__menu a.is-active+a, .nav-wrap .nav__menu a:hover+a {
    border-left: 1px solid rgba(255,255,255,.2);
}

.nav-wrap .nav__menu .latest {
    display: flex;
}

.nav-wrap .nav_topic {
    display: flex;
    align-items: center;
    border-left: 1px solid rgba(255,255,255,.2);
    float: right;
}

.nav-wrap .nav_topic .main_topic {
    font-size: 1rem;
    line-height: 2.5rem;
    font-weight: 600;
    height: 40px;
    text-transform: uppercase;
    display: block;
    padding: 0 10px;
    color: #fff;
    cursor: pointer;
    width: 80px;
    
}


a {
    color: #212529;
    text-decoration: none;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
}
.nav-wrap .nav_topic .main.is-active, .nav-wrap .nav_topic .main_topic:hover {
    background-color: #2b94a5;
}
.header .header__user .login .thumb.has-touched, .header .header__user .login .thumb:hover, .header .header__user .login .thumb[aria-expanded=true] {
    background-color: #f8f9fa;
    border: 1px solid #e9ecef;
}

.nav-wrap .nav__expand>button {
    border: none;
    font-size: 1.8rem;
    line-height: 4rem;
    font-weight: 600;
    height: 40px;
    display: block;
    padding: 0 13px;
    color: #fff;
    cursor: pointer;
    border-left: 1px solid rgba(255,255,255,.2);
    border-right: 1px solid rgba(255,255,255,.2);
    background-color: #2b94a5;
}
.nav-wrap .nav__expand>button i {
    font-size: 16px;
    opacity: .9;
}



.header {
    background-color: #fff;
    height: 66px;
    z-index: 110;
    position: relative;
}
.header .container {
    height: 66px;
    position: relative;
}
.header .logo {
    position: absolute;
    top: 7px;
    left: 10px;
}
.logo {
    background-image: url(https://baomoi-static.zadn.vn/web/styles/img/BM_2020.png);
    background-position: 0 0;
    display: inline-block;
    vertical-align: middle;
    background-size: 125px 54px;
    width: 125px;
    height: 54px;
}

.header .header__search {
    position: absolute;
    top: 5px;
    left: 204px;
}
.bm-search {
    height: 36px;
    width: 500px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* border: 1px solid #e9ecef; */
    background-color: #fff;
    font-size: 0;
}
input:focus, select:focus {
    outline: -webkit-focus-ring-color auto 0;
}
button, input {
    overflow: visible;
}
button {
    padding: 0;
    background-color: transparent;
    cursor: pointer;
    border: none;
}
button, select {
    text-transform: none;
}
.hidden {
    display: none!important;
}

.header .header__user .login .login-board {
    transform: none!important;
    top: 37px!important;
    right: -32px;
    padding-top: 15px;
    padding: 10px;
}
.dropdown-menu {
    display: none;
}
.header .header__user .login .login-board .desc {
    font-size: 0.89rem;
    line-height: 1rem;
    font-weight: 400;
    display: block;
    color: #777;
    margin-bottom: 10px;
}
.header .header__user .login .login-board>a:last-child {
    margin-bottom: 0;
}
.header .header__user .login .login-board>a {
    height: 40px;
    margin-bottom: 5px;
}
.header .header__user .user {
    position: relative;
}
.header .header__user .user .thumb {
    display: flex;
    align-items: center;
    position: relative;
    font-size: 14px;
}
.header .header__switch-mobile {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 10px;
    top: 18px;
    border-radius: 3px;
    font-size: 0;
    border: 1px solid #fff;
    padding: 2px;
}

.nav-wrap .nav__menu a.is-active, .nav-wrap .nav__menu .btns:hover {
    background-color: #2b94a5;
    border-left: 1px solid rgba(255,255,255,.2);
}
</style>