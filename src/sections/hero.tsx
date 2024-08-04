import MotionText from "@/components/motion-text";
import MotionDiv from "@/components/motion-div";

export default function hero() {
  return (
    <section className="my-8 flex flex-col items-center justify-center">
      <h1 className="mb-4 text-[1.4rem] md:text-[2rem]">
        <MotionText delayOffset={0}>Hey there, I'm Richard Byers</MotionText>
      </h1>
      <div className="overflow-hidden rounded-full p-3 md:p-4">
        <MotionDiv>
        <img
              src="/RichardByersCircle.jpeg"
              alt="RichardByers"
              className="w-[250px] min-w-[250px] rounded-xl transition-all"
            />
        </MotionDiv>
      </div>
      <h1>
        <MotionDiv delayOffset={0.8}>Software Engineer 🧑🏻‍💻</MotionDiv>
      </h1>
      <div className="my-12 flex w-full flex-col gap-2 text-center lg:w-[50%]">
        <MotionDiv delayOffset={1.2}>
          <p>Welcome to my website!</p>
        </MotionDiv>
        <MotionDiv delayOffset={1.4}>
          <p>
          Recent graduate of Queen's University of Belfast & currently working for Proofpoint.
          </p>
        </MotionDiv>
      </div>
    </section>
  );
}
