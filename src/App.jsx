import React, { useState } from "react";
import { Routes, Route, Outlet, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Bookings from "./pages/Bookings";

const FILTERS = ["Concerts", "Free Events", "Workshops", "Current City"];

function Topbar({ active, setActive }) {
  return (
    <header className="flex flex-col gap-4">
      <div className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm">
        <button className="p-1" aria-hidden="true">
          <img
            src="/assets/icons/search.svg"
            alt="search icon"
            className="w-5 h-5 opacity-80"
          />
        </button>
        <input
          className="flex-1 text-base outline-none"
          type="search"
          placeholder="Search events, artists, venues..."
        />
      </div>

      <div className="flex gap-3">
        {FILTERS.map((f) => {
          const activeCls =
            active === f
              ? "bg-purple-600 text-white shadow-lg"
              : "bg-gray-200 text-gray-800";
          return (
            <button
              key={f}
              className={`px-4 py-2 rounded-lg ${activeCls}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          );
        })}
      </div>
    </header>
  );
}

function BottomNav() {
  return (
    <nav className="mt-10 bg-white/90 p-4 rounded-xl flex justify-around items-center">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `flex flex-col items-center text-sm ${isActive ? "text-gray-900" : "text-gray-500"}`
        }
        end
      >
        <img src="/assets/icons/home.svg" alt="Home" className="w-5 h-5 mb-1" />
        <span>Home</span>
      </NavLink>

      <NavLink
        to="/"
        className="flex flex-col items-center text-gray-500 text-sm"
      >
        <img
          src="/assets/icons/explore.svg"
          alt="Explore"
          className="w-5 h-5 mb-1"
        />
        <span>Explore</span>
      </NavLink>

      <NavLink
        to="/bookings"
        className={({ isActive }) =>
          `flex flex-col items-center text-sm ${isActive ? "text-gray-900" : "text-gray-500"}`
        }
      >
        <img
          src="/assets/icons/bookings.svg"
          alt="Bookings"
          className="w-5 h-5 mb-1"
        />
        <span>Bookings</span>
      </NavLink>

      <NavLink
        to="/"
        className="flex flex-col items-center text-gray-500 text-sm"
      >
        <img
          src="/assets/icons/profile.svg"
          alt="Profile"
          className="w-5 h-5 mb-1"
        />
        <span>Profile</span>
      </NavLink>
    </nav>
  );
}

function Layout() {
  const [active, setActive] = useState(FILTERS[0]);

  return (
    <div className="max-w-[1060px] mx-auto my-10 px-6">
      <Topbar active={active} setActive={setActive} />
      <Outlet />
      <BottomNav />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="bookings" element={<Bookings />} />
      </Route>
    </Routes>
  );
}
