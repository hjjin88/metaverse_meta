
import { useEffect, useState } from "react";

const Voters = ({popName, setPopName }) => {

    const [Camera, setCamera] = useState(false);
    const [Mike, setMike] = useState(false);


    return (
        <>
        <div className="Voters">
            <button type="button" className="subclose close16" onClick={ e => { setPopName(); }} />
            <div className="popTit">주변</div>
            <ul className="popCon">
                <li>
                    <div className="AroundLists">
                        <div className="Profile-set">
                            <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                            <img className="Profile-mark" src="/resources/img/host.svg" alt="방장 아이콘 이미지" />
                        </div>
                        <button type="button" className="IDBox" onClick={ e => { setPopName('VotersProfileView'); }}>
                            <p className="ID">DDDDDDDDGG</p>
                            <p>방장</p>
                        </button>
                    </div>
                    <div className="AroundIconBox">
                        <button type="button" onClick={() => {setCamera(!Camera)}} >
                            {Camera ? <div className="videoOff30" /> : <div className="videoOn30" />} 
                        </button>
                        <button type="button" onClick={() => {setMike(!Mike)}} >
                            {Mike ? <div className="mikeOn30" /> : <div className="mikeOff30" />} 
                        </button>
                    </div>
                </li>
                <li>
                    <div className="AroundLists">
                    <div className="Profile-set">
                            <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                            <img className="Profile-mark" src="/resources/img/host.svg" alt="방장 아이콘 이미지" />
                        </div>
                        <button type="button" className="IDBox">
                            <p className="ID">DDDDDDDDGG</p>
                            <p className="txt-guest">게스트</p>
                        </button>
                    </div>
                    <div className="AroundIconBox">
                        <button type="button" onClick={() => {setCamera(!Camera)}} >
                            {Camera ? <div className="videoOn30" /> : <div className="videoOff30" />} 
                        </button>
                        <button type="button" onClick={() => {setMike(!Mike)}} >
                            {Mike ? <div className="mikeOn30" /> : <div className="mikeOff30" />} 
                        </button>
                    </div>
                </li>
                <li>
                    <div className="AroundLists">
                    <div className="Profile-set">
                            <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                            <img className="Profile-mark" src="/resources/img/host.svg" alt="방장 아이콘 이미지" />
                        </div>
                        <div className="IDBox">
                            <p className="ID">DDDDDDDDGG</p>
                            <p className="txt-guest">게스트</p>
                        </div>
                    </div>
                    <div className="AroundIconBox">
                        <button type="button" onClick={() => {setCamera(!Camera)}} >
                            {Camera ? <div className="videoOff30" /> : <div className="videoOn30" />} 
                        </button>
                        <button type="button" onClick={() => {setMike(!Mike)}} >
                            {Mike ? <div className="mikeOn30" /> : <div className="mikeOff30" />} 
                        </button>
                    </div>
                </li>
                <li>
                    <div className="AroundLists">
                    <div className="Profile-set">
                            <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                            <img className="Profile-mark" src="/resources/img/host.svg" alt="방장 아이콘 이미지" />
                        </div>
                        <div className="IDBox">
                            <p className="ID">DDDDDDDDGG</p>
                            <p className="txt-guest">게스트</p>
                        </div>
                    </div>
                    <div className="AroundIconBox">
                        <button type="button" onClick={() => {setCamera(!Camera)}} >
                            {Camera ? <div className="videoOn30" /> : <div className="videoOff30" />} 
                        </button>
                        <button type="button" onClick={() => {setMike(!Mike)}} >
                            {Mike ? <div className="mikeOn30" /> : <div className="mikeOff30" />} 
                        </button>
                    </div>
                </li>
                <li>
                    <div className="AroundLists">
                    <div className="Profile-set">
                            <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                            <img className="Profile-mark" src="/resources/img/host.svg" alt="방장 아이콘 이미지" />
                        </div>
                        <div className="IDBox">
                            <p className="ID">DDDDDDDDGG</p>
                            <p className="txt-guest">게스트</p>
                        </div>
                    </div>
                    <div className="AroundIconBox">
                        <button type="button" onClick={() => {setCamera(!Camera)}} >
                            {Camera ? <div className="videoOn30" /> : <div className="videoOff30" />} 
                        </button>
                        <button type="button" onClick={() => {setMike(!Mike)}} >
                            {Mike ? <div className="mikeOn30" /> : <div className="mikeOff30" />} 
                        </button>
                    </div>
                </li>
                <li>
                    <div className="AroundLists">
                    <div className="Profile-set">
                            <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                            <img className="Profile-mark" src="/resources/img/host.svg" alt="방장 아이콘 이미지" />
                        </div>
                        <div className="IDBox">
                            <p className="ID">DDDDDDDDGG</p>
                            <p className="txt-guest">게스트</p>
                        </div>
                    </div>
                    <div className="AroundIconBox">
                        <button type="button" onClick={() => {setCamera(!Camera)}} >
                            {Camera ? <div className="videoOn30" /> : <div className="videoOff30" />} 
                        </button>
                        <button type="button" onClick={() => {setMike(!Mike)}} >
                            {Mike ? <div className="mikeOn30" /> : <div className="mikeOff30" />} 
                        </button>
                    </div>
                </li>                <li>
                    <div className="AroundLists">
                    <div className="Profile-set">
                            <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                            <img className="Profile-mark" src="/resources/img/host.svg" alt="방장 아이콘 이미지" />
                        </div>
                        <div className="IDBox">
                            <p className="ID">DDDDDDDDGG</p>
                            <p className="txt-guest">게스트</p>
                        </div>
                    </div>
                    <div className="AroundIconBox">
                        <button type="button" onClick={() => {setCamera(!Camera)}} >
                            {Camera ? <div className="videoOn30" /> : <div className="videoOff30" />} 
                        </button>
                        <button type="button" onClick={() => {setMike(!Mike)}} >
                            {Mike ? <div className="mikeOn30" /> : <div className="mikeOff30" />} 
                        </button>
                    </div>
                </li>
                <li>
                    <div className="AroundLists">
                        <div className="Profile-set">
                            <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                            <img className="Profile-mark" src="/resources/img/host.svg" alt="방장 아이콘 이미지" />
                        </div>
                        <div className="IDBox">
                            <p className="ID">DDDDDDDDGG</p>
                            <p className="txt-guest">게스트</p>
                        </div>
                    </div>
                    <div className="AroundIconBox">
                        <button type="button" onClick={() => {setCamera(!Camera)}} >
                            {Camera ? <div className="videoOn30" /> : <div className="videoOff30" />} 
                        </button>
                        <button type="button" onClick={() => {setMike(!Mike)}} >
                            {Mike ? <div className="mikeOn30" /> : <div className="mikeOff30" />} 
                        </button>
                    </div>
                </li>
                <li>
                    <div className="AroundLists">
                        <div className="Profile-set">
                            <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                            <img className="Profile-mark" src="/resources/img/host.svg" alt="방장 아이콘 이미지" />
                        </div>
                        <div className="IDBox">
                            <p className="ID">DDDDDDDDGG</p>
                            <p className="txt-guest">게스트</p>
                        </div>
                    </div>
                    <div className="AroundIconBox">
                        <button type="button" onClick={() => {setCamera(!Camera)}} >
                            {Camera ? <div className="videoOn30" /> : <div className="videoOff30" />} 
                        </button>
                        <button type="button" onClick={() => {setMike(!Mike)}} >
                            {Mike ? <div className="mikeOn30" /> : <div className="mikeOff30" />} 
                        </button>
                    </div>
                </li>
                <li>
                    <div className="AroundLists">
                        <div className="Profile-set">
                            <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                            <img className="Profile-mark" src="/resources/img/host.svg" alt="방장 아이콘 이미지" />
                        </div>
                        <div className="IDBox">
                            <p className="ID">DDDDDDDDGG</p>
                            <p>방장</p>
                        </div>
                    </div>
                    <div className="AroundIconBox">
                        <button type="button" onClick={() => {setCamera(!Camera)}} >
                            {Camera ? <div className="videoOn30" /> : <div className="videoOff30" />} 
                        </button>
                        <button type="button" onClick={() => {setMike(!Mike)}} >
                            {Mike ? <div className="mikeOn30" /> : <div className="mikeOff30" />} 
                        </button>
                    </div>
                </li>
                <li>
                    <div className="AroundLists">
                        <div className="Profile-set">
                            <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                            <img className="Profile-mark" src="/resources/img/host.svg" alt="방장 아이콘 이미지" />
                        </div>
                        <div className="IDBox">
                            <p className="ID">DDDDDDDDGG</p>
                            <p>방장</p>
                        </div>
                    </div>
                    <div className="AroundIconBox">
                        <button type="button" onClick={() => {setCamera(!Camera)}} >
                            {Camera ? <div className="videoOn30" /> : <div className="videoOff30" />} 
                        </button>
                        <button type="button" onClick={() => {setMike(!Mike)}} >
                            {Mike ? <div className="mikeOn30" /> : <div className="mikeOff30" />} 
                        </button>
                    </div>
                </li>
                <li>
                    <div className="AroundLists">
                        <div className="Profile-set">
                            <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                            <img className="Profile-mark" src="/resources/img/host.svg" alt="방장 아이콘 이미지" />
                        </div>
                        <div className="IDBox">
                            <p className="ID">DDDDDDDDGG</p>
                            <p>방장</p>
                        </div>
                    </div>
                    <div className="AroundIconBox">
                        <button type="button" onClick={() => {setCamera(!Camera)}} >
                            {Camera ? <div className="videoOn30" /> : <div className="videoOff30" />} 
                        </button>
                        <button type="button" onClick={() => {setMike(!Mike)}} >
                            {Mike ? <div className="mikeOn30" /> : <div className="mikeOff30" />} 
                        </button>
                    </div>
                </li>
                <li>
                    <div className="AroundLists">
                        <div className="Profile-set">
                            <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                            <img className="Profile-mark" src="/resources/img/host.svg" alt="방장 아이콘 이미지" />
                        </div>
                        <div className="IDBox">
                            <p className="ID">DDDDDDDDGG</p>
                            <p>방장</p>
                        </div>
                    </div>
                    <div className="AroundIconBox">
                        <button type="button" onClick={() => {setCamera(!Camera)}} >
                            {Camera ? <div className="videoOn30" /> : <div className="videoOff30" />} 
                        </button>
                        <button type="button" onClick={() => {setMike(!Mike)}} >
                            {Mike ? <div className="mikeOn30" /> : <div className="mikeOff30" />} 
                        </button>
                    </div>
                </li> 
            </ul>
        </div>
        </>
    )
}
export default Voters;
