import {getProductListService} from '../services/getProductList.service';
import {mockProductList} from './__mocks___/productList.mock';

describe('Get product list service', () => {
    it("get product list by number or brand", async function() {
        const response = await getProductListService('LG');
        expect(response.length).toBeGreaterThan(0);
    });

    it("Get product list contain all fields", async function() {
        
        const response = await getProductListService('celular');
        expect(response).toMatchObject(mockProductList);
  });
});