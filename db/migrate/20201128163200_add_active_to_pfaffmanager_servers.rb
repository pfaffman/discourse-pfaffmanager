# frozen_string_literal: true
class AddActiveToPfaffmanagerServers < ActiveRecord::Migration[6.0]
  def change
    add_column :pfaffmanager_servers, :active, :boolean
  end
end
