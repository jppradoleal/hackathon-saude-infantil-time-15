const { imcCalulation, imcClassifier } = require('../utils/imcCalc');
module.exports = {
  getImc(req, res) {
    const { imc } = req.query;
    return res.json({ message: `IMC Classification for ${imc} is '${imcClassifier(imc)}'` });
  }
}