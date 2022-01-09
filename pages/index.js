import Head from 'next/head'
import styles from '../styles/Home.module.css'

import ProductCatalogList from '../components/products/product-catalog-list'
import { getAllProducts } from '../lib/dummy-data'

export default function Home() {
  const allProducts = getAllProducts()

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

        <ProductCatalogList items={allProducts} />

      </main>

      <footer className={styles.footer}>
        <span>dev ongoing</span>
      </footer>
    </div>
  )
}
