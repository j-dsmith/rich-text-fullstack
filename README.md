# rich-text-fullstack
Fullstack expansion of Nucamp Honor's graduation project.
## How I worked on this project

For this project I built out an express api and backend for my NuCamp Honor's Graduation Project.

- The project lacked a database for persistent user and data management, and was therefore previously more of a Front-End UI/UX showcase than a fully functioning application.
- My workflow for the project began with building out the server, routes, middleware, and database configuration. Afterwards I migrated previous code and developed the client side architecture.

## Why I built the project this way

This project was an incredible learning experience and I wanted to challenge myself to build out an API specific to my original vision for my Honor's Graduation Project, based on tools and resources I have previously learned.

Some things I chose to focus on for this iteration: 

- Database integration with MongoDB
- Authentication 
- Responsive Design and UI adaptation
- API requests and logic using Axios

Some notes on tools and methodology: 

- styled-components were the design tool I chose for the first iteration and continued their use for this project as well.
- Redux was featured heavily as a pseudo-database for my original project but most of that functionality was migrated to MongoDB. I believe redux could have been ommited entirely on this project in place of React Context to simplify boilerplate, however I chose to stick with the tool I was more comfortable with.
- Formik was used for my sign-up and login forms.
- As a web application, The UI needed to be flexible to adapt to different screen sizes. In the end I chose to create a modular dashboard that would hide certain components on smaller screen sizes to simplify the UI and improve the user experience.
- React Quill is the Rich Text module I used on the original project and chose to continue using for this update. I explored a few other options like Slate and Draft.JS but in the end focused on sticking with Quill which was more intuitive when migrating my previous code base.

## If I had more time I would change this

- There are still some UI/UX updates that would improve the polish of the project
- My API was not built entirely with REST principles despite taking inspiration from the methodology. Using a more defined Backend API strucuture is something that I would improve now that I have more experience and understanding of that area of development.
- Authentication is currently not linked up between local and Google sign-in methods which means the same email could be linked to two separate Users with different data in the application. This can be updated in a future iteration.
- Most importantly, I did not wireframe the entire project this time around as I originally planned on only minor updates to the original project. Defining design and feature choices from the outset would have mirrored a more professional workflow and also reduced roadblocks that popped up due to design changes mid-developement. This is something I will do differently for all future projects.

## This project can be viewed live at [Focus Rich Text App](https://focus-richtext-app.herokuapp.com/)
