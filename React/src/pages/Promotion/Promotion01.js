
import { useEffect, useState } from "react";

const Promotion01 = ({setPopName }) => {

    return (
        <>
        <div className="Promotion CtPop">
            <button type="button" className="subclose close16" onClick={(e) => {setPopName();}} />
            <div className="popTit">홍보물 설정</div>
            <div className="con-wrap">
                <div className="con-inner-col">
                    <div class="modal-body">
                        <h6 class="h6-title pb20">홍보물 썸네일 설정</h6>
                        <div class="box-gray type1 mb40">
                            <p class="mb10"><img src="../resources/img/sendSquare36.svg" alt="" /></p>
                            <span class="txt">※ 1MB 미만의 jpg, jpeg, png, bmp 이미지만 설정할 수 있습니다.</span>
                            <button type="button" class="fileselect mt20">파일선택 &gt;</button>
                        </div>
                        <h6 class="h6-title pb20">홍보물 이미지 설정</h6>
                        <div class="box-gray type1 mb30">
                            <p class="mb10"><img src="../resources/img/sendSquare36.svg" alt="" /></p>
                            <span class="txt">※ 3MB 미만의 jpg, jpeg, png, bmp 이미지만 설정할 수 있습니다.</span>
                            <button type="button" class="fileselect mt20">파일선택 &gt;</button>
                        </div>
                    </div>
                    <div className="center mb10">
                        <button type="button" className="sec-btn-L tit-20Gy3">확인</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Promotion01;
