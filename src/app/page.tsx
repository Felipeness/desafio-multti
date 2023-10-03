import Image from 'next/image'
import styles from './page.module.css'
import { HeroSection } from '@/components/hero-section'
import { Carousel } from '@/components/carousel'
import { Testemonials } from '@/components/testemonials'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        src="/assets/Hero Image.png"
        alt="Back Ground Page "
        objectFit="cover"
        quality="100"
        layout="fill"
        />
        <HeroSection />
        <Carousel />
        <Testemonials />
        <Footer />

    </main>
  )
}
