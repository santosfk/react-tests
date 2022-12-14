import { render } from "@testing-library/react-native";
import Button from "../components/Button";
import Home from '../Home'
describe("star rating component", () => {
  describe("show icon", () => {
    it("show the home icon", () => {
      const { getByTestId } = render(<Button>Botao</Button>);
      expect(getByTestId("description")).toBeTruthy();
    });
  });
  it("renderer button component", () => {
    const { debug, getByText } = render(<Button>Botao</Button>);
    expect(getByText("Botao")).toBeTruthy();
  });
});
