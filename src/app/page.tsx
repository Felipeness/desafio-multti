import Image from 'next/image'
import styles from './page.module.css'
import { HeroSection } from '@/components/hero-section'
import { Carousel } from '@/components/carousel'
import { Testemonials } from '@/components/testemonials'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <HeroSection />
      </div>
      <div>
        <Carousel />
      </div>
      <div>
        <Testemonials />
      </div>
      <div>
        <Footer />
      </div>
    </main>
  )
}
