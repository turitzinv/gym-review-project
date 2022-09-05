class UsersController < ApplicationController

  def index
    users = User.all
    render json: users
  end

  def create
    user = User.create!(user_params)
    byebug
    render json: user
    #need to render errors as well here for uniqueness
  end
  
  def show
    user = User.find_by(id: session[:user_id])
    if user
      render json: user
    else
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation)
  end

end
