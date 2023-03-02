import { useState } from "react";

const ToggleItem = ({placeholder, item = []}) => {
    const [SelectToggle, setSelectToggle] = useState(false);

    return (
        <div className={`request-select${SelectToggle ? ' request-select-toggle' : ''}`}>
            <button className="request-select-head" onClick={() => setSelectToggle((prev) => !prev)}>
                <span>{placeholder}</span>
            </button>

            {SelectToggle && <div className="request-select-list">
                {item.map((value, key) => (
                    <button type={"button"} className="request-select-item" key={key}>{value}</button>))}
            </div>}
        </div>
    );
};
const LectureRoom00 = ({setPopName}) => {
    const [MikeToggle, setMikeToggle] = useState(false);
    const [MikeOn, setMikeOn] = useState(false);
    const [CamOn, setCamOn] = useState(false);

    return (
        <>
            <div className="layer" />
            <div className="lecture-room MicCamSet layer-center ">
                <button
                    type="button" className="subclose close16" onClick={(e) => {
                    setPopName();
                }}
                />
                <div className="layer-wrap">
                    <div className="layer-head">강의실 설정</div>
                    <div className="layer-body">
                        <div className="lecture-setting">
                            <div className="con-row">
                                <div className="con-col">
                                    <div className="cam-view">
                                        <div className="webcam">
                                            <video className="webcam-video" src="" />
                                            <p className="webcam-none-camera">카메라 없음</p>
                                            <div className="webcam-info">
                                                <div className="webcam-buttons">
                                                    <button
                                                        type="button" className="webcam-icon" onClick={() => {
                                                        setCamOn(!CamOn)
                                                    }}
                                                    >
                                                        <div className={`camOff ${CamOn ? "camOn" : "camOff"}`} />
                                                    </button>
                                                    <button
                                                        type="button" className="webcam-icon" onClick={() => {
                                                        setMikeOn(!MikeOn)
                                                    }}
                                                    >
                                                        <div className={`mikeOff ${MikeOn ? "mikeOn" : "mikeOff"}`} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="cam-notice">
                                            마이크/카메라 연결 확인
                                            <small>(설정 &gt; 개인정보 및 보안 &gt; 권한에서 카메라와 마이크 권한 허용이 되어있는지 확인하세요.</small>
                                        </p>
                                    </div>
                                </div>
                                <div className="con-col">
                                    <div className="request-group">
                                        <strong className="request-title">강사</strong>
                                        <ToggleItem placeholder="강사님A" item={['강사님A', '강사님B']} />
                                    </div>

                                    <div className="request-group">
                                        <strong className="request-title">진행자</strong>
                                        <ul className="lecture-assistant popCon ty-01">
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

                                    <div className="request-group">
                                        <strong className="request-title">강의 정보를 작성해 주세요.</strong>
                                        <div className="request-textarea">
                                                <textarea
                                                    name="" id="" cols="30" placeholder="
                                                    강의 정보는 1~100자 이내로 입력해주세요.&#13;&#10;
                                                    ex)&#13;&#10;
                                                    강사 : 홍길동&#13;&#10;
                                                    강의제목 : 한국어 초급&#13;&#10;
                                                    유의사항 : 수업 시간 엄수"
                                                ></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="layer-footer">
                        <button type="button" className="sec-btn-L tit-20Gy3">확인</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default LectureRoom00;
