import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import MainForm from '../../components/MainForm'

function setup() {

  const actions = {

  }
  const renderer = TestUtils.createRenderer()
  renderer.render(<MainForm actions={actions}/>)
  const output = renderer.getRenderOutput()

  return {
    output: output,
    renderer: renderer
  }
}

describe('components', () => {
  describe('MainForm', () => {
    it('should render correctly', () => {
      const { output } = setup()

      expect(output.type).toBe('section')
      expect(output.props.className).toBe('main')

    })

  })
})
