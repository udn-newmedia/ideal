import Vue from 'vue'
import App from '@/Check.vue'

import Utils from 'udn-newmedia-utils'

var app = new Vue({
	el: '#app',
	template: '<App/>',
	components: { App }
})


$(document).ready(function(){


	var w = $(window).width()
	var h = $(window).height()

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

	$('.col-sm-4').click(function(){
		var target = $(this).data('target')
		ga("send", {
			"hitType": "event",
			"eventCategory": "ans click",
			"eventAction": "click",
			"eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [ ans " +  target + " click]"
		});
		$('html, body').animate({scrollTop : $('#ans-' + target).offset().top}, 1000, function(){});
	})

	$('.squre-btn').click(function(){
		ga("send", {
			"hitType": "event",
			"eventCategory": "squre btn",
			"eventAction": "click",
			"eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [squre btn]"
		});
		if(w <= 768){
			$('html, body').animate({scrollTop : $('#btn').offset().top - 50}, 1000, function(){});
		}
		else{
			$('html, body').animate({scrollTop : $('#ans-1').offset().top - $(window).height()}, 1000, function(){});
		}
		
	})

	if(w <= 768){
		var chart_animation1 = bodymovin.loadAnimation({
			container: document.getElementById('chart-1'),
			renderer: 'svg',
			loop: false,
			autoplay: false,
			path: './static/mobile_chart1/data.json'
		})
	
		var chart_animation2 = bodymovin.loadAnimation({
			container: document.getElementById('chart-2'),
			renderer: 'svg',
			loop: false,
			autoplay: false,
			path: './static/mobile_chart2/data.json'
		})
	}
	else{
		var chart_animation1 = bodymovin.loadAnimation({
			container: document.getElementById('chart-1'),
			renderer: 'svg',
			loop: false,
			autoplay: false,
			path: './static/web_chart1/data.json'
		})
	
		var chart_animation2 = bodymovin.loadAnimation({
			container: document.getElementById('chart-2'),
			renderer: 'svg',
			loop: false,
			autoplay: false,
			path: './static/web_chart2/data.json'
		})
	}

	
	
	var animation = bodymovin.loadAnimation({
		container: document.getElementById('cover-animate-1'),
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: './static/cover-1.json'
	})

	var scroll_now
	var chart, chart_flag = false, chart_flag2 = false

	$(window).on('scroll', function(){

		scroll_now = $(window).scrollTop();

		var chart1 = $('#chart-1').offset().top
		var chart2 = $('#chart-2').offset().top

		if(scroll_now > chart1 - h && scroll_now < chart1){
			if(!chart_flag){
				chart_animation1.play()
				chart_flag = true
			}
		}
		if(scroll_now > chart2 - h && scroll_now < chart2){
			if(!chart_flag2){
				chart_animation2.play()
				chart_flag2 = true
			}
		}
	})

})