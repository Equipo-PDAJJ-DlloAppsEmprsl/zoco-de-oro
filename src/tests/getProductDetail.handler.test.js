import {eventmock, context, badeventmock} from './__mocks___/productDetail.handler.mock';
import { handler } from '../handlers/getProductDetail';

describe('Test handler functionality', () => {
    it('Get product detail response 200', async function () {
        const response = await handler(eventmock, context);
        expect(response.statusCode).toBe(200);
  });

  it('Get product detail body not null', async function () {
        const response = await handler(eventmock, context);
        expect(response.body).not.toBeNull();
  });
  it('Get bad response', async function () {
      const response = await handler(badeventmock, context);
      expect(response.statusCode).toBe(400);
});
});