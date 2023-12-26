import Posts from "../../components/Posts/Posts"
import Stories from "../../components/Stories/Stories"
import Share from "../../components/share/Share"
import "./home.scss"

const Home = () => {
  return (
    <div className="home">
     <Stories />
     <Share />
     <Posts />
    </div>
  )
}

export default Home