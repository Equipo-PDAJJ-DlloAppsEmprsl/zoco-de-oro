import getProductListService from '../services/getProductList.service';
      test("get product list by number or brand", async function() {
         const response = await getProductListService('samsung');
         expect(response.length).toBeGreaterThan(0);
});