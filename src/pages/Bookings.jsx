import React, { useState, useEffect } from "react";
import BookingModal from "../components/BookingModal";

function Badge({ status }) {
  const classes =
    status === "Confirmed"
      ? "bg-purple-100 text-purple-800"
      : "bg-gray-200 text-gray-700";
  return (
    <span className={`px-3 py-1 rounded-full text-sm ${classes}`}>
      {status}
    </span>
  );
}

export default function Bookings() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5174/api/bookings")
      .then((r) => r.json())
      .then((data) => setList(data))
      .catch(() => setList([]))
      .finally(() => setLoading(false));
  }, []);

  function cancel(id) {
    // optimistic UI update
    setList((cur) => cur.filter((b) => b.id !== id));
    if (selected && selected.id === id) setSelected(null);

    fetch(`http://localhost:5174/api/bookings/${id}`, {
      method: "DELETE",
    }).catch(() => {
      // on error, refetch
      fetch("http://localhost:5174/api/bookings")
        .then((r) => r.json())
        .then((d) => setList(d));
    });
  }

  if (loading) return <p className="text-center mt-16">Loading bookings…</p>;

  return (
    <main className="mt-8">
      <h1 className="text-3xl text-center font-semibold">My Bookings Page</h1>

      <section className="grid grid-cols-3 gap-7 mt-10">
        {list.map((b) => (
          <div
            key={b.id}
            className="bg-white rounded-2xl p-5 flex items-center justify-between shadow"
          >
            <div className="flex-1 pr-4">
              <h3 className="font-semibold text-lg">{b.title}</h3>
              <p className="text-sm text-gray-400 mt-2">
                {b.date}
                <br />
                {b.time}
              </p>
              <div className="mt-4 flex gap-3 items-center">
                <Badge status={b.status} />
                <button
                  onClick={() => cancel(b.id)}
                  className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setSelected(b)}
                  className="bg-white border border-gray-200 px-3 py-1 rounded-md"
                >
                  Details
                </button>
              </div>
            </div>

            <img
              src={b.img}
              alt={b.title}
              className="w-24 h-24 object-cover rounded-lg ml-4"
            />
          </div>
        ))}
      </section>

      <div className="mt-12 flex justify-center">
        <div className="bg-white/60 px-6 py-3 rounded-full text-pink-500 italic">
          Looking Forward to see you there!
        </div>
      </div>

      <BookingModal
        booking={selected}
        onClose={() => setSelected(null)}
        onCancel={cancel}
      />
    </main>
  );
}
