import { render } from "@testing-library/react-native";
import Button from "../components/Button";
import Home from '../Home'
import TextsArray from '../components/TextsArray'
describe("Button", () => {
  it("renderer button component", () => {
    const { debug, getByText } = render(<Button>Botao</Button>);
    expect(getByText("Botao")).toBeTruthy();
  });
});
describe("show icon", () => {
  it("show the home icon", () => {
    const { getByTestId } = render(<Button>Botao</Button>);
    expect(getByTestId("description")).toBeTruthy();
  });
});
describe('textArray',()=>{
  it('have text prop',()=>{
const {getAllByText} = render(<TextsArray texts={['1','2','3']}/>)
expect(getAllByText('Texto',{exact:false}).length).toBe(3)
  })
})