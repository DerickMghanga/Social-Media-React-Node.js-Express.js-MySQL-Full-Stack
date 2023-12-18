import Posts from "../../components/Posts/Posts"
import Stories from "../../components/Stories/Stories"
import "./home.scss"

const Home = () => {
  return (
    <div className="home">
     <Stories />
     <Posts />
    </div>
  )
}

export default Home