# Ashish Raj - Professional React Resume

A high-performance, responsive, and visually stunning resume built with **React**, **Vite**, and **Vanilla CSS**. This project features a modern glassmorphic sidebar, dynamic data loading from JSON, and a specialized layout optimized for both web viewing and PDF printing.

## 🚀 Key Features

- **Dynamic Data Rendering**: Powered by a single `resume.json` file for easy updates.
- **Glassmorphic Sidebar**: A sleek, semi-transparent sidebar with vibrant, high-contrast skill tags and section headings.
- **Publication Highlights**: A dedicated section for books and publications with image thumbnails.
- **Print Optimized**: Custom CSS media queries ensure the resume looks perfect when printed to PDF (A4 format).
- **Interactive UI**: Smooth hover effects, transitions, and a responsive layout for all device sizes.

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd ashish_raj_resume
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Local Development

Run the development server to see changes in real-time:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

---

## 📦 Deployment

This project is configured for easy deployment to **GitHub Pages**.

### One-Command Deploy

To build the project and push the `dist/` folder to the `gh-pages` branch, simply run:

```bash
npm run deploy
```

*Note: This command automatically runs `npm run build` first via the `predeploy` script.*

---

## 📂 Project Structure

- `/src/data/resume.json`: The **Source of Truth**. Update this file to change the resume content.
- `/src/components/`: Modular React components (Header, Sidebar, MainContent, Books, etc.).
- `/src/assets/`: Images, icons, and book thumbnails.
- `/src/index.css`: Centralized design system, glassmorphic tokens, and print styles.

## 📄 License

MIT
