<template>
    <div>
      <!--搜索框-->
      <!--<Search></Search>-->
      <div class="header">
        <input type="text" placeholder="请输入电影名字" class="search" autofocus v-model="search">
        <a href="javascript:;"><button class="btn">搜索<i class="iconfont"></i></button></a>
      </div>
      <!--搜索框结束-->
      <div class="m_layout">
          <router-link class="clearfix" :to="{name:'details',params:{item:item}}" v-for="(item,index) in searchData" :key="index">
        <div class="imgWrap fl">
          <img :src="item.images.small">
        </div>
        <div class="textWrap fr">
          <h3>
            <em class="fl">{{item.title}}</em>
            <u>{{item.rating.average}}</u>
          </h3>
          <p>
            类型&nbsp;<span>{{item.genres[0]}}/{{item.genres[1]}}/{{item.genres[2]}}</span>
            <br><em>主演&nbsp;<i v-for="m in item.casts">{{m.name}}/</i></em>
          </p>
        </div>
      </router-link>
        <!--<router-view :hots="hots"></router-view>-->
      </div>
    </div>
</template>

<script>
//    import Search from './Search.vue'
    import axios from 'axios'
    export default {
      data(){
        return{
          msg:[],
          search:""
        }
      },
      created(){
        var that=this;
        axios({
          url:'static/data/movie_in_theaters.json',
          method:'get'
        }).then(function(res){
//          console.log(res);
          that.msg=res.data.subjects;
        },function(err){
          console.log(err);
        })
      },
      computed:{
        searchData(){
          var search=this.search;
//          console.log(search);
          if(search){
            return this.msg.filter(function(item1){
              return Object.keys(item1).some(function(key){
//                console.log(key);
                return String(item1[key]).toLowerCase().indexOf(search)>-1;
               })
            })
          }
          return this.msg;
        }
      }
    }
</script>

<style scoped>
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
    color:#999;
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
  .m_layout{
    margin-bottom:0.8rem;
    padding-top:0.8rem;
    padding-bottom:0.3rem;
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
    height:3rem;
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
    margin-bottom:0.2rem;
    line-height:0.4rem;
  }
  /*电影名字*/
  .m_layout a .textWrap h3 em{
    font-style: normal;
    font-weight:800;
    font-size: 0.36rem;
    margin-right:0.3rem;
    display:inline-block;
    width:2.7rem;
  }
  /*评分*/
  .m_layout a .textWrap h3 u{
    display: inline-block;
    font-weight: normal;
    background:#679c21;
    padding:0.05rem;
    color:#fff;
  }
  .m_layout a .textWrap p{
    font-size: 0.24rem;
    color:#333;
    width:100%;
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
  .m_layout a .textWrap p em{
    text-overflow: ellipsis;
    overflow: hidden;
    display:-webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient:vertical;
  }
  .m_layout a .textWrap p i{
    font-size: 0.24rem;
    color:#08c;
    display: inline-block;
    font-weight: normal;
    margin-bottom:0.2rem;
  }
</style>
