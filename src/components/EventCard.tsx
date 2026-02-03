import { useNavigate } from "react-router-dom";

interface EventCardProps {
  image: string;
  title: string;
  date: string;
  time: string;
}

const EventCard = ({ image, title, date, time }: EventCardProps) => {
  const navigate = useNavigate();

  const handleBook = () => {
    navigate("/bookings");
  };

  return (
    <div className="bg-card rounded-2xl p-4 shadow-sm">
      <div className="mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover rounded-xl"
        />
      </div>
      <h3 className="text-foreground font-semibold text-base mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{date}</p>
      <p className="text-muted-foreground text-sm mb-4">{time}</p>
      <button
        onClick={handleBook}
        className="w-28 py-2 bg-foreground text-card rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
      >
        Book
      </button>
    </div>
  );
};

export default EventCard;
