import djNight from "@/assets/dj-night.jpg";
import travisScott from "@/assets/travis-scott.jpg";
import charliePuth from "@/assets/charlie-puth.jpg";
import tyla from "@/assets/tyla.jpg";
import dojaCat from "@/assets/doja-cat.jpg";
import badfingers from "@/assets/badfingers.jpg";
import weeknd from "@/assets/weeknd.jpg";

export interface Event {
  id: number;
  image: string;
  title: string;
  date: string;
  time: string;
  category: "Concerts" | "Free Events" | "Workshops";
  description?: string;
  venue?: string;
  price?: string;
}

export const allEvents: Event[] = [
  {
    id: 1,
    image: djNight,
    title: "DJ Night with DJO",
    date: "Fri Dec 16th",
    time: "6:00 PM onwards",
    category: "Concerts",
    description: "Experience an electrifying night of music with the renowned DJ DJO. Get ready for an unforgettable evening filled with amazing beats and incredible energy.",
    venue: "The Grand Arena, Downtown",
    price: "$45",
  },
  {
    id: 2,
    image: travisScott,
    title: "Travis Scott HomeComing",
    date: "Sat Dec 27th",
    time: "7:00 PM onwards",
    category: "Concerts",
    description: "Travis Scott returns for an epic homecoming concert. Don't miss this legendary performance featuring his biggest hits and surprise guests.",
    venue: "City Stadium",
    price: "$120",
  },
  {
    id: 3,
    image: charliePuth,
    title: "Charlie Puth Concert",
    date: "Sun Jan 27th",
    time: "7:00 PM onwards",
    category: "Concerts",
    description: "Charlie Puth brings his incredible vocal talents and hit songs to the stage. An intimate evening of pop music at its finest.",
    venue: "Music Hall",
    price: "$85",
  },
  {
    id: 4,
    image: tyla,
    title: "Tyla Live Performance",
    date: "Sat Dec 27th",
    time: "7:00 PM onwards",
    category: "Concerts",
    description: "Experience the sensation that is Tyla live in concert. An evening of incredible music and unforgettable moments.",
    venue: "The Dome",
    price: "$75",
  },
  {
    id: 5,
    image: dojaCat,
    title: "Doja Cat World Tour",
    date: "Sat Jan 27th",
    time: "7:00 PM onwards",
    category: "Concerts",
    description: "Doja Cat brings her world tour to town with all her chart-topping hits and spectacular stage production.",
    venue: "Arena Central",
    price: "$110",
  },
  {
    id: 6,
    image: badfingers,
    title: "BadFingers Rock Night",
    date: "Sat June 27th",
    time: "7:00 PM onwards",
    category: "Concerts",
    description: "Get ready to rock with BadFingers! A night of classic rock and roll that will have you on your feet all night.",
    venue: "Rock Venue",
    price: "$55",
  },
  {
    id: 7,
    image: weeknd,
    title: "The Weeknd After Hours",
    date: "Sat Dec 27th",
    time: "9:00 PM onwards",
    category: "Concerts",
    description: "The Weeknd presents his After Hours tour. Experience his iconic sound and mesmerizing stage presence.",
    venue: "Grand Stadium",
    price: "$150",
  },
  {
    id: 8,
    image: djNight,
    title: "Open Mic Night",
    date: "Fri Jan 10th",
    time: "6:00 PM onwards",
    category: "Free Events",
    description: "Show off your talents at our weekly open mic night. All genres welcome, all skill levels encouraged.",
    venue: "Community Center",
    price: "Free",
  },
  {
    id: 9,
    image: travisScott,
    title: "Hip Hop Workshop",
    date: "Sat Jan 15th",
    time: "2:00 PM onwards",
    category: "Workshops",
    description: "Learn the fundamentals of hip hop production and performance from industry professionals.",
    venue: "Music Academy",
    price: "$35",
  },
  {
    id: 10,
    image: charliePuth,
    title: "Songwriting Masterclass",
    date: "Sun Jan 20th",
    time: "3:00 PM onwards",
    category: "Workshops",
    description: "Master the art of songwriting with tips and techniques from seasoned professionals.",
    venue: "Creative Studio",
    price: "$50",
  },
];

export const getEventsByCategory = (category: string): Event[] => {
  return allEvents.filter((event) => event.category === category);
};

export const getEventById = (id: number): Event | undefined => {
  return allEvents.find((event) => event.id === id);
};
