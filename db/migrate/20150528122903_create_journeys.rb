class CreateJourneys < ActiveRecord::Migration
  def change
    create_table :journeys do |t|
      t.string :title
      t.text :description
      t.boolean :public
      t.belongs_to :user, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
