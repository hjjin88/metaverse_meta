import { useState } from "react";
const LectureRoom00 = ({setPopName}) => {
    const [MikeToggle, setMikeToggle] = useState(false);
    const [MikeOn, setMikeOn] = useState(false);
    const [CamOn, setCamOn] = useState(false);

    return (
        <>
            <div className="layer" />
            <div className="lecture-room MicCamSet layer-right-bottom ">
                <button
                    type="button" className="subclose close16" onClick={(e) => {
                    setPopName();
                }}
                />
                <div className="popTit">참여자</div>
                <div className="layer-wrap">
                    <div className="layer-body">
                        <ul className="popCon ty-01">
                            <li className="Profile-set">
                                <div className="Profile-con">
                                    <div>
                                        <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                                        <img className="Profile-mark" src="/resources/img/host.svg" alt="방장 아이콘 이미지" />
                                    </div>
                                    <button type="button" className="IDBox">
                                        <p className="ID">DDDDDDDDGG</p>
                                        <p>방장</p>
                                    </button>
                                </div>
                                <div className="AroundIconBox">
                                    <button type="button">
                                        <div className="videoOn30"></div>
                                    </button>
                                    <button type="button">
                                        <div className="mikeOff30"></div>
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="layer-footer">
                        <button type="button" className="sec-btn sec-btn-M tit-20Gy3 on-02">발표자 선정</button>
                        <button type="button" className="sec-btn-M tit-20Gy3">강제 퇴장</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default LectureRoom00;
