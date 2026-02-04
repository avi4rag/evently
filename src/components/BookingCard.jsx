const BookingCard = ({ name, date, time, status, image }) => {
  return (
    <div className="bg-card rounded-2xl p-5 shadow-sm flex justify-between items-start">
      <div className="flex flex-col">
        <h3 className="text-foreground font-semibold text-lg mb-1">{name}</h3>
        <p className="text-muted-foreground text-sm">{date}</p>
        <p className="text-muted-foreground text-sm mb-4">{time}</p>

        <div className="flex flex-col gap-2">
          <button
            className={`px-5 py-1.5 rounded-full text-sm font-medium ${
              status === "Confirmed"
                ? "bg-success text-success-foreground"
                : "bg-pending text-pending-foreground"
            }`}
          >
            {status}
          </button>
          <button className="px-5 py-1.5 bg-cancel text-cancel-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
            Cancel
          </button>
        </div>
      </div>

      <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default BookingCard;
