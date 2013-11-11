# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
#

u1 = User.new(name: 'cooper mayne')

e1 = Event.new(title: 'party tag programming week')

h1 = HashTag.new(tag_name: '#partytagworkweed')

scap1 = Scrapbook.new()

e1.hash_tags << h1
e1.scrapbooks << scrap1

u1.events << e1
u1.scrapbooks << scrap1

u1.save
