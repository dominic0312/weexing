json.(@customer, :level, :cardid, :balance,:bonus,:coupon_num,:id)
json.coupons @customer.coupons, :shopid, :usertype, :content,:pic,:title,:id
	