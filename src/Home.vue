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
                    <div class="book">
                        <div class="cover"><img src="./fixtures/covers/1.svg"></div>
                        <div class="title">揭开数据真相：从小白到数据分析达人</div>
                        <div class="authors">Edward Zaccaro, Daniel Zaccaro</div>
                    </div>
                    <div class="book">
                        <div class="cover"><img src="./fixtures/covers/2.svg"></div>
                        <div class="title">Andorid 高级进阶</div>
                        <div class="authors">Edward Zaccaro, Daniel Zaccaro</div>
                    </div>
                    <div class="book">
                        <div class="cover"><img src="./fixtures/covers/3.svg"></div>
                        <div class="title">揭开数据真相：从小白到数据分析达人</div>
                        <div class="authors">Edward Zaccaro, Daniel Zaccaro</div>
                    </div>
                    <div class="book">
                        <div class="cover"><img src="./fixtures/covers/4.svg"></div>
                        <div class="title">揭开数据真相：从小白到数据分析达人</div>
                        <div class="authors">Edward Zaccaro, Daniel Zaccaro</div>
                    </div>
                    <div class="book">
                        <div class="cover"><img src="./fixtures/covers/5.svg"></div>
                        <div class="title">揭开数据真相：从小白到数据分析达人</div>
                        <div class="authors">Edward Zaccaro, Daniel Zaccaro</div>
                    </div>
                    <div class="book">
                        <div class="cover"><img src="./fixtures/covers/6.svg"></div>
                        <div class="title">揭开数据真相：从小白到数据分析达人</div>
                        <div class="authors">Edward Zaccaro, Daniel Zaccaro</div>
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
                {id:1, img_url: './fixtures/sliders/t1.svg'},
                // {id:2, img_url: './fixtures/sliders/t2.svg'}
            ],
            latestUpdated:[
                {
                    "id": 1,
                    "title": "揭开数据真相：从小白到数据分析达人",
                    "authors": [
                        "Edward Zaccaro, Daniel Zaccaro"
                    ],
                    "img_url": "./fixtures/covers/1.svg"
                },
                {
                    "id": 2,
                    "title": "Android 高级进阶",
                    "authors": [
                        "顾浩鑫"
                    ],
                    "img_url": "./fixtures/covers/2.svg"
                },
                {
                    "id": 3,
                    "title": "淘宝天猫电商运营与数据化选品完全手册",
                    "authors": [
                        "老夏"
                    ],
                    "img_url": "./fixtures/covers/3.svg"
                },
                {
                    "id": 4,
                    "title": "大数据架构详解：从数据获取到深度学习",
                    "authors": [
                        "朱洁",
                        "罗华霖"
                    ],
                    "img_url": "./fixtures/covers/4.svg"
                },
                {
                    "id": 5,
                    "title": "Meteor全栈开发",
                    "authors": [
                        "杜亦舒"
                    ],
                    "img_url": "./fixtures/covers/5.svg"
                },
                {
                    "id": 6,
                    "title": "Kubernetes权威指南：从Docker到Kubernetes实践全接触（第2版）",
                    "authors": [
                        "龚正",
                        "吴治辉",
                        "王伟",
                        "崔秀龙",
                        "闫健勇"
                    ],
                    "img_url": "6.svg"
                }
            ],
            recommended:[
                {
                    "id": 1,
                    "title": "揭开数据真相：从小白到数据分析达人",
                    "authors": [
                        "Edward Zaccaro, Daniel Zaccaro"
                    ],
                    "img_url": "./fixtures/covers/1.svg"
                },
                {
                    "id": 2,
                    "title": "Android 高级进阶",
                    "authors": [
                        "顾浩鑫"
                    ],
                    "img_url": "./fixtures/covers/1.svg"
                },
                {
                    "id": 3,
                    "title": "淘宝天猫电商运营与数据化选品完全手册",
                    "authors": [
                        "老夏"
                    ],
                    "img_url": "./fixtures/covers/3.svg"
                },
                {
                    "id": 4,
                    "title": "大数据架构详解：从数据获取到深度学习",
                    "authors": [
                        "朱洁",
                        "罗华霖"
                    ],
                    "img_url": "./fixtures/covers/4.svg"
                },
                {
                    "id": 5,
                    "title": "Meteor全栈开发",
                    "authors": [
                        "杜亦舒"
                    ],
                    "img_url": "./fixtures/covers/5.svg"
                },
                {
                    "id": 6,
                    "title": "Kubernetes权威指南：从Docker到Kubernetes实践全接触（第2版）",
                    "authors": [
                        "龚正",
                        "吴治辉",
                        "王伟",
                        "崔秀龙",
                        "闫健勇"
                    ],
                    "img_url": "./fixtures/covers/6.svg"
                }
            ]
        }
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
