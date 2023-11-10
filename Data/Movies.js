let Movies = [
  {
    _id: {ObjectId:(2000)},
    Title: "The Matrix Reloaded",
    Description: "Freedom fighters Neo, Trinity and Morpheus continue to lead the revolt against the Machine Army, unleashing their arsenal of extraordinary skills and weaponry against the systematic forces of repression and exploitation.",
    Genre: {
      _id: {ObjectId:(4002)},
      Name: "Action",
      Description: "Action is a genre where you will find car chases Wild rides, thrills, and more to break up and boredom find yourself one of these movies!!!"
    },
    Director: {
      _id: {ObjectId:(1008)},
      Name: "Lana Wachowski",
      Bio: "Lana Wachowski and her sister Lilly Wachowski, also known as the Wachowskis, are the duo behind such ground-breaking movies as The Matrix (1999) and Cloud Atlas (2012).",
      Birth: "1-12-1957",
      Death: "N/A",
    },
    Actors:[{
      "StarActor":
      {_id:{ObjectId:(5028), Name: "Keanu Reeves"}},
      "SupportingActor":
      {_id:{ObjectId:(5029), Name: "Laurence Fishburne"}},
      "Cast":
      {_id:{ObjectId:(5030), Name: "Carrie Ann Moss"}}
      }],
  
    Rating: "R",
    Release: "2003",
    ImagePath: "https://m.media-amazon.com/images/M/MV5BODE0MzZhZTgtYzkwYi00YmI5LThlZWYtOWRmNWE5ODk0NzMxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    Featured: false
  },
  {
    _id: {ObjectId:(2001)},
    Title: "Toy Story",
    Description: "A cowboy doll is profoundly threatened and jealous when a new spaceman action figure supplants him as top toy in a boy's bedroom.",
    Genre: {
      _id: {ObjectId:(4002)},
      Name: "Action",
      Description: "Action is a genre where you will find car chases Wild rides, thrills, and more to break up and boredom find yourself one of these movies!!!"
    },
    Director: {
      _id: {ObjectId:(1006)},
      Name: "John Lasseter",
      Bio: "Although born in Hollywood John and his twin sister, Johanna were raised in Wittier near Los Angeles. His parents were Jewell Mae (Risley), an art teacher, and Paul Eual Lasseter, a parts manager at a Chevrolet dealership.",
      Birth: "1-12-1957",
      Death: "N/A",
    },
    Actors:[{
      "StarActor":
      {_id:{ObjectId:(5013), Name: "Tom Hanks"}},
      "SupportingActor":
      {_id:{ObjectId:(5014), Name: "Tim Allen"}},
      "Cast":
      {_id:{ObjectId:(5015), Name: "Don Rickles"}}
      }],
  
    Rating: "G",
    Release: "1995",
    ImagePath: "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_FMjpg_UX1000_.jpg",
    Featured: false
  },
  {
    _id: {ObjectId:(2002)},
    Title: "IronMan",
    Description: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
    Genre: {
      _id: {ObjectId:(4002)},
      Name: "Action",
      Description: "Action is a genre where you will find car chases Wild rides, thrills, and more to break up and boredom find yourself one of these movies!!!"
    },
    Director: {
      _id: {ObjectId:(1003)},
      Name: "Jon Favreau",
      Bio: "Initially an indie film favorite, actor Jon Favreau has progressed to strong mainstream visibility into the millennium and, after nearly two decades in the business, is still enjoying character stardom as well as earning notice as a writer/producer/director.",
      Birth: "10-19-1966",
      Death: "N/A",
    },
    Actors:[{
      "StarActor":
      {_id:{ObjectId:(5007), Name: "Robert Downey Jr."}},
      "SupportingActor":
      {_id:{ObjectId:(5008), Name: "Gwyneth Paltrow"}},
      "Cast":
      {_id:{ObjectId:(5136), Name: "Terrance Howard"}}
      }],
  
    Rating: "PG-13",
    Release: "2008",
    ImagePath: "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_.jpg",
    Featured: false
  },
  {
    _id: {ObjectId:(2003)},
    Title: "Hacksaw Ridge",
    Description: "World War II American Army Medic Desmond T. Doss, serving during the Battle of Okinawa, refuses to kill people and becomes the first man in American history to receive the Medal of Honor without firing a shot.",
    Genre: {
      _id: {ObjectId:(4001)},
      Name: "Drama",
      Description: "Drama films bring the audiunce feelings of emotion by social issues, fights, and violence. Scenes that are not only enticing you will want to watch watch next to find out more!!"
    },
    Director: {
      _id: {ObjectId:(1005)},
      Name: "Mel Gibson",
      Bio: "Mel Columcille Gerard Gibson was born January 3, 1956 in Peekskill, New York, USA, as the sixth of eleven children of Hutton Gibson, a railroad brakeman, and Anne Patricia (Reilly) Gibson (who died in December of 1990). His mother was Irish, from County Longford, while his American-born father is of mostly Irish descent.",
      Birth: "1-3-1956",
      Death: "N/A",
    },
    Actors:[{
      "StarActor":
      {_id:{ObjectId:(5133), Name: "Andrew Garfield"}},
      "SupportingActor":
      {_id:{ObjectId:(5134), Name: "Sam Worthington"}},
      "Cast":
      {_id:{ObjectId:(5135), Name: "Luke Bracey"}}
      }],
  
    Rating: "R",
    Release: "2016",
    ImagePath: "https://m.media-amazon.com/images/M/MV5BMjQ1NjM3MTUxNV5BMl5BanBnXkFtZTgwMDc5MTY5OTE@._V1_.jpg",
    Featured: false
  },
  {
  _id: {ObjectId:(2004)},
  Title: "Passion Of The Christ",
  Description: "Depicts the final twelve hours in the life of Jesus of Nazareth, on the day of his crucifixion in Jerusalem.",
  Genre: {
    _id: {ObjectId:(4001)},
    Name: "Drama",
    Description: "Drama films bring the audiunce feelings of emotion by social issues, fights, and violence. Scenes that are not only enticing you will want to watch watch next to find out more!!"
  },
  Director: {
    _id: {ObjectId:(1005)},
    Name: "Mel Gibson",
    Bio: "Mel Columcille Gerard Gibson was born January 3, 1956 in Peekskill, New York, USA, as the sixth of eleven children of Hutton Gibson, a railroad brakeman, and Anne Patricia (Reilly) Gibson (who died in December of 1990). His mother was Irish, from County Longford, while his American-born father is of mostly Irish descent.",
    Birth: "1-3-1956",
    Death: "N/A",
  },
  Actors:[{
    "StarActor":
    {_id:{ObjectId:(5130), Name: "Jim Caviezel"}},
    "SupportingActor":
    {_id:{ObjectId:(5131), Name: "Monica Bellucci"}},
    "Cast":
    {_id:{ObjectId:(5132), Name: "Maia Morgenstern"}}
    }],

  Rating: "R",
  Release: "1995",
  ImagePath: "https://m.media-amazon.com/images/M/MV5BYjE2MDNhMzItNmMzNi00NzY1LWIwNTktNmE5ZWE4OTcyNjJhXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_FMjpg_UX1000_.jpg",
  Featured: false
},
  {
  _id: {ObjectId:(2005)},
  Title: "BraveHeart",
  Description: "Scottish warrior William Wallace leads his countrymen in a rebellion to free his homeland from the tyranny of King Edward I of England.",
  Genre: {
    _id: {ObjectId:(4001)},
    Name: "Drama",
    Description: "Drama films bring the audiunce feelings of emotion by social issues, fights, and violence. Scenes that are not only enticing you will want to watch watch next to find out more!!"
  },
  Director: {
    _id: {ObjectId:(1005)},
    Name: "Mel Gibson",
    Bio: "Mel Columcille Gerard Gibson was born January 3, 1956 in Peekskill, New York, USA, as the sixth of eleven children of Hutton Gibson, a railroad brakeman, and Anne Patricia (Reilly) Gibson (who died in December of 1990). His mother was Irish, from County Longford, while his American-born father is of mostly Irish descent.",
    Birth: "1-3-1956",
    Death: "N/A",
  },
  Actors:[{
    "StarActor":
    {_id:{ObjectId:(5010), Name: "Mel Gibson"}},
    "SupportingActor":
    {_id:{ObjectId:(5128), Name: "Sophie Marceau"}},
    "Cast":
    {_id:{ObjectId:(5129), Name: "Angus Macfadyen"}}
    }],

  Rating: "R",
  Release: "1995",
  ImagePath: "https://m.media-amazon.com/images/M/MV5BMzkzMmU0YTYtOWM3My00YzBmLWI0YzctOGYyNTkwMWE5MTJkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
  Featured: false
},
//============================================================================

 {
    _id: {ObjectId:(2006)},
    Title: "No Strings Attached",
    Description: "A guy and girl try to keep their relationship strictly physical, but it's not long before they learn that they want something more.",
    Genre: {
      _id: {ObjectId:(4004)},
      Name: "Romance",
      Description: "Romance is a genre is which you will find your heartstrings being pulled, the emotional ups and downs and scenes of intense drama that will entice the romantic side of you!!!"
    },
    Director: {
      _id: {ObjectId:(1005)},
      Name: "Ivan Reitman",
      Bio: "Ivan Reitman, as a producer and director, has created many of American cinema's most successful and best loved feature film comedies and has worked with Hollywood's acting elite.",
      Birth: "1946-10-27",
      Death: "N/A",
    },
    Actors:[{
      "StarActor":
      {_id:{ObjectId:(5016), Name: "Natalie Portman"}},
      "SupportingActor":
      {_id:{ObjectId:(5017), Name: "Ashton Kutcher"}},
      "Cast":
      {_id:{ObjectId:(5018), Name: "Kevin Kline"}}
      }],
  
    Rating: "R",
    Release: "2011",
    ImagePath: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg2MDQ1NTEzNl5BMl5BanBnXkFtZTcwOTgxNTMyNA@@._V1_UY1200_CR89,0,630,1200_AL_.jpg",
    Featured: false
  },
{
    _id: {ObjectId:(2007)},
    Title: "Guardians of the Galaxy",
    Description: "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
    Genre: {
      _id: {ObjectId:(4001)},
      Name: "Drama",
      Description: "Drama films bring the audiunce feelings of emotion by social issues, fights, and violence. Scenes that are not only enticing you will want to watch watch next to find out more!!"
    },
    Director: {
      _id: {ObjectId:(1004)},
      Name: "James Gunn",
      Bio: "James Gunn was born and raised in St. Louis, Missouri, to Leota and James Francis Gunn. He is from a large Catholic family, with Irish and Czech ancestry. His father and his uncles were all lawyers.",
      Birth: "1966-9-05",
      Death: "N/A",
    },
    Actors:[{
      "StarActor":
      {_id:{ObjectId:(5019), Name: "Chris Pratt"}},
      "SupportingActor":
      {_id:{ObjectId:(5020), Name: "Vin Diesel"}},
      "Cast":
      {_id:{ObjectId:(5021), Name: "Bradley Cooper"}}
      }],
    Rating: "PG-13",
    Release: "2014",
    ImagePath: "http://cafmp.com/wp-content/uploads/2016/05/Guardians-of-the-Galaxy-1.jpg",
    Featured: true
  },
{
    _id: {ObjectId:(2008)},
    Title: "Spider-Man",
    Description: "When bitten by a genetically modified spider, a nerdy, shy, and awkward high school student gains spider-like abilities that he eventually must use to fight evil as a superhero after tragedy befalls his family.",
    Genre: {
      _id: {ObjectId:(4002)},
      Name: "Action",
      Description: "Action is a genre where you will find car chases Wild rides, thrills, and more to break up and boredom find yourself one of these movies!!!"
    },
    Director: {
      _id: {ObjectId:(1009)},
      Name: "Sam Raimi",
      Bio: "Highly inventive U.S. film director/producer/writer/actor Sam Raimi first came to the attention of film fans with the savage, yet darkly humorous, low-budget horror film, The Evil Dead (1981).",
      Birth: "1959-10-23",
      Death: "N/A"
    },
    Actors:[{
      "StarActor":
      {_id:{ObjectId:(5022), Name: "Tobey Maguire"}},
      "SupportingActor":
      {_id:{ObjectId:(5023), Name: "Kirsten Dunst"}},
      "Cast":
      {_id:{ObjectId:(5024), Name: "Willem Dafoe"}}
      }],
    Rating: "PG-13",
    Release: "2002",
    ImagePath: "https://media-cache.cinematerial.com/p/500x/m0qwja5z/the-amazing-spider-man-movie-poster.jpg?v=1456641079",
    Featured: false
  },
 {
    _id: {ObjectId:(2009)},
    Title: "The NoteBook",
    Description: "A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom, but they are soon separated because of their social differences.",
    Genre: {
      _id: {ObjectId:(4004)},
      Name: "Romance",
      Description: "Romance is a genre is which you will find your heartstrings being pulled, the emotional ups and downs and scenes of intense drama that will entice the romantic side of you!!!"
    },
    Director: {
      _id: {ObjectId:(1007)},
      Name: "Nick Cassavetes",
      Bio: "Nick Cassavetes was born in New York City, the son of actress Gena Rowlands and Greek-American actor and film director John Cassavetes. As a child, he appeared in two of his father's films: Husbands (1970) and A Woman Under the Influence (1974).",
      Birth: "1959-04-21",
      Death: "N/A"
    },
    Actors:[{
      "StarActor":
      {_id:{ObjectId:(5025), Name: "Ryan Gosling"}},
      "SupportingActor":
      {_id:{ObjectId:(5026), Name: "Rachel McAdams"}},
      "Cast":
      {_id:{ObjectId:(5027), Name: "James Garner"}}
      }],
    Rating: "PG-13",
    Release: "2004",
    ImagePath: "https://image.tmdb.org/t/p/original/28HcbSyLA3SlgmXSEnt5gOPaiKH.jpg",
    Featured: false
  },
{
    _id: {ObjectId:(2010)},
    Title: "The Matrix",
    Description: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
    Genre: {
      _id: {ObjectId:(4002)},
      Name: "Action",
      Description: "Action is a genre where you will find car chases Wild rides, thrills, and more to break up and boredom find yourself one of these movies!!!"
    },
    Director: {
      _id: {ObjectId:(1008)},
      Name: "Lana Wachowski",
      Bio: "Lana Wachowski and her sister Lilly Wachowski, also known as the Wachowskis, are the duo behind such ground-breaking movies as The Matrix (1999) and Cloud Atlas (2012).",
      Birth: "1965-05-21",
      Death: "N/A"
    },
    Actors:[{
      "StarActor":
      {_id:{ObjectId:(5028), Name: "Keanu Reeves"}},
      "SupportingActor":
      {_id:{ObjectId:(5029), Name: "Laurence Fishburne"}},
      "Cast":
      {_id:{ObjectId:(5030), Name: "Carrie-Anne Moss"}}
      }],
    Rating: "R",
    Release: "1999",
    ImagePath: "https://image.tmdb.org/t/p/original/dXNAPwY7VrqMAo51EKhhCJfaGb5.jpg",
    Featured: true
  },
 {
    _id: {ObjectId:(2012)},
    Title: "Ironman 2",
    Description: "With the world now aware of his identity as Iron Man, Tony Stark must contend with both his declining health and a vengeful mad man with ties to his father's legacy.",
    Genre: {
      _id:{ObjectId:(4002)},
      Name: "Action",
      Description: "Action is a genre where you will find car chases Wild rides, thrills, and more to break up and boredom find yourself one of these movies!!!"
    },
    Director: {
      _id: {ObjectId:(1003)},
      Name: "Jon Favreau",
      Bio: "Initially an indie film favorite, actor Jon Favreau has progressed to strong mainstream visibility into the millennium and, after nearly two decades in the business, is still enjoying character stardom as well as earning notice as a writer/producer/director.",
      Birth: "1966-10-13",
      Death: "N/A"
    },
    Actors:[{
      "StarActor":
      {_id:{ObjectId:(5007), Name: "Robert Downey Jr."}},
      "SupportingActor":
      {_id:{ObjectId:(5032), Name: "Mickey Rourke"}},
      "Cast":
      {_id:{ObjectId:(5008), Name: "Gwyneth Paltrow"}}
      }],
    Rating: "PG-13",
    Release: "2010",
    ImagePath: "https://image.tmdb.org/t/p/original/5tCA3oZXLRPHmS5DIDnlu7hY4Ab.jpg",
    Featured: false
  },
 {
    _id: {ObjectId:(2013)},
    Title: "Ironman 3",
    Description: "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
    Genre: {
      _id:{ObjectId:(4002)},
      Name: "Action",
      Description: "Action is a genre where you will find car chases Wild rides, thrills, and more to break up and boredom find yourself one of these movies!!!"
    },
    Director: {
      _id: {ObjectId:(1003)},
      Name: "Jon Favreau",
      Bio: "Initially an indie film favorite, actor Jon Favreau has progressed to strong mainstream visibility into the millennium and, after nearly two decades in the business, is still enjoying character stardom as well as earning notice as a writer/producer/director.",
      Birth: "1966-10-13",
      Death: "N/A"
    },
    Actors:[{
      "StarActor":
      {_id:{ObjectId:(5007), Name: "Robert Downey Jr."}},
      "SupportingActor":
      {_id:{ObjectId:(5032), Name: "Guy Pearce"}},
      "Cast":
      {_id:{ObjectId:(5008), Name: "Gwyneth Paltrow"}}
      }],
    Rating: "PG-13",
    Release: "2010",
    ImagePath: "https://image.tmdb.org/t/p/original/bYWwiNJC8cEIJ32EBXjjWVhUZDI.jpg",
    Featured: false
  },
{
    _id: {ObjectId:(2014)},
    Title: "Avengers: Endgame",
    Description: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
    Genre: {
      _id:{ObjectId:(4002)},
      Name: "Action",
      Description: "Action is a genre where you will find car chases Wild rides, thrills, and more to break up and boredom find yourself one of these movies!!!"
    },
    Director: {
      _id: {ObjectId:(1003)},
      Name: "Jon Favreau",
      Bio: "Initially an indie film favorite, actor Jon Favreau has progressed to strong mainstream visibility into the millennium and, after nearly two decades in the business, is still enjoying character stardom as well as earning notice as a writer/producer/director.",
      Birth: "1966-10-13",
      Death: "N/A"
    },
    Actors:[{
      "StarActor":
      {_id:{ObjectId:(5033), Name: "Chris Evans"}},
      "SupportingActor":
      {_id:{ObjectId:(5007), Name: "Robert Downey Jr."}},
      "Cast":
      {_id:{ObjectId:(5034), Name: "Mark Ruffalo"}}
      }],
    Rating: "PG-13",
    Release: "2019",
    ImagePath: "https://image.tmdb.org/t/p/original/gj0fKa4jjwxZLmVq7I8tv13V45.jpg",
    Featured: true
  },
 {
    _id: {ObjectId:(2015)},
    Title: "The Shawshank Redemption",
    Description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    Genre: {
      _id: {ObjectId:(4001)},
      Name: "Drama",
      Description: "Drama films bring the audiunce feelings of emotion by social issues, fights, and violence. Scenes that are not only enticing you will want to watch watch next to find out more!!"
  },
    Director: {
      _id: {ObjectId:(1010)},
      Name: "Frank Darabont",
      Bio: "Three-time Oscar nominee Frank Darabont was born in a refugee camp in 1959 in Montbeliard, France, the son of Hungarian parents who had fled Budapest during the failed 1956 Hungarian revolution. Brought to America as an infant, he settled with his family in Los Angeles and attended Hollywood High School.",
      Birth: "1959-01-28",
      Death: "N/A"
    },
    Actors:[{
      "StarActor":
      {_id:{ObjectId:(5035), Name: "Tim Robbins"}},
      "SupportingActor":
      {_id:{ObjectId:(5036), Name: "Morgan Freeman"}},
      "Cast":
      {_id:{ObjectId:(5037), Name: "Bob Gunton"}}
      }],
    Rating: "R",
    Release: "1994",
    ImagePath: "https://media.movieassets.com/static/images/items/movies/posters/a515035291f650ed7cd2486191845d13.jpg",
    Featured: true
  },
{
    _id: {ObjectId:(2016)},
    Title: "The Green Mile",
    Description: "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
    Genre: {
      _id: {ObjectId:(4001)},
      Name: "Drama",
      Description: "Drama films bring the audiunce feelings of emotion by social issues, fights, and violence. Scenes that are not only enticing you will want to watch watch next to find out more!!"
  },
    Director: {
      _id: {ObjectId:(1010)},
      Name: "Frank Darabont",
      Bio: "Three-time Oscar nominee Frank Darabont was born in a refugee camp in 1959 in Montbeliard, France, the son of Hungarian parents who had fled Budapest during the failed 1956 Hungarian revolution. Brought to America as an infant, he settled with his family in Los Angeles and attended Hollywood High School.",
      Birth: "1959-01-28",
      Death: "N/A"
    },
    Actors:[{
      "StarActor":
      {_id:{ObjectId:(5013), Name: "Tom Hanks"}},
      "SupportingActor":
      {_id:{ObjectId:(5038), Name: "Michael Clarke Duncan"}},
      "Cast":
      {_id:{ObjectId:(5039), Name: "David Morse"}}
      }],
    Rating: "R",
    Release: "1994",
    ImagePath: "https://static.fanart.tv/fanart/movies/497/movieposter/the-green-mile-52336450bced4.jpg",
    Featured: true
  },
{
    _id: {ObjectId:(2017)},
    Title: "The Godfather",
    Description: "The Godfather follows Vito Corleone, Don of the Corleone family, as he passes the mantel to his unwilling son, Michael.",
    Genre: {
      _id: {ObjectId:(4001)},
      Name: "Drama",
      Description: "Drama films bring the audiunce feelings of emotion by social issues, fights, and violence. Scenes that are not only enticing you will want to watch watch next to find out more!!"
  },
    Director: {
      _id: {ObjectId:(1011)},
      Name: "Francis Ford Coppola",
      Bio: "Francis Ford Coppola was born in 1939 in Detroit, Michigan, but grew up in a New York suburb in a creative, supportive Italian-American family. His father, Carmine Coppola, was a composer and musician.",
      Birth: "1939-04-07",
      Death: "N/A"
    },
    Actors:[{
      "StarActor":
      {_id:{ObjectId:(5040), Name: "Marlon Brando"}},
      "SupportingActor":
      {_id:{ObjectId:(5041), Name: "Al Pacino"}},
      "Cast":
      {_id:{ObjectId:(5042), Name: "James Caan"}}
      }],
    Rating: "R",
    Release: "1972",
    ImagePath: "https://movietalkexpress.files.wordpress.com/2015/12/the-godfather.jpeg",
    Featured: true
},
{
    _id: {ObjectId:(2018)},
    Title: "Forest Gump",
    Description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
    Genre: {
      _id: {ObjectId:(4001)},
      Name: "Drama",
      Description: "Drama films bring the audiunce feelings of emotion by social issues, fights, and violence. Scenes that are not only enticing you will want to watch watch next to find out more!!"
  },
    Director: {
      _id: {ObjectId:(1011)},
      Name: "Robert Zemeckis",
      Bio: "A whiz-kid with special effects, Robert is from the Spielberg camp of film-making (Steven Spielberg produced many of his films).",
      Birth: "1951-05-14",
      Death: "N/A"
    },
    Actors:[{
      "StarActor":
      {_id:{ObjectId:(5013), Name: "Tom Hanks"}},
      "SupportingActor":
      {_id:{ObjectId:(5043), Name: "Robin Wright"}},
      "Cast":
      {_id:{ObjectId:(5044), Name: "Gary Sinise"}}
      }],
    Rating: "PG-13",
    Release: "1994",
    ImagePath: "https://nathanburgessinsights.files.wordpress.com/2020/07/img_2718.jpg",
    Featured: false
  },
{
    _id: {ObjectId:(2019)},
    Title: "Contact",
    Description: "Dr. Ellie Arroway, after years of searching, finds conclusive radio proof of extraterrestrial intelligence, sending plans for a mysterious machine.",
    Genre: {
      _id: {ObjectId:(4001)},
      Name: "Drama",
      Description: "Drama films bring the audiunce feelings of emotion by social issues, fights, and violence. Scenes that are not only enticing you will want to watch watch next to find out more!!"
  },
    Director: {
      _id: {ObjectId:(1011)},
      Name: "Robert Zemeckis",
      Bio: "A whiz-kid with special effects, Robert is from the Spielberg camp of film-making (Steven Spielberg produced many of his films).",
      Birth: "1951-05-14",
      Death: "N/A"
    },
    Actors:[{
      "StarActor":
      {_id:{ObjectId:(5045), Name: "Jodie Foster"}},
      "SupportingActor":
      {_id:{ObjectId:(5046), Name: "Matthew McConaughey"}},
      "Cast":
      {_id:{ObjectId:(5047), Name: "Tom Skerritt"}}
      }],
    Rating: "PG",
    Release: "1997",
    ImagePath: "https://scannersuniverse.neocities.org/poster_2.jpg",
    Featured: false
  },
{
    _id: {ObjectId:(2020)},
    Title: "Back to the Future",
    Description: "Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the eccentric scientist Doc Brown.",
    Genre: {
      _id: {ObjectId:4003},
      Name: "Comedy",
      Description: "Comedy is a genre where you will find yourself and your friends bellylaughing and crying from laughing until the movie is over... Hopefully that is if you find a good one!!!"
  },
    Director: {
      _id: {ObjectId:(1011)},
      Name: "Robert Zemeckis",
      Bio: "A whiz-kid with special effects, Robert is from the Spielberg camp of film-making (Steven Spielberg produced many of his films).",
      Birth: "1951-05-14",
      Death: "N/A"
    },
    Actors:[{
      "StarActor":
      {_id:{ObjectId:(5048), Name: "Michael J. Fox"}},
      "SupportingActor":
      {_id:{ObjectId:(5049), Name: "Christopher Lloyd"}},
      "Cast":
      {_id:{ObjectId:(5050), Name: "Lea Thompson"}}
      }],
    Rating: "PG",
    Release: "1985",
    ImagePath: "https://i.pinimg.com/originals/b7/ef/46/b7ef46889d98ab8840058835d3f6cfb9.jpg",
    Featured: false
  },
{
    _id: {ObjectId:(2021)},
    Title: "Cast Away",
    Description: "A FedEx executive undergoes a physical and emotional transformation after crash landing on a deserted island.",
    Genre: {
      _id: {ObjectId:(4001)},
      Name: "Drama",
      Description: "Drama films bring the audiunce feelings of emotion by social issues, fights, and violence. Scenes that are not only enticing you will want to watch watch next to find out more!!"
  },
    Director: {
      _id: {ObjectId:(1011)},
      Name: "Robert Zemeckis",
      Bio: "A whiz-kid with special effects, Robert is from the Spielberg camp of film-making (Steven Spielberg produced many of his films).",
      Birth: "1951-05-14",
      Death: "N/A"
    },
    Actors:[{
      "StarActor":
      {_id:{ObjectId:(5013), Name: "Tom Hanks"}},
      "SupportingActor":
      {_id:{ObjectId:(5051), Name: "Helen Hunt"}},
      "Cast":
      {_id:{ObjectId:(5052), Name: "Paul Sanchez"}}
      }],
    Rating: "PG-13",
    Release: "2000",
    ImagePath: "https://i.pinimg.com/originals/df/00/0f/df000ff4d6121e149a5f87b975035dd6.jpg",
    Featured: false
  },
 {
    _id: {ObjectId:(2022)},
    Title: "Flight",
    Description: "An airline pilot saves almost all his passengers on his malfunctioning airliner which eventually crashed, but an investigation into the accident reveals something troubling.",
    Genre: {
      _id: {ObjectId:(4001)},
      Name: "Drama",
      Description: "Drama films bring the audiunce feelings of emotion by social issues, fights, and violence. Scenes that are not only enticing you will want to watch watch next to find out more!!"
  },
    Director: {
      _id: {ObjectId:(1011)},
      Name: "Robert Zemeckis",
      Bio: "A whiz-kid with special effects, Robert is from the Spielberg camp of film-making (Steven Spielberg produced many of his films).",
      Birth: "1951-05-14",
      Death: "N/A"
    },
    Actors:[{
      "StarActor":
      {_id:{ObjectId:(5053), Name: "Denzel Washington"}},
      "SupportingActor":
      {_id:{ObjectId:(5054), Name: "Nadine Velazquez"}},
      "Cast":
      {_id:{ObjectId:(5055), Name: "Don Cheadle"}}
      }],
    Rating: "R",
    Release: "2012",
    ImagePath: "https://th.bing.com/th/id/R.6bfc8371135ad294cd01d9599ca54d3a?rik=lBYvfQhzHxriEQ&pid=ImgRaw&r=0",
    Featured: false
  },
 {
    _id: {ObjectId:(2023)},
    Title: "Saving Private Ryan",
    Description: "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
    Genre: {
        _id: {ObjectId:(4002)},
        Name: "Action",
        Description: "Action is a genre where you will find car chases Wild rides, thrills, and more to break up and boredom find yourself one of these movies!!!"
    },
    Director: {
      _id: {ObjectId:(1012)},
      Name: "Steven Spielberg",
      Bio: "One of the most influential personalities in the history of cinema, Steven Spielberg is Hollywood's best known director and one of the wealthiest filmmakers in the world. He has an extraordinary number of commercially successful and critically acclaimed credits to his name, either as a director, producer or writer since launching the summer.",
      Birth: "1946-12-18",
      Death: "N/A"
    },
    Actors:[{
      "StarActor":
      {_id:{ObjectId:(5013), Name: "Tom Hanks"}},
      "SupportingActor":
      {_id:{ObjectId:(5056), Name: "Matt Damon"}},
      "Cast":
      {_id:{ObjectId:(5057), Name: "Tom Sizemore"}}
      }],
    Rating: "R",
    Release: "1998",
    ImagePath: "https://static.tvtropes.org/pmwiki/pub/images/savingprivateryan_926.jpg",
    Featured: false
  },
{
    _id: {ObjectId:(2024)},
    Title: "Schindler's List",
    Description: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    Genre: {
      _id: {ObjectId:(4001)},
      Name: "Drama",
      Description: "Drama films bring the audiunce feelings of emotion by social issues, fights, and violence. Scenes that are not only enticing you will want to watch watch next to find out more!!"
  },
    Director: {
      _id: {ObjectId:(1012)},
      Name: "Steven Spielberg",
      Bio: "One of the most influential personalities in the history of cinema, Steven Spielberg is Hollywood's best known director and one of the wealthiest filmmakers in the world. He has an extraordinary number of commercially successful and critically acclaimed credits to his name, either as a director, producer or writer since launching the summer.",
      Birth: "1946-12-18",
      Death: "N/A"
    },
    Actors:[{
      "StarActor":
      {_id:{ObjectId:(5013), Name: "Liam Neeson"}},
      "SupportingActor":
      {_id:{ObjectId:(5056), Name: "Ralph Fiennes"}},
      "Cast":
      {_id:{ObjectId:(5057), Name: "Ben Kingsley"}}
      }],
    Rating: "R",
    Release: "1993",
    ImagePath: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6298/6298052_so.jpg",
    Featured: false
  },
{
    _id: {ObjectId:(2025)},
    Title: "E.T. the Extra-Terrestrial",
    Description: "A troubled child summons the courage to help a friendly alien escape Earth and return to his home world.",
    Genre: {
      _id: {ObjectId:(4001)},
      Name: "Drama",
      Description: "Drama films bring the audiunce feelings of emotion by social issues, fights, and violence. Scenes that are not only enticing you will want to watch watch next to find out more!!"
  },
    Director: {
      _id: {ObjectId:(1012)},
      Name: "Steven Spielberg",
      Bio: "One of the most influential personalities in the history of cinema, Steven Spielberg is Hollywood's best known director and one of the wealthiest filmmakers in the world. He has an extraordinary number of commercially successful and critically acclaimed credits to his name, either as a director, producer or writer since launching the summer.",
      Birth: "1946-12-18",
      Death: "N/A"
    },
    Actors:[{
      "StarActor":
      {_id:{ObjectId:(5061), Name: "Henry Thomas"}},
      "SupportingActor":
      {_id:{ObjectId:(5062), Name: "Drew Barrymore"}},
      "Cast":
      {_id:{ObjectId:(5063), Name: "Peter Coyote"}}
      }],
    Rating: "PG",
    Release: "1982",
    ImagePath: "https://deadshirt.net/wp-content/uploads/2015/09/etapr09.jpg",
    Featured: true
  },
 {
    _id: {ObjectId:(2026)},
    Title: "Indiana Jones and the Raiders of the Lost Ark",
    Description: "In 1936, archaeologist and adventurer Indiana Jones is hired by the U.S. government to find the Ark of the Covenant before Adolf Hitler's Nazis can obtain its awesome powers.",
    Genre: {
      _id: {ObjectId:(4002)},
      Name: "Action",
      Description: "Action is a genre where you will find car chases Wild rides, thrills, and more to break up and boredom find yourself one of these movies!!!"
  },
    Director: {
      _id: {ObjectId:(1012)},
      Name: "Steven Spielberg",
      Bio: "One of the most influential personalities in the history of cinema, Steven Spielberg is Hollywood's best known director and one of the wealthiest filmmakers in the world. He has an extraordinary number of commercially successful and critically acclaimed credits to his name, either as a director, producer or writer since launching the summer.",
      Birth: "1946-12-18",
      Death: "N/A"
    },
    Actors:[{
      "StarActor":
      {_id:{ObjectId:(5064), Name: "Harrison Ford"}},
      "SupportingActor":
      {_id:{ObjectId:(5065), Name: "Karen Allen"}},
      "Cast":
      {_id:{ObjectId:(5066), Name: "Paul Freeman"}}
      }],
    Rating: "PG",
    Release: "1981",
    ImagePath: "https://farm8.staticflickr.com/7440/12602355443_8cfa219930_o.jpg",
    Featured: true
  },
 {
    _id: {ObjectId:(2027)},
    Title: "Minority Report",
    Description: "In a future where a special police unit is able to arrest murderers before they commit their crimes, an officer from that unit is himself accused of a future murder.",
    Genre: {
      _id: {ObjectId:(4002)},
      Name: "Action",
      Description: "Action is a genre where you will find car chases Wild rides, thrills, and more to break up and boredom find yourself one of these movies!!!"
  },
    Director: {
      _id: {ObjectId:(1012)},
      Name: "Steven Spielberg",
      Bio: "One of the most influential personalities in the history of cinema, Steven Spielberg is Hollywood's best known director and one of the wealthiest filmmakers in the world. He has an extraordinary number of commercially successful and critically acclaimed credits to his name, either as a director, producer or writer since launching the summer.",
      Birth: "1946-12-18",
      Death: "N/A"
    },
    Actors:[{
      "StarActor":
      {_id:{ObjectId:(5067), Name: "Tom Cruise"}},
      "SupportingActor":
      {_id:{ObjectId:(5068), Name: "Colin Farrell"}},
      "Cast":
      {_id:{ObjectId:(5069), Name: "Samantha Morton"}}
      }],
    Rating: "PG-13",
    Release: "2002",
    ImagePath: "https://hellhorror.com/images/inTheaters/origs/9eb39-minority-report-poster.jpg",
    Featured: false
  },
 {
    _id: {ObjectId:(2028)},
    Title: "Jaws",
    Description: "When a killer shark unleashes chaos on a beach community off Long Island, it's up to a local sheriff, a marine biologist, and an old seafarer to hunt the beast down.",
    Genre: {
      _id: {ObjectId:(4001)},
      Name: "Drama",
      Description: "Drama films bring the audiunce feelings of emotion by social issues, fights, and violence. Scenes that are not only enticing you will want to watch watch next to find out more!!"
  },
    Director: {
      _id: {ObjectId:(1012)},
      Name: "Steven Spielberg",
      Bio: "One of the most influential personalities in the history of cinema, Steven Spielberg is Hollywood's best known director and one of the wealthiest filmmakers in the world. He has an extraordinary number of commercially successful and critically acclaimed credits to his name, either as a director, producer or writer since launching the summer.",
      Birth: "1946-12-18",
      Death: "N/A"
    },
    Actors:[{
      "StarActor":
      {_id:{ObjectId:(5070), Name: "Roy Scheider"}},
      "SupportingActor":
      {_id:{ObjectId:(5071), Name: "Robert Shaw"}},
      "Cast":
      {_id:{ObjectId:(5072), Name: "Richard Dreyfuss"}}
      }],
    Rating: "PG",
    Release: "1975",
    ImagePath: "https://www.companyfolders.com/blog/media/2017/07/jaws.jpg",
    Featured: false
  },
 {
    _id: {ObjectId:(2029)},
    Title: "Ghostbusters",
    Description: "Three parapsychologists forced out of their university funding set up shop as a unique ghost removal service in New York City, attracting frightened yet skeptical customers.",
    Genre: {
      _id: {ObjectId:(4001)},
      Name: "Drama",
      Description: "Drama films bring the audiunce feelings of emotion by social issues, fights, and violence. Scenes that are not only enticing you will want to watch watch next to find out more!!"
  },
  Director: {
    _id: {ObjectId:(1005)},
    Name: "Ivan Reitman",
    Bio: "Ivan Reitman, as a producer and director, has created many of American cinema's most successful and best loved feature film comedies and has worked with Hollywood's acting elite.",
    Birth: "1946-10-27",
    Death: "N/A"
    },
  Actors:[{
      "StarActor":
      {_id:{ObjectId:(5073), Name: "Bill Murray"}},
      "SupportingActor":
      {_id:{ObjectId:(5074), Name: "Dan Aykroyd"}},
      "Cast":
      {_id:{ObjectId:(5075), Name: "Sigourney Weaver"}}
      }],
    Rating: "PG",
    Release: "1984",
    ImagePath: "http://cupofmoe.com/wp-content/uploads/2016/08/Ghostbusters_1984_poster.jpg",
    Featured: false
  },
 {
    _id: {ObjectId:(2030)},
    Title: "Talladega Nights: The Ballad of Ricky Bobby",
    Description: "Number one NASCAR driver Ricky Bobby stays atop the heap thanks to a pact with his best friend and teammate, Cal Naughton, Jr. But when a French Formula One driver, makes his way up the ladder, Ricky Bobby's talent and devotion are put to the test.",
    Genre: {
      _id: {ObjectId:4003},
      Name: "Comedy",
      Description: "Comedy is a genre where you will find yourself and your friends bellylaughing and crying from laughing until the movie is over... Hopefully that is if you find a good one!!!"
  },
  Director: {
    _id: {ObjectId:(1014)},
    Name: "Adam McKay",
    Bio: "Adam McKay (born April 17, 1968) is an American screenwriter, director, comedian, and actor. McKay has a comedy partnership with Will Ferrell, with whom he co-wrote the films Anchorman, Talladega Nights, and The Other Guys.",
    Birth: "1968-04-17",
    Death: "N/A"
    },
  Actors:[{
      "StarActor":
      {_id:{ObjectId:(5078), Name: "Will Ferrell"}},
      "SupportingActor":
      {_id:{ObjectId:(5076), Name: "John C. Reilly"}},
      "Cast":
      {_id:{ObjectId:(5077), Name: "Sacha Baron Cohen"}}
      }],
    Rating: "PG-13",
    Release: "2006",
    ImagePath: "http://content7.flixster.com/movie/11/16/98/11169805_800.jpg",
    Featured: false
  },
    {
      _id: {ObjectId:(2031)},
      Title: "George Of The Jungle",
      Description: "A man raised in the jungle by apes falls in love with a wealthy American heiress.",
      Genre: {
        _id: {ObjectId:4003},
        Name: "Comedy",
        Description: "Comedy is a genre where you will find yourself and your friends bellylaughing and crying from laughing until the movie is over... Hopefully that is if you find a good one!!!"
    },
    Director: {
      _id: {ObjectId:(1001)},
      Name: "Sam Weisman",
      Bio: "Sam Weisman was born in Binghamton, New York, and attended Deerfield Academy and Yale University, where he began acting in and directing plays.",
      Birth: "3-12-1947",
      Death: "N/A"
      },
    Actors:[{
        "StarActor":
        {_id:{ObjectId:(5011), Name: "Brenden Fraser"}},
        "SupportingActor":
        {_id:{ObjectId:(5012), Name: "Leslie Mann"}},
        "Cast":
        {_id:{ObjectId:(5009), Name: "Thomas Haden Church"}}
        }],
      Rating: "PG",
      Release: "1997",
      ImagePath: "https://m.media-amazon.com/images/M/MV5BNTdiM2VjYjYtZjEwNS00ZWU5LWFkZGYtZGYxMDcwMzY1OTEzL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTczNjQwOTY@._V1_FMjpg_UX1000_.jpg",
      Featured: false
    },
    {
      _id: {ObjectId:(2032)},
      Title: "The GodFather",
      Description: "Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.",
      Genre: {
        _id: {ObjectId:4001},
        Name: "Drama",
        Description: "Drama films bring the audiunce feelings of emotion by social issues, fights, and violence. Scenes that are not only enticing you will want to watch watch next to find out more!!"
    },
    Director: {
      _id: {ObjectId:(1011)},
      Name: "Francis Ford Coppola",
      Bio: "Francis Ford Coppola was born in 1939 in Detroit, Michigan, but grew up in a New York suburb in a creative, supportive Italian-American family. His father, Carmine Coppola, was a composer and musician. His mother, Italia Coppola (née Pennino), had been an actress. Francis Ford Coppola graduated with a degree in drama from Hofstra University, and did graduate work at UCLA in filmmaking. He was training as assistant with filmmaker Roger Corman, working in such capacities as sound-man, dialogue director, associate producer and, eventually, director of Dementia 13 (1963), Coppola's first feature film.",
      Birth: "4-7-1939",
      Death: "N/A"
      },
    Actors:[{
        "StarActor":
        {_id:{ObjectId:(5040), Name: "Marlon Brando"}},
        "SupportingActor":
        {_id:{ObjectId:(5041), Name: "Al Pacino"}},
        "Cast":
        {_id:{ObjectId:(5042), Name: "James Caan"}}
        }],
      Rating: "R",
      Release: "1972",
      ImagePath: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      Featured: false
    },
    {
      _id: {ObjectId:(2033)},
      Title: "The Big Short",
      Description: "In 2006-2007 a group of investors bet against the United States mortgage market. In their research, they discover how flawed and corrupt the market is.",
      Genre: {
        _id: {ObjectId:4003},
        Name: "Comedy",
        Description: "Comedy is a genre where you will find yourself and your friends bellylaughing and crying from laughing until the movie is over... Hopefully that is if you find a good one!!!"
    },
    Director: {
      _id: {ObjectId:(1013)},
      Name: "Adam McKay",
      Bio: "Adam McKay (born April 17, 1968) is an American screenwriter, director, comedian, and actor. McKay has a comedy partnership with Will Ferrell, with whom he co-wrote the films Anchorman, Talladega Nights, and The Other Guys.",
      Birth: "4-17-1968",
      Death: "N/A"
      },
    Actors:[{
        "StarActor":
        {_id:{ObjectId:(5079), Name: "Christian Bale"}},
        "SupportingActor":
        {_id:{ObjectId:(5080), Name: "Steve Carrell"}},
        "Cast":
        {_id:{ObjectId:(5025), Name: "Ryan Gosling"}}
        }],
      Rating: "R",
      Release: "2015",
      ImagePath: "https://m.media-amazon.com/images/M/MV5BNDc4MThhN2EtZjMzNC00ZDJmLThiZTgtNThlY2UxZWMzNjdkXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg",
      Featured: false
    },
    {
      _id: {ObjectId:(2034)},
      Title: "The Big Short",
      Description: "In 2006-2007 a group of investors bet against the United States mortgage market. In their research, they discover how flawed and corrupt the market is.",
      Genre: {
        _id: {ObjectId:4003},
        Name: "Comedy",
        Description: "Comedy is a genre where you will find yourself and your friends bellylaughing and crying from laughing until the movie is over... Hopefully that is if you find a good one!!!"
    },
    Director: {
      _id: {ObjectId:(1013)},
      Name: "Adam McKay",
      Bio: "Adam McKay (born April 17, 1968) is an American screenwriter, director, comedian, and actor. McKay has a comedy partnership with Will Ferrell, with whom he co-wrote the films Anchorman, Talladega Nights, and The Other Guys.",
      Birth: "4-17-1968",
      Death: "N/A"
      },
    Actors:[{
        "StarActor":
        {_id:{ObjectId:(5079), Name: "Christian Bale"}},
        "SupportingActor":
        {_id:{ObjectId:(5080), Name: "Steve Carrell"}},
        "Cast":
        {_id:{ObjectId:(5025), Name: "Ryan Gosling"}}
        }],
      Rating: "R",
      Release: "2015",
      ImagePath: "https://m.media-amazon.com/images/M/MV5BNDc4MThhN2EtZjMzNC00ZDJmLThiZTgtNThlY2UxZWMzNjdkXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg",
      Featured: false
    },
    {
      _id: {ObjectId:(2035)},
      Title: "The Other Guys",
      Description: "Two mismatched New York City detectives seize an opportunity to step up like the city's top cops, whom they idolize, only things don't quite go as planned.",
      Genre: {
        _id: {ObjectId:4003},
        Name: "Comedy",
        Description: "Comedy is a genre where you will find yourself and your friends bellylaughing and crying from laughing until the movie is over... Hopefully that is if you find a good one!!!"
    },
    Director: {
      _id: {ObjectId:(1013)},
      Name: "Adam McKay",
      Bio: "Adam McKay (born April 17, 1968) is an American screenwriter, director, comedian, and actor. McKay has a comedy partnership with Will Ferrell, with whom he co-wrote the films Anchorman, Talladega Nights, and The Other Guys.",
      Birth: "4-17-1968",
      Death: "N/A"
      },
    Actors:[{
        "StarActor":
        {_id:{ObjectId:(5078), Name: "Will Ferrell"}},
        "SupportingActor":
        {_id:{ObjectId:(5081), Name: "Mark Wahlberg"}},
        "Cast":
        {_id:{ObjectId:(5082), Name: "Derek Jeter"}}
        }],
      Rating: "PG-13",
      Release: "2010",
      ImagePath: "https://m.media-amazon.com/images/M/MV5BMDlhZDQ5NDUtNDcwMi00MTQ5LTk1Y2UtYjNmMjgzNzNhNzU3XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
      Featured: false
    },
    {
      _id: {ObjectId:(2036)},
      Title: "Anchorman: The Legend Of Ron Burgundy",
      Description: "Two mismatched New York City detectives seize an opportunity to step up like the city's top cops, whom they idolize, only things don't quite go as planned.",
      Genre: {
        _id: {ObjectId:4003},
        Name: "Comedy",
        Description: "Comedy is a genre where you will find yourself and your friends bellylaughing and crying from laughing until the movie is over... Hopefully that is if you find a good one!!!"
    },
    Director: {
      _id: {ObjectId:(1013)},
      Name: "Adam McKay",
      Bio: "Adam McKay (born April 17, 1968) is an American screenwriter, director, comedian, and actor. McKay has a comedy partnership with Will Ferrell, with whom he co-wrote the films Anchorman, Talladega Nights, and The Other Guys.",
      Birth: "4-17-1968",
      Death: "N/A"
      },
    Actors:[{
        "StarActor":
        {_id:{ObjectId:(5078), Name: "Will Ferrell"}},
        "SupportingActor":
        {_id:{ObjectId:(5083), Name: "Christina Applegate"}},
        "Cast":
        {_id:{ObjectId:(5080), Name: "Steve Carrell"}}
        }],
      Rating: "PG-13",
      Release: "2004",
      ImagePath: "https://m.media-amazon.com/images/M/MV5BMTQ2MzYwMzk5Ml5BMl5BanBnXkFtZTcwOTI4NzUyMw@@._V1_.jpg",
      Featured: false
    },
    {
      _id: {ObjectId:(2037)},
      Title: "Anchorman: The Legend Continues",
      Description: "With the 1970s behind him, Ron Burgundy, San Diego's former top-rated newsreader, returns to take New York City's first twenty-four-hour news channel by storm.",
      Genre: {
        _id: {ObjectId:4003},
        Name: "Comedy",
        Description: "Comedy is a genre where you will find yourself and your friends bellylaughing and crying from laughing until the movie is over... Hopefully that is if you find a good one!!!"
    },
    Director: {
      _id: {ObjectId:(1013)},
      Name: "Adam McKay",
      Bio: "Adam McKay (born April 17, 1968) is an American screenwriter, director, comedian, and actor. McKay has a comedy partnership with Will Ferrell, with whom he co-wrote the films Anchorman, Talladega Nights, and The Other Guys.",
      Birth: "4-17-1968",
      Death: "N/A"
      },
    Actors:[{
        "StarActor":
        {_id:{ObjectId:(5078), Name: "Will Ferrell"}},
        "SupportingActor":
        {_id:{ObjectId:(5083), Name: "Christina Applegate"}},
        "Cast":
        {_id:{ObjectId:(5084), Name: "Paul Rudd"}}
        }],
      Rating: "PG-13",
      Release: "2013",
      ImagePath: "https://m.media-amazon.com/images/M/MV5BMjE5ODk0NjQzNV5BMl5BanBnXkFtZTgwODk4MDA1MDE@._V1_.jpg",
      Featured: false
    },
    {
      _id: {ObjectId:(2038)},
      Title: "Step Brothers",
      Description: "Two aimless middle-aged losers still living at home are forced against their will to become roommates when their parents marry.",
      Genre: {
        _id: {ObjectId:4003},
        Name: "Comedy",
        Description: "Comedy is a genre where you will find yourself and your friends bellylaughing and crying from laughing until the movie is over... Hopefully that is if you find a good one!!!"
    },
    Director: {
      _id: {ObjectId:(1013)},
      Name: "Adam McKay",
      Bio: "Adam McKay (born April 17, 1968) is an American screenwriter, director, comedian, and actor. McKay has a comedy partnership with Will Ferrell, with whom he co-wrote the films Anchorman, Talladega Nights, and The Other Guys.",
      Birth: "4-17-1968",
      Death: "N/A"
      },
    Actors:[{
        "StarActor":
        {_id:{ObjectId:(5078), Name: "Will Ferrell"}},
        "SupportingActor":
        {_id:{ObjectId:(5076), Name: "John C. Reilly"}},
        "Cast":
        {_id:{ObjectId:(5085), Name: "Mary Steenburgen"}}
        }],
      Rating: "R",
      Release: "2008",
      ImagePath: "https://m.media-amazon.com/images/M/MV5BODViZDg3ZjYtMzhiYS00YTVkLTk4MzktYWUxMTlkYjc1NjdlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      Featured: false
    },
    {
      _id: {ObjectId:(2039)},
      Title: "Inception",
      Description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
      Genre: {
        _id: {ObjectId:4006},
        Name: "Sci-Fi",
        Description: "Films that inspire you imagination to wander deep into the unknown, adventures and excitment await in these movies. Explore the world of the unkown!!!"
    },
    Director: {
      _id: {ObjectId:(1013)},
      Name: "Christopher Nolan",
      Bio: "Best known for his cerebral, often nonlinear, storytelling, acclaimed writer-director Christopher Nolan was born on July 30, 1970, in London, England. Over the course of 15 years of filmmaking, Nolan has gone from low-budget independent films to working on some of the biggest blockbusters ever made.",
      Birth: "7-30-1970",
      Death: "N/A"
      },
    Actors:[{
        "StarActor":
        {_id:{ObjectId:(5103), Name: "Leonardo DiCaprio"}},
        "SupportingActor":
        {_id:{ObjectId:(5104), Name: "Joseph Gordon-Levitt"}},
        "Cast":
        {_id:{ObjectId:(5105), Name: "Elliot Page"}}
        }],
      Rating: "PG-13",
      Release: "2010",
      ImagePath: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
      Featured: false
    },
    {
      _id: {ObjectId:(2040)},
      Title: "Intersteller",
      Description: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
      Genre: {
        _id: {ObjectId:4006},
        Name: "Sci-Fi",
        Description: "Films that inspire you imagination to wander deep into the unknown, adventures and excitment await in these movies. Explore the world of the unkown!!!"
    },
    Director: {
      _id: {ObjectId:(1013)},
      Name: "Christopher Nolan",
      Bio: "Best known for his cerebral, often nonlinear, storytelling, acclaimed writer-director Christopher Nolan was born on July 30, 1970, in London, England. Over the course of 15 years of filmmaking, Nolan has gone from low-budget independent films to working on some of the biggest blockbusters ever made.",
      Birth: "7-30-1970",
      Death: "N/A"
      },
    Actors:[{
        "StarActor":
        {_id:{ObjectId:(5046), Name: "Matthew McConaughey"}},
        "SupportingActor":
        {_id:{ObjectId:(5106), Name: "Anne Hathaway"}},
        "Cast":
        {_id:{ObjectId:(5107), Name: "Jessica Chastain"}}
        }],
      Rating: "PG-13",
      Release: "2014",
      ImagePath: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      Featured: false
    },
    {
      _id: {ObjectId:(2041)},
      Title: "Dunkirk",
      Description: "Allied soldiers from Belgium, the British Commonwealth and Empire, and France are surrounded by the German Army and evacuated during a fierce battle in World War II.",
      Genre: {
        _id: {ObjectId:4001},
        Name: "Drama",
        Description: "Drama films bring the audiunce feelings of emotion by social issues, fights, and violence. Scenes that are not only enticing you will want to watch watch next to find out more!!"
    },
    Director: {
      _id: {ObjectId:(1013)},
      Name: "Christopher Nolan",
      Bio: "Best known for his cerebral, often nonlinear, storytelling, acclaimed writer-director Christopher Nolan was born on July 30, 1970, in London, England. Over the course of 15 years of filmmaking, Nolan has gone from low-budget independent films to working on some of the biggest blockbusters ever made.",
      Birth: "7-30-1970",
      Death: "N/A"
      },
    Actors:[{
        "StarActor":
        {_id:{ObjectId:(5108), Name: "Fiona WhiteHead"}},
        "SupportingActor":
        {_id:{ObjectId:(5109), Name: "Barry Koeghan"}},
        "Cast":
        {_id:{ObjectId:(5110), Name: "Mark Rylance"}}
        }],
      Rating: "PG-13",
      Release: "2017",
      ImagePath: "https://m.media-amazon.com/images/M/MV5BN2YyZjQ0NTEtNzU5MS00NGZkLTg0MTEtYzJmMWY3MWRhZjM2XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg",
      Featured: false
    },
    {
      _id: {ObjectId:(2042)},
      Title: "Batman Begins",
      Description: "After witnessing his parents' death, Bruce learns the art of fighting to confront injustice. When he returns to Gotham as Batman, he must stop a secret society that intends to destroy the city.",
      Genre: {
        _id: {ObjectId:4001},
        Name: "Drama",
        Description: "Drama films bring the audiunce feelings of emotion by social issues, fights, and violence. Scenes that are not only enticing you will want to watch watch next to find out more!!"
    },
    Director: {
      _id: {ObjectId:(1013)},
      Name: "Christopher Nolan",
      Bio: "Best known for his cerebral, often nonlinear, storytelling, acclaimed writer-director Christopher Nolan was born on July 30, 1970, in London, England. Over the course of 15 years of filmmaking, Nolan has gone from low-budget independent films to working on some of the biggest blockbusters ever made.",
      Birth: "7-30-1970",
      Death: "N/A"
      },
    Actors:[{
        "StarActor":
        {_id:{ObjectId:(5079), Name: "Christian Bale"}},
        "SupportingActor":
        {_id:{ObjectId:(5111), Name: "Michael Caine"}},
        "Cast":
        {_id:{ObjectId:(5112), Name: "Ken Watanabe"}}
        }],
      Rating: "PG-13",
      Release: "2005",
      ImagePath: "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
      Featured: false
    },
    {
      _id: {ObjectId:(2043)},
      Title: "The Dark Knight",
      Description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      Genre: {
        _id: {ObjectId:4001},
        Name: "Drama",
        Description: "Drama films bring the audiunce feelings of emotion by social issues, fights, and violence. Scenes that are not only enticing you will want to watch watch next to find out more!!"
    },
    Director: {
      _id: {ObjectId:(1013)},
      Name: "Christopher Nolan",
      Bio: "Best known for his cerebral, often nonlinear, storytelling, acclaimed writer-director Christopher Nolan was born on July 30, 1970, in London, England. Over the course of 15 years of filmmaking, Nolan has gone from low-budget independent films to working on some of the biggest blockbusters ever made.",
      Birth: "7-30-1970",
      Death: "N/A"
      },
    Actors:[{
        "StarActor":
        {_id:{ObjectId:(5079), Name: "Christian Bale"}},
        "SupportingActor":
        {_id:{ObjectId:(5113), Name: "Heath Ledger"}},
        "Cast":
        {_id:{ObjectId:(5114), Name: "Aaron Eckhart"}}
        }],
      Rating: "PG-13",
      Release: "2008",
      ImagePath: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
      Featured: false
    },
    {
      _id: {ObjectId:(2044)},
      Title: "The Dark Knight Rises",
      Description: "Eight years after the Joker's reign of chaos, Batman is coerced out of exile with the assistance of the mysterious Selina Kyle in order to defend Gotham City from the vicious guerrilla terrorist Bane.",
      Genre: {
        _id: {ObjectId:4001},
        Name: "Drama",
        Description: "Drama films bring the audiunce feelings of emotion by social issues, fights, and violence. Scenes that are not only enticing you will want to watch watch next to find out more!!"
    },
    Director: {
      _id: {ObjectId:(1013)},
      Name: "Christopher Nolan",
      Bio: "Best known for his cerebral, often nonlinear, storytelling, acclaimed writer-director Christopher Nolan was born on July 30, 1970, in London, England. Over the course of 15 years of filmmaking, Nolan has gone from low-budget independent films to working on some of the biggest blockbusters ever made.",
      Birth: "7-30-1970",
      Death: "N/A"
      },
    Actors:[{
        "StarActor":
        {_id:{ObjectId:(5079), Name: "Christian Bale"}},
        "SupportingActor":
        {_id:{ObjectId:(5115), Name: "Tom Hardy"}},
        "Cast":
        {_id:{ObjectId:(5106), Name: "Anne Hathaway"}}
        }],
      Rating: "PG-13",
      Release: "2012",
      ImagePath: "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_.jpg",
      Featured: false
    },
    {
      _id: {ObjectId:(2045)},
      Title: "The Irishman",
      Description: "An illustration of Frank Sheeran's life, from W.W.II veteran to hit-man for the Bufalino crime family and his alleged assassination of his close friend Jimmy Hoffa.",
      Genre: {
        _id: {ObjectId:4001},
        Name: "Drama",
        Description: "Drama films bring the audiunce feelings of emotion by social issues, fights, and violence. Scenes that are not only enticing you will want to watch watch next to find out more!!"
    },
    Director: {
      _id: {ObjectId:(1018)},
      Name: "Martin Scorsese",
      Bio: "Martin Charles Scorsese was born on November 17, 1942 in Queens, New York City, to Catherine Scorsese (née Cappa) and Charles Scorsese, who both worked in Manhattan's garment district, and whose families both came from Palermo, Sicily. He was raised in the neighborhood of Little Italy, which later provided the inspiration for several of his films. Scorsese earned a B.S. degree in film communications in 1964, followed by an M.A. in the same field in 1966 at New York University's School of Film. During this time, he made numerous prize-winning short films including The Big Shave (1967), and directed his first feature film, Who's That Knocking at My Door (1967).",
      Birth: "11-17-1942",
      Death: "N/A"
      },
    Actors:[{
        "StarActor":
        {_id:{ObjectId:(5116), Name: "Robert De Niro"}},
        "SupportingActor":
        {_id:{ObjectId:(5041), Name: "Al Pacino"}},
        "Cast":
        {_id:{ObjectId:(5117), Name: "Jo Pesci"}}
        }],
      Rating: "R",
      Release: "2019",
      ImagePath: "https://m.media-amazon.com/images/M/MV5BMGUyM2ZiZmUtMWY0OC00NTQ4LThkOGUtNjY2NjkzMDJiMWMwXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_.jpg",
      Featured: false
    },
    {
      _id: {ObjectId:(2046)},
      Title: "The Wolf of Wallstreet",
      Description: "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
      Genre: {
        _id: {ObjectId:4003},
        Name: "Comedy",
        Description: "Comedy is a genre where you will find yourself and your friends bellylaughing and crying from laughing until the movie is over... Hopefully that is if you find a good one!!!"
    },
    Director: {
      _id: {ObjectId:(1018)},
      Name: "Martin Scorsese",
      Bio: "Martin Charles Scorsese was born on November 17, 1942 in Queens, New York City, to Catherine Scorsese (née Cappa) and Charles Scorsese, who both worked in Manhattan's garment district, and whose families both came from Palermo, Sicily. He was raised in the neighborhood of Little Italy, which later provided the inspiration for several of his films. Scorsese earned a B.S. degree in film communications in 1964, followed by an M.A. in the same field in 1966 at New York University's School of Film. During this time, he made numerous prize-winning short films including The Big Shave (1967), and directed his first feature film, Who's That Knocking at My Door (1967).",
      Birth: "11-17-1942",
      Death: "N/A"
      },
    Actors:[{
        "StarActor":
        {_id:{ObjectId:(5116), Name: "Leonardo DiCaprio"}},
        "SupportingActor":
        {_id:{ObjectId:(5041), Name: "Jonah Hill"}},
        "Cast":
        {_id:{ObjectId:(5117), Name: "Margot Robbie"}}
        }],
      Rating: "R",
      Release: "2013",
      ImagePath: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9991602_p_v12_aj.jpg",
      Featured: false
    },
    {
      _id: {ObjectId:(2047)},
      Title: "BladeRunner 2049",
      Description: "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years.",
      Genre: {
        _id: {ObjectId:4006},
        Name: "Sci-Fi",
        Description: "Films that inspire you imagination to wander deep into the unknown, adventures and excitment await in these movies. Explore the world of the unkown!!!"
    },
    Director: {
      _id: {ObjectId:(1019)},
      Name: "Denis Villeneuve",
      Bio: "Denis Villeneuve is a French Canadian film director and writer. He was born in 1967, in Trois-Rivières, Québec, Canada. He started his career as a filmmaker at the National Film Board of Canada. He is best known for his feature films Arrival (2016), Sicario (2015), Prisoners (2013), Enemy (2013), and Incendies (2010). He is married to Tanya Lapointe.",
      Birth: "10-3-1967",
      Death: "N/A"
      },
    Actors:[{
        "StarActor":
        {_id:{ObjectId:(5064), Name: "Harrison Ford"}},
        "SupportingActor":
        {_id:{ObjectId:(5025), Name: "Ryan Gosling"}},
        "Cast":
        {_id:{ObjectId:(5120), Name: "Ana De Armas"}}
        }],
      Rating: "R",
      Release: "2017",
      ImagePath: "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_FMjpg_UX1000_.jpg",
      Featured: false
    },
    {
      _id: {ObjectId:(2048)},
      Title: "Gladiator",
      Description: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
      Genre: {
        _id: {ObjectId:4001},
        Name: "Drama",
        Description: "Drama films bring the audiunce feelings of emotion by social issues, fights, and violence. Scenes that are not only enticing you will want to watch watch next to find out more!!"
    },
    Director: {
      _id: {ObjectId:(1020)},
      Name: "Ridley Scott",
      Bio: "Described by film producer Michael Deeley as 'the very best eye in the business', director Ridley Scott was born on November 30, 1937 in South Shields, Tyne and Wear (then County Durham). His father was an officer in the Royal Engineers and the family followed him as his career posted him throughout the United Kingdom and Europe before they eventually returned to Teesside. Scott wanted to join the Royal Army (his elder brother Frank had already joined the Merchant Navy) but his father encouraged him to develop his artistic talents instead and so he went to West Hartlepool College of Art and then London's Royal College of Art where he helped found the film department.",
      Birth: "11-30-1937",
      Death: "N/A"
      },
    Actors:[{
        "StarActor":
        {_id:{ObjectId:(5121), Name: "Russell Crowe"}},
        "SupportingActor":
        {_id:{ObjectId:(5122), Name: "Joaquin Pheonix"}},
        "Cast":
        {_id:{ObjectId:(5123), Name: "Connie Nielsen"}}
        }],
      Rating: "R",
      Release: "2000",
      ImagePath: "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      Featured: false
    },
    {
      _id: {ObjectId:(2049)},
      Title: "Hannibal",
      Description: "Living in exile, Dr. Hannibal Lecter tries to reconnect with now disgraced F.B.I. Agent Clarice Starling, and finds himself a target for revenge from a powerful victim.",
      Genre: {
        _id: {ObjectId:4001},
        Name: "Drama",
        Description: "Drama films bring the audiunce feelings of emotion by social issues, fights, and violence. Scenes that are not only enticing you will want to watch watch next to find out more!!"
    },
    Director: {
      _id: {ObjectId:(1020)},
      Name: "Ridley Scott",
      Bio: "Described by film producer Michael Deeley as 'the very best eye in the business', director Ridley Scott was born on November 30, 1937 in South Shields, Tyne and Wear (then County Durham). His father was an officer in the Royal Engineers and the family followed him as his career posted him throughout the United Kingdom and Europe before they eventually returned to Teesside. Scott wanted to join the Royal Army (his elder brother Frank had already joined the Merchant Navy) but his father encouraged him to develop his artistic talents instead and so he went to West Hartlepool College of Art and then London's Royal College of Art where he helped found the film department.",
      Birth: "11-30-1937",
      Death: "N/A"
      },
    Actors:[{
        "StarActor":
        {_id:{ObjectId:(5124), Name: "Anthony Hopkins"}},
        "SupportingActor":
        {_id:{ObjectId:(5125), Name: "Julianne Moore"}},
        "Cast":
        {_id:{ObjectId:(5126), Name: "Gary Oldman"}}
        }],
      Rating: "R",
      Release: "2001",
      ImagePath: "https://m.media-amazon.com/images/M/MV5BZDMxMjhiZmItNWMxMC00NzYyLWJiOTYtNGYwOTAyYjU5OWY4XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      Featured: false
    },
    {
      _id: {ObjectId:(2050)},
      Title: "American Gangster",
      Description: "An outcast New York City cop is charged with bringing down Harlem drug lord Frank Lucas, whose real life inspired this partly biographical film.",
      Genre: {
        _id: {ObjectId:4001},
        Name: "Drama",
        Description: "Drama films bring the audiunce feelings of emotion by social issues, fights, and violence. Scenes that are not only enticing you will want to watch watch next to find out more!!"
    },
    Director: {
      _id: {ObjectId:(1020)},
      Name: "Ridley Scott",
      Bio: "Described by film producer Michael Deeley as 'the very best eye in the business', director Ridley Scott was born on November 30, 1937 in South Shields, Tyne and Wear (then County Durham). His father was an officer in the Royal Engineers and the family followed him as his career posted him throughout the United Kingdom and Europe before they eventually returned to Teesside. Scott wanted to join the Royal Army (his elder brother Frank had already joined the Merchant Navy) but his father encouraged him to develop his artistic talents instead and so he went to West Hartlepool College of Art and then London's Royal College of Art where he helped found the film department.",
      Birth: "11-30-1937",
      Death: "N/A"
      },
    Actors:[{
        "StarActor":
        {_id:{ObjectId:(5053), Name: "Denzel Washington"}},
        "SupportingActor":
        {_id:{ObjectId:(5121), Name: "Russell Crowe"}},
        "Cast":
        {_id:{ObjectId:(5127), Name: "Chiwetel Ejiofor"}}
        }],
      Rating: "R",
      Release: "2007",
      ImagePath: "https://m.media-amazon.com/images/M/MV5BMjFmZGI2YTEtYmJhMS00YTE5LWJjNjAtNDI5OGY5ZDhmNTRlXkEyXkFqcGdeQXVyODAwMTU1MTE@._V1_.jpg",
      Featured: false
    },
    {
      _id: {ObjectId:(2051)},
      Title: "The Avengers",
      Description: "An outcast New York City cop is charged with bringing down Harlem drug lord Frank Lucas, whose real life inspired this partly biographical film.",
      Genre: {
        _id: {ObjectId:4006},
        Name: "Sci-Fi",
        Description: "Films that inspire you imagination to wander deep into the unknown, adventures and excitment await in these movies. Explore the world of the unkown!!!"
    },
    Director: {
      _id: {ObjectId:(1016)},
      Name: "Joss Whedon",
      Bio: "Joss Whedon is the middle of five brothers - his younger brothers are Jed Whedon and Zack Whedon. Both his father, Tom Whedon and his grandfather, John Whedon were successful television writers. Joss' mother, Lee Stearns, was a history teacher and she also wrote novels as Lee Whedon.",
      Birth: "5-23-1964",
      Death: "N/A"
      },
    Actors:[{
        "StarActor":
        {_id:{ObjectId:(5007), Name: "Robert Downey Jr."}},
        "SupportingActor":
        {_id:{ObjectId:(5033), Name: "Chris Evans"}},
        "Cast":
        {_id:{ObjectId:(5102), Name: "Scarlett Johansson"}}
        }],
      Rating: "PG-13",
      Release: "2012",
      ImagePath: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      Featured: false
    },
    {
      _id: {ObjectId:(2052)},
      Title: "Pulp Fiction",
      Description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      Genre: {
        _id: {ObjectId:4001},
        Name: "Drama",
        Description: "Drama films bring the audiunce feelings of emotion by social issues, fights, and violence. Scenes that are not only enticing you will want to watch watch next to find out more!!"
    },
    Director: {
      _id: {ObjectId:(1015)},
      Name: "Quentin Tarantino",
      Bio: "Quentin Jerome Tarantino was born in Knoxville, Tennessee. His father, Tony Tarantino, is an Italian-American actor and musician from New York, and his mother, Connie (McHugh), is a nurse from Tennessee.",
      Birth: "3-27-1963",
      Death: "N/A"
      },
    Actors:[{
        "StarActor":
        {_id:{ObjectId:(5086), Name: "John Travolta."}},
        "SupportingActor":
        {_id:{ObjectId:(5087), Name: "Uma Thurman"}},
        "Cast":
        {_id:{ObjectId:(5088), Name: "Samuel L. Jackson"}}
        }],
      Rating: "R",
      Release: "1994",
      ImagePath: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      Featured: false
    },
    {
      _id: {ObjectId:(2053)},
      Title: "The Hateful Eight",
      Description: "In the dead of a Wyoming winter, a bounty hunter and his prisoner find shelter in a cabin currently inhabited by a collection of nefarious characters.",
      Genre: {
        _id: {ObjectId:4001},
        Name: "Drama",
        Description: "Drama films bring the audiunce feelings of emotion by social issues, fights, and violence. Scenes that are not only enticing you will want to watch watch next to find out more!!"
    },
    Director: {
      _id: {ObjectId:(1015)},
      Name: "Quentin Tarantino",
      Bio: "Quentin Jerome Tarantino was born in Knoxville, Tennessee. His father, Tony Tarantino, is an Italian-American actor and musician from New York, and his mother, Connie (McHugh), is a nurse from Tennessee.",
      Birth: "3-27-1963",
      Death: "N/A"
      },
    Actors:[{
        "StarActor":
        {_id:{ObjectId:(5088), Name: "Samuel L. Jackson"}},
        "SupportingActor":
        {_id:{ObjectId:(5089), Name: "Kurt Russell"}},
        "Cast":
        {_id:{ObjectId:(5090), Name: "Jennifer Jason Leigh"}}
        }],
      Rating: "R",
      Release: "2015",
      ImagePath: "https://m.media-amazon.com/images/M/MV5BMjA1MTc1NTg5NV5BMl5BanBnXkFtZTgwOTM2MDEzNzE@._V1_.jpg",
      Featured: false
    },
    {
      _id: {ObjectId:(2054)},
      Title: "Reservoir Dogs",
      Description: "When a simple jewelry heist goes horribly wrong, the surviving criminals begin to suspect that one of them is a police informant.",
      Genre: {
        _id: {ObjectId:4001},
        Name: "Drama",
        Description: "Drama films bring the audiunce feelings of emotion by social issues, fights, and violence. Scenes that are not only enticing you will want to watch watch next to find out more!!"
    },
    Director: {
      _id: {ObjectId:(1015)},
      Name: "Quentin Tarantino",
      Bio: "Quentin Jerome Tarantino was born in Knoxville, Tennessee. His father, Tony Tarantino, is an Italian-American actor and musician from New York, and his mother, Connie (McHugh), is a nurse from Tennessee.",
      Birth: "3-27-1963",
      Death: "N/A"
      },
    Actors:[{
        "StarActor":
        {_id:{ObjectId:(5091), Name: "Harvey Keitel"}},
        "SupportingActor":
        {_id:{ObjectId:(5092), Name: "Tim Roth"}},
        "Cast":
        {_id:{ObjectId:(5093), Name: "Michael Madsen"}}
        }],
      Rating: "R",
      Release: "1992",
      ImagePath: "https://m.media-amazon.com/images/M/MV5BZmExNmEwYWItYmQzOS00YjA5LTk2MjktZjEyZDE1Y2QxNjA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
      Featured: false
    },
    {
      _id: {ObjectId:(2055)},
      Title: "Kill Bill Volume 1",
      Description: "After awakening from a four-year coma, a former assassin wreaks vengeance on the team of assassins who betrayed her.",
      Genre: {
        _id: {ObjectId:4002},
        Name: "Action",
        Description: "Action is a genre where you will find car chases Wild rides, thrills, and more to break up and boredom find yourself one of these movies!!!"
    },
    Director: {
      _id: {ObjectId:(1015)},
      Name: "Quentin Tarantino",
      Bio: "Quentin Jerome Tarantino was born in Knoxville, Tennessee. His father, Tony Tarantino, is an Italian-American actor and musician from New York, and his mother, Connie (McHugh), is a nurse from Tennessee.",
      Birth: "3-27-1963",
      Death: "N/A"
      },
    Actors:[{
        "StarActor":
        {_id:{ObjectId:(5087), Name: "Uma Thurman"}},
        "SupportingActor":
        {_id:{ObjectId:(5094), Name: "David Carradine"}},
        "Cast":
        {_id:{ObjectId:(5095), Name: "Daryl Hannah"}}
        }],
      Rating: "R",
      Release: "2003",
      ImagePath: "https://i.pinimg.com/564x/4a/cd/67/4acd6797d677bdc0173110e5c49af634.jpg",
      Featured: false
    },
    {
      _id: {ObjectId:(2056)},
      Title: "Kill Bill Volume 2",
      Description: "The Bride continues her quest of vengeance against her former boss and lover Bill, the reclusive bouncer Budd, and the treacherous, one-eyed Elle.",
      Genre: {
        _id: {ObjectId:4002},
        Name: "Action",
        Description: "Action is a genre where you will find car chases Wild rides, thrills, and more to break up and boredom find yourself one of these movies!!!"
    },
    Director: {
      _id: {ObjectId:(1015)},
      Name: "Quentin Tarantino",
      Bio: "Quentin Jerome Tarantino was born in Knoxville, Tennessee. His father, Tony Tarantino, is an Italian-American actor and musician from New York, and his mother, Connie (McHugh), is a nurse from Tennessee.",
      Birth: "3-27-1963",
      Death: "N/A"
      },
    Actors:[{
        "StarActor":
        {_id:{ObjectId:(5087), Name: "Uma Thurman"}},
        "SupportingActor":
        {_id:{ObjectId:(5094), Name: "David Carradine"}},
        "Cast":
        {_id:{ObjectId:(5093), Name: "Michael Madsen"}}
        }],
      Rating: "R",
      Release: "2004",
      ImagePath: "https://m.media-amazon.com/images/M/MV5BNmFiYmJmN2QtNWQwMi00MzliLThiOWMtZjQxNGRhZTQ1MjgyXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_FMjpg_UX1000_.jpg",
      Featured: false
    },
    {
      _id: {ObjectId:(2057)},
      Title: "Inglorious Bastards",
      Description: "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same.",
      Genre: {
        _id: {ObjectId:4002},
        Name: "Action",
        Description: "Action is a genre where you will find car chases Wild rides, thrills, and more to break up and boredom find yourself one of these movies!!!"
    },
    Director: {
      _id: {ObjectId:(1015)},
      Name: "Quentin Tarantino",
      Bio: "Quentin Jerome Tarantino was born in Knoxville, Tennessee. His father, Tony Tarantino, is an Italian-American actor and musician from New York, and his mother, Connie (McHugh), is a nurse from Tennessee.",
      Birth: "3-27-1963",
      Death: "N/A"
      },
    Actors:[{
        "StarActor":
        {_id:{ObjectId:(5098), Name: "Brad Pitt"}},
        "SupportingActor":
        {_id:{ObjectId:(5099), Name: "Diane Kruger"}},
        "Cast":
        {_id:{ObjectId:(5100), Name: "Eli Rother"}}
        }],
      Rating: "R",
      Release: "2009",
      ImagePath: "https://m.media-amazon.com/images/M/MV5BOTJiNDEzOWYtMTVjOC00ZjlmLWE0NGMtZmE1OWVmZDQ2OWJhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_FMjpg_UX1000_.jpg",
      Featured: false
    },
]
export default Movies