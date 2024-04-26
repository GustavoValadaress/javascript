const cincomil = () => new Promise((resolve,reject) => {
  setTimeout(() => resolve("promise cincomil resolvida "),5000);

});

const mil = () => new Promise((resolve,reject) => {
  setTimeout(() => resolve("promise mil resolvida"),1000);

});

const quinhentos = () => new Promise((resolve,reject) =>{
  setTimeout(() => resolve("promise quinhentos resolvida"),500);

});

const cem =() => new Promise((resolve,reject) => {
  setTimeout(() => resolve("promise cem resolvida"),100);

});

// // voces ja vao entender porque o nome da fuunçao e esse
const resolvedoradepromisesAssincronas = () => {
  const resultado1 = cincomil();
  const resultado2 = quinhentos();
  const resultado3 = cem();
  const resultado4 = mil();

   console.log(` mensagens: \n${resultado1} \n${resultado2} \n${resultado3} \n${resultado4}`);
  
}

resolvedoradepromisesAssincronas();