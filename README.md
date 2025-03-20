Here's your **README.md** with proper indentation and formatting:

---

# 📌 React Redux User Management App

A simple React-Redux application that fetches and displays user data from an API. Users can be searched and filtered by name, email, ID, or company.

---

## 🚀 Features

- 🔍 **Search & Filter** users dynamically
- 🗄️ **State Management** using Redux Toolkit
- 🚦 **API Status Handling** (Loading, Success, Error)
- 🌐 **Routing** with React Router
- 🎨 **Styled with Tailwind CSS**
- ✅ **Basic Unit Tests** (Jest & React Testing Library)

---

## 📂 Project Setup & Installation

### 1️⃣ Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

---

### 2️⃣ Clone the Repository

```sh
git clone https://github.com/amitsharma2748/react-redux-explorer.git
cd react-redux-explorer
```

---

### 3️⃣ Install Dependencies

```sh
npm install
```

or

```sh
yarn install
```

---

### 4️⃣ Start the Development Server

```sh
npm run dev
```

or

```sh
yarn dev
```

The app will be available at **`http://localhost:5173/`** (or another port if 5173 is occupied).

---

## 🏗️ Build for Production

```sh
npm run build
```

or

```sh
yarn build
```

The optimized production build will be in the **`/dist`** folder.

---

## 🛠️ Environment Variables (If Required)

Create a `.env` file in the root directory and add the necessary variables:

```sh
VITE_BACKEND_URL=https://your-api-url.com
```

Restart the development server after making changes.

---

## ✅ Running Tests

```sh
npm test
```

or

```sh
yarn test
```

---

## 🧪 Testing Overview

The project uses **Jest** and **React Testing Library** to ensure UI behavior and Redux state updates work correctly.

### 📝 Key Tests

1. **Component Rendering** – Verifies the search input and dropdown exist.
2. **Dropdown Selection** – Ensures selecting an option updates the value.
3. **Search Input Behavior** – Checks if typing triggers the correct Redux action.

### 🛠️ Tools Used

- **Jest** – Test runner
- **@testing-library/react** – Component testing
- **@testing-library/user-event** – Simulates user interactions
- **redux-mock-store** – Mocks Redux store

---

## 🛤️ Project Structure

```
/src
  ├── components/        # Reusable UI components
  ├── modules/           # Feature-based modules
  │   ├── users/         # User list and details pages
  │   │   ├── component/ # Components for user module
  ├── redux/             # Redux store & slices
  ├── utils/             # Utility functions & constants
  ├── App.tsx            # Main app component
  ├── main.tsx           # Entry point
  ├── index.css          # Global styles
```

---

## 🔗 API Integration

This project fetches user data from a public API. The API request is handled using **Redux Toolkit AsyncThunk** with Axios.  

