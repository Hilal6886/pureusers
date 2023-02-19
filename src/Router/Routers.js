import React, {useState} from 'react'

import { BrowserRouter as Router, Route, Routes , useNavigate } from "react-router-dom";
import Detail from '../pages/Detail';





const Routers = () => {
  const Navigate = useNavigate();
  const [user, setUser] = useState(null);
  return (
    
      
        <Routes>
          
          <Route
          path="/detail/:id"
          element={<Detail user={user} />}
        />
        
         

          
        </Routes>
   
    
  )
}

export default Routers