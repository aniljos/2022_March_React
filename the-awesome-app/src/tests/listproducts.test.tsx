import ListProducts from "../components/products/ListProducts";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import axios from 'axios';

jest.mock('axios');
jest.spyOn(window, "alert").mockImplementation(() => {});

const mockedAxios = axios as jest.Mocked<typeof axios>;

beforeEach(() => {
    mockedAxios.get.mockResolvedValueOnce(
        {data: [
                {id: 1, name: "p1", description: "d1", price: 100}, 
                {id: 2, name: "p2", description: "d2", price: 200}, 
                {id: 3, name: "p3", description: "d3", price: 300}]})

    render(<Provider store={store}> <ListProducts/> </Provider>);
})

test("ListProducts is mounted", () => {
    // render(<Provider store={store}> <ListProducts/> </Provider>);
    expect(screen.getByText("List Products")).toBeTruthy();
})

test("ListProducts is renders the products", async () => {

    
    
    await waitFor(() => screen.getAllByTestId("product"));

    const productElements = screen.getAllByTestId("product");
    expect(productElements.length).toBe(3)
})

test("ListProducts to delete the product", async () => {

    mockedAxios.delete.mockResolvedValueOnce({state: 200});

    expect(axios.get).toBeCalledTimes(1);
    
    await waitFor(() => screen.getAllByTestId("product"));
    const allDeleteBtns = screen.getAllByText("Delete");
    fireEvent.click(allDeleteBtns[0]);

    await waitFor(() => screen.getAllByTestId("product"));
    const productElements = screen.getAllByTestId("product");
    expect(productElements.length).toBe(2)
    screen.debug();


   
})