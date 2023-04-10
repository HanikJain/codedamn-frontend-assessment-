import Navbar from "./UI/Navbar"

export default function Layout(props) {
  return (
    <div>
        <Navbar />
    
        {props.children}
    </div>
  )
}
