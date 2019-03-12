// 导航条
var timer;
$('.menu li:has("div")').mouseenter(function(){
var that = $(this);
	timer = setTimeout(function(){
		that.children('div').show();
		$('.gome-hy').css('backgroundColor','#fff');
	})
		
}).mouseleave(function(){
	$(this).children('div').hide();
	clearTimeout(timer);
	$('.gome-hy').css('backgroundColor','#f8f8f8');
})


$('.menu-right li:has("div")').mouseenter(function(){
	var that = $(this);
	timer = setTimeout(function(){
		that.children('div').show();
		$('.gome-hy').css('backgroundColor','#fff');
	})		
}).mouseleave(function(){
	$(this).children('div').hide();
	clearTimeout(timer);
	$('.gome-hy').css('backgroundColor','#f8f8f8');
})
$('.search-type-dropdown:has("ul")').mouseenter(function(){
	var that=$(this);
	timer = setTimeout(function(){
		that.children('ul').show();
	})
}).mouseleave(function(){
	$(this).children('ul').hide();
	clearTimeout(timer);
})


// 购物车
var Spcar=document.querySelector('.shopcar'),
	Carb=document.querySelector('.car-box');
	Spcar.onmouseover=function(){
		Carb.style.display="block";
		Spcar.style.border="1px solid #ccc";
	}
	Spcar.onmouseout=function(){
		Carb.style.display="none";
		Spcar.style.border="none";
	}




// 瀑布流 
var page = 1;
show();// 一.初始化第一页信息
function show(){
	var Uls = document.querySelectorAll('.pubu-con'),
		Lis = document.querySelectorAll('.pubu-con li');
		$.get('assets/js/page.php','p='+page,function(data){
			for(var i in data){
				var Li = Lis[0].cloneNode(true);
				Li.style.display = 'block';
				Li.children[0].setAttribute('src',data[i]['pic']);
				Li.children[1].innerHTML = data[i]['title'];
				Li.children[2].innerHTML = data[i]['id'];
				var index = i % 4;
				Uls[index].appendChild(Li);
			}
		},'json');
}
window.onscroll = function(){
	var dH = document.body.scrollHeight || document.documentElement.scrollHeight,
	  	wH = document.documentElement.clientHeight;
	var conTop=$('.goodslist-r').offset().top;
	var   conH=$('.goodslist-r .pubu-con').height();
	var dT = document.body.scrollTop || document.documentElement.scrollTop; 
	if((conTop+conH)-dT <=100){
	      page++;
	      console.log(conTop,conH,dT,page);
	      show();
	}
}