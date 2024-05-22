import { Form } from "@/components/contactForm";
const Contact = () => {
  return (
    <div className="p-4 ">
      <h1 className="text-5xl mb-8 font-semiboldbold">Contact me</h1>
      <p className="text-lg mb-10">
        If you have any query send your information and i will reach you back
        or,you can directly send email on{" "}
        <span className="underline [text-decoration-thickness:3px]">
          <strong>
            <i>a.d.since03@gmail.com</i>
          </strong>
        </span>{" "}
        {"  "}
        <span className="block md:hidden"></span>or through link present in
        footer.
      </p>
      <Form></Form>
    </div>
  );
};
export default Contact;
