class Review < ApplicationRecord
  belongs_to :gym
  belongs_to :user

  validates :description, presence: true
end
