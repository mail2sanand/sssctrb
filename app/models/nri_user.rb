class NRIUser < User

  has_one :nri_detail,:foreign_key => "user_id"

  include ActiveModel::Serializers::JSON

end
