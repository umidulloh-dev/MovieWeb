# MovieFlix 🎬

A modern, Netflix-inspired movie streaming UI built with **React**, **Vite**, and **TailwindCSS**. Fully responsive, smooth animations, dark theme — designed as a portfolio piece for showcasing frontend skills.

![MovieFlix Preview](https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80)

## ✨ Features

- 🎨 **Netflix-style dark UI** — pixel-perfect hero banner, hover cards, smooth gradients
- 🔍 **Live search** — filter movies instantly by title or genre
- 📱 **Fully responsive** — looks great on mobile, tablet, desktop
- 🎬 **Movie detail modal** — with backdrop, ratings, genres, ESC-to-close
- ⚡ **Smooth scrolling rows** — with hover-reveal chevron arrows
- 🌑 **Custom scrollbar & gradients** — production-quality polish
- 🚀 **Built with Vite** — instant HMR, optimized builds
- 🎯 **No API keys required** — works out of the box with mock data

## 🛠️ Tech Stack

- **React 18** — UI library
- **Vite 5** — build tool & dev server
- **TailwindCSS 3** — utility-first styling
- **Lucide React** — beautiful icons
- **gh-pages** — one-command deployment

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/movieflix.git
cd movieflix

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production

```bash
npm run build
npm run preview
```

## 📦 Deploy to GitHub Pages

1. Create a new repo on GitHub (e.g. `movieflix`)
2. Update `vite.config.js` — replace `base: './'` with `base: '/movieflix/'` (your repo name)
3. Push your code to GitHub:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/movieflix.git
git push -u origin main
```

4. Deploy:

```bash
npm run build
npm run deploy
```

5. Go to **Settings → Pages** in your repo and set the source to `gh-pages` branch
6. Your site will be live at: `https://YOUR_USERNAME.github.io/movieflix/`

## 📁 Project Structure

```
movie-app/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Sticky nav with search
│   │   ├── Hero.jsx         # Featured movie banner
│   │   ├── MovieRow.jsx     # Horizontal scroll row
│   │   ├── MovieCard.jsx    # Card with hover preview
│   │   ├── MovieModal.jsx   # Detail modal
│   │   └── Footer.jsx
│   ├── data/
│   │   └── movies.js        # Mock movie data
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## 🎨 Customization

- **Colors** — edit `tailwind.config.js` (look for `netflix-red`, `netflix-dark`)
- **Movies** — edit `src/data/movies.js`
- **To use real movie data** — swap `src/data/movies.js` with TMDB API calls ([themoviedb.org](https://www.themoviedb.org/documentation/api))

## 👤 Author

**Umid Bahromov**
- GitHub: [@your-username](https://github.com/your-username)
- Upwork: [Your Upwork Profile](https://www.upwork.com)
- Email: your-email@example.com

## 📄 License

MIT — feel free to use this for your own portfolio!
