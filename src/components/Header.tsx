import { Search, MapPin } from "lucide-react";

interface HeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Header = ({ activeTab, onTabChange }: HeaderProps) => {
  const tabs = ["Concerts", "Free Events", "Workshops"];

  return (
    <div className="bg-card rounded-2xl p-4 mb-6">
      <div className="flex items-center gap-4">
        {/* Search Bar */}
        <div className="flex-1 relative">
          <div className="flex items-center bg-card border border-border rounded-full px-4 py-3">
            <Search className="w-5 h-5 text-muted-foreground mr-3" />
            <input
              type="text"
              placeholder=""
              className="bg-transparent outline-none w-full text-foreground"
            />
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => onTabChange(tab)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === tab
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-secondary"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Current City */}
        <button className="flex items-center gap-2 px-4 py-2 text-foreground">
          <MapPin className="w-5 h-5" />
          <span className="text-sm font-medium">Current City</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
