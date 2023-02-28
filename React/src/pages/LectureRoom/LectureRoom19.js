const LectureRoom00 = ({setPopName }) => {
    return (
        <>
            <div className="layer" />
            <div className="lecture-room layer-right-top">
                <button type="button" className="subclose close16" onClick={(e) => {setPopName();}} />
                <div className="popTit">###title</div>
                <div className="layer-wrap">
                    <div className="layer-body">
                        <div className="lecture-call-list">
                            <div className="lecture-call-item"></div>
                            <div className="lecture-call-item"></div>
                            <div className="lecture-call-item">

                            </div>
                            <button type={"button"} className="lecture-call-item">발표자를 추가해주세요</button>
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
