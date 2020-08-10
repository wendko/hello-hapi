// https://webkid.io/blog/how-to-create-a-rest-api-with-hapi/


// https://auth0.com/blog/developing-restful-apis-with-hapijs/


var shortid = require('shortid');

module.exports = {
  identity: 'cupcake',
  connection: 'cupcakeDB',
  attributes: {
    id: {
      type: 'string',
      primaryKey: true,
      unique: true,
      defaultsTo: function() {
        return shortid.generate();
      }
    },
    name: {
      type : 'string',
      required : true
    },
    ingredients: {
      type : 'array',
      required : false
	},
	flavors: {
		type: 'array',
		required: false
	},
	inStock: {
		type: 'integer',
		required: true,
		defaultsTo: 0
	}
  }
}