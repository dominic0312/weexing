class AddCardBack < ActiveRecord::Migration
   def change
    add_attachment :membercards, :picback
  end
end
