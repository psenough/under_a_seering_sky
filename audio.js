
var extension = ".ogg";

var ua = navigator.userAgent.toLowerCase(); 
if (ua.indexOf('safari')!=-1){ 
	if(ua.indexOf('chrome')  > -1){
		//its chrome
	}else{
		//its safari
		extension = ".mp3";
	}
}

var audio = [];

audio[0] = new Audio();
audio[0].addEventListener('canplaythrough', audioLoaded, false);
audio[0].loop = true;
audio[0].src = 'tracks/01_ps-332_051230'+extension;

audio[1] = new Audio();
audio[1].addEventListener('canplaythrough', audioLoaded, false);
audio[1].loop = true;
audio[1].src = 'tracks/04_ps-332c_060105'+extension;

audio[2] = new Audio();
audio[2].addEventListener('canplaythrough', audioLoaded, false);
audio[2].loop = true;
audio[2].src = 'tracks/01_rngmnn_-_what_goes_around_comes_around'+extension;

audio[3] = new Audio();
audio[3].addEventListener('canplaythrough', audioLoaded, false);
audio[3].loop = true;
audio[3].src = 'tracks/09_un_-_one_last_look'+extension;
audio[3]._volume = 0.6;

audio[4] = new Audio();
audio[4].addEventListener('canplaythrough', audioLoaded, false);
audio[4].loop = true;
audio[4].src = 'tracks/05_aktivehate_-_ugly_inside'+extension;
audio[4]._volume = 0.1;

audio[5] = new Audio();
audio[5].addEventListener('canplaythrough', audioLoaded, false);
audio[5].loop = true;
audio[5].src = 'tracks/05_aktivehate_-_ugly_inside'+extension;
audio[5]._volume = 0.1;

audio[6] = new Audio();
audio[6].addEventListener('canplaythrough', audioLoaded, false);
audio[6].loop = true;
audio[6].src = 'tracks/13_duncan_avoid_-_mind_breach__danny_kreutzfeldt_version_'+extension;
audio[6]._volume = 0.8;

audio[7] = new Audio();
audio[7].addEventListener('canplaythrough', audioLoaded, false);
audio[7].loop = true;
audio[7].src = 'tracks/02_un_-_the_tempest'+extension;
audio[7]._volume = 0.7;

audio[8] = new Audio();
audio[8].addEventListener('canplaythrough', audioLoaded, false);
audio[8].loop = true;
audio[8].src = 'tracks/kooitriplexcd2_11-p5'+extension;

audio[9] = new Audio();
audio[9].addEventListener('canplaythrough', audioLoaded, false);
audio[9].loop = true;
audio[9].src = 'tracks/01_edgeist_-_dawn'+extension;
audio[9]._volume = 0.7;

var activeaudio = null;
var loadedaudio = 0;
var timeout;

// good idea to preload, except it takes too long to start playing
function audioLoaded() {
	//loadedaudio++;
	//if (loadedaudio == audio.length) init(); //doneLoadingAudio();
}


function playAudio(id) {

	var prev = activeaudio;
	activeaudio = id;
	audio[activeaudio].volume = 0.0;
	audio[activeaudio].play();
	
	if (timeout) {
		clearTimeout(timeout);
	}
	
	function doFade() {
		timeout = setTimeout( function() {
			
			var ready = 0;
			var target = 1.0;
			
			if (audio[activeaudio]._volume) target = audio[activeaudio]._volume;
			
			if ( audio[activeaudio].volume < target ) {
				var vol = audio[activeaudio].volume + 0.05;
				if (vol >= target ) audio[activeaudio].volume = target;
				 else audio[activeaudio].volume = vol;
			} else {
				ready++;
			}
			
			for (i=0; i< audio.length; i++) {
				if (i !== activeaudio) {
					if ( audio[i].volume > 0.0 ) {
						vol = audio[i].volume - 0.05;
						if (vol < 0.0 ) audio[i].volume = 0.0;
						 else audio[i].volume = vol;
					} else {
						//console.log(i + " ready");
						ready++;
						audio[i].pause();
					}
				}
			}

			//console.log(activeaudio + " " + audio.length + " " + ready + " " + audio[activeaudio].volume + " " + target);
			
			if (ready == audio.length) {
				//if (prev) audio[prev].pause();
				//console.log("finished crossfade");
			} else {
				doFade();
			}
		}, 200 );
	}
	
	doFade();
}
