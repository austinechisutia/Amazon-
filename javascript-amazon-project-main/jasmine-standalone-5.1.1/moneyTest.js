import { formatMoney } from "../script/money.js";

describe("formatMoney", ()=>{
  it("formats money", ()=>{
    expect(formatMoney(100)).toEqual("$1.00");
   
  });
  it("works with zero", ()=>{
    expect(formatMoney(0)).toEqual("$0.00");
   
  });

  it("rounds to the nearest cent", ()=>{
    expect(formatMoney(2000.5)).toEqual("$20.01");
    
  });
})
