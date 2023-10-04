"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { HeroSection } from "@/components/hero-section";
import { CarroselComponent } from "@/components/carousel";
import { Testemonials } from "@/components/testemonials";
import { Footer } from "@/components/footer";
import { Element } from "react-scroll";

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        src="/assets/Hero Image.png"
        alt="Back Ground Page "
        quality="100"
        width={1920}
        height={1080}
        style={{
          position: "absolute",
        }}
      />

        <HeroSection />


        <CarroselComponent />


        <Testemonials />


        <Footer />

    </main>
  );
}
