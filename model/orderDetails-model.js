var db = require('./db');

module.exports = {
	insert: function(orderDetails, callback){
		var sql = "INSERT INTO order_details VALUES (null, '" + orderDetails.order_id + "', '" + orderDetails.product_id + "', '" + orderDetails.price + "', '" + orderDetails.quantity + "')";
		db.execute(sql, function(flag){
			callback(flag);
		});
	}
};