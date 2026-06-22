# Web Forum

A full-stack community discussion platform built with Next.js, TypeScript, Firebase, and PostgreSQL.

This project was created to explore modern full-stack application development, authentication systems, database integration, and interactive social experiences.

The application allows users to create accounts, participate in discussions, create posts, engage through nested comments, and interact with content using voting functionality.

As one of my earliest full-stack projects, it marked an important milestone in my transition from frontend-focused development to building complete web applications that combine user interfaces, backend services, authentication, and persistent data storage.

## Live Demo

https://webforum-77k2.vercel.app

## Screenshots

### Home Feed

(Add screenshot)

### Discussion Thread

(Add screenshot)

### Authentication Flow

(Add screenshot)

### Mobile View

(Add screenshot)

## Features

* User authentication with Firebase
* Create, edit, and delete posts
* Nested comments and replies
* Upvote and downvote functionality
* Community discussion experience
* Dynamic data fetching
* Responsive design
* Full CRUD operations
* Error boundaries
* Custom not-found pages
* Protected user interactions
* Automatic deployment with Vercel

## Technologies Used

### Frontend

* Next.js 15
* React
* TypeScript
* Tailwind CSS
* Material Tailwind
* TanStack React Query

### Backend & Services

* Firebase Authentication
* Firebase Firestore
* PostgreSQL
* Next.js API Routes

### Deployment

* Vercel
* GitHub

## Architecture Highlights

This project combines multiple technologies to create a complete full-stack application:

* Authentication handled through Firebase
* Persistent data storage using PostgreSQL
* API endpoints built with Next.js API Routes
* Client-side data synchronization using React Query
* Dynamic routing through the Next.js App Router
* Component-driven user interface architecture
* Cloud deployment through Vercel

## What I Learned

During this project I gained experience with:

* Building full-stack applications using Next.js
* Structuring large TypeScript codebases
* Implementing authentication and authorization workflows
* Creating REST-style API endpoints
* Designing CRUD-based applications
* Integrating relational databases
* Managing asynchronous data with React Query
* Working with server and client components
* Understanding modern rendering strategies
* Designing scalable project architectures
* Deploying production applications
* Building interactive community-driven platforms

## Challenges

Some of the challenges encountered during development included:

* Managing authenticated user sessions
* Designing nested comment and reply structures
* Synchronizing frontend and backend state
* Handling optimistic updates and asynchronous mutations
* Structuring reusable API logic
* Managing relationships between users, posts, comments, and votes
* Working with multiple data sources and services
* Organizing a growing codebase using scalable architecture patterns

These challenges provided valuable experience in solving problems commonly encountered in modern production applications.

## Project Structure

```text id="2ndv9q"
src/
├── app/
│   ├── (auth)/
│   ├── (dashboard)/
│   ├── api/
│   ├── firestore/
│   ├── error.tsx
│   ├── not-found.tsx
│   └── layout.tsx
│
├── components/
│   ├── store/
│   └── ui/
│
├── config/
├── lib/
├── types/
└── public/
```

## Installation

```bash id="0zj6iw"
git clone https://github.com/axce-j/web-forum.git

cd web-forum

npm install

npm run dev
```

Create a `.env.local` file and configure the required Firebase and database environment variables before running the application.

## Looking Back

This project represented one of my first experiences building a complete full-stack application.

It introduced concepts such as authentication, database integration, backend services, API development, and scalable application architecture that later influenced my approach to building larger systems and production-ready products.

Since completing this project, I have progressed into building more advanced systems involving:

* Full-stack SaaS platforms
* Authentication and authorization systems
* AI-powered applications
* Database architecture and system design
* Cloud deployment and DevOps workflows
* Scalable application development
* Product and platform engineering

I have intentionally preserved this repository as an important milestone in my software engineering journey and as a record of my growth as a developer.

## Future Improvements

Potential future enhancements include:

* User profiles
* Community moderation tools
* Notifications system
* Real-time updates
* Rich text editor support
* Advanced search and filtering
* Role-based permissions
* Community creation and management
* Content reporting tools
* Analytics dashboard

## Author

**Obinna Jachike Ezeani**

Software Engineer | Product Builder | Co-Founder

GitHub: https://github.com/axce

LinkedIn: https://www.linkedin.com/in/obinna-jachike-ezeani-a072b9284/
