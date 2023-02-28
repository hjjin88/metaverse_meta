
import { useEffect, useState } from "react";

const ProfileDrawer = ({setPopName }) => {

    const [view, setView] = useState(false); 

    return (
        <>
        <div className="layer" />
        <div className="ProfileDrawer">
            <div class="layer-pop">
                <dl class="layer-wrap">
                    <dt class="layer-top">
                        <button type="button" className="subclose close16" onClick={(e) => {setPopName();}} />
                    </dt>
                    <dd class="layer-cont">
                        <div class="login-wrap">
                            <h1 class="login-tit">환영합니다!</h1>
                            <div class="form-join">
                                <dl>
                                    <dt class="form-label">
                                        <label for="name">닉네임 입력 <span>(영문/숫자/한글 2~8자 이내로 입력)</span></label>
                                    </dt>
                                    <dd>
                                        <div class="form-control">
                                            <input type="text" id="name" placeholder="닉네임을 입력하세요." />
                                        </div>
                                        <p class="form-notice error">Support text / 에러문구</p>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt class="form-label"><label for="avatar-radio">아바타 선택</label></dt>
                                    <dd class="avatar">
                                        <div class="form-control-group">
                                            <div class="profile-img">
                                                <img src="/resources/img/img_avatar.svg" alt="아바타 기본 이미지" />
                                                <div class="form-check">
                                                    <input type="radio" name="radioSet" id="radio1" checked/>
                                                    <label for="radio1">남성 기본</label>
                                                </div>
                                            </div>
                                            <div class="profile-img">
                                                <img src="/resources/img/img_avatar.svg" alt="아바타 기본 이미지" />
                                                <div class="form-check">
                                                    <input type="radio" name="radioSet" id="radio2" />
                                                    <label for="radio2">여성 기본</label>
                                                </div>
                                            </div>
                                        </div>
                                        <p class="form-notice">아바타 외형은 마이룸에서 언제든지 변경 가능합니다.</p>
                                    </dd>
                                </dl>
                                <div class="btn-group">
                                    <button type="button" 
                                    className={`sec-btn-L${view ? "on02" : "off01"} tit-20Gy3`}
                                    onClick={() => {setView(!view)}} 
                                    >입장</button>
                                    <p class="form-notice">이미 보유한 아바타로 입장하시려면<br /> 로그인하세요.</p>
                                    <button type="button" class="sec-btn-L tit-20Gy3 mt13">로그인</button>
                                </div>                               
                            </div>
                        </div>                        
                    </dd>
                </dl>
            </div>
        </div>
        </>
    )
}
export default ProfileDrawer;
