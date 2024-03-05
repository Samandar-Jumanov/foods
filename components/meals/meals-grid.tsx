import { IMeal } from "../../types/meals"
import MealsItem from "./meals-items"


const MealsGrid = ( meals  : any  ) =>{
        return (
                   <> 
                     {meals?.map((meal : any ) => (
                         <MealsItem
                          { ...meal}
                         />
                     ) )}

                    </>   
        )
}

export default MealsGrid;
