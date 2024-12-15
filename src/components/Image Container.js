import one from "../assets/images/Image1.png";
import two from "../assets/images/Image2.png";
import three from "../assets/images/Image3.png";
import four from "../assets/images/Image4.png";
import five from "../assets/images/Image5.png";
import six from "../assets/images/Image6.png";
import seven from "../assets/images/Image7.png";
import eight from "../assets/images/Image8.png";
function ImageContainer(){
return(
    <div>
       <div className="image-container fade-in">
        <figure className="image-item">
            <img src={one} alt="Image 1" class="clickable-image slide-in" onclick="openImage(this)"/>
            <figcaption>Brown and White Short Coated Puppy
            </figcaption>
        </figure>
        <figure className="image-item">
            <img src={two} alt="Image 2" class="clickable-image slide-in" onclick="openImage(this)"/>
            <figcaption>Adult German Shepherd Lying on Ground
            </figcaption>
        </figure>
        <figure className="image-item">
            <img src={three} alt="Image 3" class="clickable-image slide-in" onclick="openImage(this)"/>
            <figcaption>Adult Labrador Lying on Ground</figcaption>
        </figure>
        <figure className="image-item">
            <img src={four} alt="Image 4" class="clickable-image slide-in" onclick="openImage(this)"/>
            <figcaption>Adult Labrador Retriever with happy face</figcaption>
        </figure>
        <figure className="image-item">
            <img src={five} alt="Image 5" class="clickable-image slide-in" onclick="openImage(this)"/>
            <figcaption>Beagle Puppy with Pity face</figcaption>
        </figure>
        <figure classNames="image-item">
            <img src={six} alt="Image 6" class="clickable-image slide-in" onclick="openImage(this)"/>
            <figcaption>Siberian Husky with Happyy Face</figcaption>
        </figure>
        <figure className="image-item">
            <img src={seven} alt="Image 7" class="clickable-image slide-in" onclick="openImage(this)"/>
            <figcaption>Pug with Sad Face</figcaption>
        </figure>
        <figure className="image-item">
            <img src={eight} alt="Image 8" class="clickable-image slide-in" onclick="openImage(this)"/>
            <figcaption>Rotweiler with Happiness on his face</figcaption>
        </figure>
    </div> 
    </div>
)
}
export default ImageContainer