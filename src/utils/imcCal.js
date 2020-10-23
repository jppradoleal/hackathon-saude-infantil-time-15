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
function imcCalulation(age, height, weigh) {
    return weight / height * height;
} 

const metrics = {
    "Magreza Grave": 16,
    "Magreza Moderada": 17,
    "Magreza Leve": 18.5,
    "Saudável": 25,
    "Sobrepeso": 30,
    "Obesidade Leve": 35,
    "Obesidade Moderada": 40,
    "Obesidade Grave": 0
}

function imcClassifier(imc) {
    labels = Object.keys(metrics);
    if(imc >= 0){
        for(let i = 0; i < labels.length; i++) {
            if (imc < metrics[labels[i]])
                return labels[i];
        }
        return labels[labels.length-1];
    }
}

module.exports = {imcCalulation, imcClassifier}
