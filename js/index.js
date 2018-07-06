//	var mySwiper = new Swiper('.swiper-container',{
//		pagination: '.swiper-pagination',
//      paginationClickable: true,
//      nextButton: '.swiper-button-next',
//      prevButton: '.swiper-button-prev',
//      spaceBetween: 30,
//		direction:'horizontal',
//		loop:true,
////		loop:true,
////		autoplay:1000,
//		
//	})
//swiper的banner导航
$(function(){
	var mySwiper = new Swiper('.swiper-container',{
		direction:'horizontal',
		loop:true,
		autoplay:8000,
		pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 50,
        speed:8000,
        autoplayDisableOnInteraction : false,
								grabCursor:true, effect:"coverflow",
		
	})
})
//点击banner时自动放大图片
$(function(){
				$(".swiper-container").click(function(){

				$(".img1").removeClass("surprise");
					
					setTimeout(function(){
				$(".img1").addClass("surprise");
					
				},100)
//					window.location.href="index.html";
					
				})
				
			})
	//首页点击开场

	$(function(){
				$(".swiper-container").click(function(){

				$(".img1").removeClass("surprise");
					
					setTimeout(function(){
				$(".img1").addClass("surprise");
					
				},100)
//					window.location.href="index.html";
					
				})
				$(".xiao").click(function(){
					
					$(".xiao1").text("如你所愿")
					$('.xiao').addClass('dig');
					var dd = null
					
					dd=setTimeout(function(){
						$(".xiao").removeClass("xiao");
//						$(".xiao").removeClass("xiao1");
						
					},4000)
					var db = null
					
					db=setTimeout(function(){
//						$(".xiao1").removeClass("xiao1");
						$(".xiao").remove("div");
						
					},3000)
				})
	//背景视频播放
				$('#tiao').vidbg({
						  'mp4': 'vido/001my.mp4',
						  'webm': 'path/to/video.webm',
						  'poster': 'path/to/fallback-image.png',
						}, {
						  // 参数选项
						  volume: 1,
						  playbackRate: 1,
						  muted: true,
						  loop: true,
						  position: '50% 50%',
						  resizing: true,
						  overlay: false,
						});
			})
//获取本地时间，每秒跳动
function sj() {
				var date = new Date();
				var y = date.getFullYear();
				var m = date.getMonth() + 1;
				var d = date.getDate();
				var h = date.getHours();
				var mm = date.getMinutes();
				var s = date.getSeconds();

				if(h < 10) {
					h = "0" + h;
				};
				if(mm < 10) {
					mm = "0" + mm;
				};
				if(s < 10) {
					s = "0" + s;
				};
				$('.free').html('<b>' + y + '年' + m + '月' + d + '日' + '</b>' + '<br />' + '<span>' + h + '：' + mm + '：' + s + '</span>');
				setTimeout("sj()", 1000);
			}