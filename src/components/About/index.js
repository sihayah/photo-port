import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';

function About() {
    return (
        <section className="my-5">
            <h1 id="about">
                Who am I?
            </h1>
            <img src={coverImage} className="my-2" style={{ width: "100% "}} alt="cover"/>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, aut nam aperiam voluptatem tempore fugiat delectus sunt? Numquam eos fugit quo asperiores libero tempore excepturi expedita, perspiciatis magnam, sit ab.
            </p>
        </section>
    )
}

export default About;