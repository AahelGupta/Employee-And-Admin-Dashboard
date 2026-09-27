<div align="center">

  ![Capsule Header](https://capsule-render.vercel.app/api?type=waving&color=0:0F172A,100:38BDF8&height=180&section=header&text=Employee%20and%20Admin%20Dashboard&fontSize=40&animation=twinkling&desc=Enterprise%20Task%20Management%20Portal%20built%20with%20React.js)

  <br/>

  [![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38BDF8?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

</div>

<br/>

## 📌 Overview

**Employee & Admin Dashboard** is a enterprise task management portal engineered with **React.js**, **Context API**, and **Tailwind CSS**. It provides dual-role authentication workflows for **Admins** (task creation, employee assignment mapping, global progress metrics) and **Employees** (interactive task lifecycle state transitions).

---

## ✨ Key Features

- 🔑 **Dual-Role Authentication**: Distinct interactive portals for Admins and Employees.
- ⚡ **Global State Management**: React Context API architecture preventing prop-drilling.
- 💾 **Client-Side Persistence**: Web Storage API (`localStorage`) integration simulating zero-latency session retention.
- 📊 **Task Lifecycle Tracking**: Categorized task states (*New*, *Accepted*, *Completed*, *Failed*).

---

## 🛠️ Project Architecture

```
Employee-And-Admin-Dashboard/
├── src/
│   ├── components/
│   │   ├── Auth/           # Login & Session views
│   │   ├── Dashboard/      # Admin & Employee Dashboard containers
│   │   └── Task/           # Task lists, cards, creation forms
│   ├── context/            # AuthProvider & Global State
│   └── utils/              # LocalStorage helpers & data seeding
├── public/                 # Static assets
├── package.json
└── README.md
```

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/AahelGupta/Employee-And-Admin-Dashboard.git

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 📄 License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.
