export interface User {
  id: string;
  username: string;
  email: string;
  avatar?: string;
  achievements: Achievement[];
}

export interface Tournament {
  id: string;
  title: string;
  game: string;
  startDate: Date;
  entryFee: number;
  prizePool: number;
  maxParticipants: number;
  currentParticipants: number;
  status: 'upcoming' | 'ongoing' | 'completed';
  organizer: User;
  streamLinks?: StreamLinks;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: Date;
}

export interface StreamLinks {
  twitch?: string;
  youtube?: string;
  facebook?: string;
}

export interface TournamentCard {
  tournament: Tournament;
  onRegister: (tournamentId: string) => void;
}