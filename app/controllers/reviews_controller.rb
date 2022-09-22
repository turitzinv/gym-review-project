class ReviewsController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
  before_action :authorize
  

  def index
    reviews = Review.all
    render json: reviews, include: :gym
  end

  def show
    review = Review.find(params[:id])
    render json: review, include: :gym
  end

  def create
    review = Review.create!(description: params[:description], gym_id: params[:gym_id], user_id: session[:user_id])
    render json: review, include: :user, status: :created
  end

  def destroy
    review = Review.find(params[:id])
    review.destroy
    head :no_content
  end

  def update
    review = Review.find(params[:id])
    review.update(description: params[:description])
    render json: review
  end

  private

  def record_invalid(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

  def authorize
    return render json: { error: "Not Authorized" }, status: :unauthorized unless session.include? :user_id
  end

end
