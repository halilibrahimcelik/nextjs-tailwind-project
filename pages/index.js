import Head from "next/head";
import Hero from "../components/Hero";
import Instagram from "../components/Instagram";
import Slider from "../components/Slider";
import { imageData } from "../utils/sliderData";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Photography Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero
        heading="Captur Photography"
        message="I  capture moments in nature and keep them alive."
      />
      <Slider slides={imageData} />
      <Instagram />
    </div>
  );
}
