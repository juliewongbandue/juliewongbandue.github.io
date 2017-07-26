class AddTimestampToToDos < ActiveRecord::Migration[5.1]
  def change
    add_column :to_dos, :created_at, :datetime
    add_column :to_dos, :updated_at, :datetime
  end
end
