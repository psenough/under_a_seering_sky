
chapters[1] = {
	0: {
		'info': "It's dark and you don't really remember anything. What would you like to do?"
		,'options-text': {
		    0:"Get Lamp",
			1:"Feel around",
			2:"Wait"
		}
		,'options-redirect': {
			0:97,
			1:1,
			2:2
		}
		,'update': function() {
			drawBlack(document.getElementById('top'));
		}
	},
	1: {
		'info': "You start feeling the space around you. It appears you are sitting on a chair of some sort. You get interrupted by a throbbing pain emanating from your head. It hurts very badly."
		,'options-text': {
			0:"Touch head",
			1:"Wait"
		}
		,'options-redirect': {
			0:3,
			1:2
		}
		,'update': function() {
			playAudio(0);
			drawCanvas(document.getElementById('top'));
		}
	},
	2: {
		'info': "You die a painful slow death. Somewhat reminiscent of being eaten by a Grue. Thank you for playing!"
		,'update': function() {
				dead = true;
		}
	},
	3: {
		'info': "You reach for your head and notice you are wearing some sort of device. Your head feels like it's about to explode."
		,'options-text': {
			0:"Log out",
			1:"Wait"
		}
		,'options-redirect': {
			0:4,
			1:2
		}
	},
	4: {
		'info': "You log out from the virtualization unit binding your head. The pod opens around you. Bright light in the room burns your eyes. You slide down the chair and hit the carpet floor. You ache with pain and seem unable to move."
		,'options-text': {
			0:"Get up"
		}
		,'options-redirect': {
			0:5
		},'update': function() {
			playAudio(1);
			document.body.style.backgroundColor = "#FFF";
			document.body.style.color = "#000";
			drawCanvas2(document.getElementById('top'));
		}
	},
	5: {
		'info': "You try to get up but instead you stumble and fall back down. In the process you slam your arm against what felt like the edge of a bed, and drop face first on top of what could resemble a potato chip missing in action for a few days. Your eyes are slowly adapting to the lights in the room but you don't seem to be able to move just yet."
		,'options-text': {
			0:"Try to remember",
			1:"Look around"
		}
		,'options-redirect': {
			0:6,
			1:7
		}
	},
	6: {
		'info': "You try to remember who you are but your brain just feels like it got hammered by a squad drone ten times the recommended dosage."
		,'options-text': {
			0:"Look around"
		}
		,'options-redirect': {
			0:8
		}
	},
	7: {
		'info': "You try to take a look around, your body fails to respond. You moan in pain."
		,'options-text': {
			0:"Look around"
		}
		,'options-redirect': {
			0:8
		}
	},
	8: {
		'info': "You try to take a look around again. The light in the room is blinding, you can't see anything. You seem to pass out from the pain for a moment there."
		,'options-text': {
			0:"Wake up"
		}
		,'options-redirect': {
			0:9
		}
	},
	9: {
		'info': "You notice the sound of neon flickering and people discussing something in korean, they seem to be close by. You recall your headache as it throbs some more."
		,'options-text': {
			0:"Get up",
			1:"Shout for help" 
		}
		,'options-redirect': {
			0:10,
			1:11
		}
	},
	10: {
		'info': "You want to get up but your body doesn't seem willing to cooperate. You can barely move an arm. Perhaps there is something useful somewhere close?"
		,'options-text': {
			0:"Feel your pockets",
			1:"Feel the room around" 
		}
		,'options-redirect': {
			0:12,
			1:13
		}
	},
	11: {
		'info': "You try to shout for help but you can barely speak."
		,'options-text': {
			0:"Try again",
			1:"Get up" 
		}
		,'options-redirect': {
			0:11,
			1:10
		}
		,'update': function() {
				counter11++;
				if (counter11 > 5) submit(18);
				console.log('update: ' + counter11);
		}
	},
	12: {
		'info': "You try to feel your pockets for something that could be useful. You can barely move and your brain feels like it is about to explode."
		,'options-text': {
			0:"Proceed",
			1:"Give up" 
		}
		,'options-redirect': {
			0:14,
			1:26
		}
	},
	13: {
		'info': "You try to feel the floor around you, barely able to see anything. Your head is aching horribly. You seem to touch something on the floor."
		,'options-text': {
			0:"Look at what you found",
			1:"Shout for help" 
		}
		,'options-redirect': {
			0:15,
			1:11
		}
	},
	14: {
		'info': "It feels like you have something on your trousers pocket but you are in no condition to take it out, you can barely move."
		,'options-text': {
			0:"Search the floor",
			1:"Shout for help" 
		}
		,'options-redirect': {
			0:13,
			1:11
		}
	},
	15: {
		'info': "It feels like a box of some sort..."
		,'options-text': {
			0:"Examine box",
			1:"Shout for help" 
		}
		,'options-redirect': {
			0:16,
			1:11
		}
	},
	16: {
		'info': "You desperately try to focus on the box you just found. It might actually be a box of pills. Wouldn't that be useful? Especially if they could magically help with whatever the hell it is that you seem to be suffering from!"
		,'options-text': {
			0:"Open the box of pills"
		}
		,'options-redirect': {
			0:17
		}
	},
	17: { //open the box of pills
		'info': "You try to open the box of pills, your hands shake and your head throbs with pain. You can't seem to manage to get it open."
		,'options-text': {
			0:"Force the box",
			1:"Read the label"
		}
		,'options-redirect': {
			0:19,
			1:20
		}
	},
	18: { //shout for help
		'info': "You groan a sorry excuse of a cry for help. It seems no one heard you. You can still hear people discussing in what might definitely be korean. Is that good or bad? It would really help if you had a clue on where you even are."
		,'options-text': {
			0:"Shout in french",
			1:"Shout in korean",
			2:"Look around" 
		}
		,'options-redirect': {
			0:21,
			1:22,
			2:23
		}
	},
	19: {
		'info': "You try to force the box, you fail but manage to cut your finger, a welcome distraction from all the pain emanating from your brain."
		,'options-text': {
		    0:"Try again",
			1:"Take a deep breath",
			2:"Read the label",
			3:"Shout for help" 
		}
		,'options-redirect': {
			0:94,
			1:24,
			2:20,
			3:18
		}
	},
	20: {
		'info': "You try to read the label on the box but you can barely see, what the fuck is that blur? Maybe you need glasses?! Or you're just too stunned to focus your vision. Your head throbs in pain."
		,'options-text': {
			0:"Take a deep breath",
			1:"Cry for help" 
		}
		,'options-redirect': {
			0:24,
			1:18
		}
	},
	21: {
		'info': "Your french feels a little rusty but you give it a go. Seems you got the koreans attention, they seem to be heading your way."
		,'options-text': {
			0:"Ask for help",
			1:"Shout in korean",
			2:"Give up" 
		}
		,'options-redirect': {
			0:25,
			1:22,
			2:26
		}
	},
	22: {
		'info': "You can't speak korean you idiot. But the koreans seem to have spotted you now. Does that makes you feel better? Your head throbs in pain."
		,'options-text': {
			0:"Beg the koreans to help you",
			1:"Give up" 
		}
		,'options-redirect': {
			0:25,
			1:2
		}
	},
	23: {
		'info': "Where the fuck are you anyways? You look around squinting your eyes and manage to notice kanji neons glowing outside. Is that good or bad?! You suddenly remember you took on a \"business trip\" to Japan... How did you end up in Korea? Or maybe you're still in Japan. If so, why would those guys be talking in korean?!"
		,'options-text': {
			0:"Try to remember",
			1:"Give up"
		}
		,'options-redirect': {
			0:96,
			1:26
		}
	},
	24: {
		'info': "You take a deep breath and collect your thoughts. You were in Hong Kong, or was it Japan? You were hired for a zot run on zero ground. No! Not hired... They had something to force you to come down to zero ground. What the hell was it? Your ID dox?! No... Something else... What was it? Anyways, that's why you ghost nuked yourself out of the network, to break out while they were distracted. You need to move fast."
		,'options-text': {
			0:"Try to open the box of pills again",
			1:"Stay calm"
		}
		,'options-redirect': {
			0:27,
			1:28
		}
	},
	25: {
		'info': "You ask the koreans to help you. They start barking shit at you. Your transcoder translates 'What the fuck are you doing? You run zot mission! We help you?! Yes! We help you die! And also flag your bitch!'"
		,'options-text': {
			0:"Shit yourself"
		}
		,'options-redirect': {
			0:2
		}
	},
	26: {
		'info': "You collapse on the floor. The koreans find you. You won't wake up ever again.'"
		,'update': function() {
				dead = true;
		}
	},
	27: {
		'info': "You wrestle with the box of pills. Finally managing to get one out. Still unable to read the label."
		,'options-text': {
			0:"Pop the pill",
			1:"Stay calm"
		}
		,'options-redirect': {
			0:29,
			1:28
		}
	},
	28: {
		'info': "You take another deep breath and start remembering more things. Koreans bad. Need to escape from zot run. Packed collateral. Packed collateral?!? Whatever the fuck that is it sounds good! Packed where? Your pocket?!?"
		,'options-text': {
			0:"Check pocket again",
			1:"Give up"
		}
		,'options-redirect': {
			0:30,
			1:26
		}
	},
	29: {
		'info': "You take the pill and wonder how long it takes for it to take effect. What the hell did you take anyways? O...XYPADRO...NAMEDIVAL... Is that good?"
		,'options-text': {
			0:"Stay calm",
			1:"Give up"
		}
		,'options-redirect': {
			0:28,
			1:26
		}
		,'update': function() {
				oxypadronamedival = true;
		}
	},
	30: {
		'info': "You check your pocket again. Luckily you're now starting to be able to move, you would never have managed to get this <b>gun</b> out otherwise. For a second there you wished it was actually a cure for the horrible pain in your head. You recall this was your first ghost nuke exit, PJ did say something about brain stem surge pain, possible complications, blablabla... Aspirin! That's what you need, Aspirin. The red kind preferably. Your head hurts like a motherfucker."
		,'options-text': {
			0:"Get up"
		}
		,'options-redirect': {
			0:31
		}
	},
	31: {
		'info': "Right, let's try to get up on our feet again shall we? Easy does it! Seems you can manage it... Now what?"
		,'options-text': {
			0:"Give it a minute to steady up",
			1:"Run for the door"
		}
		,'options-redirect': {
			0:32,
			1:33
		}
	},
	32: {
		'info': "You take a moment to steady yourself and look around. You're in a bedroom of some sort. The Koreans are talking in the kitchen in front of you, there is a bathroom on your left, a window right next to the bed and the hallway to the entrance door on your right."
		,'options-text': {
			0:"Look around for anything useful",
			1:"Run for the entrance door",
			2:"Storm the kitchen",
			3:"Quietly check the bathroom for aspirin",
			4:"Jump out the window"
		}
		,'options-redirect': {
			0:34,
			1:35,
			2:36,
			3:37,
			4:38
		}
		,'update': function() {
			playAudio(2);
			drawCanvas4(document.getElementById('top'));
		}
	},
	33: {
		'info': "You make a run for the nearest door, stumbling your way through the room. The koreans notice your movement but you manage to make it! You're in a bathroom now."
		,'options-text': {
			0:"Shit yourself",
			1:"Look for a way out"
		}
		,'options-redirect': {
			0:39,
			1:(Math.random()>0.5)?89:40
		}
		,'update': function() {
			playAudio(3);
		}
	},
	34: {
		'info': "You take a fast look around the bedroom but don't see anything particularly useful. What now?"
		,'options-text': {
			0:"Run for the entrance door",
			1:"Storm the kitchen",
			2:"Quietly check the bathroom for aspirin",
			3:"Jump out the window"
		}
		,'options-redirect': {
			0:35,
			1:36,
			2:37,
			3:38
		}
	},
	35: {
		'info': "You make a run for it. The entrance door is locked. The koreans must have heard you."
		,'options-text': {
			0:"Unlock the entrance door",
			1:"Turn around and shoot the koreans"
		}
		,'options-redirect': {
			0:48,
			1:49
		}
		,'update': function() {
			playAudio(3);
		}
	},
	36: {
		'info': "You storm the kitchen and shoot the koreans before they can draw their weapons. Well, that was easy. What now?"
		,'options-text': {
			0:"Get out",
			1:"Look around"
		}
		,'options-redirect': {
			0:46,
			1:47
		}
		,'update': function() {
			playAudio(4);
			var element = document.getElementById('top');
			clearElement(element);
			element.innerHTML = '<img src="images/ch1_p36.jpg" />';
		}
	},
	37: {
		'info': "You sneak into the bathroom and start looking for aspirin. You notice some on the top shelf. The koreans seem to have stop talking."
		,'options-text': {
			0:"Get aspirin",
			1:"Check on the koreans"
		}
		,'options-redirect': {
			0:50,
			1:51
		}
	},
	38: {
		'info': "You bravely jump out the window, miss the fire escape by an inch and fly 5 stories down before smashing on a parked car. You would probably get extra points for style, if anyone was keeping score."
		,'update': function() {
				dead = true;
		}
	},
	39: {
		'info': "You start to shit yourself but this is no time for being a pussy, you have a gun for fucks sake!"
		,'options-text': {
			0:"Shoot your way out of the bathroom",
			1:"Look for a way out"
		}
		,'options-redirect': {
			0:41,
			1:(Math.random()>0.5)?89:40
		}
	},
	40: {
		'info': "You break the bathroom window and climb your way to the fire escape. You seem to be on the 5th floor. Go up or down?"
		,'options-text': {
			0:"Go up",
			1:"Go down"
		}
		,'options-redirect': {
			0:44,
			1:45
		}
	},
	41: {
		'info': "You take a deep breath and then suddenly open the door and start shooting. You surprise one of the fuckers, the tall one, with a shot to the leg, he loses his balance and leans towards you. The other korean fires his gun in response. You get hit in the shoulder."
		,'options-text': {
			0:"Push the tall korean out of the way and run for the door",
			1:"Shoot the other korean"
		}
		,'options-redirect': {
			0:42,
			1:43
		}
		,'update': function() {
				shouldershot = true;
		}
	},
	42: {
		'info': "You push the tall korean out of the way with your good hand. He falls down offering the other korean a clear shot at your head. You feel no headache anymore. That's good, right?"
		,'options-text': {
			0:"Die"
		}
		,'options-redirect': {
			0:2
		}
	},
	43: {
		'info': "You empty your clip at the other korean. He fires several shots back at you. Luckily most of them hit the tall guy shielding you. Both koreans are now shot dead. This would look great on your resume!"
		,'options-text': {
			0:"Get out",
			1:"Look around"
		}
		,'options-redirect': {
			0:46,
			1:47
		}
	},
	44: {
		'info': "You go up the fire escape. A shot fired by one of the koreans grazes your leg."
		,'options-text': {
			0:"Get to the rooftop"
		}
		,'options-redirect': {
			0:52
		}
	},
	45: {
		'info': "You go down the fire escape. Your head barely ducking a shot fired by one of the koreans. You have to move fast!"
		,'options-text': {
			0:"Fly downstairs"
		}
		,'options-redirect': {
			0:53
		}
	},
	46: {
		'info': "You leave the apartment and catch the first podcab you can spot. Where would you like to go?"
		,'options-text': {
			0:"Home",
			1:"Airport",
			2:"Think for a second"
		}
		,'options-redirect': {
			0:76,
			1:77,
			2:79
		}
	},
	47: {
		'info': "You take a look around the apartment. Some snacks, a clip of ammo and some aspirin."
		,'options-text': {
			0:"Get everything useful and get out"
		}
		,'options-redirect': {
			0:80
		}
	},
	48: {
		'info': "You try to unlock the entrance door but the koreans are too fast for you. They shoot you dead."
		,'update': function() {
			dead = true;
		}
	},
	49: {
		'info': "You decide to turn around and shoot your way out of this mess. You get shot in the shoulder but still manage to kill both of the koreans before they take you out."
		,'options-text': {
			0:"Look around",
			1:"Get out"
		}
		,'options-redirect': {
			0:47,
			1:46
		}
		,'update': function() {
			shouldershot = true;
		}
	},
	50: {
		'info': "You get the aspirin. When you turn around one of the koreans is standing there with his gun drawn."
		,'options-text': {
			0:"Headbutt the korean",
			1:"Slam the bathroom door on his face",
			2:"Kick the korean in the groin"
		}
		,'options-redirect': {
			0:81,
			1:82,
			2:83
		}
		,'update': function() {
			aspirin = true;
		}
	},
	51: {
		'info': "You peek into the hallway and notice one of the koreans is heading your way. He is holding his gun but doesn't seem alarmed. Maybe he is just going to the bathroom with a very bad timing."
		,'options-text': {
			0:"Shoot him",
			1:"Slam the door"
		}
		,'options-redirect': {
			0:90,
			1:91
		}
		,'update': function() {
			aspirin = true;
		}
	},
	52: {
		'info': "You reach the rooftop, the koreans are right behind you. Your head still aches like hell. Now what?"
		,'options-text': {
			0:"Try to surprise them",
			1:"Run for your life"
		}
		,'options-redirect': {
			0:54,
			1:55			
		}
	},
	53: {
		'info': "You jump down the first flight of stairs. The koreans are chasing you down. You need to hurry!"
		,'options-text': {
			0:"Fly downstairs",
			1:"Shoot"
		}
		,'options-redirect': {
			0:56,
			1:57
			
		}
	},
	54: {
		'info': "You wait until the koreans climb up. The shorter one pops out first and you shoot him in the head. He falls on top of the other one and throws him down the stairs."
		,'options-text': {
			0:"Look for an escape",
			1:"Shoot the other korean"
		}
		,'options-redirect': {
			0:85,
			1:86
		}
	},
	55: {
		'info': "You run a few meters until you hear a gunshot behind you. It's no use, they already have you in their sights."
		,'options-text': {
			0:"Surrender"
		}
		,'options-redirect': {
			0:84
		}
	},
	56: {
		'info': "You jump down the second flight of stairs. The koreans are still chasing you but you seem to be gaining some ground."
		,'options-text': {
			0:"Fly downstairs"
		}
		,'options-redirect': {
			0:58
		}
	},
	57: {
		'info': "You take a shot at the koreans. Almost hit one of them."
		,'options-text': {
			0:"Shoot again",
			1:"Fly downstairs"
		}
		,'options-redirect': {
			0:73,
			1:58
		}
	},		
	58: {
		'info': "You jump down all remaining flights of stairs from the fire escape until you reach the first floor. You see a garbage bin next to the fire escape. Might be a shortcut if you don't kill yourself jumping. The koreans seem to still be up on the third floor."
		,'options-text': {
			0:"Go down",
			1:"Jump down"
		}
		,'options-redirect': {
			0:59,
			1:60	
		}
	},
	59: {
		'info': "You try to go down the last flight of stairs but the retractable ladder connecting to the ground floor seems to be jammed. The koreans are on the second floor."
		,'options-text': {
			0:"Force it",
			1:"Jump down"
		}
		,'options-redirect': {
			0:61,
			1:60	
		}
	},
	60: {
		'info': "You jump down into the trash bin, bang your head, bruise your arm, twist your ankle and lose your gun. The koreans look over the ledge and call you a crazy motherfucker."
		,'options-text': {
			0:"Get the hell out of there",
			1:"Show them the finger",
			2:"Find your gun"
		}
		,'options-redirect': {
			0:62,
			1:63,
			2:63
		}
		,'update': function() {
			lostgun = true;
		}
	},	
	61: {
		'info': "You try to force the escape ladder but can't seem to manage to get it to open. The koreans are upon you."
		,'options-text': {
			0:"Give up"
		}
		,'options-redirect': {
			0:84
		}
	},	
	62: {
		'info': "You climb out of the trash bin while the koreans are trying to shoot at you. You feeling lucky today?"
		,'options-text': {
			0:"Luck is my middle name",
			1:"Fuck that shit"
		}
		,'options-redirect': {
			0:function(){ return (!shouldershot && Math.random()>0.5)?65:64 },
			1:function(){ return (!shouldershot && Math.random()>0.5)?65:64 }
		}
	},
	63: {
		'info': "Congratulations! You found it! The best way to get yourself shot! One of the koreans shoots your leg while the other carelessly hits you in the head. He's gonna get a mouth full from his boss for not capturing you alive. Does that make you feel any better?"
		,'update': function() {
			dead = true;
		}
	},
	64: {
		'info': "You avoid another bullet and run into the open street. You see a vacant podcab. That might do the trick to get the hell out of here."
		,'options-text': {
			0:"Enter the podcab"
		}
		,'options-redirect': {
			0:68
		}
	},
	65: {
		'info': "You get shot in the shoulder but manage to get the hell out of the alley. Where the fuck are you anyway?"
		,'options-text': {
			0:"Look around",
			1:"Keep running"
		}
		,'options-redirect': {
			0:66,
			1:67
		}
		,'update': function() {
			shouldershot = true;
		}
	},
	66: {
		'info': "You see a vacant podcab!"
		,'options-text': {
			0:"Enter the podcab"
		}
		,'options-redirect': {
			0:68
		}
	},
	67: {
		'info': "You keep running down the open street. Your headache is killing you. You notice a crowd nearby. The koreans seemed to have lost chase."
		,'options-text': {
			0:"Figure out where you are",
			1:"Enter the crowd"
		}
		,'options-redirect': {
			0:69,
			1:70
		}
	},
	68: {
		'info': "You hurry inside the podcab and look into the iris scanner. A voice requests your destination."
		,'options-text': {
			0:"Anywhere",
			1:"Home",
			2:"The airport",
			3:"Closest hotel",
			4:"Think for a second"
		}
		,'options-redirect': {
			0:75,
			1:76,
			2:77,
			3:78,
			4:79
		}
	},
	69: {
		'info': "Wait a minute. You recall this is Japan. You also recall Japan has the highest density of infected per square meter in the world. Oh shit! Are the ones on that crowd up ahead smelling you yet?"
		,'options-text': {
			0:"Look for a podcab",
			1:"Head back"
		}
		,'options-redirect': {
			0:71,
			1:72
		}
	},
	70: {
		'info': "You enter the crowd. Too late to notice they are actually a mob of zombies. They welcome you with open arms and don't mind much over your headache."
		,'update': function() {
			dead = true;
		}
	},
	71: {
		'info': "You see a vacant podcab!"
		,'options-text': {
			0:"Enter the podcab"
		}
		,'options-redirect': {
			0:68
		}
	},
	72: {
		'info': "You head back to the alley and run into the koreans. They sure seem glad to have running back to them!"
		,'options-text': {
			0:"Give up"
		}
		,'options-redirect': {
			0:84
		}
	},
	73: {
		'info': "You take another shot at the koreans. You miss. They shoot back and hit you in the shoulder. You fall down one floor of the fire escape staircase and drop your gun into the alley below."
		,'options-text': {
			0:"Get up and running"
		}
		,'options-redirect': {
			0:74
		}
		,'update': function() {
			shouldershot = true;
		}
	},
	74: {
		'info': "You stumble down the last flights of stairs trying not to think of the pain. Trying to open the retractable staircase you trip on it and unable to brace yourself you fall on top of it. The retractable staircase breaks and you slam down on the groundfloor face first with your good arm helping you."
		,'options-text': {
			0:"Get up and running"
		}
		,'options-redirect': {
			0:64
		}
	},	
	75: {
		'info': "Destination unknown. Where would you like to go?"
		,'options-text': {
			0:"Home",
			1:"The airport",
			2:"Closest hotel",
			3:"Think for a second"
		}
		,'options-redirect': {
			0:76,
			1:77,
			2:78,
			3:79
		}
	},
	76: {
		'info': "You want to go home?!? And where is that exactly?"
		,'options-text': {
			0:"Think for a second"
		}
		,'options-redirect': {
			0:79
		}
	},
	77: {
		'info': "Wouldn't it be nice to just fly away? Sadly you can't."
		,'options-text': {
			0:"Think for a second"
		}
		,'options-redirect': {
			0:79
		}
	},
	78: {
		'info': "You could really use a rest but it seems you already are at the closest hotel, you just left! Maybe you should go somewhere else?"
		,'options-text': {
			0:"Home",
			1:"The airport",
			2:"Think for a second"
		}
		,'options-redirect': {
			0:76,
			1:77,
			2:79
		}
	},
	79: {
		'info': function(){ return "You instruct the podcab to drive around while you try to figure things out. "+(aspirin?"Atleast you took some aspirin, should help with the headache. ":"If only you had some aspirin, fuck your brain hurts so bad. ")+(shouldershot?"The shot to the shoulder doesn't seem to be as bad as it looks, but would be nice to clean it up somewhere safe. ":"Thank goodness you managed to get away from those korean guys. ")+(oxypadronamedival?"You wonder what that oxypawhatever pill does, would be nice to go online and check it. ":"")+"Maybe it would be smart to log back into the network. Might help with the memory loss atleast." }
		,'options-text': {
			0:"Log in"
		}
		,'options-redirect': {
			0:95
		}
		/*,'update': function() {
				chapter = 2;
		}*/
	},
	80: {
		'info': "You down the aspirin with a glass of water, take the extra ammo clip and head downstairs."
		,'options-text': {
			0:"Catch a podcab"
		}
		,'options-redirect': {
			0:46
		}
		,'update': function() {
			aspirin = true;
			extraammo = true;
		}
	},
	81: {
		'info': "You headbutt the korean, he stumbles back a few steps and shoots you in the leg. Kind of hard to go anywhere now."
		,'options-text': {
			0:"Surrender"
		}
		,'options-redirect': {
			0:84
		}
		,'update': function() {
			playAudio(3);
		}
	},
	82: {
		'info': "You try to slam the door on the korean, he blocks it and points the gun to your head."
		,'options-text': {
			0:"Surrender"
		}
		,'options-redirect': {
			0:84
		}
		,'update': function() {
			playAudio(3);
		}
	},
	83: {
		'info': "You kick the korean in the groin. He falls to the floor. He seems to have forgotten about holding a gun, you haven't and decide to shoot him in the head. The other korean shows up looking surprised."
		,'options-text': {
			0:"Shoot the other korean",
			1:"Surrender"
		}
		,'options-redirect': {
			0:86,
			1:88
		}
		,'update': function() {
			playAudio(3);
		}
	},		
	84: {
		'info': "The koreans take you back to the bedroom in the apartment and knock you out with a hit to the back of your head. That was your last experience under a seering sky."
		,'update': function() {
			dead = true;
		}
	},
	85: {
		'info': "You take a look around the rooftop for an escape route. Main staircase is blocked. You decide to jump to another building. No sign of the other korean guy."
		,'options-text': {
			0:"Go down and catch a podcab"
		}
		,'options-redirect': {
			0:46
		}
	},	
	86: {
		'info': "You quickly aim at the other korean and take him out. Now, shall we get the hell out of this place?"
		,'options-text': {
			0:"Go out and catch a podcab"
		}
		,'options-redirect': {
			0:46,
		}
	},	
	88: {
		'info': "The other korean guy takes your gun away, forces you to your knees and knocks you out with a blow to the back of your head. And that was that."
		,'update': function() {
			dead = true;
		}
	},	
	89: {
		'info': "You can't find a way out of the bathroom. One of the koreans knocks the door down and disarms you."
		,'options-text': {
			0:"Surrender"
		}
		,'options-redirect': {
			0:88
		}
	},
	90: {
		'info': "You jump the korean that is heading your way and shoot him in the stomach."
		,'options-text': {
			0:"Shoot the other korean",
			1:"Head for the door"
		}
		,'options-redirect': {
			0:92,
			1:93
		}
		,'update': function() {
			playAudio(3);
		}
	},
	91: {
		'info': "You slam the bathroom door and start to panic."
		,'options-text': {
			0:"Shit yourself",
			1:"Look for a way out"
		}
		,'options-redirect': {
			0:39,
			1:(Math.random()>0.75)?89:40
		}
		,'update': function() {
			playAudio(3);
		}
	},
	92: {
		'info': "You jump the korean that is heading your way and shoot him in the stomach."
		,'options-text': {
			0:"Shoot the other korean",
			1:"Head for the door"
		}
		,'options-redirect': {
			0:86,
			1:93
		}
	},
	93: {
		'info': "You run for the door. It is locked. The other korean shows up and shoots you from behind. Have a nice day!"
		,'update': function() {
			dead = true;
		}
	},
	94: {
		'info': "It's no use, you are still too weak to be able to open it."
		,'options-text': {
		    0:"Take a deep breath",
			1:"Read the label",
			2:"Shout for help" 
		}
		,'options-redirect': {
			0:24,
			1:20,
			2:18
		}
	},
	95: {
		'info': "You login to the network. Remember, big brother is always watching."
		,'options-text': {
		    0:"Activate VPN",
			1:"Activate proxy",
			2:"Spoof your address"
		}
		,'options-redirect': {
			0:0, //linking to chapter 2
			1:1,
			2:2
		},'update': function() {
				//login graphics of network
			chapter = 2;
			document.body.style.backgroundColor = "#000";
			document.body.style.color = "#fff";
			//drawCanvas3(document.getElementById('top'), true);
		},
		'pre': function() {
				//chapter = 2;
		}
	},
	96: {
		'info': "You take a deep breath and collect your thoughts. You were in Hong Kong, or was it Japan? You were hired for a zot run on zero ground. No! Not hired... They had something to force you to come down to zero ground. What the hell was it? Your ID dox?! No... Something else... What was it?! Anyways, that's why you ghost nuked yourself out of the network, to break out while they were distracted. You suddenly recall you packed your gun with you!"
		,'options-text': {
			0:"Check your pocket"
		}
		,'options-redirect': {
			0:30
		}
	},
	97: {
		'info': "You are not in a cave, there are no lamps here!<br>What would you like to do?"
		,'options-text': {
		    0:"Feel around",
			1:"Wait"
		}
		,'options-redirect': {
			0:1,
			1:2
		}
		,'update': function() {
			drawBlack(document.getElementById('top'));
		}
	},
};