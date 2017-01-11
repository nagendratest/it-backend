var TaxesPaidNonSalaryTDS = {
  // Enforce model schema in the case of schemaless databases
  schema: true,

  attributes: {
	nonsalarytds:{type:'string'},  
	importfromtaxdept:{type:'string'}
  }
};

module.exports = TaxesPaidNonSalaryTDS;