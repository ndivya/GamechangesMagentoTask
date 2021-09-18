define(['jquery','Magento_Customer/js/customer-data'],function($,customerData){
	return function(config,element){
		let totalCartItem= customerData.get('cart')().summary_count;
		let totalAmount = Math.round(customerData.get('cart')().subtotalAmount);
		if(totalCartItem > 0){
			$(".page-title").append(`<span>(${totalCartItem} items)</span>`);
			$(".breakdown .total-amount").text(`$${totalAmount}`);
		}
	}
});
