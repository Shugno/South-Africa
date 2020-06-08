var imgDiv = document.getElementById("img1Text");

var pos = 0;
var Font = 25;
var Timer = 0;

var text1 = document.getElementById("forimg1");
var text2 = document.getElementById("forimg2");
var text3 = document.getElementById("forimg3");
var text4 = document.getElementById("forimg4");

var img = document.getElementById("roundImg");
img.mouseIsOver = false;

var text = document.getElementById("animText1");

function testnew()
{
    var t = setInterval(test1, 10);
    function test1 ()
{
     if (pos > 0 && img.mouseIsOver == false)
     {
         clearInterval(t);
     }
     if (pos >= 900)
     {
        clearInterval(t);
     }
     else
     {
         pos += 18;
         if (pos >= 700)
         {
             text.style.visibility = "visible";
         }
         imgDiv.style.width = pos + "px";
         img.mouseIsOver = true;
     }
}
}

function testback()
{
    t = setInterval(test2, 10);
    function test2 ()
    {
        if (pos <= 0)
        {
            clearInterval(t);
        }
        else
        {
            if (pos <= 700)
            {
                Font -= 9;
                text.style.left = Font + "px";
                if (pos <= 700)
                {
                    text.style.visibility = "hidden";
                    text.style.left = "0.2vw";
                }
            }
            pos -= 18;
            imgDiv.style.width = pos + "px";
            img.mouseIsOver = false;
        }
    }
}

setInterval(function(){
	Timer++;

	if (Timer == 10)
	{
		document.getElementById('ImgBackground').src = "Tradition.jpg";
		text1.style.visibility = "hidden";
		text2.style.visibility = "visible";
	}
	else if (Timer == 22)
	{
		document.getElementById('ImgBackground').src = "africacool.png";
		text2.style.visibility = "hidden";
		text3.style.visibility = "visible";
	}

	else if (Timer == 34)
	{
		document.getElementById('ImgBackground').src = "finbild.jpg";
		text4.style.visibility = "hidden";
		text1.style.visibility = "visible";
		Timer = 0;	
	}
}, 1000);
