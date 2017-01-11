var IncomeEarnedFromRentalProperty = {
  // Enforce model schema in the case of schemaless databases
  schema: true,

  attributes: {
	annualrentreceived:{type:'string'},  
	housetaxpaid:{type:'string'},  
	nameoftenant:{type:'string'},
	panoftenant:{type:'string'}
  }
};

module.exports = IncomeEarnedFromRentalProperty;