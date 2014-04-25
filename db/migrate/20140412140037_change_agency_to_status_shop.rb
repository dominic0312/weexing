#coding: utf-8
class ChangeAgencyToStatusShop < ActiveRecord::Migration
  def change
    change_column :shops, :agency, :string , :default=> '停止中'
    rename_column :shops, :agency, :status
  end
end
