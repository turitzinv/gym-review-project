class GymsController < ApplicationController

  def index
    gyms = Gym.all
    render json: gyms, include: :reviews
  end

end
