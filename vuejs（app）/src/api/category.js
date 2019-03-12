import axios from 'axios';
import jsonp from './jsonp';
import {commonParams,options} from './config'        //引入config.js

export const getCategory= (id)=>{
      const url =`http://www.imooc.com/api/category/content/${id}`;

      const data = Object.assign({},commonParams);
      return jsonp(url,data,options);
}