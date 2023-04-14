import logo from './logo.svg';
import './App.css';
import Profile from './component/Profile';

export default function App() { //함수를 쓸 때는 꼭 대문자로 첫 글자를 정해야한다.
  return (
    <>
      <Profile 
        userInfo={{
          userName: "gykim",
          position: "UXUI 기획자"
        }}
        tag={true}
        src="https://cdn.pixabay.com/photo/2023/04/05/15/39/animal-7901753_960_720.jpg"
      />
      <Profile
        tag={false}
        userInfo={{
          userName: "gykim",
          position: "UXUI 기획자"
        }}
        src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg"
      />
    </>   
  );
}


//props 보낼때 스트링은 중괄호 안붙여도 된다.



/*
컴포넌트의 기준은 딱히 없다. 자유도가 높음.

한줄이면 리턴 함수 없애도 된다. 화살표 함수! 
*/

