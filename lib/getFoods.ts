import prisma from './../prisma/prisma';


export const getFoods = async ( ) =>{
       return prisma.foods.findMany();
}
