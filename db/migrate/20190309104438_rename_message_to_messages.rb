class RenameMessageToMessages < ActiveRecord::Migration[5.0]
  def change
    rename_column :messages, :message, :content
  end
end
