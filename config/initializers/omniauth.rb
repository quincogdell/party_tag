OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :facebook, "522181411222799", "03ef2412a46232be77165da9d8f4ec1d"
end
