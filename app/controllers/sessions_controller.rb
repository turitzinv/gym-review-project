class SessionsController < ApplicationController

  def create
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      byebug
      render json: user, status: :created
    else
      render json: { errors: ["Invalid username or password"] }, status: :unauthorized
    end
  end

  def destroy
    user = User.find_by(id: session[:user_id])
    if user
      seesion.delete :user_id
      head :no_content
    else
      render json: { errors: ["Not logged in"] }, status: :unauthorized
    end
  end

end
