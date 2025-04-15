import CoordLogo from '@/components/coord-logo-text'
import { Instagram, Linkedin } from 'lucide-react'

interface FooterLink {
  label: string
  href: string
}

const footerLinks: FooterLink[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Fablab',
    href: '/fablab',
  },
  {
    label: 'Services',
    href: '/services',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
]

const Footer = () => {
  return (
    <section className="px-4 md:px-10 4xl:px-14 min-h-screen flex flex-col justify-between bg-blue-background pt-8 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start gap-24">
        <div className="flex flex-col gap-2">
          {footerLinks.map((item, index) => (
            <h4 key={index} className="text-white">
              {item.label}
            </h4>
          ))}
        </div>

        <p className="text-mist-background w-full md:max-w-md xl:max-w-lg 2xl:max-w-2xl 3xl:max-w-3xl">
          {' '}
          COORD (Crafted Objects Operational Resource Database) is more than a platform; it is a
          movement to ensure that no craft dies unseen, no artisan works in isolation, and no story
          goes untold.
        </p>

        <div className="flex flex-col items-start md:items-end justify-start gap-4 text-right">
          <p className="text-mist-background">Privacy Policy</p>

          <div className="flex gap-3">
            <a
              href="https://www.instagram.com/coord.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 xl:w-16 xl:h-16 rounded-full bg-white"
            >
              <Instagram className="w-5 h-5 xl:w-8 xl:h-8 text-blue-background hover:text-highlight" />
            </a>

            <a
              href="https://www.linkedin.com/company/coord-india"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 xl:w-16 xl:h-16 flex items-center justify-center rounded-full bg-white"
            >
              <Linkedin className="w-5 h-5 xl:w-8 xl:h-8 text-blue-background hover:text-highlight" />
            </a>
          </div>

          <p className="text-mist-background">All Rights Reserved</p>
        </div>
      </div>

      <div className="text-center text-white pointer-events-none">
        <CoordLogo />
      </div>
    </section>
  )
}

export default Footer
