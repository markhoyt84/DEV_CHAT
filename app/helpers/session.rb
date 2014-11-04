helpers do
  def current_user
    return nil if session[:user_id].nil?
    @current_user ||= User.find(session[:user_id])
  end

  def logged_in?
    !current_user.nil?
  end

  def redirect_to_login
    redirect '/signin' if current_user.nil?
  end
end