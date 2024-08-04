import ContactList from "@/components/contact-list";
import MotionDiv from "@/components/motion-div";

export default function contact() {
  return (
    <section
      className="my-4 mb-28 flex flex-col items-center gap-5 text-center md:mt-8"
      id="contact"
    >
      <MotionDiv>
        <h2>Contact</h2>
      </MotionDiv>
      <ContactList />
      <p>This website was based off a template made by <a href="https://github.com/erich2s">Eric Huang</a></p>
    </section>
  );
}
