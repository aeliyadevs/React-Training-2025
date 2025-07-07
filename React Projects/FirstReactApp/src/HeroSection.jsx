function HeroSection() {
  return (
    <div className="hero-section splide splide">
      <div className="splide__track">
        <div className="splide__list">
          <div
            className="slider splide__slide"
            style={{
              background:
                "linear-gradient(#00000060, #00000060), url('slider-banner-1.jpg')",
            }}
          >
            <div className="content">
              <h1 className="animate__animated animate__backInUp">
                Experience the
                <br />
                nature's beauty
              </h1>
              <p className="animate__animated animate__slideInRight">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
                adipisci necessitatibus doloribus voluptate saepe cupiditate
                aperiam. Laudantium hic adipisci explicabo obcaecati tenetur cum
                veniam cumque.
              </p>
              <button className="primary-button animate__animated animate__zoomInRight">
                Continue Reading
              </button>
            </div>
          </div>
          <div
            className="slider splide__slide"
            style={{
              background:
                "linear-gradient(#00000060, #00000060), url('slider-banner-2.jpg')",
            }}
          >
            <div className="content">
              <h1 className="animate__animated animate__backInUp">
                Travelling Around
                <br />
                The World
              </h1>
              <p className="animate__animated animate__slideInRight">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
                adipisci necessitatibus doloribus voluptate saepe cupiditate
                aperiam. Laudantium hic adipisci explicabo obcaecati tenetur cum
                veniam cumque.
              </p>
              <button className="primary-button animate__animated animate__zoomInRight">
                Continue Reading
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
