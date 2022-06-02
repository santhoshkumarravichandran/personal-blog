import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
export default function Custom404() {
    return (
        <Layout>
        <h2 className={utilStyles.headingLg}>Not Found</h2>
       <br />
        <p> The content you are looking for, is currently unavailable.</p>
     </Layout>
    )
  }