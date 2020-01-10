# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

tasks = Task.create([
  { title: 'Go to the GYM', description: 'Golds GYM 6:30', completed: false},
  { title: 'Pick up my sister', description: 'College', completed: false},
  { title: 'Create a pull request', description: 'Github', completed: false},
  { title: 'Review coding challenges', description: 'Stand Up Meeting', completed: false}
])