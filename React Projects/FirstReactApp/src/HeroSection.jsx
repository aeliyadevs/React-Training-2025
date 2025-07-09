import Button from "./Button";
import SlideItem from "./SlideItem";

function HeroSection() {
  return (
    <div className="hero-section splide splide">
      <div className="splide__track">
        <div className="splide__list">
          <SlideItem
            title={"Experience the nature's beauty"}
            subtitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id ipsa repellat tenetur cum veritatis nulla quo iure quos inventore laborum fugiat voluptatum ipsam sapiente quibusdam, corporis illo quasi voluptatem! Illo."
            bgImage="slider-banner-1.jpg"
          />
          <SlideItem
            title="Title"
            subtitle="Testing"
            bgImage="slider-banner-2.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
