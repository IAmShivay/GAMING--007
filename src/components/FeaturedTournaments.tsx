import React from 'react';
import { TournamentCard } from './TournamentCard';
import { motion } from 'framer-motion';
import { Trophy, Users, Crown, ChevronRight, GamepadIcon, Clock, Sword } from 'lucide-react';
import type { Tournament } from '../types';

const FEATURED_TOURNAMENTS: Tournament[] = [
  {
    id: '1',
    title: 'Apex Legends Championship',
    game: 'Apex Legends',
    startDate: new Date('2024-04-15'),
    entryFee: 25,
    prizePool: 10000,
    maxParticipants: 100,
    currentParticipants: 67,
    status: 'upcoming',
    organizer: {
      id: '1',
      username: 'TourneyPro',
      email: 'organizer@example.com',
      achievements: []
    }
  },
  {
    id: '2',
    title: 'Valorant Masters',
    game: 'Valorant',
    startDate: new Date('2024-04-20'),
    entryFee: 30,
    prizePool: 15000,
    maxParticipants: 64,
    currentParticipants: 45,
    status: 'upcoming',
    organizer: {
      id: '2',
      username: 'GameMaster',
      email: 'gamemaster@example.com',
      achievements: []
    }
  },
  {
    id: '3',
    title: 'League of Legends Cup',
    game: 'League of Legends',
    startDate: new Date('2024-04-25'),
    entryFee: 20,
    prizePool: 20000,
    maxParticipants: 32,
    currentParticipants: 28,
    status: 'upcoming',
    organizer: {
      id: '3',
      username: 'LeagueOrganizer',
      email: 'league@example.com',
      achievements: []
    }
  }
];

export function FeaturedTournaments() {
  const handleRegister = (tournamentId: string) => {
    console.log('Register for tournament:', tournamentId);
  };

  const stats = [
    { icon: Trophy, value: '50+', label: 'Active Tournaments' },
    { icon: Users, value: '10K+', label: 'Players Registered' },
    { icon: Crown, value: '$50K+', label: 'Prize Pool' },
  ];

  return (
    <section className="relative py-24 px-4">
      {/* Background gradients and effects */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 to-black" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_2px,transparent_2px),linear-gradient(90deg,rgba(139,92,246,0.03)_2px,transparent_2px)] bg-[length:20px_20px]" />
      </div>

      {/* Floating game icons */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-12 h-12 opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              rotate: Math.random() * 360,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            <GamepadIcon className="w-full h-full text-purple-500" />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative max-w-7xl mx-auto"
      >
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6"
          >
            <Sword className="w-4 h-4 text-purple-400" />
            <span className="text-purple-400 text-sm font-medium">Premium Tournaments</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-blue-200 to-purple-200 mb-6"
          >
            Featured Tournaments
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-purple-200/60 text-lg max-w-2xl mx-auto mb-8"
          >
            Join the most exciting gaming competitions and compete with the best players worldwide for massive prize pools.
          </motion.p>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="relative group"
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-purple-500/20 rounded-lg blur-xl group-hover:bg-purple-500/30 transition-colors" />
                <div className="relative p-6 rounded-lg border border-purple-500/20 bg-purple-500/5 backdrop-blur-sm">
                  <stat.icon className="w-8 h-8 text-purple-400 mb-4 mx-auto" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-purple-200/60">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Tournaments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_TOURNAMENTS.map((tournament, index) => (
            <motion.div
              key={tournament.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-purple-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <TournamentCard
                  tournament={tournament}
                  onRegister={handleRegister}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold transition-all"
          >
            View All Tournaments
            <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default FeaturedTournaments;