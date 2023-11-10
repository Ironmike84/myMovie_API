const Directors = [{
    _id: {ObjectId:(1001)},
      Name: "Sam Weisman",
      Bio: "Sam Weisman was born in Binghamton, New York, and attended Deerfield Academy and Yale University, where he began acting in and directing plays.",
      Birth: "November 27, 1969",
      Death: "N/A",
      ImagePath: "https://m.media-amazon.com/images/M/MV5BMTM3MjM2MDg3NV5BMl5BanBnXkFtZTcwNzkxNjgwMw@@._V1_.jpg",
    Featured: true,
    Movies: [{ _id:{ObjectId:(2031), Title: "George of the Jungle", Genre: 'Comedy', Rating: 'PG'}}]
},
{
    _id: {ObjectId:(1002)},
      Name: "Mel Gibson",
      Bio: "Mel Columcille Gerard Gibson was born January 3, 1956 in Peekskill, New York, USA, as the sixth of eleven children of Hutton Gibson, a railroad brakeman, and Anne Patricia (Reilly) Gibson (who died in December of 1990).",
      Birth: "January 3, 1956",
      Death: "N/A",
    ImagePath: "https://m.media-amazon.com/images/M/MV5BNTUzOTMwNTM0OV5BMl5BanBnXkFtZTcwNDQwMTUxMw@@._V1_FMjpg_UX1000_.jpg",
    Featured: true,
    Movies: [{ _id: {ObjectId:(2005), Title: "Braveheart", Genre: 'Drama', Rating: 'R'}},
    { _id: {ObjectId:(2004), Title: "Passion of the Christ", Genre: 'Drama', Rating: 'R'}},
    { _id: {ObjectId:(2003), Title: "Hacksaw Ridge", Genre: 'Action', Rating: 'R'}}]
},
{
    _id: {ObjectId:(1003)},
      Name: "Jon Favreau",
      Bio: "Initially an indie film favorite, actor Jon Favreau has progressed to strong mainstream visibility into the millennium and, after nearly two decades in the business, is still enjoying character stardom as well as earning notice as a writer/producer/director.",
      Birth: "October 19, 1966",
      Death: "N/A",
    ImagePath: "https://m.media-amazon.com/images/M/MV5BNjcwNzg4MjktNDNlMC00M2U1LWJmMjgtZTVkMmI4MDI2MTVmXkEyXkFqcGdeQXVyMjI4MDI0NTM@._V1_.jpg",
    Featured: false,
    Movies: [
      { _id: {ObjectId:(2002), Title: "Ironman", Genre: 'Action', Rating: 'PG-13'}},
      { _id: {ObjectId:(2012), Title: "Ironman 2", Genre: 'Action', Rating: 'PG-13'}},
      { _id: {ObjectId:(2013), Title: "Ironman 3", Genre: 'Action', Rating: 'PG-13'}}
    ]
  },
{
    _id: {ObjectId:(1004)},
      Name: "James Gunn",
      Bio: "James Gunn was born and raised in St. Louis, Missouri, to Leota and James Francis Gunn. He is from a large Catholic family, with Irish and Czech ancestry. His father and his uncles were all lawyers.",
      Birth: "August 5, 1966",
      Death: "N/A",
    ImagePath: "https://m.media-amazon.com/images/M/MV5BMTYxMDgzMjA5OV5BMl5BanBnXkFtZTcwMzMwMTUxNw@@._V1_.jpg",
    Featured: false,
    Movies: [{ _id: {ObjectId:(2007), Title: "Guardians of the Galaxy", Genre: 'Action', Rating: 'PG-13'}}]
},
{
    _id: {ObjectId:(1005)},
      Name: "Ivan Reitman",
      Bio: "Ivan Reitman, as a producer and director, has created many of American cinema's most successful and best loved feature film comedies and has worked with Hollywood's acting elite.",
      Birth: "October 27, 1946",
      Death: "N/A",
    ImagePath: "https://m.media-amazon.com/images/M/MV5BMTc1MDA2NDgwM15BMl5BanBnXkFtZTcwOTA3NjQxMw@@._V1_FMjpg_UX1000_.jpg",
    Featured: false,
    Movies: [{ _id: {ObjectId:(2006), Title: "No Strings Attached", Genre: 'Romance', Rating: 'PG-13'}}]
},
{
    _id: {ObjectId:(1006)},
      Name: "John Lasseter",
      Bio: "Although born in Hollywood John and his twin sister, Johanna were raised in Wittier near Los Angeles. His parents were Jewell Mae (Risley), an art teacher, and Paul Eual Lasseter, a parts manager at a Chevrolet dealership.",
      Birth: "January 12, 1957",
      Death: "N/A",
    ImagePath: "https://m.media-amazon.com/images/M/MV5BMTQ5NTczNjE5MV5BMl5BanBnXkFtZTcwMTA1MTQ3Mg@@._V1_.jpg",
    Featured: false,
    Movies: [{ _id: {ObjectId:(2001), Title: "Toy Story", Genre: 'Animation', Rating: 'G'}}]
},
{
    _id: {ObjectId:(1007)},
      Name: "Nick Cassavetes",
      Bio: "Nick Cassavetes was born in New York City, the son of actress Gena Rowlands and Greek-American actor and film director John Cassavetes.",
      Birth: "May 21, 1959",
      Death: "N/A",
    ImagePath: "https://m.media-amazon.com/images/M/MV5BMTM5NDgxNDQ4NV5BMl5BanBnXkFtZTYwNzY2Mjgy._V1_.jpg",
    Featured: false,
    Movies: [{ _id: {ObjectId:(2009), Title: "The Notebook", Genre: 'Romance', Rating: 'PG-13'}}]
},
{
    _id: {ObjectId:(1008)},
      Name: "Lana Wachowski",
      Bio: "Lana Wachowski and her sister Lilly Wachowski, also known as the Wachowskis, are the duo behind such ground-breaking movies as The Matrix (1999) and Cloud Atlas (2012).",
      Birth: "June 21, 1965",
      Death: "N/A",
    ImagePath: "https://m.media-amazon.com/images/M/MV5BMjEzMTc2MDQ5OV5BMl5BanBnXkFtZTcwNjkzNDY0OA@@._V1_.jpg",
    Featured: true,
    Movies: [
      { _id: {ObjectId:(2010), Title: "The Matrix", Genre: 'Action', Rating: 'R'}},
      { _id: {ObjectId:(2000), Title: "The Matrix Reloaded", Genre: 'Action', Rating: 'R'}}]
},
{
    _id: {ObjectId:(2009)},
      Name: "Sam Raimi",
      Bio: "Highly inventive U.S. film director/producer/writer/actor Sam Raimi first came to the attention of film fans with the savage, yet darkly humorous, low-budget horror film, The Evil Dead (1981).",
      Birth: "October 23, 1959",
      Death: "N/A",
    ImagePath: "https://m.media-amazon.com/images/M/MV5BODQ0NjI0NzkzMV5BMl5BanBnXkFtZTYwMDc0ODk1._V1_FMjpg_UX1000_.jpg",
    Featured: false,
    Movies: [{ _id: {ObjectId:(2008), Title: "Spider Man", Genre: 'Action', Rating: 'PG-13'}}]
},
{
    _id: {ObjectId:(1010)},
    Name: "Frank Darabont",
    Bio: "Three-time Oscar nominee Frank Darabont was born in a refugee camp in 1959 in Montbeliard, France, the son of Hungarian parents who had fled Budapest during the failed 1956 Hungarian revolution. Brought to America as an infant, he settled with his family in Los Angeles and attended Hollywood High School.",
    Birth: "1959-01-28",
    Death: "N/A",
    ImagePath: "https://m.media-amazon.com/images/M/MV5BNjk0MTkxNzQwOF5BMl5BanBnXkFtZTcwODM5OTMwNA@@._V1_.jpg",
  Featured: true,
  Movies: [ {_id: {ObjectId:(2015), Title: "The Shawshank Redemption", Genre: 'Drama', Rating: "R"}}]
},
{
  _id: {ObjectId:(1011)},
  Name: "Francis Ford Coppola",
  Bio: "Francis Ford Coppola was born in 1939 in Detroit, Michigan, but grew up in a New York suburb in a creative, supportive Italian-American family. His father, Carmine Coppola, was a composer and musician.",
  Birth: "1939-04-07",
  Death: "N/A",
  ImagePath: "https://m.media-amazon.com/images/M/MV5BMTM5NDU3OTgyNV5BMl5BanBnXkFtZTcwMzQxODA0NA@@._V1_.jpg",
Featured: true,
Movies: [ {_id: {ObjectId:(2017), Title: "The GodFather", Genre: 'Crime', Rating: "R"}}]
},
{
  _id: {ObjectId:(1012)},
  Name: "Robert Zemeckis",
  Bio: "A whiz-kid with special effects, Robert is from the Spielberg camp of film-making (Steven Spielberg produced many of his films).",
  Birth: "1951-05-14",
  Death: "N/A",
  ImagePath: "https://m.media-amazon.com/images/M/MV5BMTgyMTMzMDUyNl5BMl5BanBnXkFtZTcwODA0ODMyMw@@._V1_.jpg",
Featured: true,
Movies: [ {_id: {ObjectId:(2018), Title: "Forest Gump", Genre: 'Drama', Rating: "PG-13"}},
          {_id: {ObjectId:(2019), Title: "Contact", Genre: 'Drama', Rating: "PG"}},
          {_id: {ObjectId:(2020), Title: "Back to the Future", Genre: 'Drama', Rating: "PG"}},
          {_id: {ObjectId:(2021), Title: "Cast Away", Genre: 'Drama', Rating: "PG-13"}},
          {_id: {ObjectId:(2022), Title: "Flight", Genre: 'Drama', Rating: "R"}}]
},
{
  _id: {ObjectId:(1013)},
  Name: "Steven Spielberg",
  Bio: "One of the most influential personalities in the history of cinema, Steven Spielberg is Hollywood's best known director and one of the wealthiest filmmakers in the world. He has an extraordinary number of commercially successful and critically acclaimed credits to his name, either as a director, producer or writer since launching the summer.",
  Birth: "12-18-1946",
  Death: "N/A",
  ImagePath: "https://m.media-amazon.com/images/M/MV5BMTY1NjAzNzE1MV5BMl5BanBnXkFtZTYwNTk0ODc0._V1_FMjpg_UX1000_.jpg",
Featured: true,
Movies: [ {_id: {ObjectId:(2023), Title: "Saving Private Ryan", Genre: 'Drama', Rating: "R"}},
          {_id: {ObjectId:(2024), Title: "Schindlers List", Genre: 'Drama', Rating: "R"}},
          {_id: {ObjectId:(2025), Title: "E.T.", Genre: 'Drama', Rating: "PG"}},
          {_id: {ObjectId:(2026), Title: "Indiana Jones - Raiders of the Lost Ark", Genre: 'Drama', Rating: "PG"}},
          {_id: {ObjectId:(2027), Title: "Minority Report", Genre: 'Drama', Rating: "PG-13"}},
          {_id: {ObjectId:(2028), Title: "Jaws", Genre: 'Drama', Rating: "PG"}}]
},
{
  _id: {ObjectId:(1014)},
  Name: "Adam McKay",
  Bio: "Adam McKay (born April 17, 1968) is an American screenwriter, director, comedian, and actor. McKay has a comedy partnership with Will Ferrell, with whom he co-wrote the films Anchorman, Talladega Nights, and The Other Guys.",
  Birth: "1968-04-17",
  Death: "N/A",
  ImagePath: "https://m.media-amazon.com/images/M/MV5BZmQ2ZDNkMGYtOWUzNi00N2Q3LTk1MDItODFlNDJkMTZkMjFmXkEyXkFqcGdeQXVyMjMxNzg4Mjk@._V1_.jpg",
Featured: false,
Movies: [ {_id: {ObjectId:(2030), Title: "Talladega Nights: The Ballad of Ricky Bobby", Genre: 'Comedy', Rating: "PG-13"}},
          {_id: {ObjectId:(2033), Title: "The Big Short", Genre: 'Drama', Rating: "R"}},
          {_id: {ObjectId:(2035), Title: "The Other Guys", Genre: 'Comedy', Rating: "PG-13"}},
          {_id: {ObjectId:(2036), Title: "Anchorman: The Legend of Ron Burgundy", Genre: 'Comedy', Rating: "PG-13"}},
          {_id: {ObjectId:(2037), Title: "Anchorman 2: The Legend Continues", Genre: 'Comedy', Rating: "PG-13"}},
          {_id: {ObjectId:(2038), Title: "Step Brothers", Genre: 'Comedy', Rating: "PG-13"}}]
},
{
  _id: {ObjectId:(1015)},
  Name: "Quentin Tarantino",
  Bio: "Quentin Jerome Tarantino was born in Knoxville, Tennessee. His father, Tony Tarantino, is an Italian-American actor and musician from New York, and his mother, Connie (McHugh), is a nurse from Tennessee.",
  Birth: "1963-03-27",
  Death: "N/A",
  ImagePath: "https://m.media-amazon.com/images/M/MV5BMTgyMjI3ODA3Nl5BMl5BanBnXkFtZTcwNzY2MDYxOQ@@._V1_FMjpg_UX1000_.jpg",
Featured: true,
Movies: [ {_id: {ObjectId:(2052), Title: "Pulp Fiction", Genre: 'Drama', Rating: "R"}},
          {_id: {ObjectId:(2053), Title: "The Hateful Eight", Genre: 'Drama', Rating: "R"}},
          {_id: {ObjectId:(2054), Title: "Reservoir Dogs", Genre: 'Drama', Rating: "R"}},
          {_id: {ObjectId:(2038), Title: "Kill Bill: Volume 1", Genre: 'Action', Rating: "R"}},
          {_id: {ObjectId:(2039), Title: "Kill Bill: Volume 2", Genre: 'Action', Rating: "R"}},
          {_id: {ObjectId:(2040), Title: "Inglourious Basterds", Genre: 'Drama', Rating: "R"}}]
},
{
  _id: {ObjectId:(1016)},
  Name: "Joss Whedon",
  Bio: "Joss Whedon is the middle of five brothers - his younger brothers are Jed Whedon and Zack Whedon. Both his father, Tom Whedon and his grandfather, John Whedon were successful television writers. Joss' mother, Lee Stearns, was a history teacher and she also wrote novels as Lee Whedon.",
  Birth: "1964-05-23",
  Death: "N/A",
  ImagePath: "https://m.media-amazon.com/images/M/MV5BMTg5MzQ0MDA4MF5BMl5BanBnXkFtZTcwNzUwOTk4OQ@@._V1_.jpg",
Featured: false,
Movies: [ {_id: {ObjectId:(2051), Title: "The Avengers", Genre: 'Action', Rating: "PG-13"}}]
},
{
  _id: {ObjectId:(1017)},
  Name: "Christopher Nolan",
  Bio: "Best known for his cerebral, often nonlinear, storytelling, acclaimed writer-director Christopher Nolan was born on July 30, 1970, in London, England. Over the course of 15 years of filmmaking, Nolan has gone from low-budget independent films to working on some of the biggest blockbusters ever made. At 7 years old, Nolan began making short movies with his father's Super-8 camera. While studying English Literature at University College London, he shot 16-millimeter films at U.C.L.'s film society, where he learned the guerrilla techniques he would later use to make his first feature, Following (1998), on a budget of around $6,000. The noir thriller was recognized at a number of international film festivals prior to its theatrical release and gained Nolan enough credibility that he was able to gather substantial financing for his next film.",
  Birth: "1970-07-30",
  Death: "N/A",
  ImagePath: "https://m.media-amazon.com/images/M/MV5BNjE3NDQyOTYyMV5BMl5BanBnXkFtZTcwODcyODU2Mw@@._V1_FMjpg_UX1000_.jpg",
Featured: true,
Movies: [ {_id: {ObjectId:(2039), Title: "Inception", Genre: 'Action', Rating: "PG-13"}},
          {_id: {ObjectId:(2040), Title: "Interstellar", Genre: 'Drama', Rating: "PG-13"}},
          {_id: {ObjectId:(2041), Title: "Dunkirk", Genre: 'Drama', Rating: "PG-13"}},
          {_id: {ObjectId:(2042), Title: "Batman Begins", Genre: 'Action', Rating: "PG-13"}},
          {_id: {ObjectId:(2043), Title: "The Dark Knight", Genre: 'Action', Rating: "PG-13"}},
          {_id: {ObjectId:(2044), Title: "The Dark Knight Rises", Genre: 'Action', Rating: "PG-13"}}]
},
{
  _id: {ObjectId:(1018)},
  Name: "Martin Scorsese",
  Bio: "Martin Charles Scorsese was born on November 17, 1942 in Queens, New York City, to Catherine Scorsese (née Cappa) and Charles Scorsese, who both worked in Manhattan's garment district, and whose families both came from Palermo, Sicily. He was raised in the neighborhood of Little Italy, which later provided the inspiration for several of his films. Scorsese earned a B.S. degree in film communications in 1964, followed by an M.A. in the same field in 1966 at New York University's School of Film. During this time, he made numerous prize-winning short films including The Big Shave (1967), and directed his first feature film, Who's That Knocking at My Door (1967).",
  Birth: "1942-11-17",
  Death: "N/A",
  ImagePath: "https://m.media-amazon.com/images/M/MV5BMTcyNDA4Nzk3N15BMl5BanBnXkFtZTcwNDYzMjMxMw@@._V1_.jpg",
Featured: true,
Movies: [ {_id: {ObjectId:(2045), Title: "The Irishman", Genre: 'Drama', Rating: "R"}},
          {_id: {ObjectId:(2046), Title: "The Wolf of Wallstreet", Genre: 'Comedy', Rating: "R"}}]
},
{
  _id: {ObjectId:(1019)},
  Name: "Denis Villeneuve",
  Bio: "Denis Villeneuve is a French Canadian film director and writer. He was born in 1967, in Trois-Rivières, Québec, Canada. He started his career as a filmmaker at the National Film Board of Canada. He is best known for his feature films Arrival (2016), Sicario (2015), Prisoners (2013), Enemy (2013), and Incendies (2010). He is married to Tanya Lapointe.",
  Birth: "1967-10-03",
  Death: "N/A",
  ImagePath: "https://m.media-amazon.com/images/M/MV5BMzU2MDk5MDI2MF5BMl5BanBnXkFtZTcwNDkwMjMzNA@@._V1_.jpg",
Featured: false,
Movies: [ {_id: {ObjectId:(2047), Title: "Blade Runner 2049", Genre: 'Action', Rating: "R"}}]
},
{
  _id: {ObjectId:(1020)},
  Name: "Ridley Scott",
  Bio: "Described by film producer Michael Deeley as 'the very best eye in the business', director Ridley Scott was born on November 30, 1937 in South Shields, Tyne and Wear (then County Durham). His father was an officer in the Royal Engineers and the family followed him as his career posted him throughout the United Kingdom and Europe before they eventually returned to Teesside. Scott wanted to join the Royal Army (his elder brother Frank had already joined the Merchant Navy) but his father encouraged him to develop his artistic talents instead and so he went to West Hartlepool College of Art and then London's Royal College of Art where he helped found the film department.",
  Birth: "1937-11-30",
  Death: "N/A",
  ImagePath: "https://m.media-amazon.com/images/M/MV5BMGJkOGM5OWEtNDYxMy00Njg4LWExNjAtY2ZlNWNlNzVhNDk4XkEyXkFqcGdeQXVyNDkzNTM2ODg@._V1_.jpg",
Featured: true,
Movies: [ {_id: {ObjectId:(2048), Title: "Gladiator", Genre: 'Drama', Rating: "R"}},
          {_id: {ObjectId:(2049), Title: "Hannibal", Genre: 'Drama', Rating: "R"}},
          {_id: {ObjectId:(2050), Title: "American Gangster", Genre: 'Crime', Rating: "R"}}]
}
]

export default Directors