const MyButton = ({ text, type, onClick }) => {
  const btnType = ["positive", "negative"].includes(type) ? type : "default";
  //positive와 negative 중 없는 글자가 들어오면 강제로 default로 설정시킴

  return (
    <button
      className={["MyButton", `MyButton_${btnType}`].join(" ")}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

MyButton.defaultProps = {
  type: "default",
};

export default MyButton;
