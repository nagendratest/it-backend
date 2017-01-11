var IncomeCapitalGain = {
  // Enforce model schema in the case of schemaless databases
  schema: true,

  attributes: {
	securities:{type:'string'},  
	landandbuilding:{type:'string'},  
	deemedcapital:{type:'string'}
  }
};

module.exports = IncomeCapitalGain;