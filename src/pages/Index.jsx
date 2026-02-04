import { useState } from "react";
import Header from "@/components/Header";
import FilterTabs from "@/components/FilterTabs";
import EventCarousel from "@/components/EventCarousel";
import BottomNav from "@/components/BottomNav";
import { getEventsByCategory } from "@/data/events";

const Index = () => {
  const [activeTab, setActiveTab] = useState("Concerts");
  const [activeFilter, setActiveFilter] = useState("Concerts");

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setActiveTab(filter);
  };

  const filteredEvents = getEventsByCategory(activeFilter);

  return (
    <div className="w-[100vw] min-h-[100vh] bg-background p-6 pb-28">
      <Header activeTab={activeTab} onTabChange={handleFilterChange} />
      <FilterTabs
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
      />

      <EventCarousel events={filteredEvents} category={activeFilter} />

      <BottomNav />
    </div>
  );
};

export default Index;
