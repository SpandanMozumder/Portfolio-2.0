"use client";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/utils/cn";
import { useForm, ValidationError } from "@formspree/react";

export const Contact = () => {
  const [state, handleSubmit] = useForm("xnqeolyk");
  if (state.succeeded) {
    return (
      <div className="h-full w-full flex justify-center items-center text-white py-[5rem]">
        <div className="h-full w-3/4 flex flex-col justify-center items-center p-[5rem]">
          <h1 className="text-[2rem] bg-gradient-to-b from-[#EEEEEE] to-[#76ABAE] text-transparent bg-clip-text mb-5 pt-[7rem] text-center">
            Thank you for reaching out! I will definitely get back to you soon.
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full w-full flex justify-center items-center text-white py-[5rem]">
      <div className="h-full w-3/4 flex flex-col justify-center lg:p-[5rem] md:p-[1rem] sm:p-[0rem] xs:w-[80%]">
        <h1 className="text-[4rem] bg-gradient-to-b from-[#EEEEEE] to-[#76ABAE] text-transparent bg-clip-text mb-5 lg:text-[3rem] sm:text-[3rem] xs:text-[2.5rem] mob:text-[2rem] pt-[3rem]">
          Send an Email to me
        </h1>

        <form className="my-8" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer className="mb-7">
              <Label
                htmlFor="firstname"
                className="text-[1.5rem] bg-gradient-to-b from-[#EEEEEE] to-[#76ABAE] text-transparent bg-clip-text mb-3"
              >
                First name
              </Label>
              <Input
                id="firstname"
                placeholder="Tyler"
                type="text"
                name="firstname"
                className="p-3"
              />
              <ValidationError
                prefix="First name"
                field="firstname"
                errors={state.errors}
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-7">
              <Label
                htmlFor="lastname"
                className="text-[1.5rem] bg-gradient-to-b from-[#EEEEEE] to-[#76ABAE] text-transparent bg-clip-text mb-3"
              >
                Last name
              </Label>
              <Input
                id="lastname"
                name="lastname"
                placeholder="Durden"
                type="text"
                className="p-3"
              />
              <ValidationError
                prefix="Last name"
                field="lastname"
                errors={state.errors}
              />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-10">
            <Label
              htmlFor="email"
              className="text-[1.5rem] bg-gradient-to-b from-[#EEEEEE] to-[#76ABAE] text-transparent bg-clip-text mb-3"
            >
              Email Address
            </Label>
            <Input
              id="email"
              placeholder="projectmayhem@fc.com"
              type="email"
              name="email"
              className="p-3"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-10">
            <Label
              htmlFor="message"
              className="text-[1.5rem] bg-gradient-to-b from-[#EEEEEE] to-[#76ABAE] text-transparent bg-clip-text mb-3"
            >
              Subject
            </Label>
            <Input
              id="subject"
              name="subject"
              placeholder="Write the subject of the email"
              type="text"
              className="p-3"
            />
            <ValidationError
              prefix="Subject"
              field="subject"
              errors={state.errors}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-10">
            <Label
              htmlFor="message"
              className="text-[1.5rem] bg-gradient-to-b from-[#EEEEEE] to-[#76ABAE] text-transparent bg-clip-text mb-3"
            >
              Your Message
            </Label>
            <Input
              id="message"
              name="message"
              placeholder="Write your message here"
              type="text"
              className="p-3 h-[10rem]"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
            disabled={state.submitting}
          >
            Send Message &rarr;
            <BottomGradient />
          </button>
          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        </form>
      </div>
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
