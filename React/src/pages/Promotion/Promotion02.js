
import { useEffect, useState } from "react";

const Promotion02 = ({setPopName }) => {

    const [Check, setCheck] = useState(false); 

    return (
        <>
        <div className="Promotion CtPop">
            <button type="button" className="subclose close16" onClick={(e) => {setPopName();}} />
            <div className="popTit">이미지 선택</div>
            <div className="final-check">
                <label class="checkbox-label">
                    <input type="checkbox" class="checkbox-input" />
                    <button 
                    className={`checkbox-box ${Check ? "on" : null }`}
                    onClick={() => {setCheck(!Check)}} 
                    />
                </label>
            </div>
            <div className="con-wrap">
                <div className="con-inner-col">
                    <div class="modal-body">
                        <h6 class="h6-title type1 pb20">이미지 선택 <span class="text-small">(1MB 미만의 jpg, jpeg, png, bmp 이미지만 설정할 수 있습니다.)</span></h6>
                        <div class="thumblist">
                            <div>
                                <label class="checkbox-label">
                                    <input type="checkbox" class="checkbox-input" />
                                    <button 
                                    className={`checkbox-box ${Check ? "on" : null }`}
                                    onClick={() => {setCheck(!Check)}} 
                                    />
                                    <img src="../resources/img/bg.png" alt="" />
                                </label>
                            </div>
                            <div>
                                <label class="checkbox-label">
                                    <input type="checkbox" class="checkbox-input" />
                                    <button 
                                    className={`checkbox-box ${Check ? "on" : null }`}
                                    onClick={() => {setCheck(!Check)}} 
                                    />
                                    <img src="../resources/img/bg.png" alt="" />
                                </label>
                            </div>
                            <div>
                                <label class="checkbox-label">
                                    <input type="checkbox" class="checkbox-input" />
                                    <button 
                                    className={`checkbox-box ${Check ? "on" : null }`}
                                    onClick={() => {setCheck(!Check)}} 
                                    />
                                    <img src="../resources/img/bg.png" alt="" />
                                </label>
                            </div>
                            <div>
                                <label class="checkbox-label">
                                    <input type="checkbox" class="checkbox-input" />
                                    <button 
                                    className={`checkbox-box ${Check ? "on" : null }`}
                                    onClick={() => {setCheck(!Check)}} 
                                    />
                                    <img src="../resources/img/bg.png" alt="" />
                                </label>
                            </div>
                            <div>
                                <label class="checkbox-label">
                                    <input type="checkbox" class="checkbox-input" />
                                    <button 
                                    className={`checkbox-box ${Check ? "on" : null }`}
                                    onClick={() => {setCheck(!Check)}} 
                                    />
                                    <img src="../resources/img/bg.png" alt="" />
                                </label>
                            </div>
                            <div>
                                <label class="checkbox-label">
                                    <input type="checkbox" class="checkbox-input" />
                                    <button 
                                    className={`checkbox-box ${Check ? "on" : null }`}
                                    onClick={() => {setCheck(!Check)}} 
                                    />
                                    <img src="../resources/img/bg.png" alt="" />
                                </label>
                            </div>
                            <div>
                                <label class="checkbox-label">
                                    <input type="checkbox" class="checkbox-input" />
                                    <button 
                                    className={`checkbox-box ${Check ? "on" : null }`}
                                    onClick={() => {setCheck(!Check)}} 
                                    />
                                    <img src="../resources/img/bg.png" alt="" />
                                </label>
                            </div>
                            <div>
                                <label class="checkbox-label">
                                    <input type="checkbox" class="checkbox-input" />
                                    <button 
                                    className={`checkbox-box ${Check ? "on" : null }`}
                                    onClick={() => {setCheck(!Check)}} 
                                    />
                                    <img src="../resources/img/bg.png" alt="" />
                                </label>
                            </div>
                            <div>
                                <label class="checkbox-label">
                                    <input type="checkbox" class="checkbox-input" />
                                    <button 
                                    className={`checkbox-box ${Check ? "on" : null }`}
                                    onClick={() => {setCheck(!Check)}} 
                                    />
                                    <img src="../resources/img/bg.png" alt="" />
                                </label>
                            </div>
                            <div>
                                <label class="checkbox-label">
                                    <input type="checkbox" class="checkbox-input" />
                                    <button 
                                    className={`checkbox-box ${Check ? "on" : null }`}
                                    onClick={() => {setCheck(!Check)}} 
                                    />
                                    <img src="../resources/img/bg.png" alt="" />
                                </label>
                            </div>
                            <div>
                                <label class="checkbox-label">
                                    <input type="checkbox" class="checkbox-input" />
                                    <button 
                                    className={`checkbox-box ${Check ? "on" : null }`}
                                    onClick={() => {setCheck(!Check)}} 
                                    />
                                    <img src="../resources/img/bg.png" alt="" />
                                </label>
                            </div>
                            <div>
                                <label class="checkbox-label">
                                    <input type="checkbox" class="checkbox-input" />
                                    <button 
                                    className={`checkbox-box ${Check ? "on" : null }`}
                                    onClick={() => {setCheck(!Check)}} 
                                    />
                                    <img src="../resources/img/bg.png" alt="" />
                                </label>
                            </div>
                            <div>
                                <label class="checkbox-label">
                                    <input type="checkbox" class="checkbox-input" />
                                    <button 
                                    className={`checkbox-box ${Check ? "on" : null }`}
                                    onClick={() => {setCheck(!Check)}} 
                                    />
                                    <img src="../resources/img/bg.png" alt="" />
                                </label>
                            </div>
                            <div>
                                <label class="checkbox-label">
                                    <input type="checkbox" class="checkbox-input" />
                                    <button 
                                    className={`checkbox-box ${Check ? "on" : null }`}
                                    onClick={() => {setCheck(!Check)}} 
                                    />
                                    <img src="../resources/img/bg.png" alt="" />
                                </label>
                            </div>
                            <div>
                                <label class="checkbox-label">
                                    <input type="checkbox" class="checkbox-input" />
                                    <button 
                                    className={`checkbox-box ${Check ? "on" : null }`}
                                    onClick={() => {setCheck(!Check)}} 
                                    />
                                    <img src="../resources/img/bg.png" alt="" />
                                </label>
                            </div>
                            <div>
                                <label class="checkbox-label">
                                    <input type="checkbox" class="checkbox-input" />
                                    <button 
                                    className={`checkbox-box ${Check ? "on" : null }`}
                                    onClick={() => {setCheck(!Check)}} 
                                    />
                                    <img src="../resources/img/bg.png" alt="" />
                                </label>
                            </div>
                            <div>
                                <label class="checkbox-label">
                                    <input type="checkbox" class="checkbox-input" />
                                    <button 
                                    className={`checkbox-box ${Check ? "on" : null }`}
                                    onClick={() => {setCheck(!Check)}} 
                                    />
                                    <img src="../resources/img/bg.png" alt="" />
                                </label>
                            </div>
                            <div>
                                <label class="checkbox-label">
                                    <input type="checkbox" class="checkbox-input" />
                                    <button 
                                    className={`checkbox-box ${Check ? "on" : null }`}
                                    onClick={() => {setCheck(!Check)}} 
                                    />
                                    <img src="../resources/img/bg.png" alt="" />
                                </label>
                            </div>
                            <div>
                                <label class="checkbox-label">
                                    <input type="checkbox" class="checkbox-input" />
                                    <button 
                                    className={`checkbox-box ${Check ? "on" : null }`}
                                    onClick={() => {setCheck(!Check)}} 
                                    />
                                    <img src="../resources/img/bg.png" alt="" />
                                </label>
                            </div>
                            <div>
                                <label class="checkbox-label">
                                    <input type="checkbox" class="checkbox-input" />
                                    <button 
                                    className={`checkbox-box ${Check ? "on" : null }`}
                                    onClick={() => {setCheck(!Check)}} 
                                    />
                                    <img src="../resources/img/bg.png" alt="" />
                                </label>
                            </div>
                            <div>
                                <label class="checkbox-label">
                                    <input type="checkbox" class="checkbox-input" />
                                    <button 
                                    className={`checkbox-box ${Check ? "on" : null }`}
                                    onClick={() => {setCheck(!Check)}} 
                                    />
                                    <img src="../resources/img/bg.png" alt="" />
                                </label>
                            </div>
                            <div>
                                <label class="checkbox-label">
                                    <input type="checkbox" class="checkbox-input" />
                                    <button 
                                    className={`checkbox-box ${Check ? "on" : null }`}
                                    onClick={() => {setCheck(!Check)}} 
                                    />
                                    <img src="../resources/img/bg.png" alt="" />
                                </label>
                            </div>
                            <div>
                                <label class="checkbox-label">
                                    <input type="checkbox" class="checkbox-input" />
                                    <button 
                                    className={`checkbox-box ${Check ? "on" : null }`}
                                    onClick={() => {setCheck(!Check)}} 
                                    />
                                    <img src="../resources/img/bg.png" alt="" />
                                </label>
                            </div>
                            <div>
                                <label class="checkbox-label">
                                    <input type="checkbox" class="checkbox-input" />
                                    <button 
                                    className={`checkbox-box ${Check ? "on" : null }`}
                                    onClick={() => {setCheck(!Check)}} 
                                    />
                                    <img src="../resources/img/bg.png" alt="" />
                                </label>
                            </div>
                            <div>
                                <label class="checkbox-label">
                                    <input type="checkbox" class="checkbox-input" />
                                    <button 
                                    className={`checkbox-box ${Check ? "on" : null }`}
                                    onClick={() => {setCheck(!Check)}} 
                                    />
                                    <img src="../resources/img/bg.png" alt="" />
                                </label>
                            </div>
                            <div>
                                <label class="checkbox-label">
                                    <input type="checkbox" class="checkbox-input" />
                                    <button 
                                    className={`checkbox-box ${Check ? "on" : null }`}
                                    onClick={() => {setCheck(!Check)}} 
                                    />
                                    <img src="../resources/img/bg.png" alt="" />
                                </label>
                            </div>
                            <div>
                                <label class="checkbox-label">
                                    <input type="checkbox" class="checkbox-input" />
                                    <button 
                                    className={`checkbox-box ${Check ? "on" : null }`}
                                    onClick={() => {setCheck(!Check)}} 
                                    />
                                    <img src="../resources/img/bg.png" alt="" />
                                </label>
                            </div>
                            <div>
                                <label class="checkbox-label">
                                    <input type="checkbox" class="checkbox-input" />
                                    <button 
                                    className={`checkbox-box ${Check ? "on" : null }`}
                                    onClick={() => {setCheck(!Check)}} 
                                    />
                                    <img src="../resources/img/bg.png" alt="" />
                                </label>
                            </div>
                            <div>
                                <label class="checkbox-label">
                                    <input type="checkbox" class="checkbox-input" />
                                    <button 
                                    className={`checkbox-box ${Check ? "on" : null }`}
                                    onClick={() => {setCheck(!Check)}} 
                                    />
                                    <img src="../resources/img/bg.png" alt="" />
                                </label>
                            </div>
                            <div>
                                <label class="checkbox-label">
                                    <input type="checkbox" class="checkbox-input" />
                                    <button 
                                    className={`checkbox-box ${Check ? "on" : null }`}
                                    onClick={() => {setCheck(!Check)}} 
                                    />
                                    <img src="../resources/img/bg.png" alt="" />
                                </label>
                            </div>
                            <div>
                                <label class="checkbox-label">
                                    <input type="checkbox" class="checkbox-input" />
                                    <button 
                                    className={`checkbox-box ${Check ? "on" : null }`}
                                    onClick={() => {setCheck(!Check)}} 
                                    />
                                    <img src="../resources/img/bg.png" alt="" />
                                </label>
                            </div>
                            <div>
                                <label class="checkbox-label">
                                    <input type="checkbox" class="checkbox-input" />
                                    <button 
                                    className={`checkbox-box ${Check ? "on" : null }`}
                                    onClick={() => {setCheck(!Check)}} 
                                    />
                                    <img src="../resources/img/bg.png" alt="" />
                                </label>
                            </div>
                            <div>
                                <label class="checkbox-label">
                                    <input type="checkbox" class="checkbox-input" />
                                    <button 
                                    className={`checkbox-box ${Check ? "on" : null }`}
                                    onClick={() => {setCheck(!Check)}} 
                                    />
                                    <img src="../resources/img/bg.png" alt="" />
                                </label>
                            </div>
                            <div>
                                <label class="checkbox-label">
                                    <input type="checkbox" class="checkbox-input" />
                                    <button 
                                    className={`checkbox-box ${Check ? "on" : null }`}
                                    onClick={() => {setCheck(!Check)}} 
                                    />
                                    <img src="../resources/img/bg.png" alt="" />
                                </label>
                            </div>
                            <div>
                                <label class="checkbox-label">
                                    <input type="checkbox" class="checkbox-input" />
                                    <button 
                                    className={`checkbox-box ${Check ? "on" : null }`}
                                    onClick={() => {setCheck(!Check)}} 
                                    />
                                    <img src="../resources/img/bg.png" alt="" />
                                </label>
                            </div>
                            <div>
                                <label class="checkbox-label">
                                    <input type="checkbox" class="checkbox-input" />
                                    <button 
                                    className={`checkbox-box ${Check ? "on" : null }`}
                                    onClick={() => {setCheck(!Check)}} 
                                    />
                                    <img src="../resources/img/bg.png" alt="" />
                                </label>
                            </div>
                            <div>
                                <label class="checkbox-label">
                                    <input type="checkbox" class="checkbox-input" />
                                    <button 
                                    className={`checkbox-box ${Check ? "on" : null }`}
                                    onClick={() => {setCheck(!Check)}} 
                                    />
                                    <img src="../resources/img/bg.png" alt="" />
                                </label>
                            </div>
                            <div>
                                <label class="checkbox-label">
                                    <input type="checkbox" class="checkbox-input" />
                                    <button 
                                    className={`checkbox-box ${Check ? "on" : null }`}
                                    onClick={() => {setCheck(!Check)}} 
                                    />
                                    <img src="../resources/img/bg.png" alt="" />
                                </label>
                            </div>
                            <div>
                                <label class="checkbox-label">
                                    <input type="checkbox" class="checkbox-input" />
                                    <button 
                                    className={`checkbox-box ${Check ? "on" : null }`}
                                    onClick={() => {setCheck(!Check)}} 
                                    />
                                    <img src="../resources/img/bg.png" alt="" />
                                </label>
                            </div>
                            <div>
                                <label class="checkbox-label">
                                    <input type="checkbox" class="checkbox-input" />
                                    <button 
                                    className={`checkbox-box ${Check ? "on" : null }`}
                                    onClick={() => {setCheck(!Check)}} 
                                    />
                                    <img src="../resources/img/bg.png" alt="" />
                                </label>
                            </div>
                            <div>
                                <label class="checkbox-label">
                                    <input type="checkbox" class="checkbox-input" />
                                    <button 
                                    className={`checkbox-box ${Check ? "on" : null }`}
                                    onClick={() => {setCheck(!Check)}} 
                                    />
                                    <img src="../resources/img/bg.png" alt="" />
                                </label>
                            </div>
                            <div>
                                <label class="checkbox-label">
                                    <input type="checkbox" class="checkbox-input" />
                                    <button 
                                    className={`checkbox-box ${Check ? "on" : null }`}
                                    onClick={() => {setCheck(!Check)}} 
                                    />
                                    <img src="../resources/img/bg.png" alt="" />
                                </label>
                            </div>
                            <div>
                                <label class="checkbox-label">
                                    <input type="checkbox" class="checkbox-input" />
                                    <button 
                                    className={`checkbox-box ${Check ? "on" : null }`}
                                    onClick={() => {setCheck(!Check)}} 
                                    />
                                    <img src="../resources/img/bg.png" alt="" />
                                </label>
                            </div>
                            <div>
                                <label class="checkbox-label">
                                    <input type="checkbox" class="checkbox-input" />
                                    <button 
                                    className={`checkbox-box ${Check ? "on" : null }`}
                                    onClick={() => {setCheck(!Check)}} 
                                    />
                                    <img src="../resources/img/bg.png" alt="" />
                                </label>
                            </div>
                            <div>
                                <label class="checkbox-label">
                                    <input type="checkbox" class="checkbox-input" />
                                    <button 
                                    className={`checkbox-box ${Check ? "on" : null }`}
                                    onClick={() => {setCheck(!Check)}} 
                                    />
                                    <img src="../resources/img/bg.png" alt="" />
                                </label>
                            </div>
                            <div>
                                <label class="checkbox-label">
                                    <input type="checkbox" class="checkbox-input" />
                                    <button 
                                    className={`checkbox-box ${Check ? "on" : null }`}
                                    onClick={() => {setCheck(!Check)}} 
                                    />
                                    <img src="../resources/img/bg.png" alt="" />
                                </label>
                            </div>
                            <div>
                                <label class="checkbox-label">
                                    <input type="checkbox" class="checkbox-input" />
                                    <button 
                                    className={`checkbox-box ${Check ? "on" : null }`}
                                    onClick={() => {setCheck(!Check)}} 
                                    />
                                    <img src="../resources/img/bg.png" alt="" />
                                </label>
                            </div>
                            <div>
                                <label class="checkbox-label">
                                    <input type="checkbox" class="checkbox-input" />
                                    <button 
                                    className={`checkbox-box ${Check ? "on" : null }`}
                                    onClick={() => {setCheck(!Check)}} 
                                    />
                                    <img src="../resources/img/bg.png" alt="" />
                                </label>
                            </div>
                            <div>
                                <label class="checkbox-label">
                                    <input type="checkbox" class="checkbox-input" />
                                    <button 
                                    className={`checkbox-box ${Check ? "on" : null }`}
                                    onClick={() => {setCheck(!Check)}} 
                                    />
                                    <img src="../resources/img/bg.png" alt="" />
                                </label>
                            </div>
                            <div>
                                <label class="checkbox-label">
                                    <input type="checkbox" class="checkbox-input" />
                                    <button 
                                    className={`checkbox-box ${Check ? "on" : null }`}
                                    onClick={() => {setCheck(!Check)}} 
                                    />
                                    <img src="../resources/img/bg.png" alt="" />
                                </label>
                            </div>
                            <div>
                                <label class="checkbox-label">
                                    <input type="checkbox" class="checkbox-input" />
                                    <button 
                                    className={`checkbox-box ${Check ? "on" : null }`}
                                    onClick={() => {setCheck(!Check)}} 
                                    />
                                    <img src="../resources/img/bg.png" alt="" />
                                </label>
                            </div>
                            <div>
                                <label class="checkbox-label">
                                    <input type="checkbox" class="checkbox-input" />
                                    <button 
                                    className={`checkbox-box ${Check ? "on" : null }`}
                                    onClick={() => {setCheck(!Check)}} 
                                    />
                                    <img src="../resources/img/bg.png" alt="" />
                                </label>
                            </div>
                            <div>
                                <label class="checkbox-label">
                                    <input type="checkbox" class="checkbox-input" />
                                    <button 
                                    className={`checkbox-box ${Check ? "on" : null }`}
                                    onClick={() => {setCheck(!Check)}} 
                                    />
                                    <img src="../resources/img/bg.png" alt="" />
                                </label>
                            </div>
                            <div>
                                <label class="checkbox-label">
                                    <input type="checkbox" class="checkbox-input" />
                                    <button 
                                    className={`checkbox-box ${Check ? "on" : null }`}
                                    onClick={() => {setCheck(!Check)}} 
                                    />
                                    <img src="../resources/img/bg.png" alt="" />
                                </label>
                            </div>
                            <div>
                                <label class="checkbox-label">
                                    <input type="checkbox" class="checkbox-input" />
                                    <button 
                                    className={`checkbox-box ${Check ? "on" : null }`}
                                    onClick={() => {setCheck(!Check)}} 
                                    />
                                    <img src="../resources/img/bg.png" alt="" />
                                </label>
                            </div>
                            <div>
                                <label class="checkbox-label">
                                    <input type="checkbox" class="checkbox-input" />
                                    <button 
                                    className={`checkbox-box ${Check ? "on" : null }`}
                                    onClick={() => {setCheck(!Check)}} 
                                    />
                                    <img src="../resources/img/bg.png" alt="" />
                                </label>
                            </div>
                            <div>
                                <label class="checkbox-label">
                                    <input type="checkbox" class="checkbox-input" />
                                    <button 
                                    className={`checkbox-box ${Check ? "on" : null }`}
                                    onClick={() => {setCheck(!Check)}} 
                                    />
                                    <img src="../resources/img/bg.png" alt="" />
                                </label>
                            </div>
                            <div>
                                <label class="checkbox-label">
                                    <input type="checkbox" class="checkbox-input" />
                                    <button 
                                    className={`checkbox-box ${Check ? "on" : null }`}
                                    onClick={() => {setCheck(!Check)}} 
                                    />
                                    <img src="../resources/img/bg.png" alt="" />
                                </label>
                            </div>
                            <div>
                                <label class="checkbox-label">
                                    <input type="checkbox" class="checkbox-input" />
                                    <button 
                                    className={`checkbox-box ${Check ? "on" : null }`}
                                    onClick={() => {setCheck(!Check)}} 
                                    />
                                    <img src="../resources/img/bg.png" alt="" />
                                </label>
                            </div>
                            <div>
                                <label class="checkbox-label">
                                    <input type="checkbox" class="checkbox-input" />
                                    <button 
                                    className={`checkbox-box ${Check ? "on" : null }`}
                                    onClick={() => {setCheck(!Check)}} 
                                    />
                                    <img src="../resources/img/bg.png" alt="" />
                                </label>
                            </div>
                            <div>
                                <label class="checkbox-label">
                                    <input type="checkbox" class="checkbox-input" />
                                    <button 
                                    className={`checkbox-box ${Check ? "on" : null }`}
                                    onClick={() => {setCheck(!Check)}} 
                                    />
                                    <img src="../resources/img/bg.png" alt="" />
                                </label>
                            </div>
                            <div>
                                <label class="checkbox-label">
                                    <input type="checkbox" class="checkbox-input" />
                                    <button 
                                    className={`checkbox-box ${Check ? "on" : null }`}
                                    onClick={() => {setCheck(!Check)}} 
                                    />
                                    <img src="../resources/img/bg.png" alt="" />
                                </label>
                            </div>
                            <div>
                                <label class="checkbox-label">
                                    <input type="checkbox" class="checkbox-input" />
                                    <button 
                                    className={`checkbox-box ${Check ? "on" : null }`}
                                    onClick={() => {setCheck(!Check)}} 
                                    />
                                    <img src="../resources/img/bg.png" alt="" />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="center mb30">
                <button 
                className={`sec-btn-L ${Check ? "on02" : null } tit-20Gy3`}
                onClick={(e) => {setPopName('Promotion03');}}
                >
                확인
                </button>
            </div>
        </div>
        </>
    )
}
export default Promotion02;
