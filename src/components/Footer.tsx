import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Twitter, 
  Twitch, 
  Youtube,
  MessageSquare,
  Trophy,
  Mail,
  Heart,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub', color: '#6e5494' },
    { icon: Twitter, href: '#', label: 'Twitter', color: '#1DA1F2' },
    { icon: Twitch, href: '#', label: 'Twitch', color: '#9146FF' },
    { icon: Youtube, href: '#', label: 'YouTube', color: '#FF0000' },
    { icon: MessageSquare, href: '#', label: 'Discord', color: '#5865F2' }
  ];

  const quickLinks = [
    { name: 'Tournaments', badge: 'New' },
    { name: 'Create Event', badge: 'Beta' },
    { name: 'Leaderboard', badge: null },
    { name: 'Support', badge: '24/7' }
  ];

  return (
    <footer className="relative bg-black/95 border-t border-white/10">
      {/* Animated RGB line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 animate-gradient-x" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_2px,transparent_2px),linear-gradient(90deg,rgba(139,92,246,0.03)_2px,transparent_2px)] bg-[length:20px_20px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 pt-16 pb-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-purple-500/20 rounded-lg blur-lg group-hover:bg-purple-500/30 transition-colors" />
                  <Trophy className="h-10 w-10 text-purple-500 relative" />
                </div>
                <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                  TourneyPro
                </span>
              </div>
              <p className="text-gray-400 max-w-md text-lg leading-relaxed">
                The next generation tournament platform for gamers. Create, compete, and stream your gaming events to the world.
              </p>
              <motion.div 
                className="mt-6 inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors cursor-pointer group/link"
                whileHover={{ x: 5 }}
              >
                Join the community
                <ExternalLink className="h-4 w-4 transform group-hover/link:translate-x-1 transition-transform" />
              </motion.div>
            </motion.div>
          </div>
          
          {/* Quick Links Section */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href="#"
                    whileHover={{ x: 5 }}
                    className="group flex items-center justify-between text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-purple-500/50 group-hover:text-purple-500 transition-colors" />
                      {link.name}
                    </span>
                    {link.badge && (
                      <span className="px-2 py-1 text-xs rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                        {link.badge}
                      </span>
                    )}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Section */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <motion.a 
                href="mailto:support@tourneypro.com" 
                className="group flex items-center gap-3 text-gray-400 hover:text-purple-400 transition-colors p-3 rounded-lg bg-white/5 hover:bg-white/10"
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-2 rounded-full bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
                  <Mail className="h-4 w-4" />
                </div>
                <span>support@tourneypro.com</span>
              </motion.a>
              
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ y: -3 }}
                    className="group p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon 
                      className="h-5 w-5 text-gray-400 group-hover:text-[var(--color)] transition-colors" 
                      style={{ '--color': social.color } as any}
                    />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>© 2024 TourneyPro.</span>
              <span className="flex items-center gap-1">
                Made with <Heart className="h-4 w-4 text-red-500" /> for Gamers
              </span>
            </div>
            <div className="flex items-center gap-8 text-sm">
              {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map((link) => (
                <motion.a
                  key={link}
                  href="#"
                  whileHover={{ color: '#A855F7' }}
                  className="text-gray-400 hover:text-purple-400 transition-colors relative group"
                >
                  {link}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-purple-400 group-hover:w-full transition-all" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;