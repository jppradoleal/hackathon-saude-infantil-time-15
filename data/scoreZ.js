/* Score-Z for Children Under Two */

const math = require('mathjs');

function median(list){

math.median(list)
}

function stdDeviantion(list){
  math.std(list, normalization)
}

/* score-Z = (observation - median Value reference) / standard deviantion population reference */

function scoreZ(obs, med=median(list),std=stdDeviantion(population) ){
  return ((obs-med)/std); 
}



