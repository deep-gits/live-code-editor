# ⚡ Real-Time Collaborative Code Editor

A powerful, real-time online code editor that allows multiple users to write, edit, and compile code simultaneously in a shared environment. Built with **Node.js**, **WebSockets (Socket.io)**, and **React-like architecture**.

🔗 **Live Demo:** [https://live-code-editor-1-g1km.onrender.com](https://live-code-editor-1-g1km.onrender.com)

![Project Status](https://img.shields.io/badge/Status-Live-success) ![License](https://img.shields.io/badge/License-MIT-blue)

## 🚀 Key Features

* **Real-Time Collaboration:** Changes made by one user are instantly synced to all other users in the room using WebSockets.
* **Private Rooms:** Users can create isolated coding sessions by generating unique room IDs (e.g., `?room=my-room`).
* **Integrated Compiler:** Supports code execution for **JavaScript, Python, Java, and C++** via the Piston API.
* **Live Chat:** Built-in team chat for discussing logic while coding.
* **Syntax Highlighting:** Fully featured editor powered by CodeMirror.
* **One-Click Download:** Users can download their code as a file locally.

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3, JavaScript, CodeMirror (Editor Interface)
* **Backend:** Node.js, Express.js
* **Real-Time Engine:** Socket.io (WebSockets)
* **Compiler API:** Piston API (by EMKC)
* **Deployment:** Render Cloud Hosting

## ⚙️ How to Run Locally

If you want to run this project on your own machine:

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/deep-gits/live-code-editor.git](https://github.com/deep-gits/live-code-editor.git)
    cd live-code-editor
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Start the Server**
    ```bash
    npm start
    ```

4.  **Open in Browser**
    Visit `http://localhost:3000`

## 🔮 Future Improvements

* Add user authentication (Login/Signup).
* Add syntax support for more languages (Go, Rust, Ruby).
* Implement a dark/light mode toggle.

---
**Developed by Deepak Saraswat** | B.Tech CSE (Final Year)
