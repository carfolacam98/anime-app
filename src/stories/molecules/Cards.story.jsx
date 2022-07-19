import Card from "../../components/Cards"
import './Cards.css'
export default {
  title: "Card",
  component: Card,
  argTypes: {
    numberOfChildren: { type: "number", defaultValue: 4 },
  },
}
const Template = ({ numberOfChildren, ...args }) => (
  <Card {...args}>
    {[...Array(numberOfChildren).keys()].map(n => (
      <div
      >
        {n + 1}
      </div>
    ))}
  </Card>
)

export const Horizontal = Template.bind({})
//mirar la diferencia entre args y props
Horizontal.args = {
  direction: "row",
  spacing: 2,
  wrap: false,
}

