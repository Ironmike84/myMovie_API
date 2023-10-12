let Movies = [
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
      "Star Actor":
      {_id:{ObjectId:(5016), Name: "Natalie Portman"}},
      "Supporting Actor":
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
      "Star Actor":
      {_id:{ObjectId:(5019), Name: "Chris Pratt"}},
      "Supporting Actor":
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
      "Star Actor":
      {_id:{ObjectId:(5022), Name: "Tobey Maguire"}},
      "Supporting Actor":
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
      "Star Actor":
      {_id:{ObjectId:(5025), Name: "Ryan Gosling"}},
      "Supporting Actor":
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
      "Star Actor":
      {_id:{ObjectId:(5028), Name: "Keanu Reeves"}},
      "Supporting Actor":
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
      "Star Actor":
      {_id:{ObjectId:(5004), Name: "Robert Downey Jr."}},
      "Supporting Actor":
      {_id:{ObjectId:(5032), Name: "Mickey Rourke"}},
      "Cast":
      {_id:{ObjectId:(5005), Name: "Gwyneth Paltrow"}}
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
      "Star Actor":
      {_id:{ObjectId:(5004), Name: "Robert Downey Jr."}},
      "Supporting Actor":
      {_id:{ObjectId:(5032), Name: "Guy Pearce"}},
      "Cast":
      {_id:{ObjectId:(5005), Name: "Gwyneth Paltrow"}}
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
      "Star Actor":
      {_id:{ObjectId:(5033), Name: "Chris Evans"}},
      "Supporting Actor":
      {_id:{ObjectId:(5004), Name: "Robert Downey Jr."}},
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
      "Star Actor":
      {_id:{ObjectId:(5035), Name: "Tim Robbins"}},
      "Supporting Actor":
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
      "Star Actor":
      {_id:{ObjectId:(5013), Name: "Tom Hanks"}},
      "Supporting Actor":
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
      "Star Actor":
      {_id:{ObjectId:(5040), Name: "Marlon Brando"}},
      "Supporting Actor":
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
    Title: "Forrest Gump",
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
      "Star Actor":
      {_id:{ObjectId:(5013), Name: "Tom Hanks"}},
      "Supporting Actor":
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
      "Star Actor":
      {_id:{ObjectId:(5045), Name: "Jodie Foster"}},
      "Supporting Actor":
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
      "Star Actor":
      {_id:{ObjectId:(5048), Name: "Michael J. Fox"}},
      "Supporting Actor":
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
      "Star Actor":
      {_id:{ObjectId:(5013), Name: "Tom Hanks"}},
      "Supporting Actor":
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
      "Star Actor":
      {_id:{ObjectId:(5053), Name: "Denzel Washington"}},
      "Supporting Actor":
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
      "Star Actor":
      {_id:{ObjectId:(5013), Name: "Tom Hanks"}},
      "Supporting Actor":
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
      "Star Actor":
      {_id:{ObjectId:(5013), Name: "Liam Neeson"}},
      "Supporting Actor":
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
      "Star Actor":
      {_id:{ObjectId:(5061), Name: "Henry Thomas"}},
      "Supporting Actor":
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
      "Star Actor":
      {_id:{ObjectId:(5064), Name: "Harrison Ford"}},
      "Supporting Actor":
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
      "Star Actor":
      {_id:{ObjectId:(5067), Name: "Tom Cruise"}},
      "Supporting Actor":
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
      "Star Actor":
      {_id:{ObjectId:(5070), Name: "Roy Scheider"}},
      "Supporting Actor":
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
      "Star Actor":
      {_id:{ObjectId:(5073), Name: "Bill Murray"}},
      "Supporting Actor":
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
      "Star Actor":
      {_id:{ObjectId:(5078), Name: "Will Ferrell"}},
      "Supporting Actor":
      {_id:{ObjectId:(5076), Name: "John C. Reilly"}},
      "Cast":
      {_id:{ObjectId:(5077), Name: "Sacha Baron Cohen"}}
      }],
    Rating: "PG-13",
    Release: "2006",
    ImagePath: "http://content7.flixster.com/movie/11/16/98/11169805_800.jpg",
    Featured: false
  }
]
export default Movies