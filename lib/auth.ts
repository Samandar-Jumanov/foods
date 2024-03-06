import { hash  , compare } from "bcrypt"



export const hashPassword = async (password : string) : Promise<string> => {
       
    const hashedPassword : string  = await hash(password , 12);
    return hashedPassword;
}


export const validatePassword = async (password : string , hashedPassword : string) : Promise<boolean> => {
       const isValid : boolean = await compare(password , hashedPassword);
       return isValid;
       
}