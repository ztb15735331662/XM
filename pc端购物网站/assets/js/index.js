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


// 选项卡
var nav=document.querySelector('.nav');
var lis=document.querySelectorAll('.nav li');
var cont=document.querySelector('.cont');
var divs=document.querySelectorAll('.cont div');
// var las = document.querySelectorAll('.nav li a');
for (var i = 0; i < lis.length; i++) {
	lis[i].index=i;
	lis[i].onmouseover=function(){
		lis[this.index].className="active";
		divs[this.index].className="show";
	}
	lis[i].onmouseout=function(){
		this.className='';
		divs[this.index].className="";
	}
}
for (var j = 0; j < divs.length; j++) {
	divs[j].index=j;
	divs[j].onmouseover=function(){
		lis[this.index].className="active";
		divs[this.index].className="show";
	}
	divs[j].onmouseout=function(){
		this.className='';
		lis[this.index].className="";
	}
}

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



// 轮播图  
$(function(){
	var i=0;
	function sh(){
		$("#img li").eq(i).addClass("active").siblings().removeClass("active");
		$("#num li").eq(i).addClass("active_num").siblings().removeClass("active_num");
	}
	function run(){
		ss=setInterval(function(){
			i++;
			if (i==$("#img li").size()) {
				i=0;
			}
			sh();
		},1000);
	}
	run();
	$("#img li").mouseover(function(){	
		clearInterval(ss);
		$("#left,#right").show();
	}).mouseout(function(){
		run();
		$("#left,#right").hide();
	})
	$("#num li").mouseover(function(){	
		clearInterval(ss);
		i=$(this).index();
		sh();
	}).mouseout(function(){
		run();
	})
	$("#lunbo").mouseover(function(){
		clearInterval(ss);
	})
	$("#right").mouseover(function(){
		$("#left,#right").show();
	}).mouseout(function(){
		$("#left,#right").hide();
		run();
	});
	$("#left").mouseover(function(){
		$("#left,#right").show();
	}).mouseout(function(){
		$("#left,#right").hide();
		run();
	})
	$("#right").click(function(){
		i++;
		if (i==$("#img li").size()) {
			i=0;
		}
		sh();
	})
	$("#left").click(function(){
		i--;
		if (i==-1) {
			i=$("#img li").size()-1;
		}
		sh();
	})
})


//倒计时
var Shi=document.querySelector('.shi');
 var Fen=document.querySelector('.fen');
 var Miao=document.querySelector('.miao'); 
 var now=new Date();  
 function djs(){  
 var now1=new Date();  
 var djsDate=now.getTime()+7200000;  
 var cha=djsDate-now1.getTime();  
 var hour=Math.floor(cha/3600000);  
 cha%=3600000;  
 var minute=Math.floor(cha/60000);  
 cha%=60000;  
 var seconds=Math.floor(cha/1000);  
 Shi.innerHTML="0"+hour;
 Fen.innerHTML=minute;
 Miao.innerHTML=seconds;
 }  
 djs();  
 setInterval(function(){  
 djs();  
 },1000)  


// 美日必抢 无缝滚动
var Cwf=document.querySelector('.count-wf'),
	Lbox=document.querySelector('.list-box'),
	Pbtn=document.querySelector('.prev'),
	Nbtn=document.querySelector('.next');
function zou(x){
		// 首先换区当前的位置+移动的值=指定移动的距离
		var newleft=parseInt(Lbox.style.left)+x;
		// 赋值
		Lbox.style.left=newleft+'px';
		console.log(Lbox.style.left);
		if(newleft==-1904){
			Lbox.style.left='0px';
		}
		if(newleft>0){
			Lbox.style.left='-952px';
		}
	}
	Nbtn.onclick=function(){
		zou(-952);
	}
	//上一张
	Pbtn.onclick=function(){
		zou(952);
	}
	function auto(){
		s=setInterval(function(){
			zou(-952)
		},1000)
	}
	auto();
	Cwf.onmouseover=function(){
		clearInterval(s);
		Pbtn.style.display='block';
		Nbtn.style.display='block';
	}
	// 鼠标移出继续执行
	Cwf.onmouseout=function(){
		auto();
		Pbtn.style.display='none';
		Nbtn.style.display='none';
	}

// 猜你喜欢 无缝滚动
var Cl=document.querySelector('.cn-list'),
	Cbox=document.querySelector('.cn-box'),
	Cp=document.querySelector('.cn-prev'),
	Cn=document.querySelector('.cn-next');
function go(x){
		// 首先换区当前的位置+移动的值=指定移动的距离
		var newleft=parseInt(Cbox.style.left)+x;
		// 赋值
		Cbox.style.left=newleft+'px';
		console.log(Cbox.style.left);
		if(newleft==-3618){
			Cbox.style.left='0px';
		}
		if(newleft>0){
			Cbox.style.left='-2412px';
		}
	}
	Cp.onclick=function(){
		go(-1206);
	}
	//上一张
	Cn.onclick=function(){
		go(1206);
	}



// 楼层 轮播

// 一楼
var F1b=document.querySelector('.fl1-lb'),
	F1p=document.querySelector('.fl1-prev'),
	F1n=document.querySelector('.fl1-next'),
	F1num=document.querySelectorAll('.fl1-num li'),
	F1cl=document.querySelectorAll('.fl1-cl li');
var pao=0,
	t,
	chang=F1cl.length;
	t=setInterval(function(){
		p(pao+1);
	},5000);
 F1b.onmouseover = function(){
	   F1p.style.display ='block';
	   F1n.style.display ='block';
   clearInterval(t);
}
F1b.onmouseout = function(){
	    F1p.style.display ='none';
	    F1n.style.display ='none';
    t = setInterval(function(){
      p(pao+1);
    },5000);
}

for(var i = 0; i<chang; i++){
	F1num[i].index = i;
   F1num[i].onmouseover = function(){
   	   var index = this.index;
   	   p(index)
   }
}
F1n.onclick =function(){
	    p(pao+1);
}
F1p.onclick =function(){
   p(pao-1);
}
function p(z){
	if(z>chang-1){
		z = 0;
	}
	if(z<0){
		z = chang-1;
	}
    for(var i = 0; i< chang;i++){
        F1cl[i].style.display='none'; 
        F1num[i].style.backgroundColor='#999';
    }
    pao = z;
    F1cl[pao].style.display ='block';
    F1num[pao].style.backgroundColor ='#f00';
}
// 楼层 选项

$('.jxrm-list li').mouseover(function(){
    $(this).addClass('jxrm-act').siblings().removeClass('jxrm-act');
    var flindex = $(this).index();	
    $('.floor1-r .li').eq(flindex).addClass('fl1-active').siblings().removeClass('fl1-active');
})
// 一楼结束
// 二楼
var F2b=document.querySelector('.fl2-lb'),
	F2p=document.querySelector('.fl2-prev'),
	F2n=document.querySelector('.fl2-next'),
	F2num=document.querySelectorAll('.fl2-num li'),
	F2cl=document.querySelectorAll('.fl2-cl li');
var pao2=0,
	t2,
	chang2=F2cl.length;
	t2=setInterval(function(){
		p2(pao2+1);
	},5000);
 F2b.onmouseover = function(){
	   F2p.style.display ='block';
	   F2n.style.display ='block';
   clearInterval(t2);
}
F2b.onmouseout = function(){
	    F2p.style.display ='none';
	    F2n.style.display ='none';
    t2 = setInterval(function(){
      p2(pao2+1);
    },5000);
}

for(var i = 0; i<chang2; i++){
	F2num[i].index = i;
   F2num[i].onmouseover = function(){
   	   var index2 = this.index;
   	   p2(index2)
   }
}
F2n.onclick =function(){
	    p2(pao2+1);
}
F2p.onclick =function(){
   p2(pao2-1);
}
function p2(z2){
	if(z2>chang2-1){
		z2 = 0;
	}
	if(z2<0){
		z2 = chang2-1;
	}
    for(var i = 0; i< chang2;i++){
        F2cl[i].style.display='none'; 
        F2num[i].style.backgroundColor='#999';
    }
    pao2 = z2;
    F2cl[pao2].style.display ='block';
    F2num[pao2].style.backgroundColor ='#f00';
}
$('.jxrm2-list li').mouseover(function(){
    $(this).addClass('jxrm2-act').siblings().removeClass('jxrm2-act');
    var flindex2 = $(this).index();	
    $('.floor2-r .li2').eq(flindex2).addClass('fl2-active').siblings().removeClass('fl2-active');
})
// 二楼结束
// 三楼开始
var F3b=document.querySelector('.fl3-lb'),
	F3p=document.querySelector('.fl3-prev'),
	F3n=document.querySelector('.fl3-next'),
	F3num=document.querySelectorAll('.fl3-num li'),
	F3cl=document.querySelectorAll('.fl3-cl li');
var pao3=0,
	t3,
	chang3=F3cl.length;
	t3=setInterval(function(){
		p3(pao3+1);
	},5000);
 F3b.onmouseover = function(){
	   F3p.style.display ='block';
	   F3n.style.display ='block';
   clearInterval(t3);
}
F3b.onmouseout = function(){
	    F3p.style.display ='none';
	    F3n.style.display ='none';
    t3 = setInterval(function(){
      p3(pao3+1);
    },5000);
}

for(var i = 0; i<chang3; i++){
	F3num[i].index = i;
   F3num[i].onmouseover = function(){
   	   var index3 = this.index;
   	   p3(index3)
   }
}
F3n.onclick =function(){
	    p3(pao3+1);
}
F3p.onclick =function(){
   p3(pao3-1);
}
function p3(z3){
	if(z3>chang3-1){
		z3 = 0;
	}
	if(z3<0){
		z3 = chang3-1;
	}
    for(var i = 0; i< chang3;i++){
        F3cl[i].style.display='none'; 
        F3num[i].style.backgroundColor='#999';
    }
    pao3 = z3;
    F3cl[pao3].style.display ='block';
    F3num[pao3].style.backgroundColor ='#f00';
}


$('.jxrm3-list li').mouseover(function(){
    $(this).addClass('jxrm3-act').siblings().removeClass('jxrm3-act');
    var flindex3 = $(this).index();	
    $('.floor3-r .li3').eq(flindex3).addClass('fl3-active').siblings().removeClass('fl3-active');
})
// 三楼结束



// 四楼 开始
var F4b=document.querySelector('.fl4-lb'),
	F4p=document.querySelector('.fl4-prev'),
	F4n=document.querySelector('.fl4-next'),
	F4num=document.querySelectorAll('.fl4-num li'),
	F4cl=document.querySelectorAll('.fl4-cl li');
var pao4=0,
	t4,
	chang4=F4cl.length;
	t4=setInterval(function(){
		p4(pao4+1);
	},5000);
 F4b.onmouseover = function(){
	   F4p.style.display ='block';
	   F4n.style.display ='block';
   clearInterval(t4);
}
F4b.onmouseout = function(){
	    F4p.style.display ='none';
	    F4n.style.display ='none';
    t4 = setInterval(function(){
      p4(pao4+1);
    },5000);
}
for(var i = 0; i<chang4; i++){
	F4num[i].index = i;
   F4num[i].onmouseover = function(){
   	   var index4 = this.index;
   	   p4(index4)
   }
}
F4n.onclick =function(){
	    p4(pao4+1);
}
F4p.onclick =function(){
   p4(pao4-1);
}
function p4(z4){
	if(z4>chang4-1){
		z4 = 0;
	}
	if(z4<0){
		z4 = chang4-1;
	}
    for(var i = 0; i< chang4;i++){
        F4cl[i].style.display='none'; 
        F4num[i].style.backgroundColor='#999';
    }
    pao4 = z4;
    F4cl[pao4].style.display ='block';
    F4num[pao4].style.backgroundColor ='#f00';
}

$('.jxrm4-list li').mouseover(function(){
    $(this).addClass('jxrm4-act').siblings().removeClass('jxrm4-act');
    var flindex4 = $(this).index();	
    $('.floor4-r .li4').eq(flindex4).addClass('fl4-active').siblings().removeClass('fl4-active');
})

// 四楼 结束


// 五楼 开始
var F5b=document.querySelector('.fl5-lb'),
	F5p=document.querySelector('.fl5-prev'),
	F5n=document.querySelector('.fl5-next'),
	F5num=document.querySelectorAll('.fl5-num li'),
	F5cl=document.querySelectorAll('.fl5-cl li');
var pao5=0,
	t5,
	chang5=F5cl.length;
	t5=setInterval(function(){
		p5(pao5+1);
	},5000);
 F5b.onmouseover = function(){
	   F5p.style.display ='block';
	   F5n.style.display ='block';
   clearInterval(t5);
}
F5b.onmouseout = function(){
	    F5p.style.display ='none';
	    F5n.style.display ='none';
    t5 = setInterval(function(){
      p5(pao5+1);
    },5000);
}
for(var i = 0; i<chang5; i++){
	F5num[i].index = i;
   F5num[i].onmouseover = function(){
   	   var index5 = this.index;
   	   p5(index5)
   }
}
F5n.onclick =function(){
	    p5(pao5+1);
}
F5p.onclick =function(){
   p5(pao5-1);
}
function p5(z5){
	if(z5>chang5-1){
		z5 = 0;
	}
	if(z5<0){
		z5 = chang5-1;
	}
    for(var i = 0; i< chang5;i++){
        F5cl[i].style.display='none'; 
        F5num[i].style.backgroundColor='#999';
    }
    pao5 = z5;
    F5cl[pao5].style.display ='block';
    F5num[pao5].style.backgroundColor ='#f00';
}


$('.jxrm5-list li').mouseover(function(){
    $(this).addClass('jxrm5-act').siblings().removeClass('jxrm5-act');
    var flindex5 = $(this).index();	
    $('.floor5-r .li5').eq(flindex5).addClass('fl5-active').siblings().removeClass('fl5-active');
})
// 五楼 结束

// =====================================================================================

		$('.backtop').click(function(){
            $('body,html').animate({
             	scrollTop:0
             },500);
		});
		$('.tbar .Fc').click(function(){
			var index = $(this).index();
			var ll = $('.layer .floor').eq(index).offset().top;
			$('body,html').animate({
				scrollTop:ll
			},500);
		});
		$(window).scroll(function(){
			var scrollTop;
			$('.layer .floor').each(function(){
				var layerTop = $(this).offset().top;
				console.log(layerTop);
				scrollTop = $(document).scrollTop();
				console.log(scrollTop);
				if(layerTop - scrollTop <100){
                    $('.tbar .Fc').eq($(this).index()).addClass('active').siblings().removeClass('active');
				}
			})
			if(scrollTop>=2200){
                $('.tbar').fadeIn(500);
                $('.backtop').fadeIn(500);
			}else{
                $('.tbar').fadeOut(500);
                $('.backtop').fadeOut(500);
			}
		});


// 滚动监听
 
 (function(){
 	 var gundong = document.querySelector('.gdjt-search');

  window.onscroll=function(){
    if(document.body.scrollTop||document.documentElement.scrollTop>800)
    {
      gundong.style.display='block';
      gundong.className='gdjt-search fixed';
    }
    else
    {
      gundong.style.display='none';
      gundong.className='gdjt-search';
    }
  }
})();
// 固定菜单的返回顶部
$('.backtop2').click(function(){
        $('body,html').animate({
         	scrollTop:0
         },500);
	})