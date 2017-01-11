var PersonalDetails = {
  // Enforce model schema in the case of schemaless databases
  schema: true,

  attributes: {
    doornumber  : { type: 'string', unique: false },
    street  : { type: 'text', unique: false },
    area  : { type: 'text', unique: false },
    town  : { type: 'string', unique: false },
    city  : { type: 'string', unique: false },
    state  : { type: 'string', unique: false },
    country  : { type: 'string', unique: false },
    pincode  : { type: 'integer', unique: false },
    mobile  : { type: 'integer', unique: false },
    email  : { type: 'email', unique: false },
    pdetails  :  { owner: 'personaldetails'}
  }
};

module.exports = PersonalDetails;