export const tags = {
  FEMME_PUNK: "femmePunks",
  HOUSE_HEAD: "houseHeads",
  HIP_HOP_SAMPLE_SOURCE: "hipHopSampleSources",
  ELECTRONICA: "electronicas",
  BLUES: "bluess",
  SOUNDTRACK: "soundtrack",
  PSYCHEDELIC_FUNK: "psychedelicFunk",
  PSYCHEDELIC_JAZZ: "psychedelicJazz",
  PSYCHEDELIC_ROCK: "psychedelicRock",
  KRAUTROCK: "krautRock",
  AFRICAN: "african",
  HIP_HOP: "hipHop",
  DUB: "dub",
  FOLK: "folk",
  DETROIT_TECHNO: "detroitTechno",
  LATIN: "latin",
  SURF_ROCK: "surfRock",
  DISCO: "disco",
  NO_WAVES: "noWaves",
};

export const BIOLINK_DISCOGS = 'discogs';
export const BIOLINK_ORIGINAL = 'original';

export const rawArtistList = [
  { 
    name: "PJ Harvey" ,
    from: "England",
    youtubeClips: [
      { videoId: "SVDvC_y7HQY" },
      { videoId: "tap5tu9ExWg" },
      { videoId: "uV99yrooqjg" },
      { videoId: "VfY6yvSphKE" },
      { videoId: "P-O91rE4Fe0" },
      { videoId: "VO63vb1S7Cw" },
      { videoId: "3spgKgoElaE" },
      { videoId: "3NSbu93HlNQ" },
    ],
    tags: [tags.FEMME_PUNK],
    discogsId: "36052-PJ-Harvey",
    bio: "Polly Jean \"PJ\" Harvey MBE (born 9 October 1969) is an English musician and singer-songwriter. Harvey began her career in 1988 when she joined Bristol band Automatic Dlamini as a vocalist, guitarist and saxophone player. In 1991, she formed an eponymous trio with Rob Ellis and Ian Olliver. After the second studio album, Rid Of Me (1993), the trio evolved into a solo act.",
    bioLink: BIOLINK_DISCOGS,
  },
  { 
    name: "Lydia Lunch" ,
    from: "New York",
    youtubeClips: [
      { videoId: "tYeyVHOz950" }, 
      { videoId: "GiowCFfejH8" }, 
      { videoId: "AlS6GC11Wi0" }, 
      { videoId: "Qr2Kde2uuXs" }, 
      { videoId: "Iip3yTTWVZI" },
      { videoId: "s4ole_bRTdw" }, 
      { videoId: "UZmQZwylKrQ" },
      { videoId: "0IN4tIyVI4o" },
    ],
    tags: [tags.FEMME_PUNK],
    discogsId: "10290-Lydia-Lunch",
    bio: "Lydia Lunch, born 2 June 1959 in Rochester, New York, USA, began her activity in 1977 with Teenage Jesus And The Jerks as lead singer and guitar player, taking part in the No Wave Movement. She has been an actress in experimental movies by Richard Kern and by Beth B & Scott B, and she's also known for her spoken word performances...",
    bioLink: BIOLINK_DISCOGS,
  },
  { 
    name: "Dr. Buzzard's Original Savannah Band" ,
    from: "New York",
    youtubeClips: [
      { videoId: "r5lrxFGOj9g" },
      { videoId: "J1IFV1ncIOQ" },
      { videoId: "-9T3jK3PCc8" },
      { videoId: "jrzxW0rsD1Q" },
      { videoId: "tPnoC3XHroU" },
    ],
    tags: [tags.DISCO],
    discogsId: "88534-Dr-Buzzards-Original-Savannah-Band",
    bio: "",
    bioLink: "",
  },
  { 
    name: "Lena Platanos",
    from: "Greece",
    youtubeClips: [
      { videoId: "Z7DSw62PMS4" },
      { videoId: "qIoYrkzTQoE" },
      { videoId: "Sc7VRvhbqZA" },
    ],
    tags: [tags.FEMME_PUNK, tags.NO_WAVES],
    discogsId: "642532-Λένα-Πλάτωνος",
    bio: "Lena Platonos (born 21 October 1951)[1] is a Greek pianist and composer of electronic and art music. She took a leading role in the electronic music scene in the 1980s, while her work constituted an inspiration for Greek electronic musicians in the subsequent decades.",
    bioLink: "https://en.wikipedia.org/wiki/Lena_Platonos",
  },
  { 
    name: "David Axlerod",
    from: "New York",
    youtubeClips: [
      { videoId: "l5q1SCxn-zs" },
      { videoId: "nIEut68UJkw" },
      { videoId: "bMEqmaqFAMs" }
    ],
    discogsId: "5451-David-Axelrod",
    tags: [tags.HIP_HOP_SAMPLE_SOURCE],
    bio: "",
    bioLink: "",
  },
  { 
    name: "Larry Heard",
    from: "Chicago",
    discogsId: "148-Larry-Heard",
    youtubeClips: [
      { videoId: "Z9o2v3SA1Co" },
      // { videoId: "tFuujExs03A" },
      { videoId: "OYyBrXEdxxc" },
      { videoId: "y9rFjydgiFA" },
      { videoId: "07S19RpHr08" },
      { videoId: "tdIQTEYXDP4" },

    ],
    tags: [tags.HOUSE_HEAD, tags.DETROIT_TECHNO],
    bio: "Born on the South Side of Chicago on May 31st 1960. Larry Heard is an USA DJ, producer and musician, playing drums in various bands between 1977 & 1984. He left bands in 1984, purchased a keyboard, a drum machine and composed deep house classics \"Mystery Love\" and \"Washing Machine\". Since 1986, Larry Heard produced several dance hits, as well as underground, deep house and ambient albums.",
    bioLink: BIOLINK_DISCOGS,
  },
  { 
    name: "ESG",
    from: "New York",
    youtubeClips: [
      { videoId: "dtMWnzf0x3E" },
      { videoId: "ckjz8kMCkO8" },
      { videoId: "fQN9lzvREb4" },
      { videoId: "Vy_U-0s1_G8" },
    ],
    tags: [
      tags.NO_WAVES, 
      tags.DISCO, 
      tags.HOUSE_HEAD
    ],
    discogsId: "16534-ESG",
    bio: "",
    bioLink: "",
  },
  { 
    name: "Piero Umiliani",
    from: "Italy",
    youtubeClips: [
      { videoId: "Z67uiA2Q7d8" },
      { videoId: "jU6r5lJlIbQ" },
      { videoId: "5Vp17zg8-30" },
      { videoId: "QxEemccRAMQ" },
      { videoId: "CDEiQcflHWc" },
      { videoId: "0WrruFyhtVw" },
      { videoId: "k1-6JKZ8spI" },
      { videoId: "pvBopJUDiNE" }, 
    ],
    tags: [tags.SOUNDTRACK, tags.HIP_HOP_SAMPLE_SOURCE],
    discogsId: "8722-Piero-Umiliani",
    bio: "Born in Torino, December 6, 1921, passed away in Roma July 23, 2004, the son of an eminent judge, soundtrack composer Piero Piccioni followed his father's footsteps and practised as a lawyer before abandoning the legal profession to pursue a career in music...",
    bioLink: BIOLINK_DISCOGS,
  },
  { 
    name: "R.L. Burnside",
    from: "Mississippi",
    youtubeClips: [
      { videoId: "K_DOnKJ232M" },
      { videoId: "FA4jfEOanIk" },
      { videoId: "n0TLP_DCB3I" },
    ],
    tags: [tags.BLUES],
    discogsId: "262901-RL-Burnside",
    bio: "Born: November 21, 1926 Lafayette County, Mississippi.  Died: September 1, 2005, Memphis, Tennessee.  His first name is given as R.L., Rural (which is on his tombstone), Robert Lee, Rule, or Ruel. His father left him early on and he grew up in his large family including his mother, grandparents and several siblings. Started playing harmonica and guitar at age 16 learning from Mississippi Fred McDowelll. R.L. credited Muddy Waters, Lightnin' Hopkins and John Lee Hooker as influences. Muddy Waters was his cousin-in-law. While living in Chicago in the late-1940's his father and two uncles were murdered in the same year which he sang about and referenced often in his songs. He returned to Mississippi and working through the 1980's as a sharecropper and a commercial fisherman selling what he caught door-to-door. He started to receive recognition in the 1990's.",
    bioLink: BIOLINK_DISCOGS,
  },
  { 
    name: "Erase Errata",
    from: "San Francisco",
    youtubeClips: [
      { videoId: "4ySlz4Xaph4" },
      { videoId: "uTVukQi967U" },
      { videoId: "NEtyug1SGt8" },
      { videoId: "Ntwyw2GuVYs" },
      { videoId: "jsaZxd2uPb0" },
      { videoId: "lKplwB7RrDg" },
      { videoId: "jE-SKdU2q38" }

    ],
    tags: [tags.FEMME_PUNK],
    discogsId: "80777-Erase-Errata",
    bio: "Although facts hardly define the audacious and experimental nature of their fiercely iconoclastic and thrilling music, let's begin here: Erase Errata is Jenny Hoysten (singer and amateur trumpeter), Sara Jaffe (funkster guitarist), Ellie Erickson (in-need-of-Valium bassist) and Bianca Sparta (tribal drummer, whose cavestompings begin and end here, there and everywhere). They come from the San Francisco Bay area, and evince an uncompromising stance toward dance music. Think Gang of Four without the bread lines, or Beefheart without the Delta, the Slits with more jagged, funny dissonance. No band sounds like Erase Errata. Their music crackles with white electricity, a phone line long since gone down. The songs are brief, non-discursive; the vocals are mysterious yowls of a woman abandoning niceties of western culture. And the drumming seems clannish, ancestral, a pound pound of angry voices coming from a faithless dance floor and diminished world.",
    bioLink: "https://trouserpress.com/reviews/erase-errata/",
  },
  { 
    name: "Embryo",
    from: "Germany",
    youtubeClips: [
      { videoId: "fADRbiq3i2c" },
      { videoId: "SwvbigAV9n4" },
      { videoId: "XsEIiHFiMV0" },
    ],
    tags: [
      tags.PSYCHEDELIC_FUNK, 
      tags.PSYCHEDELIC_ROCK, 
      tags.KRAUTROCK, 
    ],
    discogsId: "201948-Embryo-3",
    bio: "",
    bioLink: "",
  },
  { 
    name: "Billy Cobham",
    from: "Panama",
    youtubeClips: [
      { videoId: "Pjb_NV8fr5U" },
      { videoId: "l7Q-JfAV2xk" },
      { videoId: "_VakN0BA2Vc" },
      { videoId: "qHCYPBI27tw" },
      { videoId: "YdzfAHswd50" },
      { videoId: "sbkv3ZGIIj0" },
    ],
    tags: [tags.PSYCHEDELIC_JAZZ],
    discogsId: "35199-Billy-Cobham",
    bio: "",
    bioLink: "",
  },
  { 
    name: "Bennie Maupin",
    from: "Detroit",
    youtubeClips: [
      // { videoId: "xfjVxmqefwc" },  // private :/
      { videoId: "GrOzUl2lwkQ" },
      { videoId: "N9QYxXo8-cU" },
    ],
    tags: [tags.PSYCHEDELIC_JAZZ],
    discogsId: "15448-Bennie-Maupin",
    bio: "",
    bioLink: "",
  },
  { 
    name: "Coldcut",
    from: "England",
    youtubeClips: [
      { videoId: "bbctSV5s-SA" },
      { videoId: "DzJvWMwcbyM" },
      { videoId: "i3NWX-EIEAQ" },
      { videoId: "5-wl7Xk5FoY" },
      { videoId: "8J0KLrk933M" },
    ],
    tags: [tags.ELECTRONICA],
    discogsId: "946-Coldcut",
    bio: "",
    bioLink: "",
  },
  { 
    name: "Bruno Spoerri",
    from: "Switzerland",
    youtubeClips: [
      { videoId: "0BJZBLtyPpg" },
      { videoId: "HuvuGS595KY" },
      { videoId: "gE6wWbkKPS8" }
    ],
    tags: [tags.SOUNDTRACK],
    discogsId: "92184-Bruno-Spoerri",
    bio: "",
    bioLink: "",
  },
  { 
    name: "Prince Jammy",
    from: "Jamaica",
    youtubeClips: [
      { videoId: "vI0cFSC9cQw" },
      { videoId: "9jB9JaCDIlI" }
    ],
    tags: [tags.DUB],
    discogsId: "41270-Prince-Jammy",
    bio: "Lloyd James (born 1947, in Montego Bay, Jamaica), who is better known as Prince Jammy or King Jammy, is a dub mixer and record producer. He began his musical career as a dub master at King Tubby's Studio. His dubs were known for their clear sound and use of effects.",
    bioLink: BIOLINK_DISCOGS,
  },
  { 
    name: "Tones On Tail",
    from: "England",
    youtubeClips: [
      { videoId: "t71wENZgwCk" },
      { videoId: "CKNT8HBYOE8" },
      { videoId: "8xnUUaFajXw" }
    ],
    tags: [tags.NO_WAVES, tags.ELECTRONICA],
    discogsId: "98173-Tones-On-Tail",
    bio: "",
    bioLink: "",
  },
  { 
    name: "BADBADNOTGOOD",
    from: "Toronto",
    youtubeClips: [
      { videoId: "aqJxKXO0TEk" },
      { videoId: "UWIIPX_5rbM" },
    ],
    tags: [
      tags.PSYCHEDELIC_JAZZ
    ],
    discogsId: "2468526-BadBadNotGood",
    bio: "",
    bioLink: "",
  },
  { 
    name: "Cleo McNett",
    from: "Texas",
    youtubeClips: [
      { videoId: "Tsi8mHIICqI" },
    ],
    tags: [tags.HIP_HOP_SAMPLE_SOURCE],
    discogsId: "2539301-Cleo-McNett",
    bio: "",
    bioLink: "",
  },
  { 
    name: "Yesterday's New Quintet",
    from: "Los Angeles",
    youtubeClips: [
      { videoId: "RGjib_XOQyY" },
      { videoId: "rylPWD9SJFI" },
      { videoId: "gFI-sAEX3-w" },
      { videoId: "i3lHbp9a2Ns" },
      { videoId: "grH8qTkVdF0" },
    ],
    tags: [tags.PSYCHEDELIC_FUNK, tags.HIP_HOP],
    discogsId: "231672-Yesterdays-New-Quintet",
    bio: "Madlib's jazz side-project consisting of his multiple Jazz Cats personalities: Joe McDuphrey, Malik Flavors, Ahmad Miller, Monk Hughes, & Otis Jackson Jr.",
    bioLink: "discogs",
  },
  { 
    name: "Henry Mancini",
    from: "Cleveland",
    youtubeClips: [
      { videoId: "6iRKetH_mdk" },
      { videoId: "P8LM3OiWMJ8" },  
      { videoId: "6UJ0SSHlarc" },
    ],
    tags: [tags.SOUNDTRACK],
    discogsId: "10529-Henry-Mancini",
    bio: "American composer, conductor and arranger, who co-wrote many of his songs with [a=Johnny Mercer]. Born April 16, 1924 in Cleveland, Ohio, USA and died June 14, 1994 in Los Angeles, California, USA. He won 20 Grammy Awards and a Grammy Lifetime Achievement Award posthumously in 1995",
    bioLink: BIOLINK_DISCOGS,
  },
  { 
    name: "Lee Hazlewood",
    from: "Oklahoma",
    youtubeClips: [
      { videoId: "Lw_I_UpqVjM" },
      { videoId: "oUBHy8WQlzU" },
      { videoId: "J2rfZdqinIA" },
      { videoId: "pjsh2j7W6Bo" },
      { videoId: "UfajzCPzpDA" },
      { videoId: "Qo24xN9mj8Q" },
      { videoId: "yIP9JUMhTbQ" },
      { videoId: "DzDBW4J9ZBI" },
    ],
    tags: [tags.FOLK],
    discogsId: "225403-Lee-Hazlewood",
    bio: "American singer, songwriter, actor and producer, born 9 July 9, 1929 in Mannford, Oklahoma, USA, died August 4, 2007 in Las Vegas, Nevada, USA. He is best known for his work with Nancy Sinatra in the Nancy Sinatra & Lee Hazlewood duo",
    bioLink: BIOLINK_DISCOGS,
  },
  { 
    name: "Cristina",
    from: "New York",
    youtubeClips: [
      { videoId: "Nk4vAAqcT0I" },
      { videoId: "J_Tc6qc3v7w" },
      { videoId: "s5Xgktqp-Zw" },
    ],
    tags: [tags.NO_WAVES],
    discogsId: "55646-Cristina",
    bio: "",
    bioLink: "",
  },
  { 
    name: "Jasper Van't Hof",
    from: "The Netherlands",
    youtubeClips: [
      { videoId: "SJr2efNBVLc" },
      { videoId: "butTVsxTv-0" },
    ],
    tags: [
      tags.PSYCHEDELIC_FUNK, 
      tags.ELECTRONICA, 
      // tags.HIP_HOP_SAMPLE_SOURCE
    ],
    discogsId: "149325-Jasper-Vant-Hof",
    bio: "",
    bioLink: "",
  },
  { 
    name: "Sun Ra",
    from: "Alabama",
    youtubeClips: [
      { videoId: "uuirXgyT_-s" },
      { videoId: "gZwfxT19qWc" },
      { videoId: "4rUix7ZFTTQ" },
      { videoId: "xz3o__1uAFo" },
      { videoId: "j2FnIzSf48k" },
    ],
    tags: [tags.PSYCHEDELIC_JAZZ],
    discogsId: "35328-Sun-Ra",
    bio: "",
    bioLink: "",
  },
  { 
    name: "Ron Hardy",
    from: "Chicago",
    youtubeClips: [
      { videoId: "FOozrFYqF8E" },
      { videoId: "y9rFjydgiFA" },
      { videoId: "nvZXbJxF0cY" },
    ],
    tags: [
      tags.HOUSE_HEAD, 
      tags.DISCO,
      tags.NO_WAVES,
    ],
    discogsId: "2686-Ron-Hardy",
    bio: "Ron Hardy is the only man who can test [a=Frankie Knuckles]' status as Godfather of Chicago House Music. Though he rarely recorded under his own name and left little evidence of his life, Hardy was the major name for Chicago's dance music from the late '70s to the mid-'80s...",
    bioLink: BIOLINK_DISCOGS,
  },
  { 
    name: "Hamilton Bohannon",
    from: "Detroit",
    youtubeClips: [
      { videoId: "DsWFRi5qtfI" },
      { videoId: "uMgA49Q-cpY" },
      { videoId: "0V0AZmX2SBM" },
      // { videoId: "mls04iVmU9o" },
      { videoId: "AU04knNymSA" },
      { videoId: "lOX7Qt9YF4c" },
    ],
    tags: [tags.HOUSE_HEAD, tags.DISCO],
    discogsId: "154434-Hamilton-Bohannon",
    bio: "American disco producer, songwriter, arranger, and bandleader.  Moved to Detroit in early 1960s and worked as sideman of Stevie Wonder between 1965 and 1967. Then he became responsible for live arrangements for all Motown’s top acts. When Motown relocated to Los Angeles in early 1970s, he stayed in Detroit, formed his own band and released 21 albums between 1973 and 1990.",
    bioLink: BIOLINK_DISCOGS,
  },
  { 
    name: "Moodymann",
    from: "Detroit",
    youtubeClips: [
      { videoId: "hbm9OZHLxQ0" },
      { videoId: "oJlyMjtszLI" },
      { videoId: "AHwcwqe-4wU" },
      { videoId: "Vvbj1UVGbXw" },
      { videoId: "xwhIS92E0ao" },
      { videoId: "kAc31ytA8EA" },
    ],
    tags: [tags.HOUSE_HEAD, tags.DETROIT_TECHNO],
    discogsId: "1094-Moodymann",
    bio: "Moodymann worked at several Detroit record stores in the mid-nineties including a store owned by producer Blake Baxter. During the mid-nineties Kenny was also the resident DJ at the Detroit based Outcast Motorcycle Club. At that time he was known as \"House\". After his first several releases on Planet E Records Kenny became quite popular in France and from there his popularity grew.",
    bioLink: "https://ra.co/dj/moodymann/biography",
  },
  { 
    name: "Grace Jones",
    from: "Jamaica",
    youtubeClips: [
      { videoId: "yvLn_qC7QAs" },
      { videoId: "Qn4ohXUdo_8" },
      { videoId: "TprLOVgw-2Y" },
    ],
    tags: [tags.NO_WAVES, tags.DISCO, tags.DUB],
    discogsId: "13932-Grace-Jones",
    bio: "Jamaican singer, actress and supermodel born on May 19, 1948 [some sources claim 1950 or 1952] in Spanish Town, Jamaica, West Indies. She moved to Syracuse, New York, in her early teens, where her parents had relocated and founded the Apostolic Church of Jesus Christ...",
    bioLink: "discogs",
  },
  { 
    name: "Sylvester",
    from: "San Francisco",
    youtubeClips: [
      { videoId: "Nb_t42nQ-00" },
      { videoId: "gD6cPE2BHic" }
    ],
    tags: [tags.HOUSE_HEAD, tags.DISCO],
    discogsId: "16794-Sylvester",
    bio: "",
    bioLink: "",
  },
  { 
    name: "Los Destellos",
    from: "Peru",
    youtubeClips: [
      { videoId: "f-_xgHGQJNQ" },
      // what was the other one? 
    ],
    tags: [tags.LATIN],
    discogsId: "865862-Los-Destellos",
    bio: "",
    bioLink: "",
  },
  { 
    name: "Chance",
    from: "Brazil",
    youtubeClips: [
      { videoId: "neljZgwCIMs" },
      { videoId: "2FyY66LP3dc" }
    ],
    tags: [tags.FEMME_PUNK, tags.LATIN],
    discogsId: "320462-Chance-3",
    bio: "",
    bioLink: "",
  },
  { 
    name: "As Mercenárias",
    from: "Brazil",
    youtubeClips: [
      { videoId: "QdI-1T_57PA" },
      { videoId: "D9b_JC0hb9s" },
      { videoId: "itXg_TyMffE" },
      { videoId: "190a47w9Ilo" },
    ],
    tags: [tags.LATIN, tags.FEMME_PUNK],
    discogsId: "462905-As-Mercenárias",
    bio: "",
    bioLink: "",
  },
  { 
    name: "Deutsch-Amerikanische Freundschaft",
    from: "Germany",
    youtubeClips: [
      { videoId: "jSL1nXza7pM" },
      { videoId: "pOJKf66QYQI" },
      { videoId: "jDQPVXUegPs" },
      { videoId: "TuHYklrLkjU" },
      { videoId: "Cg0NS33TqKU" },
      { videoId: "p3tg2mfzp78" },
      { videoId: "KV6NnB7CuX0" },
      { videoId: "LyFinYxwMYo" },
    ],
    tags: [tags.ELECTRONICA],
    discogsId: "12830-Deutsch-Amerikanische-Freundschaft",
    bio: "",
    bioLink: "",
  },
  { 
    name: "Les McCann",
    from: "Kentucky",
    youtubeClips: [
      { videoId: "tcJ4eVVK640" },
    ],
    tags: [tags.PSYCHEDELIC_JAZZ],
    discogsId: "44126-Les-McCann",
    bio: "",
    bioLink: "",
  },
  { 
    name: "Lennie Hibbert",
    from: "Jamaica",
    youtubeClips: [
      { videoId: "wPP4nOY3oXw" },
      { videoId: "bvkLTH_rOjM" },
    ],
    tags: [tags.DUB],
    discogsId: "116682-Lennie-Hibbert",
    bio: "",
    bioLink: "",
  },
  { 
    name: "New Age Steppers",
    from: "England",
    youtubeClips: [
      { videoId: "Sq31-Pjitgw" },
      { videoId: "JpJHfdyax-A" },
      { videoId: "WY5LR7GpCp8" }
    ],
    tags: [tags.DUB, tags.NO_WAVES],
    discogsId: "23698-New-Age-Steppers",
    bio: "",
    bioLink: "",
  },
  { 
    name: "CAN",
    from: "Germany",
    youtubeClips: [
      { videoId: "72fxlmd54rU" },
      { videoId: "5EH5GFP2Otk" },
      { videoId: "zBt7-FGadjw" },
      { videoId: "2dZbAFmnRVA" },
      { videoId: "2-GGVv_1ZSM" },
    ],
    tags: [tags.PSYCHEDELIC_FUNK, tags.KRAUTROCK],
    discogsId: "17203-Can",
    bio: "",
    bioLink: "",
  },
  { 
    name: "Delia Derbyshire",
    from: "",
    youtubeClips: [
      { videoId: "AaVKnRz9Inw" },
      // { videoId: "WCF_mHKBH3k" },
      { videoId: "jpdiMcEeTJA" },
      { videoId: "ZOC7Pf1XY54" },
      { videoId: "0rnF7KRqGKo" },
      { videoId: "puzHEbL4-xs" }
],
    tags: [tags.ELECTRONICA],
    discogsId: "131041-Delia-Derbyshire",
    bio: "",
    bioLink: "",
  },
  { 
    name: "A Number Of Names",
    from: "Detroit",
    youtubeClips: [
      { videoId: "8AQ193-u4Q8" },
      { videoId: "6B6l924HHDs" }
    ],
    tags: [tags.DETROIT_TECHNO, tags.NO_WAVES],
    discogsId: "",
    bio: "",
    bioLink: "",
  },
  { 
    name: "Vivien Goldman",
    from: "England",
    youtubeClips: [
      { videoId: "6v8zxSybWjo" },
      { videoId: "sNJpwTPzk2M" },
      // { videoId: "xXxWIG284Fs" },
    ],
    tags: [tags.NO_WAVES],
    discogsId: "53036-Vivien-Goldman",
    bio: "Goldman began her career as a journalist for Cassettes and Cartridges. She then became a PR officer for Atlantic Records and then Island Records, where she worked with Bob Marley. She was a writer and editor for London-based Sounds magazine in the late 1970s. In the early 1980s she began making documentaries for Channel Four television, developing and producing the world-music show Big World Cafe. Goldman lived in Paris for a year and a half, where she was a member of new wave duo Chantage, which gained modest fame in France. She released the Dirty Washing EP in 1981, with tracks produced by John Lydon and Adrian Sherwood. The EP appeared first on Ed Bahlman's iconic 99 Records imprint on 3 June 1981.",
    bioLink: "https://en.wikipedia.org/wiki/Vivien_Goldman",
  },
  { 
    name: "A Certain Ratio",
    from: "England",
    youtubeClips: [
      { videoId: "UoLlLCV5Op8" },
      { videoId: "Lc_7s3G_IIc" },
      { videoId: "L7lH7D2Ockw" },
      { videoId: "isMh1itIiuU" },
    ],
    tags: [tags.NO_WAVES],
    discogsId: "11203-A-Certain-Ratio",
    bio: "",
    bioLink: "",
  },
  { 
    name: "Alan Vega",
    from: "New York",
    youtubeClips: [
      { videoId: "OAQ2jq6vwsE" },
      { videoId: "t1hhiEHLJUg" },
      { videoId: "_CqXLpQ7SsM" },
      { videoId: "_x56yvReZBk" },
      { videoId: "dDxYqJmtzKc" },
      { videoId: "Qn0_fDjvI_s" },
    ],
    tags: [tags.NO_WAVES],
    discogsId: "54918-Alan-Vega",
    bio: "Alan Vega (born June 23, 1938, Brooklyn, New York, USA - died July 16, 2016) was an American musician, vocalist and sculptor and one half of the seminal electronic duo Suicide. Vega began his career as a visual artist, gaining notoriety for his \"light sculptures\" eventually opened his own lower Manhattan gallery space, which he dubbed the Project of Living Artists. The Project served as a stomping grounds for the likes of the New York Dolls, Television and Blondie as well as the 15-piece jazz group Reverend B., which featured a musician named Martin Rev on electric piano. Soon, Vega and Rev formed Suicide, whose minimalist, aggressive music - a fusion of Rev's ominous, repetitive keyboards and Vega's rockabilly snarl - helped pave the direction for the electronic artists of the future.",
    bioLink: BIOLINK_DISCOGS,
  },
  { 
    name: "Jamal Moss",
    from: "Chicago",
    youtubeClips: [
      { videoId: "orwH0Oi2PlA" },
      { videoId: "qBr8dWjrPF8" },
      { videoId: "P-5ehKDK_Vw" },
      { videoId: "irGNPLjVR2Q" }
    ],
    tags: [tags.ELECTRONICA, tags.HOUSE_HEAD],
    discogsId: "466022-Jamal-Moss",
    bio: "",
    bioLink: "",
  },
  { 
    name: "Gina X Performance",
    from: "Germany",
    youtubeClips: [
      { videoId: "Vq4vZNvrX7M" },
      { videoId: "FxyGud2Bi3g" },       
      { videoId: "D5iHik1Kf6k" },
      { videoId: "lpSZiuCqqZE" },
      { videoId: "QRI-bkeml5s" },
    ],
    tags: [tags.NO_WAVES, tags.DISCO],
    discogsId: "25726-Gina-X-Performance",
    bio: "",
    bioLink: "",
  },
  { 
    name: "Pylon",
    from: "Georgia",
    youtubeClips: [
      { videoId: "mVuxS3csXiE" },
      { videoId: "fZ1W4Er2MHE" },
      { videoId: "wdo3mw0Rx7Q" },
    ],
    tags: [tags.FEMME_PUNK],
    discogsId: "264419-Pylon-4",
    bio: "",
    bioLink: "",
  },
  { 
    name: "Material",
    from: "New York",
    youtubeClips: [
      { videoId: "_P0lSNm0628" },
      { videoId: "zW5DHiViQpE" },
      { videoId: "69gS1H-D104" },
      { videoId: "4YqvM1D88t8" }
    ],
    tags: [tags.NO_WAVES, tags.DISCO],
    discogsId: "8796-Material",
    bio: "",
    bioLink: "",
  },
  { 
    name: "Palais Schaumburg",
    from: "Germany",
    youtubeClips: [
      { videoId: "Ub4zXkH4z0U" },
      { videoId: "IaZwpKZokJM" },
      { videoId: "GI876rqao8A" },
      { videoId: "KGnBgsplaTc" },
    ],
    tags: [tags.ELECTRONICA],
    discogsId: "26992-Palais-Schaumburg",
    bio: "",
    bioLink: "",
  },
  { 
    name: "Gang Of Four",
    from: "England",
    youtubeClips: [
      { videoId: "2NTmgFNSLtA" },
      { videoId: "KVBfX58McgQ" },
      { videoId: "pFLx4FnNegk" },
      { videoId: "jz0JDuLYtnw" },
      { videoId: "sNdOtaHniQc" },
      { videoId: "_Pws_cquzns" },
    ],
    tags: [tags.NO_WAVES],
    discogsId: "33929-Gang-Of-Four",
    bio: "",
    bioLink: "",
  },
  { 
    name: "Jack Nitzsche",
    from: "Los Angeles",
    youtubeClips: [
      { videoId: "K6VUEY5_Zcc" },
      { videoId: "1o_5z6-OIPY" },
      { videoId: "3WGY2DqEPLM" },
    ],
    tags: [tags.SOUNDTRACK, tags.SURF_ROCK],
    discogsId: "256156-Jack-Nitzsche",
    bio: "",
    bioLink: "",
  },
  { 
    name: "Les Rallizes Dénudés",
    from: "Japan",
    youtubeClips: [
      { videoId: "uog1U_Kemlk" },
      { videoId: "-CwD6iPwQeA" },
    ],
    tags: [tags.PSYCHEDELIC_ROCK],
    discogsId: "520482-Les-Rallizes-Denudes",
    bio: "",
    bioLink: "",
  },
  { 
    name: "Piero Piccioni",
    from: "Italy",
    youtubeClips: [
      { videoId: "BthwOfELs5M" },
      { videoId: "caa0oiRZcRk" },
      { videoId: "iIjeXpHhPvQ" },
      { videoId: "lDf4DfhUUBw" },
      { videoId: "rs3s8V3xcAc" },
      { videoId: "zsH3Vfc0huc" },
      { videoId: "lRwy0D1HDV0" },
      // { videoId: "nYpf11vQ6UA" },
      { videoId: "HZFY2ohFuXk" },
      { videoId: "lCvu6e5xyow" }, 
      { videoId: "WYFKx38-Yz4" },
    ],
    tags: [tags.SOUNDTRACK, tags.HIP_HOP_SAMPLE_SOURCE],
    discogsId: "9768-Piero-Piccioni",
    bio: "",
    bioLink: "",
  },
  { 
    name: "Ernan Roch Con Las Voces Frescas",
    from: "Mexico",
    youtubeClips: [
      { videoId: "fEGdJfRwrWk" },
  //     { videoId: "" }
    ],
    tags: [tags.PSYCHEDELIC_ROCK],
    discogsId: "1611470-Ernan-Roch-Con-Las-Voces-Frescas",
    bio: "",
    bioLink: "",
  },
  { 
    name: "Three Souls In My Mind",
    from: "Mexico",
    youtubeClips: [
      { videoId: "CHGkjWZ5Aeg" },
  //     { videoId: "" }
    ],
    tags: [tags.LATIN, tags.PSYCHEDELIC_ROCK],
    discogsId: "1009673-Three-Souls-In-My-Mind",
    bio: "",
    bioLink: "",
  },
  { 
    name: "Black Dice",
    from: "New York",
    youtubeClips: [
      { videoId: "ZlgwVah6q5A" },
      { videoId: "Ns81IBZmTUM" },
      { videoId: "QiCOqYJpSno" },
      { videoId: "vnFrWrAAvR8" },
    ],
    tags: [tags.ELECTRONICA, tags.KRAUTROCK],
    discogsId: "73892-Black-Dice",
    bio: "Black Dice are an experimental group based in Brooklyn, NY (USA) originally known for their blend of noise music with rock structures which has since given way to more expansive soundscapes and a focus on more electronic instrumentation. Forming in Providence, Rhode Island (USA) in 1997, comprising members Bjorn Copeland (guitar), Hisham Bharoocha (drums) (following a short drumming stint by Lightning Bolt's Brian Chippendale), Sebastian Blanck (bass) and Eric Copeland (vocals).",
    bioLink: "discogs",
  },
  { 
    name: "Emahoy Tsegue Maryam Guebrou",
    from: "Ethiopia",
    youtubeClips: [
      { videoId: "R2sGGmh_RXw" },
      { videoId: "Lhn_8OIMWFs" },
      { videoId: "nKU7iz9RYV0" }
    ],
    tags: [tags.FOLK, tags.AFRICAN],
    discogsId: "6038009-Emahoy-Tsegue-Maryam-Guebrou",
    bio: "",
    bioLink: "",
  },
  { 
    name: "Mulatu Astatke",
    from: "Ethiopia",
    youtubeClips: [
      { videoId: "dgmiYFLbn6U" },
      { videoId: "TD6LxcxJS3s" },
      { videoId: "mB5uUEr7pIA" },
      { videoId: "fdfdShvUr-4" },
      { videoId: "ejgpiWZHH34" },
      { videoId: "CSvNhbpWz5s" },
    ],
    tags: [tags.AFRICAN, tags.PSYCHEDELIC_JAZZ],
    discogsId: "286112-Mulatu-Astatke",
    bio: "",
    bioLink: "",
  },
  { 
    name: "The Carter Family",
    from: "Virginia",
    youtubeClips: [
      { videoId: "yE3kW9-tjO8" },
  //     { videoId: "" }
    ],
    tags: [tags.FOLK],
    discogsId: "307357-The-Carter-Family",
    bio: "American traditional folk music group, formed in 1927. Their music was hugely influential for bluegrass, country, folk, and rock musicians. The original group split up when A.P. Carter and Sara Carter left in 1944, but Maybelle Carter and her daughters continued performing as The Carter Sisters. In the 1960's, The Carter Sisters reclaimed the name The Carter Family.",
    bioLink: BIOLINK_DISCOGS,
  },
  { 
    name: "Manu Dibango",
    from: "Cameroon",
    youtubeClips: [
      { videoId: "-7iEoHpiw0A" },
      // { videoId: "aWK_Josc0Og" },
      // { videoId: "Rw5XpgIhKvU" },
    ],
    tags: [tags.AFRICAN, tags.PSYCHEDELIC_FUNK],
    discogsId: "20560-Manu-Dibango",
    bio: "",
    bioLink: "",
  },
  { 
    name: "Jean-Luc Ponty",
    from: "France",
    youtubeClips: [
      { videoId: "8hV8_1v38Ho" },
      { videoId: "SXWSdErCajg" },
      { videoId: "CQ2_lAMJBnA" },
      { videoId: "IUQecB8eIIw" },
      { videoId: "bNUQBBM_c9E" },
      { videoId: "n9MvtltrlxA" },
    ],
    tags: [tags.PSYCHEDELIC_JAZZ],
    discogsId: "220594-Jean-Luc-Ponty",
    bio: "Jean-Luc Ponty (born 29 September 1942) is a French jazz violinist and composer.  One of most accomplished Jazz violinists of the 1970s, Ponty released numerous genre-bending jazz funk albums, as well as collaborated with a broad range of musical influences including Frank Zappa, Elton John, John McLaughlin/Mahavishnu Orchestra, Béla Fleck, Billy Cobham, Al Di Meola, Chick Corea, and Lalo Shifrin.",
    bioLink: BIOLINK_ORIGINAL,
  },
  { 
    name: "Cajmere",
    from: "Chicago",
    youtubeClips: [
      { videoId: "vwr_gWfMsQ0" },
      { videoId: "IyEDE0T2dyA" },
      { videoId: "hR_6D59CioE" },
      { videoId: "gQAVa7UGm6c" },
      { videoId: "FC-4-3v9zQw" },
      { videoId: "WLSF6zHdVqg" },
      { videoId: "qLAxBS0wK84" },
    ],
    tags: [tags.HOUSE_HEAD],
    discogsId: "2474-Cajmere",
    bio: "",
    bioLink: "",
  },
  { 
    name: "Green Velvet",
    from: "Chicago",
    youtubeClips: [
      { videoId: "8vsMh8sPwjI" },
      { videoId: "3_5oRtBDtfg" },
      { videoId: "L-n375nloL8" },
      { videoId: "hmaXQ8H4t4w" },
      { videoId: "Kfwxz-SSmBM" },
      { videoId: "qvARw8iGG5w" },
      { videoId: "0gVJJgDFUvM" },
      { videoId: "9zPWZeXtUTU" },
      { videoId: "isSPvgnG6iU" },
      { videoId: "d4CoDzIfF50" },
      // { videoId: "CMvyyPgYW1g" },  // why try
      { videoId: "oqC1zKQcpbk" },
      { videoId: "ajuz6u-nADY" },
      { videoId: "rQJBZ22frX4" },
      { videoId: "w6uP0wIQ9aY" },
      { videoId: "7mRJRs5FGMU" },
      { videoId: "btyLiGhvTJQ" },
      { videoId: "oLEtcf26Flo" },
      { videoId: "_Y-aZtC0vfw" },
      { videoId: "xAgTS64axEE" },
    ],
    tags: [tags.ELECTRONICA],
    discogsId: "219-Green-Velvet",
    bio: "",
    bioLink: "",
  },
  { 
    name: "Gino Soccio",
    from: "Canada",
    youtubeClips: [
      { videoId: "GxNFc41XM_w" },
      { videoId: "wZ6RbvOpZMk" },
      { videoId: "dpAuddaV_pI" }
    ],
    tags: [tags.HOUSE_HEAD, tags.DISCO],
    discogsId: "75922-Gino-Soccio",
    bio: "",
    bioLink: "",
  },
  { 
    name: "Harmonia",
    from: "Germany",
    youtubeClips: [
      { videoId: "1VNO3OB0T_E" },
      { videoId: "YUTN1_C_iOI" },
      { videoId: "iQs07Sofu8I" },
      { videoId: "DPBjSWQ8tLU" },
    ],
    tags: [tags.ELECTRONICA, tags.KRAUTROCK],
    discogsId: "190641-Harmonia",
    bio: "",
    bioLink: "",
  },
  { 
    name: "Roberto Musci",
    from: "Italy",
    youtubeClips: [
      { videoId: "pPoHYDkopzY" },
      { videoId: "g6-Wf79K_zE" }
    ],
    tags: [tags.AFRICAN],
    discogsId: "180280-Roberto-Musci",
    bio: "",
    bioLink: "",
  },
  { 
    name: "The Crazy World Of Arthur Brown",
    from: "England",
    youtubeClips: [
      { videoId: "oXK9PxUHqX0" },
    ],
    tags: [tags.PSYCHEDELIC_ROCK],
    discogsId: "280200-The-Crazy-World-Of-Arthur-Brown",
    bio: "",
    bioLink: "",
  },
  { 
    name: "The San Sebastian Strings",
    from: "",
    youtubeClips: [
      { videoId: "5Re0FCzoM9g" },
    ],
    tags: [tags.SOUNDTRACK],
    discogsId: "990048-The-San-Sebastian-Strings",
    bio: "",
    bioLink: "",
  },
  { 
    name: "Mdou Moctar",
    from: "Niger",
    youtubeClips: [
      { videoId: "Zepisq-isbg" },
      { videoId: "EYXPh5Q0PTw" },
      { videoId: "udwLcimxPNU" }
    ],
    tags: [tags.AFRICAN, tags.PSYCHEDELIC_ROCK],
    discogsId: "2374748-Mdou-Moctar",
    bio: "",
    bioLink: "",
  },
  { 
    name: "Cymande",
    from: "England",
    youtubeClips: [
      { videoId: "YcL8SvyKtE4" },
      { videoId: "SuLnxjVo6bk" }
    ],
    tags: [tags.AFRICAN, tags.PSYCHEDELIC_FUNK],
    discogsId: "59250-Cymande",
    bio: "",
    bioLink: "",
  },
  { 
    name: "Liaisons Dangereuses",
    from: "Germany",
    youtubeClips: [
      { videoId: "-Xk_ixYlJIE" },
      { videoId: "_SObYJehivY" },
      { videoId: "gzAOlaITnWk" },
      { videoId: "WuZlHOLMl1Q" },
    ],
    tags: [
      tags.ELECTRONICA,
    ],
    discogsId: "2711-Liaisons-Dangereuses",
    bio: "",
    bioLink: "",
  },
  { 
    name: "Mu",
    from: "Chicago/Japan",
    youtubeClips: [
      { videoId: "Io_qpWyk4RM" },
      { videoId: "Ylbu46WdO-w" },
      { videoId: "rGm1ukZRmlU" },
      { videoId: "M1gywpRgBpc" },
      { videoId: "cdWO7r6DnlE" },
      { videoId: "i_5mhO3PeA0" },
      { videoId: "SeQ50BERnjc" },
    ],
    tags: [
      tags.ELECTRONICA, 
      tags.HOUSE_HEAD, 
      tags.NO_WAVES, 
      tags.FEMME_PUNK
    ],
    discogsId: "75801-MU",
    bio: "",
    bioLink: "",
  },
  { 
    name: "Replikants",
    from: "Washington",
    youtubeClips: [
      { videoId: "O_1e7vlKYpQ" },
      { videoId: "w2WWp_XuwQM" },
      { videoId: "4wZiSEYBOWs" },
      { videoId: "LNGlcV1SwMQ" },
      // { videoId: "VNEfvCQPqNs" },
      { videoId: "Mh0q8kWr7iI" },
      { videoId: "z6ImbmRJM8E" },
    ],
    tags: [tags.ELECTRONICA, tags.KRAUTROCK],
    discogsId: "100441-Replikants",
    bio: "",
    bioLink: "",
  },
  { 
    name: "Atom Heart",
    from: "Germany",
    youtubeClips: [
      { videoId: "lXkYHWezTdg" },
      { videoId: "5x8u_RHdDqE" },
      { videoId: "JFDLbXBxKV8" },
      { videoId: "6hvQB6nUBYg" },
      { videoId: "zF00br8ykUo" },
      { videoId: "krR3CwmV_mQ" },
      { videoId: "fzozoqTR518" },
      { videoId: "X__g913MQyo" }
      // that gospel glitch thing
      // that one ambient tune 
    ],
    tags: [tags.ELECTRONICA, tags.LATIN],
    discogsId: "24-Atom-Heart"
  },
  {
    name: "Spectre",
    from: "",
    youtubeClips: [
      { videoId: "xendn_rnwXU" },
      { videoId: "2xAHBmCOFEw" }
    ],
    tags: [tags.ELECTRONICA, tags.HIP_HOP],
    discogsId: "4991-Spectre"
  },
  {
    name: "Kool Keith",
    from: "New York",
    youtubeClips: [
      { videoId: "-FI_0eI7qaY" },
      { videoId: "9nEffQAgMoE" },
      { videoId: "3hbreeIXccs" },
      { videoId: "AHiSf4sqG1I" },
      { videoId: "GLU2v_cX4P8" },
      { videoId: "cFcmecBefqQ" },
      { videoId: "HIDzd091J68" },
      { videoId: "Abky6hbKPpg" },
      { videoId: "2XYHJS-sLII" },
    ],
    tags: [tags.HIP_HOP],
    discogsId: "18123-Kool-Keith",
    bio: "American rapper and founding member of Ultramagnetic MC's. Better known as Kool Keith (one of his numerous aliases), has also recorded extensively both as a solo artist and as part of many groups. He worked together with many notable names in the hip hop scene, such as Ice-T (as Analog Brothers), Dan The Automator (as Dr. Octagon), Tim Dog (as Ultra), Kut Masta Kurt (as The Diesel Truckers and Masters Of Illusion) or Godfather Don (as The Cenobites)",
    bioLink: BIOLINK_DISCOGS,
  },
  {
    name: "Almon Memela",
    from: "South Africa",
    youtubeClips: [
      { videoId: "S0dV0WlhTY8" },
      { videoId: "APRGaf9Xcz4" }
    ],
    tags: [tags.AFRICAN, tags.PSYCHEDELIC_FUNK],
    discogsId: "2645555-Almon-Memela",
    bio: "South African composer, guitarist and later producer for WEA Records born in Donnybrook, KwaZulu-Natal in 1936. After briefly working at the United Tobacco Company in Durban, moved to Johannesburg in 1956 to work on the mines. In 1958 he sought to take guitar lessons at the Dorkay House, the three-storey education and performance centre purchased by Union Artists but rather than becoming a student was asked to teach the guitar lessons. Memela made his first recordings in 1959 and his early career included band work with the United Artists' productions.",
    bioLink: BIOLINK_DISCOGS,
  },
  {
    name: "Electronic System",
    from: "Belgium",
    youtubeClips: [
      { videoId: "cIwDLN2X6Rs" },
      { videoId: "YPwMQWVWPzY" },
    ],
    tags: [tags.HIP_HOP_SAMPLE_SOURCE, tags.SOUNDTRACK],
    discogsId: "185434-Electronic-System",
    bio: "In the early-to-mid 1970s, Belgian recording engineer and synthesist Daniel Lacksman née Lanckmans recorded and released a series of pop music records, using early analog synthesizers as a central sonic element. Under an admittedly confusing array of names, Lacksman (who later founded the group Telex) created music that was equal parts innovation and ear-candy accessibility. Those often happy-go-lucky records gained some popularity throughout Europe, but their lasting influence can be heard in the music of Portishead, Massive Attack, The Moog Cookbook, and Air, not to mention among the lengthy list of 21st century artists who have sampled these recordings.",
    bioLink: "https://shop.realgonemusic.com/products/electronic-system-tchip-tchip-vol-3-lp",
  },
  {
    name: "Run Wrake",
    from: "England",
    youtubeClips: [
      { videoId: "atOAr_wTa24" },
      { videoId: "6kZornX_i-Q" },
      { videoId: "fw3XyOyl47Q" },
      { videoId: "no0cEihKXfM" },
    ],
    tags: [tags.HIP_HOP, tags.ELECTRONICA],
    discogsId: "2013418-Run-Wrake",
    bio: "24 November 1965-21 October 2012 Wrake was born in 1965 as John Wrake in the Republic of Yemen to a father who was an army chaplain. He attended the Chelsea College of Art and Design, and later the Royal College of Art. He burst onto the animation scene with his student film Anyway (1990), which aired on MTV's Liquid Television...",
    bioLink: "discogs",
  },
  {
    name: "Carl Craig",
    from: "Detroit",
    youtubeClips: [
      { videoId: "XKiJDxdvH5s" },
      { videoId: "yaWObSR0B90" },
      { videoId: "rclTNn9c7Vo" },
    ],
    tags: [tags.DETROIT_TECHNO],
    discogsId: "871-Carl-Craig",
    bio: "Born: 22 May 1969 in Detroit, USA. Carl Craig was a key player in Detroit techno's second wave, following the futuristic lead of originators [a=Derrick May], [a=Kevin Saunderson], and [a=Juan Atkins], and eventually collaborating with May...",
    bioLink: BIOLINK_DISCOGS,
  },
  {
    name: "Stacey Pullen",
    from: "Detroit",
    youtubeClips: [
      { videoId: "Z0pSgX64g7w" },
      { videoId: "thZdkNZPOdI" },
      // TIZNIT!!
    ],
    tags: [tags.DETROIT_TECHNO],
    discogsId: "67226-Stacey-Pullen",
    bio: "DJ and producer from Detroit, Michigan, US. Born 1969.",
    bioLink: BIOLINK_DISCOGS,
  },
  {
    name: "François Kevorkian",
    from: "France",
    youtubeClips: [
      { videoId: "hWv1qXlixRk" },
      { videoId: "WF_SxvpS8-g" },
      { videoId: "q0oilSn7RvA" },
      { videoId: "9OFPjAP3SxA" },
    ],
    tags: [tags.DISCO, tags.NO_WAVES, tags.HOUSE_HEAD],
    discogsId: "20662-François-Kevorkian"
  },
  {
    name: "Kalyanji Anandji",
    from: "India",
    youtubeClips: [
      { videoId: "QsqH8qHJRXo" },
      { videoId: "6NkZayzLMOM" },
      { videoId: "24z0dWxeSXs" },
      { videoId: "jnwvlvPxGp4" },
      { videoId: "vaiH4dLaZ1Y" },
      { videoId: "IABt65h2GfI" },
    ],
    tags: [tags.HIP_HOP_SAMPLE_SOURCE],
    discogsId: "621178-Kalyanji-Anandji"
  },
  {
    name: "Raymond Scott",
    from: "New York",
    youtubeClips: [
      { videoId: "DKJmG4bzd8Q" },
      { videoId: "CZeZw6qBYL4" },
      { videoId: "y6OTXhtZbWQ" },
      { videoId: "dy77ioKI4lQ" },
      { videoId: "5A052VLTZ_I" },
      { videoId: "f0LGPjJ5JJg" },
      { videoId: "MF4418eWZ3c" },
      { videoId: "rbFd-8NPI5Y" },
      { videoId: "HnzLconK4Tw" },

    ],
    tags: [tags.ELECTRONICA],
    discogsId: "26383-Raymond-Scott"
  },
  {
    name: "Avi Paul Weinstein",
    from: "USA",
    youtubeClips: [
      { videoId: "JNo8g97BuHg" },
      { videoId: "fEJXU7aH0M0" },
    ],
    tags: [tags.KRAUTROCK],
    discogsId: ""
  },
  {
    name: "Aphex Twin",
    from: "Ireland",
    youtubeClips: [
      { videoId: "3Ew26ShaNbg" },
      { videoId: "DGrFH2Aj71U" },
      { videoId: "2gFKfxIBrKA" },
      { videoId: "4UwjemGUVXE" },
      { videoId: "qgD5s82P2Jk" },
      { videoId: "UM1LMCxikmA" },
      { videoId: "926fiS2kvt8" },
      { videoId: "4KD8kWksOmc" },
      { videoId: "VxRTmO1QE-Y" },
      { videoId: "Ol_UYJdGB9g" },
      { videoId: "YxRGw6TCsXI" },
      { videoId: "41XuyoUu1G8" },
    ],
    tags: [tags.ELECTRONICA],
    discogsId: "45-Aphex-Twin"
  },
  {
    name: "PUSH/PULL",
    from: "New York",
    youtubeClips: [
      { videoId: "cPmxTjU4i-Q" }
    ],
    tags: [tags.HOUSE_HEAD, tags.DETROIT_TECHNO],
    discogsId: "214901-PushPull"
  },
  // {
  //   name: "Dick Dale",
  //   from: "Boston",
  //   avatar: "",
  //   youtubeClips: [
  //     // { videoId: "" },
  //   ],
  //   tags: [tags.SURF_ROCK],
  //   discogsId: "291512-Dick-Dale"
  // },
  {
    name: "Link Wray",
    from: "North Carolina",
    youtubeClips: [
      { videoId: "du2gunyGjIw" },
      { videoId: "ucTg6rZJCu4" },
      { videoId: "Yy4T2T8q4HI" },
    ],
    tags: [tags.SURF_ROCK],
    discogsId: "246644-Link-Wray"
  },
  {
    name: "Gogo Penguin",
    from: "England",
    youtubeClips: [
      { videoId: "LIHJDjRkfIU" },
      { vidoeId: "IgOyFzAAYNA" },
      { videoId: "7J5BWjtWGaM" },
    ],
    tags: [tags.KRAUTROCK],
    discogsId: "2995691-GoGo-Penguin"
  },
  {
    name: "Auntie Flo",
    from: "Scotland",
    youtubeClips: [
      { videoId: "2r-i7vb1qC8" },
      { videoId: "gWjxeS6c4ek" },
      { videoId: "TFlArFrWQ5g" },
    ],
    tags: [
      tags.KRAUTROCK, 
      tags.DETROIT_TECHNO
    ],
    discogsId: "2195918-Auntie-Flo"
  },
  {
    name: "Puccio Roelens",
    from: "Italy",
    youtubeClips: [
      { videoId: "QJ8Y_MJT6zU" },
      { videoId: "HG5qILTyIDc" },
      { videoId: "1lzBlBCLkWA" },
    ],
    tags: [
      tags.SOUNDTRACK, 
      tags.HIP_HOP_SAMPLE_SOURCE, 
    ],
    discogsId: "261016-Puccio-Roelens",
    bio: "Puccio Roelens, pseudonym of Amleto Armando Roelens (Genoa, 1919 September 15, - Rome, 1985 July 30), was an Italian pianist, arranger, conductor, composer and record producer.",
    bioLink: BIOLINK_DISCOGS,
  },
  {
    name: "Alessandro Alessandroni",
    from: "Italy",
    youtubeClips: [
      { videoId: "2y_XKOLHCBU" },
      { videoId: "eMsoeJU2LtY" },
    ],
    tags: [
      tags.SOUNDTRACK, 
      tags.HIP_HOP_SAMPLE_SOURCE, 
    ],
    discogsId: "130243-Alessandro-Alessandroni",
    bio: "Alessandro Alessandroni (born March 18, 1925, Rome, Italy - died March 26, 2017, Rome, Italy) was an Italian composer, arranger, vocalist, whistler, conductor and multi-instrumentalist (guitar, sitar, keyboards, mandolin, mandocello, accordion, banjo, flute, harmonica, jew's harp, recorder, melodica and ocarina).",
    bioLink: BIOLINK_DISCOGS,
  },
  {
    name: "Rahul Dev Burman",
    from: "India",
    youtubeClips: [
      { videoId: "Zf8pzwI2dm8" },
      { videoId: "0WBorOBwRrs" },
      { videoId: "Sh9zFRSZ9I0" },
      { videoId: "TiMgpd8qf2s" },
      { videoId: "Ky4dtwDQSEw" },
    ],
    tags: [
      tags.SOUNDTRACK, 
      tags.HIP_HOP_SAMPLE_SOURCE, 
    ],
    discogsId: "621180-R-D-Burman"
  },
  {
    name: "Savanna",
    from: "England",
    youtubeClips: [
      { videoId: "LtvXViNg3Rs" },
      { videoId: "zTUxcgCKSZM" },
    ],
    tags: [
      tags.DISCO, 
      tags.PSYCHEDELIC_FUNK,
    ],
    discogsId: "174510-Savanna-2"
  },
  {
    name: "Los Monstruos",
    from: "Mexico",
    youtubeClips: [
      { videoId: "PIXe3uxFRDs" },
      { videoId: "bBvdwRLucf0" },

    ],
    tags: [
      tags.LATIN, tags.SURF_ROCK, 
    ],
    discogsId: "1153070-Los-Monstruos"
  },
  {
    name: "Rinder and Lewis",
    from: "Los Angeles",
    youtubeClips: [
      { videoId: "oF1XuqYhTxQ" },
      { videoId: "aeRAlFbdXAI" },
      { videoId: "bWPni4t8QCk" },
      { videoId: "kR-vweD9-Bg" },      
    ],
    tags: [
      tags.DISCO,
      tags.NO_WAVES 
    ],
    discogsId: "126919-Rinder-Lewis"
  },
  {
    name: "Roger Webb",
    from: "England",
    youtubeClips: [
      { videoId: "eELesTfsCiA" },
      { videoId: "rFuyZIWqBLQ" },
      { videoId: "sitydkcBux0" },
    ],
    tags: [
      tags.SOUNDTRACK, 
      tags.HIP_HOP_SAMPLE_SOURCE 
    ],
    discogsId: "61485-Roger-Webb",
    bio: "",
    bioLink: "",
  },
  { 
    name: "Arthur Russell",
    from: "New York",
    youtubeClips: [
      { videoId: "ZN5yz2koiIA" },
      { videoId: "JHimm2j_rYY" },
      { videoId: "MUjspzbWNwo" },
      { videoId: "rTQXz7HnBZ8" },
      { videoId: "M3iiXncFo1Y" },
      { videoId: "aVCY4nUC7oo" },
      { videoId: "uNKwr1Ne9G8" },
      { videoId: "u-OZokZbaUs" },
      { videoId: "dD5TPgTvjts" },
    ],
    tags: [tags.NO_WAVES, tags.DISCO],
    discogsId: "23524-Arthur-Russell",
    bio: "",
    bioLink: "",
  },
  { 
    name: "DJ Spooky",
    from: "Washington D.C.",
    youtubeClips: [
      { videoId: "bXXA1gytWcc" },
      { videoId: "y50HXQA20Jc" },
      { videoId: "08MXmoL3rYk" },
      { videoId: "PMOZzlu0zvU" },
      { videoId: "Hjk_DY4w4UY" },
      { videoId: "t2BLNRUvsF0" },
      { videoId: "5WkVkAD1Azw" },
      { videoId: "a9bhBXGaJ0w" },
      { videoId: "uJspvQQ6Qo8" },
      // { videoId: "Rk1jKl6FoaI" }, ibid
      // { videoId: "vtBN8xdqnF0" }, ???
      { videoId: "bdOzSId3DQQ" },
      { videoId: "yai_l8F9qWM" }

    ],
    tags: [
      tags.PSYCHEDELIC_JAZZ, 
      tags.HIP_HOP
    ],
    discogsId: "3214-DJ-Spooky",
    bio: "",
    bioLink: "",
  },
  { 
    name: "Vincent Montana",
    from: "Philadelphia",
    youtubeClips: [
      { videoId: "wRuVwlJ7ppw" },  // get better version
      { videoId: "fJX4F_eDbR4" },
      { videoId: "5o-5iRZKcRg" },
      { videoId: "BlMfRL5bjVc" },
      { videoId: "3_eSfFMduoI" },
      { videoId: "p6NV6NzBE5g" },
      // { videoId: "dfmNIGBt_Xo" },  instrumental? 
      { videoId: "axZpwetQUt0" },
    ],
    tags: [tags.DISCO],
    discogsId: "170322-Vincent-Montana-Jr",
    bio: "",
    bioLink: "",
  },
  { 
    name: "Alan Lomax",
    from: "",
    youtubeClips: [
      { videoId: "FfweD19oUUA" },
      { videoId: "K_DOnKJ232M" },
      { videoId: "_zlfH0DZD-I" },
      { videoId: "FfweD19oUUA" },
    ],
    tags: [tags.FOLK, tags.BLUES],
    discogsId: "468451-Alan-Lomax",
    bio: "American folklorist and musicologist, born 31 January 1915, Austin, Texas, USA and died 19 July 2002, Safety Harbor, Florida, USA. Son of John A. Lomax. Collected and edited the contents of the World Library Of Folk And Primitive Music, Southern Journey, and The Folk Songs Of Britain. An American ethnomusicologist, best known for his numerous field recordings of folk music of the 20th century. He was also a musician himself, as well as a folklorist, archivist, writer, scholar, political activist, oral historian, and film-maker. Lomax produced recordings, concerts, and radio shows in the US and in England, which played an important role in preserving folk music traditions in both countries, and helped start both the American and British folk revivals of the 1940s, 1950s and early 1960s.",
    bioLink: BIOLINK_DISCOGS,
  },
  { 
    name: "Lead Belly",
    from: "Louisinana",
    youtubeClips: [
      { videoId: "PsfcUZBMSSg" },
      { videoId: "SJUSGuNxt-4" },
      { videoId: "ye2N_2ce3QE" },
      { videoId: "y5tOpyipNJs" },
      { videoId: "X5Wzilk9NLY" },
    ],
    tags: [tags.FOLK, tags.BLUES],
    discogsId: "468451-Alan-Lomax",
    bio: "Huddie William Ledbetter (January 23, 1888 - December 6, 1949), better known by the stage name Lead Belly, was an American folk and blues singer, musician, and songwriter notable for his strong vocals, virtuosity on the twelve-string guitar, and the folk standards he introduced.  Lead Belly usually played a twelve-string guitar, but he also played the piano, mandolin, harmonica, violin, and windjammer.[2] In some of his recordings, he sang while clapping his hands or stomping his foot.  Lead Belly's songs covered a wide range of genres and topics including gospel music; blues about women, liquor, prison life, and racism; and folk songs about cowboys, prison, work, sailors, cattle herding, and dancing.",
    bioLink: "https://en.wikipedia.org/wiki/Lead_Belly",
  },
  { 
    name: "Les Georges Lenningrad",
    from: "",
    youtubeClips: [
      { videoId: "5uGnFx2PZJw" },
      { videoId: "R9PnTe98Gxw" },
      { videoId: "ZLXWU-l9iOQ" },
    ],
    tags: [tags.FEMME_PUNK],
    discogsId: "132789-Les-Georges-Leningrad",
    bio: "",
    bioLink: "",
  },
  { 
    name: "Alan Tew",
    from: "England",
    youtubeClips: [
      { videoId: "nq5rdt_YHVQ" },
      { videoId: "-Cb2XHKjQhY" },
      { videoId: "tpExEwF0CzI" },
      { videoId: "T9U-FZYjO-E" },
      { videoId: "HzsFyv0Q-V0" },
    ],
    tags: [tags.SOUNDTRACK, tags.HIP_HOP_SAMPLE_SOURCE],
    discogsId: "177078-Alan-Tew",
    bio: "",
    bioLink: "",
  },
  {
    name: "YĪN YĪN",
    from: "The Netherlands",
    youtubeClips: [
      { videoId: "HEWq78g04HM" },
      { videoId: "XGchDYtrsHM" },
      { videoId: "wvuEQurocVQ" },
    ],
    tags: [tags.SOUNDTRACK, tags.HIP_HOP_SAMPLE_SOURCE],
    discogsId: "6870311-YĪN-YĪN",
    bio: "",
    bioLink: "",
  },
  {
    name: "Yussef Kamaal",
    from: "England",
    youtubeClips: [
      { videoId: "7-83DLCEOgI" },
      { videoId: "bYUR38Yo8aw" },
    ],
    tags: [tags.PSYCHEDELIC_JAZZ],
    discogsId: "5269272-Yussef-Kamaal",
    bio: "",
    bioLink: "",
  },
  {
    name: "Dexter Wansel",
    from: "Philadelphia",
    youtubeClips: [
      { videoId: "QfFJ5jZxyWY" },
      { videoId: "UNR-siiH_ek" },
    ],
    tags: [
      tags.PSYCHEDELIC_JAZZ, 
      tags.PSYCHEDELIC_FUNK, 
      tags.HIP_HOP_SAMPLE_SOURCE
    ],
    discogsId: "20559-Dexter-Wansel",
    bio: "",
    bioLink: "",
  },
  {
    name: "Destroyers",
    from: "New York",
    youtubeClips: [
      { videoId: "UldZerpi9TE" },
      { videoId: "s8m32ldBl3I" },
    ],
    tags: [tags.DISCO],
    discogsId: "421196-Destroyers-2",
    bio: "",
    bioLink: "",
  },
  {
    name: "Connan Mockasin",
    from: "New Zealand",
    youtubeClips: [
      { videoId: "KqrWLIgLYIU" },
      { videoId: "HkNwuY2JUHQ" },
      { videoId: "E7CaTJ2SvG8" },
      { videoId: "Teyy1A_AJso" },
    ],
    tags: [
      tags.KRAUTROCK
    ],
    discogsId: "1371297-Connan-Mockasin",
    bio: "",
    bioLink: "",
  },
  {
    name: "Tom Tom Club",
    from: "",
    youtubeClips: [
      { videoId: "WcSpdC7GCHE" },
      { videoId: "lKeP_ceBw7k" },
      { videoId: "aCWCF19nUhA" },
    ],
    tags: [
      tags.DISCO,
      tags.NO_WAVES,
    ],
    discogsId: "48404-Tom-Tom-Club",
    bio: "",
    bioLink: "",
  },
  {
    name: "Danny Krivit",
    from: "New York",
    youtubeClips: [
      { videoId: "2LAv4x6JQQk" },
      { videoId: "6FSq566xB-M" },
    ],
    tags: [
      tags.DISCO
    ],
    discogsId: "3482-Danny-Krivit",
    bio: "A legend of New York club culture, Danny Krivit came through the heyday of '70s / '80s New York clubbing before joining Francois Kevorkian and Joe Claussell for the '90s Body And Soul parties. As a producer, he has created over 400 disco edits = Strut's 'Edits By Mr. K' compilation series collects together some of the finest.",
    bioLink: "https://dannykrivit.bandcamp.com/",
  },
  // {
  //   name: "Michael Leonhart & The Avramina 7",
  //   from: "",
  //   avatar: "",
  //   youtubeClips: [
  //     { videoId: "9Hc3Ohk-Y-Q" },
  //     { videoId: "5J82FFhburk" },
  //   ],
  //   tags: [
  //     tags.PSYCHEDELIC_FUNK, 
  //     tags.KRAUTROCK,
  //     tags.HIP_HOP_SAMPLE_SOURCE
  //   ],
  //   discogsId: "274810-Michael-Leonhart"
  // },  
  {
    name: "Glenn",
    from: "Germany",
    youtubeClips: [
      { videoId: "xv86DLPP6LQ" },
      // { videoId: "V1dQLw3puCc" },
    ],
    tags: [
      tags.NO_WAVES, 
    ],
    discogsId: "143301-Glenn",
    bio: "",
    bioLink: "",
  },
  {
    name: "Stanley Myers",
    from: "England",
    youtubeClips: [
      { videoId: "OcaJLruEkr0" },
      // { videoId: "" },
    ],
    tags: [
      tags.SOUNDTRACK,
      tags.HIP_HOP_SAMPLE_SOURCE
    ],
    discogsId: "59655-Stanley-Myers",
    bio: "Stanley Myers (6 October 1930 = 9 November 1993) was an English composer and conductor,[1] who scored over sixty films and television series, working closely with filmmakers Nicolas Roeg, Jerzy Skolimowski and Volker Schlöndorff.[2] He is best known for his guitar piece \"Cavatina\", composed for the 1970 film The Walking Stick and later used as the theme for The Deer Hunter.",
    bioLink: "https://en.wikipedia.org/wiki/Stanley_Myers",
  },
  {
    name: "Joe Louis",
    from: "Chicago",
    youtubeClips: [
      { videoId: "ce9wE4o2FNw" },
      { videoId: "GX_Qn6rodFM" },
    ],
    tags: [
      tags.HOUSE_HEAD,
      tags.DETROIT_TECHNO
    ],
    discogsId: ""
  },   
  {
    name: "DJ Rush",
    from: "Chicago",
    youtubeClips: [
      { videoId: "Ksq7a9D2EX4" },
      { videoId: "XagTSd0ZWmk" },
      { videoId: "gCvkHFt-Wp4" },
      { videoId: "3mDRUcmccrk" },
      { videoId: "dwZS47cqF5E" },
      { videoId: "Svk5fyHaqCU" },
    ],
    tags: [
      tags.DETROIT_TECHNO
    ],
    discogsId: "2063-DJ-Rush"
  },
  // {
  //   name: "Marlon Craft",
  //   from: "New York",
  //   avatar: "",
  //   youtubeClips: [
  //     { videoId: "Aqo-hyxjCYE" },
  //     { videoId: "aa0Uj_d2DTM" },
  //     { videoId: "tYojNZsWhGI" },
  //     { videoId: "tuHEP2rINSg" },
  //     { videoId: "KfgOD5CalF8" },
  //     { videoId: "neHaGD_pI2A" },
  //   ],
  //   tags: [
  //     tags.HIP_HOP,
  //   ],
  //   discogsId: "6064046-Marlon-Craft"
  // },
  {
    name: "Immortal Technique",
    from: "",
    youtubeClips: [
      { videoId: "RISmtCdvD4Q" },
      { videoId: "eklu7UjxeA8" },
      { videoId: "qggxTtnKTMo" },
    ],
    tags: [
      tags.HIP_HOP,
    ],
    discogsId: "188694-Immortal-Technique",
    bio: "Felipe Andres Coronel (born February 19, 1978), better known by the stage name Immortal Technique, is an American rapper. Most of his lyrics focus on controversial issues in global politics, from a radical left-wing perspective.  Immortal Technique seeks to retain control over his production, and has stated in his music that record companies, not artists themselves, profit the most from mass production and marketing of music.",
    bioLink: "https://en.wikipedia.org/wiki/Immortal_Technique",
  },
  {
    name: "The Revolutionaries",
    from: "Jamaica",
    youtubeClips: [
      { videoId: "cBkq9BnxDmY" },
      { videoId: "ox3FogGkNDw" },
    ],
    tags: [
      tags.DUB,
    ],
    discogsId: "82211-The-Revolutionaries",
    bio: "Jamaican backing band, in-house session band for Jo Jo Hookim's Channel One label.",
    bioLink: BIOLINK_DISCOGS,
  },
  {
    name: "Rotary Connection",
    from: "",
    youtubeClips: [
      { videoId: "fkbml-TFY0U" },
      { videoId: "bbgGEIqKxZU" },
    ],
    tags: [
      tags.HIP_HOP_SAMPLE_SOURCE,
      tags.PSYCHEDELIC_FUNK
    ],
    discogsId: "8286-Rotary-Connection",
    bio: "",
    bioLink: "",
  },
  {
    name: "Jody \"Fingers\" Finch",
    from: "Chicago",
    youtubeClips: [
      { videoId: "t98iOjiUS08" },
    ],
    tags: [
      tags.DETROIT_TECHNO,
      tags.HOUSE_HEAD
    ],
    discogsId: "322545-Jody-Fingers-Finch",
    bio: "",
    bioLink: "",
  },
  {
    name: "Brian Bennett",
    from: "England",
    youtubeClips: [
      { videoId: "Hs_nzDI0PuQ" },
      { videoId: "kY0i4bL9eSo" },
      { videoId: "Ao5uiWUzMx4" },
    ],
    tags: [
      tags.SOUNDTRACK,
      tags.HIP_HOP_SAMPLE_SOURCE
    ],
    discogsId: "108870-Brian-Bennett",
    bio: "UK drummer and percussionist since the 1950s (* 09 February 1940 in London, England). Joined [a1290833] in 1961. Since the mid 1970s arranger, conductor and record producer, composer for film and TV.",
    bioLink: BIOLINK_DISCOGS,
  },
  {
    name: "Edwin Birdsong",
    from: "Los Angeles",
    youtubeClips: [
      { videoId: "2PgZLlaqSUg" },
      { videoId: "ygJrk12kTYE" },
    ],
    tags: [
      tags.DISCO,
      tags.NO_WAVES,
      tags.PSYCHEDELIC_FUNK,
    ],
    discogsId: "141386-Edwin-Birdsong",
    bio: "",
    bioLink: "",
  },
  {
    name: "The 24-Carat Black",
    from: "Cincinatti",
    youtubeClips: [
      { videoId: "MKUwgi6aLE4" },
      // { videoId: "PXVpNZK9EKY" },
      // { videoId: "zS2HlGwIhzo" },
      { videoId: "ELkiRMjbc7k" },
    ],
    tags: [
      tags.HIP_HOP_SAMPLE_SOURCE
    ],
    discogsId: "38199-24-Carat-Black",
    bio: "American soul group from Cincinnati, Ohio. Initially called [Ditalians](https://www.discogs.com/artist/1277297-Ditalians). Several original members have later formed [Shotgun (2)](https://www.discogs.com/artist/136279-Shotgun-2)",
    bioLink: BIOLINK_DISCOGS,
  },
  {
    name: "Juan Atkins",
    from: "Detroit",
    youtubeClips: [
      { videoId: "lP53ypyiqyM" },
      { videoId: "Y1q3af3NuOU" },
      { videoId: "pkbEBWJ43xM" },
      { videoId: "ueuZmQC7L0o" },
      { videoId: "KNz01ty-kTQ" },
    ],
    tags: [
      tags.DETROIT_TECHNO
    ],
    discogsId: "1102-Juan-Atkins",
    bio: "A major electronic music pioneer from Detroit, Juan appeared behind aliases such as Cybotron, Model 500, and Infiniti releasing many classics of Detroit techno.  The 1982 electro track \"Clear\", recorded by Atkins and Rick Davis as Cybotron, is often considered the first proto-techno track. Continuing to experiment by fusing the extra-terrestrial funk of Parliament Funkadelic with the futuristic rhythms and hard math of Kraftwerk and the progressive dance theorems proposed by Giorgio Moroder, the Model 500 12\"s on his own label Metroplex laid the blueprint for Detroit techno.",
    bioLink: BIOLINK_DISCOGS,
  },
  {
    name: "Spoonie Gee",
    from: "New York",
    youtubeClips: [
      { videoId: "bxN1xrLRvGU" },
      { videoId: "bRnSm0LvDy4" },
      { videoId: "IydP1lUzFWQ" },
    ],
    tags: [
      tags.HIP_HOP,
      tags.DISCO,
    ],
    discogsId: "4839-Spoonie-Gee",
    bio: "",
    bioLink: "",
  },
  {
    name: "Lady B",
    from: "New York",
    youtubeClips: [
      { videoId: "cmTssM-tAuw" },
    ],
    tags: [
      tags.HIP_HOP,
      tags.DISCO
    ],
    discogsId: "67680-Lady-B-2",
    bio: "Old school rapper from Philadelphia who recorded one of the very first female rap records. In the mid-80s she moved into radio becoming a fixture on the Philly hip-hop scene right up to the present day. She currently is a DJ on WRNB 107.9fm Philadelphia. ",
    bioLink: BIOLINK_DISCOGS,
  },  
  {
    name: "Abstract Truth",
    from: "South Africa",
    youtubeClips: [
      { videoId: "Xkx3SovKOlY" },
    ],
    tags: [
      tags.PSYCHEDELIC_ROCK,
      tags.AFRICAN
    ],
    discogsId: "1548408-Abstract-Truth-3"
  },  
  {
    name: "T.P. Orchestre Poly-Rythmo",
    from: "Benin",
    youtubeClips: [
      { videoId: "LXIg-Mp-ZRI" },
      // { videoId: "M0c34HLss-w" },
      // { videoId: "Zoj9f8A0fJk" },
    ],
    tags: [
      tags.PSYCHEDELIC_FUNK,
      tags.PSYCHEDELIC_ROCK,
      tags.AFRICAN
    ],
    discogsId: "357255-TP-Orchestre-Poly-Rythmo"
  },  
  {
    name: "The Funkees",
    from: "Nigeria",
    youtubeClips: [
      { videoId: "xUTxYenpr-o" },
      { videoId: "sIA4kTMbfSg" },
      { videoId: "Y53ZsTT2_Ek" },
    ],
    tags: [
      tags.PSYCHEDELIC_FUNK,
      tags.PSYCHEDELIC_ROCK,
      tags.AFRICAN
    ],
    discogsId: "286116-The-Funkees"
  },  
  {
    name: "Bola Johnson",
    from: "Nigeria",
    youtubeClips: [
      { videoId: "BDS2bsKMgSI" },
      { videoId: "eRC2DKklxGc" },
      { videoId: "13fN1CCDAss" },
    ],
    tags: [
      tags.PSYCHEDELIC_FUNK,
      tags.AFRICAN
    ],
    discogsId: "392088-Bola-Johnson"
  },  
  {
    name: "Bush Tetras",
    from: "England",
    youtubeClips: [
      { videoId: "D8WwYpz9z0Y" },
      { videoId: "h1zBxfr-LEc" },
      { videoId: "4hwHy_e92uQ" },
      { videoId: "2-nihfhTr3E" },
      // { videoId: "vemP-UghHPs" },
      { videoId: "8rNCHhsK2co" },
      { videoId: "W81iS_0zenw" },
    ],
    tags: [
      tags.FEMME_PUNK,
      tags.NO_WAVES,
    ],
    discogsId: "132791-Delta-5"
  },   
  {
    name: "Colored Music",
    from: "Japan",
    youtubeClips: [
      { videoId: "otpHONcxu_A" },
      { videoId: "lF_JfjRZW5A" },
      // { videoId: "Ok5s0WOvJSc" },
    ],
    tags: [
      tags.PSYCHEDELIC_JAZZ,
      tags.NO_WAVES,
      tags.DISCO,
    ],
    discogsId: "259144-Colored-Music"
  },  
  {
    name: "Geoff Bastow",
    from: "England",
    youtubeClips: [
      { videoId: "TEJDKpjVCXU" },
      { videoId: "9vEvGUQgtKs" },
    ],
    tags: [
      tags.SOUNDTRACK,
    ],
    discogsId: "132317-Geoff-Bastow"
  },    
  {
    name: "Throbbing Gristle",
    from: "England",
    youtubeClips: [
      { videoId: "RzcZQ2NZa8w" },
      { videoId: "trEo8O_ZftI" },
      { videoId: "XEusQWIlKao" },
      { videoId: "dISQz-QqNBU" },
    ],
    tags: [
      tags.ELECTRONICA,
      tags.KRAUTROCK
    ],
    discogsId: "12589-Throbbing-Gristle",
    bio: "Industrial group. Growing out of the extreme performance art group [a=COUM Transmissions]. Their first performances were in 1976 and their last gig was in San Francisco in 1981 (recorded and released as \"Mission Of Dead Souls\"), Throbbing Gristle officially began at September 3, 1975 and they officially split on June 23, 1981...",
    bioLink: "discogs",
  },   
  {
    name: "Patricia Harris",
    from: "",
    youtubeClips: [
      { videoId: "q78r_DUMNx0" },
    ],
    tags: [
      tags.DISCO,
      tags.HOUSE_HEAD
    ],
    discogsId: "227131-Patricia-Harris",
    bio: "Pop Vocalist Patricia Harris released one single in 1984 and then disappeared off the face of the earth.  The rare Italo influenced disco cover of Hot Chocolate's funk rock tune “Heaven Is…” became a underground favorite of the Chicago house scene influenced by DJs like Ron Hardy and the WBMX Hot Mix 5.  ",
    bioLink: BIOLINK_ORIGINAL,
  },   
  {
    name: "Special Request",
    from: "",
    youtubeClips: [
      { videoId: "BQR35Qgn39k" },
    ],
    tags: [
      tags.NO_WAVES,
      tags.HIP_HOP,
    ],
    discogsId: "49765-Special-Request-2"
  },   
  {
    name: "Electric Church",
    from: "",
    youtubeClips: [
      { videoId: "ba4AXjm4XAo" },
      { videoId: "lfTAjn26ObM" },
    ],
    tags: [
      tags.PSYCHEDELIC_FUNK,
    ],
    discogsId: "332441-Electric-Church"
  },   
  {
    name: "Jeff Mills",
    from: "Detroit",
    youtubeClips: [
      { videoId: "MevnBuhtvRk" },
      { videoId: "7TnIoa8BkGg" }, 
      { videoId: "9rVOkV3DDgM" },
      // { videoId: "D7Oo_ekaIN4" },
      { videoId: "7VDbsMwbaAc" },
      { videoId: "VwAmmDwcmFE" },
      { videoId: "tYLNm1Ifbfo" },
    ],
    tags: [
      tags.DETROIT_TECHNO,
    ],
    discogsId: "205-Jeff-Mills",
    bio: "American techno DJ, composer, producer, and recording artist, based in Detroit, Michigan, USA. Born: 18 June 1963 in Detroit, Michigan, USA. Jeff Mills (aka \"The Wizard\") is one of the most pioneering American names in techno music...",
    bioLink: BIOLINK_DISCOGS,
  },   
  {
    name: "Akira S & As Garotas Que Erraram",
    from: "Brazil",
    youtubeClips: [
      { videoId: "KDn8MQNBJVo" },
      { videoId: "5mTmoRqWd9E" },
      { videoId: "relc4x83Hvs" },
      // { videoId: "X2YZmSMLFVg" },q
      // { videoId: "EPBg3hG2OoA" },
    ],
    tags: [
      tags.PSYCHEDELIC_ROCK,
      tags.KRAUTROCK
    ],
    discogsId: "1014765-Akira-S-As-Garotas-Que-Erraram",
    bio: "Akira S E As Garotas Que Erraram (\"Akira S & The Girls Who Fucked Up\") were a conceptual outfit made up of Brazilian/ Japanese maverick Akira S on bass and programming and writer and activist Pedreira Antunes (formerly Número 2) on vocals and lyrics, plus Edson X on drums, Anna Ruth on bass, Corina Crawford on keyboards, Giuseppe \"Frippi\" Lenti and Miguel Barella on guitars.",
    bioLink: BIOLINK_DISCOGS,
  },   
  {
    name: "Gang 90 & Absurdettes",
    from: "Brazil",
    youtubeClips: [
      { videoId: "Sm6Wf9yM5to" },
      { videoId: "knay1whxxHs" },
      // { videoId: "YWg_HOs9j4k" },
    ],
    tags: [
      tags.KRAUTROCK,
      tags.DISCO,
      tags.NO_WAVES,
    ],
    discogsId: "320463-Gang-90",
    bio: "Gang 90 e as Absurdettes was a Brazilian rock group from the 1980s, founded by disc jockey and journalist Júlio Barroso. Her songs mixed new wave with beatnik travel, and even carried strong beats and female choir, inspired by the group B-52s. His first appearance was at the nightclub Paulicéia Desvairada in 1981. He participated in the MPB Shell Festival of the same year, with the song Lost in the Jungle, which made the group famous.",
    bioLink: "https://pt.wikipedia.org/wiki/Gang_90_e_as_Absurdettes",

  },       
  {
    name: "Jacques Loussier",
    from: "France",
    youtubeClips: [
      { videoId: "heuGW9aCZuA" },
    ],
    tags: [
      tags.SOUNDTRACK,
      tags.HIP_HOP_SAMPLE_SOURCE
    ],
    discogsId: "289960-Jacques-Loussier",
    bio: "",
    bioLink: "",
  },
  {
    name: "Fellini",
    from: "Brazil",
    youtubeClips: [
      { videoId: "r2-_UysxveQ" },
      { videoId: "-zGAyiRMSUw" },
      { videoId: "-q-QUZZnz8k" },
    ],
    tags: [
      tags.KRAUTROCK,
      tags.NO_WAVES,
    ],
    discogsId: "320460-Fellini-2",
    bio: "Fellini was a Brazilian rock band formed in São Paulo in 1984 by Cadão Volpato (vocals, harmonica), Jair Marcos (guitar), Ricardo Salvagni (drums and percussion), and former Voluntários da Pátria and Smack member Thomas Pappon (bass and occasionally other instruments). One of the most well-known bands of the Brazilian underground scene of the mid-1980s (and having a strong cult following to the present day), Fellini originally began as a straightforward post-punk band influenced by acts such as Joy Division, The Stranglers and The Durutti Column, but would gradually develop a more eclectic sonority that mixed post-punk with other genres such as MPB, new wave and samba rock, acquiring a unique, almost non-descript musical style.",
    bioLink: BIOLINK_DISCOGS,
  },
  {
    name: "AKT",
    from: "Brazil",
    youtubeClips: [
      { videoId: "bpA1Uqu8H_8" },
    ],
    tags: [
      tags.FEMME_PUNK,
      tags.LATIN,
    ],
    discogsId: "320472-AKT",
    bio: "",
    bioLink: "",
  },
  {
    name: "Doctor's Cat",
    from: "Italy",
    youtubeClips: [
      { videoId: "C5XWsx-tO_Y" },
      { videoId: "dCsM1Am7xOM" },
    ],
    tags: [
      tags.DISCO,
    ],
    discogsId: "15979-Doctors-Cat",
    bio: "",
    bioLink: "",
  },
  {
    name: "Chris Harwood",
    from: "England",
    youtubeClips: [
      { videoId: "3jziYfJD3Qc" },
      { videoId: "W9DzDQbwUP4" },
    ],
    tags: [
      tags.HIP_HOP_SAMPLE_SOURCE,
    ],
    discogsId: "725619-Christine-Harwood",
    bio: "Has anybody met Chrissie Harwood?  Let us introduce to you an elusive British artiste who made an equally elusive, immaculate LP, which in the 35 years since its original release, as if by tragic magic, has materialised into thin air. Recorded for an obscure British label it was the only record she ever made and no singles were ever released. In fact it was seldom heard beyond these shores (aside rumours of an Australian vanity pressing), and [sic] it remains one of the most sought after English female folk rock records ever released. Until now it has been a mystery amongst pop-historians, DJs and record collectors alike.",
    bioLink: "https://www.finderskeepersrecords.com/shop/christine-harwood-nice-to-meet-miss-christine/",
  },
  {
    name: "Nino Nardini",
    from: "France",
    youtubeClips: [
      { videoId: "svv2O2TYJQs" },
      { videoId: "AEfWD1XOj8w" },
      { videoId: "uyhkQxIoCx4" },
      { videoId: "nz6wJvmakiM" },
      { videoId: "95uWjdsWNFg" },
      { videoId: "DkWIqc4nKrc" },
    ],
    tags: [
      tags.SOUNDTRACK,
      tags.HIP_HOP_SAMPLE_SOURCE
    ],
    discogsId: "35303-Nino-Nardini",
    bio: "French composer, arranger, engineer, conductor and producer. Frequent collaborator of childhood friend [a44313]. Born 1912 in Paris, France. Died 1994. Georges Teperino was born in 1912, to an Italian father and French mother into a family of musicians. His father, a violinist and composer, was his main music teacher.",
    bioLink: BIOLINK_DISCOGS,
  },
  {
    name: "Manfred Hübler & Siegfried Schwab",
    from: "Germany",
    youtubeClips: [
      { videoId: "fuYguA7Tb5E" },
      { videoId: "PIgqReU99VU" },
      { videoId: "pwaWkLWhkCo" },
      { videoId: "97qIGqhQn1k" }, 
    ],
    tags: [
      tags.SOUNDTRACK,
    ],
    discogsId: ""
  },  
  {
    name: "The Invaders",
    from: "Bermuda",
    youtubeClips: [
      { videoId: "fmYcJ2q_0eU" },
      { videoId: "Ki-KwKXqreg" },
      // { videoId: "n-F9i8ttrXo" },
      { videoId: "q7zqyJnE-r4" },
    ],
    tags: [
      tags.SOUNDTRACK,
      tags.SURF_ROCK,
      tags.PSYCHEDELIC_FUNK
    ],
    discogsId: "679514-The-Invaders-3"
  },  
  {
    name: "David Matthews",
    from: "Kentucky",
    youtubeClips: [
      { videoId: "U_NEIbLpg5E" },
      // { videoId: "HFuB1pWWFsU" },
    ],
    tags: [
      tags.HIP_HOP_SAMPLE_SOURCE,
    ],
    discogsId: "386834-Dave-Matthews-3",
    bio: "Dave (or David) Matthews (* 04 March 1942 in Sonora, Kentucky) is an American Funk, Soul, Jazz and Pop artist.  Pianist, producer, arranger, conductor and bandleader, David Matthews is well known for having been arranger for James Brown in the beginning of the 70s and later has been closely associated with Creed Taylor's CTI Records.  He has also composed for television and commercial advertisement, but is also leader of both the Manhattan Jazz Orchestra and the Manhattan Jazz Quintet, two acts very popular in Japan.",
    bioLink: BIOLINK_DISCOGS,
  },  
  {
    name: "Armin Rusch",
    from: "Germany",
    youtubeClips: [
      { videoId: "jzLsBdrgbJY" },
      { videoId: "Pp0Ej1t2d0o" },
    ],
    tags: [
      tags.SOUNDTRACK,
      tags.HIP_HOP_SAMPLE_SOURCE,
    ],
    discogsId: "363438-Armin-Rusch",
    bio: "Jazz keyboardist. Accordion player perfroming volksmusik-instrumentals.",
    bioLink: BIOLINK_DISCOGS,
  },
  {
    name: "Pharaoh Overlord",
    from: "Finland",
    youtubeClips: [
      { videoId: "02OJhfnql8c" },
      { videoId: "mei4BpeRqns" },
    ],
    tags: [
      tags.PSYCHEDELIC_ROCK,
    ],
    discogsId: "333758-Pharaoh-Overlord",
    bio: "Pharaoh Overlord is an experimental rock music band, initially featuring three members of the Finnish group Circle, Jussi Lehtisalo, Janne Westerlund and Tomi Leppänen. Originally begun as a vehicle to indulge their love of stoner rock, Pharaoh Overlord's output has become more varied, mirroring the development of their sister group. ",
    bioLink: "https://en.wikipedia.org/wiki/Pharaoh_Overlord",
  },
  {
    name: "Özdemir Erdoğan Ve Orkestrası",
    from: "Turkey",
    youtubeClips: [
      { videoId: "3xR_S-gWsgY" },
    ],
    tags: [
      tags.SURF_ROCK,
      tags.FOLK
    ],
    discogsId: "1105130-Özdemir-Erdoğan-Ve-Orkestrası",
    bio: "",
    bioLink: "",
  },
  {
    name: "Moğollar",
    from: "Turkey",
    youtubeClips: [
      { videoId: "fw67DJkB2R4" },
      { videoId: "GdddjGoHTb8" },
      { videoId: "yf6Zf-Zd-iw" },
      { videoId: "NZHQbDB80CU" },
    ],
    tags: [
      tags.SURF_ROCK,
      tags.HIP_HOP_SAMPLE_SOURCE,
    ],
    discogsId: "1105126-Moğollar",
    bio: "",
    bioLink: "",
  },
  {
    name: "Kocani Orkestar",
    from: "Macedonia",
    youtubeClips: [
      { videoId: "2eogqWiIcvU" },
    ],
    tags: [
      tags.LATIN,
    ],
    discogsId: "186782-Koçani-Orkestar",
    bio: "",
    bioLink: "",
  },
  {
    name: "Jungle",
    from: "California",
    youtubeClips: [
      { videoId: "8TykdKVpMpg" },
    ],
    tags: [
      tags.PSYCHEDELIC_FUNK,
      tags.HIP_HOP_SAMPLE_SOURCE,
    ],
    discogsId: "1038430-Jungle-4",
    bio: "",
    bioLink: "",
  },
  {
    name: "Chrissy Zebby Tembo",
    from: "Zambia",
    youtubeClips: [
      { videoId: "fEXEybdzU9Q" },
      { videoId: "zutz4TGzd5k" },
    ],
    tags: [
      tags.PSYCHEDELIC_FUNK,
      tags.PSYCHEDELIC_ROCK,
      tags.AFRICAN,
    ],
    discogsId: "1009664-Chrissy-Zebby-Tembo",
    bio: "Originally released in 1976, My Ancestors is one of the greatest releases from Zambia's Zamrock scene. \n\n The album travels the darker undercurrents of 70s rock and roll, warping and heightening the influences of Jimi, the Stones, the Beatles, Black Sabbath, and James Brown. \n\n 27 year old Chrissy “Zebby” Tembo provided drums and vocals while Paul Ngozi, one of the chief architects of the Zambian rock sound, was responsible for the aggressive guitar leads. "
  },
  {
    name: "Toncho Pilatos",
    from: "Mexico",
    youtubeClips: [
      { videoId: "vZyaqtwmuRU" },
      { videoId: "XGu95T_1CEk" },
    ],
    tags: [
      tags.PSYCHEDELIC_ROCK,
      tags.LATIN,
      tags.SURF_ROCK,
    ],
    discogsId: "",
    bio: "Toncho Pilatos was a Mexican 1970s rock band. Along with Three Souls in my Mind (later known as El Tri), it was one of the most representative predecessors of the \"under\" scene of Mexican rock. Developed as so-called \"hoyos funkies\"; their music transcended their live performances rather than commercial success.",
    bioLink: "https://en.wikipedia.org/wiki/Toncho_Pilatos",

  },  
  {
    name: "Jameszoo",
    from: "The Netherlands",
    youtubeClips: [
      { videoId: "X6z4ppiGIXk" },
      { videoId: "THYTYF4ihLs" },
      { videoId: "x3xMjrovxug" },
    ],
    tags: [
      tags.PSYCHEDELIC_ROCK,
      tags.ELECTRONICA,
      tags.KRAUTROCK
    ],
    discogsId: "1771120-Jameszoo",
    bio: "Mitchel Van Dinther, better known by his stage name Jameszoo, is a Dutch record producer from 's-Hertogenbosch, Netherlands.  Jameszoo describes his music as \"naive computer jazz\" to leave as much judgement to the listener as possible.  Dinther cites Brazilian music as a strong influence, such as composer Arthur Verocai (who later became involved with the production of Fool). When discussing the balance and mixing of electronic and acoustic elements to his music, he notes Herbie Hancock and his album Sextant saying that \"he completely nailed it\".",
    bioLink: "https://en.wikipedia.org/wiki/Jameszoo",
  },  
  {
    name: "Touchdown",
    from: "England",
    youtubeClips: [
      { videoId: "x3s1rxe5oy0" },
      { videoId: "n9FPo0ratCg" },
      { videoId: "7FqV8LbZCSs" },
    ],
    tags: [
      tags.DISCO,
      tags.NO_WAVES,
      tags.HOUSE_HEAD
    ],
    discogsId: "",
    bio: "",
    bioLink: "",
  },
  {
    name: "I:Cube",
    from: "France",
    youtubeClips: [
      { videoId: "AoA0tNL_07w" },
      { videoId: "uGKjZ6LluU4" },
      { videoId: "57wRUl8tWvs" },
      { videoId: "x43UNUntEuo" },
      { videoId: "lu3h0au28EY" },
      // { videoId: "PVSdVEWVkVA" },
    ],
    tags: [
      tags.HOUSE_HEAD,
      tags.PSYCHEDELIC_JAZZ
    ],
    discogsId: "1029-ICube",
    bio: "",
    bioLink: "",
  },
  {
    name: "Frankie Bones",
    from: "New York",
    youtubeClips: [
      { videoId: "GEFW396u-jI" },
    ],
    tags: [
      tags.DETROIT_TECHNO
    ],
    discogsId: "2742-Frankie-Bones",
    bio: "American DJ and producer, instrumental in popularising the Techno genre in Europe. Born In 1966 and brother of Adam X. started DJing in Brooklyn NYC after working for 4 months at Apexton Records, in the pressing plant and in A&R for their label, Underworld Records. Big break in his career was when he became a DJ at \"Energy\" (The Eclipse) raves in the UK.",
    bioLink: BIOLINK_DISCOGS,
  },  
  {
    name: "Francis Lai",
    from: "France",
    youtubeClips: [
      { videoId: "UTjr6DNPrNM" },
    ],
    tags: [
      tags.SOUNDTRACK
    ],
    discogsId: "135912-Francis-Lai"
  },  
  {
    name: "JD and the Evil's Dynamite Band",
    from: "",
    youtubeClips: [
      { videoId: "NjK-ZBtuvZs" },
      { videoId: "qY-NSYNXQQE" },
      { videoId: "n1lFSFx3G6w" },
      { videoId: "NXe_NjlPqbs" },
    ],
    tags: [
      tags.SURF_ROCK,
      tags.HIP_HOP_SAMPLE_SOURCE,
    ],
    discogsId: "271896-JD-amp-The-Evils-Dynamite-Band"
  },  
  // {
  //   name: "The Chantels",
  //   from: "New York",
  //   youtubeClips: [
  //     { videoId: "bFSEdcEI8dA" },
  //     { videoId: "ZtZ6buR8VfU" },
  //   ],
  //   tags: [
  //     tags.SURF_ROCK,
  //   ],
  //   discogsId: "383376-The-Chantels"
  // },  
  {
    name: "Klien & MBO",
    from: "Italy/USA",
    youtubeClips: [
      { videoId: "EzXwI9qbzvc" },
      { videoId: "79Qb1tsoYZg" },
      { videoId: "bMUlM8AkmNs" },
    ],
    tags: [
      tags.NO_WAVES,
      tags.DISCO,
      tags.HOUSE_HEAD,
    ],
    discogsId: "15977-Klein-amp-MBO"
  },  
  {
    name: "Howard Wales",
    from: "Milwaukee",
    youtubeClips: [
      { videoId: "hKEqQD1InYs" },
      { videoId: "rbYWbniDn2I" },
    ],
    tags: [
      tags.PSYCHEDELIC_FUNK,
      tags.PSYCHEDELIC_JAZZ,
    ],
    discogsId: "274439-Howard-Wales"
  },  
  {
    name: "The Wooden Glass",
    from: "",
    youtubeClips: [
      { videoId: "FUNM0u9WJVk" },
    ],
    tags: [
      tags.PSYCHEDELIC_FUNK,
    ],
    discogsId: "136481-The-Wooden-Glass"
  },      
  {
    name: "Glenn Underground",
    from: "Chicago",
    youtubeClips: [
      { videoId: "B5ZjevzU98o" },
      { videoId: "cUS5qwAxNZg" },
    ],
    tags: [
      tags.HOUSE_HEAD,
      tags.DETROIT_TECHNO,
    ],
    discogsId: "696-Glenn-Underground",
    bio: "Born in 1971. Home Town: Chicago, USA. Glenn Underground is the founding member of the Strictly Jaz Unit. He was raised on disco classics and freeform jazz in Chicago's Southside, the place where house music was born...",
    bioLink: BIOLINK_DISCOGS,
  },      
  {
    name: "Julia Lee and Her Boy Friends",
    from: "Chicago",
    youtubeClips: [
      { videoId: "8qK5NefYVb8" },
    ],
    tags: [
      tags.SURF_ROCK,
      tags.BLUES,
    ],
    discogsId: "506604-Julia-Lee-Her-Boy-Friends",
    bio: "Julia Lee (October 31, 1902 - December 8, 1958) was an American blues and dirty blues musician. Her inclusion in the latter category is mainly due to a few numbers she performed, e.g. \"King Size Papa\" and \"Snatch and Grab It”. [sic] As these titles suggest, she became best known for her trademark double entendre songs, or, as she once said, \"the songs my mother taught me not to sing\". The records were credited to 'Julia Lee and Her Boy Friends'",
    bioLink: ""
  },   
  // {
  //   name: "Melanie",
  //   from: "New York",
  //   youtubeClips: [
  //     { videoId: "p02DgHeGdyI" },
  //   ],
  //   tags: [
  //     tags.FOLK,
  //     tags.SURF_ROCK,
  //   ],
  //   discogsId: "73811-Melanie-2",
  //   bio: "American singer/songwriter (born February 3, 1947 in Astoria, New York as Melanie Anne Safka)",
  //   bioLink: BIOLINK_DISCOGS,
  // },   
  {
    name: "The Unknown Cases",
    from: "Germany",
    youtubeClips: [
      { videoId: "y7v_B4aHs7w" },
    ],
    tags: [
      tags.AFRICAN,
      tags.KRAUTROCK
    ],
    discogsId: "61945-The-Unknown-Cases"
  },   
  {
    name: "The Cryin' Shames",
    from: "England",
    youtubeClips: [
      { videoId: "vQ2wXOgvdxc" },
    ],
    tags: [
      tags.SURF_ROCK,
    ],
    discogsId: "291197-The-Cryin-Shames"
  },   
  {
    name: "Logia Sarabanda",
    from: "Uruguay",
    youtubeClips: [
      { videoId: "C1LYRiQvFmE" },
      { videoId: "NjGx5ZfAx5A" },
    ],
    tags: [
      tags.SURF_ROCK,
      tags.LATIN,
    ],
    discogsId: "865857-La-Logia-Sarabanda",
    bio: "Uruguayan band, releasing records in Peru and Mexico. The band was led and formed by composer and arranger Miguel Loubet.  Loubet was first active in the La Plata and Buenos Aires jazz scene in the 1950s, he then integrated Los Wawanco, a group of great fame who introduced the Caribbean music in South America, and in particular Argentina.",
    bioLink: BIOLINK_DISCOGS,
  }, 
  {
    name: "Sonic Youth",
    from: "New York",
    youtubeClips: [
      { videoId: "zs8UpY2YF3c" },
      { videoId: "wzsjWKVAy2Q" },
      { videoId: "Bd5OtWZS9zg" },
    ],
    tags: [
      tags.NO_WAVES,
      tags.FEMME_PUNK,
    ],
    discogsId: "17199-Sonic-Youth",
    bio: "Sonic Youth, initially comprised of guitarist / vocalists Thurston Moore and Lee Ranaldo, guitarist / bassist / vocalist Kim Gordon and drummer Richard Edson, were formed in New York City in 1981. A product of the No-Wave music scene of the late 1970s, the group had their roots in abrasive, experimental music, with Moore and Ranaldo having previously worked with the experimental composer Glenn Branca. The band were joined in 1985 by drummer Steve Shelley, and recorded 15 albums together, as well as many side and solo projects. ",
    bioLink: BIOLINK_DISCOGS,
  }, 
  {
    name: "James Chance & the Contortions",
    from: "New York",
    youtubeClips: [
      { videoId: "l1E_X7UGFro" },
      { videoId: "nKz9urG0aB8" },
      { videoId: "re6uN1lOTQw" },
    ],
    tags: [
      tags.NO_WAVES,
    ],
    discogsId: "81424-James-Chance"
  },   
  {
    name: "Coati Mundi",
    from: "New York",
    youtubeClips: [
      { videoId: "GolXdmzBWpQ" },
      { videoId: "ZuenSiOrCe8" },
    ],
    tags: [
      tags.NO_WAVES,
    ],
    discogsId: "30097-Coati-Mundi"
  }, 
  {
    name: "Magazine 60",
    from: "France",
    youtubeClips: [
      { videoId: "tp7UcFuxfM0" },
    ],
    tags: [
      tags.NO_WAVES,
      tags.DISCO,
    ],
    discogsId: "82822-Magazine-60",
    bio: "French electro-synth band composed of Dominique Regiacorte , Pierre Mastro, dit Pierre Ex Magazine 60 (El Chico) and Jean-Luc Drion Producer. They were most notable for their worldwide hit \"Don Quichotte\" which synth riff was sampled on Will.I.Am's \"I Got It From My Mama\" in which he needed to credit both members in his release.",
    bioLink: BIOLINK_DISCOGS,
  },   
  {
    name: "Charlie",
    from: "Italy",
    youtubeClips: [
      { videoId: "HXAoo1DsRnI" },
    ],
    tags: [
      tags.NO_WAVES,
      tags.DISCO,
    ],
    discogsId: "15971-Charlie",
    bio: "Italo Disco project, formed between Maurice Cavalieri and Giorgio Stefani in Italy in 1983.",
    bioLink: BIOLINK_DISCOGS,
  },     
  {
    name: "Jackey Beavers",
    from: "Georgia",
    youtubeClips: [
      { videoId: "FpR_51SEuyc" },
    ],
    tags: [
      tags.DISCO,
    ],
    discogsId: "623978-Jackey-Beavers"
  },     
  {
    name: "Freeez",
    from: "England",
    youtubeClips: [
      { videoId: "nYY_83ZkZwQ" },
    ],
    tags: [
      tags.DISCO,
    ],
    discogsId: "8670-Freeez",
    bio: "",
    bioLink: "",
  },
  {
    name: "Alphonse Mouzon",
    from: "South Carolina",
    youtubeClips: [
      { videoId: "FT--5iQA0GA" },
    ],
    tags: [
      tags.DISCO,
    ],
    discogsId: "92220-Alphonse-Mouzon",
    bio: "Alphonse Mouzon (born November 21, 1948, Charleston, South Carolina, USA - died December 25, 2016) was an American jazz-fusion drummer and percussionist, a founding member of Weather Report, and the CEO of Tenacious Records. He was also a composer, arranger, and producer, as well as an actor.",
    bioLink: BIOLINK_DISCOGS,
  },
  {
    name: "Pete Jolly",
    from: "Los Angeles",
    youtubeClips: [
      { videoId: "r9MF_Q1gtEA" },
      { videoId: "sgS5wyQjKy8" },
    ],
    tags: [
      tags.SOUNDTRACK,
      tags.HIP_HOP_SAMPLE_SOURCE
    ],
    discogsId: "168453-Pete-Jolly",
    bio: "American jazz pianist and accordion player. In 1940, aged 8, he appeared on the radio show [i]Hobby Lobby[/i] \"The Boy Wonder Accordionist\". Born June 5, 1932 - New Haven, Connecticut, USA Died November 6, 2004 - Pasadena, California, USA",
    bioLink: BIOLINK_DISCOGS,
  },  
  {
    name: "Morning, Noon & Night",
    from: "",
    youtubeClips: [
      { videoId: "otQ0mzgkfyg" },
    ],
    tags: [
      tags.DISCO,
      tags.PSYCHEDELIC_FUNK,
    ],
    discogsId: "496453-Morning-Noon-Night",
    bio: "Morning Noon and Night were a six piece group who released one album for the United Artists subsidiary Roadshow Record label in 1977.",
    bioLink: BIOLINK_DISCOGS,
  },  
  {
    name: "Juggy Murray Jones",
    from: "New York",
    youtubeClips: [
      { videoId: "fd122QQ7qvk" },
    ],
    tags: [
      tags.DISCO,
    ],
    discogsId: "77020-Juggy-Murray-Jones",
    bio: "Juggy Murray (November 24, 1923 = February 8, 2005) was an American record label owner, producer and singer-songwriter. He co-founded Sue Records which launched the career of Ike & Tina Turner. Subsidiary labels under the Sue were Symbol, Broadway, Eastern and Crackerjack. Murray recorded artists, including Don Covay, Jimmy McGriff, Inez Foxx, and Baby Washington, as well as releasing solo records.",
    bioLink: "https://en.wikipedia.org/wiki/Juggy_Murray",
  },  
  {
    name: "The Whispers",
    from: "Los Angeles",
    youtubeClips: [
      { videoId: "d6aRvVTSC0I" },
    ],
    tags: [
      tags.DISCO,
    ],
    discogsId: "51979-The-Whispers",
    bio: "The Whispers formed in 1963 in Watts, California. The original members included identical twin brothers Wallace \"Scotty\" and Walter Scott, along with Gordy Harmon, Marcus Hutson, and Nicholas Caldwell. After being invited to the San Francisco Bay Area in 1966 by Sly Stone, the group relocated to that area where they began developing a reputation as a show-stopping live act. ",
    bioLink: BIOLINK_DISCOGS,
  },  
  {
    name: "Grauzone",
    from: "Switzerland",
    youtubeClips: [
      { videoId: "HhtxqvAlIpo" },
      { videoId: "yoNN1GdNC9c" },

    ],
    tags: [
      tags.NO_WAVES,
      tags.KRAUTROCK,
    ],
    discogsId: "7549-Grauzone",
    bio: "Swiss Neue Deutsche Welle / post punk band founded in 1980 in Bern. They disbanded in 1982.  Drummer Marco Repetto and bassist Christian Trüssel (known as GT) had played in one of the first Swiss punk bands, Glueams. Looking for a new musical direction, they teamed up in late 1979 with Martin Eicher (guitar/vocals), who had already supported them on the Glueams single \"Mental\". They played their first gig as \"Grauzone\" at the Spex club in Bern early March 1980.",
    bioLink: BIOLINK_DISCOGS
  },  
  {
    name: "Pyrolator",
    from: "Germany",
    youtubeClips: [
      { videoId: "9g_9UMgFuNo" },
      { videoId: "t6_skDLiCgM" },

    ],
    tags: [
      tags.NO_WAVES,
      tags.KRAUTROCK,
    ],
    discogsId: "20571-Pyrolator",
    bio: "Kurt \"Pyrolator\" Dahlke. Specialist for music and computer. Founder of the record label and music publishing house atatak (more than 150 publications since 1979). Member of the groups \"Fehlfarben\", \"Der Plan\", \"The Nights\", \"a certain frank\" and solo as \"Pyrolator\". Former member of \"D.A.F.\" and pioneer of the \"Neue Deutsche Welle\" (German New Wave). He produced more than 200 records and CDs and was active on over 100 publications as a composer, musicians and software programmer. His main instruments are the \"Thunder & Lightning II\" built by the Synthesizer-Pioneer Donald Buchla, with which he is controlling the music by the movement or the pressure of the hands.",
  },  
  {
    name: "Air",
    from: "New York",
    youtubeClips: [
      { videoId: "QrmzJcIuzSY" },
      { videoId: "QGdutfYcVws" },

    ],
    tags: [
      tags.PSYCHEDELIC_FUNK,
      tags.KRAUTROCK,
    ],
    discogsId: "1743668-Air-10"
  },   
  {
    name: "Carioca",
    from: "Brazil",
    youtubeClips: [
      { videoId: "Ddweqj6N5UA" },
      { videoId: "uHpUMipOzcY" },
    ],
    tags: [
      tags.DISCO,
      tags.PSYCHEDELIC_JAZZ,
      tags.SOUNDTRACK,
    ],
    discogsId: "2669480-Carioca-7",
    bio: "",
    bioLink: "",
  },
  {
    name: "GQ",
    from: "New York",
    youtubeClips: [
      { videoId: "BihDYHrXguI" },
      // { videoId: "" },
    ],
    tags: [
      tags.DISCO,
      tags.PSYCHEDELIC_FUNK,
    ],
    discogsId: "48425-GQ",
    bio: "",
    bioLink: "",
  },
  {
    name: "Ahmad Jamal",
    from: "Pittsburgh",
    youtubeClips: [
      { videoId: "TQvIvb1S1EM" },
      { videoId: "Z0e2G32f3IU" },
      { videoId: "I97brJeAXcM" },
    ],
    tags: [
      tags.PSYCHEDELIC_JAZZ,
      tags.HIP_HOP_SAMPLE_SOURCE,
    ],
    discogsId: "164253-Ahmad-Jamal",
    bio: "Highly influential American jazz pianist, bandleader and educator, born, 2 July 1930 in Pittsburgh, Pennsylvania as Frederick \"Fritz\" Russell Jones. He has used the name Ahmad Jamal since his conversion to Islam in the early 1950s.",
    bioLink: BIOLINK_DISCOGS,
  },
  {
    name: "Sea Level",
    from: "Georgia",
    youtubeClips: [
      { videoId: "tXkn8-jwi_4" },
      { videoId: "quADJce507w" },
    ],
    tags: [
      tags.DISCO,
      tags.PSYCHEDELIC_FUNK,
    ],
    discogsId: "275372-Sea-Level",
    bio: "American fusion rock group, initially formed by Chuck Leavell as an offshoot of Allman Brothers Band. Active between 1976 and 1981.",
    bioLink: "discogs",
  },
  {
    name: "Wyndell Long",
    from: "Chicago",
    youtubeClips: [
      { videoId: "_oZ_KpboQS0" },
      { videoId: "yBnSUmH_flE" },
      { videoId: "B_mpIPfVrjs" },
    ],
    tags: [
      tags.HOUSE_HEAD,
    ],
    discogsId: "735-Wyndell-Long",
    bio: "A true Chicago techno and house artist with some of the best labels in the world like Peace Frog, ProJEx, Primate, UKR, EUR, Mona, Djax, Isophlux, Reel Musiq, Subspace, Majesty, Elypsia, R&S and many more. His tracks have been played by some of the biggest names in the business as well, and appear regularly in DJ sets all over the world.",
    bioLink: BIOLINK_DISCOGS,
  },
  {
    name: "DJ Rolando",
    from: "Detroit",
    youtubeClips: [
      { videoId: "C6xVKcvze74" },
    ],
    tags: [
      tags.DETROIT_TECHNO
    ],
    discogsId: "1099-DJ-Rolando",
    bio: "Rolando grew up in south west Detroit, a Hispanic district, he was heavily influenced by his cultural Latin rhythms and percussion. Inspired from an early age by his musician father, he pursued his own interest in music and became well known and respected within the community...",
    bioLink: BIOLINK_DISCOGS,
  },
  {
    name: "Gemini",
    from: "Chicago",
    youtubeClips: [
      { videoId: "EFJ_arUD-dg" },
      { videoId: "h-zD2EyyxcY" },
      { videoId: "FPxboliQOKU" },
      { videoId: "FDLjEaBH3XQ" },
      { videoId: "-2QcSRI-CuI" },
      { videoId: "vLMDwfH0rt4" },
      { videoId: "jCFuVL1f-64" },
      // { videoId: "Qk2TOaMbLV0" },
      // { videoId: "pGMCet19pI0" },
    ],
    tags: [
      tags.HOUSE_HEAD,
      tags.DETROIT_TECHNO,
    ],
    discogsId: "2145-Gemini",
    bio: "As one of Chicago's most mysterious and revered characters, the story of Gemini, aka Spencer Kincy (born June 6, 1969) has become something of a myth in recent years = blazing a trail throughout the 90's, prolifically releasing over 200 tracks from 1994 to 1999, Spencer's music had shades innovation and soul few of his peers could match...",
    bioLink: BIOLINK_DISCOGS,
  },
  {
    name: "",
    from: "",
    youtubeClips: [
      { videoId: "" },
      { videoId: "" },
    ],
    tags: [
    ],
    discogsId: ""
  },
];



