import BookingCard from "@/components/BookingCard";
import BottomNav from "@/components/BottomNav";

import travisScott from "@/assets/travis-scott.jpg";
import charliePuth from "@/assets/charlie-puth.jpg";
import tyla from "@/assets/tyla.jpg";
import dojaCat from "@/assets/doja-cat.jpg";
import badfingers from "@/assets/badfingers.jpg";
import weeknd from "@/assets/weeknd.jpg";

const Bookings = () => {
  const bookings = [
    {
      id: 1,
      name: "Travis Scott",
      date: "Sat Dec 27th",
      time: "7:00 PM onwards",
      status: "Confirmed" as const,
      image: travisScott,
    },
    {
      id: 2,
      name: "Charlie Puth",
      date: "Sat Dec 30th",
      time: "7:00 PM onwards",
      status: "Pending" as const,
      image: charliePuth,
    },
    {
      id: 3,
      name: "Tyla",
      date: "Sat Dec 27th",
      time: "7:00 PM onwards",
      status: "Confirmed" as const,
      image: tyla,
    },
    {
      id: 4,
      name: "Doja Cat",
      date: "Sat Jan 27th",
      time: "7:00 PM onwards",
      status: "Pending" as const,
      image: dojaCat,
    },
    {
      id: 5,
      name: "BadFingers",
      date: "Sat June 27th",
      time: "7:00 PM onwards",
      status: "Pending" as const,
      image: badfingers,
    },
    {
      id: 6,
      name: "Weeknd",
      date: "Sat Dec 27th",
      time: "7:00 PM onwards",
      status: "Confirmed" as const,
      image: weeknd,
    },
  ];

  return (
    <div className="min-h-screen bg-background p-6 pb-28">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground text-center mb-10">
          My Bookings Page
        </h1>

        <div className="grid grid-cols-3 gap-6 mb-10">
          {bookings.map((booking) => (
            <BookingCard
              key={booking.id}
              name={booking.name}
              date={booking.date}
              time={booking.time}
              status={booking.status}
              image={booking.image}
            />
          ))}
        </div>

        <div className="text-center">
          <p className="text-cancel text-xl italic">
            Looking Forward to see you there!
          </p>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Bookings;
