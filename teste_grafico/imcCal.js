/* Function do Calc Body Mass Index */


/* Variables :
age => Age in years
ageMonths => Age in months
sex => boy or girl
height => cm 
heightInches => inches
weight => kg
weightLbs => lbs

https://cuidai.com.br/imc-feminino-masculino/
*/
// Cálculo IMC
function imcCalcMetric(age,height,weigh){
    const result =  weight / height *height ;
    return result;
}
// Classifica IMC

function imcClassifyMetric(resultIMC){
if (resultIMC < 16 ){
    return "Menor que 16 – Magreza grave"
}
else if (resultIMC >= 16 && resultIMC < 17){
    return "a menor que 17 – Magreza moderada"
}
else if (resultIMC >= 17 && resultIMC < 18.5){
    return " a menor que 18,5 – Magreza leve"
}
else if (resultIMC >= 18.5 && resultIMC < 25){
    return " 18,5 a menor que 25 – Saudável"
}
else if (resultIMC >=25 && resultIMC < 30){
    return "25 a menor que 30 – Sobrepeso"
}
else if (resultIMC >= 30 && resultIMC < 35){
    return "30 a menor que 35 – Obesidade Grau I"
}
else if (resultIMC >= 35 && resultIMC > 40 ){
    return "35 a menor que 40 – Obesidade Grau II (considerada severa) "
}
else if(resultIMC >= 40){
    return "Maior que 40 – Obesidade Grau III (considerada mórbida)"
}

}
