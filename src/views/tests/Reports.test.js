import React from "react";
import { AppProviders, render, cleanup } from "../../utils/testUtils";
import { Reports } from "../Reports";

afterEach(cleanup);

test("Reports View", () => {
  const { getByText } = render(
    <AppProviders>
      <Reports />
    </AppProviders>
  );
  expect(getByText(/Mapathon Reports/i)).toBeInTheDocument();
  expect(getByText(/Mapathon Reports/i).closest("a").href).toContain(
    "/mapathon-report/summary"
  );
  expect(
    getByText(/Get to know the impact created through a mapathon in real-time/i)
  ).toBeInTheDocument();
  expect(getByText(/User Reports/i)).toBeInTheDocument();
  expect(getByText(/User Reports/i).closest("a").href).toContain(
    "/user-report"
  );
  expect(
    getByText(/Know how specific mappers have contributed to OSM/i)
  ).toBeInTheDocument();
  expect(getByText("Organisation Reports (TBD)")).toBeInTheDocument();
  expect(getByText("Organisation Reports (TBD)").closest("a").href).toContain(
    "/organisation-report"
  );
  expect(getByText("Organisation Report")).toBeInTheDocument();
  expect(getByText("Country Reports (TBD)")).toBeInTheDocument();
  expect(getByText("Country Reports (TBD)").closest("a").href).toContain(
    "/country-report"
  );
  expect(
    getByText(
      /Learn about the growth of OSM features in a country from the beginning of time on a monthly basis/i
    )
  ).toBeInTheDocument();
});
