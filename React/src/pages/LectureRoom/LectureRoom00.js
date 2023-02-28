const LectureRoom00 = ({setPopName }) => {
    return (
        <>
            <div className="lecture-room CtPop">
                <button type="button" className="subclose close16" onClick={(e) => {setPopName();}} />
                <div className="popTit">###title</div>
                <div className="con-wrap">
                    <div className="con-inner-col">
                        <div class="modal-body">
                            ####content
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
export default LectureRoom00;
