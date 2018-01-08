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
            <div class="book-list">
                <div class="header">
                    <div class="heading">最新更新</div>
                    <div class="more">更多...</div>
                </div>
                <div class="book-items">
                    <div class="book"
                        v-for="(book,index) in latestUpdated" :key="index">
                        <div class="cover">
                            <img :src="book.img_url">
                        </div>
                        <div class="title">{{book.title}}</div>
                        <div class="authors">{{book.authors}}</div>
                    </div>
                </div>
            </div>

        </div>
        <div class="section">
            <!-- 编辑推荐 -->
            <div class="book-list">
                <div class="header">
                    <div class="heading">编辑推荐</div>
                    <div class="more">更多...</div>
                </div>
                <div class="book-items">
                    <div class="book"
                        v-for="(book,index) in recommended" :key="index">
                        <div class="cover"><img :src="book.img_url"></div>
                        <div class="title">{{book.title}}</div>
                        <div class="authors">{{book.authors}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from "swiper"     //引入swiper库
import 'swiper/dist/css/swiper.css'     //引入Swiper所需要的样式
import './books/list.less'
export default {
    data () {
        return {
            announcement:'今日上架的图书全部8折',
            slides:[
                {id:1, img_url: '../static/sliders/t1.svg'},
                // {id:2, img_url: '../static/sliders/t2.svg'}
            ],
            latestUpdated:[],
            recommended:[
                
            ]
        }
    },

    created () {
        this.$http.get('https://www.easy-mock.com/mock/5a533416e22fe51ccb28bd9d/vue-project/latestUpdated')
            .then(res=>{
                console.log(res.body.data);
                this.latestUpdated=res.body.data;
            })

        this.$http.get('https://www.easy-mock.com/mock/5a533416e22fe51ccb28bd9d/vue-project/recommended')
            .then(res=>{
                console.log(res.body.data);
                this.recommended=res.body.data;
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
