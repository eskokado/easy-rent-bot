class CreateCustomers < ActiveRecord::Migration[7.1]
  def change
    create_table :customers do |t|
      t.string :name
      t.date :dob
      t.string :email
      t.string :mobile

      t.timestamps
    end
  end
end
