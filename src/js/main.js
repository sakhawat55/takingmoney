function takingMoney(){
  var taka = document.getElementById("taka").value;
  if(taka == "" || taka<0){
    $('.img-gif').css('display','none');
    $('.img-gif.a').css('display','block');
  }
  else if(taka == 0){
    $('.img-gif').css('display','none');
    $('.img-gif.b').css('display','block');
  }
  else if(taka>=1 && taka<=9){
    $('.img-gif').css('display','none');
    $('.img-gif.c').css('display','block');
  }
  else if(taka>=10 && taka<=49){
    $('.img-gif').css('display','none');
    $('.img-gif.d').css('display','block');
  }
  else if(taka>=50 && taka<=99){
    $('.img-gif').css('display','none');
    $('.img-gif.e').css('display','block');
  }
  else if(taka>=100 && taka<=499){
    $('.img-gif').css('display','none');
    $('.img-gif.f').css('display','block');
  }
  else if(taka>=500 && taka<=999){
    $('.img-gif').css('display','none');
    $('.img-gif.g').css('display','block');
  }
  else if(taka>=1000){
    $('.img-gif').css('display','none');
    $('.img-gif.h').css('display','block');
  }
}

document.getElementById("give-btn").addEventListener("click",takingMoney);