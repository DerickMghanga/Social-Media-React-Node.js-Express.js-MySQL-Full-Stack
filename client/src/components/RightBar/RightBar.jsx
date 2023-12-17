import "./rightBar.scss"

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">

        {/* FIRST CONTAINER SECTION */}
        <div className="item">
          <span>Suggestions for you</span>

          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
              <span>Jane Doe</span>
            </div>

            <div className="buttons">
              <button >Follow</button>
              <button >Dismiss</button>
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
              <span>Jane Doe</span>
            </div>

            <div className="buttons">
              <button >Follow</button>
              <button >Dismiss</button>
            </div>
          </div>
        </div>

        {/* SECOND CONTAINER SECTION */}
        <div className="item">
          <span>Latest Activities</span>

          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />

              <p>
                <span>Jane Doe</span> changed their cover picture
              </p>
            </div>

            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />

              <p>
                <span>Jane Doe</span> changed their cover picture
              </p>
            </div>

            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />

              <p>
                <span>Jane Doe</span> changed their cover picture
              </p>
            </div>

            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />

              <p>
                <span>Jane Doe</span> changed their cover picture
              </p>
            </div>

            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />

              <p>
                <span>Jane Doe</span> changed their cover picture
              </p>
            </div>

            <span>1 min ago</span>
          </div>

        </div>

        {/* LAST CONTAINER SECTION */}
        <div className="item">
          <span>Online Friends</span>

          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
              <div className="online"></div>
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
              <div className="online"></div>
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
              <div className="online"></div>
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
              <div className="online"></div>
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
              <div className="online"></div>
              <span>Jane Doe</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default RightBar