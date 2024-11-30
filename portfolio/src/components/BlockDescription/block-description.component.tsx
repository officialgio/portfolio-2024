import "../BlockDescription/block-description.styles.scss";

export type DescriptionDetails = {
  description: string;
  imageUrl: string;
};

const BlockDescription = ({ description, imageUrl }: DescriptionDetails) => {
  return (
    <div className="section description">
      <div className="container medium">
        <div className="row">
          <div className="flex-col">
            {" "}
            <h4 className="span-lines animate fs-500">{description}</h4>
          </div>
          <div className="flex-col">
            <div className="single-about-image">
              <img
                className="overlay overlay-image "
                data-scroll
                data-scroll-speed="-0.2"
                src={imageUrl}
                alt=""
                loading="lazy"
              />
              {/* <div className="overlay"></div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockDescription;