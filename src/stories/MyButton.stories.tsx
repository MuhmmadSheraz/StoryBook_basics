import MyButton from "../MyButton";
import { withKnobs, text, object, color } from "@storybook/addon-knobs";

export default {
  title: "MyButton",
  component: MyButton,
  decorators: [withKnobs],
  argTypes: {
    customColor: { control: 'color' },
    buttonTextColor: { control: 'color' },
  },
};
const styleList = {
  padding: "15px",
  backgroundColor: "gray",
  color: "white",
  fontSize: "22px",
  borderRadius: "30px",
  outline: "none",
};

export const addonButton = () => {
  return (
    <MyButton
      buttonTextColor=""
      customColor={text("Yellow", "Add Custom color")}
      value={text("AddonButton", "Label")}
      className="myButton"
      style={object("data", styleList)}
      onclick={() => alert("Hello I am Button")}
    />
  );
};
export const customColorButton = () => {
  return (
    <MyButton
      buttonTextColor={color("Add Custom Color For Button ", "orange")}
      customColor={color("Add Custom Color For Div", "red")}
      value={text("AddonButton", "Label")}
      className="myButton"
      style={object("data", styleList)}
      onclick={() => alert("Hello I am Button")}
    />
  );
};

export const ControlledButton = (args: any) => <MyButton {...args} />;
ControlledButton.args = { children: "Control Button", value: "Controlled Button" };
