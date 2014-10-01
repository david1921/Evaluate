
class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_filter :get_context

    def get_context
      @con ="gsgsgewwew"
      @context ||= Hash.new
      @context[:patient_id] ="kkk" #params.has_key?(:PatID) ? params[:PatID] : "unknown"
      @context[:patient_type] ||="jjj" #params.has_key?(:PatIDType) ? params[:PatIDType] : "unknown"
      @context[:timestamp] ||= "ggg" #parcd ms.has_key?(:TimeStamp) ? params[:TimeStamp] : "unknown"
      @context[:uuid] ||= SecureRandom.uuid
      @context[:username] ||="hhh" #params.has_key?(:Username) ? params[:Username] : "unknown"
    end

end
