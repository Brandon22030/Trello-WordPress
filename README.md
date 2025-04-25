# Trello Post-it (TWP)

A Trello-inspired web application that integrates with WordPress via its REST API. The application allows you to manage tasks and notes in the form of kanban boards, using WordPress as the backend to store data.

![capt1](./trello_postit/src/assets/img/cap1.png)
![capt2](./trello_postit/src/assets/img/cap2.png)
![capt3](./trello_postit/src/assets/img/cap3.png)
![capt4](./trello_postit/src/assets/img/cap4.png)

## Project Description
Trello Post-it is a web application that transforms WordPress into a Trello-like visual task management system. The user interface is developed with Vue.js 3 and Tailwind CSS, providing a modern and responsive experience similar to Trello.

Le projet utilise l'architecture suivante :
- **Frontend** : Vue.js 3, Tailwind CSS, Pinia (for state management)
- **Backend** : WordPress REST API
- **Development tools** : Vite, ESLint, Prettier

## Main Features

1. **Kanban Board Management**
- Creating, editing, and deleting lists (WordPress categories)
- Creating, editing, and deleting cards (WordPress posts)
- Drag and drop cards between lists

2. **WordPress Integration**
- Lists correspond to WordPress categories
- Cards correspond to WordPress posts
- Authentication via JWT for write operations

3. **Comment Management**
- Adding comments to cards (posts)
- Editing and deleting comments
- Viewing comments for each card

4. **User Interface**
- Trello-inspired interface with a modern design
- Board overview with all lists and cards
- Detailed display of cards with their information and comments
- Intuitive navigation between different views

5. **Data Features**
- Real-time synchronization with the WordPress database
- State management with Pinia for a seamless user experience
- Data persistence via the WordPress REST API

6. **Personalization**
- Custom background for the table
- Responsive interface for different screen sizes

## Prerequisites

- Node.js and npm
- Vue.js
- Tailwind CSS
- WordPress with REST API enabled
- A valid JWT token for WordPress authentication

## Installation

- Clone the content into your working web directory with `git clone "repository"`
- Start your WordPress with `php -S localhost:<your port>`
- Modify your token and replace your WordPress localhost in the store
- Run `npm install`
- Run `npm run dev`


# Usage

- Check that tailwind is installed in the project
- Check that wordpress is installed 
- Check that components are imported correctly

# Authors
1. This project was carried out by Daniel MEDEHOU project manager responsible for

   - Post and category crud and drag-and-drop management
   - Oragnisation and cordination of the team and Merging

   - Github : [Daniel MEDEHOU](https://github.com/Brandon22030)
   - Email : daniel.medehou@epitech.eu

2. Eddy KOUHOUENOU in charge of the admin dashboard ,classes for the functionalities and mobile responsiveness.
      
   * Github : [Eddy KOUHOUENOU](https://github.com/EddyKOUHOUENOU17)
   * Email : eddy.kouhouenou@epitech.eu

3.  Stone AFEDJOU in charge of comment crud management and post display
      
   * Github : [Stone AFEDJOU](https://github.com/stonefadel02)
   * Email : stone.afedjou@epitech.eu


<br>

# License

- This project is owned by Daniel MEDEHOU, Eddy KOUHOUENOU and Stone AFEDJOU 
- The project is open source but can't be used for illegal purposes.
