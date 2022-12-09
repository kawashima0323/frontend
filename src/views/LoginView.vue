<template>
    ログインID<input type="text" v-model="id"><br>
    パスワード<input type="text" v-model="password"><br>

    復習問題2<input @change="changed" type="text" v-model="huku2"><br>
    <button @click="clicked">ログイン</button><br>
    
    <div v-html="after"></div>
    <div v-html="huku2Text"></div>
</template>

<script>
import axios from 'axios'
export default{
    //dataはtemplateに反映したいプロパティを書く。
    data:() => {
        return{
            sample:"テストだよ",
            id:"",
            password:"",
            after:"",
            huku2:"",
            huku2Text:""
        }
    },
    methods: {
        clicked:function(){
             axios.get('/hotpepper/gourmet/v1/?key=0d73d0b2914349e1&large_area=Z011&format=Jsonp&callback=cback')

 .then(response => {
console.log(response.data)
console.log("成功")


 })
            console.log(this.id);
            console.log(this.password);
            this.after = '<div>ログインしました。</div>'
        },
        changed:function(){
            this.huku2Text = '<div>' + this.huku2 + 'と入力中です</div>'
        }
    }
}
</script>