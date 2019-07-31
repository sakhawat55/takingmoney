function takingMoney(){
  var taka = document.getElementById("taka").value;
  if(taka == ""){
    document.getElementById("img-gif").setAttribute("src","src/img/0.gif");
  }
  else if(taka == 0){
    document.getElementById("img-gif").setAttribute("src","src/img/1.gif");
  }
  else if(taka>=1 && taka<=9){
    document.getElementById("img-gif").setAttribute("src","src/img/2.gif");
  }
  else if(taka>=10 && taka<=49){
    document.getElementById("img-gif").setAttribute("src","src/img/3.gif");
  }
  else if(taka>=50 && taka<=99){
    document.getElementById("img-gif").setAttribute("src","src/img/4.gif");
  }
  else if(taka>=100 && taka<=499){
    document.getElementById("img-gif").setAttribute("src","src/img/5.gif");
  }
  else if(taka>=500 && taka<=999){
    document.getElementById("img-gif").setAttribute("src","src/img/6.gif");
  }
  else if(taka>=1000){
    document.getElementById("img-gif").setAttribute("src","src/img/7.gif");
  }
}

document.getElementById("give-btn").addEventListener("click",takingMoney);