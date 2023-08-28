class Message < ApplicationRecord
  belongs_to :user
  def after_create_commit
   MwssageBroadcastJob.perform_later(self)
  end
end
