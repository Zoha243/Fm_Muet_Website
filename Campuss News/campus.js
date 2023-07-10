function myFunction(paragraphNumber) {
    var dots = document.getElementById("dots" + paragraphNumber);
    var moreText = document.getElementById("more" + paragraphNumber);
    var btnText = document.getElementById("myBtn" + paragraphNumber);
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }