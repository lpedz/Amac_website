const chapters = [
    { 
        id: 'uae', name: "UAE Chapter", location: "UAE", region: "MEU", imageUrl: "images/uae.jpg",
        details: {
            history: "Founded in 1994 June 18 by a group of pioneering MACE alumni, our chapter has expanded from 50 members to over 700, becoming one of the most active networks worldwide that fosters both professional and personal connections. AMAC was later constituted on April 13, 2012, in Dubai through the initiative of the UAE & Kuwait chapters.",
            gallery: [
                { src: "images/Chapters%20images/uae%20(1).jpeg", caption: "MACE Alumni UAE winning the KERA Cricket Tournament in 2006 and the team celebrating in Cyprus." },
                { src: "images/Chapters%20images/uae%20(4).jpeg", caption: "Lighting the ceremonial lamp at the 25th Anniversary (Silver Jubilee) celebration by Biji Thoms and John Emmanuel." },
                { src: "images/Chapters%20images/uae%20(8).jpeg", caption: "Electrical engineers at the Silver Jubilee with Dr. Bose Mathew." },
                { src: "images/Chapters%20images/uae.jpeg", caption: "Founder President Engr. Hussain P. (Late) and Founder General Secretary Mohan Joseph Cheeran, who was selected as the 3rd President of KERA in the UAE, share a lighter moment in 2006." },
                { src: "images/Chapters%20images/uae%20(3).jpeg", caption: "A committee meeting during the 10th (Decennial) Anniversary celebrations." },
                { src: "images/Chapters%20images/uae11.jpeg", caption: "Founding members during the Silver Jubilee, along with Dr. Lazar John and Dr. Solly George (Princy)." },
                { src: "images/Chapters%20images/uae12.jpeg", caption: "The AMAC Chairman addressing founding members of the MACE Alumni UAE chapter." },
                { src: "images/Chapters%20images/uae22%20(1).jpeg", caption: "Faculty members along with former principals Prof. Kurian Mathew, Dr. George Issac, and Dr. J Issac." },
                { src: "images/Chapters%20images/uae22%20(2).jpeg", caption: "The launching of AMAC in 2012. Pictured: PCI Dr. George Issac, MACEAA President; Chief Guest Mr. TK Balakrishnan IAS; Jiss Paul, MACEAA Gen Sec; Mathew Kavalam; Jayakrishnan; and Hussain P., Founder President." },
                { 
                    type: "video", 
                    src: "https://www.youtube.com/embed/s6hgJoXilgA", 
                    thumbnail: "https://img.youtube.com/vi/s6hgJoXilgA/0.jpg", 
                },
            
            ],
        }
    },
    { 
        id: 'saudi', name: "Saudi Arabia Chapter", location: "Saudi Arabia", region: "MEU", imageUrl: "images/saudi.avif",
        details: {
            history: "Our chapter was formed in 2016 to align with the Kingdom's Vision 2030, creating a network for MACE engineers and professionals contributing to the nation's ambitious giga-projects and economic diversification.",
            gallery: [{ src: "https://picsum.photos/seed/sa1/400/300" }, { src: "https://picsum.photos/seed/sa2/400/300" }],
        }
    },
    { 
        id: 'kuwait', name: "Kuwait Chapter", location: "Kuwait", region: "MEU", imageUrl: "images/Kuwait.jpeg",
        details: {
            history: "As one of the oldest chapters in the Gulf, the Kuwait Chapter has been a cornerstone of the MACE community since the late 1990s. It has a rich tradition of mentorship, particularly in the oil and gas sector.",
            gallery: [
                { src: "images/Chapters%20images/Kuwait%20(1).jpeg" },
                { src: "images/Chapters%20images/Kuwait%20(2).jpeg" },
                { src: "images/Chapters%20images/Kuwait%20(3).jpeg" }
            ],
        }
    },
    { 
        id: 'qatar', name: "Qatar Chapter", location: "Qatar", region: "MEU", imageUrl: "images/qatar.jpg",
        details: {
            history: "The Qatar Chapter was established in the lead-up to the 2022 FIFA World Cup, a period of immense growth. Our members played key roles in developing the nation's infrastructure and continue to shape its future.",
            gallery: [{ src: "https://picsum.photos/seed/qa1/400/300" }, { src: "https://picsum.photos/seed/qa2/400/300" }],
        }
    },
    { 
        id: 'oman', name: "Oman Chapter", location: "Oman", region: "MEU", imageUrl: "images/oman.jpg",
        details: {
            history: "Our chapter in the Sultanate of Oman was founded on the principles of community and heritage. Since 2011, we have focused on creating a supportive network that blends professional growth with cultural appreciation.",
            gallery: [
                { "src": "images/Chapters%20images/Mace%20Oman%2025th%20Anniversary.jpg", "caption": "25th Anniversary Celebration" },
                { "src": "images/Chapters%20images/Mace%20Oman%202th%20Anniversary%202025.jpg", "caption": "Annual Meet 2025" },
                { "src": "images/Chapters%20images/Mace%20Oman%202015.jpg", "caption": "Gathering in 2015" }
            ],
        }
    },
    { 
        id: 'chicago', name: "Chicago Chapter", location: "USA", region: "NA", imageUrl: "images/chicago.jpg",
        details: {
            history: "Established in 2019, the Chicago Chapter is a hub for MACE alumni in the American Midwest. It focuses on connecting professionals in manufacturing, architecture, and finance through targeted events and seminars.",
            gallery: [{ src: "images/Chapters%20images/chicago.jpeg" }],
        }
    },
    { 
        id: 'dc', name: "Washington D.C. Chapter", location: "USA", region: "NA", imageUrl: "images/washington.jpg",
        details: {
            history: "Our Washington D.C. chapter was formed in 2019 to cater to the growing number of alumni in public policy, federal agencies, and international organizations. It serves as a unique intersection of engineering and governance.",
            gallery: [
                { src: "images/Chapters%20images/DC%20(1).jpeg" }, 
                { src: "images/Chapters%20images/DC%20(2).jpeg" },
                { src: "images/Chapters%20images/DC%20(3).jpeg" }
            ],
        }
    },
    { 
        id: 'seattle', name: "Seattle Chapter", location: "USA", region: "NA", imageUrl: "images/seattle.jpg",
        details: {
            history: "Launched in July 2019, our Seattle chapter brings together alumni in the Pacific Northwest's thriving tech and aerospace industries. We foster a community of innovation and collaboration.",
            gallery: [
                { src: "images/Chapters%20images/Seattle%20(4).jpeg" },
                { src: "images/Chapters%20images/Seattle%20(6).jpeg" },
                { src: "images/Chapters%20images/Seattle%20(7).jpeg" }
            ],
        }
    },
    { 
        id: 'siliconvalley', name: "Silicon Valley Chapter", location: "San Francisco, USA", region: "NA", imageUrl: "images/silliconvalley.jpeg",
        details: {
            history: "The Silicon Valley chapter is at the heart of global innovation. Formed in 2019, it connects MACE alumni in leading tech companies, startups, and venture capital firms.",
            gallery: [
                { src: "images/Chapters%20images/SilliconValley%20(1).jpeg" },
                { src: "images/Chapters%20images/SilliconValley%20(2).jpeg" }
            ],
        }
    },
    { 
        id: 'atlanta', name: "Atlanta Chapter", location: "USA", region: "NA", imageUrl: "images/atlanda.jpg",
        details: {
            history: "Established in October 2019, our Atlanta chapter serves the growing community of alumni in the southeastern United States. It focuses on logistics, manufacturing, and the burgeoning film technology industry.",
            gallery: [
                { src: "images/Chapters%20images/Atlanta%20(1).jpeg" },
                { src: "images/Chapters%20images/Atlanta%20(2).jpeg" }
            ],
        }
    },
    { 
        id: 'delaware', name: "Delaware Valley Chapter", location: "USA", region: "NA", imageUrl: "images/delawarevalley.jpg",
        details: {
            history: "Established to support alumni in the financial and chemical engineering sectors, the Delaware Valley chapter provides a valuable network in the mid-Atlantic region.",
            gallery: [{ src: "https://picsum.photos/seed/de1/400/300" }],
        }
    },
    { 
        id: 'houston', name: "Houston Chapter", location: "USA", region: "NA", imageUrl: "images/houston.jpg",
        details: {
            history: "The Houston chapter is a hub for our alumni in the energy sector. Since its inception, it has connected professionals in oil, gas, and renewable energy, as well as the aerospace industry.",
            gallery: [{ src: "images/Chapters%20images/Houston.jpeg" }],
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
        id: 'bahrain', name: "Bahrain Chapter", location: "Bahrain", region: "MEU", imageUrl: "images/bahrin.jpg",
        details: {
            history: "The Bahrain chapter, one of our earliest in the Gulf, has a long history of connecting alumni in the banking and finance sectors. It hosts regular events to foster community and professional growth.",
            gallery: [{ src: "https://picsum.photos/seed/bah1/400/300" }],
        }
    },
    { 
        id: 'uk', name: "UK Chapter", location: "United Kingdom", region: "MEU", imageUrl: "images/uk.jpg",
        details: {
            history: "The UK chapter connects alumni across England, Scotland, Wales, and Northern Ireland. It has strong ties to London's financial district and the UK's rich engineering heritage.",
            gallery: [{ src: "https://picsum.photos/seed/uk1/400/300" }, { src: "https://picsum.photos/seed/uk2/400/300" }],
        }
    },
    { 
        id: 'sydney', name: "OZ MACE Sydney", location: "Australia", region: "AP", imageUrl: "images/australia.jpg",
        details: {
            history: "Founded in July 2013, the Sydney chapter is a major hub for finance and professional services in Australia, connecting alumni in the heart of the city's bustling business district.",
            gallery: [{ src: "https://picsum.photos/seed/syd1/400/300" }],
        }
    },
    { 
        id: 'melbourne', name: "OZ MACE Melbourne", location: "Australia", region: "AP", imageUrl: "images/mellbourne.jpg",
        details: {
            history: "Founded in July 2013, this chapter focuses on Melbourne's vibrant arts, sports, and tech scenes, providing a network for alumni in Victoria. It's known for its creative and social events.",
            gallery: [{ src: "https://picsum.photos/seed/mel1/400/300" }],
        }
    },
    { 
        id: 'brisbane', name: "OZMACE Brisbane", location: "Australia", region: "AP", imageUrl: "images/brisbane.jpg",
        details: {
            history: "The Brisbane chapter supports alumni in Queensland, focusing on the region's strengths in construction, resources, and tourism. It provides a key network on Australia's east coast.",
            gallery: [{ src: "https://picsum.photos/seed/bris1/400/300" }],
        }
    },
    { 
        id: 'singapore', name: "Singapore Chapter", location: "Singapore", region: "AP", imageUrl: "images/singapore.jpeg",
        details: {
            history: "Launched on September 21st, 2024, the Singapore chapter was created to cater to the growing number of MACE alumni in Southeast Asia's premier financial and tech hub. It has since become a vital resource for professional development in the region.",
            gallery: [
                { src: "images/Chapters%20images/Singapore%20(1).jpeg" }, 
                { src: "images/Chapters%20images/Singapore%20(2).jpeg" }, 
                { src: "images/Chapters%20images/Singapore%20(3).jpeg" }
            ],
        }
    },
    { 
        id: 'chennai', name: "Chennai Chapter", location: "Chennai, India", region: "AP", imageUrl: "images/chennai.jpg",
        details: {
            history: "Launched and inaugurated in March 2025, the Chennai chapter serves the large MACE alumni population in South India. It has strong ties to the local IT and automotive industries.",
            gallery: [
                { src: "images/Chapters%20images/Chennai%20(1).jpeg" },
                { src: "images/Chapters%20images/Chennai%20(2).jpeg" },
                { src: "images/Chapters%20images/Chennai%20(3).jpeg" },
                { src: "images/Chapters%20images/Chennai%20(4).jpeg" }
            ],
        }
    },
    { 
        id: 'trichur', name: "Trichur (Seniors) Chapter", location: "Trichur", region: "AP", imageUrl: "images/trichur.jpg",
        details: {
            history: "Launched in Dubai in 2012 with its current president, Joseph Peter, this is also known as the Seniors Chapter, with members from the 1st batch of MACE. The chapter is a hub for our most experienced alumni.",
            gallery: [{ src: "https://picsum.photos/seed/hou1/400/300" }, { src: "https://picsum.photos/seed/hou2/400/300" }],
        }
    }
];

const presidents = [
    // Global
    { chapter: "AMAC", name: "Mohan Joseph Cheeran", contact: "chairman@amac.org", position: "Chairman", phone: "+91-9876543210", imageUrl: "images/People/MohanJoseph.jpeg" },
    
    // UAE
    { chapter: "UAE Chapter", name: "Hussain P", contact: "uae-fp@amac.org", position: "Founder President", phone: null, imageUrl: "images/People/hussain.jpeg" },
    { chapter: "UAE Chapter", name: "Mohan Joseph Cheeran", contact: "uae-fgs@amac.org", position: "Founder Gen. Secretary", phone: null, imageUrl: "images/People/MohanJoseph.jpeg" },
    { chapter: "UAE Chapter", name: "Krishna Kumar", contact: "uae@amac.org", position: "Current President",  imageUrl: "images/People/krishnakumar.jpg" },
    
    // Kuwait
    { chapter: "Kuwait Chapter", name: "Muhhamadd Kutty", contact: "kuwait@amac.org", position: "Founder Chairman", phone: null, imageUrl: "images/People/pkmuahhamedkutty.jpeg" },
    { chapter: "Kuwait Chapter", name: "Giju George", contact: "kuwait-chairman@amac.org", position: "Current Chairman", phone: "+965-51234567", imageUrl: "images/People/GijuGeorge.jpeg" },

    // Saudi Arabia
    { chapter: "Saudi Arabia Chapter", name: "Johnson Samuel", contact: "saudi@amac.org", position: "President", phone: "+966-501234567", imageUrl: "images/People/Johnson%20Samuel%20.jpeg" },

    // Sydney
    { chapter: "OZ MACE Sydney", name: "Xavi Joseph", contact: "sydney-fp@amac.org", position: "Founder President", phone: "+61-401234567", imageUrl: "images/People/xavi.jpeg" },
    { chapter: "OZ MACE Sydney", name: "Basil Mathew", contact: "sydney@amac.org", position: "Current President", phone: null, imageUrl: "https://i.pravatar.cc/150?u=BasilMathew" },

    // Melbourne
    { chapter: "OZ MACE Melbourne", name: "Subeen Mathew", contact: "melbourne-fp@amac.org", position: "Founder President", phone: null, imageUrl: "images/People/SubeenMathew.jpeg" },
    { chapter: "OZ MACE Melbourne", name: "AK THOMAS", contact: "melbourne@amac.org", position: "Current President", phone: null, imageUrl: "https://i.pravatar.cc/150?u=AKTHOMAS" },

    // Singapore
    { chapter: "Singapore Chapter", name: "Shaja Mathews", contact: "singapore@amac.org", position: "Current President", phone: null, imageUrl: "images/People/ShajahMathew.jpeg" },

    // Chennai
    { chapter: "Chennai Chapter", name: "David Rajan", contact: "chennai-fp@amac.org", position: "Founder President", phone: null, imageUrl: "images/People/Rajan%20David.jpeg" },
    { chapter: "Chennai Chapter", name: "David Rajan", contact: "chennai@amac.org", position: "Current President", phone: null, imageUrl: "images/People/Rajan%20David.jpeg" },

    // Trichur
    { chapter: "Trichur (Seniors) Chapter", name: "Joseph Peter", contact: "trichur@amac.org", position: "Current President", phone: null, imageUrl: "images/People/josephpeter.jpeg" },
    { chapter: "Trichur (Seniors) Chapter", name: "George Panikulam", contact: "trichur-vp@amac.org", position: "Vice President", phone: null, imageUrl: "https://i.pravatar.cc/150?u=GeorgePanikulam" },
    
    // Qatar
    { chapter: "Qatar Chapter", name: "Joseph Joy", contact: "qatar-fp@amac.org", position: "Founder President", phone: null, imageUrl: "images/People/Joseph%20Joy.jpeg" },
    { chapter: "Qatar Chapter", name: "Sinesh", contact: "qatar@amac.org", position: "Current President", phone: null, imageUrl: "images/People/Psykhaesh .jpeg" },

    // Washington DC
    { chapter: "Washington D.C. Chapter", name: "Rejive Joseph", contact: "dc-fp@amac.org", position: "Founder President", phone: "+1-202-555-0182", imageUrl: "images/People/RejiveJoseph.jpeg" },
    { chapter: "Washington D.C. Chapter", name: "Psykhaesh", contact: "dc@amac.org", position: "Current President", phone: null, imageUrl: "images/People/Psykhaesh .jpeg" },

    // Chicago
    { chapter: "Chicago Chapter", name: "Subash George", contact: "chicago-fp@amac.org", position: "Founder President", phone: null, imageUrl: "images/People/SubashGeorge%20(2).jpeg" },
    { chapter: "Chicago Chapter", name: "Subash George", contact: "chicago@amac.org", position: "Current President", phone: null, imageUrl: "images/People/SubashGeorge%20(2).jpeg" },

    // Houston
    { chapter: "Houston Chapter", name: "Basil Kuriakose", contact: "houston-fp@amac.org", position: "Founder President", phone: null, imageUrl: "images/People/basil.jpeg" },
    { chapter: "Houston Chapter", name: "Basil Kuriakose", contact: "houston@amac.org", position: "Current President", phone: null, imageUrl: "images/People/basil.jpeg" },

    // Atlanta
    { chapter: "Atlanta Chapter", name: "Manoj K Jose", contact: "atlanta-fp@amac.org", position: "Founder President", phone: null, imageUrl: "images/People/Manoj%20K%20Jose.jpeg" },
    { chapter: "Atlanta Chapter", name: "Manoj K Jose", contact: "atlanta@amac.org", position: "Current President", phone: null, imageUrl: "images/People/Manoj%20K%20Jose.jpeg" },

    // Seattle
    { chapter: "Seattle Chapter", name: "Thomas Stephen", contact: "seattle-fp@amac.org", position: "Founder President", phone: null, imageUrl: "images/People/ThomasStephan.jpeg" },
    { chapter: "Seattle Chapter", name: "Jyothish Nair", contact: "seattle@amac.org", position: "Current President", phone: null, imageUrl: "images/People/jyothishnair.png" },
    
    // Silicon Valley
    { chapter: "Silicon Valley Chapter", name: "John Chandy", contact: "siliconvalley-fp@amac.org", position: "Founder President", phone: null, imageUrl: "images/People/John%20Chandy.jpeg" },
    { chapter: "Silicon Valley Chapter", name: "John Chandy", contact: "siliconvalley@amac.org", position: "Current President", phone: null, imageUrl: "images/People/John%20Chandy.jpeg" },

    // Delaware Valley
    { chapter: "Delaware Valley Chapter", name: "Saji Gopal", contact: "delaware-fp@amac.org", position: "Founder President", phone: null, imageUrl: "images/People/SajiGopal%20(2).jpeg" },
    { chapter: "Delaware Valley Chapter", name: "Saji Gopal", contact: "delaware@amac.org", position: "Current President", phone: null, imageUrl: "images/People/SajiGopal%20(2).jpeg" },

    // Brisbane
    { chapter: "OZMACE Brisbane", name: "Jose Puthanani", contact: "brisbane-fp@amac.org", position: "Founder President", phone: null, imageUrl: "images/People/Jose%20Puthanani.jpeg" },
    { chapter: "OZMACE Brisbane", name: "Jose Puthanani", contact: "brisbane@amac.org", position: "Current President", phone: null, imageUrl: "images/People/Jose%20Puthanani.jpeg" },

    // Canada
    { chapter: "Canada Chapter", name: "Daniel Baby", contact: "canada-fp@amac.org", position: "Founder President", phone: null, imageUrl: "images/People/Daniel%20Baby.jpeg" },
    { chapter: "Canada Chapter", name: "Daniel Baby", contact: "canada@amac.org", position: "Current President", phone: null, imageUrl: "images/People/Daniel%20Baby.jpeg" },

    // Oman
    { chapter: "Oman Chapter", name: "Mr.Murali", contact: "oman-fp@amac.org", position: "Founder President", phone: null, imageUrl: "images/People/murali.jpeg" },
    { chapter: "Oman Chapter", name: "Benny Joseph", contact: "oman@amac.org", position: "Current President", phone: null, imageUrl: "https://i.pravatar.cc/150?u=BennyJoseph" },

    // Bahrain
    { chapter: "Bahrain Chapter", name: "Dr VKM John", contact: "bahrain-fp@amac.org", position: "Founder President", phone: null, imageUrl: "https://i.pravatar.cc/150?u=VKMJohn" },
    { chapter: "Bahrain Chapter", name: "Dr VKM John", contact: "bahrain@amac.org", position: "Current President", phone: null, imageUrl: "https://i.pravatar.cc/150?u=VKMJohn" },

    // UK
    { chapter: "UK Chapter", name: "Jose Mathiaekal", contact: "uk-fp@amac.org", position: "Founder President", phone: null, imageUrl: "images/People/Jose%20Matheickal%20.jpeg" },
    { chapter: "UK Chapter", name: "Sabu Kalathil", contact: "uk@amac.org", position: "Current President", phone: null, imageUrl: "https://i.pravatar.cc/150?u=SabuKalathil" }
];