var TaxFilling = {
  // Enforce model schema in the case of schemaless databases
  schema: true,

  attributes: {
	bankinfo:{type:'string'},  
	summary:{type:'string'},  
	
  }
};

module.exports = TaxFilling;