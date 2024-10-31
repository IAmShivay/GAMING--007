import React from 'react';
import { Trophy, Users, Tv, ChevronDown, Gamepad2, Sword, Target, Crown, Flame, Clock, Star, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const GamingPlatformSections = () => {
  // Sample data - In a real app, this would come from your backend
  const liveStreams = [
    { id: 1, streamer: "ProGamer123", game: "Cyber Warriors", viewers: "15.2K", thumbnail: "/api/placeholder/400/225" },
    { id: 2, streamer: "ElitePlayer", game: "Battle Royale", viewers: "12.8K", thumbnail: "/api/placeholder/400/225" },
    { id: 3, streamer: "GameMaster", game: "League Wars", viewers: "10.5K", thumbnail: "/api/placeholder/400/225" },
    { id: 4, streamer: "ProPlayer", game: "Arena Masters", viewers: "9.3K", thumbnail: "/api/placeholder/400/225" },
  ];

  const tournamentWinners = [
    { rank: 1, player: "VictoryKing", prize: "$50,000", game: "Cyber Warriors", kills: 156 },
    { rank: 2, player: "LegendPro", prize: "$25,000", game: "Cyber Warriors", kills: 142 },
    { rank: 3, player: "EliteWarrior", prize: "$10,000", game: "Cyber Warriors", kills: 137 },
  ];

  const topGames = [
    { name: "Cyber Warriors", players: "1.2M", prize: "$100K", status: "Live" },
    { name: "Battle Royale", players: "950K", prize: "$75K", status: "Upcoming" },
    { name: "League Wars", players: "850K", prize: "$50K", status: "Live" },
    { name: "Arena Masters", players: "720K", prize: "$40K", status: "Upcoming" },
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* Live Streams Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.05)_2px,transparent_2px),linear-gradient(90deg,rgba(139,92,246,0.05)_2px,transparent_2px)] bg-[length:40px_40px] [background-position:center]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
              🔥 Live Streams
            </h2>
            <p className="text-gray-400">Watch top gamers compete in real-time</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {liveStreams.map((stream) => (
              <motion.div
                key={stream.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
                className="group relative bg-purple-900/20 rounded-lg overflow-hidden backdrop-blur-sm border border-purple-500/20"
              >
                <div className="relative">
                  <img src={stream.thumbnail} alt={stream.game} className="w-full object-cover" />
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-sm px-2 py-1 rounded-full flex items-center gap-1">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    LIVE
                  </div>
                  <div className="absolute top-2 right-2 bg-black/50 text-white text-sm px-2 py-1 rounded-full">
                    {stream.viewers} viewers
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-bold mb-1">{stream.streamer}</h3>
                  <p className="text-gray-400 text-sm">{stream.game}</p>
                </div>
                <div className="absolute inset-0 bg-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tournament Winners Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-black to-blue-900/20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
              🏆 Tournament Champions
            </h2>
            <p className="text-gray-400">Latest winners from our premier tournaments</p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {tournamentWinners.map((winner) => (
              <motion.div
                key={winner.rank}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
                <div className="relative p-6 backdrop-blur-sm rounded-lg border border-purple-500/20 bg-black/50">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Crown className={`w-6 h-6 ${winner.rank === 1 ? 'text-yellow-400' : winner.rank === 2 ? 'text-gray-400' : 'text-orange-400'}`} />
                      <span className="text-2xl font-bold text-white">#{winner.rank}</span>
                    </div>
                    <span className="text-green-400 font-bold">{winner.prize}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{winner.player}</h3>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">{winner.game}</span>
                    <span className="text-purple-400">{winner.kills} Kills</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Games Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.05)_2px,transparent_2px),linear-gradient(90deg,rgba(139,92,246,0.05)_2px,transparent_2px)] bg-[length:40px_40px] [background-position:center]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-4">
              🎮 Featured Games
            </h2>
            <p className="text-gray-400">Top tournaments with massive prize pools</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topGames.map((game, index) => (
              <motion.div
                key={game.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
                <div className="relative p-6 backdrop-blur-sm rounded-lg border border-purple-500/20 bg-black/50">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-bold text-white">{game.name}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs ${game.status === 'Live' ? 'bg-green-500' : 'bg-blue-500'}`}>
                      {game.status}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Users className="w-4 h-4" />
                      <span>{game.players} Players</span>
                    </div>
                    <div className="flex items-center gap-2 text-purple-400">
                      <Trophy className="w-4 h-4" />
                      <span>{game.prize} Prize Pool</span>
                    </div>
                  </div>
                  <button className="w-full mt-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-white rounded-lg transition-colors">
                    Join Tournament
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Leaderboard Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
              🌍 Global Rankings
            </h2>
            <p className="text-gray-400">Top players competing for glory</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-lg border border-purple-500/20 backdrop-blur-sm"
          >
            <table className="w-full text-left">
              <thead className="bg-purple-500/10">
                <tr>
                  <th className="p-4 text-white">Rank</th>
                  <th className="p-4 text-white">Player</th>
                  <th className="p-4 text-white">Score</th>
                  <th className="p-4 text-white">Wins</th>
                  <th className="p-4 text-white">Prize Money</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-500/10">
                {[
                  { rank: 1, player: "VictoryKing", score: "2,456", wins: 142, prize: "$125,000" },
                  { rank: 2, player: "LegendPro", score: "2,391", wins: 138, prize: "$95,000" },
                  { rank: 3, player: "EliteWarrior", score: "2,350", wins: 135, prize: "$75,000" },
                  { rank: 4, player: "ProGamer", score: "2,285", wins: 129, prize: "$50,000" },
                  { rank: 5, player: "BattleMaster", score: "2,240", wins: 125, prize: "$35,000" },
                ].map((player) => (
                  <motion.tr
                    key={player.rank}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-purple-500/5 hover:bg-purple-500/10 transition-colors"
                  >
                    <td className="p-4">
                      <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${
                        player.rank === 1 ? 'bg-yellow-500' :
                        player.rank === 2 ? 'bg-gray-400' :
                        player.rank === 3 ? 'bg-orange-500' :
                        'bg-purple-500/20'
                      } text-white font-bold`}>
                        {player.rank}
                      </span>
                    </td>
                    <td className="p-4 text-white font-medium">{player.player}</td>
                    <td className="p-4 text-purple-400">{player.score}</td>
                    <td className="p-4 text-green-400">{player.wins}</td>
                    <td className="p-4 text-yellow-400">{player.prize}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GamingPlatformSections