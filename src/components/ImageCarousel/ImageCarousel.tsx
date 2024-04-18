import Image from "next/image";
import "./ImageCarousel.css";
import { cross, lines, github, linkedin, instagram, html, css, javascript, reactjs, nodejs, expressjs, mongodb, redux, tailwindcss, figma, firebase, chakraui, framer, postman } from "../../assets";

const ImageCarousel = () => {
  return (
    <div className="logos">
      <div className="logos-slide">
        <div className="flex flex-row">
          <Image src={html} alt="html" width={200} height={200} />
          <Image src={css} alt="css" width={200} height={200} />
          <Image src={javascript} alt="javascript" width={200} height={200} />
          <Image src={reactjs} alt="reactjs" width={200} height={200} />
          <Image src={nodejs} alt="nodejs" width={200} height={200} />
          <Image src={expressjs} alt="expressjs" width={200} height={200} />
          <Image src={mongodb} alt="mongodb" width={200} height={200} />
          <Image src={redux} alt="redux" width={200} height={200} />
          <Image src={tailwindcss} alt="tailwindcss" width={200} height={200} />
          <Image src={figma} alt="figma" width={200} height={200} />
          <Image src={postman} alt="postman" width={200} height={200} />
          <Image src={github} alt="github" width={200} height={200} />
          <Image src={html} alt="html" width={200} height={200} />
          <Image src={css} alt="css" width={200} height={200} />
          <Image src={javascript} alt="javascript" width={200} height={200} />
          <Image src={reactjs} alt="reactjs" width={200} height={200} />
          <Image src={nodejs} alt="nodejs" width={200} height={200} />
          <Image src={expressjs} alt="expressjs" width={200} height={200} />
          <Image src={mongodb} alt="mongodb" width={200} height={200} />
          <Image src={redux} alt="redux" width={200} height={200} />
          <Image src={tailwindcss} alt="tailwindcss" width={200} height={200} />
          <Image src={figma} alt="figma" width={200} height={200} />
          <Image src={postman} alt="postman" width={200} height={200} />
          <Image src={github} alt="github" width={200} height={200} />
        </div>
      </div>      
    </div>
  );
};

export default ImageCarousel;
