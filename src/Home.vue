<template>
    <div>
        <div class="section">
            <!-- 热门推荐 -->
            <div class="swiper-container" ref="slider">
                <div class="swiper-wrapper" v-for="(slide,index) in slides" :key="index">
                     <router-link class="swiper-slide"
                                tag="div"
                                :to="{name:'BookDetail', params:{id:slide.id}}">
                         <img :src="slide.img_url">
                     </router-link>
                </div>
                <div class="swiper-pagination" ref="pagination">
                </div>
            </div>
            <!-- 快讯 -->
            <div class="announcement">
                <label>快讯</label>
                <span>{{ announcement }}</span>
            </div>
        </div>
        <div class="section">
            <!-- 新书上架 -->
            <book-list  :books="latestUpdated" heading="最新更新" @onBookSelect="preview($event)">
            </book-list>
        </div>
        <div class="section">
            <!-- 编辑推荐 -->
            <book-list :books="recommended" heading="编辑推荐">
            </book-list>
        </div>

        <modal-dialog ref="dialog" @dialogClose="selected=undefined"  v-if="selected">
            <div slot="header">
                <div class="dismiss" @click.prevent="$refs.dialog.close()"></div>
            </div>
            <div>
                <img :src="selected.img_url">
            </div>
            <div>
                {{ selected.title }}
            </div>
        </modal-dialog>
    </div>
</template>

<script>
import Swiper from "swiper"     //引入swiper库
import 'swiper/dist/css/swiper.css'     //引入Swiper所需要的样式
import './books/list.less'
import BookList from './components/Booklist.vue'
import ModalDialog from "./components/dialog.vue"
export default {
    data () {
        return {
            announcement:'',
            slides:[],
            latestUpdated:[],
            recommended:[],
            selected:undefined,
        }
    },
    components: {
        BookList,ModalDialog
    },
    created () {
        this.$http.get('https://www.easy-mock.com/mock/5a533416e22fe51ccb28bd9d/vue-project/recommended')
            .then(res=>{
                console.log(res.body.data);
                for (let prop in res.body.data) {
                    this[prop] = res.body.data[prop]
                }
            },(error)=>{
                console.log(`获取数据失败：${error}`)
            })
    },

    // 不要选用created钩子而应该采用mounted
    // 否则Swiper不能生效，因为created调用时元素还没挂到DOM上
    mounted () {
        new Swiper(this.$refs.slider, {
            pagination: this.$refs.pagination,
            paginationClickable: true,
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: 2500,
            autoplayDisableOnInteraction: false
        })
    },

    methods: {
        preview (book) {
            this.selected = book
            this.$refs.dialog.open()
        }
    }
}
</script>


<style>
.swiper-container {
        width: 100%;
        margin: 0;
        padding: 0;
    }

    .swiper-wrapper {
        height: 200px;
    }

    .swiper-slide img {
        max-width: 100%;
    }

    .swiper-slide {
        text-align: center;
        background: #fff;
        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }

</style>
