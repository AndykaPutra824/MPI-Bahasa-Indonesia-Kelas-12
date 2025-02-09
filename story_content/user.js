function ExecuteScript(strId)
{
  switch (strId)
  {
      case "60s2I5IWaJg":
        Script1();
        break;
      case "5xmfk4AdghK":
        Script2();
        break;
      case "6jySoLFKIOt":
        Script3();
        break;
      case "5mxTcmgmOIF":
        Script4();
        break;
      case "69YtmiNzYAp":
        Script5();
        break;
      case "5VCFZfpcL2n":
        Script6();
        break;
  }
}

function Script1()
{
  function add_line() {

    var line = document.createElement("audio");

    var head=document.getElementsByTagName('body')[0];

    line.type = "audio/mp3";

    line.src="";

    line.id="bgSong" ;

	line.autoplay = true;

	line.loop = true;

    head.appendChild(line);

}



//but we only want to add these once!

if(document.getElementById('bgSong')==null){

	add_line();

var audio = document.getElementById('bgSong');

audio.volume = 0.5;

}



}

function Script2()
{
  var audio = document.getElementById('bgSongku');
audio.src="musikku.mp3";

audio.load();
audio.play();

audio.volume=0.3;
}

function Script3()
{
  var audio = document.getElementById('bgSong');
audio.src="story_content/external_files/citta natale.mp3";

audio.load();

audio.play();
}

function Script4()
{
  var audio = document.getElementById('bgSong');
audio.src="story_content/external_files/citta natale.mp3";

audio.load();

audio.pause();
}

function Script5()
{
  function add_line() {

    var line = document.createElement("audio");

    var head=document.getElementsByTagName('body')[0];

    line.type = "audio/mp3";
    line.src="";

    line.id="bgSong" ;

	line.autoplay = true;

	line.loop = true;

    head.appendChild(line);

}


//but we only want to add these once!

if(document.getElementById('bgSong')==null)
{
	
add_line();
var audio = document.getElementById('bgSong');

audio.volume = 0.5;

}


}

function Script6()
{
  var audio = document.getElementById('bgSong');
audio.src="story_content/external_files/citta natale.mp3";

audio.load();
audio.play();
}

