	
	function isFunction(functionToCheck) {
	 var getType = {};
	 return functionToCheck && getType.toString.call(functionToCheck) == '[object Function]';
	}

	function submit(par) {
	
		var p = chapters[chapter];
		
		if (p[par]['pre']) {
			p[par]['pre']();
		}
	
		var textout = '';
		if (isFunction(p[par]['info'])) textout = p[par]['info']();
			else textout = p[par]['info'];
		
		console.log(par);
		
		if (p[par]['options-text'] && p[par]['options-redirect']) {
			var dim = Object.keys(p[par]['options-text']).length;
			var dim2 = Object.keys(p[par]['options-redirect']).length;
			if (dim != dim2) {
				console.log("options-text != options-redirect");
				return;
			} else {
				textout += "<div id=\"options\">";
				for (var i=0; i<dim; i++) {
					
					var optext = '';
					if (isFunction(p[par]['options-text'][i])) optext = p[par]['options-text'][i]();
						else optext = p[par]['options-text'][i];
						
					var vlaue = 0;
					if (isFunction(p[par]['options-redirect'][i])) vlaue = p[par]['options-redirect'][i]();
					 else vlaue = p[par]['options-redirect'][i];
					
					textout += '<input type="button" value="'+optext+'" onclick="submit('+vlaue+')">';
				}
				textout += "</div>";
			}
		}
		document.getElementById('board').innerHTML = textout;
		
		if (p[par]['update']) {
			p[par]['update']();	
		}
	}
