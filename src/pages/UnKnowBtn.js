
import { useEffect, useState } from "react";

const UnKnowBtn = ({ popName, setPopName }) => {

    return (
        <>
        <div className="UnKnowBtn">
            <div className="Btns">
                <button onClick={ e => { setPopName('More01'); }}>참여모드 팝업 창01</button>
                <button onClick={ e => { setPopName('More02'); }} style={{background:'pink'}}>More02/ 도서관 스터디 공통UI 더보기</button>
                <button onClick={ e => { setPopName('MicCamSet'); }} style={{background:'pink'}}>More02/ 도서관 마이크창</button>
                <button onClick={ e => { setPopName('More03'); }}>참여모드 팝업 창03</button>
                <button onClick={ e => { setPopName('More04'); }}>참여모드 팝업 창04-호스트</button>
                <button onClick={ e => { setPopName('More05'); }}>참여모드 팝업 창05-일반</button>
                <button onClick={ e => { setPopName('More06'); }}>참여모드 팝업 창06-포인트상점</button>
                <button onClick={ e => { setPopName('More07'); }} style={{background:'#f9ff7e', color:"#000"}}>참여모드 팝업 창07-상담실 3</button>
                <button onClick={ e => { setPopName('More08'); }} style={{background:'#f9ff7e', color:"#000"}}>More08/상담사모드</button>
                <button onClick={ e => { setPopName('More09'); }}>참여모드 팝업 창09-대강당01</button>
                <button onClick={ e => { setPopName('More10'); }}>참여모드 팝업 창10-대강당02</button>
                <button onClick={ e => { setPopName('More11'); }} style={{background:'#f9ff7e', color:"#000"}}>More11/상담사 - 상담실</button>
                <button onClick={ e => { setPopName('ConsEntrance'); }} style={{background:'#f9ff7e', color:"#000"}}>상담사 - 의자 클릭 - 상담실 입장</button>
                <button onClick={ e => { setPopName('ConsProduce03'); }} style={{background:'#f9ff7e', color:"#000"}}>상담사 - 의자 클릭 - 상담등록</button>
                <button onClick={ e => { setPopName('ConsEntrance03'); }} style={{background:'#f9ff7e', color:"#000", opacity:"0.7"}}>내담자 - 상담실 입장</button>
                <button onClick={ e => { setPopName('ConsEntrance04'); }} style={{background:'#f9ff7e', color:"#000", opacity:"0.7"}}>내담자 - 상담실 입장 - 시간초과 된 페이지</button>
                <button onClick={ e => { setPopName('More12'); }} style={{background:'#3db0e0'}}>More12/더보기 수정 팝업창</button>
                <button onClick={ e => { setPopName('More13'); }}>More13/인솔자 모드 팝업창</button>
                {/* <button onClick={ e => { setPopName('More14'); }} style={{background:'pink'}}>More14/도서관 스터디 공통UI 더보기</button> */}

                
                <button onClick={ e => { setPopName('Promotion01'); }} style={{background:'orchid'}}>홍보물설정</button>
                <button onClick={ e => { setPopName('Promotion02'); }} style={{background:'orchid'}}>홍보물설정- 이미지 선택01</button>
                <button onClick={ e => { setPopName('Promotion04'); }} style={{background:'orchid'}}>홀보물 링크 설정</button>
                <button onClick={ e => { setPopName('Promotion05'); }} style={{background:'orchid'}}>게시판설정01</button>
                <button onClick={ e => { setPopName('Promotion06'); }} style={{background:'orchid'}}>게시판설정02</button>
                <button onClick={ e => { setPopName('Promotion07'); }} style={{background:'orchid'}}>동영상설정01</button>
                <button onClick={ e => { setPopName('Promotion08'); }} style={{background:'orchid'}}>동영상설정02</button>

                <button onClick={ e => { setPopName('Alarm01'); }}>알림-마이룸으로 이동</button>
                <button onClick={ e => { setPopName('TourParticipant'); }} style={{background:'rgb(153 178 255)'}}>투어 참가자 UI</button>
                <button onClick={ e => { setPopName('NpcTourStart'); }} style={{background:'rgb(153 178 255)'}}>NPC 투어 시작</button>
                <button onClick={ e => { setPopName('NpcDelete'); }} style={{background:'rgb(153 178 255)'}}>NPC 삭제 버튼</button>
                <button onClick={ e => { setPopName('ConsEnd'); }} style={{background:'#f9ff7e', color:"#000"}}>상담 종료 버튼</button>
                <button onClick={ e => { setPopName('ConsRequestAlarm'); }} style={{background:'#f9ff7e', color:"#000"}}>상담 참여 요청 버튼</button>
                <button onClick={ e => { setPopName('ClientList'); }} style={{background:'#f9ff7e', color:"#000", opacity:"0.7"}}>내담자목록 버튼</button>
            </div>
        </div>
        </>
    )
}
export default UnKnowBtn;
