import { useEffect, useState } from "react";
import BookingCard from "@/components/BookingCard";
import BottomNav from "@/components/BottomNav";

import travisScott from "@/assets/travis-scott.png";
import charliePuth from "@/assets/charlie-puth.png";
import tyla from "@/assets/tyla.png";
import dojaCat from "@/assets/doja-cat.png";
import badfingers from "@/assets/badfingers.png";
import weeknd from "@/assets/weeknd.png";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    try {
      const items = JSON.parse(localStorage.getItem("bookings") || "[]");
      setBookings(items);
    } catch (e) {
      setBookings([]);
    }
  }, []);

  return (
    <div className="w-[100vw] min-h-[100vh] bg-background p-6 pb-28">
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

      <BottomNav />
    </div>
  );
};

export default Bookings;
