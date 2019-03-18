json.array! @new_message do |new_message|
  json.content  new_message.content
  json.id  new_message.id
  json.user_name  new_message.user.name
  json.image new_message.image.url
  json.date new_message.created_at.strftime("%Y/%m/%d %H:%M")
end
