var BankInfoAdditionalInfo = {
  // Enforce model schema in the case of schemaless databases
  schema: true,

  attributes: {
	emailsecondary:{type:'string'},  
	mobilesecondary:{type:'string'},
	landline:{type:'text'},
	stdcode:{type:'text'},
	itward:{type:'text'},
	adharnumber:{type:'text'},
	passportnumber:{type:'string'}
  }
};

module.exports = BankInfoAdditionalInfo;