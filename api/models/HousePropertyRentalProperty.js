var HousePropertyRentalProperty = {
  // Enforce model schema in the case of schemaless databases
  schema: true,

  attributes: {
	incomeearnedfromrentalproperty:{type:'string'},  
	interestpaidonhousingloanforproperty:{type:'string'},  
	interestpaidduringpreconstruction:{type:'string'}
  }
};

module.exports = HousePropertyRentalProperty;