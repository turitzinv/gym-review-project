class GymsController < ApplicationController

  def index
    gyms = Gym.all
    render json: gyms, include: :reviews
  end
  
  def show
    gym = Gym.find(params[:id])
    render json: gym, include: :reviews
  end

  def create
    byebug
  end

  #error rendering needed for creating a new gym without a field

end
