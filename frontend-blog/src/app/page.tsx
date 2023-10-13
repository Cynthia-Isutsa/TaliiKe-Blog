import Header from '@/app/components/Header'
import IntroBlog from '@/app/components/Introblog'
import Navbar from '@/app/components/Navbar'
import Blogs from './components/Blogs'
import Footer from './components/Footer'



export default function Home() {
  
  return (
    <main>
      <Navbar />
      <Header />
      <IntroBlog />
      <Blogs />
      <Footer />
     
    </main>
  )
}
