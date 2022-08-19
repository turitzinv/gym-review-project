class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :description
      t.integer :gym_id
      t.integer :user_id

      t.timestamps
    end
  end
end
