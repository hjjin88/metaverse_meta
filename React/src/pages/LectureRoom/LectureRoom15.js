const LectureRoom15 = ({setPopName }) => {
    return (
        <>
            <div className="layer" />
            <div className="lecture-room layer-center">
                <button type="button" className="subclose close16" onClick={(e) => {setPopName();}} />
                <div className="layer-wrap">
                    <div className="layer-head">###title</div>
                    <div className="layer-body">
                        <div className="lecture-chromakey">
                            <div className="lecture-chromakey-video">
                                <video className="video" src="http://amssamples.streaming.mediaservices.windows.net/2e91931e-0d29-482b-a42b-9aadc93eb825/AzurePromo.mp4" />
                                <label>
                                    <input type="checkbox"/>
                                    <span>크로마키</span>
                                    <i></i>
                                </label>
                                <button className="lecture-chromakey-pointer" style={{top: '10px', left: '10px'}}></button>
                            </div>
                            <div className="lecture-chromakey-color">
                                <div className="lecture-chromakey-color-select" style={{backgroundColor: '#1F1F1F'}}></div>
                                <div className="lecture-chromakey-color-range">
                                    <div className="color-range" style={{background: `linear-gradient(90deg, #FFFFFF 20.65%, #1F1F1F 100%)`}}>
                                        <i style={{left: `80%`}}></i>
                                    </div>
                                </div>
                                <div className="lecture-chromakey-color-list">
                                    <button className="lecture-chromakey-picker active"></button>

                                    <button style={{backgroundColor: '#1F1F1F'}}></button>
                                    <button></button>
                                    <button></button>
                                    <button></button>
                                    <button></button>
                                    <button></button>
                                    <button></button>

                                    <button></button>
                                    <button></button>
                                    <button></button>
                                    <button></button>
                                    <button></button>
                                    <button></button>
                                    <button></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="layer-footer">
                        <button type="button" className="button button-outline">확인</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default LectureRoom15;
