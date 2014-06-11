class AddProcessToPayment < ActiveRecord::Migration
  def change
      add_column :payrecords, :processed, :integer, :default=>0
  end
end
