import {useState} from "react";

const LectureRoom00 = ({setPopName }) => {
    const [MikeToggle, setMikeToggle] = useState(false);
    const [MikeOn, setMikeOn] = useState(false);

    return (
        <>
            <div className="layer" />
            <div className="lecture-room layer-right-top">
                <button type="button" className="subclose close16" onClick={(e) => {setPopName();}} />
                <div className="popTit">발표자</div>
                <div className="layer-wrap">
                    <div className="layer-body">
                        <div className="lecture-call-list">
                            <div className="lecture-call-item">
                                <video className="video" src="http://amssamples.streaming.mediaservices.windows.net/2e91931e-0d29-482b-a42b-9aadc93eb825/AzurePromo.mp4" />
                                <span className="lecture-call-user">
                                    <span className="lecture-call-user-image"><img src="/resources/img/bg.png" alt=""/></span>
                                    <span className="lecture-call-user-name">name</span>
                                </span>
                                <button type="button" className="btn-cam" onClick={() => {setMikeOn(!MikeOn)}}>
                                    <div className={`mikeOff ${MikeOn ? "mikeOn" : "mikeOff"}`}/>
                                </button>
                            </div>
                            <div className="lecture-call-item">
                                <button className="lecture-call-none-camera">카메라 없음</button>
                                {/*<video className="video" src="" />*/}
                                <span className="lecture-call-user">
                                    <span className="lecture-call-user-image"><img src="/resources/img/bg.png" alt=""/></span>
                                    <span className="lecture-call-user-name">name</span>
                                </span>
                                <button type={"button"} className="btn-cam" onClick={() => {setMikeOn(!MikeOn)}}>
                                    <div className={`mikeOff ${MikeOn ? "mikeOn" : "mikeOff"}`}/>
                                </button>
                            </div>
                            <div className="lecture-call-item">
                                <video className="video" src="" />
                                <span className="lecture-call-user">
                                    <span className="lecture-call-user-image"><img src="/resources/img/bg.png" alt=""/></span>
                                    <span className="lecture-call-user-name">name</span>
                                </span>
                                <button type="button" className="btn-cam" onClick={() => {setMikeOn(!MikeOn)}}>
                                    <div className={`mikeOff ${MikeOn ? "mikeOn" : "mikeOff"}`}/>
                                </button>
                            </div>
                            <button type={"button"} className="lecture-call-item">발표자를 추가해주세요</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default LectureRoom00;
