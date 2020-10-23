/*
ok - protótipo para 1 arquivo ok - https://stackoverflow.com/questions/10398931/how-to-remove-text-from-a-string
falta - programa para concatenar todos os arquivos do mês e fazer a checagem do json gerada pelas datas de dias uteis
falta - criar a função dias úteis para o calendário vigente
falta -  fazer o cálculo do ir para day trade dolar e mini indice
falta - gerar o darf para pagamento
falta - gerar o site 
falta - criar área do usuário para login , senha e privacidade dos dados que serão rodados na máquina da pessoa 
falta - salvar um relatório se teve no mês mais operações com lucro ou não
falta - gerar um gráfico sobre isso
*/


const fs = require('fs');
const pdfparse = require('pdf-parse');
const pdffile = fs.readFileSync('ficha_cadastro_sisvan.pdf');
var texto = " " ;
var re;
var json;
pdfparse(pdffile).then(function (data) {
	for (i=0; i<(data.text).length;i++){

		texto = texto + data.text[i];
	}
	texto = texto.replace(/[`~!@#$%^&*()_|+\-=?;:'",.\{\}\[\]\\\/]/gi, '');	

	
    texto = texto.split("\n");	
	console.log(texto);
	try{
		createJson(texto);
	}
	catch (err){
		console.log(err);
	}
	

});
function createJson(json){
	const dataArchive = JSON.stringify(json);

	// write JSON string to a file
	fs.writeFile('susSisvan.json', dataArchive, (err) => {
		 if (err) {
		throw err;
	 }
console.log("JSON data is saved.");
});        
}


