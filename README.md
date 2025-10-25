# LetsTrip - AI-Powered Trip Planner

LetsTrip is a web application designed to help users plan their holidays with the power of AI. It allows users to generate holiday ideas, plan budgets, and visualize destinations on a map. The application features a modern, responsive frontend built with React and a robust backend powered by Node.js and Express.

-----

## 📜 Project Overview

The main goal of LetsTrip is to simplify the holiday planning process. Users can interact with an AI to get personalized travel suggestions, manage their trip's budget, and explore locations. The application is split into a frontend single-page application and a backend server that handles the AI logic and API requests.

-----

## 🚀 Features

  * **AI Holiday Planner**: Leverages the Google Generative AI to provide users with customized holiday plans and ideas.
  * **Budget Planner**: A dedicated section for users to plan and manage their travel expenses.
  * **Interactive Map**: A map view to explore and visualize travel destinations.
  * **User Authentication**: A login page for user management (frontend component is in place).
  * **Responsive Design**: A clean and modern UI that works across different devices.
  * **Dark Mode**: A toggle for users to switch between light and dark themes for better viewing comfort.

-----

## 🛠️ Technologies Used

### Frontend:

  * **React**: A JavaScript library for building user interfaces.
  * **React Router**: For client-side routing between different pages.
  * **Vite**: A fast build tool and development server for modern web projects.
  * **CSS**: For styling the application, with a dark mode implementation.

### Backend:

  * **Node.js**: A JavaScript runtime for building the server-side application.
  * **Express**: A minimal and flexible Node.js web application framework.
  * **Google Generative AI SDK (`@google/generative-ai`)**: To integrate the AI-powered features.
  * **dotenv**: To manage environment variables for API keys and other configurations.
  * **CORS**: To enable Cross-Origin Resource Sharing between the frontend and backend.

-----

## ⚙️ Setup and Installation

To get a local copy up and running, you'll need to set up both the frontend and the backend.

### Prerequisites

  * Node.js and npm (or yarn) installed on your machine.
  * A Google Generative AI API key.

### Backend Setup

1.  **Navigate to the backend directory:**
    ```bash
    cd LetsTrip/backend
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Create a `.env` file** in the `backend` directory and add your Google Generative AI API key:
    ```
    API_KEY=YOUR_GOOGLE_AI_API_KEY
    ```
4.  **Start the server:**
    ```bash
    npm start
    ```
    The backend server will be running on `http://localhost:3000`.

### Frontend Setup

1.  **Navigate to the frontend directory:**
    ```bash
    cd LetsTrip/frontend/my-app
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Start the frontend development server:**
    ```bash
    npm run dev
    ```
    The frontend application will be available at `http://localhost:5173` (or another port if 5173 is in use).

-----

## 📂 File Structure

The project is organized into two main parts: `frontend` and `backend`.

```
LetsTrip/
├── backend/
│   ├── node_modules/
│   ├── .env
│   ├── package.json
│   └── server.js
└── frontend/
    └── my-app/
        ├── public/
        ├── src/
        │   ├── assets/
        │   ├── components/
        │   │   ├── Card.jsx
        │   │   └── DarkModeToggle.jsx
        │   ├── pages/
        │   │   ├── BudgetPage.jsx
        │   │   ├── HolidayAIPage.jsx
        │   │   ├── HomePage.jsx
        │   │   ├── Login.jsx
        │   │   └── map.jsx
        │   ├── App.jsx
        │   ├── main.jsx
        │   └── styles.css
        ├── index.html
        ├── package.json
        └── vite.config.js
```
-----

## 👨‍💻 Author

**I'm Harshvardhan Follow me on**
💼 GitHub: [@escharsh](https://github.com/escharsh)
📧 LinkedIn: [Harsh Vardhan](https://www.linkedin.com/in/harsh-vardhan-6748a632a/)

-----

## 📄 License

This project is open source and available under the MIT License.
