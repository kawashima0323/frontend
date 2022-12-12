<template>
  <header>
    <div id="header-top">
    <img alt="Vue logo" src="../assets/キャリーバッグ.jpeg">
    <h1>お出かけ支援サイト</h1>
    </div>
    <nav>
      <router-link to="/">トップ</router-link> |
      <router-link to="/about">おでかけ</router-link> |
      <router-link to="/login">経路検索</router-link> |
      <router-link to="/sandbox/313">店舗検索</router-link> |
      <router-link to="/sandbox/さんびゃくじゅうさん">カレンダー</router-link> |
      <router-link to="/sandbox/さんびゃくじゅうさん"></router-link> 
    </nav>
  </header>
</template>


<style scoped>
header{
    background: rgb(183, 183, 223);
    padding:0%;
    margin: 0%;
}
img{
  height: 20px;
}
nav{
border-bottom: 5px solid #ccc;
position: relative;
}
nav ul{
position: absolute;
left:10%;
display: table;
margin: 0 auto;
padding: 0;
width: 80%;
text-align: center;
}
nav ul li{
display: table-cell;
min-width: 50px;
}
nav ul li a{
display: block;
width: 100%;
height: 100%;
padding: 10px 0;
text-decoration: none;
color: #aaa;
}
nav ul li.current{
font-weight: bold;
border-top: 5px solid #00B0F0;
}
nav ul li.current a{
color: #00B0F0;
}
nav ul li a:hover{
color: #0089BB;
background-color: #FBFBDD;
}
nav ul li:hover{
border-top: 5px solid #F8E750;
}
</style>