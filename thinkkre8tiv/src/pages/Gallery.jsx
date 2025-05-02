import React from 'react';
import '../App.css';

const Gallery = () => {
  return (
    <section className="gallery-section">
      <h2 className="gallery-heading">Gallery</h2>

      <div className="zigzag-row left">
        <img src="/images/pendrive.jpg" alt="pendrive" className="gallery-image" />
        <img src="/images/cupimage.png" alt="cup" className="gallery-image" />
      </div>

      <div className="zigzag-row right">
        <img src="/images/glasssign.jpg" alt="sign" className="gallery-image" />
        <img src="/images/tshirt.jpg" alt="shirt" className="gallery-image" />
      </div>
      <div className="zigzag-row left">
        <img src="/images/bamboobottle.png" alt="bootle" className="gallery-image" />
        <img src="/images/notebook.png" alt="notebook" className="gallery-image" />
      </div>
      <div className="zigzag-row right">
        <img src="/images/tumbler.png" alt="tumbler" className="gallery-image" />
        <img src="/images/bambooholder.png" alt="holder" className="gallery-image" />
      </div>
      <div className="zigzag-row left">
        <img src="/images/umbrella.png" alt="umbrella" className="gallery-image" />
        <img src="/images/facetowel2.png" alt="facetowel2" className="gallery-image" />
      </div>
      <div className="zigzag-row right">
        <img src="/images/acrylicsign.jpg" alt="acrylicsign" className="gallery-image" />
        <img src="/images/metalsign.jpg" alt="metalsign" className="gallery-image" />
      </div>
      <div className="zigzag-row left">
        <img src="/images/doorsign.jpg" alt="doorsign" className="gallery-image" />
        <img src="/images/resinkeyholder.jpg" alt="resinkeyholder" className="gallery-image" />
      </div>
      <div className="zigzag-row right">
        <img src="/images/resinname.jpg" alt="resinname" className="gallery-image" />
        <img src="/images/.jpg" alt="" className="gallery-image" />
      </div>
    </section>
  );
};

export default Gallery;




