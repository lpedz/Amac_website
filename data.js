const chapters = [
   { 
    id: 'uae', name: "UAE Chapter", location: "UAE", region: "MEU", imageUrl: "images/uae.webp",
    details: {
        history: "Founded in 1994 June 18 by a group of pioneering MACE alumni, our chapter has expanded from 50 members to over 700, becoming one of the most active networks worldwide that fosters both professional and personal connections. AMAC was later constituted on April 13, 2012, in Dubai through the initiative of the UAE & Kuwait chapters.",
        gallery: [
            { src: "images/Chapters%20images/uae%20(1).webp", caption: "MACE Alumni UAE winning the KERA Cricket Tournament in 2006 and the team celebrating in Cyprus." },
            { src: "images/Chapters%20images/uae%20(4).webp", caption: "Lighting the ceremonial lamp at the 25th Anniversary (Silver Jubilee) celebration by Biji Thoms and John Emmanuel." },
            { src: "images/Chapters%20images/uae%20(8).webp", caption: "Electrical engineers at the Silver Jubilee with Dr. Bose Mathew." },
            { src: "images/Chapters%20images/uae.webp", caption: "Founder President Engr. Hussain P. (Late) and Founder General Secretary Mohan Joseph Cheeran, who was selected as the 3rd President of KERA in the UAE, share a lighter moment in 2006." },
            { src: "images/Chapters%20images/uae%20(3).webp", caption: "A committee meeting during the 10th (Decennial) Anniversary celebrations." },
            { src: "images/Chapters%20images/uae11.webp", caption: "Founding members during the Silver Jubilee, along with Dr. Lazar John and Dr. Solly George (Princy)." },
            { src: "images/Chapters%20images/uae12.webp", caption: "The AMAC Chairman addressing founding members of the MACE Alumni UAE chapter." },
            {src: "images/Chapters%20images/uae.jepg",caption: "Mace Alumni UAE Dance team winning ACKAF  dance competition in 2025"}
        ],
    }
},
    { 
        id: 'saudi', name: "Saudi Arabia Chapter", location: "Saudi Arabia", region: "MEU", imageUrl: "images/saudi.webp",
        details: {
            history: "Our chapter was formed in 2016 to align with the Kingdom's Vision 2030, creating a network for MACE engineers and professionals contributing to the nation's ambitious giga-projects and economic diversification.",
            gallery: [{ src: "https://picsum.photos/seed/sa1/400/300" }, { src: "https://picsum.photos/seed/sa2/400/300" }],
        }
    },
    { 
        id: 'kuwait', name: "Kuwait Chapter", location: "Kuwait", region: "MEU", imageUrl: "images/Kuwait.webp",
        details: {
            history: "As one of the oldest chapters in the Gulf, the Kuwait Chapter has been a cornerstone of the MACE community since the late 1990s. It has a rich tradition of mentorship, particularly in the oil and gas sector.",
            gallery: [
                { src: "images/Chapters%20images/Kuwait%20(1).webp" },
                { src: "images/Chapters%20images/Kuwait%20(2).webp" },
                { src: "images/Chapters%20images/Kuwait%20(3).webp" }
            ],
        }
    },
    { 
        id: 'qatar', name: "Qatar Chapter", location: "Qatar", region: "MEU", imageUrl: "images/qatar.webp",
        details: {
            history: "The Qatar Chapter was established in the lead-up to the 2022 FIFA World Cup, a period of immense growth. Our members played key roles in developing the nation's infrastructure and continue to shape its future.",
            gallery: [{ src: "images/Chapters images/qatar.jpeg" },],
        }
    },
    { 
        id: 'oman', name: "Oman Chapter", location: "Oman", region: "MEU", imageUrl: "images/oman.webp",
        details: {
            history: "Our chapter in the Sultanate of Oman was founded on the principles of community and heritage. Since 2011, we have focused on creating a supportive network that blends professional growth with cultural appreciation.",
            gallery: [
                { "src": "images/Chapters%20images/Mace%20Oman%2025th%20Anniversary.webp", "caption": "25th Anniversary Celebration" },
                { "src": "images/Chapters%20images/Mace%20Oman%202th%20Anniversary%202025.webp", "caption": "Annual Meet 2025" },
                { "src": "images/Chapters%20images/Mace%20Oman%202015.webp", "caption": "Gathering in 2015" }
            ],
        }
    },
    { 
        id: 'chicago', name: "Chicago Chapter", location: "USA", region: "NA", imageUrl: "images/chicago.webp",
        details: {
            history: "Established in 2019, the Chicago Chapter is a hub for MACE alumni in the American Midwest. It focuses on connecting professionals in manufacturing, architecture, and finance through targeted events and seminars.",
            gallery: [{ src: "images/Chapters%20images/chicago.webp" }],
        }
    },
    { 
        id: 'dc', name: "Washington D.C. Chapter", location: "USA", region: "NA", imageUrl: "images/washington.webp",
        details: {
            history: "Our Washington D.C. chapter was formed in 2019 to cater to the growing number of alumni in public policy, federal agencies, and international organizations. It serves as a unique intersection of engineering and governance.",
            gallery: [
                { src: "images/Chapters%20images/DC%20(1).webp" }, 
                { src: "images/Chapters%20images/DC%20(2).webp" },
                { src: "images/Chapters%20images/DC%20(3).webp" },
                { src: "images/Chapters%20images/dc4.jpeg",caption:"Dr Bos Mathew Jose in Washington DC Chapter.29th September 2025" },

            ],
        }
    },
    {
    id: 'seattle', name: "Seattle Chapter", location: "USA", region: "NA", imageUrl: "images/seattle.webp",
    details: {
        history: "Launched in July 2019, our Seattle chapter brings together alumni in the Pacific Northwest's thriving tech and aerospace industries. We foster a community of innovation and collaboration.",
        gallery: [
            { src: "images/Chapters%20images/Seattle%20(2).webp" },
            { src: "images/Chapters%20images/Seattle%20(5).webp" },
            { src: "images/Chapters%20images/Seattle%20(1)_1.webp" },
            { src: "images/Chapters%20images/Seattle%20(1).webp" },
            { type: 'video', src: 'https://www.youtube.com/embed/c3RQT-3M76U', caption: 'Seattle Chapter Event Highlights' }
        ],
    }
},
    { 
        id: 'siliconvalley', name: "Silicon Valley Chapter", location: "San Francisco, USA", region: "NA", imageUrl: "images/silliconvalley.webp",
        details: {
            history: "The Silicon Valley chapter is at the heart of global innovation. Formed in 2019, it connects MACE alumni in leading tech companies, startups, and venture capital firms.",
            gallery: [
                { src: "images/Chapters%20images/SilliconValley%20(1).webp" },
                { src: "images/Chapters%20images/SilliconValley%20(2).webp" },
                {src: "images/Chapters%20images/silliconvalley.webp",caption:"AMAC Leaders in Silicon Valley 2019. Silicon Valley Leader Thampy Antony  toasting welcome to AMAC chairman Mohan J Cheeran, OZMACE Founder President Xavi Joseph & Bala Murali  ( who became Gen Secretary of MACEALUMNI ( 24-26"},

            ],
        }
    },
    { 
        id: 'atlanta', name: "Atlanta Chapter", location: "USA", region: "NA", imageUrl: "images/atlanda.webp",
        details: {
            history: "Established in October 2019, our Atlanta chapter serves the growing community of alumni in the southeastern United States. It focuses on logistics, manufacturing, and the burgeoning film technology industry.",
            gallery: [
                { src: "images/Chapters%20images/Atlanta%20(1).webp" },
                { src: "images/Chapters%20images/Atlanta%20(2).webp" },
                {src:"images/Chapters%20images/Atlanta.jpeg",caption:"Atlanta (Georgia) Chapter Wecomes Pricipal on Oct 1st 2025"}
            ],
        }
    },
    { 
        id: 'delaware', name: "Delaware Valley Chapter", location: "USA", region: "NA", imageUrl: "images/delawarevalley.webp",
        details: {
            history: "Established to support alumni in the financial and chemical engineering sectors, the Delaware Valley chapter provides a valuable network in the mid-Atlantic region.",
            gallery: [{ src: "https://picsum.photos/seed/de1/400/300" }],
        }
    },
    { 
        id: 'houston', name: "Houston Chapter", location: "USA", region: "NA", imageUrl: "images/houston.webp",
        details: {
            history: "The Houston chapter is a hub for our alumni in the energy sector. Since its inception, it has connected professionals in oil, gas, and renewable energy, as well as the aerospace industry.",
            gallery: [{ src: "images/Chapters%20images/Houston.webp" }],
        }
    },
    { 
        id: 'toronto', name: "Canada Chapter", location: "Canada", region: "NA", imageUrl: "images/tronto.webp",
        details: {
            history: "Our first chapter in Canada, the Canada chapter, unites alumni across the country. It focuses on finance, real estate, and technology, reflecting the nation's diverse economy.",
            gallery: [{ src: "https://picsum.photos/seed/tor1/400/300" }],
        }
    },
    { 
        id: 'bahrain', name: "Bahrain Chapter", location: "Bahrain", region: "MEU", imageUrl: "images/bahrin.webp",
        details: {
            history: "The Bahrain chapter, one of our earliest in the Gulf, has a long history of connecting alumni in the banking and finance sectors. It hosts regular events to foster community and professional growth.",
            gallery: [{ src: "https://picsum.photos/seed/bah1/400/300" }],
        }
    },
    { 
        id: 'uk', name: "UK Chapter", location: "United Kingdom", region: "MEU", imageUrl: "images/uk.webp",
        details: {
            history: "The UK chapter connects alumni across England, Scotland, Wales, and Northern Ireland. It has strong ties to London's financial district and the UK's rich engineering heritage.",
            gallery: [{ src: "https://picsum.photos/seed/uk1/400/300" }, { src: "https://picsum.photos/seed/uk2/400/300" }],
        }
    },
    { 
        id: 'sydney', name: "OZ MACE Sydney", location: "Australia", region: "AP", imageUrl: "images/australia.webp",
        details: {
            history: "Founded in July 2013, the Sydney chapter is a major hub for finance and professional services in Australia, connecting alumni in the heart of the city's bustling business district.",
            gallery: [{ src: "images/Chapters images/OZ mace sydney (1).webp" },{ src: "images/Chapters images/OZ mace sydney (2).webp" },{ src: "images/Chapters images/OZ mace sydney (3).webp" },

            ],
        }
    },
    { 
        id: 'melbourne', name: "OZ MACE Melbourne", location: "Australia", region: "AP", imageUrl: "images/mellbourne.webp",
        details: {
            history: "Founded in July 2013, this chapter focuses on Melbourne's vibrant arts, sports, and tech scenes, providing a network for alumni in Victoria. It's known for its creative and social events.",
            gallery: [{ src: "https://picsum.photos/seed/mel1/400/300" }],
        }
    },
    { 
        id: 'brisbane', name: "OZMACE Brisbane", location: "Australia", region: "AP", imageUrl: "images/brisbane.webp",
        details: {
            history: "The Brisbane chapter supports alumni in Queensland, focusing on the region's strengths in construction, resources, and tourism. It provides a key network on Australia's east coast.",
            gallery: [{ src: "https://picsum.photos/seed/bris1/400/300" }],
        }
    },
    { 
        id: 'singapore', name: "Singapore Chapter", location: "Singapore", region: "AP", imageUrl: "images/singapore-1.webp",
        details: {
            history: "Launched on September 21st, 2024, the Singapore chapter was created to cater to the growing number of MACE alumni in Southeast Asia's premier financial and tech hub. It has since become a vital resource for professional development in the region.",
            gallery: [
                { src: "images/Chapters%20images/Singapore%20(1).webp" }, 
                { src: "images/Chapters%20images/Singapore%20(2).webp" }, 
                { src: "images/Chapters%20images/Singapore%20(3).webp" }
            ],
        }
    },
    { 
        id: 'chennai', name: "Chennai Chapter", location: "Chennai, India", region: "AP", imageUrl: "images/chennai.webp",
        details: {
            history: "Launched and inaugurated in March 2025, the Chennai chapter serves the large MACE alumni population in South India. It has strong ties to the local IT and automotive industries.",
            gallery: [
                { src: "images/Chapters%20images/Chennai%20(1).webp" },
                { src: "images/Chapters%20images/Chennai%20(2).webp" },
                { src: "images/Chapters%20images/Chennai%20(3).webp" },
                { src: "images/Chapters%20images/Chennai%20(4).webp" }
            ],
        }
    },
    { 
        id: 'trichur', name: "Trichur (Seniors) Chapter", location: "Trichur", region: "AP", imageUrl: "images/trichur.webp",
        details: {
            history: "Launched in Dubai in 2012 with its current president, Joseph Peter, this is also known as the Seniors Chapter, with members from the 1st batch of MACE. The chapter is a hub for our most experienced alumni.",
            gallery: [{ src: "https://picsum.photos/seed/hou1/400/300" }, { src: "https://picsum.photos/seed/hou2/400/300" }],
        }
    }
];

const presidents = [
    { chapter: "AMAC", name: "Mohan Joseph Cheeran", contact: "chairman@amac.org", position: "Chairman", phone: "+91-9876543210", imageUrl: "images/People/MohanJoseph.webp" },
    { chapter: "UAE Chapter", name: "Hussain P", contact: "uae-fp@amac.org", position: "Founder President", phone: null, imageUrl: "images/People/hussain.webp" },
    { chapter: "UAE Chapter", name: "Mohan Joseph Cheeran", contact: "uae-fgs@amac.org", position: "Founder Gen. Secretary", phone: null, imageUrl: "images/People/MohanJoseph.webp" },
    { chapter: "UAE Chapter", name: "Krishna Kumar", contact: "uae@amac.org", position: "Current President", phone: null, imageUrl: "images/People/krishnakumar.webp" },
    { chapter: "Kuwait Chapter", name: "Muhhamadd Kutty", contact: "kuwait@amac.org", position: "Founder Chairman", phone: null, imageUrl: "images/People/pkmuahhamedkutty.webp" },
    { chapter: "Kuwait Chapter", name: "Giju George", contact: "kuwait-chairman@amac.org", position: "Current Chairman", phone: "+965-51234567", imageUrl: "images/People/GijuGeorge.webp" },
    { chapter: "Saudi Arabia Chapter", name: "Johnson Samuel", contact: "saudi@amac.org", position: "President", phone: "+966-501234567", imageUrl: "images/People/Johnson%20Samuel%20.webp" },
    { chapter: "OZ MACE Sydney", name: "Xavi Joseph", contact: "sydney-fp@amac.org", position: "Founder President", phone: "+61-401234567", imageUrl: "images/People/xavi.webp" },
    { chapter: "OZ MACE Sydney", name: "Basil Mathew", contact: "sydney@amac.org", position: "Current President", phone: null, imageUrl: "" },
    { chapter: "OZ MACE Melbourne", name: "Subeen Mathew", contact: "melbourne-fp@amac.org", position: "Founder President", phone: null, imageUrl: "images/People/SubeenMathew.webp" },
    { chapter: "OZ MACE Melbourne", name: "AK THOMAS", contact: "melbourne@amac.org", position: "Current President", phone: null, imageUrl: "images/People/AK%20THOMAS.webp" },
    { chapter: "Singapore Chapter", name: "Shaja Mathews", contact: "singapore@amac.org", position: "Founder President", phone: null, imageUrl: "images/People/ShajahMathew.webp" },
    { chapter: "Singapore Chapter", name: "Shaja Mathews", contact: "singapore@amac.org", position: "Current President", phone: null, imageUrl: "images/People/ShajahMathew.webp" },
    { chapter: "Chennai Chapter", name: "David Rajan", contact: "chennai-fp@amac.org", position: "Founder President", phone: null, imageUrl: "images/People/Rajan%20David.webp" },
    { chapter: "Chennai Chapter", name: "David Rajan", contact: "chennai@amac.org", position: "Current President", phone: null, imageUrl: "images/People/Rajan%20David.webp" },
    { chapter: "Trichur (Seniors) Chapter", name: "Joseph Peter", contact: "trichur@amac.org", position: "Current President", phone: null, imageUrl: "images/People/josephpeter.webp" },
    { chapter: "Trichur (Seniors) Chapter", name: "George Panikulam", contact: "trichur-vp@amac.org", position: "Vice President", phone: null, imageUrl: "images/People/George%20Issac%20(2).webp" },
    { chapter: "Qatar Chapter", name: "Joseph Joy", contact: "qatar-fp@amac.org", position: "Founder President", phone: null, imageUrl: "images/People/Joseph%20Joy.webp" },
    { chapter: "Qatar Chapter", name: "Sinesh", contact: "qatar@amac.org", position: "Current President", phone: null, imageUrl: "images/People/Psykhaesh%20.webp" },
    { chapter: "Washington D.C. Chapter", name: "Rejive Joseph", contact: "dc-fp@amac.org", position: "Founder President", phone: "+1-202-555-0182", imageUrl: "images/People/RejiveJoseph.webp" },
    { chapter: "Washington D.C. Chapter", name: "Psykhaesh", contact: "dc@amac.org", position: "Current President", phone: null, imageUrl: "images/People/Psykhaesh%20.webp" },
    { chapter: "Chicago Chapter", name: "Subash George", contact: "chicago-fp@amac.org", position: "Founder President", phone: null, imageUrl: "images/People/SubashGeorge%20(2).webp" },
    { chapter: "Chicago Chapter", name: "Subash George", contact: "chicago@amac.org", position: "Current President", phone: null, imageUrl: "images/People/SubashGeorge%20(2).webp" },
    { chapter: "Houston Chapter", name: "Basil Kuriakose", contact: "houston-fp@amac.org", position: "Founder President", phone: null, imageUrl: "images/People/basil.webp" },
    { chapter: "Houston Chapter", name: "Basil Kuriakose", contact: "houston@amac.org", position: "Current President", phone: null, imageUrl: "images/People/basil.webp" },
    { chapter: "Atlanta Chapter", name: "Manoj K Jose", contact: "atlanta-fp@amac.org", position: "Founder President", phone: null, imageUrl: "images/People/Manoj%20K%20Jose.webp" },
    { chapter: "Atlanta Chapter", name: "Manoj K Jose", contact: "atlanta@amac.org", position: "Current President", phone: null, imageUrl: "images/People/Manoj%20K%20Jose.webp" },
    { chapter: "Seattle Chapter", name: "Thomas Stephen", contact: "seattle-fp@amac.org", position: "Founder President", phone: null, imageUrl: "images/People/ThomasStephan.webp" },
    { chapter: "Seattle Chapter", name: "Jyothish Nair", contact: "seattle@amac.org", position: "Current President", phone: null, imageUrl: "images/People/jyothishnair.webp" },
    { chapter: "Silicon Valley Chapter", name: "John Chandy", contact: "siliconvalley-fp@amac.org", position: "Founder President", phone: null, imageUrl: "images/People/John%20Chandy.webp" },
    { chapter: "Silicon Valley Chapter", name: "John Chandy", contact: "siliconvalley@amac.org", position: "Current President", phone: null, imageUrl: "images/People/John%20Chandy.webp" },
    { chapter: "Delaware Valley Chapter", name: "Saji Gopal", contact: "delaware-fp@amac.org", position: "Founder President", phone: null, imageUrl: "images/People/SajiGopal%20(2).webp" },
    { chapter: "Delaware Valley Chapter", name: "Saji Gopal", contact: "delaware@amac.org", position: "Current President", phone: null, imageUrl: "images/People/SajiGopal%20(2).webp" },
    { chapter: "OZMACE Brisbane", name: "Jose Puthanani", contact: "brisbane-fp@amac.org", position: "Founder President", phone: null, imageUrl: "images/People/Jose%20Puthanani.webp" },
    { chapter: "OZMACE Brisbane", name: "Jose Puthanani", contact: "brisbane@amac.org", position: "Current President", phone: null, imageUrl: "images/People/Jose%20Puthanani.webp" },
    { chapter: "Canada Chapter", name: "Daniel Baby", contact: "canada-fp@amac.org", position: "Founder President", phone: null, imageUrl: "images/People/Daniel%20Baby.webp" },
    { chapter: "Canada Chapter", name: "Daniel Baby", contact: "canada@amac.org", position: "Current President", phone: null, imageUrl: "images/People/Daniel%20Baby.webp" },
    { chapter: "Oman Chapter", name: "Mr.Murali", contact: "oman-fp@amac.org", position: "Founder President", phone: null, imageUrl: "images/People/murali.webp" },
    { chapter: "Oman Chapter", name: "Benny Joseph", contact: "oman@amac.org", position: "Current President", phone: null, imageUrl: "images/People/BennyJoseph.webp" },
    { chapter: "Bahrain Chapter", name: "Dr VKM John", contact: "bahrain-fp@amac.org", position: "Founder President", phone: null, imageUrl: "images/People/VKMJohn.webp" },
    { chapter: "Bahrain Chapter", name: "Dr VKM John", contact: "bahrain@amac.org", position: "Current President", phone: null, imageUrl: "images/People/VKMJohn.webp" },
    { chapter: "UK Chapter", name: "Jose Mathiaekal", contact: "uk-fp@amac.org", position: "Founder President", phone: null, imageUrl: "images/People/Jose%20Matheickal%20.webp" },
    { chapter: "UK Chapter", name: "Sabu Kalathil", contact: "uk@amac.org", position: "Current President", phone: null, imageUrl: "images/People/SabuKalathil.webp" }
];

// UPDATED EXCOM DATA WITH REAL IMAGES
const excomMembers = [
    { name: "Mohan Joseph Cheeran", position: "Chairman AMAC", imageUrl: "images/People/MohanJoseph.webp" },
    { name: "Xavi Joseph", position: "Vice Chairman AMAC (ASIA PACIFIC)", imageUrl: "images/People/xavi.webp" },
    { name: "Thomas Stephen", position: "Vice Chairman AMAC (AMERICAS)", imageUrl: "images/People/ThomasStephan.webp" },
    { name: "Mathew Kavalam", position: "Vice Chairman AMAC (ME & EUROPE) / Treasurer AMAC", imageUrl: "images/People/MathewKavalam.webp" },
    { name: "Jacob Zachariah", position: "General Secretary AMAC", imageUrl: "images/People/jacobzacharia.png" },
    { name: "John Emmanuel", position: "Special Nominee by UAE Chapter / BALI Convener", imageUrl: "images/People/john_emmanuel.webp" },
    { name: "Krishna Kumar", position: "President - UAE Chapter", imageUrl: "images/People/krishnakumar.webp" },
    { name: "Giju K George", position: "Chairman - Kuwait Chapter", imageUrl: "images/People/GijuGeorge.webp" },
    { name: "Sinesh", position: "President - Qatar Chapter", imageUrl: "images/People/Psykhaesh%20.webp" },
    { name: "Benny Joseph", position: "President - Oman Chapter", imageUrl: "https://i.pravatar.cc/150?u=BennyJoseph" },
    { name: "Rajesh George", position: "President - Baharin Chapter", imageUrl: "https://i.pravatar.cc/150?u=RajeshGeorge" },
    { name: "Johnson Samuel", position: "President - KSA Chapter", imageUrl: "images/People/Johnson%20Samuel%20.webp" },
    { name: "Joseph Peter", position: "President - Trichur (Senior Chapter)", imageUrl: "images/People/josephpeter.webp" },
    { name: "Sabu Kalathil", position: "President UK Chapter", imageUrl: "https://i.pravatar.cc/150?u=SabuKalathil" },
    { name: "John Chandy", position: "President Silicon Valley Chapter", imageUrl: "images/People/John%20Chandy.webp" },
    { name: "Jyotish Nair", position: "President Seattle Chapter", imageUrl: "images/People/jyothishnair.webp" },
    { name: "Rejive Joseph", position: "President Washington DC Chapter", imageUrl: "images/People/RejiveJoseph.webp" },
    { name: "Saji Gopal", position: "President Delaware Chapter", imageUrl: "images/People/SajiGopal%20(2).webp" },
    { name: "Bazil Kuriakose", position: "President Houston Chapter", imageUrl: "images/People/basil.webp" },
    { name: "Manoj K Jose", position: "President Atlanta Chapter", imageUrl: "images/People/Manoj%20K%20Jose.webp" },
    { name: "Subash George", position: "President Chicago Chapter", imageUrl: "images/People/SubashGeorge%20(2).webp" },
    { name: "Daniel Baby", position: "President CANADA Chapter (TORONTO)", imageUrl: "images/People/Daniel%20Baby.webp" },
    { name: "Basil Mathew", position: "President OZMACE Sydney", imageUrl: "images/People/basil.webp" },
    { name: "Subeen Mathew", position: "President OZMACE Melbourne", imageUrl: "images/People/SubeenMathew.webp" },
    { name: "Jose Puthanani", position: "President OZMACE Brisbane", imageUrl: "images/People/Jose%20Puthanani.webp" },
    { name: "Shaja Mathew", position: "President - Singapore Chapter", imageUrl: "images/People/ShajahMathew.webp" },
    { name: "David Rajan", position: "President - Chennai", imageUrl: "images/People/Rajan%20David.webp"},
    { name: "Dr. Bos Mathew Jos", position: "Principal MACE", imageUrl: "images/People/bosmathewjose.png"},
    { name: "Dr. Jiss Paul", position: "General Secretary MACEAA", imageUrl: "images/People/JissPaul.jpeg"},
    { name: "Dr. George Issac", position: "Ex Principal - Founder AMAC Member", imageUrl: "images/People/George%20Issac%20(2).webp" }
];