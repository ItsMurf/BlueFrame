var audio = new Audio('music.mp3');
var randomNumber = Math.floor(Math.random() * 8)
var fns = {
	na: function(){

	},
	music: function(){
		audio.play();
	},
	reload: function(){
		location.reload();
	},
	pause: function(){
		audio.pause();
	},
	openWebsite: function(link){
  		//window.open("http://"+link)
	},
	compliment: function(){
		chooseComplement()
	},
	spreadsheet: function(){
		window.open("https://docs.google.com/spreadsheets/d/1jQFyT4vzWSBylQhY7v9rwtKQVP4QJjS_dRLhPKG_BRQ/edit#gid=0")
	},
	github: function(){
		window.open("https://github.com/sethduffin/Susie2.0")
	},
}
function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
function finishFunction(row) {
	var heard = '"'+capitalizeFirstLetter(row.listen.replace(')','').replace('(',''))+'"'
	$('#said').text(heard)
  	$('#said').addClass("fadein")
		setTimeout(function(){
			$('#said').removeClass("fadein");
			$('#said').addClass("fadeout");
			$('#said').css('opacity', '0');
		}, 900)
	$('#listening').hide();
	setTimeout(function(){
		$('#said').text("")
		$('#said').css('opacity', '1');
		$('#said').removeClass("fadein fadeout");
		$('#listening').show();
	}, 1900)
}
function chooseComplement() {
	var compliment = [
			"Your smile is contagious.",
			"You look great today.",
			"You have the best laugh.",
			"You should be proud of yourself.",
			"You have a great sense of humor.",
			"You are brave.",
			"You're so thoughtful.",
			"Your hair looks stunning"
		]
	responsiveVoice.speak(compliment[randomNumber])
}