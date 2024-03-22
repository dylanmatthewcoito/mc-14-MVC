# Module 14 Challenge: Model-View-Controller Tech Blog

## Deployed on Heroku

[Tech Blog Heroku Link](https://tech-blog42-817e7f14dc8e.herokuapp.com/)

## Description 

Tech Blog is a CMS-style blog site where users can create an account, log in, and start publishing their own blog posts. The application follows the MVC paradigm and utilizes Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## Features

- Homepage: Displays existing blog posts with post titles and creation dates.
- User Authentication: Users can sign up, sign in, and log out. Authentication is required to access certain features.
- Dashboard: Registered users have a personal dashboard where they can manage their blog posts.
- Create Posts: Users can create new blog posts by providing a title and content.
- Edit Posts: Users can update the title and content of their existing blog posts.
- Delete Posts: Users can delete their blog posts from the dashboard.
- View Posts: Clicking on a blog post opens a dedicated page displaying the post title, content, creator's username, and creation date.
- Leave Comments: Logged-in users can leave comments on blog posts.
- Idle Timeout: If a user is idle for a set period, they are prompted to log in again before performing actions like adding, updating, or deleting posts.

Tech Blog provides a platform for users to share their thoughts, engage in discussions, and manage their own blog content. The application focuses on delivering a user-friendly experience with intuitive navigation and seamless interaction.

![Sign-in/Sign-up Page](https://github.com/dylanmatthewcoito/mc-14-MVC/assets/71201051/6835841d-0f4e-470a-a627-3f0ec809abc6)
![User Dashboard](https://github.com/dylanmatthewcoito/mc-14-MVC/assets/71201051/552a5c9f-9cc6-4664-b477-d406fe01ce64)
![Blog Posts](https://github.com/dylanmatthewcoito/mc-14-MVC/assets/71201051/18ab7a8e-fa14-4086-b14d-bb860e9d29d8)
![Blog Post Comments](https://github.com/dylanmatthewcoito/mc-14-MVC/assets/71201051/d2a3e5e0-4f05-413d-9283-9bbdc51cfd15)



## Credits

* This project uses code from the [tech-blog] project, available at https://github.com/Ivana-Djordjevic/tech-blog
