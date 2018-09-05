
function toDou(n){
	if(n<10){
		return '0'+n;	
	}else{
		return n;	
	}
}
window.onload=function(){
	
	//二维码
	var width=$('#erweima').width();
	var height=$('#erweima').height();
    $("#erweima").qrcode({
        render : "canvas",    
        text : "http://arcfox.cn",    
        width : width,               //二维码的宽度
        height : height,              //二维码的高度
        background : "#ffffff",       //二维码的后景色
        foreground : "#000000",        //二维码的前景色
        src: '../img/logo.png'             //二维码中间的图片
    });
	

}