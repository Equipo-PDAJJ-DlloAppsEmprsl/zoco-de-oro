export const productListMock = {
    query: "celular",
    total: 2,
    seller: {
        id: 0,
        name: "zoco de oro"
    },
    items: [
        {
            id: 2,
            name: "Celular Motorola G6",
            brand: "Motorola ",
            thumbnail: "http://mco-s1-p.mlstatic.com/901896-MCO41533495389_042020-I.jpg",
            city: {},
            price: 63000,
            currency: "COP",
            rating: 4.3
        },
        {
            id: 6,
            name: "Celular iPhone 11 64gb Sellado Nuevo 4g ",
            brand: "Apple",
            thumbnail: "http://mco-s2-p.mlstatic.com/633422-MCO40352812762_012020-I.jpg",
            city: {},
            price: 3000000,
            currency: "COP",
            rating: 4.5
        }
    ]
};

export const eventmock = {
    queryStringParameters: {
        q : 'celular'
    }
};

export const badEventmock = {
    queryStringParameters: {
        q : 'sdasdhsaudshusaudh'
    }
};

export const fakeEventmock = {
    queryStringParameters: {
    }
};

export const context= {

};