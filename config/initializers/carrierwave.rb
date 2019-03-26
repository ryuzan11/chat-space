require 'carrierwave/storage/abstract'
require 'carrierwave/storage/file'
require 'carrierwave/storage/fog'

CarrierWave.configure do |config|
  config.storage = :fog
  config.fog_provider = 'fog/aws'
  config.fog_credentials = {
    provider: 'AWS',
    aws_access_key_id: Rails.application.secrets.aws_access_key_id,
    aws_secret_access_key: Rails.application.secrets.aws_secret_access_key,
    region: 'ap-northeast-1'
  }

<<<<<<< HEAD

  config.fog_directory  = 's3-ryuzan'
  config.asset_host = 'https://s3-ap-northeast-1.amazonaws.com/s3-ryuzan'
=======
<<<<<<< HEAD
  config.fog_directory  = 's3.ryuzan.public'

  config.asset_host = 'https://s3-ap-northeast-1.amazonaws.com/s3.ryuzan.public'
=======
  config.fog_directory  = 's3-ryuzan'
  config.asset_host = 'https://s3-ap-northeast-1.amazonaws.com/s3-ryuzan'
>>>>>>> master
end
>>>>>>> master
