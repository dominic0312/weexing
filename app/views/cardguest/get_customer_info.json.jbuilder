json.(@customer, :level, :cardid, :balance,:bonus,:coupon_num)
json.coupons @customer.coupons, :shopid, :usertype, :content,:pic
	