import { useState } from "react";
import "./update.scss" ;
import { FaRegWindowClose } from "react-icons/fa";

const Update = ({setOpenUpdate}) => {

    const [texts, setTexts] = useState({
        name: "",
        city: "",
        website: "",
    })

    const handleChange = (e) => {
        setTexts((prev) => ({...prev, [e.target.name] : [e.target.value]}));
    }

  return (
    <div className="update" >
        <span onClick={()=>setOpenUpdate(false)} style={{cursor: "pointer"}}>
            <FaRegWindowClose size={22} />
        </span>

        <form action="">
            <input type="file" />
            <input type="file" />
            <input type="text" name="name" onChange={handleChange} />
            <input type="text" name="city" onChange={handleChange} />
            <input type="text" name="website" onChange={handleChange} />
        </form>
    </div>
  )
}

export default Update