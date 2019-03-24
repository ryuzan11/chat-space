if @new_message.present?
  json.array! @new_message do |message|
    json.text message.text
    json.id message.id
    json.name message.user.name
    json.image message.image.url
    json.created_at message.created_at.strftime("%Y年%m月%d日 %H:%M:%S")
  end
end
