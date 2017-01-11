var Deductions = {
  // Enforce model schema in the case of schemaless databases
  schema: true,

  attributes: {
	deductions:{type:'string'},  
	moredeductions:{type:'string'},  
	otherdeductions:{type:'string'},
	
  }
};

module.exports = Deductions;