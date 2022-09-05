class GymSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :image_url

  has_many :reviews
end
