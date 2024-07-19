import HeroSectionHeader from '../../Layouts/HeroSectionLayouts/HeroSectionHeader/HeroSectionHeader'
import HeroSectionActions from '../../Layouts/HeroSectionLayouts/HeroSectionActions/HeroSectionActions'
import HeroSectionInboxCard from '../../Layouts/HeroSectionLayouts/HeroSectionInboxCard/HeroSectionInboxCard'
import './HeroPage.css'
import HeroSectionActivityCard from '../../Layouts/HeroSectionLayouts/HeroSectionActivityCard/HeroSectionActivityCard'
import HeroSectionGraphicCard from '../../Layouts/HeroSectionLayouts/HeroSectionGraphicCard/HeroSectionGraphicCard'

export default function HeroPage () {
  return (
    <div>
      <HeroSectionHeader />
      <HeroSectionActions />
      <HeroSectionInboxCard />
      <HeroSectionActivityCard />
      <HeroSectionGraphicCard/>
    </div>
  )
}
