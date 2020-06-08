var Timer = 0;
var text1 = document.getElementById("forimg1");
var text2 = document.getElementById("forimg2");
var text3 = document.getElementById("forimg3");
var text4 = document.getElementById("forimg4");

setInterval(function(){
	Timer++;

	if (Timer == 6)
	{
		document.getElementById('ImgBackground').src = "Dance2.jpg";
		text1.style.visibility = "hidden";
		text2.style.visibility = "visible";
		document.getElementById("changetitle").innerHTML = "The Dzilla of the Ndebele nation";
	}
	else if (Timer == 12)
	{
		document.getElementById('ImgBackground').src = "Dance3.jpg";
		text2.style.visibility = "hidden";
		text3.style.visibility = "visible";
		document.getElementById("changetitle").innerHTML = "The Sokkie Dance of the afrikaners";
	}
	else if (Timer == 18)
	{
		document.getElementById('ImgBackground').src = "Dance4.jpg";
		text3.style.visibility = "hidden";
		text4.style.visibility = "visible";
		document.getElementById("changetitle").innerHTML = "The cape minstrels of the cape malay people";
	}
	else if (Timer == 24)
	{
		document.getElementById('ImgBackground').src = "Dance.jpg";
		text4.style.visibility = "hidden";
		text1.style.visibility = "visible";
		document.getElementById("changetitle").innerHTML = "The ingoma dance of the Zulu nation";
		Timer = 0;	
	}
}, 1000);
