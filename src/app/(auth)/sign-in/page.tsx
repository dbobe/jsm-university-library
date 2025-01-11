"use client";

import { signInSchema } from "@/lib/validations";
import AuthForm from "@/components/AuthForm";

export default function SignInPage() {
  return (
    <AuthForm
      type="SIGN_IN"
      schema={signInSchema}
      defaultValues={{
        email: "",
        password: "",
      }}
      onSubmit={() => {}}
    />
  );
}
