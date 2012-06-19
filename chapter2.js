
chapters[2] = {
	
	0: {
		'info': "Home sweet home! Nothing like accessing your own virtual private network."
		,'options-text': {
			0:"Check email",
			1:"Activate Proxy",
			2:"Spoof MAC address",
			3:function(){ return (oxypadronamedival?"Google Oxypasomething":"Check news") }
		}
		,'options-redirect': {
			0:3,
			1:4,
			2:5,
			3:function(){ return (oxypadronamedival?6:7) }
		},
		'update': function(){
			playAudio(6);
			document.body.style.backgroundColor = "#000";
			document.body.style.color = "#fff";
			drawCanvas3(document.getElementById('top'), true);
			
		}
	},
	1: {
		'info': "Whats the point of activating proxy chains from here anyways?"
		,'options-text': {
			0:"Activate VPN",
			1:"Spoof MAC address"
		}
		,'options-redirect': {
			0:0,
			1:2
		}
	},
	2: {
		'info': "You need your tools for that. Perhaps if you phone home first?"
		,'options-text': {
			0:"Activate VPN"
		}
		,'options-redirect': {
			0:0
		}
	},	
	3: {
		'info': "Your public email account is filled with fake generative junk mail from your family and fake dupe friends accounts. Also some trash from a couple of newsletters of the mundane. 2 new messages, who cares? Lets get connected to the important stuff!"
		,'options-text': {
			0:"Activate Proxy Chains",
			1:"Spoof MAC address",
			2:function(){ return oxypadronamedival?"Google Oxypasomething":"Check news" }

		}
		,'options-redirect': {
			0:4,
			1:5,
			2:function(){ return oxypadronamedival?6:7 }
		}
	},
	4: {
		'info': "Better spoof your MAC address before you activate your proxy chain algo. Big brother is watching."
		,'options-text': {
			0:"Spoof MAC address"
		}
		,'options-redirect': {
			0:5
		}
	},
	5: {
		'info': "Easy to spoof your mac address when you have the right tools for the job. Shall we get it on?"
		,'options-text': {
			0:"Activate Proxy Chains",
		}
		,'options-redirect': {
			0:8
		}
	},
	6: {
		'info': "You know how many Oxypas there are out there? You're not getting anywhere with this search."
		,'options-text': {
			0:"Activate Proxy Chains",
			1:"Spoof MAC address",
		}
		,'options-redirect': {
			0:4,
			1:5
		}
	},
	7: {
		'info': "Blablabla... Outbreak continues to spread... New ban listings available at the usual place... Your maintenance zot is probably already taking care of that, but it can't hurt checking with the bitch responsible for supervising it though, especially if you need to surf deeper. You see no alerts on screen, so no worries for now."
		,'options-text': {
			0:"Activate Proxy Chains",
			1:"Spoof MAC address",
		}
		,'options-redirect': {
			0:4,
			1:5
		}
	},
	8: {
		'info': "You activate your proxy chain algo. Takes a few seconds to setup the connections. What's your plan?"
		,'options-text': {
			0:"Check Y€ boards",
			1:"Check for encoded messages",
			2:"Ping bitch1",
			3:"Ping bitch2",
			4:"Porn"
		}
		,'options-redirect': {
			0:10,
			1:function(){ return (haiku[0]?9:16) },
			2:function(){ return (pingbitch1?21:11) },
			3:function(){ return (pingbitch2?22:12) },
			4:14
		}
	},
	9: { 
		'info': "You check your encodes for messages. You have one new message! Just need to decode it. What was the damn password code?!?<br><br><input name=\"pwd\" id=\"pwd\" type=\"password\" onkeydown=\"if (event.keyCode == 13) submit(9)\">"
		,'options-text': {
			0:"Submit",
			1:"Check Y€ boards",
			2:"Ping bitch1",
			3:"Ping bitch2"
		}
		,'options-redirect': {
			0:9,
			1:10,
			2:11,
			3:12
		}
		,'pre': function(){
			var pwd = document.getElementById('pwd');
			if (pwd) {
				pass = pwd.value;
			}
		}
		,'update': function(){
			if (haiku[0]) {
				var check = '';
				for (i=0; i<3; i++) {
					word = haiku[i].split(' ');
					for(var key in word)
					{
						if (word[key][0])
						 check += word[key][0];
					}
				}
				if (pass === check) submit(15);
			}
		}
		
	},
	10: { 
		'info': "The Y€ boards have nothing new. But you might want to check the latest decoder algo, that ghost nuke really fried some parts of your memory..."
		,'options-text': {
			0:"Decoder algo",
			1:"Check for encoded messages",
			2:"Ping bitch1",
			3:"Ping bitch2"
		}
		,'options-redirect': {
			0:13,
			1:9,
			2:function(){ return (pingbitch1?21:11) },
			3:function(){ return (pingbitch2?22:12) }
		}
	},	
	11: {
		'info': "<div id=\"comic\"></div>"
		,'options-text': {
			0:"Reply"
		}
		,'options-redirect': {
			0:17
		},
		'update': function(){
			pingbitch1_1(document.getElementById('comic'));
			pingbitch1 = true;
		}
	},	
	12: {
		'info': "<div id=\"comic\"></div>"
		,'options-text': {
			0:"Wait a while",
			1:"Quit session"
		}
		,'options-redirect': {
			0:18,
			1:19
		},
		'update': function(){
			pingbitch2_1(document.getElementById('comic'));
			pingbitch2 = true;
		}
	},
	13: {
		'info': "Just an haiku... The decoder password must be embedded in there somehow..."
		,'options-text': {
			0:"Check encoded email",
			1:"Ping bitch1",
			2:"Ping bitch2"
		}
		,'options-redirect': {
			0:9,
			1:11,
			2:12
		},
		'update': function(){
			postHaiku();
		}
	},
	14: {
		'info': "The internet is for porn! But there are a couple of more important things to take care of right now. Plus, you're in a fucking podcab!"
		,'options-text': {
			0:"Check Y€ boards",
			1:"Check encoded email",
			2:"Ping bitch1",
			3:"Ping bitch2"
		}
		,'options-redirect': {
			0:10,
			1:9,
			2:function(){ return (pingbitch1?21:11) },
			3:function(){ return (pingbitch1?22:12) }
		}
	},
	15: {
		'info': "You managed to figure out the password! You can now decode and read the email. It's from T501, one of your dupe accounts! Why were you mailing yourself? You probably knew you were gonna have to ghost nuke your way out of that run."
		,'options-text': {
			0:"Read email"
		}
		,'options-redirect': {
			0:31
		},
		'update': function(){
			//todo: change graphics and music
		}
	},
	16: {
		'info': "You check your encodes for messages. You have one! Just need to decode it... You don't seem to remember the password. You recall there was some reference on the boards to it..."
		,'options-text': {
			0:"Check Y€ boards",
			1:"Ping bitch1",
			2:"Ping bitch2"
		}
		,'options-redirect': {
			0:10,
			1:11,
			2:12
		}
	},
	17: {
		'info': "<div id=\"comic\"></div>"
		,'options-text': {
			0:"Reply"
		}
		,'options-redirect': {
			0:23
		},
		'update': function(){
			pingbitch1_2(document.getElementById('comic'));
		}
	},
	18: {
		'info': "<div id=\"comic\"></div>"
		,'options-text': {
			0:"Wait some more",
			1:"Quit session"
		}
		,'options-redirect': {
			0:20,
			1:19
		},
		'update': function(){
			pingbitch2_2(document.getElementById('comic'));
			pingbitch2 = true; 
		}
	},
	19: {
		'info': "Where could he be? You feel like you are forgetting something important."
		,'options-text': {
			0:"Check Y€ boards",
			1:"Check encoded email",
			2:"Ping bitch1",
			3:"ping bitch2"
		}
		,'options-redirect': {
			0:10,
			1:9,
			2:function(){ return (pingbitch1?21:11) },
			3:function(){ return (pingbitch2?22:12) }
		}
	},
	20: {
		'info': "<div id=\"comic\"></div>"
		,'options-text': {
			0:"Quit session"
		}
		,'options-redirect': {
			0:19
		},
		'update': function(){
			pingbitch2_3(document.getElementById('comic'));
		}
	},
	21: {
		'info': "Why would you want to ping him again? You need to figure out what to do!"
		,'options-text': {
			0:"Check Y€ boards",
			1:"Check encoded email",
			2:"ping bitch2"
		}
		,'options-redirect': {
			0:10,
			1:9,
			2:function(){ return (pingbitch2?22:12) }
		}
	},
	22: {
		'info': "No use, he's not around. There must be some clue where he went somewhere online, he wouldn't just take off. You might be forgetting something."
		,'options-text': {
			0:"Check Y€ boards",
			1:"Check encoded email",
			2:"Ping bitch1"
		}
		,'options-redirect': {
			0:10,
			1:9,
			2:function(){ return (pingbitch1?21:11) }
		}
	},
	23: {
		'info': "<div id=\"comic\"></div>"
		,'options-text': {
			0:"Reply"
		}
		,'options-redirect': {
			0:24
		},
		'update': function(){
			pingbitch1_3(document.getElementById('comic'));
		}
	},	
	24: {
		'info': "<div id=\"comic\"></div>"
		,'options-text': {
			0:"Reply"
		}
		,'options-redirect': {
			0:25
		},
		'update': function(){
			pingbitch1_4(document.getElementById('comic'));
		}
	},
	25: {
		'info': "<div id=\"comic\"></div>"
		,'options-text': {
			0:"Reply"
		}
		,'options-redirect': {
			0:26
		},
		'update': function(){
			pingbitch1_5(document.getElementById('comic'));
		}
	},
	26: {
		'info': "<div id=\"comic\"></div>"
		,'options-text': {
			0:"Reply"
		}
		,'options-redirect': {
			0:27
		},
		'update': function(){
			pingbitch1_6(document.getElementById('comic'));
		}
	},
	27: {
		'info': "<div id=\"comic\"></div>"
		,'options-text': {
			0:"Reply"
		}
		,'options-redirect': {
			0:28
		},
		'update': function(){
			pingbitch1_7(document.getElementById('comic'));
		}
	},
	28: {
		'info': "<div id=\"comic\"></div>"
		,'options-text': {
			0:"Reply"
		}
		,'options-redirect': {
			0:29
		},
		'update': function(){
			pingbitch1_8(document.getElementById('comic'));
		}
	},
	29: {
		'info': "<div id=\"comic\"></div>"
		,'options-text': {
			0:"Quit session"
		}
		,'options-redirect': {
			0:30
		},
		'update': function(){
			pingbitch1_9(document.getElementById('comic'));
		}
	},
	30: {
		'info': "Now you know that bitch1 is taking care of his shit. But, you still need to figure out where to go next!"
		,'options-text': {
			0:"Check Y€ boards",
			1:"Check encoded email",
			2:"Ping bitch2"
		}
		,'options-redirect': {
			0:10,
			1:9,
			2:function(){ return (pingbitch2?22:12) }
		}
		
	},
	31: {
		'info': function(){ return "<span id=\"decoded_message\"></span><br><br>You have no recollection of deploying the trojan but you should probably head to the safehouse anyways. Except you don't know where it is. So now what?"+(aspirin?"":" Your head is still throbbing with pain, you should probably get some aspirin ASAP.") }
		,'options-text': {
			0:"Check Y€ boards",
			1:function(){ return (aspirin?"Porn":"Surf for local suppliers") }
		}
		,'options-redirect': {
			0:32,
			1:function(){ return (aspirin?33:34) }
		}
		,'update': function(){
			decode_message("Hello there, you should really stop talking with yourself so often, what would the kids think if they ever heard about this? By the time you read this you'll probably have your brain stem fried for ghost nuking your way out of the korean mess. In case you don't remember whats up this is the gist of it: Koreans got dox on bitch2. To buy some time you agreed to meet them for a zot run on ground zero Japan. The plan, should it have duly persist on execution, is to agree on run, warn the 2nd bitch with a deployed trojan, get a few clays deployed on their zots to get the mission started. We shall hope the koreans soften up watching the zot run get under way and then proceed directly to the aformentioned ghost nukage to get your ass out of ground zero. Packing collateral, i intend on making our shooting range instructor happy, if you're reading this i guess so have you. The rendezvous with bitch2 is at 120613-700 on japan safehouse 3. -- you, yourself and i");
		}
	},
	32: {
		'info': "You check the boards again looking for references to safehouses in Japan. You manage to find the address you were looking for!"
		,'options-text': {
			0:function(){ return (aspirin?"Log out":"Surf for local suppliers") }
		}
		,'options-redirect': {
			0:function(){ return (aspirin?35:34) }
		},
		'update': function(){
			safehouse_address = true;
		}
	},
	33: {
		'info': function(){ return "You're in a podcab, remember? Sure, no one is looking, but you do pay an extra fee for cleaning services. And those don't come cheap in Japan you know? "+(shouldershot?" Although you will already have to pay up for bleeding all over the place anyways... You really should get someone to take a look at that shoulder before you get eaten by a Grue or something.":"") }
		,'options-text': {
			0:function(){ return (safehouse_address?"Log out":"Check Y€ boards") }
		}
		,'options-redirect': {
			0:function(){ return (safehouse_address?35:32) }
		}
	},
	34: {
		'info': "You surf around for local suppliers. You need some red aspirin fast! You note down a few addresses."
		,'options-text': {
			0:"Log out"
		}
		,'options-redirect': {
			0:35
		},
		'update': function(){
			localsuppliers_address = true;
		}
	},
	35: {
		'info': "You log out from the network. What will you instruct the podcab driver?"
		,'options-text': {
			0:"Go to safehouse3",
			1:function(){ return (aspirin?"Drive around in circles":"Go to local supplier") }
		}
		,'options-redirect': {
			0:36,
			1:function(){ return (aspirin?37:38) }
		}
		,'update': function() {
			playAudio(7);
			document.body.style.backgroundColor = "#FFF";
			document.body.style.color = "#000";
			var element = document.getElementById('top');
			clearElement(element);
			element.innerHTML = '<img src="images/ch2_p35.jpg" />';
		}
	},
	36: {
		'info': "You instruct the podcab to drive to the safehouse3. It's actually a zot bar called The Orange County. You never been there yourself but your zots use it to trade intel quite often. Offline communications are always safer. How do you want to enter?"
		,'options-text': {
			0:"Through the main door",
			1:"Through the back alley"
		}
		,'options-redirect': {
			0:39,
			1:function(){ return (lostgun?112:40) }
		}
	},
	37: {
		'info': function(){ return "You drive around in circles looking for who knows what. "+(shouldershot?"Was that really the wisest move considering your situation?":"") }
		,'options-text': {
			0:function(){ return (shouldershot?"Go to safehouse3":"Go to safehouse3") }
		}
		,'options-redirect': {
			0:function(){ return (shouldershot?41:36) }
		}
	},
	38: {
		'info': "You instruct the podcab to stop at the nearest supply store. You arrive shortly after."
		,'options-text': {
			0:"Enter supply store",
			1:"Go to safehouse3"
		}
		,'options-redirect': {
			0:42,
			1:36
		}
	},
	39: {
		'info': "You step out of the podcab, turn on your cloaking device and make your way to the front door. Neon lights flicker the name of the joint \"The Orange County\". How California Dreaming of them."
		,'options-text': {
			0:"Enter"
		}
		,'options-redirect': {
			0:55
		}
	},
	40: {
		'info': "You step out of the podcab, turn on your cloaking device and make your way to the back alley. Your zots use this entrance occasionally. You spot two figures standing in the alley. You have no clue if they are hacked or not. You take your gun out in response. What to do?"
		,'options-text': {
			0:"Shoot",
			1:"Scan",
			2:"Slip past"
		}
		,'options-redirect': {
			0:(Math.random()>0.5)?56:57,
			1:58,
			2:function(){ return (shouldershot)?59:60 }
		}
	},
	41: {
		'info': "You instruct the podcab to drive to safehouse3 but you start losing focus. You bleed yourself out inside the podcab. The cleaning service is automatically deducted from your credits system. Thank you for choosing Akihabara Doku Taxi!"
		,'update': function(){
			dead = true;
		}
	},
	42: {
		'info': "You instruct the podcab to wait for you. You get out of the podcab and ring the supply store. A camera looks at you."
		,'options-text': {
			0:"Look at the camera",
			1:"Go to safehouse3"
		}
		,'options-redirect': {
			0:43,
			1:36
		}
	},
	43: {
		'info': "The door unlocks. You enter the store. The place looks gloomy and grey. The door closes behind you."
		,'options-text': {
			0:"Head to the counter"
		}
		,'options-redirect': {
			0:44
		}
	},
	44: {
		'info': "At the counter you are greeted with the loading sound of a shotgun. 'State your business!' That ain't no Japanese!"
		,'options-text': {
			0:function(){ return (shouldershot?"Pain killers":"Whoa! Careful with that!") },
			1:"Red aspirin"
		}
		,'options-redirect': {
			0:function(){ return (shouldershot?45:46) },
			1:47
		}
	},
	45: {
		'info': "You politely ask for some pain killers. The person behind the counter looks at you then nods to your right."
		,'options-text': {
			0:"Look to the right",
			1:"Try to disarm"
		}
		,'options-redirect': {
			0:48,
			1:49
		}
	},
	46: {
		'info': "You tell the person behind the counter to chill. He doesn't seem too thrilled with that idea."
		,'options-text': {
			0:"Ask for red aspirin",
			1:function(){ return (lostgun?"Claim to be unarmed":"Take out your gun") },
			2:"Try to disarm"
		}
		,'options-redirect': {
			0:47,
			1:function(){ return (lostgun?111:52) },
			2:49
		}
	},		
	47: {
		'info': "You ask for some red aspirin. The person behind the counter slowly reaches down for something."
		,'options-text': {
			0:"Wait for it",
			1:function(){ return (lostgun?"Claim to be unarmed":"Take out your gun") },
			2:"Try to disarm"
		}
		,'options-redirect': {
			0:51,
			1:function(){ return (lostgun?111:52) },
			2:49
		}
	},	
	48: {
		'info': "You look to your right and spot some pain killers."
		,'options-text': {
			0:"Take them and run",
			1:"Red Aspirin",
			2:function(){ return (lostgun?"Claim to be unarmed":"Take out your gun") },
			3:"Try to disarm"
		}
		,'options-redirect': {
			0:50,
			1:47,
			2:function(){ return (lostgun?111:52) },
			3:49
		}
	},
	49: {
		'info': "You charge at the person behind the counter. He shoots you dead in the head before you take your second step. Well, that was fun."
		,'update': function(){
			dead = true;
		}
	},
	50: {
		'info': "You grab the pain killers and start running towards the door. You get shot in the back. How smart of you."
		,'update': function(){
			dead = true;
		}
	},
	51: {
		'info': "You patiently wait for the counter person to finish his move. He reveals a box of aspirin, throws it to the floor in front of you and gets both his hands back holding the shotgun. 'Anything else?'"
		,'options-text': {
			0:"Pay up",
			1:function(){ return (lostgun?"Claim to be unarmed":"Take out your gun") },
			2:"Try to disarm"
		}
		,'options-redirect': {
			0:53,
			1:function(){ return (lostgun?111:52) },
			2:49
		}
	},
	52: {
		'info': "You reach for your pocket to take out your gun. The person behind the counter shoots you before you are able to even get it out. You form a peculiar blood pattern on the floor."
		,'update': function(){
			dead = true;
		}
	},
	53: {
		'info': "You slowly move to get your stuff and ask for the chip machine. The guy behind the counter informs you they already have your iris from the camera outside and that you should leave now."
		,'options-text': {
			0:"Head back",
			1:function(){ return (lostgun?"Claim to be unarmed":"Take out your gun") },
			2:"Try to disarm"
		}
		,'options-redirect': {
			0:54,
			1:function(){ return (lostgun?111:52) },
			2:49
		}
	},
	54: {
		'info': "You slowly make your way out of the supply store. Stores are so sensitive these days. The outbreak hasn't been kind for business anywhere. Atleast they're still running. You enter the podcab and take your pills. Now what?"
		,'options-text': {
			0:"Go to safehouse3"
		}
		,'options-redirect': {
			0:36
		},'update': function(){
			aspirin = true;
		}
	},
	55: {
		'info': "You ring the entrance door to The Orange County bar. A camera looks at you. A speaker squeels 'No guns allowed'. A small vault opens."
		,'options-text': {
			0:"Keep your gun",
			1:"Deposit your gun"
		}
		,'options-redirect': {
			0:61,
			1:62
		}
	},
	56: {
		'info': "You take a shot at one of them. The other one seems to look at you. A synth voice speaks out 'Looking for trouble? We are hacked by Zep.' The name sounds familiar. What do you do?"
		,'options-text': {
			0:"Ask who's Zep",
			1:"Offer to repay",
			2:"Shoot the other zot"
		}
		,'options-redirect': {
			0:83,
			1:84,
			2:85
		}
	},
	57: {
		'info': "You take a shot at the zombie. The other one seems to look at you. Your gunshot is sure to attract more. What do you do?"
		,'options-text': {
			0:"Shoot the other zombie",
			1:"Hurry to the door"
		}
		,'options-redirect': {
			0:93,
			1:94
		}
	},
	58: {
		'info': "You scan for open ports. They are zots alright, not zombies. One of them has a vulnerability you can hack."
		,'options-text': {
			0:"Shoot the zots",
			1:"Hack one of the zots",
			2:"Walk to the door"
		}
		,'options-redirect': {
			0:56,
			1:95,
			2:96
		}
	},
	59: {
		'info': "It seems the figures in the alley are zombies. You try to slip past them but your shoulder injury doesn't help you move very efficiently. You become easy bait."
		,'update': function(){
			dead = true;
		}
	},
	60: {
		'info': "You slip past the figures. Not sure if they are zombies or zots, but you're at the door now so it doesn't really matter much anymore. The door opens and a man who you recognize as being the owner of the bar asks you to state your business."
		,'options-text': {
			0:"Explain"
		}
		,'options-redirect': {
			0:91
		}
	},
	61: {
		'info': "You claim you don't have a gun. They buzz you in."
		,'options-text': {
			0:"Walk in"
		}
		,'options-redirect': {
			0:63
		}
		,'update': function() {
			var element = document.getElementById('top');
			clearElement(element);
			element.innerHTML = '<img src="images/orange_county.jpg" />';
		}
	},
	62: {
		'info': "You drop your gun in the vault. They buzz you in."
		,'options-text': {
			0:"Walk in"
		}
		,'options-redirect': {
			0:64
		}
		,'update': function(){
			lostgun = true;
			var element = document.getElementById('top');
			clearElement(element);
			element.innerHTML = '<img src="images/orange_county.jpg" />';
		}
	},
	63: {
		'info': "You walk into the bar with your gun carefully hidden. A metal detector goes off. You feel eyes on you."
		,'options-text': {
			0:"Look for signs of trouble",
			1:"Hold hands up",
			2:"Draw your gun",
			3:"Run out"
		}
		,'options-redirect': {
			0:65,
			1:66,
			2:67,
			3:68
		}
	},
	64: {
		'info': "You walk into the bar. Not much crowd around today. You recognize the owner sitting at the counter and head on over."
		,'options-text': {
			0:"Introduce yourself",
			1:"Order a drink"
		}
		,'options-redirect': {
			0:91,
			1:99
		}
	},
	65: {
		'info': "You notice people are restless. One of the zots finally speaks up: 'No guns allowed!'"
		,'options-text': {
			0:"Claim it was something else",
			1:"Draw your gun",
			2:"Run out"
		}
		,'options-redirect': {
			0:66,
			1:67,
			2:68
		}
	},
	66: {
		'info': "You hold your arms up and state that it must have been something else. You feel several eyes on you. Finally someone steps up to frisk you."
		,'options-text': {
			0:"Let them frisk you",
			1:"Draw your gun",
			2:"Run out"
		}
		,'options-redirect': {
			0:70,
			1:67,
			2:68
		}
	},
	67: {
		'info': "You draw your gun. A jolt of electricity surges through your body."
		,'update': function(){
			dead = true;
		}
	},
	68: {
		'info': "You run out of the bar. The podcab is already gone. You look around thinking on your options."
		,'options-text': {
			0:"Check the alley",
			1:"Walk around"
		}
		,'options-redirect': {
			0:71,
			1:72
		}
		,'update': function() {
			var element = document.getElementById('top');
			clearElement(element);
			element.innerHTML = '<img src="images/ch2_p35.jpg" />';
		}
	},
	69: {
		'info': "You manage to catch the podcab. You start noticing that your headache is starting to improve. But you have no clue what to do next, you can't go back to The Orange County..."
		,'options-text': {
			0:"Log in"
		}
		,'options-redirect': {
			0:101
		},'update': function() {
			startch3inpodcab = true;
		}
	},	
	70: {
		'info': "The zot frisking you finds your gun. You hear a voice 'What is this then? We don't take kindly to liars either.'"
		,'options-text': {
			0:"Ask to speak to the owner"
		}
		,'options-redirect': {
			0:91
		}
	},
	71: {
		'info': "You check out the alley. You notice a couple of figures coming out of a door in the alley."
		,'options-text': {
			0:"Wait",
			1:"Shoot",
			2:"Run"
		}
		,'options-redirect': {
			0:73,
			1:74,
			2:80
		}
	},
	72: {
		'info': "You wander around the block hoping to catch a podcab. You run into a zombie mob instead."
		,'options-text': {
			0:"Shoot them",
			1:"Outrun them"
		}
		,'options-redirect': {
			0:75,
			1:function(){ return (shouldershot?76:77) }
		}
	},
	73: {
		'info': "You wait to see who is coming out the door. Seems like a couple of zots. You hear a voice asking you 'What's your business here?'"
		,'options-text': {
			0:"Explain yourself",
			1:"Shoot the zots"
		}
		,'options-redirect': {
			0:91,
			1:56
		}
	},
	74: {
		'info': "You shoot at the figures in the alley. They seem to be zots. A crowd of other zots and zombies quickly gathers around you in the alley."
		,'options-text': {
			0:"Shoot",
			1:"Run"
		}
		,'options-redirect': {
			0:87,
			1:77
		}
	},	
	75: {
		'info': "You try to shoot your way out of the zombie mob. You quickly run out of ammo."
		,'options-text': {
			0:"Sit down",
			1:"Outrun them"
		}
		,'options-redirect': {
			0:81,
			1:function(){ return (shouldershot?76:77) }
		}
	},	
	76: {
		'info': "You try to outrun the zombie mob but you don't make it very far. Not with your shoulder bleeding like that."
		,'update': function(){
			dead = true;
		}
	},	
	77: {
		'info': "You manage to outrun the zombie mob. You are now lost in an unknown part of town. No podcabs in sight."
		,'options-text': {
			0:"Look for help",
			1:"Sit down"
		}
		,'options-redirect': {
			0:(Math.random()>0.8)?82:78,
			1:(Math.random()>0.8)?82:81
		}
	},
	78: {
		'info': "You look around for help. Dead buildings everywhere. You attract the attention of some wandering zombies."
		,'options-text': {
			0:function(){ return (extraammo?"Shoot them":"Look for help") },
			1:"Sit down"
		}
		,'options-redirect': {
			0:function(){ return (extraammo?79:80) },
			1:81
		}
	},
	79: {
		'info': "You shoot the wandering zombies. The noise attracts other zombies."
		,'options-text': {
			0:"Look for help"
		}
		,'options-redirect': {
			0:80
		}
	},
	80: {
		'info': "You desperately wander around town looking for help. You run into a zombie mob."
		,'options-text': {
			0:function(){ return (extraammo?"Shoot them":"Sit down") },
			1:"Outrun them"
		}
		,'options-redirect': {
			0:function(){ return (extraammo?75:81) },
			1:function(){ return (shouldershot?76:77) }
		}
	},
	81: {
		'info': "You sit down on the side walk of the street and wait for a zombie to finish you off."
		,'update': function(){
			dead = true;
		}
	},
	82: {
		'info': "You spot a podcab!"
		,'options-text': {
			0:"Catch podcab"
		}
		,'options-redirect': {
			0:function(){ return aspirin?69:100 }
		}
	},
	83: {
		'info': "You ask the zot who the fuck is Zep. Two more zots come out the backdoor of the bar. Another one creeps up behind you. 'What are you? Live bait? Zep owns The Orange County, and a third of the zots here in Japan.' Whoops. What will you do?"
		,'options-text': {
			0:"Offer to repay",
			1:"Explain the ghost nuke",
			2:"Shoot your way out of the alley"
		}
		,'options-redirect': {
			0:84,
			1:86,
			2:87
		}
	},
	84: {
		'info': "You offer to compensate Zep's loss. More zots show up in the street behind you. A voice tells you to lower your weapon and come inside."
		,'options-text': {
			0:"Obey",
			1:"Shoot your way out of the alley"
		}
		,'options-redirect': {
			0:88,
			2:87
		}
	},	
	85: {
		'info': "You take a shot at the other zot. You hit him. You're quickly getting surrounded by more zots. Also regular zombies are starting to show up, attracted by your noise."
		,'options-text': {
			0:"Shoot your way out of the alley",
			1:"Try to outrun them"
		}
		,'options-redirect': {
			0:87,
			2:77
		}
	},
	86: {
		'info': "You explain that you just been through a ghost nuke and your memory is a little fragmented. More zots show up behind you. Also, regular zombies won't take long to show up following your gunshot noise. You need to get out of the streets fast."
		,'options-text': {
			0:"Offer to repay",
			1:"Shoot your way out of the alley",
			2:"Try to outrun them"
		}
		,'options-redirect': {
			0:84,
			2:87,
			3:77
		}
	},
	87: {
		'info': "You try to shoot your way out of the alley. You fail, but feel somewhat happy for accomplishing your childhood dream of laying dead in a Japanese alley."
		,'update': function(){
			dead = true;
		}
	},
	88: {
		'info': "You lower your gun and proceed towards the door. The zots behind you now dealing with the regular zombies that showed up attracted by your gunshot noise."
		,'options-text': {
			0:"Enter the bar"
		}
		,'options-redirect': {
			0:89
		}
	},
	89: {
		'info': "You enter the bar through the back alley door. You recognize the owner."
		,'options-text': {
			0:"Identify yourself"
		}
		,'options-redirect': {
			0:90
		}
		,'update': function() {
			var element = document.getElementById('top');
			clearElement(element);
			element.innerHTML = '<img src="images/orange_county.jpg" />';
		}
	},
	90: {
		'info': "'You're T? What the fuck are you doing shooting at my clientele?' You start apologizing."
		,'options-text': {
			0:"Explain situation"
		}
		,'options-redirect': {
			0:91
		}
	},
	91: {
		'info': "You explain your situation to the owner of the bar. He takes another look at you and signals you to come around the back."
		,'options-text': {
			0:"Follow"
		}
		,'options-redirect': {
			0:92
		}
		,'update': function() {
			var element = document.getElementById('top');
			clearElement(element);
			element.innerHTML = '<img src="images/orange_county.jpg" />';
		}
	},
	92: {
		'info': "You take a look around, it's plain to see it's mostly used as a service center for zots, that's how you heard of it to begin with. You follow the owner to the back room."
		,'options-text': {
			0:"Enter back room"
		}
		,'options-redirect': {
			0:function(){ return (shouldershot?102:106) }
		}
	},
	93: {
		'info': "You take a shot at the other zombie. The door to the bar opens and a couple of zots come out. You hear a voice 'What are you doing? You'll attract more of those things.'"
		,'options-text': {
			0:"Shoot the zots",
			1:"Hold your fire"
		}
		,'options-redirect': {
			0:56,
			1:94
		}
	},
	94: {
		'info': "You hold your fire. A voice tells you to get inside before other zombies show up."
		,'options-text': {
			0:"Get in"
		}
		,'options-redirect': {
			0:91
		}
	},	
	95: {
		'info': "You try to hack the zot with the vulnerability. Might take a while."
		,'options-text': {
			0:"Proceed",
			1:"Shoot the zots",
			2:"Walk to the door"
		}
		,'options-redirect': {
			0:(Math.random()>0.5)?97:98,
			1:56,
			2:96
		}
	},	
	96: {
		'info': "You walk to the door on the back alley of The Orange County. The zots look at you. A voice speaks out 'What's your business?'"
		,'options-text': {
			0:"Explain yourself",
			1:"Shoot the zots"
		}
		,'options-redirect': {
			0:91,
			1:56
		}
	},
	97: {
		'info': "While you're hacking away at the zot's firewall a zombie creeps up behind you. Soon you'll be one of them."
		,'update': function(){
			dead = true;
		}
	},
	98: {
		'info': "The zots take notice of you. You hear a voice 'State your business'"
		,'options-text': {
			0:"Explain yourself",
			1:"Shoot the zots"
		}
		,'options-redirect': {
			0:91,
			1:56
		}
	},
	99: {
		'info': "You sit next to the owner, wait for the bartender to look at you and order a drink. The owner remarks that there hasn't been much drinking around The Orange County lately."
		,'options-text': {
			0:"Introduce yourself"
		}
		,'options-redirect': {
			0:91
		}
	},
	100: {
		'info': "You try to catch the podcab. Your headache suddenly turns into a sharp stab. You miss the podcab. All you can do now is lay in pain as the wandering zombies gather around you to feed."
		,'update': function(){
			dead = true;
		}
	},	
	101: {
		'info': "You log in to the network."
		,'options-text': {
		    0:"Activate VPN"
		}
		,'options-redirect': {
			0:0
		}
		,'update': function() {
			chapter = 3;
		}
	},
	102: {
		'info': "You enter the back room of The Orange County. The blood loss from your shoulder wound is starting to take it's toll. You stumble and fall back into a wall. The owner notices your wound and offers to take a look at it."
		,'options-text': {
			0:"Allow",
			1:"Deny"
		}
		,'options-redirect': {
			0:103,
			1:105
		}
	},
	103: {
		'info': function(){ return "You agree to letting the bar owner patch you up. "+(aspirin?"":" Meanwhile, your headache gives you a sharp stab. This doesn't look too good.") }
		,'options-text': {
			0:function(){ return (aspirin?"Hold still":"Ask for aspirin") }
		}
		,'options-redirect': {
			0:function(){ return (aspirin?104:107) }
		}
		,'update': function() {
			shouldershot = false;
		}
	},
	104: {
		'info': "The owner patches you up and tells you about a kid who came over earlier on with koreans on his tail."
		,'options-text': {
			0: "Listen"
		}
		,'options-redirect': {
			0: 108
		}
	},
	105: {
		'info': "Always fun to bleed yourself out in the back room of a bar in Japan. You recommend it to all your friends!"
		,'update': function(){
			dead = true;
		}
	},
	106: {
		'info': "The owner tells you about a kid who came over earlier today with koreans hot on his tail. 'He used the network and took off.'"
		,'options-text': {
			0: "Listen"
		}
		,'options-redirect': {
			0: 108
		}
	},
	107: {
		'info': "The bar owner gets you some Aspirin but it's a little too late for that now. Your brain stem is too screwed up already. You spend the rest of your days turning into a vegetable."
		,'update': function() {
			dead = true;
		}
	},
	108: {
		'info': "The owner informs you the kid used the network to fire up a couple of  local zots and start trouble with the koreans. He took off as soon as he got a chance."
		,'options-text': {
			0: "Ask about the koreans"
		}
		,'options-redirect': {
			0: 109
		}
	},
	109: {
		'info': "You ask about the koreans. The bar owner informs you they never left The Orange County. What do you want to do now?"
		,'options-text': {
			0: "Log in"
		}
		,'options-redirect': {
			0: 101
		}
	},
	110: {
		'info': "You ring the entrance door to The Orange County bar. A camera looks at you. A speaker squeels 'No guns allowed'. A small vault opens. You don't have one anyways."
		,'options-text': {
			0:"Enter"
		}
		,'options-redirect': {
			0:64
		}
	},
	111: {
		'info': "You tell the person behind the counter that you're unarmed. You show your waist and turn around to prove it. You get shot. Didn't your mother ever tell you never to go unarmed into a local supplier store?"
		,'update': function() {
			dead = true;
		}
	},		
	112: {
		'info': "You spot a few zombies in the alley. Without your gun it's better to avoid any encounters."
		,'options-text': {
			0:"Enter through front door"
		}
		,'options-redirect': {
			0:110
		}
	},
}