import Layout from '../components/Layout/Layout'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Skills from '../components/Skills/Skills'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <Layout>
      <motion.div initial="hidden" animate="visible" variants={{
        hidden: {
          scale: 0.8,
          opacity: 0
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 0.1
          }
        }
      }}>
        <Hero />
      </motion.div>
      <About />
      <Skills />
    </Layout>
  )
}

export default Home
