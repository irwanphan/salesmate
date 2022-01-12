const DUMMY_PRODUCTS = [
    {
        id: 'e1',
        title: 'item 1',
        description: 'Sugar turkish mazagran saucer caffeine to go et coffee black galão aroma café au lait sugar. White, dark, cinnamon breve espresso, robust spoon mazagran foam, java cortado organic crema irish, viennese instant brewed, dark caramelization bar  organic et iced turkish. Single shot sit aged latte mug, cinnamon, medium, grounds organic, eu et, aroma saucer that ristretto rich frappuccino ristretto beans decaffeinated crema steamed trifecta.',
        image: '',
        price: 11000,
        isFeatured: false,
    },
    {
        id: 'e2',
        title: 'item 2',
        description: 'Sugar turkish mazagran saucer caffeine to go et coffee black galão aroma café au lait sugar. White, dark, cinnamon breve espresso, robust spoon mazagran foam, java cortado organic crema irish, viennese instant brewed, dark caramelization bar  organic et iced turkish. Single shot sit aged latte mug, cinnamon, medium, grounds organic, eu et, aroma saucer that ristretto rich frappuccino ristretto beans decaffeinated crema steamed trifecta.',
        image: '',
        price: 22000,
        isFeatured: false,
    },
    {
        id: 'e3',
        title: 'item 3',
        description: 'Sugar turkish mazagran saucer caffeine to go et coffee black galão aroma café au lait sugar. White, dark, cinnamon breve espresso, robust spoon mazagran foam, java cortado organic crema irish, viennese instant brewed, dark caramelization bar  organic et iced turkish. Single shot sit aged latte mug, cinnamon, medium, grounds organic, eu et, aroma saucer that ristretto rich frappuccino ristretto beans decaffeinated crema steamed trifecta.',
        image: '',
        price: 33000,
        isFeatured: false,
    },
];
  
export function getFeaturedProducts() {
    return DUMMY_PRODUCTS.filter((product) => product.isFeatured);
}

export function getAllProducts() {
    return DUMMY_PRODUCTS;
}

export function getFilteredProducts(dateFilter) {
    const { year, month } = dateFilter;
  
    let filteredProducts = DUMMY_PRODUCTS.filter((product) => {
        const productDate = new Date(product.date);
        return productDate.getFullYear() === year && productDate.getMonth() === month - 1;
    });
  
    return filteredProducts;
}
  
export function getProductById(id) {
    return DUMMY_PRODUCTS.find((product) => product.id === id);
}