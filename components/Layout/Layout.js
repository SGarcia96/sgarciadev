import Head from 'next/head'
import NavBar from '../Nav/NavBar'
import { useRouter } from 'next/router'

const Layout = ({ children, ...customMeta }) => {
  const router = useRouter()

  const meta = {
    title: 'Steven García - Software Engineer',
    description: 'I\'m an Software Engineer from Spain, Cádiz/Gibraltar. Get in touch with me to know more.',
    image: '/images/profile.jpg',
    type: 'website',
    ...customMeta
  }

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta
          property="og:url"
          content={`https://sgarcia.netlify.app${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://sgarcia.netlify.app${router.asPath}`}
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Steven García" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@SGarciadev" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <NavBar />
      <main>{children}</main>
    </div>
  )
}

export default Layout
