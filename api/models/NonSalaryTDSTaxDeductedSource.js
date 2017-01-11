var NonSalaryTDSTaxDeductedSource = {
  // Enforce model schema in the case of schemaless databases
  schema: true,

  attributes: {
	tanofdeductor:{type:'string'},  
	nameofdeductor:{type:'string'},
	tdscertificatenumber:{type:'string'},
	taxdeductclaimedthisyear:{type:'string'},
	yearinwhichtdsdeducted:{type:'date'}
  }
};

module.exports = NonSalaryTDSTaxDeductedSource;