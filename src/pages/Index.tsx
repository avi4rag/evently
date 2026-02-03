import { useState } from "react";
import Header from "@/components/Header";
import FilterTabs from "@/components/FilterTabs";
import EventCard from "@/components/EventCard";
import BottomNav from "@/components/BottomNav";

import djNight from "@/assets/dj-night.jpg";
import travisScott from "@/assets/travis-scott.jpg";
import charliePuth from "@/assets/charlie-puth.jpg";

const Index = () => {
  const [activeTab, setActiveTab] = useState("Concerts");
  const [activeFilter, setActiveFilter] = useState("Concerts");

  const events = [
    {
      id: 1,
      image: djNight,
      title: "DJ Night with DJO",
      date: "Fri Dec 16th",
      time: "6:00 PM onwards",
    },
    {
      id: 2,
      image: travisScott,
      title: "Travis Scott HomeComing",
      date: "Sat Dec 27th",
      time: "7:00 PM onwards",
    },
    {
      id: 3,
      image: charliePuth,
      title: "Charlie Puth Concert",
      date: "Sun Jan 27th",
      time: "7:00 PM onwards",
    },
  ];

  return (
    <div className="min-h-screen bg-background p-6 pb-28">
      <div className="max-w-5xl mx-auto">
        <Header activeTab={activeTab} onTabChange={setActiveTab} />
        <FilterTabs activeFilter={activeFilter} onFilterChange={setActiveFilter} />
        
        <div className="grid grid-cols-3 gap-6">
          {events.map((event) => (
            <EventCard
              key={event.id}
              image={event.image}
              title={event.title}
              date={event.date}
              time={event.time}
            />
          ))}
        </div>
      </div>
      
      <BottomNav />
    </div>
  );
};

export default Index;
