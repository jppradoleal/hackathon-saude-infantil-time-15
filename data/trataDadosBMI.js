const fs = require('fs');

const rawData = require('../data/tabelasCrescimento.json');

const minBMIGirls = [ ], medBMIGirls = [ ], maxBMIGirls =[ ];
const minBMIBoys = [ ], medBMIBoys = [ ], maxBMIBoys = [ ];

/* Json sctructure */
var underTwoBMI = {
    "girls":[minBMIGirls, medBMIGirls, maxBMIGirls],
    "boys":[minBMIBoys, medBMIBoys, maxBMIBoys]
};

/* BMI for girls under two */

const auxGirls = rawData.girlsUnderTwoYears.map(( x ) => {

   minBMIGirls.push((x.minWeight / x.minHeight * x.minHeight).toFixed(2));
   medBMIGirls.push((x.medWeight / x.medHeight * x.medHeight).toFixed(2));
   maxBMIGirls.push((x.maxWeight / x.maxHeight * x.maxHeight).toFixed(2));

});

/* BMI for boys under two */

const auxBoys = rawData.boysUnderTwoYears.map((x) => {

    minBMIBoys.push((x.minWeight / x.minHeight * x.minHeight).toFixed(2));
    medBMIBoys.push((x.medWeight / x.medHeight * x.medHeight).toFixed(2));
    maxBMIBoys.push((x.maxWeight / x.maxHeight * x.maxHeight).toFixed(2));

});

/*  create a JSON for BMI boys and girls Under Two years old*/
var filename = "childsUnderTwoYears.json";
try{
    createJson(underTwoBMI, filename);
}
catch(err){
    console.log(err);
}

function createJson(underTwoBMI, filename){
	const dataArchive = JSON.stringify(underTwoBMI);

	// write JSON string to a file
	fs.writeFile(filename, dataArchive, (err) => {
		 if (err) {
		throw err;
	 }
console.log("JSON data is saved.");
});        
}






