import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import TreeStructure from '../../components/TreeStructure'

function setup() {

  const products = {

  }
  const renderer = TestUtils.createRenderer()
  renderer.render(<TreeStructure products={products}/>)
  const output = renderer.getRenderOutput()

  return {
    output: output,
    renderer: renderer
  }
}

describe('components', () => {
  describe('TreeStructure', () => {
    it('should render correctly', () => {
      const { output } = setup()

      expect(output.type).toBe('section')
      expect(output.props.className).toBe('secondary')

    })

  })
})
