import ClassCieOlCs25Revision from '@site/static/svg/class_cie_ol_cs_s25_revision.jpg'
import ClassCieOlCs26Theory from '@site/static/svg/class_cie_ol_cs_s26_theory.jpg'

export type FeatureItem = {
  title: string
  Svg: React.ComponentType<React.ComponentProps<'svg'>>
}

const FEATURES: FeatureItem[] = [
  {
    title: 'I like to make my own stuff',
    Svg: ClassCieOlCs25Revision,
  },
  {
    title: 'I like security stuff',
    Svg: ClassCieOlCs26Theory,
  },
]

export default FEATURES
