import React from "react";

export default function BookingModal({ booking, onClose, onCancel }) {
  if (!booking) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-2xl p-6 max-w-md w-full">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-semibold">{booking.title}</h2>
            <p className="text-sm text-gray-500 mt-2">
              {booking.date}
              <br />
              {booking.time}
            </p>
          </div>
          <img
            src={booking.img}
            alt={booking.title}
            className="w-20 h-20 object-cover rounded-lg"
          />
        </div>

        <div className="mt-4 flex gap-3 items-center">
          <span
            className={`px-3 py-1 rounded-full text-sm ${booking.status === "Confirmed" ? "bg-purple-100 text-purple-800" : "bg-gray-200 text-gray-700"}`}
          >
            {booking.status}
          </span>
          <button
            className="ml-auto bg-gray-200 text-gray-700 px-3 py-1 rounded-md"
            onClick={() => onCancel(booking.id)}
          >
            Cancel
          </button>
        </div>

        <div className="mt-6 text-right">
          <button
            className="px-4 py-2 rounded-md bg-gray-100"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
