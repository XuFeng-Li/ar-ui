import {SchemaForm,registerFormField,connect} from "@formily/react-schema-renderer";
import {Story,Meta} from "@storybook/react";
import {ARSudoku,ARSudokuProps} from "../index";
export default {
  title:"Formily/Sudoku",
  component:ARSudoku
} as Meta;

registerFormField(
  "Formily_ARSudoku",
  connect()(({...props})=>{
    return <ARSudoku {...props} />;
  })
)

const Template:Story<ARSudokuProps> = (args) => {
  return (
    <SchemaForm
      schema={{
        type:'object',
        properties: {
          Formily_ARSudoku: {
            type: 'object',
            'x-component':'Formily_ARSudoku',
            'x-component-props': { ... args }
          }
        }
      }}
    />
  )
}

export const Primary = Template.bind({});
Primary.args = {
  datumPoint:{
    row:0,
    column:0,
  },
}
