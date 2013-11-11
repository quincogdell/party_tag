# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
#
User.delete_all
Event.delete_all
HashTag.delete_all
Scrapbook.delete_all

u1 = User.new(name: 'cooper mayne')

e1 = Event.new(title: 'party tag programming week')

h1 = HashTag.new(tag_name: '#partytagworkweek')

scrap1 = Scrapbook.new(name: 'the first scrap book')

e1.hash_tags << h1
e1.scrapbooks << scrap1

u1.events << e1
u1.scrapbooks << scrap1

u1.save
