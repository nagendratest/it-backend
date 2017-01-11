var SelfTaxPaid = {
  // Enforce model schema in the case of schemaless databases
  schema: true,

  attributes: {
	amountpaid:{type:'string'},  
	dateofpayment:{type:'string'},
	bsr:{type:'string'},
	challannumber:{type:'date'}
  }
};

module.exports = SelfTaxPaid;