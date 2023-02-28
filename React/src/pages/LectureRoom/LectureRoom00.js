const LectureRoom00 = ({setPopName }) => {
    return (
        <>
            <div className="layer" />
            <div className="lecture-room layer-right-center">
                <button type="button" className="subclose close16" onClick={(e) => {setPopName();}} />
                <div className="popTit">###title</div>
                <div className="layer-wrap">
                    <div className="layer-body">
                        <div style={{height: '1000px'}}>####content</div>
                    </div>
                    <div className="layer-footer center mb10">
                        <button type="button" className="sec-btn-L tit-20Gy3">확인</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default LectureRoom00;
