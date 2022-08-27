puts "🌱 Seeding Gyms, Users, Reviews..."

Gym.create(name: "Boosted Fitness", address: "12 Plainview Drive", image_url: "https://user-images.githubusercontent.com/93049794/185754475-2f09d586-6fe5-44e1-ade3-2a0939806b2e.jpg")
Gym.create(name: "24/7 Gym", address: "55 Lake Plaza", image_url: "https://user-images.githubusercontent.com/93049794/185754551-e2e39f87-b0b3-40d9-bd79-3d64ed764762.jpg")
Gym.create(name: "Full Throttle Fitness", address: "34 Ocean Lane", image_url: "https://user-images.githubusercontent.com/93049794/185754621-f56c297f-d9e0-4cc8-90fb-a545fb132d52.jpg")

User.create(username: "John Smith", password: "John Smith")
User.create(username: "Mary Thompson", password: "Mary Thompson")
User.create(username: "Larry Phillips", password: "Larry Phillips")

Review.create(
  description: "Gym is spacious, a lot to work with and there's a pool!",
  user_id: 1,
  gym_id: 1
)

Review.create(
  description: "Gym is decent enough.",
  user_id: 2,
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