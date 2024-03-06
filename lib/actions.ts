"use server"
import { IMeal, IState } from "../types/meals";
import fs from "node:fs";
import prisma from "../prisma/prisma";
import { redirect } from 'next/navigation';
import { revalidatePath } from "next/cache";



export async function shareMeal( formData : FormData) : Promise<IState> {
     const meal : IMeal = {
            title :  formData.get('title') as string,
            summary : formData.get('summary') as string,
            creator : formData.get('creator') as string,
            image : formData.get('mealImage'),
            slug : formData.get('title') as string + '-' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
     }

    const ext = meal.image.name.split('.').pop()
    const stream = fs.createWriteStream(`public/images/${meal.slug}.${ext}`)
    const bufferedImg = await meal.image.arrayBuffer()
     stream.write(Buffer.from(bufferedImg))

     meal.image = `/images/${meal.slug}.${ext}`;

     await prisma.foods.create({
            data : meal
     });

     revalidatePath('/meals' , 'layout')
     redirect('/meals');



     return { message : "succes"}
}