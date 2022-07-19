import Heading from '../../components/Heading'
import './Heading.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default{
 title: "Heading",
 component: Heading,
}
const Template = args => <Heading {...args}/>
export const HElp = Template.bind({})
