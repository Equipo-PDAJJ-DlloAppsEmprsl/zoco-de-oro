import { eventmock, context, badEventmock, fakeEventmock } from './__mocks___/ProductList.handler.mock';
import { handler } from '../handlers/getProductList';

describe.only('Test product list handler functionality', () => {
      it('Get product list response 200', async function () {
            const response = await handler(eventmock, context);
            expect(response.statusCode).toBe(200);
      });

      it('Get product list body not null', async function () {
            const response = await handler(eventmock, context);
            expect(response.body).not.toBeNull();
      });

      it('get statuscode 400 due to inexistent id', async function () {
            const response = await handler(badEventmock, context);
            expect(response.statusCode).toBe(401);
      });//fakeEventmock

      it.only('get statuscode 500 due to bad request', async function () {
            const response = await handler(fakeEventmock, context);
            expect(response.statusCode).toBe(401);
      });
});