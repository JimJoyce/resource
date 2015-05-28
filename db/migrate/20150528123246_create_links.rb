class CreateLinks < ActiveRecord::Migration
  def change
    create_table :links do |t|
      t.string :url
      t.string :cached_url
      t.string :description
      t.belongs_to :note, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
