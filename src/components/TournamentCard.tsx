import React from 'react';
import { Calendar, Users, Trophy, Gamepad2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import type { TournamentCard as TournamentCardProps } from '../types';

export function TournamentCard({ tournament, onRegister }: TournamentCardProps) {
  const formattedDate = new Date(tournament.startDate).toLocaleDateString();
  const prizePoolFormatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(tournament.prizePool);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300">
        <div className="relative h-48">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600">
            <motion.div
              className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
          </div>
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-2xl font-bold text-white mb-2">{tournament.title}</h3>
            <div className="flex items-center">
              <Gamepad2 className="w-4 h-4 mr-2 text-purple-300" />
              <span className="text-sm text-purple-200">{tournament.game}</span>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2 text-purple-300" />
              <span className="text-sm text-purple-100">{formattedDate}</span>
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2 text-purple-300" />
              <span className="text-sm text-purple-100">
                {tournament.currentParticipants}/{tournament.maxParticipants}
              </span>
            </div>
            <div className="flex items-center col-span-2">
              <Trophy className="w-5 h-5 mr-2 text-yellow-400" />
              <span className="text-lg font-semibold text-purple-100">
                {prizePoolFormatted}
              </span>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-purple-200">
              Entry: ${tournament.entryFee}
            </span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onRegister(tournament.id)}
              className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-medium group/btn flex items-center gap-2"
            >
              Register Now
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}