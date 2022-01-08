import classes from "./product-catalog-item.module.sass"

function ProductCatalogItem(props) {
    // props for data coming from outside this component
    const { image, title, description, price, id } = props

    // const exploreLink = `/events/${id}`
    
    return <li className={classes.card}>
        <img src={'/' + image} alt={title} />
        <div>
            <div>
                <h3>{title}</h3>
                <p>{price}</p>
                <small>{description}</small>
            </div>
            {/* <div>
                <Button link={exploreLink}>explore more</Button>
                <Link href={exploreLink}>explore more</Link>
            </div> */}
        </div>
    </li>
}

export default ProductCatalogItem