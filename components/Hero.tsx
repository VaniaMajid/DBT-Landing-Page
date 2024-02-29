import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <section id="/" className="overflow-hidden lg:px-5">
      <div className="hero-bg h-screen sm:h-[80vh] max-h-[800px] lg:h-[100vh]">
        <div className="padding-container flex w-full h-[65vh] items-start">
          <div className="flex w-full items-start ">
            <div className="lg:w-1/2 space-y-6">
              <div className="flex items-center gap-2">
                <Image src="/verify.svg" alt="verify" width={31} height={31} />
                <h3 className="text-base font-normal text-primary-50 text-center">
                  Best Financial Platform
                </h3>
              </div>

              <div className="relative">
                <h1 className="text-[40px] sm:text-[54px] leading-snug font-bold text-text-10 text-start">
                  Empower Your Financial Future with Disrupt the Basic
                </h1>
                <div className="absolute top-14 sm:top-20">
                  <Image
                    src="/pattern-1.svg"
                    alt="line"
                    width={254}
                    height={12}
                  />
                </div>
              </div>

              <p className="text-lg md:text-xl text-gray-50 text-start">
                At Disrupt the Basic, we empower your financial journey with
                personalized coaching and comprehensive education. Join us to
                take control of your financial future.
              </p>

              <div className="flex pt-8">
                <Button
                  type="button"
                  title="Pre-Register Now!"
                  variant="btn_white_text"
                />
              </div>
            </div>
          </div>

          <div className="hidden lg:block ">
            <Image
            className="w-[600px] absolute top-0 right-10 lg:right-0 
            2xl:right-36 lg:w-[600px] lg:h-auto xl:w-[700px] 2xl:w-[750px] xl:h:auto object-contain"
              src="/hero-img.svg"
              alt="hero image"
              width={600}
              height={620}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
