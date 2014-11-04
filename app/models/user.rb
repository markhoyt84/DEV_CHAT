class User < ActiveRecord::Base
  # Remember to create a migration!
  validates_uniqueness_of :email, :username
  validates_presence_of :email, :username, :password
end
