/* ------------------------------------------------------------------
   All page copy in one place. Text transcribed from the Figma design.
   Items flagged PLACEHOLDER are awaiting final values from the client.
   ------------------------------------------------------------------ */

export const site = {
  name: 'Afsha Hossain',
  nav: {
    cta: { label: 'Explore Books', href: '#featured-work' },
    links: [
      { label: 'The Book', href: '#featured-work' },
      { label: 'About', href: '#meet-afsha' },
      { label: 'Writing Life', href: '#writers-centre' },
      { label: 'Beyond Writing', href: '#beyond-writing' },
    ],
  },
}

export const hero = {
  eyebrow: 'Author • Writer • Storyteller',
  heading: 'Stories that Stay with you.',
  intro:
    'Afsha Hossain is an author whose work explores fantasy mystery, bringing together imagination, experience and a distinct perspective on the world.',
  actions: [
    { label: 'Explore My Books', href: '#featured-work', variant: 'primary' },
    { label: 'About the Author', href: '#meet-afsha', variant: 'secondary' },
  ],
}

export const featuredWork = {
  label: 'Featured Work',
  tag: 'Fantasy Mystery',
  title: 'The Life of Flow Turner',
  subtitle:
    'What if the life you thought you knew was only the beginning of the mystery?',
  description:
    'The Life of Flow Turner follows Flow Turner through a world where forgotten secrets, strange encounters and hidden truths begin to unravel. As reality becomes harder to distinguish from the impossible, Flow must decide how far she is willing to go to discover the truth.',
  details: [
    ['Price', 'AU$7.95'],
    ["Author's website", 'www.ahereader.com.au'],
    ['Publisher', 'Creative Dhaka Publications · www.creativedhaka.com'],
    ['ISBN', '978-984-8071-89-2'],
    ['Copyright', '© 2026'],
  ],
  legal: ['Privacy Policy', 'Terms of Use'],
  actions: [
    { label: 'Buy Now', variant: 'primary', modal: 'buy' },
    { label: 'Discover the Book', href: '#flow-turner', variant: 'secondary' },
  ],
  purchaseEmail: { label: 'Email for purchase', email: 'purchase.ahereader@gmail.com' },
  // The two boxes under the buttons; each opens a popup (client change request, Oct 2026)
  infoBoxes: [
    { id: 'terms', title: 'Sales Terms & Conditions', text: 'Prices, payment, delivery and returns' },
    { id: 'safety', title: 'Safety and suitability', text: 'How we keep young readers safe' },
  ],
}

// Section after Featured Work. PLACEHOLDER wording – confirm with the client.
export const guardian = {
  label: 'Under Supervision of Legal Guardian',
  heading: 'Afsha is a young author.',
  body: 'This website, the sale of her book and all communication are managed under the supervision of her legal guardian.',
  points: [
    'Orders, payments and deliveries are handled by her legal guardian.',
    'Messages sent to Afsha through this website are read by her legal guardian first.',
    'Photos and stories on this website are shared with her legal guardian’s consent.',
  ],
  contact: { label: 'Questions for her legal guardian?', email: 'afshahossain13@gmail.com' },
}

// "Buy Now" popup. Payment is PayID or bank transfer only; orders go by email.
export const purchase = {
  eyebrow: 'The Life of Flow Turner',
  title: 'Buy the book',
  price: 'AU$7.95',
  priceNote: 'No GST included',
  payment: 'PayID or Bank Transfer only',
  // PLACEHOLDER wording – confirm with the client (they may want PayID / bank details shown here)
  steps: [
    'Email us with your name, delivery address and the number of copies you would like.',
    'We will reply with the PayID or bank transfer details and your total.',
    'Once payment is received, your book is posted within 7 to 10 business days.',
  ],
  cta: 'Email to purchase',
  subject: 'Book order: The Life of Flow Turner',
  termsLink: 'Read the Sales Terms & Conditions',
}

// Sales Terms & Conditions popup (text from the client's PDF)
export const salesTerms = {
  title: 'Sales Terms & Conditions',
  items: [
    {
      heading: 'Prices',
      body: 'All prices shown on this website are in Australian Dollars, are subject to change without notice, and do not include GST.',
    },
    { heading: 'Payment Mode', body: 'PayID or Bank Transfer only.' },
    {
      heading: 'Delivery',
      body: 'We will pick the most appropriate freight service to get your order to you as quickly as possible. Our standard delivery timeline is 7 to 10 business days, excluding weekends and public holidays.',
    },
    {
      heading: 'Back Orders',
      body: 'If you try to order a book that is not in stock, the availability status should quote "Temporarily out of stock". The sheer volume of products being invoiced daily may result in stock running out before the website updates.',
    },
    {
      heading: 'Quality Guarantee',
      body: "All items we sell are brand new, freshly printed from the publisher. We don't sell second-hand books and never sell damaged stock as new items. All books available for sale on this website are offered as new, unless otherwise indicated or heavily discounted to clear.",
    },
    {
      heading: 'Goods Returned For Credit',
      body: 'All books bought "On Approval" can be returned for a full credit if returned within 15 days of the invoice date. Return freight is the responsibility of the sender, and goods must be received by us in a saleable condition. A Returns Authorisation will be given if the goods are faulty, and they can be replaced with a new copy or credited to your account.',
    },
  ],
}

// Safety and suitability popup (text from the client's PDF)
export const safety = {
  title: 'Safety and suitability',
  intro:
    "Welcome to a digital haven where children's books come alive safely, creatively, and without compromise.",
  points: [
    {
      heading: 'Absolute Under Parental Observation',
      body: 'Every aspect of the platform operates under your direct supervision, ensuring complete peace of mind while your child explores.',
    },
    {
      heading: 'Zero Random Exposure',
      body: 'Say goodbye to unpredictable search results and rabbit holes. We handpick and curate every piece of content to protect your child from unexpected material.',
    },
    {
      heading: 'No Third-Party Feeds or Ads',
      body: 'There are no algorithms, external ads, or distracting social feeds designed to capture your child’s attention. Just pure, wholesome storytelling.',
    },
    {
      heading: 'Screen-Smart Creativity',
      body: 'Turn screen time into a constructive, imagination-boosting experience that encourages a genuine love for reading and creativity.',
    },
  ],
  promise: {
    heading: 'Our Promise:',
    body: 'Total control over what reaches your child, paired with a joyful, enriching space for growing imaginations.',
  },
}

export const meetAfsha = {
  label: 'Meet Afsha Hossain',
  greeting: 'Hi, my name is,',
  name: 'Afsha Hossain',
  lead: 'I am the author of <em>The Life of Flow Turner</em>, a book for all ages — not just kids.',
  body: 'I am a young writer who loves creative stories, music, games, and bringing ideas to life through writing.',
  action: { label: 'Discover the Book', href: '#flow-turner', variant: 'secondary' },
}

export const writersCentre = {
  label: 'Member of Queensland Writers Centre',
  paragraphs: [
    'I am a member of the Queensland Writers Centre through the youth writing department.',
    'This centre organises monthly creative writing workshops. Queensland Writers Centre tutors lead the sessions. They help by listening to ideas, reading work, and editing pieces for publishing. Every session gives us time to write, talk freely, and reach our goals.',
  ],
  encourage:
    'I encourage all young writers to join. You can learn more at the following website:',
  link: {
    label: 'queenslandwriters.org.au/youthwriting',
    href: 'https://queenslandwriters.org.au/youthwriting',
  },
  action: { label: "Read Afsha's Story", href: '#meet-afsha', variant: 'secondary' },
}

export const parentsJourney = {
  label: "Afsha's Journey Through the Eyes of Her Parents",
  intro:
    'As Afsha’s parents, we have had the privilege of watching her grow and develop her love for reading, writing and music from a very young age.',
  // A carousel — one card per chapter of the story. bg/fg are the exact
  // per-card colours from the Figma card strip (node 62:85).
  cards: [
    {
      image: 'journey/journey-01-rhyme-book.jpg',
      alt: 'Illustration: toddler Afsha with her first little rhyme book',
      bg: '#f7ded4',
      fg: '#551200',
      text: 'From around the age of two, Afsha showed a strong interest in books and reading. One of her very first books was a small rhyme book, which she loved so much that she read it more than a hundred times. We still keep that little book as a special memory.',
    },
    {
      image: 'journey/journey-02-piano.jpg',
      alt: 'Illustration: Afsha playing piano and recording for her “Afsha Piano” YouTube channel',
      bg: '#fae3b5',
      fg: '#906816',
      text: 'Time flew by, and at the age of twelve, Afsha also began learning to play the piano. She quickly developed a strong interest in music and continues to practise under the guidance of a professional teacher. She also manages her own YouTube channel under a parental account, where she currently has more than 70 subscribers, profile name “Afsha Piano”.',
    },
    {
      image: 'journey/journey-03-reading.jpg',
      alt: 'Illustration: Afsha reading late into the night',
      bg: '#d4f7f3',
      fg: '#0a9888',
      text: 'As she grew older, her interest in reading became even stronger. She was always excited to buy new books and would often finish reading them as soon as she had some spare time. Reading became such an important part of her daily life that, even at bedtime, she would sometimes continue reading until her mother reminded her that it was time to sleep!',
    },
    {
      image: 'journey/journey-04-writing-idea.jpg',
      alt: 'Illustration: Afsha and her father talking about writing a book on a trip',
      bg: '#9df0cc',
      fg: '#148956',
      text: 'One day, while travelling together and discussing Afsha’s strong reading and writing abilities, her father encouraged her to consider writing a book. At first, she was unsure about the idea. However, she gradually began to take it seriously. A few months later, when she was twelve and a half years old, Afsha told us that she wanted to start writing a book and planned to reveal it to us on her thirteenth birthday.',
    },
    {
      image: 'journey/journey-05-pronunciation.jpg',
      alt: 'Illustration: Afsha learning pronunciation with her mother',
      bg: '#d4f7d6',
      fg: '#129c1a',
      text: 'Over time, Afsha also became very interested in learning how to pronounce words correctly, with the close support and guidance of her mother. This helped her develop a strong appreciation for language, and even today, she is very attentive to the correct pronunciation of words.',
    },
    {
      image: 'journey/journey-06-secret.jpg',
      alt: 'Illustration: Afsha keeping her story a secret while she writes',
      bg: '#f6eadc',
      fg: '#b96d15',
      text: 'As parents, we were incredibly proud and excited to hear this. However, we had no idea how much effort and dedication she would put into her writing. During the process, whenever we asked about the story, she would only tell us that it was about a fictional character and kept most of the details a secret.',
    },
    {
      image: 'journey/journey-07-library.jpg',
      alt: 'Illustration: Afsha at the library, borrowing books and writing',
      bg: '#f7d4f4',
      fg: '#8a0b80',
      text: 'In her age Seven & half, Afsha began learning how to write paragraphs from her school, and this soon sparked her interest in creative writing and got multiple acknowledgment from her class teachers. At the same time, she developed a wonderful habit of regularly visiting the library and borrowing many books.',
    },
    {
      image: 'journey/journey-06-secret.jpg',
      alt: 'Illustration: Afsha revealing her first book, The Life of Flow Turner',
      bg: '#f6eadc',
      fg: '#b96d15',
      text: 'When Afsha finally revealed her first book, The Life of Flow Turner, we were amazed and extremely proud. We both loved the story and were impressed by her imagination, enthusiasm and writing skills. The book introduced around twenty characters and showed us the creativity and dedication she had put into her work.',
    },
  ],
}

export const beyondWriting = {
  label: 'Beyond Writing',
  heading: "When I'm not writing, I'm playing.",
  body: 'Writing isn’t the only way Afsha expresses her creativity. On her YouTube channel, she shares her love for music through piano performances and covers of songs she enjoys.',
  caption: "Piano covers, music and moments from Afsha's creative world.",
  actions: [
    {
      label: 'Watch on Youtube',
      href: 'https://www.youtube.com/channel/UCLm7umXnn4ftzrLIsDDm6TQ',
      variant: 'primary',
      external: true,
    },
    {
      label: 'Listen on iCloud',
      href: 'https://www.icloud.com/notes/0capDW4YKif-6C-KBcXwcYpHg#MY_NAME_IS_AFSHA',
      variant: 'secondary',
      external: true,
    },
  ],
}

export const flowTurnerCta = {
  label: 'The Life of Flow Turner',
  heading: 'A life. A mystery. A world waiting to unfold.',
  lines: ['Flow Turner thought she understood her life.', 'Then something changed.'],
  body: 'What begins as an ordinary journey slowly becomes a trail of questions, discoveries and secrets. Every answer seems to reveal another mystery, forcing Flow to confront the boundaries between what is real and what should be impossible.',
  actions: [{ label: 'Read an Excerpt', variant: 'primary', modal: 'foreword' }],
  foreword: {
    title: 'Foreword',
    body: "Welcome to the world of Flow's Life and the magical halls of Stonewick Academy of the Unseen. This book was written with a simple hope: to encourage young readers everywhere to believe in themselves. Through the eyes of Flow Turner, you will experience adventure, teamwork, and the deep bond of friendship. You will also see that while life brings hardships, it is our choices—not our circumstances—that truly define who we are. No matter how difficult things may seem, remember that there is always hope, and always a chance to choose kindness, empathy, and integrity. May this story inspire you to dream big, stand courageous, and never lose faith in your own journey.",
    signature: ['Afsha Hossain', 'Queensland, Australia'],
    email: 'afshahossain13@gmail.com',
  },
}

export const footer = {
  contactLabel: 'Contact',
  email: 'afshahossain13@gmail.com',
  colophon: 'All Rights Reserved | Developed by Bitflex Australia',
  developer: { label: 'Bitflex Australia', href: '#' },
}

export const gallery = {
  // Reading photos for the marquee strip.
  photos: [
    'reading-01.jpg',
    'reading-02.jpg',
    'reading-03.jpg',
    'reading-04.jpg',
    'reading-05.jpg',
    'reading-06.jpg',
    'reading-07.jpg',
    'reading-08.jpg',
    'reading-09.jpg',
    'reading-10.jpg',
    'reading-11.jpg',
  ],
}
