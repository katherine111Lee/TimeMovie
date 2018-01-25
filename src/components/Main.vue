<template>
    <div>
      <div class="menu">
         <div class="menu_item">
             <router-link to="/main/hot">正在热映</router-link>
         </div>
        <div class="menu_item">
          <router-link to="/main/coming">即将上映</router-link>
        </div>
        <div class="menu_item">
          <router-link to="/main/top">排行榜</router-link>
        </div>
      </div>
      <router-view></router-view>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped>
  .menu{
    border-top:1px solid #d1d1d1;
    position:fixed;
    z-index:1000;
    width:100%;
    height:0.8rem;
    bottom:0;
    background:#fff;
    display: flex;
  }
  .menu .menu_item{
    flex:1;
  }
  .menu .menu_item a{
    display: block;
    text-align: center;
    font-size:0.32rem;
    color:#333;
    line-height: 0.8rem;
  }
  .menu .menu_item a.router-link-active{
    color:lightcoral;
  }
</style>
