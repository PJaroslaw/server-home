import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import MyServer from '../MyServer.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(MyServer, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
