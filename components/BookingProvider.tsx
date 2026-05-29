"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { BookingDialog } from "./BookingDialog";

interface Ctx {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const BookingContext = createContext<Ctx>({
  isOpen: false,
  open: () => {},
  close: () => {},
});

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BookingContext.Provider
      value={{
        isOpen,
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
      }}
    >
      {children}
      <BookingDialog isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </BookingContext.Provider>
  );
}

export function useBookingDialog() {
  return useContext(BookingContext);
}
