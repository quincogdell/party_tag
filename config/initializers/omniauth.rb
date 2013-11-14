OmniAuth.config.logger = Rails.logger


Rails.application.config.middleware.use OmniAuth::Builder do
  if Rails.env.production?
    provider :facebook, "522181411222799", "03ef2412a46232be77165da9d8f4ec1d"
  elsif Rails.env.development?
    provider :facebook, "454001694709363", "47c1007cbfbd5cd400075440aabc951a"
  end
end
