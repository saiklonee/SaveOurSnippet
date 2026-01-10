# SaveOurSnippet 🚀

SaveOurSnippet is a modern full-stack platform that lets developers **save, organize, and manage code snippets** — inspired by Google Keep, but designed specifically for developer workflows. It streamlines storing, retrieving, and organizing reusable code for projects of any size.

The app features **secure authentication via Clerk**, versatile **collection management**, **pinning for quick access**, and is being developed for both **web and mobile** platforms. All user data is securely isolated and tied to their identity.

---

## ✨ Features

- 🔐 Authentication with **Clerk** for secure user access
- 🧠 Automatic user data sync to MongoDB upon first login
- ✍️ Create, edit, and delete code snippets with flexible metadata (tags, title, language)
- 📌 Pin or unpin important or favorite snippets for fast retrieval
- 📁 Organize snippets into customizable collections or folders
- 🔍 Powerful search: filter snippets by title, tag, or content
- 🖼 Profile image support, with image storage via Clerk or ImageKit
- ☁️ Isolated, per-user data and privacy for all snippets and collections
- 🖥️ Responsive design for web, with **React Native** mobile app planned
- 📊 RESTful API endpoints for all operations (CRUD)
- 📝 Full stack TypeScript support planned
- 🌍 CORS enabled for multi-environment development

---

## 🛠 Tech Stack

### Frontend

- **React 19** (Vite)
- **React Native** (planned for mobile support)
- **Clerk** for authentication and user management
- **Axios** for API requests
- **Tailwind CSS** for utility-first responsive styling
- **React Icons** for UI
- **React Router DOM** for client-side navigation

### Backend

- **Node.js** (Express 5)
- **MongoDB** (cloud-hosted, with **Mongoose** ODM)
- **Clerk SDK** for managing authentication and user sync
- **Nodemon** for development auto-reloading
- **CORS** for cross-origin requests
- **dotenv** for environment variable management
- **Multer** for image/file upload support (planned)
- API routes for user, snippet, and collection management with robust controller logic

### Other

- **Monorepo Structure** (client & server in one repository)
- Full API documentation planned
- 💡 **Contributions and feedback welcome!**

---

## 🚀 Getting Started

1. **Clone the repo**:

   ```bash
   git clone https://github.com/your-username/SaveOurSnippet.git
   ```

2. **Install dependencies**:

   - In `/server`: `npm install`
   - In `/client`: `npm install`

3. **Configure environment**:  
   Setup `.env` files in both `/server` and `/client` for MongoDB, Clerk, etc.

4. **Run the app**:

   - In `/server`: `npm start`
   - In `/client`: `npm run dev`

5. **Sign up/Login with Clerk, and start saving your snippets!**

---

## 📚 API Endpoints Overview

- `POST /api/user/sync` - Syncs Clerk user to MongoDB
- `GET /api/snippets` - Get all snippets for current user
- `POST /api/snippets` - Create a new snippet
- `PUT /api/snippets/:id` - Update a snippet
- `DELETE /api/snippets/:id` - Delete a snippet
- `GET /api/collection` - List all collections
- ...and more!

---

## 🎯 Roadmap

- [x] Basic snippet CRUD
- [x] Authentication via Clerk
- [x] Collections system
- [ ] Tags & Filtering improvements
- [ ] React Native mobile client
- [ ] Richer snippet editor
- [ ] Sharing/collaboration features
- [ ] Dark mode & UI enhancements

---

## 🙋‍♂️ Feedback & Contributions

Suggestions, bug reports, and PRs are welcomed!  
Open an issue or contact maintainer at [your@email.com].

---

**Made with 💙 by developers, for developers.**
