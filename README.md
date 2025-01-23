# Blog Viewer Application

## live link : https://ejp-10-next-js-blog-site.vercel.app

This project is a simple blog viewer application built with **Next.js**. It demonstrates core concepts like routing, server and client components, dynamic routes, authentication, and data fetching.

## 🌟 Objective

The goal of this project is to implement a blog viewer with essential navigation and content viewing features, focusing on:
- Static and dynamic routes.
- Fetching data from a mock API.
- Protecting routes using authentication (via **Kinde Auth**).
- Clean and responsive design using **Tailwind CSS**.

---

## 🚀 Features

### 1. Home Page (`/`)
- Displays a list of blog post titles fetched from a mock API.
- Each blog title links to a detailed view of the post.

### 2. Blog Details Page (`/blog/[id]`)
- Uses dynamic routing to display details of a specific blog post.
- Fetches blog details based on the `id` parameter from the URL.

### 3. Profile Page (`/profile`)
- A protected static route showing a message like _"Welcome to your profile!"_.
- Authentication managed using **Kinde Auth**.
- Unauthenticated users are redirected to the login page.

### 4. Navigation
- A header with links to:
  - Home (`/`)
  - Profile (`/profile`)
- Displays:
  - "Login" button if the user is not authenticated.
  - "Logout" button if the user is authenticated.

---

## 📜 Requirements

### Mock API
- **Fetch all posts:**  
  `GET https://jsonplaceholder.typicode.com/posts`
- **Fetch a specific post by ID:**  
  `GET https://jsonplaceholder.typicode.com/posts/[id]`

---

## 🛠️ Tech Stack
- **Framework:** Next.js
- **Authentication:** Kinde Auth
- **Styling:** Tailwind CSS
- **Mock API:** JSONPlaceholder

---
