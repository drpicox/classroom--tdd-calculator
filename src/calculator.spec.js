import { Calculator } from "./calculator"
import { toSatisfy } from "../helpers/toSatisfy"
expect.extend({ toSatisfy })

test.each`
  order | sequence
  ${1}  | ${""}
`('$order | "$sequence"', ({ sequence }) => {
  expect(new Calculator()).toSatisfy(sequence)
})

/*
  order | sequence
  ${2}  | ${"[0]"}
  ${3}  | ${"0[0]"}
  ${4}  | ${"1[1]"}
  ${5}  | ${"56[56]"}
  ${6}  | ${"0![1]"}
  ${7}  | ${"1![1]"}
  ${8}  | ${"2![2]"}
  ${9}  | ${"3![6]"}
  ${10} | ${"4![24]"}
  ${11} | ${"9![362880]"}
  ${12} | ${"78=[78]"}
  ${13} | ${"0+0=[0]"}
  ${14} | ${"0+3=[3]"}
  ${15} | ${"3+4=[7]"}
  ${16} | ${"12+34=[46]"}
  ${17} | ${"12+[12]"}
  ${18} | ${"12+34[34]"}
  ${19} | ${"1+2+[3]"}
  ${20} | ${"1+2+4=[7]"}
  ${21} | ${"0*0=[0]"}
  ${22} | ${"3*0=[0]"}
  ${23} | ${"3*4=[12]"}
  ${24} | ${"12*34=[408]"}
  ${25} | ${"12*[12]"}
  ${26} | ${"12*34[34]"}
  ${27} | ${"12*34*[408]"}
  ${28} | ${"2*3*4=[24]"}
  ${29} | ${"2+3*4=[14]"}
  ${30} | ${"2+3*[3]"}
  ${31} | ${"4*3+2=[14]"}
  ${32} | ${"4*3+[12]"}
  ${33} | ${"1+2+3*4=[15]"}
  ${34} | ${"4*3+2+1=[15]"}
  ${35} | ${"2+3*4+5=[19]"}
  ${36} | ${"2+3!=[8]"}
  ${37} | ${"2+3![6]"}
  ${38} | ${"2*3!=[12]"}
  ${39} | ${"2*3![6]"}
  ${40} | ${"5!+3!*4!=[264]"}
 */
