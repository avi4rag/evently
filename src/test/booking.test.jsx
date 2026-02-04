import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import EventDetails from "@/pages/EventDetails";
import Bookings from "@/pages/Bookings";

describe("Booking flow", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("stores the correct event booking (by id) when Book Now is clicked", async () => {
    render(
      <MemoryRouter initialEntries={["/event/3"]}>
        <Routes>
          <Route path="/event/:id" element={<EventDetails />} />
        </Routes>
      </MemoryRouter>,
    );

    const bookBtn = await screen.findByText(/Book Now/i);
    fireEvent.click(bookBtn);

    await waitFor(() => {
      const items = JSON.parse(localStorage.getItem("bookings") || "[]");
      expect(items).toHaveLength(1);
      expect(items[0].id).toBe(3);
      expect(items[0].name).toContain("Charlie Puth");
      expect(items[0].status).toBe("Confirmed");
    });
  });

  it("renders bookings from localStorage on the Bookings page", async () => {
    const booking = {
      id: 500,
      name: "Test Event",
      date: "Some Date",
      time: "Some Time",
      status: "Confirmed",
      image: "",
    };

    localStorage.setItem("bookings", JSON.stringify([booking]));

    render(
      <MemoryRouter>
        <Bookings />
      </MemoryRouter>,
    );

    // BookingCard renders the booking name in the card
    expect(await screen.findByText("Test Event")).toBeInTheDocument();
  });

  it("does not duplicate booking when booking the same event twice (replaces existing)", async () => {
    // First booking
    render(
      <MemoryRouter initialEntries={["/event/2"]}>
        <Routes>
          <Route path="/event/:id" element={<EventDetails />} />
        </Routes>
      </MemoryRouter>,
    );

    const bookBtn = await screen.findByText(/Book Now/i);
    fireEvent.click(bookBtn);

    await waitFor(() => {
      const items = JSON.parse(localStorage.getItem("bookings") || "[]");
      expect(items).toHaveLength(1);
      expect(items[0].id).toBe(2);
    });

    // Book same event again
    render(
      <MemoryRouter initialEntries={["/event/2"]}>
        <Routes>
          <Route path="/event/:id" element={<EventDetails />} />
        </Routes>
      </MemoryRouter>,
    );

    const bookBtn2 = await screen.findByText(/Book Now/i);
    fireEvent.click(bookBtn2);

    await waitFor(() => {
      const items = JSON.parse(localStorage.getItem("bookings") || "[]");
      expect(items).toHaveLength(1);
      expect(items[0].id).toBe(2);
    });
  });
});
