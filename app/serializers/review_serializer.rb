class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :description, :gym_id, :user_id

  belongs_to :gym
end
