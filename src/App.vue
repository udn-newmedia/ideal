<template>
	<div id="app">
		<indicator color="#A5DEE4" />
		<HeadBar color="#FFFFFF" buttonColor="#000000">
			<div class="hbutton" data-target="1">老員工活用上半場</div>
			<div class="hbutton" data-target="2">老黑的下半場哲學</div>
			<div class="hbutton" data-target="3">做好打延長賽準備</div>
			<div class="hbutton" data-target="4">名人的大齡人生</div>
			<div class="hbutton" data-target="5">三世代退休理財術</div>
		</HeadBar>
		<CoverFixedBg :src="bg" :srcWeb="bg_web">
			<h1>人人90歲的時代<br/>你想怎麼活？</h1>
		</CoverFixedBg>
		<ContentContainer backgroundColor="#FFFFFF">
			<Share href="https://udn.com/upf/newmedia/2017_data/ideal/index.html"/>
			<p><br/></p>
			<p>再過43年，台灣幾乎人人都可以活到90歲，但活得長，卻不一定能活得好。高齡化下一階段最大挑戰，將變成「活著要幹嘛」？</p>
			<p><br/></p>
			<p>面對變長的人生下半場，有些人不退也不休，利用上半場累積的經驗與智慧，開創第二春傳承給下一代。有人則急流勇退，人生下半場追求自我實現。</p>
			<p><br/></p>
			<p>年過50歲、曾擁有世紀奧美公關創辦人頭銜的丁菱娟，選擇在巔峰時轉身，成為教授、作家、創業導師，開啟「第三人生」；金鐘影后王琄，以坦然自在的心情接受年歲改變，尋找能帶給觀眾、屬於50歲獨一無二的魅力，長出自己的大齡生活哲學。</p>
			<p><br/></p>
			<p>當下半場變成人生延長賽，過去的觀念該先「退休」，人生階段必須重新思考、切割。求學時花20幾年才建構個人價值觀，面對老後人生，也要提早學習和準備。</p>
			<p><br/></p>
			<p><br/></p>
			<h2>活到超高齡 人生意義最難尋</h2>
			<p><br/></p>
			<p>內政部日前公布最新數據，105年男性平均壽命（0歲平均餘命）76.8歲、女性83.4歲，高於大陸、美國等國家。未來台灣還會繼續「老」，國發會推估，台灣人的平均壽命，到民國150年，將比現在再多4到5歲，女性平均可活到87.55歲。</p>
			<p><br/></p>
			<p><br/></p>
			<div class="chart-title">平均餘命年年上升</div>
			<div id="chart-1"></div>
			<p><br/></p>
			<p>但活得久，不見得活得好。衛福部統計，去年所有自殺人口中，4分之1是65歲以上長者，除了疾病，憂鬱、找不到生活重心等心理因素也是一大原因。</p>
			<p><br/></p>
			<p><b>「高齡未來最大的挑戰，是『活著要幹嘛』。」</b>台北榮總高齡醫學中心主任陳亮恭指出，人類歷史上99％的時間，都只能活3、40歲，那時候只想著如何長命，但到了近200年，平均壽命從40歲驟增到80歲，目標轉移到健康長壽，現在失能長者比率已慢慢壓縮，有8成以上長者都是健康老人，生命延長後的意義，是下一個課題。</p>
			<p><br/></p>
			<p>但每個人都沒有老過，教育階段也從沒教如何迎接年齡增長、壽命延長，對「老」的印象、人生階段的想像，都來自上一代，或社會長年累積的模式。沒有太多想像的結果，就是常聽到長輩喊無聊，只能用打發、消磨時間來形容每天的生活，「宅老人」成常態。</p>
			<p><br/></p>
			<p><br/></p>
			<Quote text="＂未來老人不會忙著生病，會愈來愈健康，當8、90歲依然健康時，人生要做什麼規畫？＂" />
			<p><br/></p>
			<p><br/></p>
			<p>陳亮恭說，每個人都會想跟上一代一樣，55歲、60歲趕快退休享清福，「但若知道退休後還有30年要活，想法可能就不一樣了。」</p>
			<p><br/></p>
			<p><br/></p>
			<p>「過去人生分成求學、工作、退休三階段，退休就是休息、撤退，但現在這樣的觀念該『退休』了。」中正大學高齡教育研究中心主任魏惠娟指出，歐美、日本已開始提倡燦爛七十、百歲人生等新觀念，「退休只是從一個工作退出，不是人生從此停下。」</p>
		</ContentContainer>
		<FixedBackground id="section-1" :src="main1" :srcWeb="main1_web" titletext1="企業珍視「經驗值」" titletext2="6成員工退而不休" />
		<ContentContainer backgroundColor="#FFFFFF">
			<p>「繼續工作精神有寄託，身體也比較好啦！」走進崇友實業旗下子公司「好厝邊科技」的工廠，裡面多數員工頭髮已顯灰白，但仍目光炯炯、專注於手上的工作。在好厝邊，有6成員工都是退休後再回聘，<b>年齡最大的已66歲。</b></p>
			<p><br/></p>
			<p>好厝邊於2000年創立，一開始原本規畫做社區寬頻網路，但沒有成功，後來與母公司崇友緊密連結，做電梯保養、維修等後續服務，近年再轉型，看中高齡化趨勢，專攻主打居家市場的真空氣動梭產品，讓行動不便的老人家能不受居家樓層限制。<b>退休員工們成為另類的「以老照顧老」</b>。</p>
			<p><br/></p>
			<p>崇友從代理日本東芝TOSHIBA電梯起家，創辦人唐松章受日本企業文化影響，相當認同日本終身雇用制的精神，「讓員工好好做一輩子」，是公司的初衷與理念。</p>
			<p><br/></p>
			<p>董事長林銅沂說，台灣法律規定勞工在一間公司工作滿25年就可以退休，崇友很多員工是當完兵、或當兵前就進入崇友，40、50歲就屆齡退休，都還年輕。很多員工退休後，跑去同行工作，或自行創業，反而變成相互競爭關係，「找他們回來，公司比較安定，也不用因為擔心員工退休會帶走機密而小心翼翼，好處很多！」</p>
			<p><br/></p>
			<p>「老員工的價值在於經驗穩固、工作紮實。」林銅沂說，工廠工作辛苦，現在的新進員工，存活率不到5成，嫌熱、嫌不舒適，各種理由都有，老員工雖上了年紀，但工作都很認真紮實，「不用時時刻刻盯著」，也不太叫苦。</p>
			<p><br/></p>
			<p>此外，老員工在公司待了多年，對於上下游廠商、零件供應鏈等都瞭若指掌，清楚很多眉角，可以<b>減少訓練成本，也熟悉公司企業文化</b>。林銅沂笑說，老員工與同事間的情感緊密，「有糾紛談一談、喝杯酒就沒事了」，不會把事情鬧大。</p>
			<p><br/></p>
			<p>與年輕員工之間，退休員工則能充分發揮互補功能。林銅沂表示，團隊若有老有少，會相對健全許多，分工明確就能減少摩擦。年輕人發揮創意、發展新設計，老員工則以多年手感，負責品質監管和經驗傳承。</p>
			<p><br/></p>
			<p>公司也對老員工有期許，除了繼續維持品質外，隨公司業務轉變，林銅沂說，希望老員工們能將上半場經驗持續精進，「就算不做設計，要在氣動梭改良過程中，扮演品質把關的重要角色。」</p>
			<p><br/></p>
			<p><br/></p>
			<div class="row">
				<div class="col-sm-6 left">
					<ImageContain :src="main2" :srcWeb="main2_web"/>
				</div>
				<div class="col-sm-6 right-small">
					<ImageContain :src="main3" :srcWeb="main3_web"/>
				</div>
			</div>
			<div class="img-say hidden-xs">好厝邊董事長林銅沂（圖左）與資深員工李文全（圖右）。</div>
			<div class="img-say hidden-lg hidden-md hidden-sm">好厝邊董事長林銅沂（圖上）與資深員工李文全（圖下）。</div>
			<p><br/></p>
			<p><br/></p>
			<p>今年60歲的李文全，民國99年從崇友退休，後來轉到好厝邊任職，今年已是第7個年頭。對現在的他而言，<b>沒有年輕時的經濟壓力，每天以「歡喜做」的心情迎接工作</b>。</p>
			<p><br/></p>
			<p>李文全說，他聽過很多例子，退休後沒有好好規畫，閒下來沒事做、作息大亂，身體反而一天不如一天，「上班可以動手動腦，比較不會老人癡呆」，也能幫助公司、發揮經驗，還可以維持和同事之間的感情，一起聚餐、泡茶，保有自己的生活圈，「沒想過什麼時候不做，做到公司不需要我們為止吧！」</p>
			<p><br/></p>
			<p>看到資深員工的價值，不只讓員工們老有所用、退休不無聊；對企業而言，更是成功讓員工成為一輩子的朋友，不會變成商場上的敵人。</p>
			<p><br/></p>
			<p><br/></p>
			<div class="tip">
				<h2>人生下半場 他們這麼過</h2>
				<p><br/></p>
				<Relate3>
					<a href="./wang.html" target="_blank" slot="relate-1">
						<img class="lazyload" :src="famous1"/>
						<p>金鐘影后王琄：允許大齡的自己，像小baby從頭學走路</p>
					</a>
					<a href="./xie.html" target="_blank" slot="relate-2">
						<img class="lazyload" :src="famous2"/>
						<p>廟口也能是舞台 謝哲青想的「退休」不一樣</p>
					</a>
					<a href="./ding.html" target="_blank" slot="relate-3">
						<img class="lazyload" :src="famous3"/>
						<p>54歲辭去董事長 丁菱娟第三人生勇敢追夢</p>
					</a>
				</Relate3>
			</div>
		</ContentContainer>
		<FixedBackground id="section-2" :src="main4" :srcWeb="main4_web" titletext1="高峰勇退" titletext2="老黑的下半場哲學" />
		<ContentContainer backgroundColor="#FFFFFF">
			<p><b>「傳統意義上我是退休了，但我想的不是一般人定義的『退休』。」</b>今年57歲、綽號老黑的田臨斌，原本任職於外商公司，官居台灣分公司總經理，但在45歲事業巔峰時，做了一個跌破親朋好友眼鏡的決定。毅然決然離開職場，開啟他人生的下半場，現在成為作家，各地演講，偶爾抱著吉他，當起街頭藝人。</p>
			<p><br/></p>
			<p>老黑說，當時他工作已超過20年，沒有不順利，但心裡就是不甘願，想著「難道我這輩子就要這樣過了嗎？」若不提早思考和做些什麼，下一個20年就過了，屆時再做自己想做的事情，體力、條件、心態，可能都已經大不如前。</p>
			<p><br/></p>
			<p><br/></p>
			<h2>準備三件事 為下半場人生負責任</h2>
			<p><br/></p>
			<p>從萌生念頭到實際離職，老黑花了約4、5年時間準備，<strong> 「我準備三件事，錢、健康，還有探索自己、尋找人生職志。」</strong></p>
			<p><br/></p>
			<p>金錢方面，老黑做的第一件事，就是「開始記帳」。老黑說，記帳對他而言最大的功能，是從目前的支出，去推估不工作後的生活開銷，才不會一直覺得退休後錢不夠用。過去加班又應酬的他，為了調整健康，更下定決心戒掉抽了28年的菸、從忙碌中擠出空檔，開始運動。</p>
			<p><br/></p>
			<p>健康、金錢，都是可努力的具體目標，但尋找人生職志，相形抽象許多。對此，老黑拋出了一個提問：如果下禮拜開始就不用再上班，第一件事要做什麼？</p>
			<p><br/></p>
			<p>很多人的答案會是休息、睡到飽。老黑笑說，他第一個月確實如此，但到第二個月睜開眼睛看著天花板，發現「沒有工作後的責任，比上班還重。」</p>
			<p><br/></p>
			<p>老黑表示，念書時期，不上學會被爸媽打；工作後，砸破三個鬧鐘還是要爬起來上班，都是被外界推著走，但退休後這些責任沒有了，「起床後要幹嘛，要自己思考」，<b>找到生活重心、值得活到100歲的事，是每個人都難以逃避的責任。</b></p>
			<p><br/></p>
			<p>「離職前幾年我大量看書和閱讀。」老黑說，工作後鮮少看工作之外的書，但決定要離職後，他把握出差搭飛機的空檔大量啃書，培養獨立思考，也從書中找回認識自己的能力，看多了就開始嘗試在部落格上發表文章，才發現自己其實能寫，「只是我從不知道。」</p>
			<p><br/></p>
			<p><br/></p>
			<div class="row">
				<div class="col-sm-12">
					<ImageContain :src="main5" :srcWeb="main5_web"/>
				</div>
				<div class="col-sm-6 left right-small mt-20">
					<ImageContain :src="main6" :srcWeb="main6_web"/>
				</div>
				<div class="col-sm-6 right-small mt-20">
					<ImageContain :src="main7" :srcWeb="main7_web"/>
				</div>
				<div class="img-say">從原本的職場「畢業」後，老黑寫作、出書，到各地演講分享經驗，也重拾年輕時喜愛的吉他，考取街頭藝人執照，在街頭演唱喜愛的歌曲。圖／老黑提供</div>
			</div>
			<p><br/></p>
			<p><br/></p>
			<h2>放下三件事 下半場人生更輕盈</h2>
			<p><br/></p>
			<p>離開職場10多年，老黑從沒有覺得無聊過。他說，這代人其實比上一代人彈性又自由許多，過往人生階段明確，「現在分上下半場就好」，上下半場都要持續學習、工作，差別是上半場多是別人推著做；下半場，追求的是自我實現。</p>
			<p><br/></p>
			<p><br/></p>
			<Quote text="＂上下半場之間不是靠制式的歲數區隔，而在心態的調整＂" />
			<p><br/></p>
			<p><br/></p>
			<p>老黑建議，錢、健康、人生職志，這三件事愈早開始準備愈好，同時，要開始準備心態，「必須懂得放下」，<strong>放下對錢的執著，夠用就好；放下面子，還有放下生死。</strong></p>
			<p><br/></p>
			<p>當街頭藝人時，很多人問他，「你以前是總經理，現在是街頭藝人，你怎麼調適自己？」但他認為，該調適的是社會眼光，若被眼光影響、放不下面子，倒楣的只是自己，「喜歡什麼就去做」。</p>
			<p><br/></p>
			<p>生死亦然。老黑認為，若把生死觀念帶進人生，就會發現自己其實沒有太多時間可以浪費、消磨，要開始規畫自己還有什麼事想做卻未做，開始想之後，人生的下半場就不會無聊。</p>
			<p><br/></p>
			<p><br/></p>
		</ContentContainer>
		<FixedBackground id="section-3" :src="main8" :srcWeb="main8_web" titletext1="以「一個人生活」想未來" titletext2="迎接人生延長賽" />
		<ContentContainer backgroundColor="#FFFFFF">
			<p><b>「求學時花20幾年才建構個人價值觀，老後人生也需要時間建構。」</b>魏惠娟表示，未來每個人的生涯規畫，時間軸都會拉得很長，每個人都沒經驗，但「有規畫和沒規畫會差很多」，有規畫者，更有機會活躍老化。</p>
			<p><br/></p>
			<p>魏惠娟建議，健康、財務，是開始準備的第一步，且不論有沒有小孩、配偶，都要以「一個人生活」的假設來思考未來，才能應付各種狀況。</p>
			<p><br/></p>
			<p><br/></p>
			<div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/nNXjZim2dRc?rel=0" frameborder="0" allowfullscreen></iframe>
            </div>
			<p><br/></p>
			<p><br/></p>
			<h2>財務觀：別依賴子女政府</h2>
			<p><br/></p>
			<p>「過於長壽，是考量退休財務時，必須納入的重要面向。」富蘭克林證券投顧研究部副總經理羅尤美指出，以往壽命沒那麼長，存款存夠、靠存款的利率就可以退休，但現在活更長物價漲幅遠高於存款利率，還有通貨膨脹風險，只靠儲蓄已經不夠，「儲蓄、保險，都不能算退休金準備。」</p>
			<p><br/></p>
			<p>羅尤美說，準備財務，首先要思考自己想過什麼樣的人生下半場，去設定需要的金額，扣除社會保險、政府退休金之後，計算出缺口，再依照自己距離退休的年數、財務狀況，選擇最適合的投資理財方式。</p>
			<p><br/></p>
			<p>羅尤美特別提醒，從過去主計總處的調查來看，退休後有3分之1的收入來源，來自子女奉養及政府年金，但未來少子女化趨勢持續，政府年金也都有可能變動，「壓這麼高的比率在自己無法控制的變數上，太危險」，建議退休所需的財務至少8成以上都要「靠自己」，才是安全做法。</p>
			<p><br/></p>
			<p><br/></p>
			<div class="tip">
				<h2>財務Tips</h2>
				<ul>
					<li>提高退休財務自主度，個人準備的退休金比率應達八成</li>
					<li>考量通膨</li>
					<li>儲蓄不等於投資，依個人狀況規畫投資</li>
				</ul>
			</div>
			<div id="draw-1"></div>
			<p><br/></p>
			<p><br/></p>
			<h2>健康觀：提早存大腦和肌肉本錢</h2>
			<p><br/></p>
			<p>「40、50歲這個年紀，可以做的就是『存老本』，減少失智、失能機會。」陳亮恭指出，要減少失智、失能，可以從飲食、運動、慢性疾病管理、生活型態調整及社會支持體系五大面向著手。</p>
			<p><br/></p>
			<p>陳亮恭說，要想90歲還能活蹦亂跳，重要的是要讓肌肉更強壯，因此飲食上要更著重蛋白質攝取，減緩老化過程中，肌肉流失的速度；運動同樣也要設法加強肌肉力量，可以透過健身做阻抗運動，強化肌肉本錢。</p>
			<p><br/></p>
			<p>降低罹患失智風險，飲食上可採取地中海飲食，但同時保持蛋白質攝取；運動則可做「複雜型運動」，如跳舞、打鼓等，這些運動除了活動身體，也需要記憶動作和節奏，是 一舉兩得的運動類型。</p>
			<p><br/></p>
			<p>「還有，要改變自己的人際關係。」陳亮恭說，臨床觀察，人愈來愈老，朋友也跟著愈來愈少，有些病人以前愛打麻將，但牌搭子過世之後，就再也不打牌了，興趣和社會互動瞬間斷裂，容易產生心理方面疾病。建議中年人在40、50歲時，就要多跟不同人互動、持續交新朋友，這樣的習慣才能一路保持到7、80歲。</p>
			<p><br/></p>
			<p><br/></p>
			<div id="draw-2"></div>
			<div class="tip" id="tip-2">
				<h2>健康Tips</h2>
				<ul>
					<li>提升蛋白質攝取，減少老年肌肉流失</li>
					<li>做複雜型的運動（如打鼓、跳舞）</li>
					<li>維持健康生活型態（早睡早起、少喝酒等）</li>
				</ul>
			</div>
			<p><br/></p>
			<p><br/></p>
			<h2>最難的人生觀：不斷向自己提問</h2>
			<p><br/></p>
			<p>健康、財富等「老本」都存足了之後，最困難但卻相當重要的，是找到自己活這麼長的人生目標。</p>
			<p><br/></p>
			<p><br/></p>
			<Quote text="＂若沒有一個到8、90歲還可以去追尋的夢想或重心，會活得很空虛＂" />
			<p><br/></p>
			<p><br/></p>
			<p>陳亮恭說，歐洲已慢慢出現因老後空虛產生的憂鬱問題，有些社工上門拜訪，會和老先生、老太太說「你很健康啊！這樣很好了」，但類似的話語，其實沒有辦法同理到長輩，「長輩會希望，我能站在跟你一樣的位置說這些話，而不是只能聽，希望自己能繼續對社會有貢獻。」</p>
			<p><br/></p>
			<p>輔大護理系助理教授蕭伃伶建議，陷入迷網的熟齡者，可以試著問問自己，「五年後想過什麼樣的生活？」「小時候最驕傲和懷念的事是什麼？」「若百歲壽終正寢時，希望別人怎麼形容自己？」不斷對自己提問，能幫助釐清自我，找到人生還未完成但想努力的目標。</p>
			<p><br/></p>
			<p>在找尋的過程中，則可以找一個一起規畫的夥伴。魏惠娟說，現在對退休人生的想像，還沒有足夠系統性的架構和討論，很容易在過程中迷失、挫折，夥伴可以是配偶，也可以是好友，若能有一個夥伴一起，可以互相扶持，「否則很容易因為被潑冷水，而走不下去。」</p>
			<p><br/></p>
			<p><br/></p>
			<div id="draw-3"></div>
			<div class="tip" id="tip-3">
				<h2>生涯Tips</h2>
				<ul>
					<li>思考下半場人生目標</li>
					<li>重組生活時間地圖</li>
					<li>找一個一起規劃的夥伴（親人、朋友都可）</li>
				</ul>
			</div>
			<p><br/></p>
			<p><br/></p>
			<h2>燦爛百歲 不只屬於少數人</h2>
			<p><br/></p>
			<p>要好好迎接老，除了個人努力，政府也可以扮演助力。陳亮恭指出，台灣現在花了很多時間談長照，這是對的，但思考高齡政策，不能只有長照，眼光也應該擴及剩下 8成健康長者，除了長照，應兼顧失智、失能等預防，「照顧社會弱勢、與避免讓更多人成為弱勢」，兩件事一樣重要。</p>
			<p><br/></p>
			<p>蕭伃伶也說，政府雖在104年端出高齡社會白皮書，內容提到要提供生活支持服務給健康老人，但台灣的高齡友善一直都做得不夠全面，現在由地方政府提計畫申請，零散、沒有完整的規畫與設計，容易流於枝微末節，世界衛生組織（WHO）已針對高齡友善城市訂出八大指標，應全面檢視，仔細規劃後系統性執行。</p>
			<p><br/></p>
			<p>不用害怕、焦慮「老」，但調整心態、做好準備迎接人生新階段，是已在「大齡」路上的人，最深刻的心得。提早規畫、思考自己的人生下半場，加上政府協力營造環境，才能讓長壽成為老天爺帶來的禮物，而不是ㄧ場災難。</p>
			<p><br/></p>
			<p><br/></p>
			<Share href="https://udn.com/upf/newmedia/2017_data/ideal/index.html"/>
			<Logo />
			<p><br/></p>
			<Editor>
				<div>文字：洪欣慈、蔡佩蓉</div>
				<div>視覺設計、影音：張心慈</div>
				<div>插畫：黃微庭</div>
				<div>網頁製作：鄭偉廷</div>
				<div>攝影：鄭超文、黃義書、王騰毅</div>
				<div>議題行銷：張乃文、蔡嘉棋、盧巧梅</div>
				<div>場地提供：Fujin Tree Landmark Cafe</div>
				<div>2017.10.30</div>
			</Editor>
			<p><br/></p>
			<Relate>
				<a href="./wang.html" target="_blank" slot="relate-1">
					<img class="lazyload" :data-src="relate2"/>
					<p>金鐘影后王琄：允許大齡的自己，像小baby從頭學走路</p>
				</a>
				<a href="./xie.html" target="_blank" slot="relate-2">
					<img class="lazyload" :data-src="relate3"/>
					<p>廟口也能是舞台 謝哲青想的「退休」不一樣</p>
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
			<FBComment href="https://udn.com/upf/newmedia/2017_data/ideal/index.html" />
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
import FixedBackground from '@/components/FixedBackgroundTitle.vue'
import Quote from '@/components/Quote.vue'
import ImageContain from '@/components/ImageContain.vue'
import Logo from '@/components/Logo.vue'
import Editor from '@/components/Editor.vue'
import Relate from '@/components/Relate.vue'
import Relate3 from '@/components/Relate3.vue'
import FBComment from '@/components/FBComment.vue'
import Foot from '@/components/Footer.vue'

import chart1 from '@/assets/chart_main1.jpg'

import bg from '@/assets/cover_main.jpg'
import bg_web from '@/assets/web/cover_main.jpg'

import main1 from '@/assets/main1.jpg'
import main2 from '@/assets/main2.jpg'
import main3 from '@/assets/main3.jpg'
import main4 from '@/assets/main4.jpg'
import main5 from '@/assets/main5.jpg'
import main6 from '@/assets/main6.jpg'
import main7 from '@/assets/main7.jpg'
import main8 from '@/assets/main8.jpg'

import main1_web from '@/assets/web/main1.jpg'
import main2_web from '@/assets/web/main2.jpg'
import main3_web from '@/assets/web/main3.jpg'
import main4_web from '@/assets/web/main4.jpg'
import main5_web from '@/assets/web/main5.jpg'
import main6_web from '@/assets/web/main6.jpg'
import main7_web from '@/assets/web/main7.jpg'
import main8_web from '@/assets/web/main8.jpg'

import famous1 from '@/assets/famous1.jpg'
import famous2 from '@/assets/famous2.jpg'
import famous3 from '@/assets/famous3.jpg'

import relate2 from '@/assets/relate2.jpg'
import relate3 from '@/assets/relate3.jpg'
import relate4 from '@/assets/relate4.jpg'
import relate5 from '@/assets/relate5.jpg'

export default {
	data: function(){
		return{
			bg: bg,
			bg_web: bg_web,
			chart1: chart1,
			main1: main1,
			main2: main2,
			main3: main3,
			main4: main4,
			main5: main5,
			main6: main6,
			main7: main7,
			main8: main8,
			main1_web: main1_web,
			main2_web: main2_web,
			main3_web: main3_web,
			main4_web: main4_web,
			main5_web: main5_web,
			main6_web: main6_web,
			main7_web: main7_web,
			main8_web: main8_web,
			famous1: famous1,		
			famous2: famous2,
			famous3: famous3,
			relate2: relate2,
			relate3: relate3,
			relate4: relate4,
			relate5: relate5,
		}
	},
	components: {
    	Indicator, HeadBar, CoverFixedBg, ContentContainer, Share, Quote, ImageContain, FixedBackground, Logo, Editor, Relate, Relate3, FBComment, Foot
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


 /*IE10+ */
 @media all and (-ms-high-contrast:none), all and (-ms-high-contrast:active) {
 	#chart-1 {
 		height: 566px;
 	}

	#draw-1,#draw-2,#draw-3 {
		height: 800px;
	}
 }
 /* Microsoft Edge Browser 12,13 only - @supports method */

 @supports (-ms-accelerator:true) {
 	#chart-1 {
 		height: 566px;
 	}

	#draw-1,#draw-2,#draw-3 {
		height: 800px;
	}
 
 }
 /* Microsoft Edge Browser 12+ (All) - @supports method */

 @supports (-ms-ime-align:auto) {
	#chart-1 {
		height: 566px;
	}

	#draw-1,#draw-2,#draw-3 {
		height: 800px;
	}
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
	.right-small{
		margin-top: 20px;
	}
	.tip{
		padding: 30px 20px;
	}

	.tip h2{
		text-align: center;
	}

	#tip-2{
		margin-top: -72px;
	}
	#tip-3{
		margin-top: -40px;
	}
}

@media screen and (min-width: 768px) and (max-width: 1024px){
	#cover h1{
		padding: 0 20px;
		bottom: 64px;
		text-align: left;
		letter-spacing: -1.2px;
		position: absolute;
		font-weight: bold;
		line-height: 1.5;
	}
	.tip{
		padding: 30px 20px;
	}
	.col-sm-6.left{
		padding-right: 10px;
	}
	.col-sm-6.right-small{
		padding-left: 10px;
	}
}

@media screen and (min-width: 1025px){
	.mt-20{
		margin-top: 20px;
	}
	.col-sm-6.left{
		padding-right: 10px;
	}
	.col-sm-6.right-small{
		padding-left: 10px;
	}
	.col-sm-6.left.right-small{
		padding-left: 0;
	}
	/*#cover h1{
		position: absolute;
		font-weight: bold;
		letter-spacing: -1.7px;
		line-height: 1.36;
		width: 495px;
		left: 232px;
		height: 211px;
		bottom: 10%;
	}*/
	
	#cover h1 {
		position: absolute;
		font-weight: bold;
		letter-spacing: -1.7px;
		line-height: 1.36;
		width: 495px;
		/* left: 536px; */
		height: 211px;
		/* bottom: 35%; */
		text-shadow: 0 0px 10px rgba(0, 0, 0, .2);
		text-align: right;
		left: 50%;
		top: 50%;
		transform: translateX(-90%) translateY(-60%);
	}

	#draw-1{
		margin-top: -90px;
	}
	#tip-2{
		margin-top: -160px;
	}
	#tip-3{
		margin-top: -90px;
	}
}

a, a:hover, a:active, a:visited, a:focus {
    text-decoration:none;
}

</style>

