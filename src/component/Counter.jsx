import React, { useState } from "react"
import '../App.css'

export default function Counter(){
    const [num, setNum] = useState(0)

    const handleClick = () => {
        alert("")
    }

    //onClick할 때 함수를 실행시키고 싶으면 함수 이름만 쓸 것!! handleClick()이렇게 쓰면 함수를 호출하는게 되어버리기 때문에 클릭 안해도 그냥 실행됨.
    //만약 형태를 유지하고 싶으면 콜백함수를 써야함 ()=>()

    return(
        <div className="counter">
            <div>
                <div className="num">
                    {num}
                </div>
            <button className="counter-btn" onClick={() => {
                //alert("버튼 클릭")
                //setNum 함수를 여러개 써도 또같이 +1이다.
                //현재 있는 state를 넘기기 때문이다.
                //온클릭이라는 함수가 실행될 때 스냅샷으로 현재에 있는 값을 받아서 함
                //콜백 함수 ?? 재귀함수 아니가
                //(prev) << 콜백함수, 현재 굴러가고 있는 변수에 값을 저장함
                setNum(num+1)
                console.log(num)
                //함수가 끝날 때 렌더링을 다시 시킨다.
                //UseState함수에 대해서 좀 더 알아볼 것.
            }}>click!!!</button>
        </div>
    </div>
    )
}

//prev를 쓰지 않고 바꿀 수 있는 방법??? -> UseEffect를 쓰면 바꿀 수 있다.