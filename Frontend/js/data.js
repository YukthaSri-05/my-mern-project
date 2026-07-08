/* ============ DATA (in-memory demo state) ============ */

const colors = ["#C9600E", "#0F4C4F", "#6B1E1E", "#8a5a12"];

let temples = [
  {
    id: "t1",
    name: "Tirumala Venkateswara",
    image: "images/tirumala.jpg",
    accent: colors[0],
    open: "09:32 AM",
    close: "09:32 PM",
    location: "TTD Administrative Building, K.T. Road, Tirupati, 517501, Andhra Pradesh, India.",
    description: "Tirumala is a spiritual town in Tirupati district of the Indian state of Andhra Pradesh. It is one of the suburbs of the Tirupati urban agglomeration, part of the Tirupati Urban Development Authority.",
    organizer: "Tirumala"
  },
  {
    id: "t2",
    name: "Shirdi Sai Baba Temple",
    image: "images/shirdi.jpg",
    accent: colors[1],
    open: "07:00 AM",
    close: "08:00 PM",
    location: "QF8G+J6Q, Mauli Nagar, Shirdi, Maharashtra 423109",
    description: "The main attraction of Shirdi is the Sai Baba Samadhi Mandir, situated in the heart of the town. Sai Baba's body has been laid to eternal rest here since 1918, built by a devoted millionaire from Nagpur.",
    organizer: "Shirdi Sai"
  },
  {
    id: "t3",
    name: "Kasi Vishwanath Temple",
    image: "images/kashi.jpg",
    accent: colors[2],
    open: "06:00 AM",
    close: "06:00 PM",
    location: "Lahori Tola, Varanasi, Domari, Uttar Pradesh 221001",
    description: "Kasi Vishwanath Temple is a Hindu temple dedicated to Shiva, located in Vishwanath Gali, Varanasi. It is a major pilgrimage site and one of the twelve Jyotirlinga shrines.",
    organizer: "Kasi Vishwanath"
  }
];

let darshans = [
  {
    id: "d1",
    templeId: "t1",
    name: "Seeghra Darshanam",
    open: "08:00 AM",
    close: "06:00 PM",
    normal: 200,
    vip: 400,
    description: "The Special Entry Darshan (Seeghra Darshanam), introduced on 01-Jan-2024, provides quicker darshan access to pilgrims willing to pay a premium fee."
  },
  {
    id: "d2",
    templeId: "t1",
    name: "Sarva Darshan",
    open: "09:00 AM",
    close: "04:00 PM",
    normal: 50,
    vip: 200,
    description: "This is a general darshan in which devotees can have a glimpse of the Lord's deity as part of the regular queue line."
  },
  {
    id: "d3",
    templeId: "t1",
    name: "Divya Darshan",
    open: "10:00 AM",
    close: "04:00 PM",
    normal: 0,
    vip: null,
    description: "Divya Darshan is specially arranged for pilgrims who arrive on foot as part of their devotional pada yatra."
  },
  {
    id: "d4",
    templeId: "t2",
    name: "Kakad Aarti Darshan",
    open: "05:00 AM",
    close: "06:00 AM",
    normal: 100,
    vip: 300,
    description: "The first aarti of the day performed before sunrise, offering a serene and quiet darshan experience."
  },
  {
    id: "d5",
    templeId: "t2",
    name: "General Darshan",
    open: "07:30 AM",
    close: "07:30 PM",
    normal: 0,
    vip: 150,
    description: "Standard queue darshan for all devotees visiting the Samadhi Mandir throughout the day."
  },
  {
    id: "d6",
    templeId: "t3",
    name: "Rudrabhishek",
    open: "06:00 AM",
    close: "06:00 PM",
    normal: 249,
    vip: 501,
    description: "A sacred abhishek ritual performed with Vedic chanting, offered for the wellbeing of the devotee's family."
  },
  {
    id: "d7",
    templeId: "t3",
    name: "Sugam Darshan",
    open: "06:00 AM",
    close: "11:00 PM",
    normal: 300,
    vip: null,
    description: "A faster paid-entry darshan line for devotees who wish to avoid long queues at the sanctum."
  }
];

let organizers = [
  { id: "o1", name: "Tirumala", email: "tirumala@gmail.com", templeId: "t1" },
  { id: "o2", name: "Shirdi Sai", email: "shirdi@gmail.com", templeId: "t2" },
  { id: "o3", name: "Kasi Vishwanath", email: "vishwanath@gmail.com", templeId: "t3" }
];

let users = [
  { id: "u1", name: "Shivam", email: "shivam@gmail.com" }
];

let bookings = [
  {
    id: "659da4b124",
    templeImage: "images/kashi.jpg",
darshanName: "Rudrabhishek",
    date: "10/1/2024",
    timing: "06:00 AM – 06:00 PM",
    qty: 1,
    price: 249,
    userName: "Shivam",
    accent: colors[2]
  }
];

/* ============ APP STATE ============ */

let state = {
  role: "guest",
  templeDetailId: null,
  orgTempleId: null,
  view: "home"
};

/* Global registry that each page file adds its renderer into */

const renderers = {};