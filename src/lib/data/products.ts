/**
 * HOUSE OF ATTITUDE - Product Data
 * Mock data for empowerment clothing brand
 */

export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  category: string;
  image: string;
  description: string;
  empowermentMessage: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  productCount: number;
}

// Product Categories
export const categories: Category[] = [
  {
    id: 'fierce-basics',
    name: 'Fierce Basics',
    slug: 'fierce-basics',
    description: 'Essential pieces that speak volumes before you even open your mouth',
    productCount: 12
  },
  {
    id: 'power-statements',
    name: 'Power Statements',
    slug: 'power-statements',
    description: 'Bold pieces for those who refuse to whisper',
    productCount: 8
  },
  {
    id: 'confidence-builders',
    name: 'Confidence Builders',
    slug: 'confidence-builders',
    description: 'Designed for those who lead, not follow',
    productCount: 10
  },
  {
    id: 'attitude-accessories',
    name: 'Attitude Accessories',
    slug: 'attitude-accessories',
    description: 'The finishing touches that complete your power look',
    productCount: 15
  }
];

// Featured Products (Homepage)
export const featuredProducts: Product[] = [
  {
    id: 'fearless-tee',
    name: 'The Fearless Tee',
    slug: 'fearless-tee',
    price: 45,
    category: 'fierce-basics',
    image: '/generated/fearless-tee.png',
    description: 'For the woman who refuses to whisper when she deserves to roar.',
    empowermentMessage: 'Wear your fearlessness like armor'
  },
  {
    id: 'unstoppable-hoodie',
    name: 'Unstoppable Hoodie',
    slug: 'unstoppable-hoodie',
    price: 75,
    category: 'power-statements',
    image: '/generated/unstoppable-hoodie.png',
    description: 'Electric pink power for those who make their own rules.',
    empowermentMessage: 'Nothing can hold you back'
  },
  {
    id: 'power-jacket',
    name: 'Power Statement Jacket',
    slug: 'power-jacket',
    price: 120,
    category: 'power-statements',
    image: '/generated/power-jacket.png',
    description: 'Leather and gold for those who own every room they enter.',
    empowermentMessage: 'Command respect effortlessly'
  },
  {
    id: 'confidence-crop',
    name: 'Confidence Crop',
    slug: 'confidence-crop',
    price: 35,
    category: 'confidence-builders',
    image: '/generated/confidence-crop.png',
    description: 'Own your power. Own your body. Own your story.',
    empowermentMessage: 'Strength looks good on you'
  },
  {
    id: 'bold-basics-set',
    name: 'Bold Basics Set',
    slug: 'bold-basics-set',
    price: 65,
    category: 'fierce-basics',
    image: '/generated/fierce-collection.png',
    description: 'The foundation of a wardrobe built on confidence.',
    empowermentMessage: 'Build your empire in style'
  },
  {
    id: 'attitude-collection',
    name: 'Attitude Collection',
    slug: 'attitude-collection',
    price: 25,
    category: 'attitude-accessories',
    image: '/generated/power-collection.png',
    description: 'Small details, massive impact. Complete your power look.',
    empowermentMessage: 'Details matter when making statements'
  }
];

// All Products (Shop Page)
export const allProducts: Product[] = [
  ...featuredProducts,
  // Fierce Basics
  {
    id: 'essential-black-tee',
    name: 'Essential Black Tee',
    slug: 'essential-black-tee',
    price: 40,
    category: 'fierce-basics',
    image: '/generated/fearless-tee.png',
    description: 'The foundation piece every fearless wardrobe needs.',
    empowermentMessage: 'Simplicity is power'
  },
  {
    id: 'statement-leggings',
    name: 'Statement Leggings',
    slug: 'statement-leggings',
    price: 55,
    category: 'fierce-basics',
    image: '/generated/fierce-collection.png',
    description: 'Move with purpose. Train with attitude.',
    empowermentMessage: 'Strength in motion'
  },
  {
    id: 'fierce-tank',
    name: 'Fierce Tank',
    slug: 'fierce-tank',
    price: 38,
    category: 'fierce-basics',
    image: '/generated/confidence-crop.png',
    description: 'Minimalist design, maximum confidence.',
    empowermentMessage: 'Less is more powerful'
  },
  // Power Statements
  {
    id: 'rebel-jacket',
    name: 'Rebel Leather Jacket',
    slug: 'rebel-jacket',
    price: 150,
    category: 'power-statements',
    image: '/generated/power-jacket.png',
    description: 'For those who write their own rules.',
    empowermentMessage: 'Rebellion never looked so good'
  },
  {
    id: 'boss-blazer',
    name: 'Boss Blazer',
    slug: 'boss-blazer',
    price: 130,
    category: 'power-statements',
    image: '/generated/power-jacket.png',
    description: 'Command the boardroom and the streets.',
    empowermentMessage: 'Born to lead'
  },
  // Confidence Builders
  {
    id: 'empowered-dress',
    name: 'Empowered Dress',
    slug: 'empowered-dress',
    price: 85,
    category: 'confidence-builders',
    image: '/generated/confidence-crop.png',
    description: 'Elegance meets attitude.',
    empowermentMessage: 'Grace with an edge'
  },
  {
    id: 'warrior-joggers',
    name: 'Warrior Joggers',
    slug: 'warrior-joggers',
    price: 65,
    category: 'confidence-builders',
    image: '/generated/fierce-collection.png',
    description: 'Comfort that doesn\'t compromise on confidence.',
    empowermentMessage: 'Warrior mindset, everyday style'
  }
];

// Hero Slogans (rotating)
export const heroSlogans = [
  'WEAR YOUR STRENGTH',
  'OWN YOUR STORY',
  'ATTITUDE IS EVERYTHING',
  'FEARLESS BY DESIGN',
  'POWER LOOKS GOOD ON YOU'
];

// Founder Story Content
export const founderStory = {
  title: 'FROM STRUGGLE TO STRENGTH',
  subtitle: 'The Journey Behind House of Attitude',
  image: '/generated/founder-story.png',
  story: `
    I didn't start this brand in a fancy design studio or with investor backing.
    I started it in my cramped apartment, sketching designs on the back of bills I couldn't pay,
    dreaming of something bigger than my circumstances.

    For years, I felt invisible. Society told me to be quieter, smaller, more polite.
    To blend in instead of stand out. But every time I put on something bold—something that made me
    feel powerful—I walked taller. I spoke louder. I took up space unapologetically.

    That's when I realized: clothing isn't just fabric. It's armor. It's a statement.
    It's the difference between surviving and thriving.

    House of Attitude was born from that realization. It's for everyone who's been told they're too much,
    too loud, too different. For those who've fought their way through adversity and refuse to go back to being small.

    This isn't just a clothing brand. It's a movement. A community. A reminder that you deserve to take up space,
    to be seen, to be heard, and to wear your power proudly.
  `,
  mission: {
    title: 'OUR MISSION',
    values: [
      {
        title: 'Authenticity Over Perfection',
        description: 'We celebrate real stories, real struggles, and real strength. No filters. No pretense.'
      },
      {
        title: 'Strength Over Conformity',
        description: 'We design for those who lead, not follow. For rebels, warriors, and trailblazers.'
      },
      {
        title: 'Community Over Competition',
        description: 'We lift each other up. Your success is our success. Together, we rise.'
      }
    ]
  },
  impact: {
    title: 'OUR IMPACT',
    stats: [
      { number: '10,000+', label: 'Empowered Individuals' },
      { number: '50+', label: 'Community Events' },
      { number: '$100K+', label: 'Given Back to Community' }
    ]
  }
};

// Newsletter
export const newsletterPromise = {
  title: 'GET THE ATTITUDE IN YOUR INBOX',
  benefits: [
    'Exclusive drops before anyone else',
    'Empowerment content that hits different',
    'Access to our private community',
    'Real stories from real people'
  ]
};

// Social Media Links
export const socialLinks = [
  { platform: 'Instagram', url: '#', handle: '@houseofattitude' },
  { platform: 'TikTok', url: '#', handle: '@houseofattitude' },
  { platform: 'Twitter', url: '#', handle: '@house_attitude' },
  { platform: 'Facebook', url: '#', handle: 'houseofaltitude' }
];

// Testimonials
export const testimonials = [
  {
    name: 'Maria R.',
    quote: 'I used to hide behind baggy clothes. Now I walk into rooms owning my space. This brand gave me my confidence back.',
    product: 'Power Statement Jacket'
  },
  {
    name: 'Taylor J.',
    quote: 'Finally, a brand that gets it. I don\'t want to blend in. I want to be SEEN. House of Attitude makes that possible.',
    product: 'Fearless Tee'
  },
  {
    name: 'Sophia K.',
    quote: 'More than clothing—it\'s a mindset shift. I stopped apologizing for taking up space.',
    product: 'Confidence Crop'
  }
];
