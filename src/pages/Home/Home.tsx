import ImageGrid from '../../components/ImageGrid/ImageGrid'
import { images } from '../../data/images';
import './Home.css'

export default function Home() {
  return (
    <main className="gridWrapper">
      <ImageGrid images={images} />
    </main>
  )
}