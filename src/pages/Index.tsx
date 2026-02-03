import { useState } from "react";
import Header from "@/components/Header";
import FilterTabs from "@/components/FilterTabs";
import EventCarousel from "@/components/EventCarousel";
import BottomNav from "@/components/BottomNav";
import { getEventsByCategory } from "@/data/events";

const Index = () => {
  const [activeTab, setActiveTab] = useState("Concerts");
  const [activeFilter, setActiveFilter] = useState("Concerts");

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setActiveTab(filter);
  };

  const filteredEvents = getEventsByCategory(activeFilter);

  return (
    <div className="min-h-screen bg-background p-6 pb-28">
      <div className="max-w-5xl mx-auto">
        <Header activeTab={activeTab} onTabChange={handleFilterChange} />
        <FilterTabs activeFilter={activeFilter} onFilterChange={handleFilterChange} />
        
        <EventCarousel events={filteredEvents} category={activeFilter} />
      </div>
      
      <BottomNav />
    </div>
  );
};

export default Index;
