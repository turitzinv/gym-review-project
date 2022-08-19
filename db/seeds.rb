puts "🌱 Seeding Gyms and Reviews..."

User.create(username: "John Smith")
User.create(username: "Mary Thompson")
User.create(username: "Larry Phillips")

Gym.create(name: "Boosted Fitness", address: "12 Plainview Drive")
Gym.create(name: "24/7 Gym", address: "55 Lake Plaza")
Gym.create(name: "Full Throttle Fitness", address: "34 Ocean Lane")



Review.create(
  description: "Gym is spacious, a lot to work with and there's a pool!",
  user_id: 1,
  gym_id: 1
)

Review.create(
  description: "Gym is okay, the hours are great but it can get pretty busy even during off peak hours.",
  user_id: 2,
  gym_id: 2
)

Review.create(
  description: "Staff is nice and accomodating. Wish there were more dumbbells to work with, often find myself waiting for someone.",
  user_id: 3,
  gym_id: 3
)

puts "✅ Done seeding!"