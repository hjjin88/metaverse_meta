
import { useEffect, useState } from "react";

const Promotion08 = ({setPopName }) => {

    return (
        <>
        <div className="Promotion CtPop">
            <button type="button" className="subclose close16" onClick={(e) => {setPopName();}} />
            <div className="popTit">게시판 설정</div>
            <div className="con-wrap">
                <div className="con-inner-col">
                    <div class="modal-body">
                        <h6 class="h6-title pb20">동영상 썸네일 설정</h6>
                        <div class="box-gray mb40">
                            <img className="final-video" src="../resources/img/bg.png" alt="" />
                            <div class="btn-wrap position-absolute box-right">
                                <button type="button" class="btn btn-white btn-sm">변경</button>
                                <button type="button" class="btn btn-white btn-sm">삭제</button>
                            </div>
                        </div>
                        <h6 class="h6-title pb20">동영상 설정</h6>
                        <div class="box-gray mb40">
                            {/* <video className="final-video" src="" alt="" /> */}
                            <iframe width="100%" height="184px" src="https://www.youtube.com/embed/wG8oZF_32hM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <div class="btn-wrap position-absolute box-right">
                                <button type="button" class="btn btn-white btn-sm">변경</button>
                                <button type="button" class="btn btn-white btn-sm">삭제</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="center mb30">
                <button type="button" className="sec-btn-L-on02 tit-20Gy3">확인</button>
            </div>
        </div>
        </>
    )
}
export default Promotion08;
