import Button from "./Button";
function SlideItem(props) {
  return (
    <div
      className="slider splide__slide"
      style={{
        background: `linear-gradient(#00000060, #00000060), url(${props.bgImage})`,
      }}
    >
      <div className="content">
        <h1 className="animate__animated animate__backInUp">{props.title}</h1>
        <p className="animate__animated animate__slideInRight">
          {props.subtitle}
        </p>
        {/* <button className="primary-button animate__animated animate__zoomInRight">
                Continue Reading
              </button> */}
        <Button buttonText="Continue Reading" />
      </div>
    </div>
  );
}
export default SlideItem;
