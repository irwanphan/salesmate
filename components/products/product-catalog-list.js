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
            {items.map((product) => (
                <ProductCatalogItem
                    key={product.id} 
                    id={product.id}
                    image={product.image}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                />
            ) )}
        </ul>
    </section>
}

export default ProductCatalogList