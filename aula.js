const nota1 = 7;
const nota2 = 7;
const nota3 = 8;
const media = (nota1 + nota2 + nota3) / 3;
console.log(media.toFixed(2));

if (media < 5) {
  console.log('Reprovado');
}

    else if (media >= 5 && media <= 7){
        console.log('Recuperação');
    }
    else{
        console.log('Passou no semestre');
    }
