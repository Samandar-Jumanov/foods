import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../../../prisma/prisma";
import { hashPassword , validatePassword } from '../../../lib/auth';


export default NextAuth({
    providers: [
        CredentialsProvider({
            async authorize(credentials: Record<string, string | undefined >) {
                await prisma.$connect();
            
                
                await prisma.$disconnect();

                
            }
        })
    ]
})
