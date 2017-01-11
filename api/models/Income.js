var Income = {
  // Enforce model schema in the case of schemaless databases
  schema: true,

  attributes: {
	salary:{type:'string'},  
	otherincome:{type:'string'},  
	houseproperty:{type:'string'},  
	capitalgain:{type:'string'},  
	/* owner:{
		model:''
	}
	 */
  }
};

module.exports = Income;