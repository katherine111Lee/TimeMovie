<template>
    <div>
        <div class="m_layout">
          <div class="cover">

           <div class="imgWrap">
             <img src="../assets/images/logo.png">
           </div>

           <div class="textWrap">
              <p>让电影遇见生活</p>
           </div>
         </div>
          <router-link to="main">跳过</router-link>
    </div>
    </div>
</template>

<script>
    export default {
      methods:{
        show() {
          var that=this;
          setTimeout(function () {
//            console.log("qwe");
            that.$router.push({path:'/main'});
          },5000);
        }
      },
      mounted(){
        this.show();
      }

    }
</script>

<style scoped>
  .m_layout{
    position: fixed;
    left:0px;
    top:0px;
    height:100%;
    width:100%;
    background:rgba(25,35,50,.98);
  }
 .m_layout .imgWrap{
   width:30%;
   height:10%;
   margin:0 auto;
   margin-top:30%;
 }
 .m_layout .imgWrap img{
   width:100%;
   height:100%;
 }
 .m_layout .textWrap{
   width:9%;
   margin:0 auto;
   margin-top: 5%;
 }
 .m_layout .textWrap p{
   height:100%;
   font-size: 0.6rem;
   text-align: center;
   color:#fff;
 }
  .m_layout a{
    position: absolute;
    top:0.2rem;
    right:0.2rem;
    display: inline-block;
    background:#fff;
    padding:0.16rem;
    border-radius:0.2rem;
  }
</style>
