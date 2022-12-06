import Head from 'next/head'
import { useState } from 'react'
import HeroSection from '../components/Hero'
import InfoSection from '../components/InfoSection';
import infoContent from '../components/InfoSection.content'
import ServicesSection from '../components/ServicesSection';

export default function Home() {
  const [heroAlpha, setHeroAlpha] = useState(0);
  const toggleHeroAlpha = () => setHeroAlpha(heroAlpha ? 0 : 0.5);

  return (
    <>
      <HeroSection id='top' opacity={heroAlpha} />
      {
        infoContent.map((e,i) => (
          <InfoSection
            id={e.id}
            key={`${e.id}-info`}
            to={e.to}
            route={e.route}
            imgOnLeft={
              e.imgOnLeft !== undefined
              ? e.imgOnLeft
              : i%2 == 0
            }
            topLine={e.topLine}
            headline={e.headline}
            description={e.description}
            buttonLabel={e.buttonLabel}
            img={e.img}
            alt={e.alt}
            // bg={i%2==0 ? 'primary' : 'shade'}
            // fg={i%2==0 ? 'contrast' : 'primary'}
          />
        ))
      }
      <ServicesSection id='services'/>
    </>
  )
}
