const prepareProductsQuery = (ids: string) => {
  return `
    query Products {
        products(searchInput: { productsId: [${ids}] }) {
            took
            products {
                id
                name
                description
                pointsReceive
                price {
                    omnibusPrice {
                        gross {
                            formatted
                        }
                    }
                    price {
                        gross {
                            formatted
                        }
                    }
                    crossedPrice {
                        gross {
                            formatted
                        }
                    }
                }
                producer {
                    name
                    link
                }
                sizes {
                    availability {
                        status
                    }
                }
            }
        }
    }
`;
};

export default prepareProductsQuery;
