const tags = {
  FEMME_PUNK: "femmePunks",
  HOUSE_HEAD: "houseHeads",
  NYC_NOUVEAU: "nycNouveaus",
  HIP_HOP_SAMPLE_SOURCE: "hipHopSampleSourcess",
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
};


export const rawArtistList = [
  { 
    name: "PJ Harvey" ,
    from: "England",
    avatar: "avatar_pjHarvey.png",
    youtubeClips: [
      { videoId: "RAWIDYhEoik" },
      { videoId: "tap5tu9ExWg" },
      { videoId: "uV99yrooqjg" },
      { videoId: "P-O91rE4Fe0" },
      { videoId: "VfY6yvSphKE" },
      { videoId: "VO63vb1S7Cw" },
    ],
    youtubePlaylist: "https://www.youtube.com/playlist?list=PL6EBBFEC63A339EE5",
    tags: [tags.FEMME_PUNK],
    discogsId: "36052-PJ-Harvey",
  },
  { 
    name: "Lydia Lunch" ,
    from: "New York",
    avatar: "avatar_lydiaLunch.png",
    youtubeClips: [
      { videoId: "tYeyVHOz950" }, 
      { videoId: "Iip3yTTWVZI" },
      { videoId: "Qr2Kde2uuXs" }, 
      { videoId: "GiowCFfejH8" }, 
      { videoId: "s4ole_bRTdw" }, 
      { videoId: "UZmQZwylKrQ" },
      { videoId: "AlS6GC11Wi0" }, 
    ],
    youtubePlaylist: "https://www.youtube.com/playlist?list=PL81SQDom_tmdcgiRiIpgXyTBOucC400uu",
    tags: [tags.FEMME_PUNK],
    discogsId: "10290-Lydia-Lunch",
  },
  { 
    name: "Dr. Buzzard's Original Savannah Band" ,
    from: "New York",
    avatar: "avatar_drBuzzardsOriginalSavannahBand.png",
    youtubeClips: [
      { videoId: "r5lrxFGOj9g" },
      { videoId: "jrzxW0rsD1Q" },
      { videoId: "-9T3jK3PCc8" },
      { videoId: "tPnoC3XHroU" }
    ],
    tags: [tags.HOUSE_HEAD],
    youtubePlaylist: "",
    discogsId: "88534-Dr-Buzzards-Original-Savannah-Band",
  },
  { 
    name: "Lena Platanos",
    from: "Greece",
    avatar: "avatar_lenaPlatanos.png",
    youtubeClips: [
      { videoId: "Z7DSw62PMS4" },
      { videoId: "qIoYrkzTQoE" },
      { videoId: "Sc7VRvhbqZA" },
    ],
    youtubePlaylist: "",
    tags: [tags.FEMME_PUNK, tags.NYC_NOUVEAU],
    discogsId: "642532-Λένα-Πλάτωνος",
  },
  { 
    name: "Arthur Russell",
    from: "New York",
    avatar: "avatar_arthurRussell.png",
    youtubeClips: [
      { videoId: "ZN5yz2koiIA" },
      { videoId: "9hEUTIjQuTo" }
    ],
    youtubePlaylist: "",
    tags: [tags.NYC_NOUVEAU],
    discogsId: "23524-Arthur-Russell"
  },
  { 
    name: "David Axlerod",
    from: "New York",
    avatar: "avatar_davidAxlerod_discogsdotcom.png",
    youtubeClips: [
      { videoId: "l5q1SCxn-zs" },
      { videoId: "nIEut68UJkw" },
      { videoId: "bMEqmaqFAMs" }
    ],
    youtubePlaylist: "",
    discogsId: "5451-David-Axelrod",
    tags: [tags.HIP_HOP_SAMPLE_SOURCE],
  },
  { 
    name: "Larry Heard",
    from: "Chicago",
    avatar: "avatar_larryHeard_equipboarddotcom.png",
    discogsId: "148-Larry-Heard",
    youtubeClips: [
      { videoId: "Z9o2v3SA1Co" },
      { videoId: "tFuujExs03A" } 
    ],
    youtubePlaylist: "",
    tags: [tags.HOUSE_HEAD, tags.DETROIT_TECHNO],
  },
  { 
    name: "ESG",
    from: "New York",
    avatar: "avatar_esg_discogsdotcom.png",
    youtubeClips: [
      { videoId: "dtMWnzf0x3E" },
      { videoId: "ckjz8kMCkO8" },
      { videoId: "fQN9lzvREb4" },
      { videoId: "Vy_U-0s1_G8" },
    ],
    youtubePlaylist: "",
    tags: [tags.NYC_NOUVEAU, tags.HOUSE_HEAD],
    discogsId: "16534-ESG"
  },
  { 
    name: "Piero Umiliani",
    from: "Italy",
    avatar: "",
    youtubeClips: [
      { videoId: "jU6r5lJlIbQ" },
      { videoId: "CDEiQcflHWc" },
      { videoId: "5Vp17zg8-30" },
      { videoId: "Z67uiA2Q7d8" },
      { videoId: "0WrruFyhtVw" },
      { videoId: "QxEemccRAMQ" },
      { videoId: "k1-6JKZ8spI" },
      { videoId: "pvBopJUDiNE" }, 
    ],
    youtubePlaylist: "",
    tags: [tags.SOUNDTRACK, tags.HIP_HOP_SAMPLE_SOURCE],
    discogsId: "8722-Piero-Umiliani"
  },
  { 
    name: "R.L. Burnside",
    from: "Mississippi",
    avatar: "",
    youtubeClips: [
      { videoId: "05m5ikAMJ1E" },
      { videoId: "K_DOnKJ232M" }
    ],
    youtubePlaylist: "",
    tags: [tags.BLUES],
    discogsId: "262901-RL-Burnside"
  },
  { 
    name: "Erase Errata",
    from: "San Francisco",
    avatar: "",
    youtubeClips: [
      { videoId: "jsaZxd2uPb0" },
      { videoId: "4ySlz4Xaph4" },
      { videoId: "uTVukQi967U" },
      { videoId: "NEtyug1SGt8" },
      { videoId: "Ntwyw2GuVYs" },
      { videoId: "lKplwB7RrDg" },
      { videoId: "jE-SKdU2q38" }

    ],
    youtubePlaylist: "",
    tags: [tags.FEMME_PUNK],
    discogsId: "80777-Erase-Errata"
  },
  { 
    name: "Embryo",
    from: "Germany",
    avatar: "",
    youtubeClips: [
      { videoId: "SwvbigAV9n4" },
      { videoId: "fADRbiq3i2c" },
      { videoId: "XsEIiHFiMV0" },
    ],
    youtubePlaylist: "",
    tags: [
      tags.PSYCHEDELIC_FUNK, 
      tags.PSYCHEDELIC_ROCK, 
      tags.KRAUTROCK, 
      tags.HIP_HOP_SAMPLE_SOURCE
    ],
    discogsId: "201948-Embryo-3"
  },
  { 
    name: "Billy Cobham",
    from: "Panama/Switzerland",
    avatar: "",
    youtubeClips: [
      { videoId: "l7Q-JfAV2xk" },
      { videoId: "YdzfAHswd50" },
      { videoId: "sbkv3ZGIIj0" },
    ],
    youtubePlaylist: "",
    tags: [tags.PSYCHEDELIC_JAZZ],
    discogsId: "35199-Billy-Cobham"
  },
  { 
    name: "Bennie Maupin",
    from: "Detroit",
    avatar: "",
    youtubeClips: [
      // { videoId: "xfjVxmqefwc" },  // private :/
      { videoId: "GrOzUl2lwkQ" },
      { videoId: "N9QYxXo8-cU" },
    ],
    youtubePlaylist: "",
    tags: [tags.PSYCHEDELIC_JAZZ],
    discogsId: "15448-Bennie-Maupin"
  },
  { 
    name: "Coldcut",
    from: "England",
    avatar: "",
    youtubeClips: [
      { videoId: "_JhDFzf-Hyw" },
      { videoId: "DzJvWMwcbyM" },
      { videoId: "i3NWX-EIEAQ" },
      { videoId: "5-wl7Xk5FoY" }
    ],
    youtubePlaylist: "",
    tags: [tags.ELECTRONICA],
    discogsId: "946-Coldcut"
  },
  { 
    name: "Bruno Spoerri",
    from: "Switzerland",
    avatar: "",
    youtubeClips: [
      { videoId: "0BJZBLtyPpg" },
      { videoId: "HuvuGS595KY" },
      { videoId: "gE6wWbkKPS8" }
    ],
    youtubePlaylist: "",
    tags: [tags.SOUNDTRACK],
    discogsId: "92184-Bruno-Spoerri"
  },
  { 
    name: "Prince Jammy",
    from: "Jamaica",
    avatar: "",
    youtubeClips: [
      { videoId: "vI0cFSC9cQw" },
      { videoId: "9jB9JaCDIlI" }
    ],
    youtubePlaylist: "",
    tags: [tags.DUB],
    discogsId: "41270-Prince-Jammy"
  },
  { 
    name: "DJ Spooky",
    from: "Washington D.C.",
    avatar: "",
    youtubeClips: [
      { videoId: "a9bhBXGaJ0w" },
      { videoId: "08MXmoL3rYk" },
      { videoId: "y50HXQA20Jc" },
      { videoId: "5WkVkAD1Azw" },
      { videoId: "uJspvQQ6Qo8" },
      { videoId: "bXXA1gytWcc" },
      { videoId: "Hjk_DY4w4UY" },
      { videoId: "bdOzSId3DQQ" },
      { videoId: "yai_l8F9qWM" }

    ],
    youtubePlaylist: "",
    tags: [tags.ELECTRONICA, tags.HIP_HOP],
    discogsId: "3214-DJ-Spooky"
  },
  { 
    name: "Tones On Tail",
    from: "England",
    avatar: "",
    youtubeClips: [
      { videoId: "t71wENZgwCk" },
      { videoId: "CKNT8HBYOE8" },
      { videoId: "8xnUUaFajXw" }
    ],
    youtubePlaylist: "",
    tags: [tags.NYC_NOUVEAU, tags.ELECTRONICA],
    discogsId: "98173-Tones-On-Tail"
  },
  { 
    name: "BADBADNOTGOOD",
    from: "Toronto",
    avatar: "",
    youtubeClips: [
      { videoId: "UWIIPX_5rbM" },
      // { videoId: "" }
    ],
    youtubePlaylist: "",
    tags: [],
    discogsId: "2468526-BadBadNotGood"
  },
  { 
    name: "Cleo McNett",
    from: "Texas",
    avatar: "",
    youtubeClips: [
      { videoId: "Tsi8mHIICqI" },
    ],
    youtubePlaylist: "",
    tags: [tags.HIP_HOP_SAMPLE_SOURCE],
    discogsId: "2539301-Cleo-McNett"
  },
  { 
    name: "Yesterday's New Quintet",
    from: "Los Angeles",
    avatar: "",
    youtubeClips: [
      { videoId: "RGjib_XOQyY" },
      { videoId: "rylPWD9SJFI" },
      { videoId: "gFI-sAEX3-w" },
      { videoId: "i3lHbp9a2Ns" },
      { videoId: "grH8qTkVdF0" },
    ],
    youtubePlaylist: "",
    tags: [tags.PSYCHEDELIC_FUNK, tags.HIP_HOP],
    discogsId: "231672-Yesterdays-New-Quintet"
  },
  { 
    name: "Henry Mancini",
    from: "Cleveland",
    avatar: "",
    youtubeClips: [
      { videoId: "6UJ0SSHlarc" },
      { videoId: "6iRKetH_mdk" }
    ],
    youtubePlaylist: "",
    tags: [tags.SOUNDTRACK],
    discogsId: "10529-Henry-Mancini"
  },
  { 
    name: "Lee Hazlewood",
    from: "Oklahoma",
    avatar: "",
    youtubeClips: [
      { videoId: "oUBHy8WQlzU" },
      { videoId: "Lw_I_UpqVjM" },
      { videoId: "UfajzCPzpDA" },
      { videoId: "pjsh2j7W6Bo" },
      { videoId: "Qo24xN9mj8Q" }
    ],
    youtubePlaylist: "",
    tags: [tags.FOLK],
    discogsId: "225403-Lee-Hazlewood"
  },
  { 
    name: "Cristina",
    from: "New York",
    avatar: "",
    youtubeClips: [
      { videoId: "Nk4vAAqcT0I" },
      { videoId: "J_Tc6qc3v7w" },
      { videoId: "s5Xgktqp-Zw" },
    ],
    youtubePlaylist: "",
    tags: [tags.NYC_NOUVEAU],
    discogsId: "55646-Cristina"
  },
  { 
    name: "Jasper Van't Hof",
    from: "The Netherlands",
    avatar: "",
    youtubeClips: [
      { videoId: "butTVsxTv-0" },
      { videoId: "SJr2efNBVLc" },
    ],
    youtubePlaylist: "",
    tags: [tags.PSYCHEDELIC_FUNK, tags.ELECTRONICA],
    discogsId: "149325-Jasper-Vant-Hof"
  },
  { 
    name: "Sun Ra",
    from: "Alabama",
    avatar: "",
    youtubeClips: [
      { videoId: "4rUix7ZFTTQ" },
      { videoId: "uuirXgyT_-s" },
      { videoId: "gZwfxT19qWc" },
      { videoId: "xz3o__1uAFo" },
      { videoId: "j2FnIzSf48k" },
    ],
    youtubePlaylist: "",
    tags: [tags.PSYCHEDELIC_JAZZ],
    discogsId: "35328-Sun-Ra"
  },
  { 
    name: "Ron Hardy",
    from: "Chicago",
    avatar: "",
    youtubeClips: [
      { videoId: "nvZXbJxF0cY" },
  //     { videoId: "" }
    ],
    youtubePlaylist: "",
    tags: [tags.HOUSE_HEAD],
    discogsId: "2686-Ron-Hardy"
  },
  { 
    name: "Hamilton Bohannon",
    from: "Detroit",
    avatar: "",
    youtubeClips: [
      { videoId: "lOX7Qt9YF4c" },
      // { videoId: "mls04iVmU9o" },
      { videoId: "DsWFRi5qtfI" },
      { videoId: "AU04knNymSA" },
    ],
    youtubePlaylist: "",
    tags: [tags.HOUSE_HEAD, tags.NYC_NOUVEAU],
    discogsId: "154434-Hamilton-Bohannon"
  },
  { 
    name: "Moodymann",
    from: "Detroit",
    avatar: "",
    youtubeClips: [
      { videoId: "hbm9OZHLxQ0" },
      { videoId: "AHwcwqe-4wU" },
      { videoId: "Vvbj1UVGbXw" },
      { videoId: "xwhIS92E0ao" },
      { videoId: "kAc31ytA8EA" },
    ],
    youtubePlaylist: "",
    tags: [tags.HOUSE_HEAD, tags.DETROIT_TECHNO],
    discogsId: "1094-Moodymann"
  },
  { 
    name: "Grace Jones",
    from: "Jamaica",
    avatar: "",
    youtubeClips: [
      { videoId: "yvLn_qC7QAs" },
      { videoId: "Qn4ohXUdo_8" },
      { videoId: "TprLOVgw-2Y" },
    ],
    youtubePlaylist: "",
    tags: [tags.NYC_NOUVEAU, tags.DUB],
    discogsId: "13932-Grace-Jones"
  },
  { 
    name: "Sylvester",
    from: "San Francisco",
    avatar: "",
    youtubeClips: [
      { videoId: "Nb_t42nQ-00" },
      { videoId: "gD6cPE2BHic" }
    ],
    youtubePlaylist: "",
    tags: [tags.HOUSE_HEAD],
    discogsId: "16794-Sylvester"
  },
  { 
    name: "Los Destellos",
    from: "Peru",
    avatar: "",
    youtubeClips: [
      { videoId: "f-_xgHGQJNQ" },
      // what was the other one? 
    ],
    youtubePlaylist: "",
    tags: [tags.PSYCHEDELIC_FUNK, tags.LATIN],
    discogsId: "865862-Los-Destellos"
  },
  { 
    name: "Chance",
    from: "Brazil",
    avatar: "",
    youtubeClips: [
      { videoId: "neljZgwCIMs" },
      { videoId: "2FyY66LP3dc" }
    ],
    youtubePlaylist: "",
    tags: [tags.FEMME_PUNK, tags.LATIN],
    discogsId: "320462-Chance-3"
  },
  { 
    name: "As Mercenárias",
    from: "Brazil",
    avatar: "",
    youtubeClips: [
      { videoId: "QdI-1T_57PA" },
      { videoId: "D9b_JC0hb9s" },
      { videoId: "itXg_TyMffE" },
      { videoId: "190a47w9Ilo" },
    ],
    youtubePlaylist: "",
    tags: [tags.LATIN, tags.FEMME_PUNK],
    discogsId: "462905-As-Mercenárias"
  },
  { 
    name: "Deutsch-Amerikanische Freundschaft",
    from: "Germany",
    avatar: "",
    youtubeClips: [
      { videoId: "jSL1nXza7pM" },
      { videoId: "pOJKf66QYQI" },
      { videoId: "jDQPVXUegPs" },
      { videoId: "TuHYklrLkjU" },
      { videoId: "Cg0NS33TqKU" },
      { videoId: "p3tg2mfzp78" },
      { videoId: "KV6NnB7CuX0" },
    ],
    youtubePlaylist: "",
    tags: [tags.ELECTRONICA],
    discogsId: "12830-Deutsch-Amerikanische-Freundschaft"
  },
  { 
    name: "Les McCann",
    from: "Kentucky",
    avatar: "",
    youtubeClips: [
      { videoId: "tcJ4eVVK640" },
    ],
    youtubePlaylist: "",
    tags: [tags.PSYCHEDELIC_JAZZ],
    discogsId: "44126-Les-McCann"
  },
  { 
    name: "Lennie Hibbert",
    from: "Jamaica",
    avatar: "",
    youtubeClips: [
      { videoId: "wPP4nOY3oXw" },
      { videoId: "bvkLTH_rOjM" },
    ],
    youtubePlaylist: "",
    tags: [tags.DUB],
    discogsId: "116682-Lennie-Hibbert"
  },
  { 
    name: "New Age Steppers",
    from: "England",
    avatar: "",
    youtubeClips: [
      { videoId: "Sq31-Pjitgw" },
      { videoId: "JpJHfdyax-A" },
      { videoId: "WY5LR7GpCp8" }
    ],
    youtubePlaylist: "",
    tags: [tags.DUB, tags.NYC_NOUVEAU],
    discogsId: "23698-New-Age-Steppers"
  },
  { 
    name: "CAN",
    from: "Germany",
    avatar: "",
    youtubeClips: [
      { videoId: "72fxlmd54rU" },
      { videoId: "5EH5GFP2Otk" },
      { videoId: "zBt7-FGadjw" },
      { videoId: "2dZbAFmnRVA" },
      { videoId: "2-GGVv_1ZSM" },
    ],
    youtubePlaylist: "",
    tags: [tags.PSYCHEDELIC_FUNK, tags.KRAUTROCK],
    discogsId: "17203-Can"
  },
  { 
    name: "Delia Derbyshire",
    from: "",
    avatar: "",
    youtubeClips: [
      { videoId: "AaVKnRz9Inw" },
      { videoId: "WCF_mHKBH3k" },
      { videoId: "jpdiMcEeTJA" },
      { videoId: "ZOC7Pf1XY54" },
      { videoId: "0rnF7KRqGKo" },
      { videoId: "puzHEbL4-xs" }
],
    youtubePlaylist: "",
    tags: [tags.ELECTRONICA],
    discogsId: "131041-Delia-Derbyshire"
  },
  { 
    name: "A Number Of Names",
    from: "Detroit",
    avatar: "",
    youtubeClips: [
      { videoId: "8AQ193-u4Q8" },
      { videoId: "6B6l924HHDs" }
    ],
    youtubePlaylist: "",
    tags: [tags.DETROIT_TECHNO, tags.NYC_NOUVEAU],
    discogsId: ""
  },
  { 
    name: "Vivian Goldman",
    from: "England",
    avatar: "",
    youtubeClips: [
      { videoId: "6v8zxSybWjo" },
      { videoId: "sNJpwTPzk2M" },
      { videoId: "IbtQY8SQz7k" },
    ],
    youtubePlaylist: "",
    tags: [tags.NYC_NOUVEAU],
    discogsId: "53036-Vivien-Goldman"
  },
  { 
    name: "A Certain Ratio",
    from: "England",
    avatar: "",
    youtubeClips: [
      { videoId: "UoLlLCV5Op8" },
      { videoId: "Lc_7s3G_IIc" },
      { videoId: "L7lH7D2Ockw" },
      { videoId: "isMh1itIiuU" },
    ],
    youtubePlaylist: "",
    tags: [tags.NYC_NOUVEAU],
    discogsId: "11203-A-Certain-Ratio"
  },
  { 
    name: "Alan Vega",
    from: "New York",
    avatar: "",
    youtubeClips: [
      { videoId: "OAQ2jq6vwsE" },
      { videoId: "t1hhiEHLJUg" },
      { videoId: "dDxYqJmtzKc" },
      { videoId: "Qn0_fDjvI_s" }
    ],
    youtubePlaylist: "",
    tags: [tags.NYC_NOUVEAU],
    discogsId: "54918-Alan-Vega"
  },
  { 
    name: "Jamal Moss",
    from: "Chicago",
    avatar: "",
    youtubeClips: [
      { videoId: "P-5ehKDK_Vw" },
      { videoId: "qBr8dWjrPF8" },
      { videoId: "irGNPLjVR2Q" }
    ],
    youtubePlaylist: "",
    tags: [tags.ELECTRONICA, tags.HOUSE_HEAD],
    discogsId: "466022-Jamal-Moss"
  },
  { 
    name: "Gina X Performance",
    from: "Germany",
    avatar: "",
    youtubeClips: [
      { videoId: "Vq4vZNvrX7M" },
      { videoId: "FxyGud2Bi3g" },       
      { videoId: "D5iHik1Kf6k" },
      { videoId: "lpSZiuCqqZE" },
      { videoId: "QRI-bkeml5s" },
    ],
    youtubePlaylist: "",
    tags: [tags.NYC_NOUVEAU],
    discogsId: "25726-Gina-X-Performance"
  },
  { 
    name: "Pylon",
    from: "Georgia",
    avatar: "",
    youtubeClips: [
      { videoId: "mVuxS3csXiE" },
      { videoId: "wdo3mw0Rx7Q" },
      { videoId: "fZ1W4Er2MHE" },
    ],
    youtubePlaylist: "",
    tags: [tags.FEMME_PUNK],
    discogsId: "264419-Pylon-4"
  },
  { 
    name: "Material",
    from: "New York",
    avatar: "",
    youtubeClips: [
      { videoId: "_P0lSNm0628" },
      { videoId: "zW5DHiViQpE" },
      { videoId: "69gS1H-D104" },
      { videoId: "4YqvM1D88t8" }
    ],
    youtubePlaylist: "",
    tags: [tags.NYC_NOUVEAU],
    discogsId: "8796-Material"
  },
  { 
    name: "Palais Schaumburg",
    from: "Germany",
    avatar: "",
    youtubeClips: [
      { videoId: "Ub4zXkH4z0U" },
      { videoId: "GI876rqao8A" },
      { videoId: "IaZwpKZokJM" },
      { videoId: "KGnBgsplaTc" },
    ],
    youtubePlaylist: "",
    tags: [tags.ELECTRONICA],
    discogsId: "26992-Palais-Schaumburg"
  },
  { 
    name: "Gang Of Four",
    from: "England",
    avatar: "",
    youtubeClips: [
      { videoId: "KVBfX58McgQ" },
      { videoId: "2NTmgFNSLtA" },
      { videoId: "jz0JDuLYtnw" },
      { videoId: "pFLx4FnNegk" },
      { videoId: "sNdOtaHniQc" },
      { videoId: "_Pws_cquzns" },
      { videoId: "_8c4PAaDMmY" },
    ],
    youtubePlaylist: "",
    tags: [tags.NYC_NOUVEAU],
    discogsId: "33929-Gang-Of-Four"
  },
  { 
    name: "Jack Nitzsche",
    from: "Los Angeles",
    avatar: "",
    youtubeClips: [
      { videoId: "K6VUEY5_Zcc" },
      { videoId: "1o_5z6-OIPY" },
      { videoId: "3WGY2DqEPLM" },
    ],
    youtubePlaylist: "",
    tags: [tags.SOUNDTRACK, tags.SURF_ROCK],
    discogsId: "256156-Jack-Nitzsche"
  },
  { 
    name: "Les Rallizes Dénudés",
    from: "Japan",
    avatar: "",
    youtubeClips: [
      { videoId: "uog1U_Kemlk" },
      { videoId: "-CwD6iPwQeA" },
    ],
    youtubePlaylist: "",
    tags: [tags.PSYCHEDELIC_ROCK],
    discogsId: "520482-Les-Rallizes-Denudes"
  },
  { 
    name: "Piero Piccioni",
    from: "Italy",
    avatar: "",
    youtubeClips: [
      { videoId: "caa0oiRZcRk" },
      { videoId: "zsH3Vfc0huc" },
      { videoId: "BthwOfELs5M" },
      { videoId: "nYpf11vQ6UA" },
      { videoId: "lDf4DfhUUBw" },
      { videoId: "rs3s8V3xcAc" },
      { videoId: "iIjeXpHhPvQ" },
      { videoId: "HZFY2ohFuXk" },
      { videoId: "lCvu6e5xyow" }, 
      { videoId: "WYFKx38-Yz4" },
      { videoId: "lRwy0D1HDV0" }
    ],
    youtubePlaylist: "",
    tags: [tags.SOUNDTRACK, tags.HIP_HOP_SAMPLE_SOURCE],
    discogsId: "9768-Piero-Piccioni"
  },
  { 
    name: "Ernan Roch Con Las Voces Frescas",
    from: "Mexico",
    avatar: "",
    youtubeClips: [
      { videoId: "fEGdJfRwrWk" },
  //     { videoId: "" }
    ],
    youtubePlaylist: "",
    tags: [tags.PSYCHEDELIC_ROCK],
    discogsId: "1611470-Ernan-Roch-Con-Las-Voces-Frescas"
  },
  { 
    name: "Dave \"Baby\" Cortez",
    from: "Detroit",
    avatar: "",
    youtubeClips: [
      { videoId: "NFMEv2Zx8gM" },
      { videoId: "YLntsURqvK4" },
      { videoId: "LfuAj3fmQ4I" }
    ],
    youtubePlaylist: "",
    tags: [tags.SURF_ROCK],
    discogsId: "282009-Dave-Baby-Cortez"
  },
  { 
    name: "Three Souls In My Mind",
    from: "Mexico",
    avatar: "",
    youtubeClips: [
      { videoId: "CHGkjWZ5Aeg" },
  //     { videoId: "" }
    ],
    youtubePlaylist: "",
    tags: [tags.LATIN, tags.PSYCHEDELIC_ROCK],
    discogsId: "1009673-Three-Souls-In-My-Mind"
  },
  { 
    name: "Black Dice",
    from: "New York",
    avatar: "",
    youtubeClips: [
      { videoId: "ZlgwVah6q5A" },
      { videoId: "Ns81IBZmTUM" },
      { videoId: "vnFrWrAAvR8" },
    ],
    youtubePlaylist: "",
    tags: [tags.ELECTRONICA, tags.PSYCHEDELIC_ROCK],
    discogsId: "73892-Black-Dice"
  },
  { 
    name: "Emahoy Tsegue Maryam Guebrou",
    from: "Ethiopia",
    avatar: "",
    youtubeClips: [
      { videoId: "R2sGGmh_RXw" },
      { videoId: "Lhn_8OIMWFs" },
      { videoId: "nKU7iz9RYV0" }
    ],
    youtubePlaylist: "",
    tags: [tags.FOLK, tags.AFRICAN],
    discogsId: "6038009-Emahoy-Tsegue-Maryam-Guebrou"
  },
  { 
    name: "Mulatu Astatke",
    from: "Ethiopia",
    avatar: "",
    youtubeClips: [
      { videoId: "dgmiYFLbn6U" },
      { videoId: "mB5uUEr7pIA" },
      { videoId: "WpvQbcemMvA" }
    ],
    youtubePlaylist: "",
    tags: [tags.AFRICAN, tags.PSYCHEDELIC_JAZZ],
    discogsId: "286112-Mulatu-Astatke"
  },
  { 
    name: "The Carter Family",
    from: "Virginia",
    avatar: "",
    youtubeClips: [
      { videoId: "yE3kW9-tjO8" },
  //     { videoId: "" }
    ],
    youtubePlaylist: "",
    tags: [tags.FOLK],
    discogsId: "307357-The-Carter-Family"
  },
  { 
    name: "Manu Dibango",
    from: "Cameroon",
    avatar: "",
    youtubeClips: [
      { videoId: "-7iEoHpiw0A" },
      { videoId: "aWK_Josc0Og" },
      { videoId: "Rw5XpgIhKvU" },
    ],
    youtubePlaylist: "",
    tags: [tags.AFRICAN, tags.PSYCHEDELIC_FUNK],
    discogsId: "20560-Manu-Dibango"
  },
  { 
    name: "Jean-Luc Ponty",
    from: "France",
    avatar: "",
    youtubeClips: [
      { videoId: "8hV8_1v38Ho" },
      { videoId: "SXWSdErCajg" },
      { videoId: "CQ2_lAMJBnA" },
      { videoId: "IUQecB8eIIw" },
      { videoId: "bNUQBBM_c9E" },
      { videoId: "n9MvtltrlxA" },
    ],
    youtubePlaylist: "",
    tags: [tags.PSYCHEDELIC_JAZZ],
    discogsId: "220594-Jean-Luc-Ponty"
  },
  { 
    name: "Vincent Montana",
    from: "Philedelphia",
    avatar: "",
    youtubeClips: [
      { videoId: "nW6vPuVt2uw" },
      { videoId: "5o-5iRZKcRg" },
      { videoId: "3_eSfFMduoI" },
      { videoId: "dfmNIGBt_Xo" }
    ],
    youtubePlaylist: "",
    tags: [tags.NYC_NOUVEAU, tags.HOUSE_HEAD],
    discogsId: "170322-Vincent-Montana-Jr"
  },
  { 
    name: "Cajmere",
    from: "Chicago",
    avatar: "",
    youtubeClips: [
      { videoId: "vwr_gWfMsQ0" },
      { videoId: "FC-4-3v9zQw" },
      { videoId: "oqC1zKQcpbk" },
      { videoId: "gQAVa7UGm6c" },
      { videoId: "hR_6D59CioE" },
      { videoId: "qLAxBS0wK84" },
    ],
    youtubePlaylist: "",
    tags: [tags.HOUSE_HEAD],
    discogsId: "2474-Cajmere"
  },
  { 
    name: "Green Velvet",
    from: "Chicago",
    avatar: "",
    youtubeClips: [
      { videoId: "Kfwxz-SSmBM" },
      { videoId: "8vsMh8sPwjI" },
      { videoId: "hmaXQ8H4t4w" },
      { videoId: "0gVJJgDFUvM" },
      { videoId: "btyLiGhvTJQ" },
      { videoId: "9zPWZeXtUTU" },
      { videoId: "isSPvgnG6iU" },
      { videoId: "d4CoDzIfF50" },
      { videoId: "3_5oRtBDtfg" },
      { videoId: "CMvyyPgYW1g" },
      { videoId: "ajuz6u-nADY" },
      { videoId: "qvARw8iGG5w" },
      { videoId: "rQJBZ22frX4" },
      { videoId: "w6uP0wIQ9aY" },
      { videoId: "7mRJRs5FGMU" },
      { videoId: "L-n375nloL8" },
      { videoId: "oLEtcf26Flo" },
      { videoId: "_Y-aZtC0vfw" },
      { videoId: "xAgTS64axEE" },
    ],
    youtubePlaylist: "PL81SQDom_tmf9ZcJTzyoiN_0j2Qhmjxaz",
    tags: [tags.DETROIT_TECHNO],
    discogsId: "219-Green-Velvet"
  },
  { 
    name: "Gino Soccio",
    from: "Canada",
    avatar: "",
    youtubeClips: [
      { videoId: "GxNFc41XM_w" },
      { videoId: "wZ6RbvOpZMk" },
      { videoId: "dpAuddaV_pI" }
    ],
    youtubePlaylist: "",
    tags: [tags.HOUSE_HEAD, tags.NYC_NOUVEAU],
    discogsId: "75922-Gino-Soccio"
  },
  { 
    name: "Harmonia",
    from: "Germany",
    avatar: "",
    youtubeClips: [
      { videoId: "YUTN1_C_iOI" },
      { videoId: "1VNO3OB0T_E" },
      { videoId: "iQs07Sofu8I" },
      { videoId: "DPBjSWQ8tLU" },
    ],
    youtubePlaylist: "",
    tags: [tags.ELECTRONICA, tags.KRAUTROCK],
    discogsId: "190641-Harmonia"
  },
  { 
    name: "Roberto Musci",
    from: "Italy",
    avatar: "",
    youtubeClips: [
      { videoId: "pPoHYDkopzY" },
      { videoId: "g6-Wf79K_zE" }
    ],
    youtubePlaylist: "",
    tags: [tags.AFRICAN],
    discogsId: "180280-Roberto-Musci"
  },
  { 
    name: "Adrian Sherwood",
    from: "Italy",
    avatar: "",
    youtubeClips: [
      { videoId: "eBqeWMUrcTE" },
    ],
    youtubePlaylist: "",
    tags: [tags.DUB],
    discogsId: "4969-Adrian-Sherwood"
  },
  { 
    name: "The Crazy World Of Arthur Brown",
    from: "England",
    avatar: "",
    youtubeClips: [
      { videoId: "oXK9PxUHqX0" },
    ],
    youtubePlaylist: "",
    tags: [tags.PSYCHEDELIC_FUNK],
    discogsId: "280200-The-Crazy-World-Of-Arthur-Brown"
  },
  { 
    name: "The San Sebastian Strings",
    from: "",
    avatar: "",
    youtubeClips: [
      { videoId: "5Re0FCzoM9g" },
    ],
    youtubePlaylist: "",
    tags: [tags.SOUNDTRACK],
    discogsId: "990048-The-San-Sebastian-Strings"
  },
  { 
    name: "Mdou Moctar",
    from: "Niger",
    avatar: "",
    youtubeClips: [
      { videoId: "Zepisq-isbg" },
      { videoId: "EYXPh5Q0PTw" },
      { videoId: "udwLcimxPNU" }
    ],
    youtubePlaylist: "",
    tags: [tags.AFRICAN, tags.PSYCHEDELIC_ROCK],
    discogsId: "2374748-Mdou-Moctar"
  },
  { 
    name: "Cymande",
    from: "England",
    avatar: "",
    youtubeClips: [
      { videoId: "YcL8SvyKtE4" },
      { videoId: "SuLnxjVo6bk" }
    ],
    youtubePlaylist: "",
    tags: [tags.AFRICAN, tags.PSYCHEDELIC_FUNK],
    discogsId: "59250-Cymande"
  },
  { 
    name: "Liaisons Dangereuses",
    from: "Germany",
    avatar: "",
    youtubeClips: [
      { videoId: "-Xk_ixYlJIE" },
      { videoId: "_SObYJehivY" },
      { videoId: "gzAOlaITnWk" },
      { videoId: "WuZlHOLMl1Q" },
    ],
    youtubePlaylist: "",
    tags: [tags.ELECTRONICA, tags.HOUSE_HEAD],
    discogsId: "2711-Liaisons-Dangereuses"
  },
  { 
    name: "Mu",
    from: "Japan",
    avatar: "",
    youtubeClips: [
      { videoId: "Io_qpWyk4RM" },
      { videoId: "Ylbu46WdO-w" },
      { videoId: "rGm1ukZRmlU" },
      { videoId: "M1gywpRgBpc" },
      { videoId: "cdWO7r6DnlE" },
      { videoId: "i_5mhO3PeA0" },
      { videoId: "SeQ50BERnjc" },
    ],
    youtubePlaylist: "",
    tags: [tags.ELECTRONICA, tags.HOUSE_HEAD, tags.NYC_NOUVEAU],
    discogsId: "75801-MU"
  },
  { 
    name: "Replikants",
    from: "Washington",
    avatar: "",
    youtubeClips: [
      { videoId: "O_1e7vlKYpQ" },
      { videoId: "w2WWp_XuwQM" },
      { videoId: "LNGlcV1SwMQ" },
      { videoId: "VNEfvCQPqNs" },
      { videoId: "Mh0q8kWr7iI" },
      { videoId: "RkSiwbXxj_I" },
      { videoId: "z6ImbmRJM8E" },
    ],
    youtubePlaylist: "",
    tags: [tags.ELECTRONICA, tags.PSYCHEDELIC_ROCK],
    discogsId: "100441-Replikants"
  },
  { 
    name: "Atom Heart",
    from: "Germany",
    avatar: "",
    youtubeClips: [
      { videoId: "lXkYHWezTdg" },
      { videoId: "JFDLbXBxKV8" },
      { videoId: "6hvQB6nUBYg" },
      { videoId: "zF00br8ykUo" },
      { videoId: "5x8u_RHdDqE" },
      { videoId: "krR3CwmV_mQ" },
      { videoId: "fzozoqTR518" },
      { videoId: "X__g913MQyo" }
      // that gospel glitch thing
      // that one ambient tune 
    ],
    youtubePlaylist: "",
    tags: [tags.ELECTRONICA, tags.LATIN],
    discogsId: "24-Atom-Heart"
  },
  {
    name: "Spectre",
    from: "",
    avatar: "",
    youtubeClips: [
      { videoId: "xendn_rnwXU" },
      { videoId: "2xAHBmCOFEw" }
    ],
    youtubePlaylist: "",
    tags: [tags.ELECTRONICA, tags.HIP_HOP],
    discogsId: "4991-Spectre"
  },
  {
    name: "Kool Keith",
    from: "New York",
    avatar: "",
    youtubeClips: [
      { videoId: "-FI_0eI7qaY" },
      { videoId: "9nEffQAgMoE" },
      { videoId: "AHiSf4sqG1I" },
      { videoId: "GLU2v_cX4P8" },
      { videoId: "cFcmecBefqQ" },
      { videoId: "3hbreeIXccs" },
      { videoId: "HIDzd091J68" },
      { videoId: "Abky6hbKPpg" },
      { videoId: "2XYHJS-sLII" },
    ],
    youtubePlaylist: "",
    tags: [tags.HIP_HOP],
    discogsId: "18123-Kool-Keith"
  },
  {
    name: "Almon Memela",
    from: "South Africa",
    avatar: "",
    youtubeClips: [
      { videoId: "S0dV0WlhTY8" },
      { videoId: "APRGaf9Xcz4" }
    ],
    youtubePlaylist: "",
    tags: [tags.AFRICAN, tags.PSYCHEDELIC_FUNK],
    discogsId: "2645555-Almon-Memela"
  },
  {
    name: "Electronic System",
    from: "Belgium",
    avatar: "",
    youtubeClips: [
      { videoId: "cIwDLN2X6Rs" },
      { videoId: "YPwMQWVWPzY" },
    ],
    youtubePlaylist: "",
    tags: [tags.HIP_HOP_SAMPLE_SOURCE, tags.SOUNDTRACK],
    discogsId: "185434-Electronic-System"
  },
  {
    name: "Run Wrake",
    from: "England",
    avatar: "",
    youtubeClips: [
      { videoId: "atOAr_wTa24" },
      { videoId: "6kZornX_i-Q" },
      { videoId: "fw3XyOyl47Q" },
      { videoId: "no0cEihKXfM" },
    ],
    youtubePlaylist: "",
    tags: [tags.HIP_HOP, tags.ELECTRONICA],
    discogsId: "2013418-Run-Wrake"
  },
  {
    name: "Carl Craig",
    from: "Detroit",
    avatar: "",
    youtubeClips: [
      { videoId: "XKiJDxdvH5s" },
      { videoId: "rclTNn9c7Vo" },
      { videoId: "yaWObSR0B90" },
    ],
    youtubePlaylist: "",
    tags: [tags.HIP_HOP, tags.ELECTRONICA],
    discogsId: "871-Carl-Craig"
  },
  {
    name: "Stacey Pullen",
    from: "Detroit",
    avatar: "",
    youtubeClips: [
      { videoId: "Z0pSgX64g7w" },
      // TIZNIT!!
    ],
    youtubePlaylist: "",
    tags: [tags.HIP_HOP, tags.ELECTRONICA],
    discogsId: "67226-Stacey-Pullen"
  },
  {
    name: "François Kevorkian",
    from: "France",
    avatar: "",
    youtubeClips: [
      { videoId: "hWv1qXlixRk" },
      { videoId: "WF_SxvpS8-g" },
      { videoId: "vRam9qfOsEk" },
      { videoId: "9OFPjAP3SxA" },
      { videoId: "q0oilSn7RvA" },
    ],
    youtubePlaylist: "",
    tags: [tags.NYC_NOUVEAU, tags.HOUSE_HEAD],
    discogsId: "20662-François-Kevorkian"
  },
  {
    name: "Kalyanji Anandji",
    from: "India",
    avatar: "",
    youtubeClips: [
      { videoId: "QsqH8qHJRXo" },
      { videoId: "IABt65h2GfI" },
      { videoId: "6NkZayzLMOM" },
      { videoId: "jnwvlvPxGp4" },
      { videoId: "vaiH4dLaZ1Y" },
      { videoId: "24z0dWxeSXs" },
    ],
    youtubePlaylist: "",
    tags: [tags.HIP_HOP_SAMPLE_SOURCE],
    discogsId: "621178-Kalyanji-Anandji"
  },
  {
    name: "Raymond Scott",
    from: "New York",
    avatar: "",
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
    youtubePlaylist: "",
    tags: [tags.ELECTRONICA],
    discogsId: "26383-Raymond-Scott"
  },
  {
    name: "Avi Paul Weinstein",
    from: "USA",
    avatar: "",
    youtubeClips: [
      { videoId: "JNo8g97BuHg" },
    ],
    youtubePlaylist: "",
    tags: [tags.KRAUTROCK],
    discogsId: ""
  },
  {
    name: "Aphex Twin",
    from: "Ireland",
    avatar: "",
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
    youtubePlaylist: "",
    tags: [tags.KRAUTROCK],
    discogsId: "45-Aphex-Twin"
  },
  {
    name: "PUSH/PULL",
    from: "New York",
    avatar: "",
    youtubeClips: [
      { videoId: "cPmxTjU4i-Q" },
      { videoId: "GoZQgoZA4dA" }
    ],
    youtubePlaylist: "",
    tags: [tags.KRAUTROCK, tags.HOUSE_HEAD],
    discogsId: "214901-PushPull"
  },
  // {
  //   name: "Dick Dale",
  //   from: "Boston",
  //   avatar: "",
  //   youtubeClips: [
  //     // { videoId: "" },
  //   ],
  //   youtubePlaylist: "",
  //   tags: [tags.SURF_ROCK],
  //   discogsId: "291512-Dick-Dale"
  // },
  {
    name: "Link Wray",
    from: "North Carolina",
    avatar: "",
    youtubeClips: [
      { videoId: "du2gunyGjIw" },
      { videoId: "ucTg6rZJCu4" },
      { videoId: "Yy4T2T8q4HI" },
      // { videoId: "" },
      // { videoId: "" },
    ],
    youtubePlaylist: "",
    tags: [tags.SURF_ROCK],
    discogsId: "246644-Link-Wray"
  },
];
