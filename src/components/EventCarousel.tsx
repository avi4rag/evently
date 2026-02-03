import { useRef } from "react";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import EventCard from "./EventCard";
import { Event } from "@/data/events";

interface EventCarouselProps {
  events: Event[];
  category: string;
}

const EventCarousel = ({ events, category }: EventCarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate(`/events/${category.toLowerCase().replace(" ", "-")}`);
  };

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-foreground">{category}</h2>
        <button
          onClick={handleViewMore}
          className="flex items-center gap-1 text-primary text-sm font-medium hover:opacity-80 transition-opacity"
        >
          View More
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
      
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {events.map((event) => (
          <EventCard
            key={event.id}
            id={event.id}
            image={event.image}
            title={event.title}
            date={event.date}
            time={event.time}
          />
        ))}
      </div>
    </div>
  );
};

export default EventCarousel;
