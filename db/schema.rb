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

ActiveRecord::Schema.define(version: 20140324175658) do

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

  create_table "coupons", force: true do |t|
    t.integer  "shopid"
    t.string   "usertype"
    t.text     "content"
    t.date     "startdate"
    t.date     "enddate"
    t.string   "coupon_type"
    t.string   "present_name"
    t.integer  "discount"
    t.integer  "present_value"
    t.string   "branch"
    t.datetime "created_at",                   null: false
    t.datetime "updated_at",                   null: false
    t.integer  "sent",             default: 0
    t.string   "pic"
    t.string   "photo_file_name"
    t.string   "pic_content_type"
    t.integer  "pic_file_size"
    t.datetime "pic_updated_at"
  end

  create_table "coupons_customers", force: true do |t|
    t.integer "customer_id"
    t.integer "coupon_id"
  end

  create_table "customers", force: true do |t|
    t.string   "owner"
    t.string   "cardid"
    t.integer  "balance"
    t.integer  "bonus"
    t.string   "realcardid"
    t.string   "level"
    t.string   "openid"
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
    t.integer  "unread"
    t.integer  "coupon_num", default: 0
    t.string   "phone"
  end

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

  create_table "membercards", force: true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "pic_file_name"
    t.string   "pic_content_type"
    t.integer  "pic_file_size"
    t.datetime "pic_updated_at"
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

  create_table "shops", force: true do |t|
    t.string   "name"
    t.text     "address"
    t.string   "phone"
    t.integer  "agency"
    t.integer  "membercard_id",        default: 1
    t.integer  "usertemplate_id",      default: 1
    t.string   "logo"
    t.datetime "created_at",                       null: false
    t.datetime "updated_at",                       null: false
    t.integer  "online",               default: 0
    t.datetime "exprieddate"
    t.integer  "expried",              default: 0
    t.integer  "istrial",              default: 0
    t.integer  "user_id"
    t.string   "weixin_token"
    t.string   "shopurl"
    t.string   "logopic_file_name"
    t.string   "logopic_content_type"
    t.integer  "logopic_file_size"
    t.datetime "logopic_updated_at"
  end

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
