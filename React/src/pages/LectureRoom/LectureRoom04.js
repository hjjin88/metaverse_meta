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
                        <ul className="profile">
                            <li className="profile-list">
                                <div className="profile-photo">
                                    <span className="profile-photo-image"><img src="/resources/img/bg.png" alt="프로필 사진 이미지" /></span>
                                    <span className="profile-photo-position"><img src="/resources/img/host.svg" alt="방장 아이콘 이미지" /></span>
                                </div>
                                <button type="button" className="profile-user">
                                    <span className="profile-user-name">DDDDDDDDGG</span>
                                    <span className="profile-user-position">방장</span>
                                </button>
                                <div className="profile-util">
                                    <button type="button">
                                        <div className="videoOn30"></div>
                                    </button>
                                    <button type="button">
                                        <div className="mikeOff30"></div>
                                    </button>
                                </div>
                            </li>
                            <li className="profile-list">
                                <div className="profile-photo">
                                    <span className="profile-photo-image"><img src="/resources/img/bg.png" alt="프로필 사진 이미지" /></span>
                                    <span className="profile-photo-position"><img src="/resources/img/host.svg" alt="방장 아이콘 이미지" /></span>
                                </div>
                                <button type="button" className="profile-user">
                                    <span className="profile-user-name">DDDDDDDDGG</span>
                                    <span className="profile-user-position">방장</span>
                                </button>
                                <div className="profile-util">
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
                        <button type="button" className="button button-primary">발표자 선정</button>
                        <button type="button" className="button button-outline">강제 퇴장</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default LectureRoom00;
