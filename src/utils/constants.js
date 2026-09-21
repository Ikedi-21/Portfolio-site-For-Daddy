export const profile = {
  displayName: "Prof. Osita Ogbu, OON, FNAE",
  displayNameParts: {
    name: "Prof. Osita Ogbu",
    title1: "OON",
    title2: "FNAE",
  },
  fullName: "Osita Michael Ogbu",
  photo: "/images/osita-001.webp",
  tagline: "Development Economist | Former Presidential Adviser | Author",
  birthDate: "29 September 1957",
  birthplace: null,
  hometown: "Ovoko, Igbo-Eze South LGA, Enugu State, Nigeria",
  education: [
    "B.Sc. Economics, University of Nigeria, Nsukka (1979)",
    "M.A. Economics, Howard University, Washington D.C. (December 1984)",
    "Ph.D. Economics, Howard University, Washington D.C. (May 1988)",
    "Certificate in Corporate Governance, Harvard Business School, Boston (July 2009)"
  ],
  earlyEducation: [
    "Holy Trinity Primary School, Onitsha",
    "St. Teresa's College, Nsukka"
  ],
  shortBio: "Prof. Osita Michael Ogbu is a Nigerian development economist whose work has covered academia, international development, and government service. He served as Chief Economic Adviser to the President of Nigeria and Minister of National Planning from 2005 to 2006, and as Chairman of the Governing Council of the Nigerian Institute of Social and Economic Research (NISER) from 2008 to 2011. Before those appointments, he worked with the World Bank and IDRC, and served as Executive Director/CEO of the African Technology Policy Studies Network (ATPS). He is Professor of Economics at the University of Nigeria and Managing Director/CEO of African Development Solutions International."
};

// Government Service: pending confirmation of any additional adviser appointment, do not add without a source.
export const timeline = {
  "Early Career": [
    { years: "1979-1980", title: "NYSC Tutor", organisation: "Government Secondary School, Lafia" },
    { years: "1980-1982", title: "Management Trainee then District Sales Manager", organisation: "Lever Brothers (Nig) Ltd" },
    { years: "1985-1987", title: "Research Fellow", organisation: "Howard University" }
  ],
  "International Development": [
    { years: "1987-1991", title: "Consultant Research Economist", organisation: "World Bank" },
    { years: "1991-2001", title: "Senior Program Specialist", organisation: "IDRC" },
    { years: "2001-2005", title: "Executive Director/CEO", organisation: "ATPS" },
    { years: "2012", title: "Visiting Fellow", organisation: "Brookings Institution" }
  ],
  "Government Service": [
    { years: "2005-2006", title: "Chief Economic Adviser to the President of Nigeria", organisation: "Federal Government of Nigeria" },
    { years: "2005-2006", title: "Minister of National Planning", organisation: "Federal Government of Nigeria" },
    { years: "2008-2011", title: "Chairman, Governing Council", organisation: "NISER" }
  ],
  "Recognition & Boards": [
    { years: "2008", title: "Fellow", organisation: "National Academy of Education (FNAE)" },
    { years: "2009", title: "Certificate in Corporate Governance", organisation: "Harvard Business School" },
    { years: "2014", title: "Officer of the Order of the Niger (OON)", organisation: "Federal Republic of Nigeria" },
    { years: "2018", title: "133rd Inaugural Lecture", organisation: "University of Nigeria" },
    { years: "2021-present", title: "Non-Executive Director", organisation: "Afrinvest (West Africa) Ltd." },
    { years: "2021-present", title: "Chairman, F&GPC Committee, Governing Council", organisation: "Enugu State University of Science and Technology" },
    { years: "2023-present", title: "Member, Governing Board", organisation: "Nigeria Deposit Insurance Corporation" },
    { years: "2023-present", title: "Member, Governing Council", organisation: "VERITAS University" },
    { years: "2024-present", title: "Member, Global Advisory Board", organisation: "Institute for Governance and Economic Transformation (IGET)" }
  ]
};

export const roles = [
  { position: "Professor of Economics", organisation: "Institute for Development Studies, University of Nigeria, Enugu Campus" },
  { position: "Managing Director/CEO", organisation: "African Development Solutions International (ADSI), Abuja" },
  { position: "Member, Global Advisory Board", organisation: "Institute for Governance and Economic Transformation (IGET)" },
  { position: "Member, Governing Board", organisation: "Nigeria Deposit Insurance Corporation (NDIC)" },
  { position: "Member, Governing Council", organisation: "VERITAS University, Abuja" },
  { position: "Non-Executive Director", organisation: "Afrinvest (West Africa) Ltd." },
  { position: "Chairman, F&GPC Committee, Governing Council", organisation: "Enugu State University of Science and Technology" },
  { position: "Trustee", organisation: "The Clement Isong Foundation" },
  { position: "Director", organisation: "AFRI Heritage Institution, Enugu" },
  { position: "Member, Economic Advisory Committee and Privatization Council", organisation: "Enugu State" }
];

export const publications = {
  verified: [
    {
      id: "development-as-attitude",
      title: "Development as Attitude: How National Progress is shaped by Leadership Philosophy and Citizens' Orientation",
      year: "2023",
      publisher: "Adonis & Abbey Publishers Ltd, London",
      role: "Author",
      coAuthors: null,
      featured: true,
      cover: {
        src: "/images/books/development-as-attitude.png",
        alt: "Cover of Development as Attitude by Osita Ogbu",
        width: 160,
        height: 235
      },
      links: [
        { label: "Publisher page", url: "https://www.adonis-abbey.com/book_detail.php?bookid=292", type: "page" }
      ]
    },
    {
      id: "the-moon-also-sets",
      title: "The Moon Also Sets",
      year: "2002",
      publisher: "East African Educational Publishers, Kenya; Heinemann Nigeria Ltd, Ibadan",
      role: "Author",
      coAuthors: null,
      featured: true,
      cover: {
        src: "/images/books/the-moon-also-sets.webp",
        alt: "Cover of The Moon Also Sets by Osita Ogbu",
        width: 1036,
        height: 1634
      },
      links: [
        { label: "Google Books", url: "https://books.google.com/books/about/The_Moon_Also_Sets.html?id=uOo358UJ9tcC", type: "page" },
        { label: "WorldCat record", url: "https://search.worldcat.org/title/The-moon-also-sets/oclc/1477290394", type: "page" }
      ]
    },
    {
      id: "the-politics-of-trade-and-industrial-policy-in-africa",
      title: "The Politics of Trade and Industrial Policy in Africa: Forced Consensus",
      year: "2004",
      publisher: "Africa World Press and IDRC",
      role: "Editor",
      coAuthors: "With Charles C. Soludo and Ha-Joon Chang",
      featured: true,
      cover: null,
      links: [
        { label: "IDRC page", url: "https://idrc-crdi.ca/en/books/politics-trade-and-industrial-policy-africa-forced-consensus", type: "page" },
        { label: "Read ebook", url: "https://idrc-crdi.ca/sites/default/files/openebooks/125-6/index.html", type: "read" },
        { label: "Download PDF", url: "https://idl-bnc-idrc.dspacedirect.org/bitstream/handle/10625/26947/IDL-26947.pdf?isAllowed=y&sequence=1", type: "download" }
      ]
    },
    {
      id: "technology-policy-and-practice-in-africa",
      title: "Technology Policy and Practice in Africa",
      year: "1995",
      publisher: "IDRC Books, Canada",
      role: "Editor",
      coAuthors: "With Banji O. Oyeyinka and Hasa M. Mlawa",
      featured: false,
      cover: null,
      links: [
        { label: "Read online", url: "https://idrc-crdi.ca/sites/default/files/openebooks/319-4/", type: "read" }
      ]
    },
    {
      id: "the-african-manifesto-for-science-technology-and-innovation",
      title: "The African Manifesto for Science, Technology and Innovation",
      year: "2010",
      publisher: "African Technology Policy Studies Network, Nairobi",
      role: "Co-author",
      coAuthors: "With Alfonso Alfonsi, Kevin Chika Urama, Wiebe Bijker, Nelson Gomez, and Nicholas Ozor",
      featured: false,
      cover: null,
      links: [
        { label: "Download PDF", url: "https://www.atpsnet.org/Files/the_african_manifesto_for_st&i.pdf", type: "download" }
      ]
    },
    {
      id: "the-global-economic-crisis-and-nigeria",
      title: "The Global Economic Crisis and Nigeria: Taking the Right Lessons, Avoiding the Wrong Lessons",
      year: "2010",
      publisher: "African Institute for Applied Economics, Enugu",
      role: "Co-author",
      coAuthors: "With Eric C. Eboh",
      featured: false,
      cover: null,
      links: [
        { label: "Author listing", url: "https://ericeboh.org/publications/", type: "page" }
      ]
    },
    {
      id: "african-youth-on-the-information-highway",
      title: "African Youth on the Information Highway: Participation and Leadership in Community Development",
      year: "2000",
      publisher: "IDRC",
      role: "Editor",
      coAuthors: "With Paschal Mihyo",
      featured: false,
      cover: null,
      links: [
        { label: "Read online", url: "https://idrc-crdi.ca/sites/default/files/openebooks/259-7/index.html", type: "read" },
        { label: "Catalogue/PDF", url: "https://publications.gc.ca/pub?id=431757&sl=0", type: "download" }
      ]
    },
    {
      id: "structural-adjustment-and-the-provision-of-housing-in-africa",
      title: "Structural Adjustment and the Provision of Housing in Africa",
      year: "1993",
      publisher: "Shelter-Afrique",
      role: "Author",
      coAuthors: null,
      featured: false,
      cover: null,
      links: [
        { label: "Bibliographic record", url: "https://www.africabib.org/query_p.php?SR=3&pe=%21J00006049%21", type: "page" }
      ]
    },
    {
      id: "cost-sharing-in-education-and-health",
      title: "Cost Sharing in Education and Health",
      year: "1999",
      publisher: "TEMA Publishers",
      role: "Editor",
      coAuthors: "With T. L. Maliyamkono",
      featured: false,
      cover: null,
      links: [
        { label: "Related record", url: "https://www.econbiz.de/Record/public-expenditure-and-delivery-of-education-in-kenya-lessons-from-secondary-schools-mwiria-kilemi/10001621580", type: "page" }
      ]
    }
  ],
  needsVerification: [
    { title: "Human Rights Law and Practice in Nigeria" },
    { title: "Modern Nigerian Legal System" },
    { title: "Combating Corruption in Nigeria: A Critical Appraisal of the Laws, Institutions, and the Political Will" },
    { title: "Alteration of the 1999 Constitution for the Autonomy of the Legislature" }
  ]
};

export const speaking = [
  { title: "133rd Inaugural Lecture", event: "University of Nigeria", date: "26 April 2018", topic: "Why Are They So Poor", pullQuote: null },
  { title: "11th Convocation Lecture", event: "National Open University of Nigeria", date: "2022", topic: "The Fourth Industrial Revolution and the Challenge of Poverty Reduction in Nigeria", pullQuote: null },
  { title: "National Dialogue Series", event: "Nigerian Hamilton Project", date: "2023-2025", topic: null, pullQuote: null }
];

export const honours = [
  { award: "Officer of the Order of the Niger (OON)", year: "2014" },
  { award: "Fellow of the National Academy of Education (FNAE)", year: "2008" },
  { award: "Ph.D. Terminal Fellowship Award", year: "1987-1988", organisation: "Howard University" },
  { award: "National Students' Dean's List", year: "1984-1985", organisation: "USA" },
  { award: "Certificate in Corporate Governance", year: "2009", organisation: "Harvard Business School" }
];

export const quotes = [
  {
    text: "Nigerian universities had become degree-producing factories instead of solution providers",
    source: "2025 public statement",
    verified: true
  },
  {
    text: "Development is ultimately shaped not just by leadership alone, but by the ideas, values, and philosophies leaders bring into governance",
    source: null,
    verified: false
  },
  {
    text: "Visionary leadership can achieve transformative results if anchored in the right philosophy",
    source: null,
    verified: false
  },
  {
    text: "Economic growth is necessary but not a sufficient condition for poverty reduction",
    source: null,
    verified: false
  }
];

export const contact = {
  adsi: "http://www.adsinet.org/",
  igetProfile: "https://www.igetafrica.org/advisory-board/osita-ogbu/",
  email: null,
  linkedin: null,
  universityProfile: null
};

export const images = [
  {
    src: "/images/osita-001.webp",
    fallbackSrc: "/images/Osita 001.jpg",
    alt: "Studio portrait of Prof. Osita Ogbu wearing a dark suit jacket, white collared shirt, and glasses",
    caption: null,
    credit: null,
    section: "hero"
  },
  {
    src: "/images/osita-1.webp",
    fallbackSrc: "/images/Osita 1.jpg",
    alt: "Portrait of Prof. Osita Ogbu in a navy suit jacket, patterned light blue shirt, and glasses",
    caption: null,
    credit: null,
    section: "about"
  }
];
