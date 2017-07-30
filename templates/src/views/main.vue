<template>
  <div class="main" style="padding-bottom: 20px;">
    <!--{{questions}}-->
    <div style="position: relative;">
      <img style="width: 100%;" src="../assets/b1.jpg" alt="">
      <div class="an-move" style="width: 10%;position: absolute;bottom: 15%;left: 45%">
        <img @click="gobanner" style="width: 100%;" src="../assets/arr.png" alt="">
      </div>
    </div>
    <img id="banner" style="width: 100%;" src="../assets/b2.jpg" alt="">
    
    <div class="qbg" v-for="(q,index) in questions">
      <h3>
        Q{{index+1}}{{q.title}}
      </h3>
      <!-- 根据题目类型选择 -->
      <div class="answer" v-if="q.type=='input'">
         <input type="text" v-model="q.answer">
      </div>
      <!--体重-->
      <div class="answer" v-if="q.type=='weight'">
         <select v-model="q.answer">
           <option v-for="(w,i) in weight">{{w}}</option>
         </select>
      </div>
      <!--身高-->
      <div class="answer" v-if="q.type=='height'">
          <select v-model="q.answer">
           <option v-for="(h,i) in height">{{h}}</option>
         </select>
      </div>
      <!--年龄-->
      <div class="answer" v-if="q.type=='age'">
          <select v-model="q.answer">
           <option v-for="(a,i) in 100">{{a}}</option>
         </select>
      </div>
      <!-- 日期 -->
      <div class="answer" v-if="q.type=='daterange'">
          <select v-model="q.to">
           <option v-for="(d,i) in 31">{{d}}</option>
         </select>
         号到
         <select v-model="q.from">
           <option v-for="(d,i) in 31">{{d}}</option>
         </select>
         号
      </div>
      <!--select-->
      <div class="answer" v-if="q.type=='select'">
         <select v-model="q.answer">
           <option v-for="(s,i) in q.data">{{s.a}}</option>
         </select>
      </div>
      <!--多选-->
      <div class="answer" v-if="q.type=='checkbox'">
          <template v-for="(d,i) in q.data">
            <!--<input type="checkbox" name="q.title" v-model="">-->
            <label>
              <input type="checkbox" :value="d.a" v-model="q.dlist">
              {{d.a}}
              <input v-if="d.input" type="text" v-model="d.val">
            </label>
          </template>
      </div>
      <!--单选-->
      <div class="answer" v-if="q.type=='radio'">
          <template v-for="(d,i) in q.data">
            <!--<input type="checkbox" name="q.title" v-model="">-->
            <label>
              <input type="radio" :value="d.a" v-model="q.answer">
              {{d.a}}
              <input v-if="d.input" type="text" v-model="d.val">
            </label>
          </template>
      </div>
      <!--多填空-->
      <div class="answer" v-if="q.type=='minput'">
          <template v-for="(d,i) in q.data">
            <!--<input type="checkbox" name="q.title" v-model="">-->
            <label>
              {{d.a}}
              <input type="text" v-model="d.val">
            </label>
          </template>
      </div>

      
    </div>
    <!--  v-show="issub" -->
    <a class="btn" href="javascript:void(0)" @click="sub">提交</a>

  </div>
</template>

<script>
export default {
  name: 'main',
  data () {
    return {
      msg: 'question',
      issub:false,
      questions:[
        {title:"请问你的联系电话是",type:"input",answer:"",dlist:[]},
        {title:"请问你当前的体重是（以公斤为单位）",type:"weight",answer:"60",dlist:[]},
        {title:"（减重请答）请问你的目标体重是（以公斤为单位）",type:"weight",answer:"50",dlist:[]},
        {title:"请问你的身高是（以厘米为单位）",type:"height",answer:"150",dlist:[]},
        {title:"请问你的年龄是（岁）",type:"age",answer:"20",dlist:[]},
        {title:"请问你的性别是",type:"select",answer:"",dlist:[],data:[
          {a:"男",val:"1",input:false},
          {a:"女",val:"2",input:false},
        ]},
        {title:"（女士请答）请问你的经期一般是每月的几号到几号",type:"daterange",to:"",from:"",answer:"",dlist:[]},
        {title:"（减重请答）请问你的目标减肥速度是（可多选）",type:"checkbox",answer:"",dlist:[],data:[
          {a:"A.世界卫生组织推荐速度：1～2斤／周（5～8斤／月），可持续减肥不反弹",input:false},
          {a:"B.希望更快速（每周减3斤以上），请填写原因（例如：我想年底拍婚纱照）",input:true,val:''},
          {a:"C.其他",input:true,val:''}
        ]},
        {title:"请问你的职业是",type:"input",answer:"",dlist:[]},
        {title:"下面哪一个描述最符合你的职业情况？（可多选）",type:"checkbox",answer:"",dlist:[],data:[
          {a:"A.时间比较自由",input:false},
          {a:"B.很忙碌",input:false},
          {a:"C.上下班定时",input:false},
          {a:"D.经常加班",input:false},
          {a:"E.经常出差，一日来回",input:false},
          {a:"F.经常出差，会需要在外过夜",input:false},
          {a:"G.应酬很多",input:false},
          {a:"H.其他。请描述",input:true,val:''}
        ]},
        {title:"请问下面哪个描述最符合你的压力情况？（可多选）",type:"checkbox",answer:"",dlist:[],data:[
          {a:"A.没什么压力，没什么烦恼",input:false},
          {a:"B.有时候有点压力，但可以接受",input:false},
          {a:"C.经常感觉有较大压力，但可以接受",input:false},
          {a:"D.压力很大，影响到心情",input:false},
          {a:"E.压力很大，影响到睡眠",input:false},
          {a:"F.压力很大，影响到食欲",input:false},
          {a:"G.压力很大，感觉无法承受",input:false},
          {a:"H.其他。请描述",input:true,val:''}
        ]},
        {title:"请问你长居的城市，及街道/小区名称/附近地标是（方便营养师查看周边餐饮信息）",type:"minput",answer:"",dlist:[],data:[
          {a:"城市",val:''},
          {a:"具体街道/小区名称/附近地标",val:''},
          
        ]},
        {title:"如果需要出差，请问出差地点信息（方便营养师查看周边餐饮信息）",type:"minput",answer:"",dlist:[],data:[
          {a:"出差城市1",val:''},
          {a:"具体街道/居住的酒店",val:''},
          {a:"出差城市2",val:''},
          {a:"具体街道/居住的酒店",val:''},
          {a:"出差城市3",val:''},
          {a:"具体街道/居住的酒店",val:''},
        ]},
        {title:"请问你平时早餐时间一般是几点？",type:"input",answer:"",dlist:[]},
        {title:"请问你平时早餐一般怎么安排？（可多选）",type:"checkbox",answer:"",dlist:[],data:[
          {a:"A.自己／家人煮。常煮的是",input:true,val:''},
          {a:"B.在外面买。最常去的地点是（例如面包店，真功夫等）",input:true,val:''},
          {a:"C.不吃，原因是",input:true,val:''},
          {a:"D.其他",input:true,val:''},
        ]},
        {title:"请问你平时午餐时间一般是几点？",type:"input",answer:"",dlist:[]},
        {title:"请问你平时午餐一般怎么安排？（可多选）",type:"checkbox",answer:"",dlist:[],data:[
          {a:"A.叫外卖。常叫的外卖餐厅名字是",input:true,val:''},
          {a:"B.跟同事出外吃。常去的餐厅/地点是",input:true,val:''},
          {a:"C.跟客户一起吃。常去的餐厅/地点是",input:true,val:''},
          {a:"D.自己出外吃。常去的餐厅/地点是",input:true,val:''},
          {a:"E.在家吃。做菜的人一般是",input:true,val:''},
          {a:"F.不吃，原因是",input:true,val:''},
          {a:"G.其他",input:true,val:''},
        ]},

        {title:"请问你平时晚餐时间一般是几点？",type:"input",answer:"",dlist:[]},
        {title:"请问你平时晚餐一般怎么安排？（可多选）",type:"checkbox",answer:"",dlist:[],data:[
          {a:"A.叫外卖。常叫的外卖餐厅名字是",input:true,val:''},
          {a:"B.跟同事出外吃。常去的餐厅/地点是",input:true,val:''},
          {a:"C.跟客户一起吃。常去的餐厅/地点是",input:true,val:''},
          {a:"D.自己出外吃。常去的餐厅/地点是",input:true,val:''},
          {a:"E.在家吃。做菜的人一般是",input:true,val:''},
          {a:"F.不吃，原因是",input:true,val:''},
          {a:"G.其他",input:true,val:''},
        ]},
        {title:"请问你平时两餐之间有加餐任何食物或饮料的习惯吗？（可多选）",type:"checkbox",answer:"",dlist:[],data:[
          {a:"A.没有，因为没时间",input:false,val:''},
          {a:"B.没有，因为不饿",input:false,val:''},
          {a:"C.有，常吃的是",input:true,val:''},
        ]},
        {title:"关于奶制品（可多选）",type:"checkbox",answer:"",dlist:[],data:[
          {a:"A.我没有每天喝奶制品的习惯",input:false,val:''},
          {a:"B.我可以接受奶制品",input:false,val:''},
          {a:"C.我有乳糖不耐受",input:false,val:''},
          {a:"D.我对牛奶过敏（不确定也可以选此项）",input:false,val:''},
          {a:"E.我几乎每天都喝奶制品",input:false,val:''},
          {a:"F.其他",input:true,val:''},
        ]},
        {title:"关于果仁（花生／杏仁／核桃等）（可多选）",type:"checkbox",answer:"",dlist:[],data:[
          {a:"A.我没有每天吃果仁（花生／杏仁／核桃等）的习惯",input:false,val:''},
          {a:"B.我对果仁过敏",input:false,val:''},
          {a:"C.我可以接受果仁",input:false,val:''},
          {a:"D.我几乎每天都吃果仁",input:false,val:''},
          {a:"E.其他",input:true,val:''},
        ]},
        {title:"关于生蔬菜（例如生蕃茄、黄瓜、胡萝卜、黄椒、红椒等）（可多选）",type:"checkbox",answer:"",dlist:[],data:[
          {a:"A.我从来没有尝试过生吃任何蔬菜",input:false,val:''},
          {a:"B.我尝试过，无法接受吃任何生疏菜",input:false,val:''},
          {a:"C.我可以接受的生蔬菜包括",input:true,val:''},
          {a:"D.我很爱吃生蔬菜",input:false,val:''},
          {a:"E.其他",input:true,val:''},
        ]},
        {title:"下列哪种配餐方式会比较适合你（可多选）",type:"checkbox",answer:"",dlist:[],data:[
          {a:"A.较多谷薯类食物（如米饭，面条，面包等），较少肉蛋类食物",input:false,val:''},
          {a:"B.较多肉蛋类食物（如鸡蛋，猪肉，鸡肉，海鲜等），较少谷薯类食物",input:false,val:''},
          {a:"C.没有特别偏好",input:false,val:''},
        ]},
        {title:"在过去的两个月里，你的日常活动量是？（可多选）",type:"checkbox",answer:"",dlist:[],data:[
          {a:"A.经常坐着（如程序员，会计，高中生）",input:false,val:''},
          {a:"B.少量活动（如老师，办公室经理）",input:false,val:''},
          {a:"C.中等活动（如护士，销售人员）",input:false,val:''},
          {a:"D.高强度活动（如建筑工人，职业运动员）",input:false,val:''},
        ]},
        {title:"你每周运动天数是？（可多选）",type:"radio",answer:"",dlist:[],data:[
          {a:"A.0天",input:false,val:''},
          {a:"B.1-2天",input:false,val:''},
          {a:"C.3-4天",input:false,val:''},
          {a:"D.4-5天",input:false,val:''},
          {a:"E.5-6天",input:false,val:''},
          {a:"F.7天",input:false,val:''},
        ]},
        {title:"你常做的运动有",type:"input",answer:"",dlist:[]},
        {title:"大多数情况下，你每次运动的持续时间大约是？（可多选）",type:"checkbox",answer:"",dlist:[],data:[
          {a:"A.10分钟以下",input:false,val:''},
          {a:"B.10-20分钟",input:false,val:''},
          {a:"C.20-30分钟",input:false,val:''},
          {a:"D.30-40分钟",input:false,val:''},
          {a:"E.40-50分钟",input:false,val:''},
          {a:"F.50-60分钟",input:false,val:''},
          {a:"G.60-70分钟",input:false,val:''},
          {a:"H.70-80分钟",input:false,val:''},
          {a:"I.80-90分钟",input:false,val:''},
          {a:"J.90分钟以上",input:false,val:''},
        ]},
        {title:"目前身体状况和疾病手术历史：（可多选）",type:"checkbox",answer:"",dlist:[],data:[
          {a:"A.良好，无已知疾病",input:false,val:''},
          {a:"B.糖尿病",input:false,val:''},
          {a:"C.高血脂",input:false,val:''},
          {a:"D.胆结石",input:false,val:''},
          {a:"E.多囊性卵巢综合症",input:false,val:''},
          {a:"F.甲状腺功能亢进",input:false,val:''},
          {a:"G.甲状腺功能低下",input:false,val:''},
          {a:"H.肝功能异常",input:false,val:''},
          {a:"I.肾功能异常",input:false,val:''},
          {a:"J.备孕",input:false,val:''},
          {a:"K.怀孕",input:false,val:''},
          {a:"L.哺乳",input:false,val:''},
          {a:"M.厌食症／暴食症病史",input:false,val:''},
          {a:"N.其他",input:true,val:''},
        ]},
        {title:"目前在服用的药物，或保健品",type:"input",answer:"",dlist:[]},
        {title:"请填写你所知道的家族病史（例如，舅舅有糖尿病）",type:"input",answer:"",dlist:[]},
        {title:"（减重请填）之前使用过的减肥产品／方法有哪些？用了多长时间？",type:"input",answer:"",dlist:[]},
        {title:"（减重请填）目前在使用的减肥产品/方法有哪些？（除了营悦的营养咨询外）",type:"input",answer:"",dlist:[]},
        {title:"（减重请填）请问你是否有过下面的情况（可多选）",type:"checkbox",answer:"",dlist:[],data:[
          {a:"A.过度运动",input:false,val:''},
          {a:"B.催吐",input:false,val:''},
          {a:"C.因为体重而自暴自弃",input:false,val:''},
          {a:"D.暴饮暴食",input:false,val:''},
          {a:"E.断食或连续多天吃非常少",input:false,val:''},
        ]},
        {title:"请问你想从咨询中获得什么？或者说，你的咨询目标是什么？（可多选）",type:"checkbox",answer:"",dlist:[],data:[
          {a:"A.减脂",input:false,val:''},
          {a:"B.增肌",input:false,val:''},
          {a:"C.紧致的身材",input:false,val:''},
          {a:"D.健康",input:false,val:''},
          {a:"E.营养饮食知识",input:false,val:''},
          {a:"F.运动知识",input:false,val:''},
          {a:"G.健康的生活习惯",input:false,val:''},
          {a:"H.良好的精神状态",input:false,val:''},
          {a:"I.其他",input:true,val:''},
        ]},
         {title:"如果上面的选项只能保留一个，你会选择哪个？",type:"radio",answer:"",dlist:[],data:[
          {a:"A.减脂",input:false,val:''},
          {a:"B.增肌",input:false,val:''},
          {a:"C.紧致的身材",input:false,val:''},
          {a:"D.健康",input:false,val:''},
          {a:"E.营养饮食知识",input:false,val:''},
          {a:"F.运动知识",input:false,val:''},
          {a:"G.健康的生活习惯",input:false,val:''},
          {a:"H.良好的精神状态",input:false,val:''},
          {a:"I.其他",input:true,val:''},
        ]},



        // {title:"单选",type:"radio",answer:"",dlist:[],data:[
        //   {a:"单选择1",input:false},
        //   {a:"单选择2",input:false},
        //   {a:"单选择3",input:true,val:''}
        // ]},
        // {title:"单选",type:"minput",answer:"",dlist:[],data:[
        //   {a:"填空1",val:''},
        //   {a:"填空2",val:''},
        //   {a:"填空3",val:''}
        // ]},
      ],
      weight:[],
      height:[],
      // months:[],
    }
  },
  methods:{
    gobanner(){
      let el = document.getElementById("banner");
      let top = el.offsetTop;
      window.scrollTo(0,top-100)
    },
    initData(){
      for(let i=20;i<100;i++){
        this.weight.push(i)
      }

      for(let i=120;i<200;i++){
        this.height.push(i)
      }

      let url = "./web/web.php?c=getNewPlan";
      let openid = this.getParams("openid");
      if(openid){
        let params = {openid:openid};
        this.$store.dispatch('POST_DATA',{url,params}).then((res)=>{
          // console.log(res,JSON.parse(res.answer));
          if (res.status == 200) {
          //   this.$router.push('/login')
            this.questions = JSON.parse(res.answer).question;
            // console.log(this.questions)
          }else {
            this.issub = true
          //   this.$message.error(res.msg);
          }
        });
      }
      
    },
    sub(){
      let openid = this.getParams("openid")
      let nickname = this.getParams("nickname")
      let userinfo = this.getParams("userinfo")
      
      let url = "./web/web.php?c=subPlan";
      
      let params = {openid:openid,question:this.questions,userinfo:userinfo};
// console.log(params);
      this.$store.dispatch('POST_DATA',{url,params}).then((res)=>{
        // console.log(res);
        if (res.status == 200) {
        //   this.$router.push('/login')
          // alert("提交成功")
          this.$router.push({ path: 'welcome', query: { nickname: nickname }});return
          document.write('<div style="text-align:center">提交成功<div>')
        }
        //else {
        //   this.$message.error(res.msg);
        // }
      });
    },
    getParams(key){
      var url = location.search.replace(/^\?/,'').split('&');
      var paramsObj = {};
      for(var i = 0, iLen = url.length; i < iLen; i++){
          var param = url[i].split('=');
          paramsObj[param[0]] = param[1];
      }
      if(key){
          return paramsObj[key] || '';
      }
      return paramsObj;
    }
  },
  mounted(){
    this.initData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2, h3 {
  font-weight: normal;
}
h3{
  padding-bottom: 10px;
}
label{
  display: block;
  line-height: 2em;
}
input[type="text"]{
  display: block;
  box-sizing: border-box;
  border: 1px solid #128c6f;
  width: 100%;
  padding-left: 3px;
  height: 28px;
  border-radius: 3px;
}
select{
  border: 1px solid #128c6f;
  width: 120px;
  height: 28px;
  border-radius: 3px;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.btn{
  display: block;
  width: 120px;
  margin: 20px auto;
  height: 32px;
  line-height: 32px;
  border-radius: 3px;
  text-align: center;
  text-decoration: none;
  background: #128c6f;
  color: #fff;
}

.an-move{
  animation:mymove 1s infinite;
  -moz-animation:mymove 1s infinite; /* Firefox */
  -webkit-animation:mymove 1s infinite; /* Safari and Chrome */
  -o-animation:mymove 1s infinite; /* Opera */
}
@keyframes mymove
{
from {bottom: 18%;}
to {bottom: 15%;}
}

@-moz-keyframes mymove /* Firefox */
{
from {bottom: 18%;}
to {bottom: 15%;}
}

@-webkit-keyframes mymove /* Safari 和 Chrome */
{
from {bottom: 18%;}
to {bottom: 15%;}
}

@-o-keyframes mymove /* Opera */
{
from {bottom: 18%;}
to {bottom: 15%;}
}
</style>
