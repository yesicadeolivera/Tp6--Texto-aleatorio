
function randomise(){
var words=document.myform.wordlist.value;
var spacer="";
words=words.split(document.myform.randomiseby.options[document.myform.randomiseby.selectedIndex].value)
document.myform.code.value="";
var colourscheme=new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F")
for(var time=0;time<=(words.length-1);time++){
if(words[time]==" "){document.myform.code.value+=" "}
if(words[time]!=" "){
spacer=document.myform.randomiseby.options[document.myform.randomiseby.selectedIndex].value;
var c1=Math.round(Math.random()*(colourscheme.length-1));
var c2=Math.round(Math.random()*(colourscheme.length-1));
var c3=Math.round(Math.random()*(colourscheme.length-1));
var c4=Math.round(Math.random()*(colourscheme.length-1));
var c5=Math.round(Math.random()*(colourscheme.length-1));
var c6=Math.round(Math.random()*(colourscheme.length-1));
var size=1+Math.round(Math.random()*6);
document.myform.code.value+="<font color=\"#"+colourscheme[c1]+colourscheme[c2]+colourscheme[c3]+colourscheme[c4]+colourscheme[c5]+colourscheme[c6]+"\" size=\""+size+"\">"+words[time]+"</font>"+spacer+"";
}
}
looks_like.innerHTML=document.myform.code.value;
}
