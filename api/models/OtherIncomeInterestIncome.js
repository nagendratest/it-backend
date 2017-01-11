var OtherIncomeInterestIncome = {
  // Enforce model schema in the case of schemaless databases
  schema: true,

  attributes: {
	interestincomefromsavingaccount:{type:'string'},  
	otherinterestincome:{type:'string'},  
  }
};

module.exports = OtherIncomeInterestIncome;