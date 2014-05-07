# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140506104214) do

  create_table "card_templates", force: true do |t|
    t.string   "card_name"
    t.string   "card_image_url"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  create_table "cardpages", force: true do |t|
    t.string   "account"
    t.string   "brand"
    t.string   "logo"
    t.string   "cardtemplate"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "comments", force: true do |t|
    t.string   "name"
    t.string   "email"
    t.string   "message"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "coupons", force: true do |t|
    t.integer  "shopid"
    t.string   "usertype"
    t.text     "content"
    t.date     "startdate"
    t.date     "enddate"
    t.string   "coupon_type"
    t.string   "title"
    t.integer  "coupon_req",       default: 0
    t.integer  "coupon_usd",       default: 0
    t.string   "branch"
    t.datetime "created_at",                   null: false
    t.datetime "updated_at",                   null: false
    t.integer  "sent",             default: 0
    t.string   "pic"
    t.string   "pic_file_name"
    t.string   "pic_content_type"
    t.integer  "pic_file_size"
    t.datetime "pic_updated_at"
  end

  create_table "coupons_customers", force: true do |t|
    t.integer "customer_id"
    t.integer "coupon_id"
  end

  add_index "coupons_customers", ["coupon_id"], name: "index_coupons_customers_on_coupon_id", using: :btree
  add_index "coupons_customers", ["customer_id"], name: "index_coupons_customers_on_customer_id", using: :btree

  create_table "customers", force: true do |t|
    t.string   "shop_id"
    t.string   "cardid"
    t.integer  "balance",    default: 0
    t.integer  "bonus",      default: 0
    t.string   "realcardid"
    t.string   "level",      default: "普通会员"
    t.string   "openid"
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
    t.integer  "unread",     default: 0
    t.integer  "coupon_num", default: 0
    t.string   "phone"
  end

  add_index "customers", ["openid"], name: "index_customers_on_openid", using: :btree

  create_table "delayed_jobs", force: true do |t|
    t.integer  "priority",   default: 0, null: false
    t.integer  "attempts",   default: 0, null: false
    t.text     "handler",                null: false
    t.text     "last_error"
    t.datetime "run_at"
    t.datetime "locked_at"
    t.datetime "failed_at"
    t.string   "locked_by"
    t.string   "queue"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "delayed_jobs", ["priority", "run_at"], name: "delayed_jobs_priority", using: :btree

  create_table "diymenus", force: true do |t|
    t.integer  "public_account_id"
    t.integer  "parent_id"
    t.string   "name"
    t.string   "key"
    t.string   "url"
    t.boolean  "is_show"
    t.integer  "sort"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "diymenus", ["key"], name: "index_diymenus_on_key", using: :btree
  add_index "diymenus", ["parent_id"], name: "index_diymenus_on_parent_id", using: :btree
  add_index "diymenus", ["public_account_id"], name: "index_diymenus_on_public_account_id", using: :btree

  create_table "documents", force: true do |t|
    t.string   "title"
    t.string   "desc"
    t.string   "url"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "membercards", force: true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "pic_file_name"
    t.string   "pic_content_type"
    t.integer  "pic_file_size"
    t.datetime "pic_updated_at"
    t.string   "picback_file_name"
    t.string   "picback_content_type"
    t.integer  "picback_file_size"
    t.datetime "picback_updated_at"
  end

  create_table "news", force: true do |t|
    t.string   "title"
    t.text     "content"
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
    t.string   "doctype",    default: "news"
  end

  create_table "pointcodes", force: true do |t|
    t.string   "secretcode"
    t.string   "userby",     default: "empty"
    t.integer  "used",       default: 0
    t.datetime "created_at",                   null: false
    t.datetime "updated_at",                   null: false
    t.integer  "point",      default: 1
  end

  add_index "pointcodes", ["secretcode"], name: "index_pointcodes_on_secretcode", using: :btree

  create_table "publicaccounts", force: true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "requestcoupons", force: true do |t|
    t.integer  "couponid"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "title"
    t.string   "content"
    t.string   "cardno"
  end

  add_index "requestcoupons", ["couponid"], name: "index_requestcoupons_on_couponid", using: :btree

  create_table "shops", force: true do |t|
    t.string   "name"
    t.text     "address"
    t.string   "phone"
    t.string   "status",               default: "停止中"
    t.integer  "membercard_id",        default: 1
    t.integer  "usertemplate_id",      default: 1
    t.string   "logo"
    t.datetime "created_at",                                               null: false
    t.datetime "updated_at",                                               null: false
    t.integer  "online",               default: 0
    t.datetime "exprieddate"
    t.integer  "expried",              default: 0
    t.integer  "istrial",              default: 0
    t.integer  "user_id"
    t.string   "shopurl"
    t.string   "logopic_file_name"
    t.string   "logopic_content_type"
    t.integer  "logopic_file_size"
    t.datetime "logopic_updated_at"
    t.string   "weixin_secret_key"
    t.string   "weixin_token"
    t.string   "password"
    t.string   "mobile"
    t.string   "oemname",              default: "微行微系统"
    t.string   "oemurl",               default: "http://www.weexing.com/"
    t.integer  "customerno",           default: 0
  end

  add_index "shops", ["weixin_secret_key"], name: "index_shops_on_weixin_secret_key", using: :btree
  add_index "shops", ["weixin_token"], name: "index_shops_on_weixin_token", using: :btree

  create_table "users", force: true do |t|
    t.string   "email"
    t.string   "hashed_password"
    t.string   "salt"
    t.datetime "created_at",                         null: false
    t.datetime "updated_at",                         null: false
    t.integer  "credit",          default: 0
    t.string   "company"
    t.string   "phone"
    t.string   "name"
    t.integer  "activated",       default: 0
    t.string   "usertype",        default: "agency"
  end

  create_table "usertemplates", force: true do |t|
    t.string   "name"
    t.string   "pic"
    t.text     "description"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.string   "attachfile_file_name"
    t.string   "attachfile_content_type"
    t.integer  "attachfile_file_size"
    t.datetime "attachfile_updated_at"
    t.integer  "installed",               default: 0
    t.string   "preview_file_name"
    t.string   "preview_content_type"
    t.integer  "preview_file_size"
    t.datetime "preview_updated_at"
  end

end
