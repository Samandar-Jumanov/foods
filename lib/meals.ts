import prisma from './../prisma/prisma';


export const getFoods = async ( ) =>{
       return prisma.foods.findMany();
}

export const getMealBySlug =  async ( slugName : string ) =>{
          
          const meal = await  prisma.foods.findUnique({
               where : { slug : slugName}
          });

           console.log(meal);

          return meal
};




