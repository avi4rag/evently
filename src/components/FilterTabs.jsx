const FilterTabs = ({ activeFilter, onFilterChange }) => {
  const filters = ["Concerts", "Free Events", "Workshops"];

  return (
    <div className="flex items-center gap-3 mb-6">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
            activeFilter === filter
              ? "bg-primary text-primary-foreground"
              : "bg-card text-foreground hover:bg-secondary"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;
