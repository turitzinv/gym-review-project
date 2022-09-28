# GymView - Your view into all gyms!

GymView is an application that allows users to create reviews for Gyms they've attended. A user must log in or create an account before accessing GymView. User will be notified if a username already exists or if an incorrect username/password was submitted.

# Tech

This application utilizes Ruby on Rails for the backend, Postgresql Database, and React.js frontend. The frontend uses components and react-router-dom:

- Ruby 2.7.4
- Rails, '~> 6.1.3', '>= 6.1.3.2'
- NodeJS (v16), and npm
- Postgresql
- React-router-dom: "^5.3.3"

# Installation

Please follow the below installation instructions:

```
git clone git@github.com:turitzinv/gym-review-project.git
cd gym-review-project
bundle install
npm install --prefix client
```

```
Running the backend (http://localhost:3000):
rails s
```

```
Running the frontend (http://localhost:4000)
npm start --prefix client
```


# Navigation

Home
- A homepage welcoming the user to the GymView application.

Gyms
- A list of gyms are displayed showing their name, address, and a button to see all reviews for that gym.

Add Gym
- Allow users to create a new gym by submitting the name, address, and image link.  Each field must be unique and present.

My Reviewed Gyms
- The user can see a list of gyms they've reviewed so far.

Logout
- Allow the user to log out of GymView.

# Reviews

Upon clicking "Click for Reviews" in the Gyms tab, the user will see all existing reviews for the specific gym.  The current user is only allowed to edit and delete reviews they have submitted to a gym.

## Add a review

Clicking "Add a review" will display an input field for the user to type their review.  The review cannot be blank and the user will be notified if it is.

## Edit or Delete

Upon submitting a new review, the user can choose to edit their review which will display the input field for them to make changes. The user can choose to finalize their edit or cancel the edit entirely. Once finalized, the user will be redirected to the specific gym page and see their review updated.


