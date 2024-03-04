
import React from "react";
import Link from "next/link";


 const Meal  : React.FC= ( props : any ) => {
        return (
              <div>
                <h1>{props.slug}</h1>  
                <button> 
                  <Link href="/meals/share">   Share meals </Link>
                </button>
              </div>
        )
}


export default Meal;