var TaxesPaid = {
  // Enforce model schema in the case of schemaless databases
  schema: true,

  attributes: {
	nonsalarytds:{type:'string'},  
	tdsofimmovable:{type:'string'},  
	selftax:{type:'string'},
	
  }
};

module.exports = TaxesPaid;