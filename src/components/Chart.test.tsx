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
    const number = Number(landingNumber.textContent);
    expect(number).toBeGreaterThan(0)
    expect(number).toBeLessThan(11)
  });
});