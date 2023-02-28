import { useEffect, useState } from "react";

const Invite = ({ popName, setPopName }) => {

    return (
    <>
        <div className="layer" />
        <div className="Invite">
            <button type="button" className="subclose close16" onClick={(e) => {setPopName();}}/>
            <div className="popTit">초대하기</div>
            <div className="con-wrap">
                <div className="con-inner-col">
                    <div className="Invite-guide tit-15Bk">
                        아래의 url을 복사해 친구에게 보내면 유버스에 초대할 수 있어요. <br/>
                        얼른 내 옆에 친구를 불러봐요!
                    </div>
                    <div className="url-con">
                        <textarea type="text" rows="1" placeholder="url 영역"/>
                        <button type="button" className="copy17" onClick={ e => { setPopName('Copypop'); }} />
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};
export default Invite;
