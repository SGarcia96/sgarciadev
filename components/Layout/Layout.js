import Head from 'next/head'
import NavBar from '../Nav/NavBar'
import utilStyles from '../../styles/Home.module.css'

export const siteTitle = 'SGarcia Dev'

const Layout = ({ children }) => {
  return (
    <div className={utilStyles.bg_image}>
      <div className={utilStyles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Welcome to my website, I'm a Software engineer and here you can discover my Projects | Blog | and more"
          />
          <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <NavBar />
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
