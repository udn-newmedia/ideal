<template>
	<div id="app">
		<indicator color="#A5DEE4" />
		<HeadBar color="#FFFFFF" buttonColor="#000000">
			<a href="./index.html" target="_blank">
				<div class="hbutton" data-target="1">人人90歲的時代</div>
			</a>
			<a href="./wang.html" target="_blank">
				<div class="hbutton" data-target="2">王琄的獨身大齡哲學</div>
			</a>
			<a href="./xie.html" target="_blank">
				<div class="hbutton hbutton-select" data-target="3">謝哲青的無退休想像</div>
			</a>
			<a href="./ding.html" target="_blank">
				<div class="hbutton" data-target="4">丁菱娟活出第三人生</div>
			</a>
			<a href="./check.html" target="_blank">
				<div class="hbutton" data-target="5">三大退休族理財術</div>
			</a>
		</HeadBar>
		<CoverFixedBg :src="bg" :srcWeb="bg_web">
			<h1>廟口也能是舞台<br/>謝哲青想的「退休」不一樣</h1>
		</CoverFixedBg>
		<ContentContainer backgroundColor="#F1E9E4">
			<Share href="https://udn.com/upf/newmedia/2017data/ideal/xie.html"/>
			<p><br/></p>
			<p>一生都在各地旅行的旅遊作家謝哲青，是作家，也是主持人、文史研究者。走訪過世界各國的他，給人的印象總是活躍，無法停下探索新事物的腳步。這樣的性格特色，更讓人好奇，他的人生字典裡，是否有「退休」二字，又是怎麼詮釋這個字眼。</p>
			<p><br/></p>
			<p>「以後我就算不在媒體上分享了，我還是可以在廟口、小書店、一間小教室，來跟大家聊聊，這些都是退休想像。」今年42歲的謝哲青笑說。</p>
			<p><br/></p>
			<p>正值前中年的謝哲青，經歷過豐富的人生上半場，正在轉化過去經驗帶來的養分，年輕時無法領悟、體會的事情，現在慢慢有了輪廓，他也正在將這些收穫，帶給他的讀者、觀眾。對他而言，人生各階段都有無可取代的體悟、智慧，「如果用年齡框住自己的可能性，就太可惜了。」</p>
		</ContentContainer>
		<div class="you-back">
			<div class="you-contain">
				<div class="embed-responsive embed-responsive-16by9">
					<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/O3djrjcsGL8?rel=0" frameborder="0" allowfullscreen></iframe>
				</div>
			</div>
		</div>
		<ContentContainer backgroundColor="#FFFFFF">
			<h2>從父親身上 看到不一樣的「退休」</h2>
			<p><br/></p>
			<p>謝哲青對於退休後的想像，很大一部分來自於他的父親。「我父親是個很老實的藍領階級，他到了70多歲，還是沒有『退休』。」還是會每天到工地，跟朋友、以前的工頭，到包商那打零工。</p>
			<p><br/></p>
			<p>他問父親為什麼要這樣做，父親回他兩個理由，「一是退休的人，還是要覺得自己是有用的人；二是父親不希望就這樣忘掉他50年來謀生的工具，他割捨不下。」</p>
			<p><br/></p>
            <p>父親的回答，給了謝哲青很大啟發。「一直覺得自己是有用的，這件事很重要。」父親到工地去做工，除了讓自己不忘記技能、還有事情做之外，也是向年輕人分享、傳承他的工作經驗。</p>
			<p><br/></p>
			<p>「日本的職人、匠人，實際上他們都沒有所謂『退休』這個字。」謝哲青認為，人生很多事，在不同階段會有不同體悟，經過時間淬煉，才發現以前想不通、看不開、不明白的事，原來可以這樣想、這樣做，「同樣的問題，想了50年、70年，想法肯定不一樣」，都可以拿出來與年輕人溝通、互相了解。</p>
            <p><br/></p>
            <p>若將這樣的觀念放到他現在的工作，謝哲青想像，現在他主要在媒體推廣閱讀及藝文、藝術教育，但「江山代有人才出」，他不一定要一直在第一線，可以將現在的工作職位交給更有能力的人，但不代表從此休息，還是可以帶著自己的人生閱歷，去尋找能發揮的角落，「不是從此退出生產線。」</p>
            <p><br/></p>
            <p><br/></p>
            <ImageContain :src="xie1" :src-web="xie1_web" imgSay="對謝哲青而言，從沒想過「退休」，現在他在媒體上推廣閱讀、藝文，未來他不一定要一直在第一線，廟口、教室、書店，都可以是他繼續做喜歡工作的舞台，經驗不會因此中斷。照片來源／取自謝哲青臉書"/>
            <p><br/></p>
            <p><br/></p>
            <h2>人生沒有時間表 別用年齡設階段</h2>
            <p><br/></p>
            <p>走訪過多個國家的謝哲青，喜歡在一個城市停留一段時間，感受當地的人文風情，停留的時間沒有ㄧ定，但當他心裡隱隱覺得差不多該離開了，他就會動身前往下一個城市。對於人生，他也是如此看待。</p>
            <p><br/></p>
            <p>謝哲青說，工業革命後，因為生產需要訂定計畫，社會開始習慣用數字、階段去清楚劃分人生，但其實不用如此，自己最清楚自己想要、需要什麼，覺得在這個階段待有點久了，就繼續往前，也不用幫自己設定停下來的時間點，「人生應該只有進度表，沒有時間表。」</p>
            <p><br/></p>
            <p><br/></p>
            <Quote text="＂會焦慮老後，是因為我們沒有清楚掌握，擁有自由後要做什麼＂" />
            <p><br/></p>
            <p><br/></p>
            <p>謝哲青走訪德國時，看到許多夫妻老後選擇離婚，各自追求生活，但不代表關係就此終結，離開婚姻後，配偶還是親密伴侶、小孩也還是小孩，只是選擇脫去婚姻枷鎖。這給他一個很大的啟示，婚姻是這些德國長輩上階段的任務，追求自由，就是長輩們人生的下一個進度。</p>
            <p><br/></p>
            <p><br/></p>
            <h2>誰不怕老 但更學會珍惜</h2>
            <p><br/></p>
            <p>但年齡的增長，一方面代表人生經驗更豐富、智慧更成熟，另一方面，卻也需要面對失去與消逝。愈活愈長的同時，往往代表得經歷更多、更漫長的失去，對「老」的恐懼與害怕也愈深。</p>
            <p><br/></p>
            <p>「怕老，是人都會怕。」謝哲青坦言，他也怕老，原因是當年齡愈來愈大，身邊會有些事情慢慢消失，「有些美好事物消失、有些人在生命中消失，自己有些能力消失，包括記憶力、體力等。」</p>
            <p><br/></p>
            <p>「但也是因為害怕，我們才會敬畏。」謝哲青說，害怕老是正常的，但不能只是害怕，害怕的目的，是要讓人覺得「老」是一件重要的事，因為害怕，所以更珍惜和懂得運用，這才是怕老的重點。</p>
		</ContentContainer>
		<FixedBackground :src="xie2" :src-web="xie2_web" text="一向隨興自在的謝哲青坦言，是人都會怕老，但害怕之後，應該更珍惜與懂得運用，才是「怕老」的重點。" />
		<ContentContainer backgroundColor="#FFFFFF">
			<h2>從身體到心靈 對自己誠實</h2>
			<p><br/></p>
			<p>已邁入「四十不惑」的謝哲青，也開始為老做準備。保養、善待自己的身體，是他給的第一個建議。</p>
			<p><br/></p>
            <Quote text="“身體會陪我們到呼出最後一口氣，一定要好好對待他／她”" />
            <p><br/></p>
			<p>謝哲青笑說，<b>人生有三大幻覺，「今天早點睡、明天開始減肥、再買東西就剁手」</b>，前兩件事都與身體有關。大家都知道怎麼樣對身體比較好，但就是難做到，要學習的，是「節制」兩字。現在的他，會盡量逼自己早睡、吃東西吃健康一些，不會吃到不舒服，也固定跑步、練拳、走路，維持身體機能。</p>
			<p><br/></p>
			<p>運動過程中，更重要的是能認識自己的身體。謝哲青說，很多人退休開始去旅行，但因為對身體不夠了解，以為身體好，才發現身體反應與自己認識的不同。實際開始活動身體，才會知道自己身體的極限，重新了解、對自己的身體誠實。</p>
		</ContentContainer>
		<FixedBackground :src="xie3" :src-web="xie3_web" text="謝哲青說，很多人因為不了解自己的身體，退休後出去旅遊，才發現身體沒想像中強健，運動，是幫助自己認識身體的重要途徑。照片來源／取自謝哲青臉書" />
		<ContentContainer backgroundColor="#FFFFFF">
			<p>除了認識自己的身體，謝哲青過去常在演講中鼓勵台下觀眾「做自己」，這句話不只針對年輕人，也是他給邁入熟齡者的建議。「對自己誠實，找回忽略的內心感受、曾放棄的追求。」</p>
			<p><br/></p>
			<p>謝哲青說，中年邁入熟齡的過程，家庭、工作的羈絆要學會漸漸放下，騰出雙手，才可以做更多自己想做的事；更要放下對名氣、名利的執著，太過將名氣當一回事，「會跌得很重」。有些人退休後，發現自己漸漸不被身邊的人需要，彷彿被否定了過去曾經歷的辛苦，「那感覺其實很悲哀。」</p>
			<p><br/></p>
            <p>「我們對別人有很多期待，但在邁向老的過程中，要學會慢慢放下。」他永遠記得父親退休後的感嘆：「裡子比面子更重要」。自己過的好不好，比別人怎麼看更重要，這道理很多人都知道，但要做到不容易，需要花時間慢慢學習，現在就可以開始。</p>
			<p><br/></p>
			<p><br/></p>
			<div class="tip">
				<h2>理想大人生活Tips</h2>
				<ul>
					<li>認識自己的身體，好好照顧</li>
					<li>人生沒有時間表，只有進度表，不要被年齡框住</li>
					<li>退休不是退出生產線，快樂工作、傳承經驗</li>
					<li>做自己，放下風光、名利與對他人的期待</li>
				</ul>
			</div>
			<p><br/></p>
			<p><br/></p>
			<Share href="https://udn.com/upf/newmedia/2017data/ideal/xie.html"/>
			<Logo />
			<p><br/></p>
			<Editor>
				<div>文字：洪欣慈、蔡佩蓉</div>
				<div>視覺設計、影音：張心慈</div>
				<div>網頁製作：鄭偉廷</div>
				<div>攝影：陳立凱</div>
                <div>場地提供：日常生活 a day cafe</div>
				<div>2017.10.30</div>
			</Editor>
			<p><br/></p>
			<Relate>
				<a href="./wang.html" target="_blank" slot="relate-1">
					<img class="lazyload" :data-src="relate1"/>
					<p>人人90歲的時代 你想怎麼活？</p>
				</a>
				<a href="./xie.html" target="_blank" slot="relate-2">
					<img class="lazyload" :data-src="relate2"/>
					<p>金鐘影后王琄：允許大齡的自己，像小baby重新學走路</p>
				</a>
				<a href="./ding.html" target="_blank" slot="relate-3">
					<img class="lazyload" :data-src="relate4"/>
					<p>54歲辭去董事長 丁菱娟第三人生勇敢追夢</p>
				</a>
				<a href="./check.html" target="_blank" slot="relate-4">
					<img class="lazyload" :data-src="relate5"/>
					<p>三大退休族 達人教你理財術</p>
				</a>
			</Relate>
			<p><br/></p>
			<FBComment href="https://udn.com/upf/newmedia/2017_data/idel/xie.html" />
		</ContentContainer>
		<Foot background-color="#FFFFFF"/>
	</div>
</template>

<script>
import Indicator from '@/components/Indicator.vue'
import HeadBar from '@/components/HeadBar.vue'
import CoverFixedBg from '@/components/CoverFixedBg.vue'
import ContentContainer from '@/components/Content.vue'
import Share from '@/components/Share.vue'
import FixedBackground from '@/components/FixedBackground.vue'
import Quote from '@/components/Quote.vue'
import ImageContain from '@/components/ImageContain.vue'
import Logo from '@/components/Logo.vue'
import Editor from '@/components/Editor.vue'
import Relate from '@/components/Relate.vue'
import FBComment from '@/components/FBComment.vue'
import Foot from '@/components/Footer.vue'

import bg from '@/assets/bg_xie.jpg'
import bg_web from '@/assets/web/bg_xie.jpg'

import xie1 from '@/assets/xie1.jpg'
import xie2 from '@/assets/xie2.jpg'
import xie3 from '@/assets/xie3.jpg'

import xie1_web from '@/assets/web/xie1.jpg'
import xie2_web from '@/assets/web/xie2.jpg'
import xie3_web from '@/assets/web/xie3.jpg'

import relate1 from '@/assets/relate1.jpg'
import relate2 from '@/assets/relate2.jpg'
import relate4 from '@/assets/relate4.jpg'
import relate5 from '@/assets/relate5.jpg'


export default {
	data: function(){
		return{
			bg: bg,
            bg_web: bg_web,
            xie1: xie1,
            xie2: xie2,
            xie3: xie3,
            xie1_web: xie1_web,
            xie2_web: xie2_web,
			xie3_web: xie3_web,
			relate1: relate1,
			relate2: relate2,
			relate4: relate4,
			relate5: relate5
		}
	},
	components: {
    	Indicator, HeadBar, CoverFixedBg, ContentContainer, Share, Quote, ImageContain, FixedBackground, Logo, Editor, Relate, FBComment, Foot
	}
}
</script>

<style scoped>

#app{
	background: transparent;
}

.tip{
	border: solid 1px #A5DEE4;
	padding: 50px 90px;
}

.tip ul{
	margin-top: 20px;
	padding-left: 20px;
}

@media screen and (max-width: 767px){
	#cover h1{
		padding: 0 20px;
		bottom: 64px;
		text-align: left;
		letter-spacing: -1.2px;
		position: absolute;
		font-weight: bold;
		line-height: 1.5;
	}
	.right{
		margin-top: 40px;
	}
	.tip{
		padding: 30px 20px;
	}
}

@media screen and (min-width: 1025px){
	#cover h1{
		position: absolute;
		font-weight: bold;
		letter-spacing: -1.7px;
		line-height: 1.36;
		left: 100px;
		height: 211px;
		bottom: 30%;
	}
	.col-sm-6.left{
        padding-right: 10px;
    }
    .col-sm-6.right{
        padding-left: 10px;
    }
	.you-back{
		background-color: #FFFFFF;
	}
	.you-contain{
		width: 100%;
		max-width: 1280px;
		margin: 0 auto;
	}
}

</style>
