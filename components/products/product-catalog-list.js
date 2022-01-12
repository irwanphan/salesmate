import ProductCatalogItem from "./product-catalog-item"
import classes from "./product-catalog-list.module.sass"

function ProductCatalogList(props) {
    // props to pass the event data to this component
    const { items } = props
    
    return <section>
        <p className={classes.sectionTitle}>
            products catalog
        </p>
        <ul className={classes.grid}>
            {items.map((item) => (
                <ProductCatalogItem
                    key={item.id} 
                    id={item.id}
                    image={item.image}
                    title={item.name}
                    description={item.qty_ready}
                    price={item.price}
                />
            ) )}
        </ul>
    </section>
}

export default ProductCatalogList