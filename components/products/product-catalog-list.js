import { useEffect, useState } from "react"

import ProductCatalogItem from "./product-catalog-item"
import classes from "./product-catalog-list.module.sass"

function ProductCatalogList(props) {
    // props to pass the event data to this component
    const { items } = props
    
    const [ products, setProducts ] = useState()
    const [ isLoading, setIsLoading ] = useState(false)

    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvc3BsLmNhbmdnaWguZGV2XC9hcGlcL3YxXC9sb2dpbiIsImlhdCI6MTY0MTgyMjc3OCwiZXhwIjoxNjQxODY1OTc4LCJuYmYiOjE2NDE4MjI3NzgsImp0aSI6IkE2cFFyVjRGRUJKZGxGeEQiLCJzdWIiOiIxIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.qExQoS0Mniwk3r4wT8mGoGtyukUXcLM-R8qsEIQrQik'
    const myHeaders = new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`,
    });

    useEffect(() => {
        setIsLoading(true)
        fetch('https://spl.canggih.dev/api/v1/products', {
            method: 'get',
            headers: myHeaders
        })
            .then(response => response.json())
            .then(data => {
                setProducts(data)
                console.log(products)
                setIsLoading(false)
            })
    }, [])
    if (isLoading) {
        return <p>loading ...</p>
    }
    if (!products) {
        return <p>no product found</p>
    }
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
                    title={item.title}
                    description={item.description}
                    price={item.price}
                />
            ) )}
        </ul>
    </section>
}

export default ProductCatalogList