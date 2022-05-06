function process(a: number, b: number) : number|null{

    if(a === 0){
        return null;
    }
    return a + b;
}

describe("Demo test", () => {

    it("should return a number for correct inputs", () => {

        const result = process(3, 9);
        expect(result).toBe(12);

    })

    test("should return null for incorrect inputs", () => {

        const result = process(0, 9);
        expect(result).toBeNull();
        
    })

})



export {}