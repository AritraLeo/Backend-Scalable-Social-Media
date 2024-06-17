### README

# Backend-Scalable-Social-Media

Basic Social Media functionalities broken down into micro-services

## Overview

This project implements basic social media functionalities using a microservices architecture. Each service is designed to handle a specific functionality, ensuring scalability and ease of maintenance.

## Project Flow

### 1. Low-Level Design Document (LLD)

#### a. Detailed Description of Each Component

1. **User Service**

   - Manages user registration, login, and user profiles.
   - Endpoints:
     - Create User
     - Update User
     - Delete User
     - Get User
     - Search User by Name

2. **Discussion Service**

   - Handles creation, updating, deletion, and retrieval of discussions.
   - Endpoints:
     - Create Discussion
     - Update Discussion
     - Delete Discussion
     - Get Discussions by Tags
     - Get Discussions by Text

3. **Follow Service**

   - Manages following/unfollowing users.
   - Endpoints:
     - Follow User
     - Unfollow User
     - Get Followers
     - Get Following

4. **Post Service**

   - Manages user posts, including text and images.
   - Endpoints:
     - Create Post
     - Update Post
     - Delete Post
     - Get Post

5. **Comment Service**

   - Handles comments on posts.
   - Endpoints:
     - Create Comment
     - Update Comment
     - Delete Comment
     - Get Comments for a Post

6. **Like Service**

   - Manages likes on posts and comments.
   - Endpoints:
     - Like Post
     - Unlike Post
     - Like Comment
     - Unlike Comment

7. **View Count Service**
   - Tracks view counts for posts.
   - Endpoints:
     - Increment View Count
     - Get View Count

#### b. Diagram Illustrating the System Architecture

![System Architecture](path-to-diagram)

### 2. Database Schema

#### a. Table/Collection Definitions and Relationships

1. **User Collection**

   - Fields: `_id`, `name`, `email`, `mobile`, `password`

2. **Discussion Collection**

   - Fields: `_id`, `text`, `image`, `hashtags`, `createdBy`, `createdOn`

3. **Post Collection**

   - Fields: `_id`, `text`, `image`, `userId`, `createdOn`

4. **Comment Collection**

   - Fields: `_id`, `postId`, `userId`, `text`, `createdOn`

5. **Like Collection**

   - Fields: `_id`, `userId`, `postId`, `commentId`

6. **Follow Collection**

   - Fields: `_id`, `followerId`, `followedId`

7. **ViewCount Collection**
   - Fields: `_id`, `postId`, `count`

### 3. API Documentation

#### a. Endpoint Definitions, Request/Response Format

1. **User Service**

   - **Create User**

     - `POST /api/users`
     - Request: `{ "name": "John Doe", "email": "john@example.com", "mobile": "1234567890", "password": "password" }`
     - Response: `{ "message": "User created successfully", "user": { ... } }`

   - **Login User**

     - `POST /api/users/login`
     - Request: `{ "email": "john@example.com", "password": "password" }`
     - Response: `{ "token": "jwt-token" }`

   - **Update User**

     - `PUT /api/users/:id`
     - Request: `{ "name": "John Doe" }`
     - Response: `{ "message": "User updated successfully", "user": { ... } }`

   - **Delete User**

     - `DELETE /api/users/:id`
     - Response: `{ "message": "User deleted successfully" }`

   - **Search User by Name**
     - `GET /api/users/search?name=John`
     - Response: `[ { "name": "John Doe", "email": "john@example.com", "mobile": "1234567890" } ]`

2. **Discussion Service**

   - **Create Discussion**

     - `POST /api/discussions`
     - Request: `{ "text": "This is a new discussion", "image": "http://example.com/image.jpg", "hashtags": ["#discussion", "#example"] }`
     - Response: `{ "message": "Discussion created successfully", "discussion": { ... } }`

   - **Update Discussion**

     - `PUT /api/discussions/:id`
     - Request: `{ "text": "Updated discussion text", "image": "http://example.com/image.jpg", "hashtags": ["#updated", "#example"] }`
     - Response: `{ "message": "Discussion updated successfully", "discussion": { ... } }`

   - **Delete Discussion**

     - `DELETE /api/discussions/:id`
     - Response: `{ "message": "Discussion deleted successfully" }`

   - **Get Discussions by Tags**

     - `GET /api/discussions?tags=%23updated,%23example`
     - Response: `[ { "text": "This is a discussion", "image": "http://example.com/image.jpg", "hashtags": ["#updated", "#example"] } ]`

   - **Get Discussions by Text**
     - `GET /api/discussions/search?text=discussion`
     - Response: `[ { "text": "This is a discussion containing the search term", "image": "http://example.com/image.jpg", "hashtags": ["#example"] } ]`

### Postman Collection

A Postman collection for testing the APIs can be found
[<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;">](https://app.getpostman.com/run-collection/18667919-226ec65e-f7f6-4620-a78f-fff89e3bd85f?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D18667919-226ec65e-f7f6-4620-a78f-fff89e3bd85f%26entityType%3Dcollection%26workspaceId%3D34080f72-0282-43d3-923a-deeb5b1aae16).

### Microservices-Based Infrastructure

This project is broken down into microservices to ensure modularity and scalability. Each service is responsible for a specific functionality and can be developed, deployed, and scaled independently. This separation of concerns allows for better management of each component and simplifies maintenance and updates.

#### Services Overview

1. **User Service** - Handles user-related functionalities.
2. **Discussion Service** - Manages discussions.
3. **Follow Service** - Handles user following and unfollowing.
4. **Post Service** - Manages user posts.
5. **Comment Service** - Manages comments on posts.
6. **Like Service** - Manages likes on posts and comments.
7. **View Count Service** - Tracks view counts for posts.

Each of these services communicates through a lightweight protocol (e.g., HTTP/REST) and can be scaled horizontally based on the load and requirements. This architecture provides a resilient, scalable, and maintainable system for social media functionalities.
