import { ArticlesByCategoryAndPage } from '../interfaces';

const articles = [
  {
    "source": {
      "id": null,
      "name": "Blizzard.com"
    },
    "author": null,
    "title": "Heroes of the Storm Live Patch Notes - April 20, 2026 - Blizzard News",
    "description": "New patch arrived with a new mount, map updates, major Arthas rework, and balance changes!",
    "url": "https://news.blizzard.com/en-us/article/24261475/heroes-of-the-storm-live-patch-notes-april-20-2026",
    "urlToImage": "https://bnetcmsus-a.akamaihd.net/cms/blog_header/g8/G8NAM4UMWQ0D1620254978629.png",
    "publishedAt": "2026-04-20T17:10:31Z",
    "content": "Our next Heroes of the Storm patch is live! Read on for more information.\r\nNOTE: Orange text indicates a change between PTR and Live notes.\r\nQuick Navigation:\r\nGeneral\r\n<ul><li>New Mount: Scrapper Ma… [+16451 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "The A.V. Club"
    },
    "author": null,
    "title": "20 years later, Nintendo's weird RPG Mother 3 remains the greatest game never sold - AV Club",
    "description": "Mother 3, the sequel to Earthbound, came out 20 years ago today--but not in America, where it's never been released.",
    "url": "https://www.avclub.com/mother-3-release-nintendo-game",
    "urlToImage": "https://img.pastemagazine.com/wp-content/avuploads/2026/04/17120903/mother_3_20th_1026.jpg",
    "publishedAt": "2026-04-20T17:02:42Z",
    "content": "Today its taken for granted that almost every major video game will eventually get a worldwide release, but this wasnt always the norm. Before the mid-to-late-’00s, it often took years for games made… [+6809 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Pure Xbox"
    },
    "author": "Pure Xbox",
    "title": "Xbox Unveils New Controller And Headset For Forza Horizon 6 - Pure Xbox",
    "description": "Pre-orders go live today!",
    "url": "https://www.purexbox.com/news/2026/04/xbox-unveils-new-controller-and-headset-for-forza-horizon-6",
    "urlToImage": "https://images.purexbox.com/2f6822b0607d6/large.jpg",
    "publishedAt": "2026-04-20T16:56:13Z",
    "content": "We've got a new Xbox controller and headset coming our way for Forza Horizon 6! Both of them have now been officially unveiled, with pre-orders starting today ahead of a May 19th release they retail … [+2926 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Insider-gaming.com"
    },
    "author": "Sam Sepiol",
    "title": "PlayStation To Require Age Verification For Certain Online Features - Insider Gaming",
    "description": "PlayStation has revealed that players will need to verify their age later this year to continue using communication features.",
    "url": "https://insider-gaming.com/playstation-to-require-age-verification-for-certain-online-features/",
    "urlToImage": "https://insider-gaming.com/wp-content/uploads/2025/03/playstation-live-service-multiplayer-1.jpg",
    "publishedAt": "2026-04-20T16:47:05Z",
    "content": "PlayStation will ask players to verify their age later this year to continue using communication features. \r\nThe protection and safety of younger audiences in the gaming community have become a prior… [+1864 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "9to5Mac"
    },
    "author": "Ryan Christoffel",
    "title": "iPhone 18 coming later than usual with new cost-cutting measures, per leaker - 9to5Mac",
    "description": "Apple’s flagship iPhone 18 launch could look fairly different than usual, with later timing and new cost-cutting measures for the base model.",
    "url": "https://9to5mac.com/2026/04/20/iphone-18-coming-later-than-usual-with-new-cost-cutting-measures-per-leaker/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2025/12/iphone-17-black.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2026-04-20T16:09:00Z",
    "content": "Apples flagship iPhone lineup could look fairly different than usual this fall, and new posts from Weibo leaker Fixed Focus Digital provide insight into the later launch timing and new cost-cutting m… [+1729 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Insider-gaming.com"
    },
    "author": "Sam Sepiol",
    "title": "Assassin's Creed Black Flag Resynced Showcase Announced - Insider Gaming",
    "description": "Players will finally be able to see Assassin's Creed Black Flag Resynced in all its glory through a showcase later this week.",
    "url": "https://insider-gaming.com/assassins-creed-black-flag-resynced-showcase-announced/",
    "urlToImage": "https://insider-gaming.com/wp-content/uploads/2023/06/black-flag.jpg",
    "publishedAt": "2026-04-20T16:07:28Z",
    "content": "Ubisoft has officially announced that the reveal showcase for Assassin’s Creed Black Flag Resynced will arrive this week on April 23. \r\nAfter months of anticipation, countless leaks and rumors, and e… [+1716 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "BGR"
    },
    "author": "Sydney Louw Butler",
    "title": "7 Palm-Sized Gadgets You Didn't Know You Needed - bgr.com",
    "description": "Advanced tech doesn't have to come in big packages, which is why we unearthed these palm-sized gadgets that will make your life a little easier.",
    "url": "https://www.bgr.com/2148662/palm-sized-gadgets-you-need/",
    "urlToImage": "https://www.bgr.com/img/gallery/7-palm-sized-gadgets-you-didnt-know-you-needed/l-intro-1776238024.jpg",
    "publishedAt": "2026-04-20T16:02:00Z",
    "content": "The speakers in our phones are rather amazing when you think about it. The typical smartphone these days manages to produce decent, full-range stereo sound using nothing more than a pair of tiny spea… [+1069 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "The Drive"
    },
    "author": "Byron Hurd",
    "title": "2026 Ford Mustang Dark Horse SC Offers GTD-Like Power for a Third of the Price - The Drive",
    "description": "The new supercharged Mustang will make nearly 800 horsepower from the factory—just don't call it a Shelby.",
    "url": "http://www.thedrive.com/news/2026-ford-mustang-dark-horse-sc-offers-gtd-like-power-for-a-third-of-the-price",
    "urlToImage": "https://www.thedrive.com/wp-content/uploads/2026/04/dark-horse-sc-hero.jpg?w=1200",
    "publishedAt": "2026-04-20T16:00:04Z",
    "content": "The biggest car news and reviews, no BS\r\nOur free daily newsletter sends the stories that really matter directly to you, every weekday.\r\nTerms of Service &amp; Privacy Policy.\r\nFord has confirmed the… [+2376 chars]"
  },
  {
    "source": {
      "id": "the-verge",
      "name": "The Verge"
    },
    "author": "Andrew Liszewski",
    "title": "Birdfy’s new 4K feeder wants to teach you about the birds it identifies - The Verge",
    "description": "The Birdfy Feeder Metal 2 features a chew-proof design to protect its seed stockpile from squirrels and other animals.",
    "url": "https://www.theverge.com/tech/914832/birdfy-feeder-metal-2-4k-wide-angle-camera-ornisense-ai-price-availability",
    "urlToImage": "https://platform.theverge.com/wp-content/uploads/sites/2/2026/04/birdfly1.jpg?quality=90&strip=all&crop=0%2C10.708790198488%2C100%2C78.582419603023&w=1200",
    "publishedAt": "2026-04-20T16:00:00Z",
    "content": "<ul><li></li><li></li><li></li></ul>\r\nThe Birdfy Feeder Metal 2 features a chew-proof design to protect its seed stockpile from squirrels and other animals.\r\nThe Birdfy Feeder Metal 2 features a chew… [+2742 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "9to5google.com"
    },
    "author": "Ben Schoon",
    "title": "Fitbit Air reportedly launching May 16, could cost around $100 with several bands & colors - 9to5Google",
    "description": "Over the weekend, we first reported the name of Google’s Whoop competitor as “Fitbit Air,” and now more details are...",
    "url": "http://9to5google.com/2026/04/20/fitbit-air-release-date-price-color-report/",
    "urlToImage": "https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2026/04/fitbit-band-steph-curry-1.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2026-04-20T15:20:00Z",
    "content": "Over the weekend, we first reported the name of Google’s Whoop competitor as “Fitbit Air,” and now more details are coming out, including potential pricing, release date, and colors.\r\nCiting supplier… [+1688 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Eurogamer.net"
    },
    "author": "Fran Ruiz",
    "title": "New ID@Xbox showcase in collaboration with IGN set for 23rd April - Eurogamer.net",
    "description": "A new ID@Xbox showcase in partnership with IGN has been set for 23rd April, with Aphelion, Solo Leveling Arise Overdrive, and more set to make new reveals.",
    "url": "https://www.eurogamer.net/id-xbox-ign-showcase-april-2026-announced",
    "urlToImage": "https://assetsio.gnwcdn.com/ID-Xbox-Showcase-April-2026.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
    "publishedAt": "2026-04-20T15:05:46Z",
    "content": "IGN is partnering with ID@Xbox again to deliver a new showcase on 23rd April, and we've received the first details about the games coming to Xbox and PC that will be present.\r\nIndie games and mid-siz… [+1059 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Gematsu"
    },
    "author": "Sal Romano",
    "title": "Beast of Reincarnation pre-orders now available - Gematsu",
    "description": "Physical and digital pre-orders for “one-person, one-dog action RPG” Beast of Reincarnation are now available, publisher Fictions and developer Game Freak announced.",
    "url": "https://www.gematsu.com/2026/04/beast-of-reincarnation-pre-orders-now-available",
    "urlToImage": "https://www.gematsu.com/wp-content/uploads/2026/04/Beast-Reincarnation-Pre-Orders_04-20-26.jpg",
    "publishedAt": "2026-04-20T14:53:38Z",
    "content": "Physical and digital pre-orders for “one-person, one-dog action RPG” Beast of Reincarnation are now available, publisher Fictions and developer Game Freak announced. \r\nThe game will be available in t… [+2771 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Kotaku"
    },
    "author": null,
    "title": "Pragmata Actor Was Afraid To Post About The Artemis Crew: ‘I Know So Much About The F*cking Moon’ - Kotaku",
    "description": null,
    "url": "https://kotaku.com/pragmata-hugh-voice-actor-david-menkin-artemis-moon-2000689039",
    "urlToImage": null,
    "publishedAt": "2026-04-20T14:46:09Z",
    "content": null
  },
  {
    "source": {
      "id": null,
      "name": "MacRumors"
    },
    "author": "Joe Rossignol",
    "title": "iPhone 18 Pro Launching in September With These 10 New Features - MacRumors",
    "description": "While the iPhone 18 Pro and iPhone 18 Pro Max are not launching until September, there are already plenty of rumors about the devices.   It was...",
    "url": "https://www.macrumors.com/2026/04/20/iphone-18-pro-list-of-10-new-features/",
    "urlToImage": "https://images.macrumors.com/t/DaKqFvrp9SeA-PSVk2VPrQ7QXog=/2500x/article-new/2026/04/Four-iPhone-18-Pro-Colors-Mock-Feature.jpg",
    "publishedAt": "2026-04-20T14:13:56Z",
    "content": "While the iPhone 18 Pro and iPhone 18 Pro Max are not launching until September, there are already plenty of rumors about the devices.\r\nIt was initially reported that the iPhone 18 Pro models would h… [+3522 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Warhammer-community.com"
    },
    "author": null,
    "title": "#New40k – Chaplain with Jump Pack Revealed - Warhammer Community",
    "description": "Recite the Litany of Hate with the new Chaplain miniature for Warhammer 40,000.",
    "url": "https://www.warhammer-community.com/articles/y3qjzfux/new40k-chaplain-with-jump-pack-revealed",
    "urlToImage": "https://assets.warhammer-community.com/20-04_1-feature-s3d2dglsgx.jpg",
    "publishedAt": "2026-04-20T13:57:32Z",
    "content": "© Copyright Games Workshop Limited 2026. GW, Games Workshop, Citadel, White Dwarf, Space Marine, 40K, Warhammer, Warhammer 40,000, the Aquila Double-headed Eagle logo, Warhammer Age of Sigmar, Battle… [+1391 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "9to5Mac"
    },
    "author": "Ryan Christoffel",
    "title": "iOS 27 will drop support for four iPhone models, says leaker - 9to5Mac",
    "description": "Per Weibo leaker Instant Digital, iOS 27 will drop support for four iPhone models currently supported by iOS 26.",
    "url": "https://9to5mac.com/2026/04/20/ios-27-will-drop-support-for-four-iphone-models-says-leaker/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2019/10/iPhone-11-Pro-Top-Features-Midnight-Green-vs-Space-Gray.jpeg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2026-04-20T13:48:00Z",
    "content": "iOS 27 will be unveiled on June 8 at WWDC, and a new leak indicates the software update could drop support for four iPhone models. Here are the details.\r\nWere getting close to Apples big iOS 27 unvei… [+1469 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Videocardz.com"
    },
    "author": null,
    "title": "DDR5 HUDIMM simulation with ASUS BIOS shows nearly 50% bandwidth loss - VideoCardz.com",
    "description": "Half the memory bus, half the bandwidth HKEPC has published what appears to be the first hands-on performance test of DDR5 HUDIMM, a cut-down memory",
    "url": "https://videocardz.com/newz/ddr5-hudimm-simulation-with-asus-bios-shows-nearly-50-bandwidth-loss",
    "urlToImage": "https://cdn.videocardz.com/1/2026/04/HUDIMM-HKEPC-TEST.jpg",
    "publishedAt": "2026-04-20T13:36:00Z",
    "content": "HKEPC has published what appears to be the first hands-on performance test of DDR5 HUDIMM, a cut-down memory design that keeps only one 32-bit sub-channel instead of the two 32-bit sub-channels used … [+1857 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Wccftech"
    },
    "author": "Hassan Mujtaba",
    "title": "NVIDIA Improves Path Tracing Performance By 3x With Enhanced ReSTIR Algorithms, Prepped For Next-Gen Gaming - Wccftech",
    "description": "NVIDIA shared a new and improved ReSTIR algorithm, which improves Path Tracing performance by 2-3x, setting the stage for next-gen gaming.",
    "url": "https://wccftech.com/nvidia-improves-path-tracing-performance-by-3x-enhanced-restir-algorithms-next-gen-gaming/",
    "urlToImage": "https://cdn.wccftech.com/wp-content/uploads/2026/04/NVIDIA-ReSTIR-PT-Enhanced-1920x1008.jpg",
    "publishedAt": "2026-04-20T13:30:00Z",
    "content": "NVIDIA has shared a new and improved ReSTIR algorithm, which improves Path Tracing performance by 2-3x, setting the stage for next-gen gaming.\r\nPC games are rapidly adopting Path Tracing as a means t… [+5112 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Xbox.com"
    },
    "author": "Mike Nelson, Xbox Wire Editor",
    "title": "Coming to Xbox Game Pass: Kiln, Aphelion, Final Fantasy V, and More - Xbox",
    "description": "What do Chocobos, space, vampires, and sentient pottery have in common? If it’s anything more than “themes of games you can play soon” we’d really like to know what kind of weird list that is.",
    "url": "https://news.xbox.com/en-us/2026/04/20/xbox-game-pass-april-2026-wave-2/",
    "urlToImage": "https://xboxwire.thesourcemediaassets.com/sites/2/2026/04/XBOX_GamePass_Announcement_16x9_4.20.2026_EN-US-cda53a545986f8283f75.jpg",
    "publishedAt": "2026-04-20T13:03:12Z",
    "content": "What do Chocobos, space, vampires, and sentient pottery have in common? If its anything more than themes of games you can play soon wed really like to know what kind of weird list that is. Also, dont… [+5305 chars]"
  },
  {
    "source": {
      "id": "wired",
      "name": "Wired"
    },
    "author": "Boone Ashworth",
    "title": "Prego Has a Dinner-Conversation-Recording Device, Capisce? - WIRED",
    "description": "The pasta-sauce company has partnered with the nonprofit StoryCorps on a device designed to record family conversations around the table and save them for all time.",
    "url": "https://www.wired.com/story/prego-has-a-dinner-recording-device-capiche/",
    "urlToImage": "https://media.wired.com/photos/69e162684f4f8c52a7b1a820/191:100/w_1280,c_limit/Prego-AI-Dinner-Bot-Gear-Prego_ConnectionKeeper-5.jpg",
    "publishedAt": "2026-04-20T13:00:00Z",
    "content": "Prego, the pasta sauce company, is getting into hardware with a device that sits on your table and records dinner conversations. No, this isnt April Fools.\r\nThe Connection Keeper is a round puck that… [+2564 chars]"
  },
  {
    "source": {
      "id": "the-verge",
      "name": "The Verge"
    },
    "author": "Jay Peters",
    "title": "Vampire Survivors’ new spinoff switches genres but keeps the good vibes - The Verge",
    "description": "Vampire Crawlers translates the Vampire Survivors experience into a whole new style of game. This time, it’s a dungeon crawler mixed with a roguelike deckbuilder.",
    "url": "https://www.theverge.com/games/913410/vampire-survivors-new-spinoff-switches-genres-but-keeps-the-good-vibes",
    "urlToImage": "https://platform.theverge.com/wp-content/uploads/sites/2/2026/04/ss_a59d07db33cceeb68d9f7fbbe2748326203e71e3.1920x1080.jpg?quality=90&strip=all&crop=0%2C3.4613147178592%2C100%2C93.077370564282&w=1200",
    "publishedAt": "2026-04-20T13:00:00Z",
    "content": "<ul><li></li><li></li><li></li></ul>\r\nVampire Crawlers successfully translates the Vampire Survivors experience into a dungeon crawler mixed with a roguelike deckbuilder.\r\nVampire Crawlers successful… [+4727 chars]"
  },
  {
    "source": {
      "id": "the-verge",
      "name": "The Verge"
    },
    "author": "Jess Weatherbed",
    "title": "Huawei beats Samsung and Apple to market with the first wide foldable - The Verge",
    "description": "Huawei has launched its passport-style Pura X Max wide foldable in China, ahead of similar devices said to be coming from Apple and Samsung.",
    "url": "https://www.theverge.com/tech/914807/huawei-pura-x-max-launch-price-specs-availability",
    "urlToImage": "https://platform.theverge.com/wp-content/uploads/sites/2/2026/04/Huawei-Pura-X-Max-hero.jpg?quality=90&strip=all&crop=0%2C10.732984293194%2C100%2C78.534031413613&w=1200",
    "publishedAt": "2026-04-20T12:19:26Z",
    "content": "<ul><li></li><li></li><li></li></ul>\r\nThe Pura X Max launched in China today.\r\nThe Pura X Max launched in China today.\r\nby\r\nJess WeatherbedClose\r\nPosts from this author will be added to your daily em… [+3298 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Pure Xbox"
    },
    "author": "Pure Xbox",
    "title": "Microsoft Rewards Announces Major Changes For May 2026 Across Multiple Regions - Pure Xbox",
    "description": "\"We are excited to announce new changes coming soon\"",
    "url": "https://www.purexbox.com/news/2026/04/microsoft-rewards-announces-major-changes-for-may-2026-across-multiple-regions",
    "urlToImage": "https://images.purexbox.com/3390aba220c02/large.jpg",
    "publishedAt": "2026-04-20T12:15:52Z",
    "content": "Over the past few months, we've noticed a few Microsoft Rewards / Xbox Rewards users mentioning that they'd seen a notification of major changes coming to their membership, but the rollout has been q… [+2317 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Push Square"
    },
    "author": "Push Square",
    "title": "'We Haven't Forgotten You': No Rest for the Wicked Dev Teases Action RPG's PS5 Release - Push Square",
    "description": "Two years later",
    "url": "https://www.pushsquare.com/news/2026/04/we-havent-forgotten-you-no-rest-for-the-wicked-dev-teases-action-rpgs-ps5-release",
    "urlToImage": "https://images.pushsquare.com/186aa0e63d566/large.jpg",
    "publishedAt": "2026-04-20T12:00:00Z",
    "content": "If you can believe it, No Rest for the Wicked has now been in early access for two whole years on PC, but it's been a long time since its once-promised console release was officially acknowledged.\r\nT… [+1029 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Creative Bloq"
    },
    "author": "Ian Dean",
    "title": "30 years on, Metal Slug still embarrasses modern ‘realistic’ games - Creative Bloq",
    "description": "Why SNK's excessive, hand-animation still feels fresh today.",
    "url": "https://www.creativebloq.com/entertainment/gaming/why-metal-slug-still-looks-better-than-many-modern-games",
    "urlToImage": "https://cdn.mos.cms.futurecdn.net/kmcY3JmDTRFxTzLtpXYXz5-886-80.jpg",
    "publishedAt": "2026-04-20T12:00:00Z",
    "content": null
  },
  {
    "source": {
      "id": null,
      "name": "Videocardz.com"
    },
    "author": null,
    "title": "NZXT AIO leak damages RTX 5090 ROG Astral, company offers $2,855 but user says it is not enough to replace the card - VideoCardz.com",
    "description": "Leaking Kraken AIO damages RTX 5090 ROG Astral A Reddit post details a long-running dispute between an NZXT customer and the company after an NZXT Kraken",
    "url": "https://videocardz.com/newz/nzxt-aio-leak-damages-rtx-5090-rog-astral-company-offers-2855-but-user-says-it-is-not-enough-to-replace-the-card",
    "urlToImage": "https://cdn.videocardz.com/1/2026/04/ROG-ASTRAL-NZXT-AIO.jpg",
    "publishedAt": "2026-04-20T11:46:00Z",
    "content": "© Sufficient-Carry6256/PCMR Reddit\r\nA Reddit post details a long-running dispute between an NZXT customer and the company after an NZXT Kraken AIO allegedly leaked onto an ASUS ROG Astral GeForce RTX… [+1678 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Android Police"
    },
    "author": "Rahul Naskar",
    "title": "I thought NotebookLM was good, until I found its cooler cousin - Android Police",
    "description": "It gives more real-world exposure to AI than anything else",
    "url": "https://www.androidpolice.com/i-thought-notebooklm-was-good-until-i-found-its-cooler-cousin/",
    "urlToImage": "https://static0.anpoimages.com/wordpress/wp-content/uploads/2026/04/the-huxe-logo-surrounded-by-floating-digital-podcast-cards-with-the-notebooklm-logo-blurred-in-the-background.png?w=1600&h=900&fit=crop",
    "publishedAt": "2026-04-20T11:00:10Z",
    "content": "I use NotebookLM almost every day for learning. It is my favorite AI tool for consuming content quickly because it packs all the best learning tools.\r\nHowever, after using NotebookLM for several mont… [+4439 chars]"
  },
  {
    "source": {
      "id": "ars-technica",
      "name": "Ars Technica"
    },
    "author": "Scharon Harding",
    "title": "Clarifying HEVC licensing fees, royalties, and why vendors kill HEVC support - Ars Technica",
    "description": "How does HEVC implementation really work these days?",
    "url": "https://arstechnica.com/gadgets/2026/04/lawsuits-licensing-and-royalties-are-complicating-4k-video-support-in-gadgets/",
    "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2026/03/GettyImages-1396577576-1152x648.jpg",
    "publishedAt": "2026-04-20T11:00:07Z",
    "content": null
  },
  {
    "source": {
      "id": null,
      "name": "SamMobile"
    },
    "author": "Abhijeet Mishra",
    "title": "Galaxy S24 and Fold 7 get Galaxy S26 AI features with latest One UI 8.5 beta - SamMobile",
    "description": "Samsung is making good on its promise to bring new Galaxy AI features from the Galaxy S26 lineup to existing devices. It has released new One UI 8.5 beta updates today that include these features for several devices, including the Galaxy Z Fold 7 and the Gala…",
    "url": "https://www.sammobile.com/news/galaxy-s24-fold-7-galaxy-s26-ai-features-one-ui-8-5-beta/",
    "urlToImage": "https://www.sammobile.com/wp-content/uploads/2025/12/Galaxy-S24-Ultra-One-UI-8.5-1200x675.jpg",
    "publishedAt": "2026-04-20T10:51:00Z",
    "content": "Samsung is making good on its promise to bring new Galaxy AI features from the Galaxy S26 lineup to existing devices. It has released new One UI 8.5 beta updates today that include these features for… [+1137 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Eurogamer.net"
    },
    "author": "Robert Purchese",
    "title": "\"He asked to do some ridiculous things, and I said 'No'\" - PlayStation legend Shuhei Yoshida says Jim Ryan fired him because he didn't listen to him - Eurogamer.net",
    "description": "Why did Sony push Shuhei Yoshida out of his role leading PlayStation's first-party games? He'd overseen some huge successes. Well, apparently, he didn't listen.",
    "url": "https://www.eurogamer.net/shuhei-yoshida-fired-playstation-jim-ryan",
    "urlToImage": "https://assetsio.gnwcdn.com/sonys-shu-yoshida-talks-the-next-20-years-of-playstation-1443607449890.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
    "publishedAt": "2026-04-20T10:25:21Z",
    "content": "Shuhei Yoshida, the former long-tenured leader of Sony's first-party PlayStation Worldwide Studios, has said he was fired from the role by Jim Ryan - the boss of PlayStation - because he didn't liste… [+1944 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Android Authority"
    },
    "author": null,
    "title": "I'm never buying another Kindle, and neither should you - Android Authority",
    "description": "Bricked hardware, ads, and control. The Amazon Kindle is no longer built for readers. Here’s why I’m done with it.",
    "url": "https://www.androidauthority.com/amazon-kindle-2026-3657863/",
    "urlToImage": "https://www.androidauthority.com/wp-content/uploads/2019/11/Amazon-Kindle-Oasis-with-warmth-and-brightness-slider.jpg",
    "publishedAt": "2026-04-20T10:05:03Z",
    "content": "Ive carried a Kindle in my bag for over a decade. Through every hardware iteration, from the physical keyboard right up to the latest Paperwhite, a Kindle has been with me everywhere be it on an airp… [+12118 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Eurogamer.net"
    },
    "author": "Victoria Phillips Kennedy",
    "title": "Pragmata surpasses 1m copies sold in just two days - Eurogamer.net",
    "description": "In just two days after release, Capcom's latest game - Pragmata - has surpassed 1m units sold.",
    "url": "https://www.eurogamer.net/pragmata-surpasses-1m-copies-sold-in-two-days",
    "urlToImage": "https://assetsio.gnwcdn.com/Close-up-of-Diana-in-Pragmata.-She-has-blond-hair-and-blue-eyes.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
    "publishedAt": "2026-04-20T10:03:10Z",
    "content": "In just two days after release, Capcom's latest game - Pragmata - has surpassed 1m units sold.\r\nThe studio noted Capcom's space-based game was created by \"primarily\" a team of younger developers, who… [+1505 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Android Police"
    },
    "author": "Stephen Radochia",
    "title": "Motorola is doing what Samsung won't, and it's starting to pay off - Android Police",
    "description": "Keep bringing back what Samsung doesn't",
    "url": "https://www.androidpolice.com/motorola-is-doing-what-samsung-wont-and-its-starting-to-pay-off/",
    "urlToImage": "https://static0.anpoimages.com/wordpress/wp-content/uploads/wm/2025/04/moto-g-stylus-2025-with-stylus.jpg?w=1600&h=900&fit=crop",
    "publishedAt": "2026-04-20T10:00:10Z",
    "content": "Moto is slowly becoming the anti-Samsung, and its made me love the company. Its not by accident, and over the last few years, Motorola has made many smart choices.\r\nThe company has struck a fantastic… [+4119 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "BleepingComputer"
    },
    "author": "Sergiu Gatlan",
    "title": "Microsoft pulls service update causing Teams launch failures - BleepingComputer",
    "description": "Microsoft has reverted a recent service update that was preventing some customers from launching the Microsoft Teams desktop client.",
    "url": "https://www.bleepingcomputer.com/news/microsoft/microsoft-fixes-teams-client-launch-failures-caused-by-service-update/",
    "urlToImage": "https://www.bleepstatic.com/content/hl-images/2025/11/13/Microsoft_Teams.jpg",
    "publishedAt": "2026-04-20T09:40:20Z",
    "content": "Microsoft has reverted a recent service update that was preventing some customers from launching the Microsoft Teams desktop client.\r\nAffected users are getting stuck on the loading screen and seeing… [+2468 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Nintendo Life"
    },
    "author": "Nintendo Life",
    "title": "UK Charts: Tomodachi Life Is Living The Dream In Its Debut Week - Nintendo Life",
    "description": "Mii, myself and I",
    "url": "https://www.nintendolife.com/news/2026/04/uk-charts-tomodachi-life-is-living-the-dream-in-its-debut-week",
    "urlToImage": "https://images.nintendolife.com/14f8a80d8f850/large.jpg",
    "publishedAt": "2026-04-20T09:30:00Z",
    "content": "Image: Nintendo\r\nWe had to give our eyes a little rub and pull a double-take as we opened this week's UK charts data this morning. Is that... Tomodachi Life: Living the Dream in the top spot?\r\nYes, d… [+4277 chars]"
  },
  {
    "source": {
      "id": "ign",
      "name": "IGN"
    },
    "author": "Wesley Yin-Poole",
    "title": "Battlestate Games Has Released Escape From Tarkov Update 1.0.4.5 — Check Out the Patch Notes - IGN",
    "description": "Battlestate Games has released update 1.0.4.5 for Escape from Tarkov, which makes a number of improvements and balance changes. Check out the patch notes.",
    "url": "https://www.ign.com/articles/escape-from-tarkov-update",
    "urlToImage": "https://assets-prd.ignimgs.com/2026/04/20/tarkov-1776676945861.jpg?width=1280&format=jpg&auto=webp&quality=80",
    "publishedAt": "2026-04-20T09:24:30Z",
    "content": "Battlestate Games has released update 1.0.4.5 for Escape from Tarkov, which makes a number of improvements and balance changes.\r\nThe influential extraction shooter has increased the FPS limit in menu… [+5541 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Gizmodo.com"
    },
    "author": "Mike Pearl",
    "title": "Report Says Memory Shortage Could Delay Release of New Macs - Gizmodo",
    "description": "A touchscreen MacBook Pro or top-of-the-line Mac Studio may not be coming your way soon.",
    "url": "https://gizmodo.com/report-says-memory-shortage-could-delay-release-of-new-macs-2000748320",
    "urlToImage": "https://gizmodo.com/app/uploads/2025/03/Apple-Mac-Studio-side-light-1200x675.jpg",
    "publishedAt": "2026-04-20T09:01:02Z",
    "content": "Highly anticipated upgrades to Apples Mac computer models are reportedly hitting delays caused by an ongoing memory shortage brought about by the proliferation of AI, according to Bloombergs Mark Gur… [+1079 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Timeextension.com"
    },
    "author": "Time Extension",
    "title": "\"That Was Crazy\" - Retro Panel Gets Interrupted After Bomb Threat - Time Extension",
    "description": "\"This is not how I expected the livestream to go\"",
    "url": "https://www.timeextension.com/news/2026/04/that-was-crazy-retro-panel-gets-interrupted-after-bomb-threat",
    "urlToImage": "https://images.timeextension.com/5399518670ce1/large.jpg",
    "publishedAt": "2026-04-20T08:45:00Z",
    "content": "Image: @AmigaBill_\r\nA retro computing panel featuring YouTubers and podcasters was interrupted by a bomb threat that brought the Vintage Computer Festival East event to an early end this weekend.\r\nTh… [+1314 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "BleepingComputer"
    },
    "author": "Sergiu Gatlan",
    "title": "Microsoft releases emergency updates to fix Windows Server issues - BleepingComputer",
    "description": "Microsoft has released out-of-band (OOB) updates to fix issues affecting Windows Server systems after installing the April 2026 security updates.",
    "url": "https://www.bleepingcomputer.com/news/microsoft/microsoft-releases-emergency-updates-to-fix-windows-server-issues/",
    "urlToImage": "https://www.bleepstatic.com/content/hl-images/2026/04/15/Windows_Server.jpg",
    "publishedAt": "2026-04-20T08:30:56Z",
    "content": "Microsoft has released out-of-band (OOB) updates to fix issues affecting Windows Server systems after installing the April 2026 security updates.\r\nAs Microsoft confirmed last week, some admins may ex… [+2136 chars]"
  }
];

const parsedArticles = articles.map(article => ({
  ...article,
  source: {
    ...article.source,
    id: article.source.id === null ? undefined : article.source.id
  },
  author: article.author === null ? undefined : article.author,
  description: article.description === null ? undefined : article.description,
  urlToImage: article.urlToImage === null ? undefined : article.urlToImage,
  content: article.content === null ? undefined : article.content,
  publishedAt: new Date(article.publishedAt as unknown as string)
}));

export const storedArticlesByCategory: ArticlesByCategoryAndPage = {
  business: {
    page: 1,
    articles: parsedArticles
  }
};
