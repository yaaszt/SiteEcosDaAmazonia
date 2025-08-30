import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Header } from './components/Header'
import { HomePage } from './components/HomePage'
import { AboutPage } from './components/AboutPage'
import { ProductsPage } from './components/ProductsPage'
import { Footer } from './components/Footer'

export default function App() {
  const [currentPage, setCurrentPage] = useState('inicio')

  const pageVariants = {
    initial: { 
      opacity: 0,
      y: 20,
      scale: 0.98
    },
    in: { 
      opacity: 1,
      y: 0,
      scale: 1
    },
    out: { 
      opacity: 0,
      y: -20,
      scale: 1.02
    }
  }

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.4
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'inicio':
        return (
          <motion.div
            key="home"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <HomePage />
          </motion.div>
        )
      case 'sobre':
        return (
          <motion.div
            key="about"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <AboutPage />
          </motion.div>
        )
      case 'produtos':
        return (
          <motion.div
            key="products"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <ProductsPage />
          </motion.div>
        )
      default:
        return (
          <motion.div
            key="home-default"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <HomePage />
          </motion.div>
        )
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait">
          {renderPage()}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}