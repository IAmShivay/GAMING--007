import React from 'react';
import { TournamentCard } from './TournamentCard';
import { motion } from 'framer-motion';
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

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-purple-900 to-black">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-blue-200 mb-4"
          >
            Featured Tournaments
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-purple-200/60 text-lg"
          >
            Join the most exciting gaming competitions
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_TOURNAMENTS.map((tournament, index) => (
            <motion.div
              key={tournament.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <TournamentCard
                tournament={tournament}
                onRegister={handleRegister}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}