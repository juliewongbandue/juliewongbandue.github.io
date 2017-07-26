class ToDosController < ApplicationController
  def index
    @job_id = params[:job][:id]
    @saved_job = Favejob.where(:id => @job_id)
    @location = @saved_job[0].location
    @todo = To_do.where(:favejob_id => @job_id)
  end

  def edit
    @task = To_do.where(:id => params[:task][:id])
  end

  def update
    @task = To_do.where(:id => params[:task][:id])
    if @task.update(:note => params[:task][:note])
      redirect_to "/users/:id"
    else
      redirect_back edit_task_path
    end
  end

  def new
    @task = To_do.new
  end

  def create
    # session return solution found on stackoverflow
    session[:return_to] ||= request.referer
    @task = To_do.new(task_params)
    @task.favejob_id = params[:task][:job]
    @user = params[:user]
      if @task.save
        redirect_to session.delete(:return_to)
      else
        redirect_back fallback_location: new_to_do_path
      end
  end

  def destroy
    session[:return_to] ||= request.referer
    @task = To_do.find(params[:task_id])
    @task.destroy
    redirect_to session.delete(:return_to)
  end

  private

  def task_params
    params.require(:task).permit(:emailed, :responded, :note)
  end

end
