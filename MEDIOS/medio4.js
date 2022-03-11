// Crie um programa que peça a nota do aluno, que deve ser um real entre 0.00 e 10.0
// Se a nota for menor que 6.0, deve exibir a nota F.
// Se a nota for de 6.0 até 7.0, deve exibir a nota D.
// Se a nota for entre 7.0 e 8.0, deve exibir a nota C.
// Se a nota for entre 8.0 e 9.0, deve exibir a nota B.
// Por fim, se for entre 9.0 e 10.0, deve exibir um belo de um A.

const prompt = require(`prompt-sync`)();

let note = +prompt(`Enter student grade: `);

if (note >= 9 && note <= 10) {
  console.log(`The student grade is A.`);
} else if (note < 9 && note >= 8) {
  console.log(`The student grade is B.`);
} else if (note < 8 && note >= 7) {
  console.log(`The student grade is C.`);
} else if (note < 7 && note >=6){
    console.log(`The student grade is D.`)
} else if (note < 6){
    console.log(`The student grade is F.`)
}
