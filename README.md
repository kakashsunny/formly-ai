# ✨ Timely Forms AI

> **Build beautiful, intelligent forms in minutes — not hours.**

Timely Forms AI is an **AI-powered form builder for modern teams** that want more control over how their data is collected, presented, and analyzed.

Instead of manually creating forms field by field, simply **describe what you need in plain language** and let AI generate a polished, ready-to-use form in seconds.

🌐 **Live App:** https://formly-ai-frontend.onrender.com

---

## 🚀 Why Timely Forms AI?

Traditional form builders are useful for quickly creating basic forms, but they can feel **generic, rigid, and limited**.

Timely Forms AI takes a different approach by combining **AI-powered form generation, flexible design, analytics, and data ownership** into one platform.

| Feature            | Google Forms            | Timely Forms AI                               |
| ------------------ | ----------------------- | --------------------------------------------- |
| 🤖 Form Creation   | Manual, field by field  | **AI-generated from natural language**        |
| 🎨 Design          | Limited themes          | **Modern & customizable**                     |
| 📊 Analytics       | Basic summaries         | **Conversion, completion & device analytics** |
| 🧩 Field Types     | Standard fields         | **18+ field types**                           |
| 🏷️ Branding       | Google branding         | **Your own workspace & brand**                |
| 🗄️ Data Ownership | Google's infrastructure | **Your PostgreSQL database**                  |
| 🔗 Sharing         | Generic form link       | **Custom public shareable links**             |
| 📱 Experience      | Basic responsive design | **Responsive public-facing forms**            |

### 💡 The difference

**Google Forms helps you create a form.**

**Timely Forms AI helps you create a form that feels like part of your product.**

---

# ✨ Features

## 🤖 AI Form Generation

Describe your requirements in plain English and let Gemini generate the form structure automatically.

For example:

> Create a customer feedback form with name, email, rating, multiple-choice questions, and a detailed feedback section.

Timely Forms AI transforms the description into a structured form with appropriate fields.

**Powered by Google Gemini AI.**

---

## 🧩 Drag & Drop Form Builder

Build and customize forms using an intuitive drag-and-drop builder.

### Supported field types include:

* Text
* Long Text
* Email
* Number
* Phone
* Date
* Time
* Dropdown
* Multiple Choice
* Checkboxes
* Rating
* File Upload
* URL
* And more

With **18+ field types** and live preview, you can create powerful forms without writing code.

---

## 🎨 Beautiful & Customizable Design

Forms shouldn't look like generic questionnaires.

Timely Forms AI provides a modern interface that allows forms to feel more aligned with your product and brand.

Create forms that are:

* Clean
* Modern
* Responsive
* User-friendly
* Product-focused

---

## 📊 Built-in Analytics

Collecting responses is only the beginning.

Timely Forms AI provides analytics to help understand how users interact with your forms.

Track:

* 📈 Conversion rates
* ✅ Completion rates
* 📉 Form drop-offs
* 📱 Device breakdown
* 📊 Response statistics
* 🕒 Submission activity

Analytics visualizations are powered by **Recharts**.

---

## 🔗 Secure Form Sharing

Every published form can have its own unique public URL.

Users can access and submit forms without needing access to the form builder.

Public forms are designed to be:

* Responsive
* Mobile-friendly
* Clean
* Fast
* Easy to share

---

## 🔐 Authentication & Security

Timely Forms AI uses **JWT-based authentication** to manage secure user sessions.

Authentication includes:

* User registration
* User login
* JWT token-based sessions
* Protected API routes
* Authorized form management

Sensitive configuration such as database credentials, JWT secrets, and API keys is managed through environment variables.

---

# 🏗️ Architecture

```text
                         ┌─────────────────────┐
                         │        User         │
                         └──────────┬──────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │   React Frontend    │
                         │      + Vite         │
                         └──────────┬──────────┘
                                    │
                               Axios / REST
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │   Express Backend   │
                         │      Node.js        │
                         └───────┬─────┬───────┘
                                 │     │
                    ┌────────────┘     └─────────────┐
                    ▼                                ▼
          ┌──────────────────┐             ┌─────────────────┐
          │   PostgreSQL     │             │  Google Gemini  │
          │      Neon        │             │       AI        │
          └──────────────────┘             └─────────────────┘
```

---

# 🛠️ Tech Stack

## Frontend

* **React**
* **Vite**
* **Tailwind CSS**
* **Axios**
* **Recharts**

## Backend

* **Node.js**
* **Express.js**
* **PostgreSQL**
* **JWT Authentication**
* **Google Gemini API**

## Database

* **Neon PostgreSQL**

## Deployment

* **Render Static Site** — Frontend
* **Render Web Service** — Backend
* **Neon** — PostgreSQL Database

---

# 📁 Project Structure

```text
.
├── backend/
│   ├── app.js
│   ├── config/
│   │   └── env.js
│   ├── middleware/
│   │   └── errorHandler.js
│   └── routes/
│       ├── auth.routes.js
│       ├── form.routes.js
│       ├── response.routes.js
│       ├── insights.routes.js
│       └── ai.routes.js
│
└── frontend/
    └── ai-form-builder-ui-boilerplate-code/
        └── src/
            ├── components/
            ├── contexts/
            ├── hooks/
            ├── layouts/
            ├── lib/
            │   ├── api.js
            │   ├── charts.js
            │   └── utils.js
            ├── pages/
            └── services/
```

---

# 🔑 Environment Variables

## Backend

Create:

```text
backend/.env
```

Add:

```env
CLIENT_URL=https://your-frontend-url.onrender.com
DATABASE_URL=your_neon_postgresql_connection_string
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=7d
GEMINI_API_KEY=your_gemini_api_key
GEMINI_MODEL=your_gemini_model
```

### Environment Variable Reference

| Variable         | Description                         |
| ---------------- | ----------------------------------- |
| `CLIENT_URL`     | Allowed frontend origin(s) for CORS |
| `DATABASE_URL`   | Neon PostgreSQL connection string   |
| `JWT_SECRET`     | Secret used to sign JWT tokens      |
| `JWT_EXPIRES_IN` | JWT token expiration duration       |
| `GEMINI_API_KEY` | Google Gemini API key               |
| `GEMINI_MODEL`   | Gemini model used for AI generation |

> ⚠️ **Never commit your `.env` file, API keys, database credentials, or JWT secrets to GitHub.**

---

## Frontend

For the Render Static Site, configure:

```env
VITE_API_URL=https://your-backend-url.onrender.com/api
```

> ⚠️ **Important:** Vite environment variables are embedded into the application during the build process.

If you change `VITE_API_URL` on Render, perform:

**Manual Deploy → Clear build cache & deploy**

A normal redeploy using cached output may continue using the previous value.

---

# 💻 Local Development

## 1. Clone the repository

```bash
git clone <your-repository-url>
cd <your-repository>
```

## 2. Start the Backend

```bash
cd backend
npm install
npm start
```

## 3. Start the Frontend

Open another terminal:

```bash
cd frontend/ai-form-builder-ui-boilerplate-code
npm install
npm run dev
```

The Vite development server will provide the local frontend URL.

---

# ☁️ Deployment

Timely Forms AI is deployed as **two separate Render services**.

## Backend — Web Service

| Setting        | Value         |
| -------------- | ------------- |
| Service Type   | Web Service   |
| Root Directory | `backend`     |
| Build Command  | `npm install` |
| Start Command  | `npm start`   |

Configure the required backend environment variables in Render.

---

## Frontend — Static Site

| Setting           | Value                                          |
| ----------------- | ---------------------------------------------- |
| Service Type      | Static Site                                    |
| Root Directory    | `frontend/ai-form-builder-ui-boilerplate-code` |
| Build Command     | `npm install && npm run build`                 |
| Publish Directory | `dist`                                         |

### 🔄 SPA Rewrite Rule

Because the frontend uses client-side routing, configure the following rewrite rule:

```text
Source:      /*
Destination: /index.html
Action:      Rewrite
```

This ensures that direct links and browser refreshes work correctly for client-side routes.

---

# 🔄 Application Flow

```text
User describes a form
        ↓
React Frontend
        ↓
Express API
        ↓
Google Gemini
        ↓
Generated Form Structure
        ↓
Form Builder
        ↓
User Customizes Form
        ↓
Publish Form
        ↓
Unique Public URL
        ↓
Users Submit Responses
        ↓
PostgreSQL
        ↓
Analytics Dashboard
```

---

# 🎯 What Makes Timely Forms AI Different?

### ⚡ AI First

Don't start with a blank canvas.

**Start with an idea.**

Describe what you want and let AI create the foundation.

### 🎨 Product-Quality Design

Forms should feel like part of your product — not a generic third-party page.

### 📊 Analytics Built In

Don't just collect responses.

**Understand them.**

### 🗄️ Data Ownership

Your form data is stored in your PostgreSQL database, giving you greater control over your application's data.

### 🔗 Easy Sharing

Publish your form and share a clean, responsive public URL.

---

# 🤝 Contributing

Contributions, ideas, and feedback are welcome.

To contribute:

```bash
git checkout -b feature/your-feature
```

Make your changes, test them, and submit a pull request.

---

# 📄 License

License information will be added here.

---

# 🌟 Timely Forms AI

**Build smarter. Design better. Collect meaningful data.**

> ### **Continue Learning. Continue Exploring. Continue Building. Continue Growing. 🚀**

**Every project is a chance to learn something new.
Every challenge is an opportunity to explore.
Every idea is a reason to build.**

### **Keep learning. Keep exploring. Keep building. The journey never stops. ✨**
