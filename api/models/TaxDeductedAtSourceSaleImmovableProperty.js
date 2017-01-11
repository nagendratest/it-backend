var TaxDeductedAtSourceSaleImmovableProperty = {
  // Enforce model schema in the case of schemaless databases
  schema: true,

  attributes: {
	panofpropertybuyer:{type:'string'},  
	nameofpropertybuyer:{type:'string'},
	taxdeductclaimedthisyear:{type:'string'},
	yearinwhichtdsdeducted:{type:'date'}
  }
};

module.exports = TaxDeductedAtSourceSaleImmovableProperty;