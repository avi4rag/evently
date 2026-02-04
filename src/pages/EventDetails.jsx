import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, Clock, Calendar, Ticket } from "lucide-react";
import BottomNav from "@/components/BottomNav";
import { getEventById } from "@/data/events";
import { toast } from "@/hooks/use-toast";

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const event = getEventById(Number(id));

  if (!event) {
    return (
      <div className="min-h-screen bg-background p-6 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Event Not Found
          </h1>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-2 bg-primary text-primary-foreground rounded-full"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  const handleBookNow = () => {
    // Persist the booking tied to the unique event id to localStorage
    const booking = {
      id: event.id,
      name: event.title,
      date: event.date,
      time: event.time,
      status: "Confirmed",
      image: event.image,
    };

    try {
      const existing = JSON.parse(localStorage.getItem("bookings") || "[]");
      // Replace or append booking for the unique event id
      const updated = existing
        .filter((b) => b.id !== booking.id)
        .concat(booking);
      localStorage.setItem("bookings", JSON.stringify(updated));
    } catch (e) {
      // Fallback: overwrite if parsing fails
      localStorage.setItem("bookings", JSON.stringify([booking]));
    }

    toast({
      title: "Booking Confirmed!",
      description: `You have successfully booked ${event.title}. Check your bookings for details.`,
    });

    navigate("/bookings");
  };

  return (
    <div className="min-h-screen bg-background pb-28">
      {/* Header Image */}
      <div className="relative">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-72 object-cover"
        />
        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 p-2 bg-card rounded-full shadow-lg hover:opacity-80 transition-opacity"
        >
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 -mt-10 relative">
        <div className="bg-card rounded-2xl p-6 shadow-lg">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            {event.title}
          </h1>

          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Calendar className="w-5 h-5" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Clock className="w-5 h-5" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="w-5 h-5" />
              <span>{event.venue}</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Ticket className="w-5 h-5" />
              <span>{event.price}</span>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-semibold text-foreground mb-2">
              About This Event
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {event.description}
            </p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={handleBookNow}
              className="flex-1 py-3 bg-foreground text-card rounded-full text-base font-medium hover:opacity-90 transition-opacity"
            >
              Book Now
            </button>
            <button
              onClick={() => navigate("/")}
              className="px-6 py-3 bg-secondary text-secondary-foreground rounded-full text-base font-medium hover:opacity-80 transition-opacity"
            >
              Back to Events
            </button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-card rounded-2xl p-6 shadow-lg mt-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            Event Details
          </h2>

          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-border">
              <span className="text-muted-foreground">Category</span>
              <span className="text-foreground font-medium">
                {event.category}
              </span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-border">
              <span className="text-muted-foreground">Venue</span>
              <span className="text-foreground font-medium">{event.venue}</span>
            </div>
            <div className="flex justify-between items-center py-3">
              <span className="text-muted-foreground">Price</span>
              <span className="text-foreground font-medium">{event.price}</span>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default EventDetails;
