import { IMeal } from "../../types/meals"
import MealsItem from "./meals-items"


const AllMeals = ( meals   :  IMeal[]) =>{
        return (
                   <> 
                     {meals.map((meal) => (
                         <MealsItem
                             id={meal.id}
                             slug={meal.slug}
                             title={meal.title}
                             image={meal.image}
                             creator={meal.creator}
                             summary={meal.summary}
                         />
                     ) )}

                    </>   
        )
}