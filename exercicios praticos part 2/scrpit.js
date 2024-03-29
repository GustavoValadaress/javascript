function verificar () {
 var data = new Date()
 var ano = data.getFullYear()
 var fano = document.getElementById('txtano')
 var res = document.getElementById('res')
 if(fano.value.length == 0 || fano.value> ano){
  window.alert('[ERRO] verifique os dados e tente navamente')
 } else {
 var fsex = document.getElementsByName('radsex')
 var idade = ano - Number(fano.value)
  var genero = ''
  var img = document.createElement('img')
  img.setAttribute('id','foto')
  if (fsex[0].checked) {
    genero = 'homem'
    if (idade>=0 && idade <10){
      //criança
      img.setAttribute('src' , 'nenem.jpeg')
    }else if ( idade <21){
      //jovem
      img.setAttribute('src' , 'jovem.png' )

    }else if (idade < 50){
      //adulto
      img.setAttribute('src','adulto.png' )
    } else {
      //idoso
      img.setAttribute('src','velho.jpeg')
    }

  } else if (fsex[1].checked){
    genero = 'mulher '
    if (idade>=0 && idade <10){
      //criança
      img.setAttribute('src', 'nenem mulher.png')
    }else if ( idade <21){
      //jovem
      img.setAttribute('src','jovem mulher.png')

    }else if (idade < 50){
      //adulto
      img.setAttribute('src', 'mulher adulta.png')
    } else {
      //idoso
      img.setAttribute('src', 'mulher velha.png')
    }
  }
  res.style.textAlign = 'center'
  res.innerHTML = ` dectectamos ${genero} com ${idade} anos.`
  res.appendChild(img)
 }
}