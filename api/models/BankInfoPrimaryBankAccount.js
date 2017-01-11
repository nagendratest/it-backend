var BankInfoPrimaryBankAccount = {
  // Enforce model schema in the case of schemaless databases
  schema: true,

  attributes: {
	bankaccountnumber:{type:'string'},  
	ifscofbank:{type:'string'},
	typeofaccount:{type:'string'},
	nameofbank:{type:'string'}
  }
};

module.exports = BankInfoPrimaryBankAccount;