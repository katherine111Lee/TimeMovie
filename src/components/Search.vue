<template>
    <div>
      <div class="header">
        <input type="text" placeholder="请输入电影名字" class="search" autofocus="autofocus">
        <a href="javascript:;"><button class="btn">搜索<i class="iconfont"></i></button></a>
      </div>
    </div>
</template>

<script>
    export default {}
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
</style>
