import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from "react"

import ProductCatalogList from '../components/products/product-catalog-list'
import useSWR from 'swr'

// import { getAllProducts } from '../lib/dummy-data'

function Home() {
  // const allProducts = getAllProducts()
  
  // // useState returns 2 el, 1:snapshot, 2:function for updating the state
  const [ isLoading, setIsLoading ] = useState(false)
  // // custom state, 1:loaded data, 2:function for updating the state
  const [ loadedProducts, setLoadedProducts ] = useState([])

  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvc3BsLmNhbmdnaWguZGV2XC9hcGlcL3YxXC9sb2dpbiIsImlhdCI6MTY0MTk3MTE3NCwiZXhwIjoxNjQyMDE0Mzc0LCJuYmYiOjE2NDE5NzExNzQsImp0aSI6ImphdGFONDNNSjU1ZVZNbUQiLCJzdWIiOiIxIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.iWsAQYQ-mUmfPF9rNUFsG5bAcxGPKaccPP5s8NoVKHY'
  const myHeaders = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`,
  })

  const apiUrl = 'https://spl.canggih.dev/api/v1/products'

  // useSWR extract data & error
  // const { data, error } = useSWR([apiUrl, token]. fetchWithToken)
  // useEffect(() => {
  //   // if data exist
  //   if (data) {
  //     setLoadedProducts(data.data)
  //     console.log(data)
  //   }
  // }, [data])

  useEffect(() => {
    setIsLoading(true)
    fetch(apiUrl, {
        method: 'get',
        headers: myHeaders
    })
    .then(response => response.json())
    .then(data => {
        // not loading anymore
        setIsLoading(false)
        // get the data node
        // console.log(data.data)
        setLoadedProducts(data.data)
    })
  }, [])

  // error should be prioritized
  // if (error) {
  //   return <p>failed to load data.</p>
  // }
  
  if (isLoading) {
  // if (!data) {
      return <p>loading ...</p>
  }
  if (!loadedProducts) {
      return <p>no product found</p>
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>SalesMate</title>
        <meta name="description" content="sell anything, just anything" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a>SalesMate</a>!!
        </h1>

        <ProductCatalogList items={loadedProducts} />

      </main>

      <footer className={styles.footer}>
        <span>dev ongoing</span>
      </footer>
    </div>
  )
}

export default Home