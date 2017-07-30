import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

const vx = new Vuex.Store({
  state:{
    admin:{},
    islogin:false,
  },
  mutations:{
    //commit
    SET_ADMIN(state,admin){
      state.admin = admin;
    },

    SET_LOGIN_IN(state){
      state.islogin = true;
    },
    SET_LOGIN_OUT(state){
      state.islogin = false;
    },
  },
  actions:{
    //dispatch
    LOGIN_IN({commit,dispatch},{params}){
      let url = '/system/user/login';
      return Vue.http.post('/rfpay_report'+url,params).then((res)=>{
        // Indicator.close();
        if(res.status==200){
          vx.commit('SET_ADMIN',res.data)
          vx.commit('SET_LOGIN_IN')
          //http状态码为200
          return res.json();
        }else {
          return Promise.reject(res);
        }
      },(res)=>{
        return Promise.reject(res);
      })
    },
    LOGIN_OUT({commit,dispatch}){
      let url = '/system/user/logout';
      return Vue.http.post('/rfpay_report'+url).then((res)=>{
        if(res.status==200){
          vx.commit('SET_ADMIN',{})
          vx.commit('SET_LOGIN_OUT')
          //http状态码为200
          return res.json();
        }else {
          // document.write('<div>链接失败</div>')
          // Indicator.close();
          return Promise.reject(res);
        }
      },(res)=>{
        // document.write('<div>链接失败</div>')
        // Indicator.close();
        return Promise.reject(res);
      })
    },

    //POST查询信息
    POST_DATA({commit,dispatch},{url,params}){

      return Vue.http.post(url,params).then((res)=>{
        if(res.status==200){
          //http状态码为200

          //先判断是否有登录，否则去登录页面
          res.json().then((r)=>{
            if (r.code==2016) {
              // router.push('/login')
              // console.log('未登录');
            }
          })

          //返回结果
          return res.json();
        }else {
          return Promise.reject(res);
        }
      },(res)=>{
        return Promise.reject(res);
      })
    },
  },
  getters:{
    getAdmin(state){
      return state.admin;
    }
  }

})

export default vx;
