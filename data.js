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
            {src: "images/Chapters%20images/uae.jpeg",caption: "Mace Alumni UAE Dance team winning ACKAF  dance competition in 2025"},
            {src: "images/Chapters images/uae220.jpeg",caption: "The only MACE college union CHAIRMAN  to  join MACE Alumni UAE so far. ( 2015EEE   SREC campus interview. ) KEVIN JOHNY"},
            {type:'video',src:"https://www.youtube.com/embed/PTHi6K3H6s0"}

        ],
    }
},
    { 
        id: 'saudi', name: "Saudi Arabia Chapter", location: "Saudi Arabia", region: "MEU", imageUrl: "images/saudi.webp",
        details: {
            history: "Our chapter was formed in 2016 to align with the Kingdom's Vision 2030, creating a network for MACE engineers and professionals contributing to the nation's ambitious giga-projects and economic diversification.",
            gallery: [],
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
            history: "The Qatar Chapter was founded in the 90's by founder trio Er.Govindan Kutty (late), Er.Jason Chacko (late) & Er.Joy Joseph",
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
            gallery: [{ src: "images/Chapters%20images/chicago.webp" },
                {src:"images/Chapters images/chicago45.jpeg",caption:"MIDWEST Chicago  Committee members with Principal Dr Bos Mathew Jos"},
                {src:"images/Chapters images/chicago46.jpeg",caption:"President & vice president Chicago Chapter  Subash George & Lishy  honoring  Principal.on  Oct 2025"},
                {src:"images/Chapters images/chicago44.jpeg",caption:"Welcome given by Midwest Chicago  chapter  to MACEAA President & Principal  Dr. BOS MATHEW JOS  in Chicago on 4th October 2025"}
            ],
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
            { src: "images/Chapters%20images/Seattle%20(2).webp" ,caption:'Dignitaries on the podium'},
            { src: "images/Chapters%20images/Seattle%20(5).webp", caption:"Group photo of inauguration"},
            { src: "images/Chapters%20images/Seattle%20(1)_1.webp",caption:"AMAC chairman's inaugural address" },
            { src: "images/Chapters%20images/Seattle%20(1).webp",caption:'Seattle Board members with the dignitaries' },
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
                { src: "images/Chapters%20images/sillicaonvalley111 (1).jpeg",caption:"5th Anniversary Celebration of Silicon Valley Chapter" },
                { src: "images/Chapters%20images/sillicaonvalley111 (2).jpeg",caption:'Newly elected MACE Alumni, Silicon Valley Chapter Board.  President Biju Nair (1992 ECE), Secretary Sibi  Joseph (2003 ECE).' },
                {src: "images/Chapters%20images/silliconvalley.webp",caption:"AMAC Leaders in Silicon Valley 2019. Silicon Valley Leader Thampy Antony  toasting welcome to AMAC chairman Mohan J Cheeran, OZMACE Founder President Xavi Joseph & Bala Murali  ( who became Gen Secretary of MACEALUMNI ( 24-26"},
                {type:'video',src:"https://www.youtube.com/embed/l_S6h_SOE-M"}


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
            gallery: [],
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
            gallery: [],
        }
    },
    { 
        id: 'bahrain', name: "Bahrain Chapter", location: "Bahrain", region: "MEU", imageUrl: "images/bahrin.webp",
        details: {
            history: "The Bahrain chapter, one of our earliest in the Gulf, has a long history of connecting alumni in the banking and finance sectors. It hosts regular events to foster community and professional growth.",
            gallery: [],
        }
    },
    { 
        id: 'uk', name: "UK Chapter", location: "United Kingdom", region: "MEU", imageUrl: "images/uk1.jpg",
        details: {
            history: "The UK chapter connects alumni across England, Scotland, Wales, and Northern Ireland. It has strong ties to London's financial district and the UK's rich engineering heritage.",
            gallery: [{ src: "images/uk.webp" }],
        }
    },
    { 
        id: 'sydney', name: "OZ MACE Sydney", location: "Australia", region: "AP", imageUrl: "images/australia.webp",
        details: {
            history: "Founded in July 2013, the Sydney chapter is a major hub for finance and professional services in Australia, connecting alumni in the heart of the city's bustling business district.",
            gallery: [{ src: "images/Chapters images/OZ mace sydney (1).webp" },{ src: "images/Chapters images/OZ mace sydney (2).webp" },{ src: "images/Chapters images/OZ mace sydney (3).webp" },
                        {src:"images/Chapters images/sydney43.jpeg",caption:"OZMACE Sydney President with Amac chairman"}

            ],
        }
    },
    { 
        id: 'melbourne', name: "OZ MACE Melbourne", location: "Australia", region: "AP", imageUrl: "images/mellbourne.webp",
        details: {
            history: "Founded in July 2013, this chapter focuses on Melbourne's vibrant arts, sports, and tech scenes, providing a network for alumni in Victoria. It's known for its creative and social events.",
            gallery: [],
        }
    },
    { 
        id: 'brisbane', name: "OZMACE Brisbane", location: "Australia", region: "AP", imageUrl: "images/brisbane.webp",
        details: {
            history: "The Brisbane chapter supports alumni in Queensland, focusing on the region's strengths in construction, resources, and tourism. It provides a key network on Australia's east coast.",
            gallery: [],
        }
    },
    { 
        id: 'singapore', name: "Singapore Chapter", location: "Singapore", region: "AP", imageUrl: "images/singapore-1.webp",
        details: {
            history: "Launched on September 21st, 2024, the Singapore chapter was created to cater to the growing number of MACE alumni in Southeast Asia's premier financial and tech hub. It has since become a vital resource for professional development in the region.",
            gallery: [
                { src: "images/Chapters%20images/Singapore%20(1).webp" }, 
                { src: "images/Chapters%20images/Singapore%20(2).webp" }, 
                { src: "images/Chapters%20images/Singapore%20(3).webp" },
                { src: "images/Chapters%20images/Singapore.jpeg" ,caption:"Celebrated First Annual day & ONAM 2025 on October 25th."}
                       
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
            gallery: [
                { src: "images/Chapters%20images/perth%20(1).webp" },
                { src: "images/Chapters%20images/perth%20(2).webp" },
                { src: "images/Chapters%20images/perth%20(3).webp" },
                { src: "images/Chapters%20images/perth%20(4).webp" }

],
        }
    },
    {
        id:'perth',name:"Perth Chapter",location:"Perth,Australia",region:"AP",imageUrl:"images/perth.jpg",
        details:{
            history:"The latest Chapter Inaugrated on 18th October 2025, Unites MACE Alumini Across Western Australia",
            gallery:[
                { src: "images/Chapters%20images/perth%20(1).jpeg",caption:"Inauguration of MACE Alumni Perth Chapter by Mr. Mohan Joseph Cheeran"},
                { src: "images/Chapters%20images/perth%20(2).jpeg" },
                { src: "images/Chapters%20images/perth%20(3).jpeg" },
                { src: "images/Chapters%20images/perth%20(4).jpeg" },
                { src: "images/Chapters%20images/perth12.jpeg" }

            ],
        }
    }
];

const presidents = [
    { chapter: "AMAC", name: "Mohan Joseph Cheeran", position: "Chairman", email:"chairman@amac.org.in" ,phone: null, imageUrl: "images/People/MohanJoseph.webp" },
    { chapter: "UAE Chapter", name: "Hussain P", position: "Founder President", phone: null, imageUrl: "images/People/hussain.webp" },
    { chapter: "UAE Chapter", name: "Mohan Joseph Cheeran", position: "Founder Gen. Secretary",email:"chairman@amac.org.in", phone: null, imageUrl: "images/People/MohanJoseph.webp" },
    { chapter: "UAE Chapter", name: "Krishna Kumar", position: "Current President", phone: null, imageUrl: "images/People/krishnakumar.webp" },
    { chapter: "Kuwait Chapter", name: "Sasi Kodanadan Late", position: "Founder Gen. Secretary", phone: null, imageUrl: "images/People/SasiKodanad.webp" },
    { chapter: "Kuwait Chapter", name: "Muhhamadd Kutty", position: "Founder Chairman", phone: null, imageUrl: "images/People/pkmuahhamedkutty.webp" },
    { chapter: "Kuwait Chapter", name: "Delin Sojan", position: "Current Gen. Secretary", phone: null,email:null, imageUrl: "" },
    { chapter: "Kuwait Chapter", name: "Giju George", position: "Current Chairman", phone: null, imageUrl: "images/People/GijuGeorge.webp" },
    { chapter: "Saudi Arabia Chapter", name: "Johnson Samuel", position: "President", phone: null, imageUrl: "images/People/Johnson%20Samuel%20.webp" },
    { chapter: "OZ MACE Sydney", name: "Xavi Joseph", position: "Founder President", phone: null, imageUrl: "images/People/xavi.webp" },
    { chapter: "OZ MACE Sydney", name: "Basil Mathew", position: "Current President", phone: null, imageUrl: "images/People/basilmathew.JPG" },
    { chapter: "OZ MACE Melbourne", name: "Subeen Mathew", position: "Founder President", phone: null, imageUrl: "images/People/SubeenMathew.webp" },
    { chapter: "OZ MACE Melbourne", name: "AK THOMAS", position: "Current President", phone: null, imageUrl: "images/People/AK%20THOMAS.webp" },
    { chapter: "Singapore Chapter", name: "Shaja Mathews", position: "Founder President", phone: null, imageUrl: "images/People/ShajahMathew.webp" },
    { chapter: "Singapore Chapter", name: "Shaja Mathews", position: "Current President", phone: null, imageUrl: "images/People/ShajahMathew.webp" },
    { chapter: "Chennai Chapter", name: "David Rajan", position: "Founder President", phone: null, imageUrl: "images/People/Rajan%20David.webp" },
    { chapter: "Chennai Chapter", name: "David Rajan", position: "Current President", phone: null, imageUrl: "images/People/Rajan%20David.webp" },
    { chapter: "Trichur (Seniors) Chapter", name: "Joseph Peter", position: "Current President", phone: null, imageUrl: "images/People/josephpeter.webp" },
    { chapter: "Trichur (Seniors) Chapter", name: "George Panikulam", position: "Vice President", phone: null, imageUrl: "images/People/George%20Issac%20(2).webp" },
    { chapter: "Qatar Chapter", name: "Joseph Joy", position: "Founder President", phone: null, imageUrl: "images/People/Joseph%20Joy.webp" },
    { chapter: "Qatar Chapter", name: "Sinesh", position: "Current President", phone: null, imageUrl: "" },
    { chapter: "Washington D.C. Chapter", name: "Rejive Joseph", position: "Founder President", phone: null, imageUrl: "images/People/RejiveJoseph.webp" },
    { chapter: "Washington D.C. Chapter", name: "Psykhaesh", position: "Current President", phone: null, imageUrl: "images/People/Psykhaesh%20.webp" },
    { chapter: "Chicago Chapter", name: "Subash George", position: "Founder President", phone: null, imageUrl: "images/People/SubashGeorge%20(2).webp" },
    { chapter: "Chicago Chapter", name: "Subash George", position: "Current President", phone: null, imageUrl: "images/People/SubashGeorge%20(2).webp" },
    { chapter: "Houston Chapter", name: "Basil Kuriakose", position: "Founder President", phone: null, imageUrl: "images/People/basil.webp" },
    { chapter: "Houston Chapter", name: "Basil Kuriakose", position: "Current President", phone: null, imageUrl: "images/People/basil.webp" },
    { chapter: "Atlanta Chapter", name: "Manoj K Jose", position: "Founder President", phone: null, imageUrl: "images/People/Manoj%20K%20Jose.webp" },
    { chapter: "Atlanta Chapter", name: "Manoj K Jose", position: "Current President", phone: null, imageUrl: "images/People/Manoj%20K%20Jose.webp" },
    { chapter: "Seattle Chapter", name: "Thomas Stephen", position: "Founder President", phone: null,email:"vicechair@amac.org.in", imageUrl: "images/People/ThomasStephan.webp" },
    { chapter: "Seattle Chapter", name: "Jyothish Nair", position: "Current President", phone: null, imageUrl: "images/People/jyothishnair.webp" },
    { chapter: "Silicon Valley Chapter", name: "John Chandy", position: "Founder President", phone: null, imageUrl: "images/People/John%20Chandy.webp" },
    { chapter: "Silicon Valley Chapter", name: "Biju Nair", position: "Current President", phone: null, imageUrl: "images/People/baijunair.jpeg" },
    { chapter: "Delaware Valley Chapter", name: "Saji Gopal", position: "Founder President", phone: null, imageUrl: "images/People/SajiGopal%20(2).webp" },
    { chapter: "Delaware Valley Chapter", name: "Saji Gopal", position: "Current President", phone: null, imageUrl: "images/People/SajiGopal%20(2).webp" },
    { chapter: "OZMACE Brisbane", name: "Jose Puthanani", position: "Founder President", phone: null, imageUrl: "images/People/Jose%20Puthanani.webp" },
    { chapter: "OZMACE Brisbane", name: "Jose Puthanani", position: "Current President", phone: null, imageUrl: "images/People/Jose%20Puthanani.webp" },
    { chapter: "Canada Chapter", name: "Daniel Baby", position: "Founder President", phone: null, imageUrl: "images/People/Daniel%20Baby.webp" },
    { chapter: "Canada Chapter", name: "Daniel Baby", position: "Current President", phone: null, imageUrl: "images/People/Daniel%20Baby.webp" },
    { chapter: "Oman Chapter", name: "Mr. Saju Cherian Late", position: "Founder President", phone: null, imageUrl: "images/People/sajucherian.png" },
    { chapter: "Oman Chapter", name: "Benny Joseph", position: "Current President", phone: null, imageUrl: "images/People/benneyjoseph.jpeg" },
    { chapter: "Bahrain Chapter", name: "Late Dr. VKM John", position: "Founder President (Former Principal)", phone: null, imageUrl: "images/People/vkmjohn.jpeg" },
    { chapter: "Bahrain Chapter", name: "Rajesh George", position: "Current President", phone: null, imageUrl: "" },
    { chapter: "UK Chapter", name: "Jose Mathiaekal", position: "Founder President", phone: null, imageUrl: "images/People/Jose%20Matheickal%20.webp" },
    { chapter: "UK Chapter", name: "Sabu Kalathil", position: "Current President", phone: null, imageUrl: "images/People/SabuKalathil.webp" }
];

// UPDATED EXCOM DATA WITH REAL IMAGES
const excomMembers = [
    { name: "Er .Mohan Joseph Cheeran", amacPosition: "Chairman AMAC", details: "1971 Electrical, Founder Chairman & MD SREC Abudhabi", email:"chairman@amac.org.in", imageUrl: "images/People/MohanJoseph.webp" },
    { name: "Dr. Bos Mathew Jos", amacPosition: "Principal MACE", details: null, email:"principalmace.ac.in", imageUrl: "images/People/bosmathewjose.png"},
    { name: "Er. Xavi K. Joseph", amacPosition: "Vice Chairman AMAC (ASIA PACIFIC)", details: "1973 Electrical, Asset Manager Retired (Sydney Trains)", imageUrl: "images/People/xavi.webp" },
    { name: "ER. Thomas Stephen", amacPosition: "Vice Chairman AMAC (AMERICAS)", details: "1974 Electrical, RE AECOM Alain UAE", email:"vicechair@amac.org.in", imageUrl: "images/People/ThomasStephan.webp" },
    { name: "Er. Mathew Kavalam", amacPosition: "Vice Chairman AMAC (ME & EUROPE) / Treasurer AMAC", details: "1985 Mechanical, Treasurer (2012-2024)", imageUrl: "images/People/MathewKavalam.webp" },
    { name: "Jacob Zachariah", amacPosition: "General Secretary AMAC", details: null, email:"secretary@amac.org.in", imageUrl: "images/People/jacobzacharia.png" },
    { name: "John Emmanuel", amacPosition: "Special Nominee by UAE Chapter / BALI Convener", details: null, imageUrl: "images/People/john_emmanuel.webp" },
    { name: "Krishna Kumar", amacPosition: "President - UAE Chapter", details: null, imageUrl: "images/People/krishnakumar.webp" },
    { name: "Giju K George", amacPosition: "Chairman - Kuwait Chapter", details: null, imageUrl: "images/People/GijuGeorge.webp" },
    { name: "Sinesh", amacPosition: "President - Qatar Chapter", details: null, imageUrl: "images/People/Psykhaesh%20.webp" },
    { name: "Benny Joseph", amacPosition: "President - Oman Chapter", details: null, imageUrl: "images/People/benneyjoseph.jpeg" },
    { name: "Rajesh George", amacPosition: "President - Baharin Chapter", details: null, imageUrl: "" },
    { name: "Johnson Samuel", amacPosition: "President - KSA Chapter", details: null, imageUrl: "images/People/Johnson%20Samuel%20.webp" },
    { name: "Joseph Peter", amacPosition: "President - Trichur (Senior Chapter)", details: null, imageUrl: "images/People/josephpeter.webp" },
    { name: "Sabu Kalathil", amacPosition: "President UK Chapter", details: null, imageUrl: "" },
    { name: "Biju Nair", amacPosition: "President Silicon Valley Chapter", details: null, imageUrl: "images/People/baijunair.jpeg" },
    { name: "Jyotish Nair", amacPosition: "President Seattle Chapter", details: null, imageUrl: "images/People/jyothishnair.webp" },
    { name: "Psykhaesh", amacPosition: "President Washington DC Chapter", details: null, imageUrl: "images/People/Psykhaesh .webp" },
    { name: "Saji Gopal", amacPosition: "President Delaware Chapter", details: null, imageUrl: "images/People/SajiGopal%20(2).webp" },
    { name: "Bazil Kuriakose", amacPosition: "President Houston Chapter", details: null, imageUrl: "images/People/basil.webp" },
    { name: "Manoj K Jose", amacPosition: "President Atlanta Chapter", details: null, imageUrl: "images/People/Manoj%20K%20Jose.webp" },
    { name: "Subash George", amacPosition: "President Chicago Chapter", details: null, imageUrl: "images/People/SubashGeorge%20(2).webp" },
    { name: "Daniel Baby", amacPosition: "President CANADA Chapter (TORONTO)", details: null, imageUrl: "images/People/Daniel%20Baby.webp" },
    { name: "Shajah Mathew", amacPosition: "President - Singapore Chapter", details: null, imageUrl: "images/People/ShajahMathew.webp" },
    { name: "Subeen Mathew", amacPosition: "President OZMACE Melbourne", details: null, imageUrl: "images/People/SubeenMathew.webp" },
    { name: "Jose Puthanani", amacPosition: "President OZMACE Brisbane", details: null, imageUrl: "images/People/Jose%20Puthanani.webp" },
    { name: "Basil Mathew", amacPosition: "President OZMACE Sydney", details: null, imageUrl: "images/People/bas" },
    { name: "David Rajan", amacPosition: "President - Chennai", details: null, imageUrl: "images/People/Rajan%20David.webp"},
    { name: "Dr. Jiss Paul", amacPosition: "General Secretary MACEAA", details: null, imageUrl: "images/People/JissPaul.jpeg"},
    { name: "Dr. George Issac", amacPosition: "Founder AMAC Member", details: "1981 Mechanical, Principal (2007-2015)", imageUrl: "images/People/George%20Issac%20(2).webp" }
];