const user = {
  youtubelink:
    "https://www.youtube.com/embed/1Wm-b4UrEh8?si=3bR7X76_lyT-ETXc&autoplay=1&mute=1",
  name: "Shayu",
  nameKo: "샤유",
  comment: <Comment1 />,
  comment2: <Comment2 />,
  comment3: <Comment3 />,
};

export default user;
function Comment1() {
  return <div></div>;
}

function Comment2() {
  return (
    <div>
      <highlight>영상</highlight> 및 <highlight>개발</highlight> 분야에서
    </div>
  );
}
function Comment3() {
  return (
    <div>
      활동하고 있는 <highlight>샤유</highlight>입니다!
    </div>
  );
}
