import Home from './components/Home.vue';
import Moi from './components/Moi.vue';
import Video from './components/Video.vue';
import Xahoi from './components/Xahoi.vue';
import Datheodoi from './components/Datheodoi.vue';
import Docganday from './components/Docganday.vue';
import Muccuaban from './components/Muccuaban.vue';
import Tindaluu from './components/Tindaluu.vue';
import Theme from './components/Theme.vue';
import Dexuat from './components/Dexuat.vue';
import Phongdichcovid from './components/Phongdichcovid.vue';
import Nangluongtichcuc from './components/Nangluongtichcuc.vue';
import Khamphavietnam from './components/Khamphavietnam.vue';
import Khamphathegioi from './components/Khamphathegioi.vue';



const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/moi', component: Moi, name: 'moi' },
    { path: '/video', component: Video, name: 'video' },
    { path: '/xahoi', component: Xahoi, name: 'xahoi' },
    { path: '/datheodoi', component: Datheodoi, name: 'datheodoi' },
    { path: '/docganday', component: Docganday, name: 'docganday' },
    { path: '/muccuaban', component: Muccuaban, name: 'muccuaban' },
    { path: '/tindaluu', component: Tindaluu, name: 'tindaluu' },
    { path: '/theme', component: Theme, name: 'theme' },
    { path: '/dexuat', component: Dexuat, name: 'dexuat'},
    { path: '/phong-chong-dich-covid-19', component: Phongdichcovid, name: 'phong-chong-dich-covid-19'},
    { path: '/nang-luong-tich-cuc', component: Nangluongtichcuc, name: 'nang-luong-tich-cuc'},
    { path: '/kham-pha-viet-nam', component: Khamphavietnam, name: 'kham-pha-viet-nam'},
    { path: '/kham-pha-the-gioi', component: Khamphathegioi, name: 'kham-pha-the-gioi'},
    { path: '/newpost', component: Xahoi, name: 'newpost'},
  
    
   

];
export default routes;