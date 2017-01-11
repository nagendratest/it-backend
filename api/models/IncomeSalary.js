var IncomeSalary = {
  // Enforce model schema in the case of schemaless databases
  schema: true,

  attributes: {
	incomefromsalary:{type:'string'},  
	salarytds:{type:'string'},  
	useraddress:{type:'string'},  	
  }
};

module.exports = IncomeSalary;