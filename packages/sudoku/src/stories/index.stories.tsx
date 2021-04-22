import {Story,Meta} from "@storybook/react";
import {ARSudoku,ARSudokuProps} from "../index";

export default {
  title: "AR/Sudoku",
  component:ARSudoku,
}

const Template:Story<ARSudokuProps> = (args) => <ARSudoku {...args} />

export const Primary = Template.bind({

});
