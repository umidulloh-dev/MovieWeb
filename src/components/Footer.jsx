import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-netflix-dark border-t border-white/10 px-4 md:px-12 py-12 mt-16">
      <div className="max-w-5xl mx-auto">
        <div className="flex gap-5 mb-8">
          <a
            href="#"
            className="text-white/70 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="#"
            className="text-white/70 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="#"
            className="text-white/70 hover:text-white transition-colors"
            aria-label="Twitter"
          >
            <Twitter size={24} />
          </a>
          <a
            href="mailto:hello@example.com"
            className="text-white/70 hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-white/60 mb-8">
          {[
            'Audio Description',
            'Help Center',
            'Gift Cards',
            'Media Center',
            'Investor Relations',
            'Jobs',
            'Terms of Use',
            'Privacy',
            'Legal Notices',
            'Cookie Preferences',
            'Corporate Information',
            'Contact Us',
          ].map((link) => (
            <a
              key={link}
              href="#"
              className="hover:text-white transition-colors hover:underline"
            >
              {link}
            </a>
          ))}
        </div>

        <button className="border border-white/40 text-white/70 text-xs px-3 py-1 mb-6 hover:text-white hover:border-white transition-colors">
          Service Code
        </button>

        <p className="text-white/50 text-xs">
          © {new Date().getFullYear()} MovieFlix · Built with React, Vite & TailwindCSS
          ·{' '}
          <a href="#" className="hover:text-white transition-colors">
            Designed by Umid
          </a>
        </p>
      </div>
    </footer>
  )
}
