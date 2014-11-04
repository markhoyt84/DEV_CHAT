get '/' do
  erb :signin
end

get '/signup' do
  erb :signup
end

post '/signup' do
  @user = User.create(params[:user])
  if @user.save
    session[:user_id] = @user.id
    redirect "/user/#{@user.id}"
  else
    redirect '/'
  end
end

post '/signin' do
  user = User.find_by_email(params[:email])
  if !user.nil? && user.password == params[:password]
    session[:user_id] = user.id
    redirect "/user/#{user.id}"
  else
    redirect '/'
  end
end

get '/user/:id' do
  @user = User.find(params[:id])
  erb :user_profile
end

post '/signout' do
  session[:user_id] = nil
  redirect '/'
end
