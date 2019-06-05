let test = require('tape')
let tiny = require('tiny-json-http')
let sandbox = require('@architect/architect').sandbox

test('env', t => {
  t.plan(1)
  t.ok(sandbox, 'sandbox')
})

let end // saves a reference to be used later to shut down the sandbox
test('sandbox.start', async t => {
  t.plan(1)
  end = await sandbox.start()
  t.ok(true, 'opened')
})

// check for 200
test('get /', async t => {
  t.plan(1)
  try {
    var url = 'http://localhost:3333'
    var result = await tiny.get({url})
    t.ok(true, 'got result',console.log(result.toString().substring(50) + '...'))
  } 
  catch(e) {
    t.fail(e)
    console.log(e.body)
  }
})

test('shut down the sandbox', t=> {
  t.plan(1)
  end()
  t.ok(true, 'shutdown successfully')
})
