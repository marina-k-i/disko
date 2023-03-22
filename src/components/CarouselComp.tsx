import { Carousel } from '@mantine/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { useRef } from 'react'
import { Card } from '../pages'

export default function CarouselComp() {
  const autoplay = useRef(Autoplay({ delay: 2000 }))
  return (
    <Carousel
      height={200}
      slideGap="xl"
      controlSize={25}
      loop
      // withIndicators
      slideSize="33.333333%"
      align="start"
      plugins={[autoplay.current]}
      breakpoints={[
        { maxWidth: 'md', slideSize: '50%' },
        { maxWidth: 'sm', slideSize: '60%', slideGap: 0 },
      ]}
    >
      {[1, 2, 23, 4, 5].map((i) => (
        <Carousel.Slide key={i}>
          <div key={i}>
            <Card />
          </div>
        </Carousel.Slide>
      ))}
    </Carousel>
  )
}
