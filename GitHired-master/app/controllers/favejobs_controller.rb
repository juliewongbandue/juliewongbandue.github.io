class FavejobsController < ApplicationController
  include HTTParty



  def search
    render :index
    def search_params
      params.require(:job).permit(:location, :language)
    end
  end

  def show
  end

  def query
    @location = params[:favejob][:location]
    @language = params[:favejob][:language]

    url = "http://jobs.github.com/positions.json?description=#{@language}&location=#{@location}"
    @response = HTTParty.get(url).parsed_response

    render :index

  end

  def new
    @fave = Favejob.new
    @title = params[:job][:title]
    @description = params[:job][:description]
    @location = params[:job][:location]
    @website = params[:job][:website]
    @position = params[:job][:position]
    @apply = params[:job][:apply]
    @user = params[:job][:user]

  end

  def create
    @fave = Favejob.new(job_params)
    @fave.user_id = current_user.id
    if @fave.valid?
      @fave.save
      redirect_to "/users/:id"
    else
      redirect_back fallback_location:new_job_path
    end
  end

def destroy
  @fave = Favejob.find(params[:job_id])
  @fave.destroy
  redirect_to "/users/:id"
 end

  private

  def job_params
    params.require(:job).permit(:title, :description, :location, :website, :position, :apply, :user)
  end

end
