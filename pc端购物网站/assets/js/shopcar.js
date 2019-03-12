//1.全局全选不选与单个商品的关系
    $('#all input').click(function () {
        var $checkboxs = $('.alllist input[type="checkbox"]');
        if ($(this).is(':checked')) {
            $checkboxs.prop("checked", true);
        } else {
            $checkboxs.prop("checked", false);
        }
        total(); // 并且重新计算总价格和商品个数
    });

    //2./*判断:每个产品选中的长度是否等于产品总长度*/
	
	function sum(){
                //判断：所有单个商品是否勾选
                var len = $('.goodscheckinput').length; 
                var num = 0;
                $('.goodscheckinput').each(function () {
                    if ($(this).is(':checked')) {
                        num++;
                    }
                });
                if (num == len) {
                    $('#all input').prop("checked", true);
                    
                }else {
                   //单个商品取消勾选，全局全选取消勾选
                	$('#all input').prop("checked", false);
                }
                total();
	}

  //3.点击店铺全选每个店铺的商品。判断选中的产品个数是否等于每个产品的总个数,是勾选全局全选
   $('.typeall input').click(function(){
	    var $list_input=$(this).parents('.goodslist').find('.goodscheckinput');
		if ($(this).is(':checked')) {
			$list_input.prop("checked",true);
			
		}else{
			$list_input.prop("checked",false);
			
		} 
		sum();
		
})
/*4.选中的产品是否等于每个店铺的总个数,是否勾选店铺，再判断全局全选*/
// 多个店铺点击
$(".goodslist").click(function(){
	    var $ul_input=$(this).find('.typecheck'); //店铺全选
	            var len = $(this).find('.goodscheckinput').length;
                var num = 0;
                $(this).find('.goodscheckinput').each(function () {
                    if ($(this).is(':checked')) {
                        num++;
                    }
                });
                if (num == len) {
					$ul_input.prop("checked",true);
				}else{
					$ul_input.prop("checked",false);
				}
	    sum();
})

/*5点击加一*/
$('.jia').click(function(){
		if($(this).prev('.num').val()>100){
			$(this).prev('.num').val(100);
			$('.alert').show().val('超出库存了！');
			setTimeout(function(){$('.alert').hide();},2000);
			return false;
		}else{
			$(this).prev('.num').val(parseInt($(this).prev('.num').val())+1);
		}
		
			/*计算总钱数*/
			total();
			/*计算总钱数*/
		
})
		
/*6点击减一*/
$('.jian').click(function(){
		if($(this).next('.num').val()<=1)
			$(this).next('.num').val(1);
		else
			$(this).next('.num').val(parseInt($(this).next('.num').val())-1);	
		/*计算总钱数*/
		total();
		/*计算总钱数*/
		
})

$('.num').keyup(function () {
        var $count = 0;
        if($(this).val()==''){
            $(this).val('1');
        }
        $(this).val($(this).val().replace(/\D|^0/g,'1'));
        $count = $(this).val();
        total();
    })

/*计算总钱数*/
function total(){
	setTimeout(function(){
		var S=0;
		var tnum =0;
	    $.each($('.total'), function() {
	    	var $ul_total=$(this).prev('.list').find(".goodscheckinput");
	    	var s=0;
	        var n1=0;
	    	$.each($(this).prev('.list').find(".num"), function(i) {
                if($ul_total.eq(i).is(":checked")){
					s=s+parseInt($(this).val())*parseInt($(this).parent().prev().html().replace("￥",""));
					n1=n1+parseInt($(this).val());
				}
			});
			$(this).children("span").html("￥"+s.toFixed(1));
			$(this).children("number").html(n1);
			S=S+s;
			tnum = tnum + n1;
	    });
	$("#totalmoney").html("总价：￥"+S.toFixed(1));
	$("#checkedNum").html(tnum);
	},100)
}
total();

// 删除
$('.s1').click(function(){
	$('.tc-bg').show();
})
$('.ss1').click(function(){
	$('.tc-bg').hide();
	$('.xs1').hide();
	$('.ss2').show();
	$('.ss1').hide();
});
$('.s2').click(function(){
	$('.tc-bg').show();
})
$('.ss2').click(function(){
	$('.tc-bg').hide();
	$('.xs2').hide();
	if ($('.xs2').hide() && $('.xs1').hide()) {
		$('#ztotal').hide();
		$('#cartitle').hide();
		$('.kong').show();
	}
});
$('.gb').click(function(){
	$('.tc-bg').hide();
})

