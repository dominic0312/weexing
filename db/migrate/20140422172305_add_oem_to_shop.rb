#coding: utf-8
class AddOemToShop < ActiveRecord::Migration
  def change
    add_column :shops, :oemname, :string, :default => '微行微系统'
    add_column :shops, :oemurl, :string, :default => 'http://www.weexing.com/'
  end
end
