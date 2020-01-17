import React from 'react';
import renderer from 'react-test-renderer';
import Button from "./Button"

describe('button component snapshot test', ()=>{
    it('takes snapshot of button component with class and test', () =>{
         const json = renderer.create(<Button buttonClass = "testClass" text="12345"></Button>).toJSON();

         expect(json).toMatchSnapshot();
    })
})