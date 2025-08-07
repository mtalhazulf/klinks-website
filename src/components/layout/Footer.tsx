import { Link } from 'react-router-dom'
import { Linkedin, Mail, Phone } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/products', label: 'Products' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <footer className="bg-background/95 supports-[backdrop-filter]:bg-background/60 border-t backdrop-blur">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand & Address */}
            <div className="space-y-4 md:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2">
                <img src="/logo-nobg.png" alt="K-Links Logo" className="h-8 w-auto" />
                <span className="text-foreground text-lg font-bold">K-Links</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Your trusted provider of high-quality electrical components and accessories. Quality you can trust.
              </p>
              <p className="text-muted-foreground text-sm">
                8/26, Ghalib Street No.20, Barkat Ali Road, Chowk Bull Road Near Ansa Tower, Lahore, Pakistan
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-foreground text-sm font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="text-muted-foreground hover:text-primary text-sm transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-foreground text-sm font-semibold">Contact Us</h3>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>0333-6737921</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>0301-4238234</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:sales@k-links.com.pk" className="hover:text-primary transition-colors">
                    sales@k-links.com.pk
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div className="space-y-4">
              <h3 className="text-foreground text-sm font-semibold">Connect</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://wa.me/923336737921"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {/* Using a generic message icon for WhatsApp */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 border-t pt-8">
            <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
              <p className="text-muted-foreground text-sm">
                © {currentYear} K-Links. All rights reserved.
              </p>
              <p className="text-muted-foreground text-sm">
                Quality you can trust.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
