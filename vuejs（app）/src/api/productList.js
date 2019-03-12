import axios from 'axios';
import jsonp from './jsonp';
import {commonParams,options} from './config'        //引入config.js

export const getRecommend= (page=1,psize =20)=>{
      const  url = 'https://ju.taobao.com/json/tg/ajaxGetItemsV2.json'
       //es6的assign将commonParams和 page 等参数合并
      const data = Object.assign({},commonParams,{  
      	page: page,
        psize:psize,
        type: 0
      });
      return jsonp(url,data,options);
}