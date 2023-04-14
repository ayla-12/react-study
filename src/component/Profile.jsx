import React from 'react'

export default function Profile({userInfo, src, tag}) {
  return (
    <div className='profile'>
        <img alt="123" className='img' src={src}/>
        {tag && <span className='new'>new</span>}
        <span className='new'>new</span>
        <h1>{userInfo.userName}</h1>
        <p>{userInfo.position}</p>
    </div>
  )
}

//컴포넌트에 가장 중요한건 재 사용성!!!
//변수를 넣어 쓸 수 있도록 해라

//js에서 값이 있으면 트루고, 값이 없으면 false 
//img 태그에서는  alt가 필수값git
