interface EventImage {
  src: string
  alt: string
}

interface Events {
  image: EventImage
  title: string
  date: string
  time: string
  location: string
  description: string
}

const events: Events[] = [
  {
    image: {
      src: '/coord-community/im1.png',
      alt: 'Hands working on embroidery',
    },
    title: 'Handmade Creations: A Community Craft Fair And Workshop',
    date: 'June 9, 2025',
    time: '10:00 AM - 4:00 PM',
    location: 'Central Park Community Hall, New York, NY',
    description:
      'A vibrant in-person event featuring live craft-making stations, artisan booths, DIY workshops, and a showcase of handmade creations.',
  },
  {
    image: {
      src: '/coord-community/im1.png',
      alt: 'Artisan craft fair',
    },
    title: 'Artisan Market: Celebrating Local Craftsmanship',
    date: 'July 15, 2025',
    time: '11:00 AM - 6:00 PM',
    location: 'Brooklyn Arts Center, New York, NY',
    description:
      'Discover unique handcrafted items from over 50 local artisans, with live demonstrations and opportunities to learn traditional craft techniques.',
  },
  {
    image: {
      src: '/coord-community/im1.png',
      alt: 'DIY craft workshop',
    },
    title: 'Pottery Masterclass: From Clay to Creation',
    date: 'August 22, 2025',
    time: '1:00 PM - 5:00 PM',
    location: 'Clayworks Studio, New York, NY',
    description:
      'An immersive pottery workshop for all skill levels. Learn wheel throwing, hand-building techniques, and glazing from master ceramicists.',
  },
  {
    image: {
      src: '/coord-community/im1.png',
      alt: 'Handmade textile creations',
    },
    title: 'Textile Arts Exhibition: Threads of Innovation',
    date: 'September 5, 2025',
    time: '9:00 AM - 3:00 PM',
    location: 'Fiber Arts Gallery, New York, NY',
    description:
      'Explore contemporary textile art that pushes boundaries, featuring quilting, weaving, embroidery, and mixed media fiber installations from emerging artists.',
  },
]

export default events
