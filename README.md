# README

##usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|index|null: false, unique: true|
|password|string|null: false, default 8|

###Assosiation
- has_many :members
- has_many :chat
- has_many :groups, through: :members

##groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

###Assosiation
- has_many :users, through: :members
- has_many :chat
- has_many :members

##chatテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|message|text|null: false|

###Assosiation
- has_many :users
- has_many :members

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
