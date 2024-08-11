import WebDeveloperSvg from '@site/static/svg/undraw_web_developer.svg'
import OpenSourceSvg from '@site/static/svg/undraw_open_source.svg'
import SpiderSvg from '@site/static/svg/undraw_spider.svg'

export type FeatureItem = {
  title: string
  text: JSX.Element
  Svg: React.ComponentType<React.ComponentProps<'svg'>>
}

const FEATURES: FeatureItem[] = [
  {
    title: 'I like to make my own stuff',
    text: (
      <p>
        Why pay for an application when you can build your own? Why use some generic application
        when you can build your own application to suite your specific needs?
      </p>
    ),
    Svg: WebDeveloperSvg,
  },
  {
    title: 'I like security stuff',
    text: (
      <p>
        I am very new to this field and am currently in the process of learning. I have reported
        several issues that I found while learning and hope to continue doing this in the future.
      </p>
    ),
    Svg: SpiderSvg,
  },
  {
    title: 'I like to take photos',
    text: (
      <p>
        As a hobbyist photographer, I aim to capture the beauty of the world through my lens and
        bring a unique perspective to every image I create.{' '}
        <a href="https://photos.hirusha.xyz/">Click here</a> to checkout my photos.
      </p>
    ),
    Svg: OpenSourceSvg,
  },
]

export default FEATURES
