$(function(){
//	轮播图
	jQuery(".slideBox").slide({mainCell:".bd ul",autoPlay:true});
//	分页
 	$('.pageTest').page({
      leng: 66,//分页总数
      activeClass: 'activP' , //active 类样式定义
   })
})
