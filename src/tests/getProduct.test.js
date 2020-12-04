let getProductListService = require('../services/getProductList.service');
const getProductList = require('../handlers/getProductList');
var should    = require("chai").should();

describe("Calcultator tests using SHOULD interface from CHAI module: ",async function() {
 describe("Check addTested Function: ", function() {
   //  it("get product by id", async function() {
   //      const response = await getProductDetailService(3);
   //      console.log(response)
   //   });
    it("get product list by number or brand",async function() {
       const response = await getProductListService('samsung');
       console.log(response);
    });
 });
});