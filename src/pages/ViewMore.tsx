import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import EventCard from "@/components/EventCard";
import BottomNav from "@/components/BottomNav";
import { getEventsByCategory } from "@/data/events";

const ViewMore = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const categoryMap: Record<string, string> = {
    concerts: "Concerts",
    "free-events": "Free Events",
    workshops: "Workshops",
  };

  const categoryName = categoryMap[category || "concerts"] || "Concerts";
  const events = getEventsByCategory(categoryName);

  return (
    <div className="min-h-screen bg-background p-6 pb-28">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => navigate("/")}
            className="p-2 bg-card rounded-full hover:opacity-80 transition-opacity"
          >
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </button>
          <h1 className="text-3xl font-bold text-foreground">{categoryName}</h1>
        </div>

        <div className="grid grid-cols-3 gap-6">
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

        {events.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No events found in this category.
            </p>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
};

export default ViewMore;
