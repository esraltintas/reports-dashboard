import Head from "next/head"
import styles from "../styles/Home.module.css"

import Header from "../components/Header"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Reports from "../components/Reports"

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
        <Header user={user} />

        <div className={styles.contents}>
          <NavBar />
          {query.reports && <Reports />}
        </div>
      </div>

      <Footer />
    </div>
  )
}

Home.getInitialProps = async (ctx) => {
  try {
    const res = await axios.get("http://178.63.13.157:8090/mock-api/api/users")
    const user = res?.data[0]
    console.log(user)

    return { user }
  } catch (err) {
    return { err }
  }
}

export default Home
