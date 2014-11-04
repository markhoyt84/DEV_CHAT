class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |table|
      table.string :username, :email, :password

      table.timestamps
    end
  end
end
