import Head from "next/head"
import styles from "../styles/Home.module.css"

import Header from "../components/Header"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Reports from "../components/Reports"
import EmptyPage from "../components/EmptyPage"

import { useRouter } from "next/router"

const Home = ({ user }) => {
  const { query } = useRouter()

  return (
    <div className={styles.container}>
      <Head>
        <title>Reports Dashboard</title>
        <meta name="description" content="Reports Dashboard" />
        <link rel="icon" href="/assets/reports-logo.svg" />
      </Head>
      <div className={styles.pageWrapper}>
        <Header />

        <div className={styles.contents}>
          <NavBar />
          {query.reports ? <Reports /> : <EmptyPage />}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Home
