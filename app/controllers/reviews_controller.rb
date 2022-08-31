class ReviewsController < ApplicationController
  #rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

  def index
    reviews = Review.all
    render json: reviews, include: :gym
  end

  def create
    review = Review.create!(description: params[:description], user_id: session[:user_id])
    render json: review, include: :user, status: :created
  end

  def destroy
    review = Review.find(params[:id])
    review.destroy
    head :no_content
  end

  private

  # def record_invalid
  #   render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  # end

end
