import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Twitter, 
  Twitch, 
  Youtube,
  MessageSquare, // Changed from Discord to MessageSquare
  Trophy,
  Mail,
  Heart
} from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Twitch, href: '#', label: 'Twitch' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: MessageSquare, href: '#', label: 'Discord' } // Updated icon
  ];

  return (
    <footer className="relative bg-black border-t border-white/10">
      {/* RGB line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 animate-gradient-x" />
      
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Trophy className="h-8 w-8 text-purple-500" />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                TourneyPro
              </span>
            </div>
            <p className="text-gray-400 max-w-md">
              The next generation tournament platform for gamers. Create, compete, and stream your gaming events to the world.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Tournaments', 'Create Event', 'Leaderboard', 'Support'].map((link) => (
                <li key={link}>
                  <motion.a
                    href="#"
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-4">
              <a href="mailto:support@tourneypro.com" className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors">
                <Mail className="h-4 w-4" />
                <span>support@tourneypro.com</span>
              </a>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ y: -3 }}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 TourneyPro. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <motion.a
                href="#"
                whileHover={{ color: '#A855F7' }}
                className="text-gray-400"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ color: '#A855F7' }}
                className="text-gray-400"
              >
                Terms of Service
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}