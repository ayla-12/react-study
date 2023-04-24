import React, { useEffect, useState } from 'react';
import './App.css';
export default function MouseMover() {

    const [event, setEvent] = useState({ x:0, y:0 });
    const [clientX, setClientX] = useState(0)
    const [clientY, setClientY] = useState(0)

    useEffect(() =>{
    //    if (clientX > 1000){
    //     setClientX(1000)
    //    }
    //    if (clientY > 500){
    //     setClientY(500)
    //    }

       if (clientX > 1000 || clientY >500){
        setClientX(50)
        setClientY(50)
       }
    //    if (clientY > 500){
    //     setClientY(50)
    //    }
       
    }, [clientX], [clientY]) 

  return (
    <div className="container" onMouseMove={(event) => {
        //console.log(event.clientX, event.clientY)
        setClientX(event.clientX)
        setClientY(event.clientY)
    }}>
      <div className="pointer-wrap">
        <div className={`pointer`} style={{ 
            transform: `translate(${clientX-50}px, ${clientY-50}px)` 
            }} />
      </div>
    </div>
  )
}



/*
useState는 값이 바뀌는 일이 없었는데, 사용자 인터렉션에 따라 바뀌어야하는 경우가 있다.
그러면 이 인터렉션을 받아올 때, useState를 씀

동적인 값을 가져오는거지..

className 중복해서 쓰려면 스페이스바로 구분하기

useEffect 안의 화살표 함수가 넘넘 헷갈린당~



*/