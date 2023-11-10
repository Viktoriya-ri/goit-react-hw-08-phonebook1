import { useSelector } from "react-redux";
import { Link } from "../styles/Navigation.styled";
import { selectIsLoggedIn } from "redux/auth";

export const Navigation = () => {

   

    const isLogged = useSelector(selectIsLoggedIn);

return (

   <div>
    <Link  to='/'>Home</Link>
     {isLogged &&<Link  to='/contacts'>Contacts</Link> }
     
   </div>
)
}

