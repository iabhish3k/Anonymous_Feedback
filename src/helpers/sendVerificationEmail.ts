import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/verificationEmail";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
    email: string,
    username:string,
    verifiedCode:string
):Promise<ApiResponse> {
    try {
        const { data, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to:email,
            subject: 'Verificatin Code',
            react: VerificationEmail({username,otp:verifiedCode}),
          });
        return {success:true, message:'Verification email send Successfully'}
    } catch (error) {
        console.error('error in sending verfication email',error)
        return {success:false, message:'Failed to send verification email'}
    }
    
}