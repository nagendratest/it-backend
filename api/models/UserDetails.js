var UserDetails = {
  // Enforce model schema in the case of schemaless databases
  schema: true,

  attributes: {
    firstname  : { type: 'string', unique: true },
    middlename     : { type: 'string',  unique: true },
    lastname     : { type: 'string',  unique: true },
    gender     : { type: 'string',  unique: true },
    pan     : { type: 'string',  unique: true },
    address     : { type: 'string',  unique: true },
    fathername     : { type: 'string',  unique: true },
    dob     : { type: 'date',  unique: true },
    email     : { type: 'email',  unique: true },
    users : { owner: 'userdetails' }
  }
};

module.exports = UserDetails;