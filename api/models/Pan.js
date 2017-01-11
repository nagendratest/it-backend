var Pan = {
  // Enforce model schema in the case of schemaless databases
  schema: true,

  attributes: {
	pannumber:{type:'string', unique: true},  
	pans  :  { owner: 'pan'},
	personaldetails : { collection: 'PersonalDetails', via: 'pdetails' }
  }
};

module.exports = Pan;