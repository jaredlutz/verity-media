"use client";
import { Checkbox, Input } from "@/components/Form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const LoginFormSchema = z.object({
  emailAddress: z
    .string({
      required_error: "Please enter an email address.",
    })
    .email({
      message: "Please enter a valid email address.",
    }),
  password: z
    .string()
    .min(6, { message: "Must be 6 or more characters long." })
    .max(16, { message: "Must be 16 or less characters long." }),
  rememberPassword: z.boolean(),
});

type LoginFormType = z.infer<typeof LoginFormSchema>;

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>({
    resolver: zodResolver(LoginFormSchema),
  });

  const handleFormSubmit: SubmitHandler<LoginFormType> = (data) => {
    console.log("FORM", data);
    console.log("ERROR", errors);
  };

  return (
    <div className="relative flex h-screen w-screen flex-col md:items-center md:justify-center md:bg-transparent">
      <Image
        src="/images/login-bg.jpeg"
        alt="background image"
        className="hidden object-cover opacity-50 sm:block"
        fill={true}
        loading="eager"
        priority={true}
      />
      <div className="absolute top-8 left-16 cursor-pointer">
        <Image src="/logo.svg" alt="Netflix Logo" height={50} width={150} />
      </div>
      <section className="z-10 mx-auto flex w-full max-w-md flex-col gap-8 rounded bg-black/80 bg-opacity-90 px-16 pt-16 pb-32">
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="flex w-full flex-col gap-8"
        >
          <h1 className="w-full text-left text-4xl font-semibold">Sign In</h1>
          <div className="flex w-full flex-col gap-4">
            <div className="flex w-full flex-col gap-2">
              <Input
                type="email"
                id="email"
                placeholder="Email address"
                colorMode="dark"
                className={`input ${
                  errors.emailAddress?.message && "input-error"
                }`}
                {...register("emailAddress")}
              />
              {errors.emailAddress && (
                <p className="w-full text-sm text-orange-500">
                  {errors.emailAddress.message}
                </p>
              )}
            </div>
            <div className="flex w-full flex-col gap-2">
              <Input
                type="password"
                id="password"
                placeholder="Password"
                colorMode="dark"
                className={`input ${errors.password?.message && "input-error"}`}
                {...register("password")}
              />
              {errors.password && (
                <p className="w-full text-sm text-orange-500">
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex w-full flex-col gap-2">
            <button
              type="submit"
              className="w-full rounded bg-[#E50914] py-3 font-semibold"
            >
              Sign In
            </button>
            <label htmlFor="rememberPw" className="flex items-center gap-1">
              <Checkbox
                id="rememberPw"
                defaultChecked={true}
                {...register("rememberPassword")}
              />
              <span className="text-sm text-gray-500">Remember me</span>
            </label>
          </div>
        </form>
        <div className="flex w-full flex-col gap-2">
          <div className="flex w-full items-center gap-4 text-gray-500">
            <div className="h-[1px] flex-1 bg-gray-500"></div>
            <div>Or</div>
            <div className="h-[1px] flex-1 bg-gray-500"></div>
          </div>
          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded bg-[#333] py-3 font-semibold"
          >
            {/* <FcGoogle className="w-4 h-4" /> */}
            Sign In with Google
          </button>
        </div>
        <div className="flex items-center gap-1">
          <p className="text-gray-500">New to Netflix?</p>
          <p className="cursor-pointer hover:underline">Sign up now</p>
        </div>
      </section>
    </div>
  );
};

export default Login;
