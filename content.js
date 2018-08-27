console.log("chrome extension enabled");
var str = document.body.innerText;
str=str.toString();
var totalSoFar = 0;
  for (var i = 0; i < str.length; i++)
  {
  	
  	
    if (str[i] == " ") { // if a space is found in str
      totalSoFar= totalSoFar+1;
     // console.log("wc after if" +totalSoFar); // add 1 to total so far
  } 
  }

  //totalsoFar += 1; // add 1 to totalsoFar to account for extra space since 1 space = 2 words
alert("the wordcount is:  " +totalSoFar)