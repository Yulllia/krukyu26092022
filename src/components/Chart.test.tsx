import { render, screen, fireEvent} from "@testing-library/react";
import Chart from "./Chart";

describe("Chart testing", () => {    
  test("should be able to change value wirh random number", async() => {
    render(
        <Chart />
    );
    const button = screen.getByTestId("landing");
    fireEvent.click(button);
    const landingNumber = screen.getByTestId("landingNumber");
    expect(landingNumber.textContent).toBeGreaterThan(0)
    expect(landingNumber.textContent).toBeLessThan(11)
  });
});