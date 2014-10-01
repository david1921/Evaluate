$LOAD_PATH << '/app/controllers'
require 'application_controller'

module EvaluateHelper

browser = Browser.new(:ua => "some string", :accept_language => "en-us")
  
  def app_name
    defined?(Rails.application.class.parent_name) ? Rails.application.class.parent_name : "unknown"
  end

  def app_version
    defined?(APP_VERSION) ? APP_VERSION : "unknown"
  end

  def pat_id
      params.has_key?(:PatID) ? params[:PatID] : "unknown"
  end

 def patient_type
     params.has_key?(:PatIDType) ? params[:PatIDType] : "unknown"
  end

  def timestamp
      params.has_key?(:TimeStamp) ? params[:TimeStamp] : "unknown"
  end

  def username
      params.has_key?(:Username) ? params[:Username] : "unknown"
  end

  def eval_tags
    tag('meta',
      application_name: app_name,
      application_version: app_version,
      browser_type: browser.name,
      browser_version: browser.version,
      name: 'sh-eval',
      patient_id: pat_id,
      patient_type: patient_type,
      timestamp: timestamp ,
      username: username,
      uuid: SecureRandom.uuid
    )
  end
end
