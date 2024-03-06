export interface IMeal {
    id ? : string; 
    slug: string; 
    title: string;
    summary: string;
    creator: string; 
    image: any

}




export type IState = {
     message : string | null;
}

export type IUserBody = {
       email : string;
       password : string;
}