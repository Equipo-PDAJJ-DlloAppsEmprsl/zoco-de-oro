import {getProductListService} from '../services/getProductList.service';
import {getProductDetailService} from '../services/getProductDetail.service';
import {getProductDetail} from '../handlers/getProductDetail';

//Unitarias

describe("Get product detail",() => {
      const expected = [{
            id: 1,
            nombre: 'Televisor 60 pulgadas',
            marca:'LG',
            thumbnail:'https://s3.amazonaws.com/storage.wobiz.com/135/135030/images/Square/1562259292_d4acb9dada0a701cb46a931ae50e9a52.135030.jpeg',
            fotos:["",""],
            ciudad: {
                  nombre:"Medellín",
                  id:"1"
            },
            descripcion: "Color negro",
            precio: 2500000,
            seller: {
                  id: 0,
                  nombre: "zoco de oro"
            },
            rating:4.5
      }];

      it("get detail product", async function(){
            const response = await getProductDetailService(1);
            expect(response.length).toBeGreaterThanOrEqual(1);
        });

      it('Get product detail contain all fields', async function() {
            const response = await getProductDetailService(1);
            expect(response).toMatchObject(expected);
      });

})



describe('Get product list', () => {









//       const expected = {
         
//       query: "celular",
//       total: 2,
//       seller: {
//         id: 0,
//         name: "zoco de oro"
//     },
//     items: [
//         {
//             id: 2,
//             name: "Celular Motorola G6",
//             brand: "Motorola ",
//             thumbnail: "http://mco-s1-p.mlstatic.com/901896-MCO41533495389_042020-I.jpg",
//             city: {},
//             price: 63000,
//             currency: "COP",
//             rating: 4.3
//         },
//         {
//             id: 6,
//             name: "Celular iPhone 11 64gb Sellado Nuevo 4g ",
//             brand: "Apple",
//             thumbnail: "http://mco-s2-p.mlstatic.com/633422-MCO40352812762_012020-I.jpg",
//             city: {},
//             price: 3000000,
//             currency: "COP",
//             rating: 4.5
//         }
//       ]
//       };

      test("get product list by number or brand", async function() {
            const response = await getProductListService('LG');
            expect(response.length).toBeGreaterThan(0);
      });
   
      test("Get product list contain all fields", async function() {
            const expected = [{
                  id: 2,
                  nombre: 'Celular Motorola G6',
                  marca:'Motorola ',
                  thumbnail:'http://mco-s1-p.mlstatic.com/901896-MCO41533495389_042020-I.jpg',
                  ciudad: {
                        nombre:"Medellín",
                        id:"1"
                  },
                  precio: 63000,
                  seller: {
                        id: 0,
                        nombre: "zoco de oro"
                  },
                  rating:4.3
            },
            {
                  id: 6,
                  nombre: 'Celular iPhone 11 64gb Sellado Nuevo 4g ',
                  marca:'Apple',
                  thumbnail:'http://mco-s2-p.mlstatic.com/633422-MCO40352812762_012020-I.jpg',
                  ciudad: {
                        nombre:"Cali",
                        id:"0"
                  },
                  precio: 3000000,
                  seller: {
                        id: 0,
                        nombre: "zoco de oro"
                  },
                  rating:4.5
            },
      
      ];
            const response = await getProductListService('celular');
            expect(response).toMatchObject(expected);
      });

      
});



