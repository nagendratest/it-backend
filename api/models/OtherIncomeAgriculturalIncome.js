var OtherIncomeAgriculturalIncome = {
  // Enforce model schema in the case of schemaless databases
  schema: true,

  attributes: {
	grossagriculturereceipt:{type:'string'},  
	expenditureonagriculture:{type:'string'},  
	unabsorbedagricultureloss:{type:'string'}
  }
};

module.exports = OtherIncomeAgriculturalIncome;