import React from "react";
import { EVENTS } from "../data/events";

function Card({ item }) {
  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow flex flex-col">
      <img
        className="w-full h-44 object-cover bg-gray-100"
        src={item.img}
        alt={item.title}
      />
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
        <p
          className="text-sm text-gray-400 mb-4"
          dangerouslySetInnerHTML={{
            __html: item.meta.replace(/\n/g, "<br/>"),
          }}
        />
        <button
          className="mt-auto self-end bg-black text-white px-4 py-2 rounded-full"
          onClick={() => alert("Book action — replace with your booking flow.")}
        >
          Book
        </button>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main>
      <section className="grid grid-cols-3 gap-7 mt-8">
        {EVENTS.map((ev) => (
          <Card key={ev.id} item={ev} />
        ))}
      </section>
    </main>
  );
}
