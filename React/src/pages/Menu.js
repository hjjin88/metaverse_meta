
import { useEffect, useState } from "react";

const Menu = ({setPopName }) => {

    return (
        <>
        <div className="layer"/>
            <div className="Menu">
                <button type="button" className="menuclose" onClick={ e => { setPopName(); }}><img src="/resources/img/close16.svg" alt="닫기 버튼 이미지" /></button>
                <div className="MenuCon">
                    <img src="/resources/img/bg.png" alt="프로필 이미지" />
                    <div className="Point tit-13Wt">
                        <span>p</span>
                        <p>2,30555503</p>
                    </div>
                    <div className="tit-30Bk2">Jennie Park</div>
                </div>
                <div className="MenuList">
                    <button type="button" onClick={ e => { setPopName('ProfileDrawer'); }}>프로필 변경</button>
                    <button type="button" className="Txt-pkgr">마이룸 이동</button>
                    <button type="button">고객센터</button>
                    <button type="button">로그아웃</button>
                </div>
            </div>
        </>
    )
}
export default Menu;
