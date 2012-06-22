
chapters[3] = {
	
	0: {
		'info': "You log in to the network."
		,'options-text': {
			0:"Spoof MAC address and run proxy algo"
		}
		,'options-redirect': {
			0:1
		},
		'update': function(){
			playAudio(8);
			document.body.style.backgroundColor = "#000";
			document.body.style.color = "#fff";
			drawCanvas3(document.getElementById('top'), false);
			pingbitch1 = false;
			pingbitch2 = false;
		}
	},
	1: {
		'info': "You get your connection spoofed and proxied. Now what?"
		,'options-text': {
			0:"Check Y€ boards",
			1:"Check for encoded messages",
			2:"Ping bitch1",
			3:"Ping bitch2",
			4:"Porn"
		}
		,'options-redirect': {
			0:2,
			1:3,
			2:function(){ return (pingbitch1?4:5) },
			3:function(){ return (pingbitch2?6:7) },
			4:8
		}
	},
	2: {
		'info': "Nothing new at the Y€ boards."
		,'options-text': {
			0:"Check for encoded messages",
			1:"Ping bitch1",
			2:"Ping bitch2"
		}
		,'options-redirect': {
			0:3,
			1:function(){ return (pingbitch1?4:5) },
			2:function(){ return (pingbitch2?6:7) },
		}
	},
	3: {
		'info': "No new messages."
		,'options-text': {
			0:"Check Y€ boards",
			1:"Ping bitch1",
			2:"Ping bitch2"
		}
		,'options-redirect': {
			0:2,
			1:function(){ return (pingbitch1?4:5) },
			2:function(){ return (pingbitch2?6:7) },
		}
	},
	4: {
		'info': "What's the point of pinging him again?"
		,'options-text': {
			0:"Check Y€ boards",
			1:"Check for encoded messages",
			2:"Ping bitch2"
		}
		,'options-redirect': {
			0:2,
			1:3,
			2:function(){ return (pingbitch2?6:7) },
		}
	},
	5: {
		'info': "<div id=\"comic\"></div>"
		,'options-text': {
			0:"Reply"
		}
		,'options-redirect': {
			0:9
		}
		,'update': function(){
			pingbitch1_1_ch3(document.getElementById('comic'));
			pingbitch1 = true;
		}
	},
	6: {
		'info': "No use pinging him again, he's not online..."
		,'options-text': {
			0:"Check Y€ boards",
			1:"Check for encoded messages",
			2:"Ping bitch1"
		}
		,'options-redirect': {
			0:2,
			1:3,
			2:function(){ return (pingbitch2?4:5) },
		}
	},
	7: {
		'info': "<div id=\"comic\"></div>"
		,'options-text': {
			0:"Reply"
		}
		,'options-redirect': {
			0:11
		}
		,'update': function(){
			pingbitch2_1_ch3(document.getElementById('comic'));
			pingbitch2 = true;
		}
	},
	8: {
		'info': "Seriously? You really think your hands should be handling other things right now?"
		,'options-text': {
			0:"Check Y€ boards",
			1:"Check for encoded messages",
			2:"Ping bitch1",
			3:"Ping bitch2"
		}
		,'options-redirect': {
			0:2,
			1:3,
			2:function(){ return (pingbitch1?4:5) },
			3:function(){ return (pingbitch2?6:7) },
		}
	},
	9: {
		'info': "<div id=\"comic\"></div>"
		,'options-text': {
			0:"Reply"
		}
		,'options-redirect': {
			0:12
		}
		,'update': function(){
			pingbitch1_2_ch3(document.getElementById('comic'));
		}
	},
	10: {
		'info': "You could drop a message on the boards to get others to be on the lookout for bitch2. Someone must have access to Jap surveillance decoders..."
		,'options-text': {
			0:"Write message"
		}
		,'options-redirect': {
			0:18
		}
	},
	11: {
		'info': "<div id=\"comic\"></div>"
		,'options-text': {
			0:"Reply",
			1:"Quit Session"
		}
		,'options-redirect': {
			0:14,
			1:16
		}
		,'update': function(){
			pingbitch2_2_ch3(document.getElementById('comic'));
		}
	},
	12: {
		'info': "<div id=\"comic\"></div>"
		,'options-text': {
			0:"Quit session"
		}
		,'options-redirect': {
			0:13
		}
		,'update': function(){
			pingbitch1_3_ch3(document.getElementById('comic'));
		}
	},
	13: {
		'info': "Bitch1 hasn't seen him either. What now?"
		,'options-text': {
			0:"Check Y€ boards",
			1:"Check for encoded messages",
			2:"Ping bitch2"
		}
		,'options-redirect': {
			0:2,
			1:3,
			2:function(){ return (pingbitch2?6:7) },
		}
	},
	14: {
		'info': "<div id=\"comic\"></div>"
		,'options-text': {
			0:"Reply",
			1:"Quit Session"
		}
		,'options-redirect': {
			0:15,
			1:16
		}
		,'update': function(){
			pingbitch2_3_ch3(document.getElementById('comic'));
		}
	},
	15: {
		'info': "<div id=\"comic\"></div>"
		,'options-text': {
			0:"Quit Session"
		}
		,'options-redirect': {
			0:16
		}
		,'update': function(){
			pingbitch2_4_ch3(document.getElementById('comic'));
		}
	},
	16: {
		'info': "If they double-backed to bitch2's place that means they haven't got him yet. But apparently they managed to get him banned. They had been threatening to do so all along. That's what you came to Japan to prevent. Big brother will now be looking for your bitch2. You need to move fast!"
		,'options-text': {
			0:"Check Y€ boards",
			1:"Ping bitch1"
		}
		,'options-redirect': {
			0:10,
			1:17
		}
		,'update': function(){
			pingbitch1 = false;
		}
	},
	17: {
		'info': "<div id=\"comic\"></div>"
		,'options-text': {
			0:"Reply"
		}
		,'options-redirect': {
			0:22
		}
		,'update': function(){
			pingbitch1_1_ch3_2(document.getElementById('comic'));
			pingbitch1 = true;
		}
	},
	18: {
		'info': "You write a message on the boards calling all Y€ hackers to help you save your bitch. You need to track him down before big brother gets to him. Want to attach his dox?"
		,'options-text': {
			0:"Attach dox",
			1:"Don't attach dox"
		}
		,'options-redirect': {
			0:19,
			1:20
		}
	},
	19: {
		'info': "He's already exposed to the koreans, and they most probably already exposed him to big brother so it doesn't really matter if your hacker friends know his dox. Might help them track him down though."
		,'options-text': {
			0:function(){ return (pingbitch1?"Wait for replies":"Ping bitch1") }
		}
		,'options-redirect': {
			0:function(){ return (pingbitch1?21:17) }
		}
		,'update': function(){
			bitch_dox = true;
		}
	},
	20: {
		'info': "You decide not to publish the dox on your bitch. It's kind of hard for anyone to track someone down when they don't know who they are searching for. You'll never hear from your bitch again."
	},	
	21: {
		'info': "Waiting around was never your forte... But it's not like you know where to go if you log out either..."
		,'options-text': {
			0:"Wait",
			1:"Log out" 
		}
		,'options-redirect': {
			0:24,
			1:25
		}
	},
	22: {
		'info': "<div id=\"comic\"></div>"
		,'options-text': {
			0:"Quit session"
		}
		,'options-redirect': {
			0:23
		}
		,'update': function(){
			pingbitch1_2_ch3_2(document.getElementById('comic'));
		}
	},
	23: {
		'info': "At this point the more eyes looking for bitch2 the better."
		,'options-text': {
			0:function(){ return (bitch_dox?"Wait for replies":"Check Y€ boards") }
		}
		,'options-redirect': {
			0:function(){ return (bitch_dox?21:10) }
		}
	},
	24: {
		'info': "One new message!"
		,'options-text': {
			0:"Decode"
		}
		,'options-redirect': {
			0:26
		}
	},
	25: {
		'info': "You log out and wander around town looking for your bitch. You never see him again."
	},
	26: {
		'info': "<span id=\"decoded_message\"></span><br><br>What do you want to do now?"
		,'options-text': {
			0:"Wait",
			1:"Log out"
		}
		,'options-redirect': {
			0:27,
			1:25
		}
		,'update': function(){
			decode_message("Hei T. Sorry to hear about your bitch, i used to know a guy with some codes to the Japan transit surveillance system. I'll give him a ping and get back to you in a few. -- jstone");
		}
	},
	27: {
		'info': "One new message!"
		,'options-text': {
			0:"Decode"
		}
		,'options-redirect': {
			0:48
		}
	},
	28: {
		'info': "<div id=\"comic\"></div>"
		,'options-text': {
			0:"Reply"
		}
		,'options-redirect': {
			0:29
		}
		,'update': function(){
			pingjakim_2(document.getElementById('comic'));
		}
	},
	29: {
		'info': "<div id=\"comic\"></div>"
		,'options-text': {
			0:"Reply"
		}
		,'options-redirect': {
			0:30
		}
		,'update': function(){
			pingjakim_3(document.getElementById('comic'));
		}
	},
	30: {
		'info': "<div id=\"comic\"></div>"
		,'options-text': {
			0:"Reply"
		}
		,'options-redirect': {
			0:31
		}
		,'update': function(){
			pingjakim_4(document.getElementById('comic'));
		}
	},
	31: {
		'info': "<div id=\"comic\"></div>"
		,'options-text': {
			0:"Reply"
		}
		,'options-redirect': {
			0:32
		}
		,'update': function(){
			pingjakim_5(document.getElementById('comic'));
		}
	},
	32: {
		'info': "<div id=\"comic\"></div>"
		,'options-text': {
			0:"Reply"
		}
		,'options-redirect': {
			0:33
		}
		,'update': function(){
			pingjakim_6(document.getElementById('comic'));
		}
	},
	33: {
		'info': "<div id=\"comic\"></div>"
		,'options-text': {
			0:"Quit session"
		}
		,'options-redirect': {
			0:34
		}
		,'update': function(){
			pingjakim_7(document.getElementById('comic'));
		}
	},	
	34: {
		'info': "One new message!"
		,'options-text': {
			0:"Decode"
		}
		,'options-redirect': {
			0:35
		}
	},
	35: {
		'info': "<span id=\"decoded_message\"></span><br><br>What do you want to do now?"
		,'options-text': {
			0:"Wait",
			1:"Log out"
		}
		,'options-redirect': {
			0:36,
			1:25
		}
		,'update': function(){
			decode_message("Hei again. Sorry, bad news. Seems my guy got flagged earlier this week, drones got him. Can't help you! -- jstone");
		}
	},
	36: {
		'info': "One new message!"
		,'options-text': {
			0:"Decode"
		}
		,'options-redirect': {
			0:37
		}
	},
	37: {
		'info': "<span id=\"decoded_message\"></span><br><br>What do you want to do now?"
		,'options-text': {
			0:"Ping SAt0ri",
			1:"Log out"
		}
		,'options-redirect': {
			0:38,
			1:25
		}
		,'update': function(){
			decode_message("Heard you need Japanese eyes. Ping me if you can afford 5k to get them. -- SAt0ri");
		}
	},
	38: {
		'info': "<div id=\"comic\"></div>"
		,'options-text': {
			0:"Reply"
		}
		,'options-redirect': {
			0:39
		}
		,'update': function(){
			pingsatori_1(document.getElementById('comic'));
		}
	},
	39: {
		'info': "<div id=\"comic\"></div>"
		,'options-text': {
			0:"Reply"
		}
		,'options-redirect': {
			0:40
		}
		,'update': function(){
			pingsatori_2(document.getElementById('comic'));
		}
	},
	40: {
		'info': "<div id=\"comic\"></div>"
		,'options-text': {
			0:"Reply"
		}
		,'options-redirect': {
			0:41
		}
		,'update': function(){
			pingsatori_3(document.getElementById('comic'));
		}
	},
	41: {
		'info': "<div id=\"comic\"></div>"
		,'options-text': {
			0:"Reply"
		}
		,'options-redirect': {
			0:42
		}
		,'update': function(){
			pingsatori_4(document.getElementById('comic'));
		}
	},
	42: {
		'info': "<div id=\"comic\"></div>"
		,'options-text': {
			0:"Reply"
		}
		,'options-redirect': {
			0:43
		}
		,'update': function(){
			pingsatori_5(document.getElementById('comic'));
		}
	},
	43: {
		'info': "<div id=\"comic\"></div>"
		,'options-text': {
			0:"Reply"
		}
		,'options-redirect': {
			0:44
		}
		,'update': function(){
			pingsatori_6(document.getElementById('comic'));
		}
	},
	44: {
		'info': "<div id=\"comic\"></div>"
		,'options-text': {
			0:"Reply",
			1:"Quit Session"
		}
		,'options-redirect': {
			0:45,
			1:47
		}
		,'update': function(){
			pingsatori_7(document.getElementById('comic'));
		}
	},
	45: {
		'info': "<div id=\"comic\"></div>"
		,'options-text': {
			0:"Quit Session"
		}
		,'options-redirect': {
			0:46
		}
		,'update': function(){
			pingsatori_8(document.getElementById('comic'));
		}
	},
	46: {
		'info': "Things aren't looking so good. You feel so helpless in this position."
		,'options-text': {
			0:"Wait",
			1:"Log out"
		}
		,'options-redirect': {
			0:47,
			1:25
		}
	},
	47: {
		'info': "One new message!"
		,'options-text': {
			0:"Decode"
		}
		,'options-redirect': {
			0:50
		}
	},
	48: {
		'info': "<span id=\"decoded_message\"></span><br><br>What do you want to do now?"
		,'options-text': {
			0:"Ping Jakim",
			1:"Log out"
		}
		,'options-redirect': {
			0:49,
			1:25
		}
		,'update': function(){
			decode_message("Hello. You can try getting in touch with the krommers. They had some runners in Japan who were watching over big brother. They might still be pissed with Y€ over that mexico thing though. But ping Jakim, he might pull some strings. -- mfX");
		}
	},
	49: {
		'info': "<div id=\"comic\"></div>"
		,'options-text': {
			0:"Reply"
		}
		,'options-redirect': {
			0:28
		}
		,'update': function(){
			pingjakim_1(document.getElementById('comic'));
		}
	},
	50: {
		'info': "<span id=\"decoded_message\"></span><br><br>What do you want to do now?"
		,'options-text': {
			0:"Wait",
			1:"Log out"
		}
		,'options-redirect': {
			0:51,
			1:25
		}
		,'update': function(){
			decode_message("Dear T5, i read you might require assistance in the matter of realtime Japanese surveillance interception on the risk of losing your bitch. Once a newb always a newb. -- nothing");
		}
	},
	51: {
		'info': "Where are all your hacker friends when you need them?"
		,'options-text': {
			0:"Wait",
			1:"Log out"
		}
		,'options-redirect': {
			0:52,
			1:25
		}
	},
	52: {
		'info': "One new message!"
		,'options-text': {
			0:"Decode"
		}
		,'options-redirect': {
			0:53
		}
	},
	53: {
		'info': "<span id=\"decoded_message\"></span><br><br>What do you want to do now?"
		,'options-text': {
			0:"Ping Jakim",
			1:"Log out"
		}
		,'options-redirect': {
			0:54,
			1:25
		}
		,'update': function(){
			decode_message("Jakim tells me you need some assistance. Ain't that a bummer?! Remember mexico? I do! -- kooi / krommers");
		}
	},
	54: {
		'info': "<div id=\"comic\"></div>"
		,'options-text': {
			0:"Reply"
		}
		,'options-redirect': {
			0:55
		}
		,'update': function(){
			pingjakim_8(document.getElementById('comic'));
		}
	},
	55: {
		'info': "<div id=\"comic\"></div>"
		,'options-text': {
			0:"Quit Session"
		}
		,'options-redirect': {
			0:56
		}
		,'update': function(){
			pingjakim_9(document.getElementById('comic'));
		}
	},
	56: {
		'info': "All you can do is wait..."
		,'options-text': {
			0:"Wait",
			1:"Log out"
		}
		,'options-redirect': {
			0:function(){ return (oxypadronamedival?74:57) },
			1:25
		}
	},
	57: {
		'info': "One new message!"
		,'options-text': {
			0:"Decode"
		}
		,'options-redirect': {
			0:58
		}
	},
	58: {
		'info': "<span id=\"decoded_message\"></span><br><br>What do you want to do now?"
		,'options-text': {
			0:"Ping jstone",
			1:"Log out"
		}
		,'options-redirect': {
			0:59,
			1:25
		}
		,'update': function(){
			decode_message("Can you hack level 5 bsd kernel ice? Just got reminded my guy left a couple private servers hanging around at a datacenter in Joansburg, might have some useful codes if you ice it and crawl it fast enough... -- jstone");
		}
	},
	59: {
		'info': "<div id=\"comic\"></div>"
		,'options-text': {
			0:"Reply"
		}
		,'options-redirect': {
			0:60
		}
		,'update': function(){
			pingjstone_1(document.getElementById('comic'));
		}
	},
	60: {
		'info': "<div id=\"comic\"></div>"
		,'options-text': {
			0:"Quit Session"
		}
		,'options-redirect': {
			0:114
		}
		,'update': function(){
			pingjstone_2(document.getElementById('comic'));
		}
	},
	61: {
		'info': "<div id=\"comic\"></div>"
		,'options-text': {
			0:"Reply"
		}
		,'options-redirect': {
			0:62
		}
		,'update': function(){
			pingbitch1_1_ch3_3(document.getElementById('comic'));
		}
	},
	62: {
		'info': "<div id=\"comic\"></div>"
		,'options-text': {
			0:"Reply"
		}
		,'options-redirect': {
			0:63
		}
		,'update': function(){
			pingbitch1_2_ch3_3(document.getElementById('comic'));
		}
	},
	63: {
		'info': "<div id=\"comic\"></div>"
		,'options-text': {
			0:"Reply"
		}
		,'options-redirect': {
			0:64
		}
		,'update': function(){
			pingbitch1_3_ch3_3(document.getElementById('comic'));
		}
	},
	64: {
		'info': "You should be able to hack the machines up at Tork 5 if you get the zot access... Might take a while crawling for the codes to run the surveillance vulnerability though. If it hasn't been patched yet. If they are even there. Just have to wait for bitch1 to hook you up."
		,'options-text': {
			0:"Wait",
			1:"Log out"
		}
		,'options-redirect': {
			0:65,
			1:25
		}
	},
	65: {
		'info': "One new message!"
		,'options-text': {
			0:"Decode"
		}
		,'options-redirect': {
			0:66
		}
	},
	66: {
		'info': "<span id=\"decoded_message\"></span><br><br>Could be just another scam. The hook up to the zot in Tork 5 is now also available. What do you want to do? Every second counts..."
		,'options-text': {
			0:"Ping SAt0ri",
			1:"Follow zot hook to Tork 5"
		}
		,'options-redirect': {
			0:67,
			1:68
		}
		,'update': function(){
			decode_message("Talked with partner. We can get you surveillance logs of last hour. Ping me if you can afford 15k to get them. -- SAt0ri");
		}
	},
	67: {
		'info': "<div id=\"comic\"></div>"
		,'options-text': {
			0:"Reply"
		}
		,'options-redirect': {
			0:69
		}
		,'update': function(){
			pingsatori_9(document.getElementById('comic'));
		}
	},
	68: {
		'info': "It's never wise to trust strangers trying to sell you things on the internet. But hacking machines to look for codes which might not even be there just takes way too long. Hacking the machine was no problem, but by the time you found the codes and penetrated the Japanese surveillance system your bitch was already captured by drones."
	},
	69: {
		'info': "<div id=\"comic\"></div>"
		,'options-text': {
			0:"Reply"
		}
		,'options-redirect': {
			0:70
		}
		,'update': function(){
			pingsatori_10(document.getElementById('comic'));
		}
	},
	70: {
		'info': "<div id=\"comic\"></div>"
		,'options-text': {
			0:"Pay",
			1:"Quit Session"
		}
		,'options-redirect': {
			0:71,
			1:72
		}
		,'update': function(){
			pingsatori_11(document.getElementById('comic'));
		}
	},
	71: {
		'info': "You decide to pay. You handle the transaction and notify SAt0ri. Now all you can do is wait and hope he didn't rip you off... Or go for the Tork 5 run..."
		,'options-text': {
			0:"Wait",
			1:"Hook up to Tork 5"
		}
		,'options-redirect': {
			0:78,
			1:68
		}
	},
	72: {
		'info': "What do you want to do?"
		,'options-text': {
			0:"Wait",
			1:"Hook up to Tork 5",
			2:"Log out"
		}
		,'options-redirect': {
			0:73,
			1:68,
			2:25
		}
	},
	73: {
		'info': "You been waiting around for a miracle for far too long. Time to face reality, your second bitch is already gone. You failed him."
	},
	74: {
		'info': "You\'re starting to feel a little lightheaded... One new message!"
		,'options-text': {
			0:"Decode"
		}
		,'options-redirect': {
			0:75
		}
	},
	75: {
		'info': "<span id=\"decoded_message\"></span><br><br>You start to feel sick."
		,'options-text': {
			0:"Wait a moment",
			1:"Log out"
		}
		,'options-redirect': {
			0:76,
			1:77
		}
		,'update': function(){
			decode_message("Can you hack level 5 bsd kernel ice? Just got reminded my friend left a couple private servers hanging around at a datacenter in Joansburg, might have some useful codes if you ice it and crawl it fast enough... -- jstone");
			brainfuck = true;
		}
	},
	76: {
		'info': "You're not quite sure what the hell is happening. But you do know this isn't normal. You are in no condition to stay logged in."
		,'options-text': {
			0:"Log out"
		}
		,'options-redirect': {
			0:77
		}
	},
	77: {
		'info': "You log out and crawl into the fetal position, hoping that whatever this is might pass soon. You had never heard of adverse effects of Oxypadronamedival before. You had never heard of Oxypadronamedival at all until earlier today. Apparently it messes with your synapses, highly unrecommended for network runners such as yourself... You are in no condition to try to help your bitch anymore. Ain't that a bummer?"
		,'update': function() {
			document.body.style.backgroundColor = "#FFF";
			document.body.style.color = "#000";
		}
	},
	78: {
		'info': "Only a few seconds have passed but it feels like hours. Are you really just going to sit and wait for these promised logs to fall on your lap 'sometime soon'?"
		,'options-text': {
			0:"Wait",
			1:"Hook up to Tork 5"
		}
		,'options-redirect': {
			0:79,
			1:68
		}
	},
	79: {
		'info': "One new message! This better be it!"
		,'options-text': {
			0:"Decode"
		}
		,'options-redirect': {
			0:80
		}
	},
	80: {
		'info': "<span id=\"decoded_message\"></span>"
		,'options-text': {
			0:"Take a look"
		}
		,'options-redirect': {
			0:81
		}
		,'update': function(){
			decode_message("Here are the Japanese transit surveillance system logs for the last hour. Pleasure doing business with you. -- SAt0ri");
		}
	},
	81: {
		'info': "Quite a lot of data. On first impression they seem legit. Better get your script crawling for relevant info."
		,'options-text': {
			0:"Crawl Data"
		}
		,'options-redirect': {
			0:82
		}
		,'update': function(){
			//playAudio(10);
		}
	},
	82: {
		'info': "You crawl the data looking for matches to bitch2... 2 hits!<br>Flagged for child pornography at 120613-540<br>Spotted at cam PA012 120613-551<br>Spotted at cam PA013 120613-552<br>Spotted at cam PA017 120613-552<br>Drone pursuit engaged 120613-553<br>Drone pursuit abandoned 120613-555<br>Spotted at cam YA007 120613-612<br><br>That was just a couple minutes ago."
		,'options-text': {
			0:"Locate cam YA007"
		}
		,'options-redirect': {
			0:83
		}
	},
	83: {
		'info': "You run some scripts to locate cam YA007... Side street of Shin-Nihombashi Station... What will you do now? You have no time to lose!"
		,'options-text': {
			0:"Write on boards",
			1:"Inform bitch1",
			2:"Inform jstone",
			3:"Inform Jakim",
			4:"Inform SAt0ri",
			5:"Log out"
		}
		,'options-redirect': {
			0:84,
			1:87,
			2:88,
			3:89,
			4:90,
			5:function(){ return (startch3inpodcab?85:86) }
		}
	},
	84: {
		'info': "You dump an update on the Y€ boards hoping for some backup."
		,'options-text': {
			0:"Log out"
		}
		,'options-redirect': {
			0:function(){ return (startch3inpodcab?85:86) }
		},'update': function(){
			yhelp = true;
		}
	},
	85: {
		'info': "You log out and instruct the driver to take you to Shin-Nihombashi."
		,'options-text': {
			0:"Go to Shin-Nihombashi"
		}
		,'options-redirect': {
			0:91
		},'update': function(){
			timehelp = true;
			
			playAudio(9);
			document.body.style.backgroundColor = "#FFF";
			document.body.style.color = "#000";
			var element = document.getElementById('top');
			clearElement(element);
			element.innerHTML = '<img src="images/ch3_p86.jpg" />';
		}
	},	
	86: {
		'info': "You log out and hurry to find the owner of The Orange County. You explain to him what's happening. You don't have much time."
		,'options-text': {
			0:function(){ return (lostgun?"Ask for a gun":"Go to Shin-Nihombashi") },
			1:"Ask for help",
		}
		,'options-redirect': {
			0:function(){ return (lostgun?115:91) },
			1:116
		},'update': function(){
			playAudio(9);
			document.body.style.backgroundColor = "#FFF";
			document.body.style.color = "#000";
			var element = document.getElementById('top');
			clearElement(element);
			element.innerHTML = '<img src="images/ch3_p86.jpg" />';
		}
	},
	87: {
		'info': "You inform bitch1 of whats going on and decide to head out. He should know how to handle things online while you're away."
		,'options-text': {
			0:"Log out"
		}
		,'options-redirect': {
			0:function(){ return (startch3inpodcab?85:86) }
		},'update': function(){
			yhelp = true;
			cyberfhelp = true;
		}
	},
	88: {
		'info': "You inform jstone of whats going on and decide to head out. You wonder if he still has any contacts left in Japan."
		,'options-text': {
			0:"Log out"
		}
		,'options-redirect': {
			0:function(){ return (startch3inpodcab?85:86) }
		},'update': function(){
			yhelp = true;
			zephelp = true;
		}
	},
	89: {
		'info': "You inform Jakim of whats going on and decide to head out. Was that out of spite or desperation? Maybe he'll make the krommers feel a little guilty and help out?"
		,'options-text': {
			0:"Log out"
		}
		,'options-redirect': {
			0:function(){ return (startch3inpodcab?85:86) }
		},'update': function(){
			if (Math.random() > 0.8) krommershelp = true;
		}
	},
	90: {
		'info': "You inform SAt0ri of whats going on and decide to head out. Maybe he wasn't the opportunist scumbag you initially took him for?"
		,'options-text': {
			0:"Log out"
		}
		,'options-redirect': {
			0:function(){ return (startch3inpodcab?85:86) }
		},'update': function(){
			if (Math.random() > 0.8) krommershelp = true;
			if (Math.random() > 0.8) cyberfhelp = true;
			if (Math.random() > 0.8) yhelp = true;
			if (Math.random() > 0.8) zephelp = true;
		}
	},
	91: {
		'info': "You exit the podcab in an alley one block away from Shin-Nihombashi. You have to choose between turning on your GPS or your cloaking device. Without your GPS the folks running the zots won't know where to send help. But if their zots see you uncloaked they'll be able to dox you, and that would be bad. So you should actually have both GPS and clocking device on at all times. Except if the drones try to scan you while you're cloaked they'll detect you're a fake and try to stop you by any means necessary, that means using their laser guns. You have developed a lethal allergy to lasers these past couple of years, would be better to avoid them if possible."
		,'options-text': {
			0:"Approach Station"
		}
		,'options-redirect': {
			0:92
		}
	},
	92: {
		'info': "A couple of zombies are in sight, some might be zots. No drones around, best to scan zombies only when no drones are around."
		,'options-text': {
			0:"Scan"
		}
		,'options-redirect': {
			0:93
		}
	},	
	93: {
		'info': "Scan is negative, all zombies. Good opportunity to turn your +4 magic cloak of invisibility on and let the world know where to send the troops."
		,'options-text': {
			0:"Turn on cloak and GPS"
		}
		,'options-redirect': {
			0:94
		}
	},	
	94: {
		'info': "You turn on your cloak and GPS and proceed towards the station. You approach the cam where your bitch got spotted. Cameras can't recognize you with your cloak on."
		,'options-text': {
			0:"Take a look around"
		}
		,'options-redirect': {
			0:95
		}
	},
	95: {
		'info': "You look around for signs of your bitch. It's hard to tell where he could have gone. You hope your GPS is helping. A drone is coming by. The cameras still have you in their sights."
		,'options-text': {
			0:"Enter station",
			1:"Walk away",
			2:"Turn off GPS",
			3:"Turn off cloaking"
		}
		,'options-redirect': {
			0:96,
			1:97,
			2:98,
			3:106
		}
	},
	96: {
		'info': "You enter the station. Cameras are everywhere. A couple of zots are at the meeting point. You can tell they are zots because they are wearing the public dress code."
		,'options-text': {
			0:"Talk to the zots",
			2:"Turn off GPS",
			3:"Turn off cloaking"
		}
		,'options-redirect': {
			0:100,
			1:101,
			2:102
		}
	},
	97: {
		'info': "You try to walk away from the station but the drone thought your actions were suspicious and is now coming closer to scan you."
		,'options-text': {
			0:"Turn off GPS",
			1:"Turn off cloaking"
		}
		,'options-redirect': {
			0:103,
			1:104
		}
	},	
	98: {
		'info': "You turn off your GPS. The drone comes closer to scan you."
		,'options-text': {
			0:"Walk away",
			1:"Turn off cloaking"
		}
		,'options-redirect': {
			0:105,
			1:106
		}
	},
	99: {
		'info': "All your efforts were in vain. Maybe you took too long. Or perhaps you didn't herd enough zots to the searching effort. The drones found your bitch first."
	},
	100: {
		'info': "You ask the zots to spread out and look for your bitch."
		,'options-text': {
			0:"Search"
		}
		,'options-redirect': {
			0:function(){ return (calculateHelp()?110:99) }
		}
	},
	101: {
		'info': "You turn off the GPS. The zots already know who you are."
		,'options-text': {
			0:"Talk to the zots"
		}
		,'options-redirect': {
			0:100
		}
	},
	102: {
		'info': "You turn off your cloaking in the presence of zots. It doesn't matter if you'll be able to save your bitch. You'll soon become someone else's."
	},
	105: {
		'info': "You try to walk away from the scan but you should know that it's mandatory. You are targeted. As soon as you refuse to uncloak you are cut in half by a laser. You often wished drones weren't built so well."
	},
	106: {
		'info': "You turn off the cloaking before the drone scans you. Some zots are showing up."
		,'options-text': {
			0:"Walk away",
			1:"Turn off GPS",
			2:"Turn on cloaking"
		}
		,'options-redirect': {
			0:107,
			1:108,
			2:109
		}
	},
	107: {
		'info': "You try to walk away but the zots catch up with you. You are now dox'ed. Your life is about to change dramatically for the worse."
	},
	108: {
		'info': "You turn off the GPS hoping the zots won't know it's you but it's a little too late. They have now dox'ed you. Your life will now belong to others."
	},
	109: {
		'info': "You turn on the cloaking just in time to meet the zots."
		,'options-text': {
			0:"Talk to the zots"
		}
		,'options-redirect': {
			0:100
		}
	},
	110: {
		'info': "No luck so far..."
		,'options-text': {
			0:"Keep looking"
		}
		,'options-redirect': {
			0:function(){ return (calculateHelp()?111:99) }
		}
	},
	111: {
		'info': "One of the zots informs you they have found your bitch hiding in the bathroom."
		,'options-text': {
			0:"Help bitch2"
		}
		,'options-redirect': {
			0:112
		}
	},
	112: {
		'info': "You hurry to meet with your bitch in the bathroom. He's still in a bit of a shock and doesn't know what to do. His plan was to catch a train to Chiba. You ask him how the hell was he planning to get food or ping home for help. He starts crying again."
		,'options-text': {
			0:"Help bitch2"
		}
		,'options-redirect': {
			0:function(){ return (lostgun?117:113) }
		}
	},
	113: {
		'info': "With the help of a few zots you take bitch2 back to The Orange County. You saved his life!<br><br>He'll probably spend the rest of his days hiding at The Orange County running zots for Zep and Y€ in exchange for food and network access. In a few years maybe the ban list will deprecate. Or someone will finally crack big brother and fix this whole mess.<br><br>And light will come down from the sky and also cleanse the zombie plague. Making all the streets again walkable, all the shops again friendlier and all the hackers once more bored at home watching porn.<br><br>Thank you for playing."
	},
	114: {
		'info': "You remember you read some intel about CyberF having zots infiltrated at a couple datacenters in Joansburg... Maybe you could get lucky?"
		,'options-text': {
			0:"Ping Bitch1",
			1:"Log out"
		}
		,'options-redirect': {
			0:61,
			1:25
		}
	},
	115: {
		'info': "You ask for a gun and head out to catch a podcab."
		,'options-text': {
			0:"Go to Shin-Nihombashi"
		}
		,'options-redirect': {
			0:91
		},'update': function(){
			lostgun = false;
		}
	},
	116: {
		'info': "You ask for some help. The owner of The Orange County says he'll check with Zep what he can do."
		,'options-text': {
			0:"Go to Shin-Nihombashi"
		}
		,'options-redirect': {
			0:91
		},'update': function(){
			zephelp = true;
		}
	},
	117: {
		'info': "You try to help your bitch out of this mess but run into too many zombies on your way out. Even with some zots helping you, without a gun you were helpless."
		,'update': function(){
			dead = true;
		}
	},
}