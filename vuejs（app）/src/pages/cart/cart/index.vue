<template>
    <div>
        <navbar>
            <h3 slot="left">购物车</h3>
            <span slot="right">管理</span>
        </navbar>
        <div class="cart-wrap">
            <div class="cart-account">
                <!-- 店铺描述开始 -->
                <div class="cart-title">
                    <div class="tcont">
                        <input type="checkbox">
                        <i class="icon"></i>
                        <a href="#">某某xxoo店</a>
                    </div>
                    <span>编辑</span>
                </div>
                <!-- 店铺描述结束 -->
                <div class="cart-list">
                    <input type="checkbox">
                    <div class="cart-right">
                        <a href="">
                            <img src="./images/1.jpg">
                        </a>
                        <div class="cart-info">
                            <a href="">植护竹浆本色抽纸6包抽取式纸巾卫生纸家用餐巾纸实惠
                            </a>
                            <div class="cart-pay">
                                <p class="pay-price">
                                    ￥<span>10.1</span>
                                </p>
                                <div class="pay-btn">
                                    <a  class="min-btn">-</a>
                                    <input type="number">
                                    <a  class="max-btn">+</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
        <div class="c-footer">
            <div class="c-f-left">
                <div class="qx">
                    <input type="checkbox">
                    <h3>全选</h3>
                </div>
                <p>合计:<span>￥</span><strong>11</strong></p>
            </div>
            <div class="c-f-right">
                结算 ()
            </div>

        </div>
        
        
    </div>
</template>

<script>
    import navbar from '@/components/navbar'
    export default {
        data(){
            return {

            }
        },
        components:{
            navbar
        }
        
    }
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
input[type="number"]{
  -moz-appearance: textfield;
}
.navbar{
    display: flex;
    justify-content: space-between;
    height: 40px;
    background: #f60;
    align-items: center;
    color: #fff
}
.navbar h3{
    font-size:18px;
    font-weight: 700;
}
.navbar span{
    font-size: 18px;
}

/* 购物车开始 */
/* 外面大盒子 */
.cart-wrap{
    margin-top:10px;
    width: 100%;
    height:100%;
    display: flex;  
    justify-content: center;
}
/* 店铺描述开始 */
.cart-account{
    width: 100%;
    border-radius:6px;
    height: 180px;
    background: #fff;
}
.cart-title,.cart-list{
    width: 100%;
    justify-content: space-between;
    align-items: center;
    display: flex;
    padding: 0px 5px;
}
.cart-title{
    height: 40px;
    border-bottom: 2px solid #f5f5f5
}
.cart-title .tcont{
    display:flex;
    align-items: center;
    height: 24px;
}
.icon{
    width: 24px;
    height: 24px;
    background: url('./images/icon.png') no-repeat;
    background-size: 24px 24px;
    margin: 0px 6px;
}
.cart-title a{
    color: #000;
    font-size: 14px;
}
.cart-title span{
    font-size: 14px
}
/* 店铺描述结束 */
/* 商品描述开始 */
.cart-list{
 
    width: 100%;
    height: 140px;
}
.cart-list>input{
    margin-right: 20px;
}

.cart-right{
    width: 100%;
    display: flex;
    flex: 1;
    justify-content: space-between
}
.cart-right img{
    height: 120px;
}
.cart-info{
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
}
.cart-info a{
    font-size: 14px;
}
.cart-info .cart-pay{
    display: flex;
    height: 30px;
    padding-right:6px;
    align-items:flex-end;
    justify-content: space-between;
}
.cart-info .pay-price{
    color: #f60;
}


.pay-btn{
    display: flex;
    width: 30%;
    height: 26px;
    align-items: center;
    text-align: center;
}
.pay-btn a{
    width: 25%;
    font-size: 18px;
}
.pay-btn input{
    display: flex;
    flex: 1;
    width: 50%;
    font-size: 10px;
    text-align: center;
}

.c-footer{
    position: fixed;
    bottom: 50px;
    width: 100%;
     max-width: 640px;
	min-width: 320px;
	z-index:999;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    background: #fff
}
.c-f-left{
    width:70%;
    display: flex;
    justify-content: space-between;
    padding: 0px 5px;
    align-items: center;
}
.qx{
    display: flex;
    justify-content:flex-start;
    align-items: center
}
.qx input{
    margin-right: 4px;
}
.c-f-left p{
    font-size: 14px;
    padding: 0px 3px;
    color: #000;
}
.c-f-left span,.c-f-left strong{
    color: #f60;
}
.c-f-left strong{
    font-size: 16px
}
.c-f-right{
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 14px;
    background: #f60;
}

</style>