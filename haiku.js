
	function postHaiku() {
	
		var metagenhaiku = {"genhaikus":{"Under a Seering Sky - ps":{"forms":{"form1":{"first":{"0":[19,"suddenly"],"1":[21,"in"],"2":[7,"north"]},"second":{"0":[17,"west"],"1":["4","in"],"2":[25,"the"],"3":[18,"heaven"]},"third":{"0":[19,"summer"],"1":[9,"engraved"],"2":[3,"by"]}},"form2":{"first":{"0":[3,"my"],"1":[21,"yearn"]},"second":{"0":[0,"summer2"],"1":[7,"and"],"2":[9,"death"]},"third":{"0":[17,"suddenly"],"1":[25,"under"],"2":[29,"north"]}}},"wordlists":{"suddenly":["suddenly","subtle","stranger","seldom","symbiote","select","symbiont"],"in":["in","inner","infer","ill"],"north":["north","narrow","nave"],"west":["west","worship","woe","war","warren","ward"],"the":["the","thee","thy"],"heaven":["heaven","heat","head","help"],"summer":["summer","savour","simply","seldom"],"engraved":["engraved","entailed","ended","ellapsed"],"by":["by","both"],"my":["my","meat","meager","moon","monsoon"],"yearn":["yearn"],"and":["and","after"],"death":["death"],"under":["under","upper","unknown"],"summer2":["savour","summer","simple","saviour"]}}}};
		
		metagenhaiku.addGenHaiku = function( genhaikuname, genhaikuarray ) {
    		metagenhaiku.genhaikus[genhaikuname] = genhaikuarray;
   		}
		
		var ourgenhaiku = metagenhaiku.genhaikus['Under a Seering Sky - ps'];
		
		if (ourgenhaiku) {
			
			ourhaiku = new GenHaiku();
			ourhaiku.wordlists = ourgenhaiku.wordlists;
			ourhaiku.forms = ourgenhaiku.forms;
			
			ourhaiku.getHaiku( md5(new Date().getTime()) );
			
			//if (element) element.innerHTML = ourhaiku.getHaiku( md5(new Date().getTime()) );
			
			//return ourhaiku.getHaiku( md5(new Date().getTime()) );
		}
		
	}

	
	
	// function to get a word form an array, based on ourmd5 index value (limited to 0..16)
	function getword(ourmd5, varthing, arraything) {
		var thisvar = parseInt("0x"+ourmd5.charAt(varthing));
	 	return arraything[thisvar % arraything.length];
	}


// javascript doesnt support associative arrays, but i want to use them, so i reimplemented the wheel
	function getAssociativeArrayLength(thisarray) {
		var ind = 0;
		for (i in thisarray)
		{
			ind++;
		}
		return ind;
	}
	

	function getAssociativeArrayByIndex(thisarray, index) {
		var ind = 0;
		for (i in thisarray)
		{
			if (index == ind) return thisarray[i];
			ind++;
		}
	}
	

	function GenHaiku () {
    	this.forms = {};
    	this.wordlists = {};
    
    	this.addWordList = function( wordlistname, wordlistarray ) {
    		this.wordlists[wordlistname] = wordlistarray;
   		}
    
    	this.addForm = function( formname, formarray ) {
    		this.forms[formname] = formarray;
    	}
    	
    	this.getHaiku = function( ourmd5 ) {
    		var ourhaiku = '';
    		var first = '';
    		var second = '';
    		var third = '';

			var thisform = getAssociativeArrayByIndex(this.forms, parseInt("0x"+ourmd5.charAt(10)) % getAssociativeArrayLength(this.forms));
	 	
			var ourarray;
			var i;
			
    		ourarray = thisform.first;
    		for (i in ourarray)
			{
				first += getword( ourmd5, ourarray[i][0], this.wordlists[ourarray[i][1]] ) + " ";
			}
			
    		ourarray = thisform.second;
    		for (i in ourarray)
			{
				second += getword( ourmd5, ourarray[i][0], this.wordlists[ourarray[i][1]] ) + " ";
			}
			
    		ourarray = thisform.third;
    		for (i in ourarray)
			{
				third += getword( ourmd5, ourarray[i][0], this.wordlists[ourarray[i][1]] ) + " ";
			}
			
			haiku[0] = first;
			haiku[1] = second;
			haiku[2] = third;
			
			ourhaiku = first + '<br />' + second + '<br />' + third;
			return ourhaiku;
    	}
    
	}


	function MetaGenHaiku () {
		this.genhaikus = {};
    	this.addGenHaiku = function( genhaikuname, genhaikuarray ) {
    		this.genhaikus[genhaikuname] = genhaikuarray;
   		}
	}
