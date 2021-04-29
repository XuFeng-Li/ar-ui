
import {Story,Meta} from "@storybook/react";
import {createForm} from "@formily/core";
import {Field} from "@formily/react";
import {Form,FormItem} from "@formily/antd";

import {ARSudoku,ARSudokuProps} from "../index";
export default {
  title:"Formily/Sudoku",
  component:ARSudoku
} as Meta;

const normalForm = createForm({
  validateFirst:true,
})
const Template:Story<ARSudokuProps> = (args) => {
  return (
    <Form form={normalForm}>
      <Field
        name="ARSudoku"
        title="sudoku"
        decorator={[FormItem]}
        component={[
          ARSudoku,
          {...args}
        ]}
      />
    </Form>
  )
}

export const Primary = Template.bind({});
Primary.args = {
  datumPoint:{
    row:0,
    column:0,
  },
}
