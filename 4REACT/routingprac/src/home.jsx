import {Outlet,Link} from "react-router"
export default function Home(){
    return (
        <>
        
        <p> this is Home section</p>
        <Outlet></Outlet>
        <nav>
            <Link to="hi">HI</Link>
            <Link to="hello">Hello</Link>
        </nav>
        </>
    )
}