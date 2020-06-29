function takingMoney(){
  var taka = document.getElementById('taka').value;
  var emoticon = document.getElementsByClassName('img-gif');

  if(taka == "" || taka<0){
    for(i = 0; i < 7; i++){
      emoticon[i].style.display = 'none'
    }
    emoticon[0].style.display = 'block'
  }
  else if(taka == 0){
    for(i = 0; i < 7; i++){
      emoticon[i].style.display = 'none'
    }
    emoticon[1].style.display = 'block'
  }
  else if(taka>=1 && taka<=9){
    for(i = 0; i < 7; i++){
      emoticon[i].style.display = 'none'
    }
    emoticon[2].style.display = 'block'
  }
  else if(taka>=10 && taka<=49){
    for(i = 0; i < 7; i++){
      emoticon[i].style.display = 'none'
    }
    emoticon[3].style.display = 'block'
  }
  else if(taka>=50 && taka<=99){
    for(i = 0; i < 7; i++){
      emoticon[i].style.display = 'none'
    }
    emoticon[4].style.display = 'block'
  }
  else if(taka>=100 && taka<=499){
    for(i = 0; i < 7; i++){
      emoticon[i].style.display = 'none'
    }
    emoticon[5].style.display = 'block'
  }
  else if(taka>=500 && taka<=999){
    for(i = 0; i < 7; i++){
      emoticon[i].style.display = 'none'
    }
    emoticon[6].style.display = 'block'
  }
  else if(taka>=1000){
    for(i = 0; i < 7; i++){
      emoticon[i].style.display = 'none'
    }
    emoticon[7].style.display = 'block'
  }
}

document.getElementById('give-btn').addEventListener('click',takingMoney);