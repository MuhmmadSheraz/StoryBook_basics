import MyButton from "../MyButton";

export default {
  title: "MyButton",
  component: MyButton,
};

export const myButtomsm = () => {
  return (
    <MyButton
      value="hello"
      className="myButton"
      style={{
        padding: "15px",
        backgroundColor: "black",
        color: "white",
        fontSize: "22px",
        borderRadius: "30px",
        outline:"none"
      }}
      onclick={()=>alert("Hello I am Button")}
    />
  );
};
