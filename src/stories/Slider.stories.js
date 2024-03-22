import Slider from '../components/Slider'


export default {
    title:"Slider",
    component: Slider
}


const Template = args => <Slider {...args}/>

export const Gen = Template.bind({});
Gen.args = {
    label: "continous",
    handleSize: "24px",
    status: "default",
    Value: 100,
}