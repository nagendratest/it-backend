var IncomeOtherIncome = {
  // Enforce model schema in the case of schemaless databases
  schema: true,

  attributes: {
	interestincome:{type:'string'},  
	otherincome:{type:'string'},  
	exemptincome:{type:'string'},  	
	agricultureincome:{type:'string'},  	
  }
};

module.exports = IncomeOtherIncome;