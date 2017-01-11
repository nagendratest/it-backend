var TaxFillingBankInfo = {
  // Enforce model schema in the case of schemaless databases
  schema: true,

  attributes: {
	primarybankaccount:{type:'string'},  
	allotherbankaccount:{type:'string'},
	additionalinformation:{type:'text'},
	assetsincomentaxes:{type:'string'}
  }
};

module.exports = TaxFillingBankInfo;