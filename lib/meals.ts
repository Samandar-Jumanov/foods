import prisma from './../prisma/prisma';


export const getFoods = async ( ) =>{
       return prisma.foods.findMany();
}

export const getMealBySlug =  async ( slugName : string ) =>{
            console.log(slugName);

          const meal = await  prisma.foods.findUnique({
              where : {
                   slug : slugName as string 
              }
          });

           console.log(meal);

          return meal
};




