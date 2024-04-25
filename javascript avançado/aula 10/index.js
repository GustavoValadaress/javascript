const animal = {
  som: 'um som de animal ',
  tipo: 'animal ',
  emitirSom:function(){
    console.log(this.som)
  }
}


const gato = {
  tipo: 'gato '
}

Object.setPrototypeOf(gato,animal)
gato.emitirSom()