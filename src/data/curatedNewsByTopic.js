const curatedNewsByTopic = {
  "5-7": {
    // 🧠 Brain Boosters
    puzzlesAndRiddles: [
      {
        title: "🧩 Kids Create Riddles",
        summary: "A school contest invited children to invent tricky riddles for classmates.",
        fallback: "Make up a riddle and see if your family can solve it.",
        whyCool: "Riddles stretch both your brain and your sense of humor."
      },
      {
        title: "❓ Riddle Time in the Library",
        summary: "Local libraries hosted riddle boards where kids posted questions for others.",
        fallback: "Write a riddle and tape it on the fridge for your family.",
        whyCool: "Riddles are puzzles made out of words."
      }
    ],

    // 🎮 Games & Building
    minecraft: [
      {
        title: "🎮 Minecraft Builders Show Creativity",
        summary: "Students recreated famous landmarks in Minecraft for a school project.",
        fallback: "Try building your school or favorite place in Minecraft.",
        whyCool: "Minecraft turns imagination into something you can explore."
      },
      {
        title: "🌍 Green Cities in Minecraft",
        summary: "Kids built eco-friendly cities in Minecraft to imagine the future.",
        fallback: "Add trees, ponds, or gardens to your Minecraft world.",
        whyCool: "Games can help us picture a better planet."
      }
    ],
    roblox: [
      {
        title: "🕹️ Roblox Game Tops the Charts",
        summary: "A treasure-hunting adventure became one of the most-played Roblox games this year.",
        fallback: "Design your dream game on paper, then try Roblox Studio.",
        whyCool: "Roblox is built by players just like you."
      },
      {
        title: "🎡 Roblox Theme Parks",
        summary: "Kids created virtual amusement parks with rides and mini-games.",
        fallback: "Draw your dream amusement park.",
        whyCool: "Games let you create new worlds from scratch."
      }
    ],
    lego: [
      {
        title: "🧱 Record-Breaking Lego Tower",
        summary: "Builders stacked Legos into a tower taller than a giraffe at a community event.",
        fallback: "See how high you can stack your Lego bricks before it tips.",
        whyCool: "Legos can become almost anything you imagine."
      },
      {
        title: "🚀 Lego at Science Fairs",
        summary: "Kids used Lego to build rockets, cars, and bridges for school projects.",
        fallback: "Build a bridge with blocks and see if it can hold a toy.",
        whyCool: "Building teaches problem-solving."
      }
    ],

    // 🦸 Heroes & Adventures
    superheroes: [
      {
        title: "🦸 Spider-Man Voted Favorite",
        summary: "In a kids’ magazine poll, Spider-Man was named the most popular superhero.",
        fallback: "Invent your own superhero and design their costume.",
        whyCool: "Heroes remind us that anyone can be brave."
      },
      {
        title: "📚 Comic Book Clubs",
        summary: "Kids started book clubs to share and talk about their favorite superhero comics.",
        fallback: "Make a short comic about a superhero of your own.",
        whyCool: "Comics mix pictures and stories together."
      }
    ],
    dogman: [
      {
        title: "📘 New Dog Man Book Announced",
        summary: "Dav Pilkey revealed another Dog Man adventure is coming soon.",
        fallback: "Draw your own Dog Man comic strip.",
        whyCool: "Comics can be funny and heroic at the same time."
      },
      {
        title: "🎨 Dog Man Fan Art",
        summary: "Libraries hosted art shows where kids displayed their Dog Man drawings.",
        fallback: "Make a poster of your favorite Dog Man scene.",
        whyCool: "Art lets you join in the story yourself."
      }
    ],
    magicAndFairyTales: [
      {
        title: "🧚 Fairy Tales on Stage",
        summary: "Students performed fairy tales with silly twists in a school play.",
        fallback: "Act out a fairy tale with stuffed animals.",
        whyCool: "Fairy tales change every time they’re retold."
      },
      {
        title: "📖 New Fairy Tale Books",
        summary: "Publishers released new picture books inspired by classic fairy tales.",
        fallback: "Invent your own fairy tale character.",
        whyCool: "Stories grow when new people tell them."
      }
    ],

    // 🐾 Animals & Nature
    animals: [
      {
        title: "🐼 Panda Cubs Celebrate Birthday",
        summary: "Two panda cubs at the Smithsonian Zoo had a bamboo cake for their birthday.",
        fallback: "Draw your favorite animal having a birthday party.",
        whyCool: "Zoos help protect endangered animals."
      },
      {
        title: "🦒 Kids Meet Giraffes",
        summary: "Families visited giraffes at the zoo and fed them leafy snacks.",
        fallback: "Stretch tall like a giraffe reaching for leaves.",
        whyCool: "Animals amaze us with their shapes and sizes."
      }
    ],
    turtles: [
      {
        title: "🐢 Sea Turtle Rescue",
        summary: "Volunteers helped baby turtles reach the ocean safely.",
        fallback: "Pretend to be a turtle crawling to the water.",
        whyCool: "Turtles have lived since the time of dinosaurs."
      },
      {
        title: "🌊 Turtle Release Day",
        summary: "Children joined wildlife groups to release turtles back into the sea.",
        fallback: "Draw a picture of a turtle swimming in the ocean.",
        whyCool: "Helping animals protects the planet."
      }
    ],
    puppies: [
      {
        title: "🐶 Puppy Training Classes",
        summary: "A program taught kids how to care for and train rescue puppies.",
        fallback: "Teach a stuffed animal a new trick.",
        whyCool: "Caring for pets teaches patience and love."
      },
      {
        title: "🏆 Puppy Talent Show",
        summary: "Families showed off their puppies’ funniest tricks at a local fair.",
        fallback: "Make up a silly trick and show your family.",
        whyCool: "Pets bring joy to everyone around them."
      }
    ],
    bugsAndNature: [
      {
        title: "🐞 Bug Safari",
        summary: "Kids explored their backyards to find beetles, ants, and butterflies.",
        fallback: "Go on a bug hunt with a parent and count what you see.",
        whyCool: "Even small bugs play big roles in nature."
      },
      {
        title: "🦋 Butterfly Release",
        summary: "Schools raised caterpillars into butterflies and set them free.",
        fallback: "Pretend to flutter around like a butterfly.",
        whyCool: "Nature is full of transformations."
      }
    ],
    dinosaurs: [
      {
        title: "🦖 New Dinosaur Fossil Found",
        summary: "Scientists discovered a dinosaur fossil with unusual spines on its back.",
        fallback: "Press toy dinos into clay to make pretend fossils.",
        whyCool: "We’re still learning about dinosaurs today."
      },
      {
        title: "🦕 Dinosaur Exhibit Opens",
        summary: "Museums opened new exhibits with giant skeletons of dinosaurs.",
        fallback: "Make your own dino drawing to display at home.",
        whyCool: "Dinosaurs connect us to Earth’s past."
      }
    ],

    // 🌈 Wonder & Exploration
    space: [
      {
        title: "🚀 NASA Prepares Moon Mission",
        summary: "NASA tested new rockets for future moon landings.",
        fallback: "Make a paper rocket and launch it.",
        whyCool: "Space exploration inspires big dreams."
      },
      {
        title: "🔭 Kids Stargazing Night",
        summary: "Families gathered at a local park to look through telescopes.",
        fallback: "Go outside and try spotting the brightest star.",
        whyCool: "Space is something we can all share."
      }
    ],
    colorsAndRainbows: [
      {
        title: "🌈 Rainbow Murals",
        summary: "Communities painted rainbow murals to brighten neighborhoods.",
        fallback: "Draw your own rainbow with crayons or chalk.",
        whyCool: "Rainbows remind us of hope and joy."
      },
      {
        title: "☔ Double Rainbow Spotted",
        summary: "Families saw a rare double rainbow after a summer storm.",
        fallback: "Spray water in sunlight to make a mini rainbow.",
        whyCool: "Nature sometimes makes magical surprises."
      }
    ],
    favoritePlaces: [
      {
        title: "🗺️ Kids Map Favorites",
        summary: "Students made maps of their favorite playgrounds, libraries, and parks.",
        fallback: "Draw a map of your favorite place with a hidden treasure spot.",
        whyCool: "Maps tell stories about our adventures."
      },
      {
        title: "🏞️ Park Adventures",
        summary: "Families shared stories of exploring parks and trails together.",
        fallback: "Go for a walk and draw what you saw.",
        whyCool: "Favorite places help us feel happy and safe."
      }
    ],
    summer: [
      {
        title: "☀️ Summer Camp Fun",
        summary: "Campers learned archery, made crafts, and sang by the campfire.",
        fallback: "Plan a pretend camp day at home with fun activities.",
        whyCool: "Summer is a time for new adventures."
      },
      {
        title: "🏊 Splash Into Summer",
        summary: "Communities opened pools for the season with games and swimming lessons.",
        fallback: "Have a pretend pool party with towels and snacks.",
        whyCool: "Summer means sunshine and fun together."
      }
    ],
    trainsAndTrucks: [
      {
        title: "🚂 Train Ride Adventure",
        summary: "Families took rides on scenic trains through the countryside.",
        fallback: "Line up your toy cars and trucks for a parade.",
        whyCool: "Trains connect people and places."
      },
      {
        title: "🚒 Touch a Truck",
        summary: "Kids explored fire trucks, dump trucks, and bulldozers at an event.",
        fallback: "Pretend your chair is a truck—where will you drive?",
        whyCool: "Big machines help build the world."
      }
    ]
  },

  "8-10": {
    // 🧠 Brain Boosters
    puzzlesAndRiddles: [
      {
        title: "🧩 Kids Invent Riddles for Friends",
        summary: "Classrooms held contests where students wrote new riddles to stump each other.",
        fallback: "Write a riddle and share it with your family.",
        whyCool: "Riddles are brain teasers you can create yourself."
      },
      {
        title: "📚 Puzzle Clubs Growing",
        summary: "Libraries are starting after-school clubs for kids who love puzzles.",
        fallback: "Make a puzzle out of cardboard and see who can solve it.",
        whyCool: "Puzzles mix fun with problem-solving."
      }
    ],
    inventionsAndGadgets: [
      {
        title: "🔧 Student Invention Fair",
        summary: "Kids showed off gadgets like solar ovens and mini robots at local fairs.",
        fallback: "Invent a gadget that solves a problem at home.",
        whyCool: "Some of tomorrow’s biggest ideas start as kid projects."
      },
      {
        title: "🤖 Robot Pets",
        summary: "Young inventors built robots shaped like pets to keep people company.",
        fallback: "Sketch a robot pet and give it a funny name.",
        whyCool: "Inventions can be both helpful and fun."
      }
    ],
    environmentalHeroes: [
      {
        title: "🌍 Beach Clean-Up Teams",
        summary: "Kids collected plastic bottles and trash to protect turtles and seabirds.",
        fallback: "Do a clean-up walk around your block with an adult.",
        whyCool: "Small actions add up to big changes."
      },
      {
        title: "🌱 School Gardens Bloom",
        summary: "Students grew vegetables in school gardens and donated them to families.",
        fallback: "Plant a seed in a cup and watch it grow.",
        whyCool: "Helping the environment can also help people."
      }
    ],

    // 🎮 Games & Tech
    minecraft: [
      {
        title: "🏰 Castles in Minecraft",
        summary: "Kids built giant castles and towns for history class projects.",
        fallback: "Recreate your favorite building in Minecraft.",
        whyCool: "Minecraft is a way to mix fun with learning."
      },
      {
        title: "🌋 Volcano Science in Minecraft",
        summary: "Teachers used Minecraft to show how volcanoes erupt.",
        fallback: "Build a volcano in Minecraft and make it ‘erupt.’",
        whyCool: "Games can help explain science in new ways."
      }
    ],
    roblox: [
      {
        title: "🎡 Roblox Amusement Parks",
        summary: "Players built theme parks with roller coasters and mini-games.",
        fallback: "Design your dream ride on paper.",
        whyCool: "Roblox lets you design and share your own worlds."
      },
      {
        title: "💡 Young Roblox Creators",
        summary: "Kids who coded games in Roblox Studio got thousands of players.",
        fallback: "Make a simple game idea and test it with friends.",
        whyCool: "Anyone can become a game designer."
      }
    ],
    lego: [
      {
        title: "🚀 Lego STEM Projects",
        summary: "Kids used Lego bricks to design rockets, cars, and even working bridges.",
        fallback: "Build the tallest Lego tower you can without it falling.",
        whyCool: "Building teaches both creativity and science."
      },
      {
        title: "🏆 Lego Competitions",
        summary: "Teams competed to create Lego robots for fun challenges.",
        fallback: "Make a Lego vehicle and race it across the floor.",
        whyCool: "Competitions inspire teamwork and design skills."
      }
    ],
    videoGames: [
      {
        title: "🎮 Racing Games Popular",
        summary: "Kids loved new racing games with wacky tracks and power-ups.",
        fallback: "Design your own race course on paper.",
        whyCool: "Games are stories you can play inside."
      },
      {
        title: "🕹️ Game Design Workshops",
        summary: "Libraries offered workshops teaching kids to code simple video games.",
        fallback: "Write rules for your own imaginary video game.",
        whyCool: "Games are fun to play and create."
      }
    ],

    // 📚 Stories & Heroes
    comicsAndBooks: [
      {
        title: "📖 Student Comics Published",
        summary: "Kids wrote and illustrated their own comics and sold them at fairs.",
        fallback: "Make a three-panel comic about your day.",
        whyCool: "Comics let you be both an artist and a storyteller."
      },
      {
        title: "📚 New Graphic Novels for Kids",
        summary: "Authors released colorful new graphic novels for young readers.",
        fallback: "Draw a superhero comic with a silly twist.",
        whyCool: "Books can be told with both words and pictures."
      }
    ],
    superheroes: [
      {
        title: "🦸 Kids Vote for Heroes",
        summary: "Superheroes like Spider-Man and Wonder Woman topped fan-favorite lists.",
        fallback: "Invent a new hero with a unique superpower.",
        whyCool: "Heroes inspire us to imagine being brave."
      },
      {
        title: "🎭 School Superhero Plays",
        summary: "Students wrote and performed plays about their favorite heroes.",
        fallback: "Act out a short superhero skit with friends.",
        whyCool: "Stories come alive when you perform them."
      }
    ],
    magicAndMyths: [
      {
        title: "🐉 Mythical Creatures Projects",
        summary: "Kids made projects about dragons, unicorns, and mermaids.",
        fallback: "Draw your own magical creature and give it powers.",
        whyCool: "Myths show how people explain the unexplainable."
      },
      {
        title: "⚡ Mythology Clubs",
        summary: "Middle schools started clubs for kids who love Greek and Norse myths.",
        fallback: "Rewrite a myth with a funny twist.",
        whyCool: "Legends connect us with the past."
      }
    ],

    // 🌍 Animals & Places
    oceanCreatures: [
      {
        title: "🐠 Rare Fish Found",
        summary: "Divers filmed glowing deep-sea fish never seen before.",
        fallback: "Draw the strangest fish you can imagine.",
        whyCool: "The ocean is full of hidden surprises."
      },
      {
        title: "🦈 Shark Awareness Week",
        summary: "Kids learned facts about sharks at aquariums and schools.",
        fallback: "Pretend to swim like a shark across the room.",
        whyCool: "Learning facts helps protect animals."
      }
    ],
    petsAndAnimalCare: [
      {
        title: "🐕 Kids Help at Shelters",
        summary: "Children volunteered to walk dogs and care for cats at rescue centers.",
        fallback: "Make a pet-care schedule chart.",
        whyCool: "Caring for pets teaches kindness."
      },
      {
        title: "🐾 Pet Day at School",
        summary: "Schools hosted ‘Bring Your Pet to Class’ days.",
        fallback: "Draw your dream pet, real or imaginary.",
        whyCool: "Pets make classrooms more fun."
      }
    ],
    awesomePlaces: [
      {
        title: "🏔️ Families Visit National Parks",
        summary: "Families camped in parks and learned about nature from rangers.",
        fallback: "Draw a place you’d love to explore one day.",
        whyCool: "Nature adventures are real-life journeys."
      },
      {
        title: "🏙️ Exploring Cities",
        summary: "Kids toured landmarks in big cities for class trips.",
        fallback: "Make a postcard from your favorite place.",
        whyCool: "Travel teaches us about new cultures."
      }
    ],
    dinosaurs: [
      {
        title: "🦖 Dinosaur Fossil Found",
        summary: "Scientists discovered a fossil of a new dinosaur species in Argentina.",
        fallback: "Pretend to dig up a fossil in the sandbox.",
        whyCool: "We’re still learning about dinosaurs today."
      },
      {
        title: "🦕 Dinosaur Exhibit Opens",
        summary: "Museums unveiled giant skeletons and animatronic dinos.",
        fallback: "Draw your favorite dinosaur in action.",
        whyCool: "Dinosaurs connect us to Earth’s history."
      }
    ],
    animals: [
      {
        title: "🦓 Zoo Welcomes Baby Animals",
        summary: "Zoos announced new arrivals like zebras, giraffes, and monkeys.",
        fallback: "Pretend to be your favorite zoo animal.",
        whyCool: "Baby animals bring joy to everyone."
      },
      {
        title: "🐧 Penguin Parade",
        summary: "Aquariums held penguin parades where birds waddled past visitors.",
        fallback: "Waddle like a penguin across the room.",
        whyCool: "Animals have fun behaviors to watch and copy."
      }
    ],

    // 🎨 Creative Life
    artAndCreativity: [
      {
        title: "🎨 Kids’ Art in Museums",
        summary: "Children’s paintings and sculptures were displayed in a community museum.",
        fallback: "Draw something only you could imagine.",
        whyCool: "Art shows the world through your eyes."
      },
      {
        title: "🖌️ Sidewalk Chalk Festivals",
        summary: "Neighborhoods decorated streets with colorful chalk art.",
        fallback: "Make chalk art on your driveway or sidewalk.",
        whyCool: "Art can brighten everyday places."
      }
    ],
    sportsAndMovement: [
      {
        title: "⚽ New Sports in Schools",
        summary: "Kids tried frisbee tag and soccer golf during PE class.",
        fallback: "Invent a new sport using toys or furniture.",
        whyCool: "Sports are about fun and creativity."
      },
      {
        title: "🏀 Basketball Growing",
        summary: "Youth basketball leagues added new teams for kids.",
        fallback: "Make up a silly game with a ball and new rules.",
        whyCool: "Sports bring kids together to play."
      }
    ],
    spaceExplorers: [
      {
        title: "🛰️ Student Satellites Launched",
        summary: "High school students built small satellites that went into orbit.",
        fallback: "Design your own spaceship on paper.",
        whyCool: "Even kids can be part of space exploration."
      },
      {
        title: "🌌 Space Camp Programs",
        summary: "Summer camps taught kids how rockets and astronauts work.",
        fallback: "Make a helmet from a cardboard box and play astronaut.",
        whyCool: "Space camp makes science feel real."
       }
    ]
  },
  
  "11-13": {
    // 🌌 Big Questions & Science
    spaceAndTheUniverse: [
      {
        title: "🌌 New Galaxy Captured",
        summary: "A powerful telescope revealed a swirling galaxy never seen before.",
        fallback: "Sketch your own galaxy with colors and star clusters.",
        whyCool: "Space keeps surprising us the more we look."
      },
      {
        title: "🛰️ Black Hole Research",
        summary: "Scientists shared new images showing how black holes bend light.",
        fallback: "Use a flashlight and objects to experiment with shadows.",
        whyCool: "Space science answers questions about the universe."
      }
    ],
    techAndFuture: [
      {
        title: "🤖 Robot Helpers at Home",
        summary: "New robots are being tested to help with chores and safety.",
        fallback: "Imagine and draw a robot that could help in your house.",
        whyCool: "Technology changes how we live every day."
      },
      {
        title: "🧪 Students Learn AI Tools",
        summary: "Middle schools began offering lessons on safe, creative AI use.",
        fallback: "Think of a way you could use technology to solve a problem.",
        whyCool: "Today’s students are tomorrow’s innovators."
      }
    ],
    planetAndPeople: [
      {
        title: "🌱 Tree Planting Programs",
        summary: "Students planted trees to help improve air quality in cities.",
        fallback: "Plant a seed in a pot and watch it grow.",
        whyCool: "Caring for the Earth helps everyone breathe easier."
      },
      {
        title: "💧 Clean Water Projects",
        summary: "Kids joined campaigns to bring clean water to communities.",
        fallback: "Design a poster encouraging people to save water.",
        whyCool: "Small efforts can solve big global problems."
      }
    ],
    inventionsAndInnovators: [
      {
        title: "🔬 Young Scientists Compete",
        summary: "Teens presented inventions like solar backpacks and water filters.",
        fallback: "Invent something small to make daily life easier.",
        whyCool: "Many inventors get their start as kids."
      },
      {
        title: "🚀 Space Design Challenge",
        summary: "Students created ideas for habitats on Mars in school contests.",
        fallback: "Draw what your home on Mars would look like.",
        whyCool: "Imagination leads to real discoveries."
      }
    ],

    // 📚 Stories & Expression
    booksAndSeries: [
      {
        title: "📚 Popular Series Expands",
        summary: "A new installment in a favorite middle-grade series was announced.",
        fallback: "Write a paragraph continuing a story you love.",
        whyCool: "Books let you keep exploring characters you know."
      },
      {
        title: "📖 Students Launch Book Clubs",
        summary: "Middle schoolers started after-school book clubs to share reads.",
        fallback: "Pick a book and ask a friend to read it with you.",
        whyCool: "Books are more fun when you talk about them."
      }
    ],
    comics: [
      {
        title: "🖊️ Student Comics on Display",
        summary: "Teens displayed their original comics at a local library event.",
        fallback: "Make a three-panel comic about your week.",
        whyCool: "Comics let you combine art and writing."
      },
      {
        title: "🎨 Webcomics Rising",
        summary: "Young creators are posting their comics online for fans.",
        fallback: "Create a comic strip using notebook paper.",
        whyCool: "Digital tools give kids new ways to publish."
      }
    ],
    moviesAndStreaming: [
      {
        title: "🎬 Kids Review New Movies",
        summary: "Students wrote and shared reviews of family-friendly films.",
        fallback: "Write a short review of your favorite movie.",
        whyCool: "Reviews let you share your opinion with others."
      },
      {
        title: "📺 Documentary Clubs",
        summary: "Schools started clubs for watching and discussing documentaries.",
        fallback: "Pick a topic and make a mini-documentary with your phone.",
        whyCool: "Movies can be both fun and educational."
      }
    ],
    musicAndLyrics: [
      {
        title: "🎵 Student Bands Perform",
        summary: "Middle school bands held concerts featuring original songs.",
        fallback: "Write lyrics for a song about your day.",
        whyCool: "Music lets you share feelings in creative ways."
      },
      {
        title: "🎤 Talent Show Highlights",
        summary: "Students sang, danced, and played instruments in school talent shows.",
        fallback: "Put on a mini show for your family.",
        whyCool: "Performing builds confidence."
      }
    ],
    artAndExpression: [
      {
        title: "🎭 Drama Club Performances",
        summary: "Teens performed plays they wrote themselves at school events.",
        fallback: "Act out a short play with friends.",
        whyCool: "Theater mixes imagination and teamwork."
      },
      {
        title: "🎨 Community Art Walls",
        summary: "Neighborhoods invited kids to paint murals about kindness.",
        fallback: "Draw a mural idea that spreads a positive message.",
        whyCool: "Art can make communities brighter."
      }
    ],

    // 🌍 Culture & People
    worldCultures: [
      {
        title: "🌏 Cultural Festival at School",
        summary: "Students shared food, dance, and traditions from around the world.",
        fallback: "Research a holiday from another culture and share a fact.",
        whyCool: "Learning about others builds respect and friendship."
      },
      {
        title: "🎶 Music From Around the World",
        summary: "Classes explored instruments and rhythms from many countries.",
        fallback: "Listen to music from another culture and draw how it feels.",
        whyCool: "Music is a universal language."
      }
    ],
    globalNewsAndEvents: [
      {
        title: "📰 Student Mock Newsrooms",
        summary: "Schools ran projects where students acted as reporters on world events.",
        fallback: "Make a family news broadcast about your day.",
        whyCool: "Kids can practice understanding what’s happening globally."
      },
      {
        title: "🌍 Climate Summits for Kids",
        summary: "Students joined discussions about protecting the planet.",
        fallback: "Write one way your family can reduce waste.",
        whyCool: "Even young voices matter in world conversations."
      }
    ],
    socialMedia: [
      {
        title: "📱 Teens Spread Positivity",
        summary: "Students created social media pages to share kindness and good news.",
        fallback: "Write three positive posts you’d want to share online.",
        whyCool: "Social media can build people up."
      },
      {
        title: "💡 Safe Online Clubs",
        summary: "Schools launched digital safety clubs to teach smart social media use.",
        fallback: "List five rules for staying safe online.",
        whyCool: "Knowing how to use tech wisely is powerful."
      }
    ],
    personalStyle: [
      {
        title: "👟 Student Fashion Show",
        summary: "Teens modeled clothing they designed themselves.",
        fallback: "Sketch your dream outfit for a special event.",
        whyCool: "Style is a way of expressing who you are."
      },
      {
        title: "🎒 Back-to-School Style",
        summary: "Magazines featured students showing their favorite outfits.",
        fallback: "Design a new backpack with patterns and logos.",
        whyCool: "Personal style helps kids feel confident."
      }
    ],

    // 🐾 Animals & Action
    animals: [
      {
        title: "🦁 Zoo Teens Volunteer",
        summary: "Middle schoolers helped zookeepers care for animals.",
        fallback: "Choose an animal and write how you’d care for it.",
        whyCool: "Animals need care from people of all ages."
      },
      {
        title: "🐴 Horse Therapy Programs",
        summary: "Kids joined programs that help people through horseback riding.",
        fallback: "Draw yourself riding a horse across a field.",
        whyCool: "Animals can heal and comfort us."
      }
    ],
    sports: [
      {
        title: "🏀 Youth Basketball Leagues",
        summary: "More middle school teams joined city tournaments this year.",
        fallback: "Practice a dribble or jump shot in your driveway.",
        whyCool: "Sports bring teamwork and energy."
      },
      {
        title: "⚽ Soccer Expands",
        summary: "Local soccer programs added new divisions for teens.",
        fallback: "Invent a silly new soccer rule and try it with friends.",
        whyCool: "Sports are about fun and creativity too."
      }
    ],

    // 🧠 Logic & Imagination
    mythologyAndLegends: [
      {
        title: "🏺 Ancient Myths Reimagined",
        summary: "Students created comics about gods and heroes from Greek myths.",
        fallback: "Pick a myth and rewrite it with a twist.",
        whyCool: "Legends connect us to history."
      },
      {
        title: "🐉 Myth Writing Clubs",
        summary: "Schools encouraged students to write stories with mythical creatures.",
        fallback: "Invent a new creature and describe its powers.",
        whyCool: "Myths mix imagination and culture."
      }
    ],
    puzzlesAndRiddles: [
      {
        title: "🧩 Puzzle Tournaments",
        summary: "Schools held tournaments for kids to solve logic puzzles fastest.",
        fallback: "Time yourself solving a puzzle at home.",
        whyCool: "Puzzles build problem-solving speed."
      },
      {
        title: "♟️ Chess Popularity Grows",
        summary: "Chess clubs expanded as more teens joined.",
        fallback: "Play chess or invent a new board game.",
        whyCool: "Chess is a puzzle that never ends."
      }
    ],
    videoGames: [
      {
        title: "🎮 Esports Leagues for Teens",
        summary: "Schools created esports clubs where kids compete in safe spaces.",
        fallback: "Plan a mini game tournament with friends.",
        whyCool: "Games can be social and competitive."
      },
      {
        title: "🕹️ Game Design Contests",
        summary: "Teens submitted original video game ideas to competitions.",
        fallback: "Design a video game level on graph paper.",
        whyCool: "Game design is a mix of art and logic."
      }
    ],
    lego: [
      {
        title: "🏗️ Lego Engineering Challenges",
        summary: "Students built bridges and towers in timed Lego contests.",
        fallback: "Try to build the tallest Lego tower in five minutes.",
        whyCool: "Building teaches creativity under pressure."
      },
      {
        title: "🤖 Lego Robotics Teams",
        summary: "Robotics teams programmed Lego creations for competitions.",
        fallback: "Create a Lego creature and give it a name.",
        whyCool: "Legos can even turn into moving robots."
      }
    ],
    minecraft: [
      {
        title: "⛏️ Minecraft History Lessons",
        summary: "Teachers used Minecraft worlds to teach history like ancient Egypt.",
        fallback: "Recreate a famous building in Minecraft.",
        whyCool: "Games can be powerful learning tools."
      },
      {
        title: "🌍 Minecraft Earth Projects",
        summary: "Kids designed eco-friendly cities inside Minecraft.",
        fallback: "Build a park or city in Minecraft with green energy.",
        whyCool: "Games can inspire real-world solutions."
      }
    ],
    roblox: [
      {
        title: "🎡 Roblox Game Jams",
        summary: "Kids competed in events to build Roblox games in 48 hours.",
        fallback: "Think of a fun challenge and design it on paper.",
        whyCool: "Game jams bring teamwork and creativity."
      },
      {
        title: "🛠️ Coding in Roblox Studio",
        summary: "Students learned scripting while building Roblox worlds.",
        fallback: "Write rules for your own Roblox adventure.",
        whyCool: "Coding gives power to make your ideas real."
      }
    ]
  }
};

export default curatedNewsByTopic;

