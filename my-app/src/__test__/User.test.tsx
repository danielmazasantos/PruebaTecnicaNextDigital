import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { vi, test, expect } from "vitest";
import Users from "../pages/Users";

test("renderiza listado de usuarios (mínimo)", async () => {
  vi.spyOn(globalThis, "fetch").mockResolvedValueOnce({
    ok: true,
    json: async () => [
      { id: 1, name: "Leanne Graham" },
      { id: 2, name: "Ervin Howell" },
    ],
  } as unknown as Response);

  render(
    <MemoryRouter>
      <Users />
    </MemoryRouter>
  );

  const leanne = await screen.findByText("Leanne Graham");
  const ervin = await screen.findByText("Ervin Howell");

  expect(leanne).toBeTruthy();
  expect(ervin).toBeTruthy();
});