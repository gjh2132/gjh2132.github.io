
/*字符拼接区*/
var introduce =' \/*\n  * Hi,周紫瑶 \n  * 我寻思着送你一份特别的七夕礼物，先想着给你画幅画，结果带了画板没带画笔 \n  * 作为一个用心的礼物,当然要用时间浇筑了,就送你张网页吧~别嫌弃哟~  \n  * 我现在要在这个空白的网页上加点东西\n */';
	var sty1='\n  /* 首先改变一下背景吧~ 仙女要粉粉的~ */ \n  body{\n\t background:-webkit-linear-gradient(#f54ea2,#ff7676);\n\t font-family:"微软雅黑";\n   }\n   /* 我们接下来要有个写代码的地方~ */\n   #wrap{\n\t overflow:auto;\n\t width:40%;\n\t height:420px;\n\t border-radius:5px;\n\t box-shadow:0 0 15px #fff;\n\t font-size:14px;\n\t font-weight:bold;\n   }';
	var trs1 = '\n  \/* 代码太丑了,我们用你喜欢的颜色,加一些高亮~ *\/';
var lightheight = '\n  #wrap{\n\t background:#002B36;\n\t color: #BE84F2;\n   }\n  .token.property{\n\t color:#64d5ea;\n   }\n   .token.comment{\n\t color:857F6B;\n   }\n';
	var trs2 = '  \/* 接下来才是我想要对你说的话~那么就先让代码到一边凉快一会儿~ *\/';
    var scrollRight = '\n  #wrap{\n\t transform: rotateY(-10deg);\n\t position:fixed;\n\t left:53%;\n\t top: 4%;\n\t height: 85%\n   } \n   \/* 我想好了,现在我需要一张信纸 *\/\n  ';
var drawBoard = '#loveme{\n\t background: url(../1.png);\n\t overflow:auto;\n\t position:fixed;\n\t top:40px;\n\t left:5%;\n\t width:40%;\n\t height:85%;\n\t color:#000;\n\t white-space: pre-wrap;\n\t box-shadow:0 0 15px #fff;\n\t border-radius:5px;\n\t transform:rotateY(10deg);\n   }';
var loveme = '\n<p>瑶瑶:<p>一定是特别的缘分~我们才可以一路走来，走在一起,我多爱你几分,你多还我几分,找幸福的从此不再是一个人!</p></p><h2>在第一次见面的时候</h2><p>还记得来参加学创杯比赛的时候,感觉你很俏皮,有一点点熟悉感,我问你周紫瑶是谁,你举着小手歪着头说：“是我，怎么了。”然后搭上了话，你也看出来我不是很喜欢说话，没几句就匆匆结束了。鬼父神差之下我们还是留了联系方式，也是我们的开始。</p><h2>最好的回忆</h2><p>说来也算我们第一次约会，相约去看动物园，那天我怕太阳太晒，还特意带来伞，结果也没用上，还记得我带了束小花吗？什么花还记得吗？在路上我可没少给花整理，这家老板不太会包花，路上我还给花拍照了呢，你要想看的话我回头给你看。后面就买水等你，遗憾呢是我喊你瑶瑶你竟然兴奋地没听得到，然后一起吃了大排档，接着就是逛了动物园，然后一起喝茶，临别前过马路才鼓起勇气牵了你的手，上车前亲吻了你的手和头发，道了别恋恋不舍的上了车。</p><h2>七夕快乐！</h2><p>亲爱的，七夕佳节，愿我们的爱情如同这璀璨的星空，永恒而美丽。在这特别的日子里，我想对你说：\n你是我生命中最美的遇见，如同夜空中最亮的星，照亮我前行的道路。你的笑容，是我心中最温柔的阳光，无论风雨变换，都让我感到温暖和安心。\n愿我们的爱情如同织女牛郎般，虽然相隔千山万水，但心始终紧紧相连。无论未来的路有多么遥远和艰难，我都愿意牵着你的手，一起走过每一个春夏秋冬。\n在这个充满浪漫和温馨的节日里，我想送给你最真挚的祝福：愿我们的爱情永远甜蜜如初，愿我们的每一天都充满幸福和快乐。愿我们的心永远紧紧相依，共同创造属于我们的美好未来。\n七巧快乐，我最爱的宝贝！</p><h2>Ending</h2><div><p>You are my today and all of my tomorrows.<br>你是我的今天和所有的明天。</p></div>';
var trs3 = ' \n   \/* 这个看起来不太好看的样子,需要稍作修改好看一丢丢 *\/\n   #loveme h2{\n\t display: inline-block;\n\t border-bottom: 1px solid;\n\t margin: 1em 0 .5em;\n\t font-size: 15px;\n\t font-weight: 700;\n\t line-height: 2;\n\t font-family: microsoft yahei;\n   }\n   #loveme p{\n\t line-height: 1.8;   }\n   #loveme div p{\n\t margin: 1em;\n\t padding: .5em;\n\t background: rgba(221,221,221,.5);\n   }\n\t\/*美感不怎么滴,只能这样了~*/';/* *** 最后为大家带来一个小惊喜，倒数三个数  \n\t* 3\n\t* 2\n\t* 1\n\t*** */
	var str = introduce.concat(sty1).concat(trs1).concat(lightheight).concat(trs2).concat(scrollRight).concat(drawBoard).concat(loveme).concat(trs3);


	var styleTag = document.getElementById('styleTag');
	var sourceBoard = document.getElementById('wrap');
	var n = 0;

var controller= setInterval(put,40);
	 function put(){

			n++;

			if(n>0&&n<=988){
					sourceBoard.innerHTML =str.substring(0,n)

				styleTag.innerHTML =str.substring(0,n);

			}

			if(n>=295){
					$('#wrap').animate({
						scrollTop: 1000
						}, 50);
			}

			if(n>=478&&n<=988){
				sourceBoard.innerHTML =  Prism.highlight(str.substring(0,n), Prism.languages.css);

			}

			if(n>=690&&n<=988){

				if(document.getElementById('loveme')){
					console.log('loveme元素已经存在');

				}
				else{
					var drawBoard = document.createElement('pre');
				    drawBoard.id = 'loveme';
				    document.body.appendChild(drawBoard);

				}

			}

			if(n>988&&n<1811){
			var drawBoard = document.getElementById('loveme');
				drawBoard.innerHTML =str.substring(988,n);
					$('#loveme').animate({
						scrollTop: 1000
						}, 50);
			}

			if(n>=1811){
				sourceBoard.innerHTML +=str.substring(n,n+1)
			    styleTag.innerHTML +=str.substring(n,n+1);
				// sourceBoard.innerHTML =  Prism.highlight(str.substring(0,976), Prism.languages.css)

			}
	     if(n>=1811){
	     	  sourceBoard.innerHTML =  Prism.highlight(str.substring(0,988), Prism.languages.css)+Prism.highlight(str.substring(1811,n), Prism.languages.css);

	     }

		if(n>str.length){window.clearInterval(controller)}





};
