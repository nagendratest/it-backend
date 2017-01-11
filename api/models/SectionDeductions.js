var SectionDeductions = {
  // Enforce model schema in the case of schemaless databases
  schema: true,

  attributes: {
	section80deductions:{type:'string'},  
	section80tta:{type:'string'},  
	section80g:{type:'string'}
  }
};

module.exports = SectionDeductions;