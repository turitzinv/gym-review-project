class GymsController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
  before_action :authorize
  skip_before_action :authorize, only: [:sort]

  def index
    gyms = Gym.all
    render json: gyms
  end
  
  def show
    gym = Gym.find(params[:id])
    render json: gym
  end

  def create
    gym = Gym.create!(name: params[:name], address: params[:address], image_url: params[:image_url])
    render json: gym
  end

  def sort
    sortedGyms = Gym.all
    descSort = sortedGyms.order("name ASC").pluck(:name)
    render json: descSort
  end

  private

  def record_invalid(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

  def authorize
    return render json: { error: "Not Authorized" }, status: :unauthorized unless session.include? :user_id
  end

end
