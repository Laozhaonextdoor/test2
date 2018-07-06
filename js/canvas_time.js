window.onload = function(){
	
		var cc = document.getElementById("canvas")
			var ctx  =cc.getContext("2d")
			
			function radeg(angle){
				var ang = Math.PI/180		
				return angle*ang			//设置度数
			}
			function  movetimer(){
				var mytime  = new Date()
				var today  = mytime.toLocaleTimeString()
				var h = mytime.getHours()
				var m = mytime.getMinutes()
				var s = mytime.getSeconds()
				var mins = mytime.getMilliseconds()
				var degs = s+(mins/1000)
				var degm  = m+(degs/60)
				
			    ctx.fillStyle="rgba(255,255,255,0)"
			//画布清除  1:重置高度  2：重新设置画布大小
				cc.height=cc.height
				//ctx.fillRect(0,0,200,200)
			//定义颜色
				ctx.strokeStyle = '#00ffff';
				ctx.lineWidth = 2;
				ctx.shadowBlur = 5;
				ctx.shadowColor = '#00ffff'
			
				ctx.beginPath()
				ctx.arc(100,100,90,radeg(270),radeg(h*30)-90)
				ctx.stroke()
				
				ctx.beginPath()
				ctx.arc(100,100,70,radeg(270),radeg(degm*6)-90)
				ctx.stroke()
				
				ctx.beginPath()
				ctx.arc(100,100,50,radeg(270),radeg(degs*6)-90)
				ctx.stroke()
				
				ctx.font="12px 宋体"
				ctx.fillStyle = 'rgba(00, 255, 255, 1)'
				ctx.fillText("当前时间是:",70,80)
				ctx.fillText(today+"："+mins,50,100)
				
				
			}
			setInterval(movetimer,40)
	}
		