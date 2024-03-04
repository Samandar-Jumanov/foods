
import Link from "next/link"
const Meals = ( ) =>{
      return (
         <div> 
           All meals 
           <button> 
           <Link href="/meals/some-meal">  Some meal </Link>
           </button>
         </div>
      )
}


export default Meals 