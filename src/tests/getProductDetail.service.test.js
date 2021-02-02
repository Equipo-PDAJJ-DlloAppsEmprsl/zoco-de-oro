import { getProductDetailService } from '../services/getProductDetail.service';
import { productDetail } from './__mocks___/ProductDetail.mock'

describe("Get product detail", () => {

    it("get detail product", async function () {
          const response = await getProductDetailService(1);
          expect(response.length).toBeGreaterThanOrEqual(1);
    });

    it('Get product detail contain all fields', async function () {
          const response = await getProductDetailService(1);
          expect(response).toMatchObject(productDetail);
    });

    it('Should get an empty items array', async function () {
      const response = await getProductDetailService(10000000);
      expect(response).toMatchObject([]);
});
})
