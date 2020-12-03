let getProductListService = require('../services/getProductList.service');
let getProductDetailService = require('../services/getProductDetail.service')
let getProductList = require('../handlers/getProductList');
var should    = require("chai").should();

describe("Calcultator tests using SHOULD interface from CHAI module: ", function() {
 describe("Check addTested Function: ", function() {
 it("Check the returned value using: value.should.equal(value): ", function() {
     console.log(getProductListService('samsung'));
    //  console.log(getProductDetailService(1));
    //console.log(getProductList(null, null))
 });
 });
});