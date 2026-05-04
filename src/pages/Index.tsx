
import SlidePresentation from "@/components/SlidePresentation";
import { slides } from "@/slides";

const Index = () => {
  return (
    <SlidePresentation totalSlides={slides.length}>
      {slides}
    </SlidePresentation>
  );
};

export default Index;
