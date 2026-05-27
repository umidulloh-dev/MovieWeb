// Real movies with official YouTube trailers.
// Posters come from YouTube thumbnail API — unique per video, no external image deps.

const ytImage = (id, size = 'maxresdefault') =>
  `https://img.youtube.com/vi/${id}/${size}.jpg`

const make = (id, title, year, rating, duration, genre, trailerId, description) => ({
  id,
  title,
  year,
  rating,
  duration,
  genre,
  description,
  trailerId,
  poster: ytImage(trailerId, 'hqdefault'),
  backdrop: ytImage(trailerId, 'maxresdefault'),
  match: Math.floor(85 + Math.random() * 14),
})

export const FEATURED_MOVIE = {
  id: 1,
  title: 'Interstellar',
  description:
    'When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.',
  backdrop: ytImage('zSWdZVtXT7E'),
  poster: ytImage('zSWdZVtXT7E', 'hqdefault'),
  trailerId: 'zSWdZVtXT7E',
  rating: 8.7,
  year: 2014,
  duration: '2h 49m',
  genre: ['Sci-Fi', 'Adventure', 'Drama'],
  match: 98,
}

export const TRENDING = [
  make(101, 'Dune: Part Two', 2024, 8.5, '2h 46m', ['Sci-Fi', 'Adventure'], 'U2Qp5pL3ovA',
    'Paul Atreides unites with the Fremen and begins a spiritual and martial journey to prevent a terrible future only he can foresee.'),
  make(102, 'Oppenheimer', 2023, 8.3, '3h 0m', ['Drama', 'History'], 'bK6ldnjE3Y0',
    'The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.'),
  make(103, 'The Batman', 2022, 7.8, '2h 56m', ['Action', 'Crime'], 'mqqft2x_Aa4',
    'When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city\'s hidden corruption.'),
  make(104, 'Top Gun: Maverick', 2022, 8.2, '2h 11m', ['Action', 'Drama'], 'giXco2jaZ_4',
    'After more than thirty years of service, Pete "Maverick" Mitchell trains a detachment of graduates for a specialized mission.'),
  make(105, 'John Wick: Chapter 4', 2023, 7.7, '2h 49m', ['Action', 'Thriller'], 'qEVUtrk8_B4',
    'John Wick uncovers a path to defeating The High Table, but before he can earn his freedom, he must face off against a new enemy.'),
  make(106, 'Spider-Man: No Way Home', 2021, 8.2, '2h 28m', ['Action', 'Adventure'], 'JfVOs4VSpmA',
    'With Spider-Man\'s identity now revealed, Peter asks Doctor Strange for help — and unwittingly opens the multiverse.'),
  make(107, 'Avatar: The Way of Water', 2022, 7.6, '3h 12m', ['Sci-Fi', 'Adventure'], 'd9MyW72ELq0',
    'Jake Sully lives with his newfound family on the planet of Pandora. When a familiar threat returns, he must protect his family.'),
  make(108, 'Mission: Impossible – Dead Reckoning', 2023, 7.7, '2h 43m', ['Action', 'Thriller'], 'avz06PDqDbM',
    'Ethan Hunt and his team must track down a terrifying new weapon that threatens humanity before it falls into the wrong hands.'),
]

export const POPULAR = [
  make(201, 'Inception', 2010, 8.8, '2h 28m', ['Sci-Fi', 'Thriller'], 'YoHD9XEInc0',
    'A thief who steals corporate secrets through dream-sharing is given the inverse task of planting an idea into the mind of a CEO.'),
  make(202, 'The Dark Knight', 2008, 9.0, '2h 32m', ['Action', 'Crime'], 'EXeTwQWrcwY',
    'Batman raises the stakes in his war on crime when he faces the Joker — a criminal mastermind who plunges Gotham into anarchy.'),
  make(203, 'Avengers: Endgame', 2019, 8.4, '3h 1m', ['Action', 'Adventure'], 'TcMBFSGVi1c',
    'After the devastating events of Infinity War, the Avengers assemble once more to reverse Thanos\'s actions and restore balance.'),
  make(204, 'Joker', 2019, 8.4, '2h 2m', ['Crime', 'Drama'], 'zAGVQLHvwOY',
    'A mentally troubled comedian is disregarded by society and embarks on a downward spiral that ignites a violent revolution in Gotham.'),
  make(205, 'Blade Runner 2049', 2017, 8.0, '2h 44m', ['Sci-Fi', 'Drama'], 'gCcx85zbxz4',
    'A young blade runner discovers a long-buried secret that leads him on a quest to find Rick Deckard, missing for 30 years.'),
  make(206, 'Tenet', 2020, 7.4, '2h 30m', ['Action', 'Sci-Fi'], 'L3pk_TBkihU',
    'Armed with only one word — Tenet — and fighting for the survival of the entire world, a protagonist journeys through a twilight world.'),
  make(207, 'Dune', 2021, 8.0, '2h 35m', ['Sci-Fi', 'Adventure'], 'n9xhJrPXop4',
    'A noble family becomes embroiled in a war for control over the galaxy\'s most valuable asset on the planet Arrakis.'),
  make(208, '1917', 2019, 8.2, '1h 59m', ['War', 'Drama'], 'YqNYrYUiMfg',
    'April 6th, 1917. Two young British soldiers are given a seemingly impossible mission to deliver a message that could save 1,600 men.'),
]

export const TOP_RATED = [
  make(301, 'The Shawshank Redemption', 1994, 9.3, '2h 22m', ['Drama'], '6hB3S9bIaco',
    'Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.'),
  make(302, 'The Godfather', 1972, 9.2, '2h 55m', ['Crime', 'Drama'], 'sY1S34973zA',
    'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.'),
  make(303, 'Pulp Fiction', 1994, 8.9, '2h 34m', ['Crime', 'Drama'], 's7EdQ4FqbhY',
    'The lives of two mob hitmen, a boxer, and a pair of diner bandits intertwine in four tales of violence and redemption.'),
  make(304, 'Forrest Gump', 1994, 8.8, '2h 22m', ['Drama', 'Romance'], 'bLvqoHBptjg',
    'The presidencies of Kennedy and Johnson, Vietnam, Watergate, and other history unfold from the perspective of an Alabama man with a low IQ.'),
  make(305, 'Fight Club', 1999, 8.8, '2h 19m', ['Drama', 'Thriller'], 'qtRKdVHc-cE',
    'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into much more.'),
  make(306, 'The Prestige', 2006, 8.5, '2h 10m', ['Drama', 'Mystery'], 'o4gHCmTQDVI',
    'After a tragic accident, two stage magicians in 1890s London engage in a battle to create the ultimate illusion.'),
  make(307, 'Goodfellas', 1990, 8.7, '2h 26m', ['Crime', 'Biography'], '2ilzidi_J8Q',
    'The story of Henry Hill and his life through the mafia, covering his relationship with his wife Karen and his mob partners.'),
  make(308, 'Parasite', 2019, 8.5, '2h 12m', ['Thriller', 'Drama'], '5xH0HfJHsaY',
    'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.'),
]

export const ACTION = [
  make(401, 'The Matrix', 1999, 8.7, '2h 16m', ['Sci-Fi', 'Action'], 'vKQi3bBA1y8',
    'When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth about reality.'),
  make(402, 'Mad Max: Fury Road', 2015, 8.1, '2h 0m', ['Action', 'Adventure'], 'hEJnMQG9ev8',
    'In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler with the help of a group of female prisoners and a drifter.'),
  make(403, 'Gladiator', 2000, 8.5, '2h 35m', ['Action', 'Drama'], 'owK1qxDselE',
    'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.'),
  make(404, 'Casino Royale', 2006, 8.0, '2h 24m', ['Action', 'Adventure'], 'rGgwHwoSdjQ',
    'After earning 00 status and a license to kill, secret agent James Bond sets out on his first mission as 007.'),
  make(405, 'Skyfall', 2012, 7.8, '2h 23m', ['Action', 'Thriller'], '6kw1UVovByw',
    'James Bond\'s loyalty to M is tested when her past comes back to haunt her. As MI6 comes under attack, 007 must track down the threat.'),
  make(406, 'Kingsman: The Secret Service', 2014, 7.7, '2h 9m', ['Action', 'Comedy'], 'kl8F-8tR8to',
    'A spy organization recruits a promising street kid into the agency\'s training program just as a global threat emerges.'),
  make(407, 'The Raid: Redemption', 2011, 7.6, '1h 41m', ['Action', 'Thriller'], 'sbisJZ-FF5g',
    'A SWAT team becomes trapped in a tenement run by a ruthless mobster and his army of killers and thugs.'),
  make(408, 'Heat', 1995, 8.3, '2h 50m', ['Crime', 'Drama'], '2GfZl4kuVNI',
    'A group of high-end professional thieves start to feel the heat from the LAPD when they unknowingly leave a clue at their latest heist.'),
]
