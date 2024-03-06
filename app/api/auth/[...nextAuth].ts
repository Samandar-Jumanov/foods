import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../../../prisma/prisma";
import { validatePassword } from '../../../lib/auth';

export default NextAuth({ 
    providers: [
        CredentialsProvider({
            async authorize(credentials: { email: string, password: string }) {
                if (!credentials.email || !credentials.password) {
                    return null; // Immediately return null if email or password is missing
                }

                try {
                    const user = await prisma.user.findFirst({
                        where: { email: credentials.email },
                    });

                    if (!user) return null; // User not found

                    const isValid = await validatePassword(credentials.password, user.password);
                    if (!isValid) return null; // Password does not match

                    return { id: user.id, email: user.email }; // Successful authentication
                } catch (error) {
                    console.error("Authentication error:", error);
                    return null; // Return null on error
                }
            },
        }),
    ],
});
