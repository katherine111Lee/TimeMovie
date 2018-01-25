<template>
  <div>
    <!--头部返回-->
    <div>
      <a class="rtn" href="javascript: window.history.go(-1);">
      <i class="iconfont"></i>
      <span>返回</span>
    </a>
    <div class="m_layout clearfix">
      <div class="content1">
        <h2>{{$route.params.item.title}}</h2>
        <div class="content_t1 clearfix">
          <!--图片-->
          <div class="imgWrap1 fl">
            <img :src="$route.params.item.images.small">
          </div>
          <!--文字介绍-->
          <div class="textWrap1 fl">
            <span class="score fl">{{$route.params.item.rating.average}}</span>
            <span class="comment fl">
               <i ref="star"></i>
               <u>{{$route.params.item.collect_count
                 }}人评价</u>
             </span>
            <p>
              <em>类型/片长&nbsp;{{$route.params.item.genres[0]}}/{{$route.params.item.genres[1]}}</em>
              <strong>上映时间&nbsp;{{$route.params.item.year}}</strong>
            </p>
          </div>
        </div>
        <div class="content_b1">
          <p>
            <a href="javascript:;"><span>想看</span></a>
            <a href="javascript:;"><span>评分</span></a>
          </p>
        </div>
      </div>
      <!--演职人员-->
      <div class="worker">
        <h3>演职人员</h3>
        <swiper :options="swiperOption1" ref="mySwiper">
          <!-- slides -->
          <swiper-slide>
             <img :src="$route.params.item.directors[0].avatars.small">
             <p>导演</p>
             <span>{{$route.params.item.directors[0].name}}</span>
          </swiper-slide>
          <swiper-slide  v-for="(k,index) in $route.params.item.casts" :key="index">
            <img src="">
            <p>演员</p>
            <span>{{k.name}}</span>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <!--购票-->
    <button class="btn">优惠购票</button>
  </div>
  </div>
</template>
<script>
  import {swiper,swiperSlide} from 'vue-awesome-swiper'
  import axios from 'axios'
  export default {
    data() {
      return {
        swiperOption1: {
          slidesPerView:2.5,
          autoplay:false,
          spaceBetween: 30
        },
        msg2:this.$route.params.item
      }
    },
//    props:["hots"],
    components: {
      swiper,
      swiperSlide
    },
    mounted(){
//      console.log(this.msg2);
      var y = (parseInt(10 - Number(this.msg2.rating.average))) * (-0.35) + "rem";
//        console.log(y);
        this.$refs.star.style.backgroundPositionX = "0";
         this.$refs.star.style.backgroundPositionY = y;
    }
  }
</script>
<style scoped>
  .rtn {
    width: 100%;
    height: 1rem;
    position: fixed;
    background: orange;
    line-height: 1rem;
    border-bottom: 1px solid 	#FFFAF0;
  }

  .rtn > span {
    font-size: 0.42rem;
    color: #333;
    margin-left:0.6rem;
  }
  .rtn .iconfont{
    display: inline-block;
    width: 0.32rem;
    height:0.32rem;
    border: 1px solid #333;
    border-top: none;
    border-right: none;
    transform: rotate(45deg);
    position:absolute;
    left:0.2rem;
    top:0.3rem;
  }
  /*内容部分*/
  .m_layout {
    width:100%;
    padding:0 0.4rem;
    /*background: red;*/
    padding-top: 1rem;
    padding-bottom: 0.6rem;
  }

  .m_layout h2 {
    margin-bottom: 0.1rem;
  }

  .m_layout .content1 {
    width: 100%;
  }
  .m_layout .content1 h2{
    height:0.5rem;
    padding-left: 0.1rem;
    padding-top: 0.05rem;
  }
  .m_layout .content1 .content_t1 .imgWrap1 {
    width: 50%;
    height: 4rem;
    /*background: blue;*/
    padding:0.1rem;
  }

  .m_layout .content1 .content_t1 .imgWrap1 img {
    width: 100%;
    height: 100%;
    /*background: pink;*/
  }

  .m_layout .content1 .content_t1 .textWrap1 {
    margin-left: 0.1rem;
    width: 48.4%;
    height: 4rem;
    /*background: blue;*/
  }
/*评分*/
  .m_layout .content1 .content_t1 .textWrap1 .score {
    width: 1.4rem;
    height: 1.5rem;
    height: 1.5rem;
    /*background: red;*/
    display: inline-block;
    line-height: 2rem;
    font-size: 0.6rem;
    text-align: center;
  }
/*评论*/
  .m_layout .content1 .content_t1 .textWrap1 .comment {
    width: 1.8rem;
    /*background: pink;*/
    display: inline-block;
    padding: 0.6rem 0 0 0.04rem;
  }
/*评论的星*/
  .m_layout .content1 .content_t1 .textWrap1 .comment i {
    display: block;
    width: 100%;
    height: 0.35rem;
    margin-bottom: 0.2rem;
    background: url(../assets/images/ic_rating_m.png) no-repeat 0px 0px;
  }
/*评论人数*/
  .m_layout .content1 .content_t1 .textWrap1 .comment u {
    width: 100%;
    height: 100%;
    font-size: 0.24rem;
  }

  /*类型*/
  .m_layout .content1 .content_t1 .textWrap1 > p {
    width: 100%;
    height: 2.4rem;
    /*background: lightcoral;*/
    padding: 0.3rem 0 0 0.2rem;
    font-size: 0.28rem;
    margin-top: 1.56rem;
  }

  .m_layout .content1 .content_t1 .textWrap1 > p em {
    display: block;
    margin-bottom: 0.2rem;
  }
/*想看*/
  .m_layout .content1 .content_b1 {
    width: 100%;
    height: 1.5rem;
    /*background: orange;*/
    padding: 0.1rem 0.6rem 0;
  }

  .m_layout .content1 .content_b1 span {
    line-height: 1.5rem;
    padding: 0.2rem 1rem;
    border: 1px solid #d1d1d1;
    border-radius: 0.1rem;
    background:#eee;
  }
/*想看*/
  .m_layout .content1 .content_b1 a:nth-of-type(1) {
    margin-right: 0.3rem;
  }

  /*演职人员*/
  .m_layout .worker {
    width: 100%;
    height:5rem;
    /*background: pink;*/
    padding-top: 0.2rem;
  }
  /*演职人员轮播部分*/
  .m_layout .worker .swiper-container{
    width:100%;
    height:100%;
  }
  .m_layout .worker .swiper-container img{
    width:100%;
    height:72%;
  }
  .m_layout .worker .swiper-container p{
    text-align: center;
    margin-top: -0.5rem;
    font-weight:600;
  }
  .m_layout .worker .swiper-container span{
    display: block;
    text-align: center;
  }
/*购票*/
  .btn {
    width:100%;
    text-align: center;
    background: orange;
    height: 1.2rem;
    position: fixed;
    bottom:0;
    z-index:1000;
    font-size: 0.36rem;
  }
</style>
