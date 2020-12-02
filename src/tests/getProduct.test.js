let getProductListService = require('../services/getProductList.service');
let getProductDetailService = require('../services/getProductDetail.service')
var should    = require("chai").should();

describe("Calcultator tests using SHOULD interface from CHAI module: ", function() {
 describe("Check addTested Function: ", function() {
 it("Check the returned value using: value.should.equal(value): ", function() {
     console.log("Paulita bb");
     console.log(getProductListService('oster'));
    //  console.log(getProductDetailService(1));
 });
 });
});