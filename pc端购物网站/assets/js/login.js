var Input = document.querySelector('.content .cont-bg .box .user input'),
    Span = document.querySelector('.content .cont-bg .box .user span'),
    Btns=document.querySelector('.smdl'),
    Btnz=document.querySelector('.zhdl'),
    Sm=document.querySelector('.smdl-box');
Input.onblur = function(){
    var user = this.value;
    var xhr = new XMLHttpRequest();
    Span.style.display="block";
    xhr.open('post','assets/js/login.php',true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send('username='+user);
    xhr.onreadystatechange = function(){
        if(xhr.readyState==4 && xhr.status==200){
              Span.innerHTML = xhr.responseText;
            }
       }
}
Btns.onclick=function(){
    Sm.style.display="block";
    Btns.style.color="#f00";
    Btnz.style.color="#111";
}
Btnz.onclick=function(){
    Btns.style.color="#111";
    Btnz.style.color="#f00";
    Sm.style.display="none";
}