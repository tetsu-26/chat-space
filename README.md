# README

##usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true, index: true|

###Assosiation
- has_many :members
- has_many :messages
- has_many :groups, through: :members

##groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

###Assosiation
- has_many :users, through: :members
- has_many :messages
- has_many :members

##messagesテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|message|text||
|image|string||

###Assosiation
- belongs_to :user
- belongs_to :group

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, references: users|
|group_id|integer|null: false, references: groups|

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
