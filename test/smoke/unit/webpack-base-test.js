const assert = require('assert')

describe('webpack.base test case', ()=>{
  const baseConfig = require('../../lib/webpack.base.js')
  console.log('baseConfig',baseConfig)
  it('entry', ()=>{
    assert.equal(baseConfig.entry.index, 'C:/programe/example-code/极客时间/webpack/my-project/builder-webpack/test/smoke/template/src/index/index.js')
    assert.equal(baseConfig.entry.search, 'C:/programe/example-code/极客时间/webpack/my-project/builder-webpack/test/smoke/template/src/search/index.js')
  })
})