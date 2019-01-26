## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## userテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|password|string|null: false|
|email|string|null: false|

### Association
- has_many :members
- has_many :groups, through: :members
- has_many :messages

## groupテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|message_id|integer|foreign_key: true|
|members_id|integer|null: false, foreign_key: true|

### Association
- has_many :members
- has_many :users, through: :members
- has_many :messages

## messageテーブル

|Column|Type|Options|
|------|----|-------|
|text|text| |
|image|text| |
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
|date|datetime|null: false|

### Association
- belongs_to :group
- belongs_to :user
