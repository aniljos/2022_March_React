import Counter from '../components/TypedCounter';
import {render, screen, fireEvent} from '@testing-library/react';


test("Counter is mounted", () => {

    render(<Counter title="Hello"/>);
    expect(screen.getByText("Title: Hello")).toBeTruthy();
    expect(screen.getByText("Count : 5")).toBeTruthy();
})

test("Counter to be incremented", () => {

    render(<Counter title="Hello"/>);
    fireEvent.click(screen.getByText("Inc"));
    expect(screen.getByText("Count : 6")).toBeTruthy();
    
})

test("Counter to be changed on input change", () => {

    render(<Counter title="Hello"/>);
   fireEvent.change(screen.getByPlaceholderText("Enter the count"), {target: {value: 100}});
   expect(screen.getByText("Count : 100")).toBeTruthy();
    
})