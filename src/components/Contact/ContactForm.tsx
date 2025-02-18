"use client";

import { useActionState, useState } from "react";
import Form from "next/form";
import toast from "react-hot-toast";

import { sendMessage } from "@/actions/contact";
import { formSchema } from "@/lib/validation/form";

type ZodErrors = Record<string, string[]>;

export type FormState = {
  errors?: ZodErrors;
  message: string;
  fields?: Record<string, string>;
};

type FormFields = {
  email: string;
  name: string;
  message: string;
};

const initialFormData = {
  email: "",
  name: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormFields>(initialFormData);

  const [clientErrors, setClientErrors] = useState<Record<string, string>>({});

  const [formState, formAction, isPending] = useActionState<
    FormState,
    FormData
  >(sendMessage, { message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (formData: FormData) => {
    const data = Object.fromEntries(formData.entries());
    const parsed = formSchema.safeParse(data);

    if (!parsed.success) {
      setClientErrors(
        Object.fromEntries(
          Object.entries(parsed.error.flatten().fieldErrors).map(
            ([key, value]) => [key, value?.[0] || ""],
          ),
        ),
      );
      return;
    }

    setFormData(initialFormData);
    setClientErrors({});
    formAction(formData);
    toast.success(formState.message);
  };

  return (
    <Form action={handleSubmit}>
      <div className="flex flex-wrap gap-4">
        <div className="min-w-[10rem] flex-1">
          <label
            htmlFor="email"
            className="font-oswald mb-[var(--size-1)] mt-[var(--size-2)] block font-bold"
          >
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full rounded border border-grey-400 bg-grey-50 p-[var(--size-1)]"
            value={formData.email}
            onChange={handleChange}
          />

          <p className="min-h-9 text-error-500">
            {clientErrors?.email}
            {formState.errors?.email?.join(", ")}
          </p>
        </div>
        <div className="min-w-[10rem] flex-1">
          <label
            htmlFor="name"
            className="font-oswald mb-[var(--size-1)] mt-[var(--size-2)] block font-bold"
          >
            Your name
          </label>
          <input
            name="name"
            type="text"
            id="name"
            className="w-full rounded border border-grey-400 bg-grey-50 p-[var(--size-1)]"
            value={formData.name}
            onChange={handleChange}
          />

          <p className="min-h-9 text-error-500">
            {clientErrors?.name}
            {formState.errors?.name?.toString()}
          </p>
        </div>
      </div>

      <div className="flex-1">
        <label
          htmlFor="message"
          className="font-oswald mb-[var(--size-1)] mt-[var(--size-2)] flex justify-between"
        >
          <span className="font-bold">Your message</span>
          <span className="self-end text-base font-normal">
            {formData.message.length} / 1000
          </span>
        </label>
        <textarea
          name="message"
          id="message"
          rows={5}
          className="w-full resize-none rounded border border-grey-400 bg-grey-50 p-[var(--size-1)]"
          value={formData.message}
          onChange={handleChange}
        />

        <p className="min-h-9 text-error-500">
          {clientErrors?.message}
          {formState.errors?.message?.toString()}
        </p>
      </div>

      {/* <div
        className={cn("min-h-9 text-right", {
          "text-success-500": !formState.errors && formState.fields,
          "text-error-500": !formState.errors && !formState.fields,
        })}
      >
        {!formState.errors && <p className="">{formState.message}</p>}
      </div> */}

      <div className="text-right">
        <button
          disabled={isPending}
          type="submit"
          className="rounded border border-primary-700 bg-primary-700 px-4 py-2 text-primary-50 shadow-md transition hover:border-primary-500 hover:bg-primary-500 disabled:bg-grey-200"
        >
          Send message
        </button>
      </div>
    </Form>
  );
}
