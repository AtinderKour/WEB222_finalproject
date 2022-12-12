/*****************************************************************************
* WEB222 – Project
* I declare that this assignment is my own work in accordance with SenecaAcademic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Group member Name: Atinder Kour, Lovejeet Singh Student IDs: 165571217, 163010218  Date: 07-12-22
*****************************************************************************/

window.products = [
  // OBJECT 1
  {
    id: "1",
    title: "BTS Member Signature Hoodie",
    description: "Official signature hoodie for BTS fans!",
    price: 69,
    discontinued: false,
    categories: ["a1"],
    image: "https://img.staticdj.com/f1da56680c8eefdae47874199220efa6_1080x.jpeg"
  },
  {
    id: "2",
    title: "BE Album Color-Block Hoodie",
    description: "Official BTS BE Album Color-Block Hoodie!",
    price: 80,
    discontinued: false,
    categories: ["a1"],
    image: "https://img.staticdj.com/9f6972c09c1b215b3fdcfe3191cf12bb_1080x.jpeg"
  },
  {
    id: "3",
    title: "BTS Proof Run BTS Printed Hoodie",
    description: "Amazing Proof Run Hoodie!",
    price: 60,
    discontinued: false,
    categories: ["a1"],
    image: "https://img.staticdj.com/2fe04320c5c9170d8a15a97fbec71a1c_1080x.jpeg"
  },
  {
    id: "4",
    title: "BTS Love Yourself Style Hoodie!",
    description: "Love Yourself BTS Album Style Hoodie!",
    price: 65,
    discontinued: false,
    categories: ["a1"],
    image: "https://img.staticdj.com/74efd2c8248bb06c1b35e156ac63fe48_1080x.jpeg"
  },
  {
    id: "5",
    title: "BTS PROOF Hoodie!",
    description: "New Album Logo - 2022",
    price: 59,
    discontinued: true,
    categories: ["a1"],
    image: "https://i.etsystatic.com/36012522/r/il/7be3cc/3981625551/il_794xN.3981625551_654z.jpg"
  },
  {
    id: "6",
    title: "BTS - Permission To Dance Hoodie!",
    description: "Limited Edition - 2022",
    price: 66,
    discontinued: false,
    categories: ["a1"],
    image: "https://litb-cgis.rightinthebox.com/images/640x640/202112/bps/product/inc/zvfkgy1640843872351.jpg?fmt=webp&v=1"
  },
  {
    id: "7",
    title: "Yet To Come Album Hoodie!",
    description: "BUSAN Version - 2022",
    price: 64,
    discontinued: false,
    categories: ["a1"],
    image: "https://i.etsystatic.com/37534333/r/il/9f7399/4301034195/il_794xN.4301034195_dniw.jpg"
  },
  {
    id: "8",
    title: 'BTS Album "Proof"',
    description: "Official BTS Album Proof!",
    price: 100,
    discontinued: false,
    categories: ["b1"],
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ5tnQMhpIP17luJ7KIIFoYFJwK5DWRBQ5uLm87Z_IX2WE1HV1iOgm3fzGrwGxFzwIP03l8_yblzxD2pxbfaitpfLmL8UBKjrYc6WYPDn4GIiYGolnXyHLAhQ&usqp=CAE"
  },
  {
    id: "9",
    title: 'BTS Album "Butter"',
    description: "Official BTS Super-hit Album Butter!",
    price: 140,
    discontinued: false,
    categories: ["b1"],
    image:
      "https://image.globaloliveyoungshop.com/prdtImg/1626/72ee1eb3-5160-4648-bffa-dd91f892a521.JPG?RS=1500x1500&AR=0"
  },
  {
    id: "10",
    title: 'BTS Album "Map of the Soul- PERSONA"',
    description: "Official BTS Album PERSONA!",
    price: 120,
    discontinued: false,
    categories: ["b1"],
    image:
      "https://image.globaloliveyoungshop.com/prdtImg/1214/bcbae0b9-6575-4c02-9834-a3128f8b9a3f.JPG?RS=1500x1500&AR=0"
  },
  {
    id: "11",
    title: "BTS MAP OF THE SOUL : 7",
    description: "Official BTS Album Map of the Soul: 7",
    price: 90,
    discontinued: false,
    categories: ["b1"],
    image:
      "https://image.globaloliveyoungshop.com/prdtImg/1256/da85bcd8-d1f9-43bd-a305-7cb4972af74a.JPG?RS=1500x1500&AR=0"
  },
  {
    id: "12",
    title: "BTS - SKOOL LUV AFFAIR",
    description: "2nd Mini Album - Special Edition",
    price: 98,
    discontinued: true,
    categories: ["b1"],
    image:
      "https://image.globaloliveyoungshop.com/prdtImg/1443/5d1baa30-e187-48a5-8d1f-ce1428c01d06.jpg?RS=1500x1500&AR=0"
  },
  {
    id: "13",
    title: "BTS - YOU NEVER WALK ALONE",
    description: "2nd Album Repackage (2017 edition)",
    price: 78,
    discontinued: false,
    categories: ["b1"],
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSFc0HFu7x4wFpE7_n0L4-F3iPs2wfUkI3RiqY954tQGGtr_wSGt5P0X7s4TREgZqxjIeg656RyszpJdiQLic0E3rhZCeVEsg&usqp=CAE"
  },
  {
    id: "14",
    title: "BTS - BT21 KeyChains",
    description: "OT7 Edition",
    price: 25,
    discontinued: false,
    categories: ["c1"],
    image:
      "https://canary.contestimg.wish.com/api/webimage/608070ccda9d0b00552db780-large.jpg?cache_buster=9bc27f7171c3298362a1413024fc4609"
  },
  {
    id: "15",
    title: "BTS Album KeyChains",
    description: "Special Edition Only (can be customized)",
    price: 38,
    discontinued: false,
    categories: ["c1"],
    image:
      "https://i.etsystatic.com/34451023/r/il/fa773f/3740461763/il_794xN.3740461763_dtfu.jpg"
  },
  {
    id: "16",
    title: "BTS Army Bomb KeyChain",
    description: "BTS LightStick KeyChain (Army Edition)",
    price: 45,
    discontinued: false,
    categories: ["c1"],
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRuN3KzK9K3es8XqN-r132Ffqxrv5Lvlz_yWvuQpocX4-KowWcBS-AmluOrN47_eXX_JfJCitKm0ekFMeiwz3RfdcTl2KOwQaF8-YUKi3BN&usqp=CAE"
  },
  {
    id: "17",
    title: "Members PhotoCard KeyChain",
    description: "BTS Run Episode Edition (2022)",
    price: 50,
    discontinued: false,
    categories: ["c1"],
    image:
      "https://canary.contestimg.wish.com/api/webimage/61495b3fc9c4a7cf9077efce-large.jpg?cache_buster=206da26bf52d9121a37e9a9e40dd3980"
  },
  {
    id: "18",
    title: "BTS Official Logo KeyChain",
    description: "Members Signature Edition",
    price: 52,
    discontinued: false,
    categories: ["c1"],
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSqS_lXzfeoXGunKP3uAIrhTXIk8VTedghWtmSCqXdTgUwsIMYAM8Csk-fIHwX8aG8puLaT9AbIjXFhMVNQtUs-gHr98TVLlpJ3DEo9OUAPgBJzi66CiNrYdGmW&usqp=CAE"
  },
  {
    id: "19",
    title: "BTS-BT21 Plushies keyChains",
    description: "Anime Edition",
    price: 22,
    discontinued: false,
    categories: ["c1"],
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ8YEoBdMfUNihCUPX-Bcj5rEwg6o01AJjTKkbg6Q9Vhga8OR0NCRqdV0rldq0qZvAqQMN4EQcmQYZg7es2MbgSO7vsiZ8PgZMPVWTx4TEr&usqp=CAE"
  }
];
