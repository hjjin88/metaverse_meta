import { useEffect, useState } from "react";

const ConsEntrance03 = ({ popName, setPopName,setRequest }) => {

    const [MikeOn, setMikeOn] = useState(false);
    const [CamOn, setCamOn] = useState(false);

    const [isOn, setisOn] = useState(false);
    const toggleHandler = () => {
    setisOn(!isOn)
    }
    
    return (
    <>
        <div className="layer" />
        <div className="ConsEntrance ty-01">
            <button type="button" className="subclose close16" onClick={(e) => {setPopName();}}/>
            <div className="popTit">상담실 입장</div>
            <div className="con-wrap">
                <div className="con-inner-col txt-17Bk">
                    <dl className="set-guide">
                        <dt>마이크/카메라 연결 확인</dt>
                        <dd>설정 &gt; 개인정보 및 보안 &gt; 권한에서 카메라와 마이크 권한 허용이 되어있는지 확인하세요.</dd>
                    </dl>
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
                    {isOn && 
                        <div className="requesting">
                            <dl>
                                <dt className="tit-17Gy2">상담실 입장 요청중입니다</dt>
                                <dd className="txt-13Gy5">상담사가 수락해야 입장하실 수 있습니다</dd>
                            </dl>
                            <div className="tit-32Pu time">59초</div>
                        </div>
                    }
                    <dl className="notify pdb30">
                        <dt className="tit-13Bk pdb13">상담사 공지사항</dt>
                        <dd className="txt-13Gy5">
                            학생상담센터에서는 서울시정신건강복지센터에서 개발한 온라인 자가관리 프로그램 '마음터치'를 <br/>
                            연동해서 운영하고 있습니다. 마음터치는 우울, 불안을 객관적으로 검토하고 스스로 관리할 수 있는 <br/>
                            방법에 대해 배움으로써 우울, 불안 상태에서 빠져나올 수 있도록 돕는 온라인 자가관리(Self-help) <br/>
                            프로그램입니다.<br/>
                            <br/>
                            불안 자가관리 프로그램 마음터치 그린 개요<br/>
                            - 목적 : 가벼운 불안에 대한 자가관리 능력 향상<br/>
                            - 7회기<br/>
                        </dd>
                    </dl>
                    <dl className={`" ${isOn ? "none" : null }`}>
                        <dt className="tit-13Bk pdb13">입장 요청 메시지</dt>
                        <dd className="txt-13Gy5 pdb10">
                            <div className="write-con msg">
                                <textarea type="text" maxlength="50"  placeholder="최대 50자까지 입력하세요."/>
                            </div>
                        </dd>
                    </dl>
                </div>
            </div>
            <div className="followBtns">
                <button type="button" 
                    className={`"sec-btn${isOn ? "-L" : "-M" } tit-16Gy3`}
                    onClick={(e) => {setPopName();}}>
                    취소
                </button>
                <button type="button" 
                    className={`"sec-btn-M-on02 tit-16Gy3 ${isOn ? "none" : null }`}
                    onClick={toggleHandler}>
                    상담실 입장 요청
                </button>
            </div>
        </div>
    </>
    );
};
export default ConsEntrance03;
