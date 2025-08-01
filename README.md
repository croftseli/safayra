# Safayra - Premium Saffron Exchange Website

A beautiful, responsive website for Safayra, showcasing premium Iranian saffron with multi-language support (English, French, German).

## 🌟 Features

- **Multi-language Support**: English, French, and German
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive Gallery**: Beautiful image carousel and gallery
- **Contact Form**: Comprehensive contact form with validation
- **Detail Pages**: In-depth information about saffron applications
- **Modern UI**: Clean, professional design with smooth animations

## 🚀 Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **JavaScript/JSX** - Pure JavaScript for maximum compatibility

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd safayra-website
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 🌐 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

### Other Platforms
The built files in the `dist` folder can be deployed to any static hosting service.

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Navigation header
│   ├── Footer.jsx      # Site footer
│   ├── HomePage.jsx    # Home page content
│   ├── AboutPage.jsx   # About page
│   ├── GalleryPage.jsx # Image gallery
│   ├── ContactPage.jsx # Contact form
│   └── DetailPages.jsx # Detail page router
├── utils/              # Utility functions
│   └── validation.js   # Form validation
├── App.jsx            # Main app component
├── main.jsx           # App entry point
└── index.css          # Global styles
```

## 🎨 Customization

### Colors
The website uses a warm color palette. Main colors can be customized in `tailwind.config.js` and component files.

### Content
- Update text content in each component file
- Replace images in the `public` folder
- Modify language translations in component files

### Styling
- Global styles: `src/index.css`
- Component styles: Tailwind classes in JSX files
- Custom utilities: `tailwind.config.js`

## 📱 Responsive Breakpoints

- Mobile: `< 640px`
- Tablet: `640px - 1024px`
- Desktop: `> 1024px`

## 🌍 Multi-language Support

The website supports three languages:
- English (EN) 🇺🇸
- French (FR) 🇫🇷
- German (DE) 🇩🇪

Language switching is handled in the Header component with flag buttons.

## 📧 Contact Form

The contact form includes:
- Full name validation
- Email validation with confirmation
- Subject and message validation
- Rate limiting protection
- Multi-language error messages

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Adding New Features

1. Create new components in `src/components/`
2. Add routing logic in `App.jsx`
3. Update navigation in `Header.jsx`
4. Add translations for all supported languages

## 📄 License

© 2025 Safayra. All rights reserved.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or support, please contact the development team.

---

**Built with ❤️ for Safayra Premium Saffron Exchange**