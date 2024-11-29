import "../BlockImage/block-image.styles.scss";

export type ImageOverlay = {
  title: string;
  imageUrl: string;
};

const BlockImage = ({ title, imageUrl }: ImageOverlay) => {
  return (
    <div className="section block-fullwidth">
      <div className="row">
        <div className="flex-col">
          <div className="single-image">
            <img
              className="overlay overlay-image"
              src={imageUrl}
              data-scroll
              data-scroll-speed="-0.1"
              width="3000"
              height="2250"
              loading="lazy"
            />
            <div
              className="overlay dark-overlay"
              style={{ opacity: 0.1 }}
            ></div>
            <div className="overlay text-overlay theme-dark">
              <div className="container">
                <h2 className="fs-600">{title}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockImage;
