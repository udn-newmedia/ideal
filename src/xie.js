import Vue from 'vue'
import App from '@/Xie.vue'

import Utils from 'udn-newmedia-utils'

var app = new Vue({
	el: '#app',
	template: '<App/>',
	components: { App }
})

$(document).ready(function(){
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
})