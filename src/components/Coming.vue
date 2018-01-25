<template>
  <div>
    <!--<Search></Search>-->
    <div class="header">
      <input type="text" placeholder="请输入电影名字" class="search" autofocus v-model="search">
      <a href="javascript:;"><button class="btn">搜索<i class="iconfont"></i></button></a>
    </div>
    <div class="m_layout">
            <router-link class="clearfix" :to="{name:'details',params:{item:item}}" v-for="(item,index) in searchData" :key="index">
            <div class="imgWrap fl">
              <img :src="item.images.small">
            </div>
            <div class="textWrap fr">
              <h3>
                <em class="fl">{{item.title}}</em>
                <u>导演&nbsp;{{item.directors[0].name}}</u>
              </h3>
              <p>
                类型&nbsp;<span>{{item.genres[0]}}/{{item.genres[1]}}/{{item.genres[2]}}</span>
                <br> <em>主演&nbsp;<i v-for="m in item.casts">{{m.name}}/</i></em>
              </p>
            </div>
        </router-link>
      <!--<router-view :hots="hots"></router-view>-->
    </div>
  </div>
</template>

<script>
//  import Search from './Search.vue'
  import axios from 'axios'
  export default {
    data(){
      return{
        message1:[],
        search:""
      }
    },
    created(){
      let that=this;
      axios({
        url:"static/data/movie_coming_soon.json",
        method:"get"
      }).then(function(res){
//        console.log(res);
        that.message1=res.data.subjects;
      },function(err){
        console.log(err);
      })
    },
    computed:{
      searchData(){
        var search=this.search;
//          console.log(search);
        if(search){
          return this.message1.filter(function(item1){
            return Object.keys(item1).some(function(key){
//                console.log(key);
              return String(item1[key]).toLowerCase().indexOf(search)>-1;
            })
          })
        }
        return this.message1;
      }
    }
  }
</script>

<style scoped>
  .m_layout{
    margin-bottom:0.8rem;
    padding-top:0.8rem;
    padding-bottom:0.3rem;
  }
  .header{
    width:100%;
    height:0.8rem;
    padding:0.1rem 0.3rem;
    background: lightcoral;
    position: fixed;
  }
  .header .search{
    height:100%;
    width:80%;
    background:#fff;
    vertical-align: middle;
    border-radius:0.2rem;
    border: 1px solid #aaa;
    padding:0.1rem 0 0 0.2rem;
  }
  .header .search::-webkit-input-placeholder{
    font-size: 0.3rem;
    color:#eee;
  }
  .header .btn{
    width:16%;
    height:0.6rem;
    color:#666;
    background:#fff;
    margin-left:0.1rem;
    font-size: 0.24rem;
    /*vertical-align: middle;*/
    border:0.02rem solid #aaa;
    -webkit-border-radius: 0.3rem;
    -moz-border-radius: 0.3rem;
    border-radius: 0.3rem;
  }
  .header .btn:hover{
    background:lightcoral;
  }
  .m_layout a{
    display:block;
    width:100%;
    padding:0rem 0.3rem;
    /*background: blue;*/
    height:3rem;
  }
  .m_layout a .imgWrap{
    width:40%;
    height:100%;
    /*background:orange;*/
    padding: 0.25rem 0.1rem;
    margin-right:0.1rem;
  }
  .m_layout a .imgWrap img{
    width:100%;
    height:100%;
  }
  .m_layout a .textWrap{
    width:56%;
    height:100%;
    /*background: lightcyan;*/
    padding-top: 0.25rem;
  }
  .m_layout a .textWrap h3{
    height:0.8rem;
    width:100%;
    margin-bottom:0.3rem;
    line-height:0.5rem;
  }
  /*电影名字*/
  .m_layout a .textWrap h3 em{
    font-style: normal;
    font-weight:800;
    font-size: 0.36rem;
    margin-right:0.3rem;
    display:inline-block;
    width:100%;
  }
  /*导演*/
  .m_layout a .textWrap h3 u{
    font-style: normal;
    font-weight:500;
    font-size: 0.30rem;
    margin-right:0.3rem;
    display:inline-block;
    width:100%;
  }
  /*评分*/
  m_layout a .textWrap h3 u{
    font-weight:500;
    /*color:lightseagreen;*/
    display:inline-block;
    width:100%;
 }
  .m_layout a .textWrap p{
    font-size: 0.24rem;
    color:#333;
  }
  /*电影类型*/
  .m_layout a .textWrap p span{
    display: inline-block;
    margin-bottom: 0.2rem;
    font-weight:normal;
    color:	#08c;
    font-size: 0.24rem;
  }
  /*电影主演*/
  .m_layout a .textWrap p i{
    font-size: 0.24rem;
    color:#08c;
    font-weight: normal;
    display: inline-block;
    margin-bottom:0.02rem;
  }
</style>
