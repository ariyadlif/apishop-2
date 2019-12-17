var mongoose = require('mongoose')

var CartSchema = mongoose.Schema({
	userCart: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'products'
	},
	productCart: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'products'
	},
	qtyCart: {
		type: String,
		required: true
	}
},
{
	timestamps: true
})

var Cart = module.exports = mongoose.model('carts', CartSchema)