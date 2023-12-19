import Post from "../post/Post"
import "./posts.scss"


const Posts = () => {

  //DUMMY DATA
  const posts = [
    {
      id:1,
      name: "John Doe",
      userId: 1,
      profilePic:"https://images.pexels.com/photos/3367850/pexels-photo-3367850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      desc: "Morbi mollis tellus ac sapien. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Praesent ut ligula non mi varius sagittis.Aliquam erat volutpat. Praesent adipiscing. Etiam rhoncus.Praesent blandit laoreet nibh. Aliquam erat volutpat. Fusce neque.",
      img: "https://images.pexels.com/photos/3811600/pexels-photo-3811600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id:2,
      name: "Jane Doe",
      userId: 2,
      profilePic: "https://images.pexels.com/photos/3812417/pexels-photo-3812417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      desc:"Fusce convallis metus id felis luctus adipiscing. Ut id nisl quis enim dignissim sagittis. Sed in libero ut nibh placerat accumsan.Aenean commodo ligula eget dolor. Cras varius. Praesent congue erat at massa.Ut leo. Suspendisse eu ligula. Morbi ac felis.Nullam vel sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Nunc nec neque.",
    }
  ]

  return (
    <div className='posts'>
      {
        posts.map((post)=> (
         <Post post={post} key={post.id} />
        ))
      }
    </div>
  )
}

export default Posts