const Cart = require('../models/cart')
const Product = require('../models/product')

exports.addToCart = async (req,res) => {
	const userCart = req.params.id
	const productCart = req.body.productCart
	const qty = Number.parseInt(req.body.qtyCart)

	const dataCart = await Cart.count({userCart : userCart, productCart : productCart})
	if (dataCart == 0) {
		const data = {
			productCart : productCart,
			qtyCart : qty,
			userCart : userCart
		}
		console.log(data)
		const carts = new Cart(data)
		const saveCart = await carts.save()
		res.send(JSON.stringify({"status" : 200, "error" : null, "response" : "berhasil menambahkan ke cart"}))
	}else{
		const dataCart = await Cart.find({userCart : userCart, productCart : productCart}).lean()
		dataCart.qtyCart = Number.parseInt(dataCart.qtyCart) + qty
		const updateCart = await Cart.updateOne({_id : dataCart._id}, dataCart)
		res.send(JSON.stringify({"status" : 200, "error" : null, "response" : "Berhasil menambahkan ke cart"}))
	}
}