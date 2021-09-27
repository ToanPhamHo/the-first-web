// JavaScript Document

var slideIndex = 0;
var slides = document.getElementsByClassName("mySlides");

showSlides();

function showSlides() 
{    
	var i;    
	for (i = 0; i < slides.length; i++) 
	{
		slides[i].style.display = "none"; 
	}
	slideIndex++;
	if (slideIndex> slides.length) 
	{
		slideIndex = 1
	} 
	slides[slideIndex-1].style.display = "block"; 
	setTimeout(showSlides, 8000);
}

function currentSlide(no) 
{
	var i;    
	for (i = 0; i < slides.length; i++) 
	{
		slides[i].style.display = "none"; 
	}
	slideIndex = no;
	slides[no-1].style.display = "block";
}

function plusSlides(n) 
{
  var newslideIndex = slideIndex + n;
  if(newslideIndex < 5 && newslideIndex > 0)
  {
	 currentSlide(newslideIndex);
  }
  else if (newslideIndex == 5){
	  currentSlide(1);
  }
  else if (newslideIndex == 0){
	  currentSlide(4);
  }
}
