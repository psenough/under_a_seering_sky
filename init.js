	
	//global variables
	var paragraph, chapter, dead;
	var chapters = [];
	
	//chapter 1 variables	
	var counter11, oxypadronamedival, shouldershot, aspirin, extraammo, lostgun;

	//chapter 2 variables	
	var pass, pingbitch1, pingbitch2, safehouse_address, localsuppliers_address, startch3inpodcab;
	var haiku = [];
	
	//chapter 3 variables
	var bitch_dox, brainfuck, yhelp, zephelp, cyberfhelp, krommershelp, timehelp;


	
	function init() {

		//global variables
		chapter = 1;
		paragraph = 0;
		dead = false;
		
		//chapter 1 variables
		counter11 = 0;
		oxypadronamedival = false;
		shouldershot = false;
		aspirin = false;
		extraammo = false;
		lostgun = false;
		
		//chapter 2 variables
		pass = '';
		pingbitch1 = false;
		pingbitch2 = false;
		safehouse_address = false;
		localsuppliers_address = false;
		startch3inpodcab = false;
		
		//chapter 3 variables
		bitch_dox = false;
		brainfuck = false;
		yhelp = false;
		zephelp = false;
		cyberfhelp = false;
		krommershelp = false;
		timehelp = false;
		
		//init 
		document.getElementById('top').innerHTML = '<img src="images/title_screen.png">';
		document.getElementById('board').innerHTML = '<div id=\"options\"><input type="button" value="Start!" onclick="submit('+paragraph+')"></div>';
		document.body.style.backgroundColor = "#000";
		document.body.style.color = "#FFF";
		
	}


	function calculateHelp() {
	
		var value = 0;
		
		if (yhelp) value += rand(5);
		if (zephelp) value += rand(10);
		if (cyberfhelp) value += rand(3);
		if (krommershelp) value += rand(6);
		if (timehelp) value += rand(8);
		
		if (value > 6) return true;
		 else return false;

	}
