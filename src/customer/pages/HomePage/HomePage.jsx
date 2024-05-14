import React from "react"
import MainCarosal from "../../components/HomeCarosal/MainCarosal"
import HomeSectionCarosel from "../../components/HomeSectionCarosel/HomeSectionCarosel"

const HomePage = () => {
    return(
        <div>
            <MainCarosal/>
            <div>
                <HomeSectionCarosel/>
            </div>
        </div>
    )
}

export default HomePage