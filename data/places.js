import { Place } from "../modal/place-modal";

export const places = [
  new Place(
    Math.random().toString() + new Date().getTime().toString(),
    "Myanmar's last Palace",
    "Mandalay, Myanmar(Burma)",
    { lat: 21.983056, lng: 96.084444 },
    "https://images.unsplash.com/photo-1590498418987-aa4e1e0d2b94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
  ),
];
