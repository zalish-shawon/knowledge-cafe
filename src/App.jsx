import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import Header from './components/header/Header'


function App() {
 const [bookmarks, setBookmarks] = useState([])
 const [readingtime, setReadingTime] = useState(0)

 const handleMarkAsRead = (time) => {
  setReadingTime(readingtime + time);
 }

 const handleAddBookmark = (blog) => {        //blog bookmark korbo tai blog parameter
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
 }

  return (
    <>
      <Header></Header> 
      <main className='md:flex max-w-7xl mx-auto'>
      <Blogs handleAddBookmark={handleAddBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
      <Bookmarks readingtime={readingtime} bookmarks={bookmarks}></Bookmarks>
      </main>
    </>
  )
}

export default App
