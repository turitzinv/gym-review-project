class UsersController < ApplicationController

  def create
    byebug
  end
  
  def show
    user = User.find_by(id: session[:user_id])
    if user
      render json: user
    else
      render json: { error: "Not authorized" }, status: :unathorized
    end
  end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation)
  end

end
