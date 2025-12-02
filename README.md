# Eco Plains Safaris 🦁🌿

> **Experience the Untamed Beauty of East Africa. Sustainably.**

![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Build-CRA-09D3AC?style=for-the-badge&logo=create-react-app&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)

![Eco Plains Safaris Hero](https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)

## 🌍 About The Project

**Eco Plains Safaris** is a premium web platform dedicated to curating and booking eco-friendly safari experiences across East Africa. We bridge the gap between luxury tourism and conservation, offering travelers a seamless way to discover sustainable adventures in Kenya, Tanzania, and beyond.

Built with modern web technologies, this application provides an immersive, buttery-smooth user experience that reflects the majesty of the African savannah. From browsing the "Big Five" to booking intimate bush walks, Eco Plains Safaris is your digital gateway to the wild.

### 🎯 Who It's For
*   **Travelers** seeking authentic, high-end, and responsible safari experiences.
*   **Eco-Tour Operators** looking to showcase their sustainable packages.
*   **Developers** interested in a modern, animation-rich React codebase.

---

## 🚀 Live Demo

*   **Live Site**: [Live Demo](https://eco-plains-safaris.vercel.app/)
*   **Video Demo**: [Watch the Walkthrough](#)

---

## 📚 Table of Contents

*   [Key Features](#-key-features)
*   [Tech Stack](#-tech-stack)
*   [Project Structure](#-project-structure)
*   [Getting Started](#-getting-started)
    *   [Prerequisites](#prerequisites)
    *   [Installation](#installation)
*   [Running Locally](#-running-locally)
*   [Scripts](#-available-scripts)
*   [Folder Overview](#-folder-overview)
*   [Testing](#-testing)
*   [Deployment](#-deployment)
*   [Contributing](#-contributing)
*   [License](#-license)
*   [Contact](#-contact)

---

## ✨ Key Features

*   **🦁 Immersive Safari Listings**: Beautifully designed cards and grids showcasing safari packages with rich imagery.
*   **🔍 Advanced Filtering**: Filter adventures by country (Kenya, Tanzania, etc.), duration, and price range.
*   **⚡ Smooth Animations**: Powered by `Framer Motion` and `Lenis` for a premium, fluid feel.
*   **📱 Fully Responsive**: Optimized for all devices, from desktop monitors to mobile phones.
*   **💬 WhatsApp Integration**: Direct "Book via WhatsApp" floating button for instant customer connection.
*   **🗺️ Interactive Details**: Comprehensive safari detail pages with itineraries, inclusions, and galleries.
*   **📸 Dynamic Carousels**: Smooth, touch-friendly sliders using `Embla Carousel` and `Swiper`.

---

## 🛠 Tech Stack

**Core:**
*   ![React](https://img.shields.io/badge/-React_19-61DAFB?logo=react&logoColor=black) **React 19** - The library for web and native user interfaces.
*   ![React Router](https://img.shields.io/badge/-React_Router_7-CA4245?logo=react-router&logoColor=white) **React Router 7** - Client-side routing.

**Styling & UI:**
*   ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?logo=css3&logoColor=white) **Vanilla CSS** - Custom, modular styles.
*   ![Lucide](https://img.shields.io/badge/-Lucide_React-F05032?logo=lucide&logoColor=white) **Lucide React** - Beautiful, consistent icons.

**Animations & Interactions:**
*   ![Framer Motion](https://img.shields.io/badge/-Framer_Motion-0055FF?logo=framer&logoColor=white) **Framer Motion** - Production-ready animation library.
*   ![Lenis](https://img.shields.io/badge/-Lenis_Scroll-000000?logo=scroll&logoColor=white) **Lenis** - Smooth scrolling.
*   **Embla Carousel** & **Swiper** - Carousel sliders.

**Data & Assets:**
*   **JSON** - Local data management (`safaris.json`).
*   **Cloudinary** - Image optimization and delivery.

---

## 📂 Project Structure

```bash
eco-plains-safaris/
├── public/
│   ├── data/               # Static data files (safaris.json, destinations.json)
│   ├── images/             # Public assets
│   └── index.html          # Entry HTML file
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── common/         # Buttons, Inputs, ScrollToTop
│   │   ├── home/           # Homepage-specific components
│   │   ├── layout/         # Navbar, Footer, Layout wrappers
│   │   └── safaris/        # Safari listing & detail components
│   ├── pages/              # Route components (HomePage, AboutPage, etc.)
│   ├── App.js              # Main application component & Routing
│   ├── index.css           # Global styles
│   └── index.js            # Entry point
├── package.json            # Dependencies and scripts
└── README.md               # Project documentation
```

---

## 🏁 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

*   **Node.js**: Version 16.0.0 or higher recommended.
*   **npm** or **yarn**: Package manager.

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/your-username/eco-plains-safaris.git
    cd eco-plains-safaris
    ```

2.  **Install dependencies**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Environment Variables**
    Currently, this project relies on local JSON data and does not strictly require an `.env` file for basic functionality. However, if you integrate external APIs (like Cloudinary or a CMS), create a `.env` file in the root:
    ```bash
    cp .env.example .env
    ```
    *Example `.env`:*
    ```env
    REACT_APP_API_URL=https://api.example.com
    REACT_APP_CLOUDINARY_CLOUD_NAME=your_cloud_name
    ```

---

## 🏃 Running Locally

Start the development server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes.

---

## 📜 Available Scripts

In the project directory, you can run:

| Command | Description |
| :--- | :--- |
| `npm start` | Runs the app in development mode. |
| `npm test` | Launches the test runner in interactive watch mode. |
| `npm run build` | Builds the app for production to the `build` folder. |
| `npm run eject` | **Note: this is a one-way operation.** Removes the single build dependency. |

---

## 📁 Folder Overview

*   **`src/components/safaris`**: The heart of the booking experience. Contains `SafariGrid` for listings, `FilterBar` for search logic, and `SafariDetailsPage` for individual tour views.
*   **`public/data/safaris.json`**: The database. This JSON file holds all safari packages, including titles, prices, itineraries, and image URLs.
*   **`src/components/layout`**: Contains the `Navbar` and `Footer`, ensuring consistent navigation across the site.

---

## 🧪 Testing

This project uses **React Testing Library** and **Jest**.

To run tests:
```bash
npm test
```

This will launch the test runner in interactive watch mode.

---

## 🚀 Deployment

The app is built with Create React App and can be easily deployed to platforms like Vercel, Netlify, or GitHub Pages.

### Vercel (Recommended)
1.  Install Vercel CLI: `npm i -g vercel`
2.  Run `vercel` in the root directory.
3.  Follow the prompts.

### Netlify
1.  Drag and drop the `build` folder to the Netlify dashboard.
2.  Or connect your GitHub repository for continuous deployment.

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 📞 Contact

**Caleb Kiune**
*   📧 Email: calebkiune@gmail.com
*   � LinkedIn: [linkedin.com/in/caleb-kiune-b356a6327](https://www.linkedin.com/in/caleb-kiune-b356a6327)
*   � GitHub: [github.com/Caleb-Kiune](https://github.com/Caleb-Kiune)

---

## 🙏 Acknowledgements

*   [Unsplash](https://unsplash.com) for the stunning wildlife photography.
*   [Lucide Icons](https://lucide.dev) for the clean icon set.
*   [React Community](https://reactjs.org) for the endless resources.

---

<p align="center">
  Made with 💚 and 🦁 in East Africa
</p>
