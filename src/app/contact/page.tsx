import { Metadata } from "next";

import ContactForm from "@/components/Contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Me",
  description: "Send me yours messages.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto my-[var(--size-8)] w-[90%] max-w-[50rem] rounded-md bg-grey-100 p-[var(--size-4)] text-xl shadow-md">
      <h1 className="my-[var(--size-4)] text-left text-2xl md:text-center md:text-4xl">
        How can I help you?
      </h1>

      <ContactForm />
    </section>
  );
}
