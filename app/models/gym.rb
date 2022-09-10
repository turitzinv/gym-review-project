class Gym < ApplicationRecord
  has_many :reviews
  has_many :users, through: :reviews

  validates :name, presence: true, uniqueness: true
  validates :address, presence: true, uniqueness: true
  validates :image_url, presence: true, uniqueness: true
end
