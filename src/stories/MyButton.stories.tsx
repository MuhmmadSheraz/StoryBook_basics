import MyButton from "../MyButton";
import { withKnobs, text, object } from "@storybook/addon-knobs";

export default {
  title: "MyButton",
  component: MyButton,
  decorators: [withKnobs],
};
const styleList = {
  padding: "15px",
  backgroundColor: "gray",
  color: "white",
  fontSize: "22px",
  borderRadius: "30px",
  outline: "none",
};
// export const myButtomsm = () => {
//   return (
//     <MyButton
//       customColor="orange"
//       value="hello"
//       className="myButton"

//       onclick={() => alert("Hello I am Button")}
//     />
//   );
// };
export const addonButton = () => {
  return (
    <MyButton
      customColor={text("Yellow", "Add Custom color")}
      value={text("AddonButton", "Label")}
      className="myButton"
      style={object("data", styleList)}
      onclick={() => alert("Hello I am Button")}
    />
  );
};
