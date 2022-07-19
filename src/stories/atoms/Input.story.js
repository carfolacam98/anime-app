import Input from '../../components/Input'
import './Input.css'

export default{
 title: "Input",
 component: Input,
}

const Template = args => <Input {...args}/>

export const Text = Template.bind({})
Text.args={
    size: "md",
    type: "text",
    
}
export const Email = Template.bind({})
Email.args={
    size: "md",
    type: "email"
}
export const Date = Template.bind({})
Date.args={
    size: "md",
    type: "date"
}