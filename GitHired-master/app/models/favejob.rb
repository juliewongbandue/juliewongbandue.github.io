class Favejob < ApplicationRecord
  belongs_to :user

  validates :title, presence: true
  validates :location, presence: true
  validates :position, presence: true
  validates :description, presence: true
  validates :website, presence: true
  validates :apply, presence: true
  validates :user_id, presence: true

end
