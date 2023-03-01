import { useState } from "react";

const LectureRoom00 = ({setPopName }) => {
    const [MikeToggle, setMikeToggle] = useState(false);
    const [MikeOn, setMikeOn] = useState(false);
    const [CamOn, setCamOn] = useState(false);

    return (
        <>
            <div className="layer" />
            <div className="lecture-room MicCamSet layer-center ">
                <button type="button" className="subclose close16" onClick={(e) => {setPopName();}} />
                <div className="popTit">강의실 설정</div>
                <div className="layer-wrap">
                    <div className="layer-body">
                        <div className="lecture-setting">
                            <div className="con-row">
                                <div className="con-col">
                                    <div className="cam-view">
                                        <div className="cam-box">
                                            <video className="video" src="" />
                                            <p>카메라 없음</p>
                                            <div className="cam-box-btns">
                                                <button type="button" className="btn-cam" onClick={() => {setCamOn(!CamOn)}}>
                                                    <div className={`camOff ${CamOn ? "camOn" : "camOff"}`}/>
                                                </button>
                                                <button type="button" className="btn-cam" onClick={() => {setMikeOn(!MikeOn)}}>
                                                    <div className={`mikeOff ${MikeOn ? "mikeOn" : "mikeOff"}`}/>
                                                </button>
                                            </div>
                                        </div>
                                        <p className="cam-notice">
                                            마이크/카메라 연결 확인
                                            <small>(설정 &gt; 개인정보 및 보안 &gt; 권한에서 카메라와 마이크 권한 허용이 되어있는지 확인하세요.</small>
                                        </p>
                                    </div>
                                </div>
                                <div className="con-col">
                                    <div className="setting-option">
                                        <h3 className="ct-title-sm">강사</h3>
                                        <div className="ui-dropdown">
                                            <button type="button" onClick={() => {setMikeToggle(!MikeToggle)}}>
                                                기본값-마이크배열(디지털마이크){" "}{MikeToggle ? <span className="downArrow"></span> : <span className="downArrow up"></span>}
                                            </button>
                                            {MikeToggle&&
                                                <div className="dropdown-layer">
                                                    <button type="button">강사님</button>
                                                </div>
                                            }
                                        </div>

                                        <h3 className="ct-title-sm">진행자</h3>
                                        <div className="lecture-assistant">
                                            <ul>
                                                <li className="Profile-set">
                                                    <div className="Profile-con">
                                                        <div>
                                                            <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                                                        </div>
                                                        <button type="button" className="IDBox" onClick={ e => { setPopName('MyProfileView'); }}>
                                                            <p className="ID">DDDDDDDDGG</p>
                                                            <p>방장</p>
                                                        </button>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                        <h3 className="ct-title-sm">강의 정보를 작성해 주세요.</h3>
                                        <div className="form-textarea">
                                        <textarea name="" id="" cols="30" placeholder="
                                        강의 정보는 1~100자 이내로 입력해주세요.&#13;&#10;
                                        ex)&#13;&#10;
                                        강사 : 홍길동&#13;&#10;
                                        강의제목 : 한국어 초급&#13;&#10;
                                        유의사항 : 수업 시간 엄수"></textarea>
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
