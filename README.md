# Eco Plains Safaris

> **Experience the Untamed Beauty of East Africa. Sustainably.**

![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Build](https://img.shields.io/badge/Build-CRA-09D3AC?style=for-the-badge&logo=create-react-app&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)

---

## About The Project

**Eco Plains Safaris** is a premium web platform dedicated to curating and booking eco-friendly safari experiences across East Africa. We bridge the gap between luxury tourism and conservation, offering travelers a seamless way to discover sustainable adventures in Kenya, Tanzania, and beyond.

Built with modern web technologies, this application provides an immersive, smooth user experience that reflects the majesty of the African savannah.

**Logo:** Located at `public/icons/eco plains logo.png`

### Target Audience

- **Travelers** seeking authentic, high-end, and responsible safari experiences
- **Eco-Tour Operators** looking to showcase their sustainable packages
- **Developers** interested in a modern, animation-rich React codebase

---

## Live Demo

- **Live Site:** [https://eco-plains-safaris.vercel.app/](https://eco-plains-safaris.vercel.app/)

---

## Table of Contents

- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Key Features

| Feature | Description |
|---------|-------------|
| **Immersive Safari Listings** | Beautifully designed cards and grids showcasing safari packages with rich imagery |
| **Advanced Filtering** | Filter adventures by country, duration, and price range |
| **Smooth Animations** | Powered by Framer Motion and Lenis for a premium, fluid feel |
| **Fully Responsive** | Optimized for all devices, from desktop monitors to mobile phones |
| **WhatsApp Integration** | Direct "Book via WhatsApp" floating button for instant customer connection |
| **Interactive Details** | Comprehensive safari detail pages with itineraries, inclusions, and galleries |
| **Dynamic Carousels** | Smooth, touch-friendly sliders using Embla Carousel and Swiper |

---

## Tech Stack

### Core
| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.x | UI library |
| React Router | 7.x | Client-side routing |

### Styling & UI
| Technology | Purpose |
|------------|---------|
| Vanilla CSS | Custom, modular styles |
| Lucide React | Icon library |

### Animations & Interactions
| Technology | Purpose |
|------------|---------|
| Framer Motion | Production-ready animations |
| Lenis | Smooth scrolling |
| Embla Carousel | Carousel slider |
| Swiper | Touch-friendly sliders |

### Data & Assets
| Technology | Purpose |
|------------|---------|
| JSON | Local data management |
| Cloudinary | Image optimization and delivery |

---

## Project Structure

```
eco-plains-safaris/
├── public/
│   ├── data/               # Static data files (safaris.json, destinations.json)
│   ├── icons/              # Logo and icon assets
│   ├── images/             # Public image assets
│   └── index.html          # Entry HTML file
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── common/         # Buttons, Inputs, ScrollToTop
│   │   ├── home/           # Homepage-specific components
│   │   ├── layout/         # Navbar, Footer, Layout wrappers
│   │   └── safaris/        # Safari listing & detail components
│   ├── hooks/              # Custom React hooks
│   ├── pages/              # Route components (HomePage, AboutPage, etc.)
│   ├── App.js              # Main application component & Routing
│   ├── index.css           # Global styles
│   └── index.js            # Entry point
├── package.json            # Dependencies and scripts
└── README.md               # Project documentation
```

---

## Getting Started

### Prerequisites

- **Node.js:** Version 16.0.0 or higher
- **npm** or **yarn:** Package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Caleb-Kiune/eco-plains-safaris.git
   cd eco-plains-safaris
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the application.

### Environment Variables (Optional)

For external API integrations, create a `.env` file in the root directory:

```env
REACT_APP_API_URL=https://api.example.com
REACT_APP_CLOUDINARY_CLOUD_NAME=your_cloud_name
```

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Runs the app in development mode |
| `npm test` | Launches the test runner in interactive watch mode |
| `npm run build` | Builds the app for production to the `build` folder |
| `npm run eject` | Removes the single build dependency (one-way operation) |

---

## Testing

This project uses **React Testing Library** and **Jest** for testing.

```bash
npm test
```

---

## Deployment

The app can be deployed to platforms like Vercel, Netlify, or GitHub Pages.

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Netlify

1. Run `npm run build`
2. Drag and drop the `build` folder to the Netlify dashboard, or connect your GitHub repository for continuous deployment.

---

## Contributing

Contributions are welcome and appreciated.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

## Contact

**Caleb Kiune**

| Platform | Link |
|----------|------|
| Email | calebkiune@gmail.com |
| LinkedIn | [linkedin.com/in/caleb-kiune-b356a6327](https://www.linkedin.com/in/caleb-kiune-b356a6327) |
| GitHub | [github.com/Caleb-Kiune](https://github.com/Caleb-Kiune) |

---

## Acknowledgements

- [Unsplash](https://unsplash.com) — Wildlife photography
- [Lucide Icons](https://lucide.dev) — Icon library
- [React Community](https://reactjs.org) — Resources and documentation

---

<p align="center">
  Made in East Africa
</p>
