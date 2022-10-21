import '../styles/globals.scss'

import { useState } from 'react'
import { Header } from '../components'
import Context from '../contexts/Context'

function MyApp({ Component, pageProps }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);


  return (
    <Context.Provider value={{ currentPage, setCurrentPage, postsPerPage, searchTerm, setSearchTerm }}>
      <Header />
      <Component {...pageProps} />
    </Context.Provider>
  )
}

export default MyApp
