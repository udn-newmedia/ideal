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
				<div class="hbutton" data-target="3">謝哲青的無退休想像</div>
			</a>
			<a href="./ding.html" target="_blank">
				<div class="hbutton" data-target="4">丁菱娟活出第三人生</div>
			</a>
			<a href="./check.html" target="_blank">
				<div class="hbutton hbutton-select" data-target="5">三世代退休理財術</div>
			</a>
		</HeadBar>
        <Cover :src="bg" :srcWeb="bg_web">
			<h1>三大退休族 <span class="hidden-md hidden-lg"><br/></span>達人教你理財術</h1>
		</Cover>
		<ContentContainer backgroundColor="#FFFFFF">
			<Share href="https://udn.com/upf/newmedia/2017_data/ideal/check.html"/>
			<p><br/></p>
			<p>面對退休議題，你的荷包準備好了嗎？依據富蘭克林證券投顧近期所進行的《投資人理財行為及投資意向》調查，<b>七成民眾認為退休得靠「自己」</b>。富蘭克林研究部副總經理羅尤美表示，現代人壽命延長，退休時間也延後，在思考退休理財策略時，建議按距離退休的時間規劃，並提早開始進行退休理財準備。</p>
			<p><br/></p>
			<p>將近31%的受訪者預期退休後每月的生活開支金額能有5萬元水準，有超過43%認為要倚靠自己規劃的退休金、27.3%則依賴過去存款。</p>
            <p><br/></p>
            <p><br/></p>
            <h2>您認為未來退休後的生活開支主要來源是？</h2>
            <div id="chart-1"></div>
            <p><br/></p>
            <p><br/></p>
            <h2>您預計退休後每個月的生活開支金額約為多少</h2>
            <div id="chart-2"></div>
            <p><br/></p>
            <p>富蘭克林研究部副總經理羅尤美表示，<b>退休理財規劃應先有三大觀念</b>。第一，<b>儲蓄不是投資</b>。多數人認為每個月存錢就是準備退休金，但沒有考慮到現今「低利率」時代，物價漲幅早遠高於存款利息，中間的差距就得靠投資理財補足。</p>
            <p><br/></p>
            <p>第二，<b>儲蓄、保險並不代表退休金準備</b>。保險是人身保障優先並分散風險，若是追求出國旅遊休閒等額外支出，這並非保險規劃的初衷。第三，現代人壽命愈來愈長，長壽也將面臨通貨膨脹的風險。建議<b>及早投資，善用時間複利效果</b>，削弱通膨壓力，逐步累積退休資產。</p>
            <p><br/></p>
            <p><br/></p>
            <div class="embed-responsive embed-responsive-16by9">
                <!--<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/YFf22DyHGJk" frameborder="0" allowfullscreen></iframe>-->
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/EDm7o23djjs" frameborder="0" allowfullscreen></iframe>
            </div>
            <p><br/></p>
            <p><br/></p>
            <p>至於要採用何種策略，才能累積退休資產，迎接樂活的退休生活？富蘭克林證券投顧針對計畫退休15年內的「準退休族」、距離退休15~30年的「成家立業族」、距離退休30年以上的「青年創業族」，分別提出退休理財規劃建議。</p>
            <p><br/></p>
            <p><br/></p>
            <h2>你是哪一種族群？點按看專家建議</h2>
            <p><br/></p>
            <div id="btn" class="row">
                <div class="col-sm-4" data-target="1">
                    <img src="./assets/check_btn1.jpg">
                    <div class="btn-title">準退休族</div>
                    <div class="btn-text">距離退休15年內</div>
                </div>
                <div class="col-sm-4" data-target="2">
                    <img src="./assets/check_btn2.jpg">
                    <div class="btn-title">成家立業族</div>
                    <div class="btn-text">距離退休15-30年</div>
                </div>
                <div class="col-sm-4" data-target="3">
                    <img src="./assets/check_btn3.jpg">
                    <div class="btn-title">青年創業族</div>
                    <div class="btn-text">距離退休30年以上</div>
                </div>
            </div>
		</ContentContainer>
        <div class="blue-bg" id="ans-1">
            <ContentContainer>
                <div class="cover">
                    <div class="cover-contain">
                        <div id="cover-animate-1" class="cover-animate">
                            <img src="./assets/01.gif">
                        </div>
                    </div>
                    <div class="cover-text-contain">
                        <div class="cover-title">準退休族</div>
                        <div class="cover-text">距離退休15年內</div>
                    </div>
                </div>
                <p>此族群大多社會經歷豐富，即將進入退休生活，正面臨如何妥善配置管理退休金及安排退休生活問題。</p>
                <p><br/></p>
                <p>羅尤美表示，接近退休族群風險承受度較低，更依賴固定收入來源，投資方面建議以債券型和平衡型基金為主，並可提高債券型基金比重，理想境界是讓每月配息收入達到退休前的薪資收入，使退休生活維持一致的水準。</p>
                <p><br/></p>
                <p>她建議，可選擇全球總報酬複合債券型或者具有高息優勢的新興債券型基金，作為資產規劃的核心配置。至於股票型基金則可視市場情況，酌量投入，或是採取「債券基金孳息按月投資股票基金」的母子基金投資法，讓退休基金自成循環，也可有效管理資產。</p>
                <p><br/></p>
                <p><br/></p>
                <div class="suggest">
                    <div class="suggest-contain">
                        <div class="icon">
                            <img src="./assets/check_btn1.png">
                        </div>
                        <div class="suggest-title">退休理財建議：保本為上，爭取收益，債券型基金為核心</div>
                        <div class="suggest-text">
                            <ul>
                                <li>基金單筆投資為主，定期定額為輔</li>
                                <li>債券型基金搭配平衡型基金</li>
                                <li>減少投資波動，降低股票型基金比重</li>
                            </ul>
                        </div>
                        <div class="link-contain">
                            <div class="link-text"><i class="fa fa-link"></i><a target="_blank" href="https://event.franklin.com.tw/ft_retire/myDestination.html?utm_source=udnretire&utm_medium=201710retire&utm_campaign=201710retire">準備迎接哪種退休生活</a></div>
                            <div class="link-text"><i class="fa fa-link"></i><a target="_blank" href="https://event.franklin.com.tw/ft_retire/guide.html?utm_source=udnretire&utm_medium=201710retire&utm_campaign=201710retire">更多退休資訊</a></div>
                        </div>
                    </div>
                    <div class="squre-btn">
                        <i class="fa fa-arrow-up"></i>
                    </div>
                </div>
            </ContentContainer>
        </div>
        <div class="purple-bg" id="ans-2">
            <ContentContainer>
                <div class="cover">
                    <div class="cover-contain">
                        <div id="cover-animate-2" class="cover-animate">
                            <img src="./assets/02.gif">
                        </div>
                    </div>
                    <div class="cover-text-contain">
                        <div class="cover-title">成家立業族</div>
                        <div class="cover-text">距離退休15-30年</div>
                    </div>
                </div>
                <p>此族群多為上有父母、下有子女的三明治世代，理財目的大多為了購屋及子女教育，也開始計畫及準備退休金。</p>
                <p><br/></p>
                <p>羅尤美表示，「成家立業族」除需負擔父母照顧費用及子女學費外，更是家庭開銷的重要支柱，應把握穩健投資策略。股票型基金建議選擇波動較小的市場，像是成熟市場、或者全球型、區域型股票基金。以佈局全球股市為例，其年化報酬率有近7%的報酬水準（註），並且波動幅度相對小於新興股市，可作為「成家立業族」核心配置選項。</p>
                <p><br/></p>
                <p>另外，隨著年紀愈靠近退休，資產配置上也要開始納入債券型基金，和準退休族不同的是，可佈局債券資產裡偏向積極的新興債券型、美國高收益債券型基金，提升債息收益以利成為每個月固定支出的收入來源之一。</p>
                <p><br/></p>
                <div class="img-say">全球股市報酬率採MSCI世界指數成立以來，每個月進場投資10年的年化報酬率平均值，以原幣別計算，截至2017/8/31。不代表任何基金的報酬預估。投資人無法直接投資指數。</div>
                <p><br/></p>
                <p><br/></p>
                <div class="suggest">
                    <div class="suggest-contain">
                        <div class="icon">
                            <img src="./assets/check_btn2.png">
                        </div>
                        <div class="suggest-title">退休理財建議：兼顧工作與家庭，妥善調整投資策略，成長與穩健並重</div>
                        <div class="suggest-text">
                            <ul>
                                <li>基金投資定期定額為主，單筆投資為輔</li>
                                <li>股票型基金選擇波動較小的市場</li>
                                <li>將債券型基金納入投資組合</li>
                            </ul>
                        </div>
                        <div class="link-contain">
                            <div class="link-text"><i class="fa fa-link"></i><a target="_blank" href="https://event.franklin.com.tw/ft_retire/myDestination.html?utm_source=udnretire&utm_medium=201710retire&utm_campaign=201710retire">準備迎接哪種退休生活</a></div>
                            <div class="link-text"><i class="fa fa-link"></i><a target="_blank" href="https://event.franklin.com.tw/ft_retire/guide.html?utm_source=udnretire&utm_medium=201710retire&utm_campaign=201710retire">更多退休資訊</a></div>
                        </div>
                    </div>
                    <div class="squre-btn">
                        <i class="fa fa-arrow-up"></i>
                    </div>
                </div>
            </ContentContainer>
        </div>
        <div class="db-bg" id="ans-3">
            <ContentContainer>
                <div class="cover">
                    <div class="cover-contain">
                        <div id="cover-animate-3" class="cover-animate">
                            <img src="./assets/03.gif">
                        </div>
                    </div>
                    <div class="cover-text-contain">
                        <div class="cover-title">青年創業族</div>
                        <div class="cover-text">距離退休30年以上</div>
                    </div>
                </div>
                <p>此族群多為進入職場不久的社會新鮮人，理財目標多元，包括創業、留學、結婚和即將到來的子女教育經費等。</p>
                <p><br/></p>
                <p>羅尤美建議，年輕族群可積極投資，挑戰潛力大、爆發力強的股票型基金，有機會使財富翻轉，像是新興國家正處於改革階段，具備較高的成長動能，佈局新興股票型基金或者亞洲小型股基金。此外，年輕族群也可視資金情況，適量納入一些具有高息收益的債券型基金，增加資產佈局的多元性，也擴大資產成長潛力。</p>
                <p><br/></p>
                <p>她也提醒，年輕族群可投資的時間較長，即使遇到景氣衰退，仍要持續投資，在市場低點累積更多投資部位，切勿在景氣震盪時退場，而錯失經濟復甦帶來的收益機會。提早開始、定期定額投資，才是正確的退休理財觀念。</p>
                <p><br/></p>
                <p><br/></p>
                <div class="suggest">
                    <div class="suggest-contain">
                        <div class="icon">
                            <img src="./assets/check_btn3.png">
                        </div>
                        <div class="suggest-title">退休理財建議：投資進取，擴大資產成長潛力，精選股票型基金</div>
                        <div class="suggest-text">
                            <ul>
                                <li>基金投資定期定額為主，單筆投資為輔</li>
                                <li>提高股票型基金比重</li>
                                <li>選擇具爆發潛力的市場佈局</li>
                            </ul>
                        </div>
                        <div class="link-contain">
                            <div class="link-text"><i class="fa fa-link"></i><a target="_blank" href="https://event.franklin.com.tw/ft_retire/myDestination.html?utm_source=udnretire&utm_medium=201710retire&utm_campaign=201710retire">準備迎接哪種退休生活</a></div>
                            <div class="link-text"><i class="fa fa-link"></i><a target="_blank" href="https://event.franklin.com.tw/C2017_04_YRSP/index.html?utm_source=udnretire&utm_medium=201704YRSP&utm_campaign=201704YRSP">青年必備理財妙計</a></div>
                        </div>
                    </div>
                    <div class="squre-btn">
                        <i class="fa fa-arrow-up"></i>
                    </div>
                </div>
            </ContentContainer>
        </div>
        <ContentContainer backgroundColor="#FFFFFF">
            <Editor>
				<div>諮詢專家：富蘭克林研究部副總經理羅尤美</div>
				<div>聯合報新媒體中心企畫製作</div>
			</Editor>
            <p><br/></p>
            <Share href="https://udn.com/upf/newmedia/2017_data/ideal/check.html"/>
			<Logo />
            <p><br/></p>
			<FBComment href="https://udn.com/upf/newmedia/2017_data/ideal/check.html" />
        </ContentContainer>
        <Foot />
    </div>
</template>

<script>

import bg from '@/assets/bg_check_m.jpg'
import bg_web from '@/assets/bg_check.jpg'

import Indicator from '@/components/Indicator.vue'
import HeadBar from '@/components/HeadBar.vue'
import Cover from '@/components/Cover.vue'
import ContentContainer from '@/components/Content.vue'
import Share from '@/components/Share.vue'
import FixedBackground from '@/components/FixedBackground.vue'
import Quote from '@/components/Quote.vue'
import ImageContain from '@/components/ImageContain.vue'
import Logo from '@/components/LogoFranklin.vue'
import Editor from '@/components/Editor.vue'
import Relate from '@/components/Relate.vue'
import FBComment from '@/components/FBComment.vue'
import Foot from '@/components/Footer.vue'

export default {
    data: function(){
        return{
            bg: bg,
            bg_web: bg_web
        }
    },
	components: {
    	Indicator, HeadBar, Cover, ContentContainer, Share, Quote, ImageContain, FixedBackground, Logo, Editor, Relate, FBComment, Foot
	}
}
</script>

<style scoped>
    iframe{
        width: 100%;
    }
    h1{
        font-size: 55px;
        letter-spacing: -1px;
        color: #000000;
        line-height: 1.5;
        text-shadow: 0px 3px 7px rgba(0, 0, 0, 0.21);
        margin: 0;
    }

    .col-sm-4{
        padding: 0;
        cursor: pointer;
    }

    .btn-title{
        font-size: 21px;
        font-weight: bold;
        text-align: center;
    }

    .btn-text{
        font-size: 16px;
        text-align: center;
    }

    .blue-bg{
        background-color: #E2FBFE;
    }

    .purple-bg{
        background-color: #F5F2F4;
    }

    .db-bg{
        background-color: #CFE9FA;
    }

    .cover-animate{
        width: 600px;
        position: absolute;
        right: 0;
    }

    .cover-animate img{
        width: 100%;
    }

    .cover-animate video{
        width: 100%;
    }

    .suggest{
        position: relative;
    }

    .suggest-title{
        font-size: 21px;
        font-weight: bold;
        margin-bottom: 21px;
    }

    .suggest-text{
        font-size: 21px;
    }

    .link-contain{
        width: 50%;
        margin: 55px auto 0 auto;
    }

    .link-text a{
        color: #000000;
        margin-left: 8px;
    }

    .link-text{
        font-size: 21px;
        color: #000000;
        font-weight: bold;
        text-decoration: none;
    }

    .squre-btn{
        width: 88px;
        height: 88px;
        opacity: 0.5;
        border-radius: 10px;
        background-color: #222222;
        position: absolute;
        right: -118px;
        bottom: 0px;
    }

    .squre-btn .fa-arrow-up{
        font-size: 87px;
        margin-left: 5px;
        color: #FFFFFF;
    }

    /*IE10+ */
    @media all and (-ms-high-contrast:none), all and (-ms-high-contrast:active) {
        #chart-1 {
            height: 600px;
        }

        #chart-2  {
            height: 476px;
        }
    }
    /* Microsoft Edge Browser 12,13 only - @supports method */

    @supports (-ms-accelerator:true) {
        #chart-1 {
            height: 600px;
        }

        #chart-2  {
            height: 476px;
        }
    
    }
    /* Microsoft Edge Browser 12+ (All) - @supports method */

    @supports (-ms-ime-align:auto) {
        #chart-1 {
            height: 600px;
        }

        #chart-2  {
            height: 476px;
        }
    }

    @media screen and (max-width: 767px){
        #cover{
            height: 100vh;
        }
        .cover{
            margin-bottom: 64px;
        }
        #cover-contain img{
            margin-top: 20%;
        }
        .cover-animate{
            width: 100%;
            position: relative;
        }
        .cover-animate img{
            width: 100%;
        }
        .cover-title{
            font-size: 26px;
            font-weight: bold;
            line-height: 39px;
        }

        .cover-text{
            font-size: 26px;
            line-height: 32.5px;
        }
        .icon{
            text-align: center;
        }
        .suggest-title{
            margin-top: 21px;
        }
        .suggest-text{
            font-size: 18px;
            margin-left: -17px;
        }
        .link-contain{
            width: 100%;
            margin: 32px 0 0 0;
        }
        h1{
            font-size: 40px;
            padding: 0 45px;
        }
        .squre-btn{
            width: 55px;
            height: 55px;
            right: 0;
        }
        .squre-btn .fa-arrow-up{
            font-size: 50px;
        }
        .col-sm-4{
            text-align: center;
        }
        .col-sm-4 img{
            width: 200px;
        }
        #cover h1{
            padding: 0 20px;
            top: 120px;
            text-align: left;
            letter-spacing: -1.2px;
            position: absolute;
            font-weight: bold;
            line-height: 1.5;
        }
    }
    @media screen and (min-width: 768px) and (max-width: 1024px){
        h1{
            font-size: 45px;
        }
        #cover h1{
            padding: 0 20px;
            top: 120px;
            text-align: left;
            letter-spacing: -1.2px;
            position: absolute;
            font-weight: bold;
            line-height: 1.5;
        }
    }
    @media screen and (min-width: 1025px){
        #cover h1{
            position: absolute;
            font-weight: bold;
            letter-spacing: -1.7px;
            line-height: 1.36;
            left: 50%;
            margin-left: -326.5px;
            top: 27%;
            text-shadow: 0 0px 10px rgba(0,0,0,.2);
        }
        #cover{
            height: 460px;
        }

        .cover{
            height: 600px;
            position: relative;
        }

        #cover-contain{
            width: 880px;
            margin: 0 auto;
            position: relative;
        }

        .cover-contain{
            width: 880px;
            margin: 0 auto;
            position: relative;
        }

        .cover-text-contain{
            position: absolute;
            left: 0;
            top: 200px;
        }

        .cover-title{
            font-size: 55px;
            font-weight: bold;
            letter-spacing: -0.5px;
            line-height: 60px;
        }

        .cover-text{
            font-size: 40px;
            line-height: 60px;
            letter-spacing: -0.4px;
        }

        #cover-contain img{
            width: 604px;
            height: 477px;
            position: absolute;
            right: 0;
            top: 70px;
        }
        .suggest-contain{
            width: 80%;
            margin: 0 auto;
        }
        .suggest-title{
            margin-left: 160px;
        }
        .suggest-text{
            margin-left: 145px;
        }
        .icon{
            float: left;
        }
        h1{
            position: absolute;
            top: 196px;
            z-index: 999;
        }
        #t3{
            width:60%;
            margin-left: 300px;
        }
    }

a, a:hover, a:active, a:visited, a:focus {
    text-decoration:none;
}

</style>
