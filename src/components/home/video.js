import React from 'react';
import videoPoster from '../../assets/images/video-poster.png';

const Video = () => {
    return (
        <section className="video-sec">
            <div className="video-poster-img">
                <img src={videoPoster} alt="" />
                <div className="video-play-button">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M38.5 19.134C39.1667 19.5189 39.1667 20.4811 38.5 20.866L11.5 36.4545C10.8333 36.8394 10 36.3583 10 35.5885L10 4.41154C10 3.64174 10.8333 3.16062 11.5 3.54552L38.5 19.134Z"
                            fill="white" />
                    </svg>
                    <span>PLAY</span>
                </div>
            </div>
        </section>
    )
};

export default Video;
