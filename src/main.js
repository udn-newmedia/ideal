import Vue from 'vue'
import App from '@/App.vue'

import Utils from 'udn-newmedia-utils'

var app = new Vue({
	el: '#app',
	template: '<App/>',
	components: { App }
})

$(document).ready(function(){
	
	
		var w = $(window).width()
		var h = $(window).height()
		var sec1, sec2, sec3

		$('a').click(function(){
			console.log('click')
			fbq('track', 'ViewContent');
			ga("send", {
				"hitType": "event",
				"eventCategory": "超連結點擊",
				"eventAction": "click",
				"eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [" + $(this).attr('href') + "] [" + $(this).parent().attr('class') + "]"
			});
		})

		$('.hbutton').click(function(){
			var target = $(this).data('target')
			ga("send", {
                "hitType": "event",
                "eventCategory": "hbutton click",
                "eventAction": "click",
                "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [hbutton click" + target + "]"
            });

			if(target == 1 || target == 2 || target == 3){
				$('html, body').animate({scrollTop : $('#section-' + target).offset().top}, 1000, function(){});
				$("#hbutton-contain").toggleClass("open");
			}
			else if(target == 4){
				window.open('./wang.html')
				$("#hbutton-contain").toggleClass("open");
			}
			else if(target == 5){
				window.open('./check.html')
				$("#hbutton-contain").toggleClass("open");
			}
			console.log($(this).data('target'))
		})
	
		if(w <= 768){
			var chart_animation1 = bodymovin.loadAnimation({
				container: document.getElementById('chart-1'),
				renderer: 'svg',
				loop: false,
				autoplay: false,
				path: './static/main/mobile_chart/data.json'
			})
		
		}
		else{
			var chart_animation1 = bodymovin.loadAnimation({
				container: document.getElementById('chart-1'),
				renderer: 'svg',
				loop: false,
				autoplay: false,
				path: './static/main/web_chart/data.json'
			})
		
		}
	
		var draw1 = bodymovin.loadAnimation({
			container: document.getElementById('draw-1'),
			renderer: 'svg',
			loop: true,
			autoplay: true,
			path: './static/main/draw1/data.json'
		})


		var draw2 = bodymovin.loadAnimation({
			container: document.getElementById('draw-2'),
			renderer: 'svg',
			loop: true,
			autoplay: true,
			path: './static/main/draw2/data.json'
		})

		var draw3 = bodymovin.loadAnimation({
			container: document.getElementById('draw-3'),
			renderer: 'svg',
			loop: true,
			autoplay: true,
			path: './static/main/draw3/data.json'
		})
	
		var scroll_now
		var chart, chart_flag = false, chart_flag2 = false
	
		$(window).on('scroll', function(){
	
			scroll_now = $(window).scrollTop();
	
			var chart1 = $('#chart-1').offset().top
			sec1 = $('#section-1').offset().top
			sec2 = $('#section-2').offset().top
			sec3 = $('#section-3').offset().top
	
			if(scroll_now > chart1 - h && scroll_now < chart1){
				if(!chart_flag){
					chart_animation1.play()
					chart_flag = true
				}
			}

			if(scroll_now < sec1 - h/2){
				$('.hbutton').css('background-color', '')
			}
			else if(scroll_now >= sec1 - h/2 && scroll_now < sec2 - h/2){
				$('.hbutton').css('background-color', '')
				$('.hbutton[data-target="1"]').css('background-color', '#A5DEE4')
			}
			else if(scroll_now >= sec2 - h/2 && scroll_now < sec3 - h/2){
				$('.hbutton').css('background-color', '')
				$('.hbutton[data-target="2"]').css('background-color', '#A5DEE4')
			}
			else{
				$('.hbutton').css('background-color', '')
				$('.hbutton[data-target="3"]').css('background-color', '#A5DEE4')
			}

		})
	
	})