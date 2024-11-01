import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import Heading from "@/components/Heading";

const components:JSXMapSerializer = {
  heading1: ({children})=> (
    <Heading 
      as="h1" 
      size="xl" 
      className="md:mb-8 mb-4 mt-12 first:mt-0 last:mb-0"
      >
        {children}</Heading>
),
paragraph: ({children})=> (
  <p className="text-2xl text-center md:text-3xl leading-10 font-body font-normal mb-4 md:mb-6 max-w-md text-slate-600">{children}</p>
)
}

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
        <div className="grid grid-cols-1 place-items-center text-center">



     <PrismicRichText field={slice.primary.heading} components={components}/>


     <PrismicRichText field={slice.primary.body} components={components}/>


     <Button field={slice.primary.button_link} className="mb-8 md:mb-10">
     {slice.primary.button_text}
     </Button>
     <PrismicNextImage field={slice.primary.image} className="drop-shadow-xl max-w-4xl w-full"/>

        </div>
    </Bounded>
  );
};

export default Hero;
