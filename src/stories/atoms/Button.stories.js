import Button from '../../components/Button'
import './Button.css'
// El objeto que exportamos es la histori en realidad
export default{
//  la descripcion de la primera
 title: "Button",
 component: Button,
 argTypes:{ handleClick:{ action: "handleClick"}},
 
}

//tomo un componente y le paso ciertos argumentos 
//(como todos seran similares todos los botones entran masomenos una plantilla)
const Template = args => <Button {...args}/>

//bind funcion que enlaza
export const Primary = Template.bind({})
Primary.args={
    size: "md",
    type: "primary",
    
}
export const Secondary = Template.bind({})
Secondary.args={
    size: "md",
    type: "secondary"
}
export const Outline = Template.bind({})
Outline.args={
    size: "md",
    type: "outline"
}