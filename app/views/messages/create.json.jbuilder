json.id @message.id
json.text @message.text
json.image @message.image
json.user_id @message.user.id
json.name @message.user.name
json.group_id @message.group.id
json.created_at @message.created_at.strftime("%Y年%m月%d日 %H:%M:%S")
