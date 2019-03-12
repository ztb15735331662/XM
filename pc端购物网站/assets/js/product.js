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


// 放大镜
$('.fdj-small').mouseover(function(){
			$('.fdj-square').show();
			$('.fdj-big').show();
			$('.fdj-small').mousemove(function(e){
				// 色块相对小盒子的定位坐标 =鼠标移动坐标-小盒子坐标-色块的宽和高一半
                var wd = e.pageX - $('.fdj-small').offset().left - $('.fdj-square').width()/2;
                var ht = e.pageY - $('.fdj-small').offset().top -$('.fdj-square').height()/2;
				// 3. 判断色块的坐标范围
				var disX = $('.fdj-small').width() - $('.fdj-square').width();
				var disY = $('.fdj-small').height() -$('.fdj-square').height();
				if(wd<0){
                   wd = 0;
				}else if(wd>disX){
                   wd = disX;
				}
				if(ht<0){
                   ht = 0;
				}else if(ht>disY){
                   ht = disY;
				}
				//2. 目标：设置色块坐标
				$('.fdj-square').css({left:wd,top:ht});
				//4.大图的坐标 都是负值
				//  色块的坐标/ 大图的坐标 = 小盒子的宽 / 大图的宽
				$('.fdj-big img').css({left:-wd*2,top:-ht*2});
			})
		}).mouseout(function(){
			$('.fdj-square').hide();
			$('.fdj-big').hide();
		})
		$('.fdj-thumb li').mousemove(function(){
			// attr获得和设置属性 src
			var imgUrl = $(this).find('img').attr('src');
			$('.fdj-small').find('img').attr('src',imgUrl);
			$('.fdj-big').find('img').attr('src',imgUrl);
		})