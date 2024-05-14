import React from "react";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";

const HomeSectionCarosel = () => {
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };
    const items = [1,1,1,1,1].map((item) => <HomeSectionCard/>)
    return (
        <div>
        <AliceCarousel
        items={items}
        disableButtonsControls
        infinite
        responsive={responsive}
        />
        </div>
    )
}

export default HomeSectionCarosel