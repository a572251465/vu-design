const { spawn } = require('child_process')
const { projectRoot } = require('./paths')
const File = require('vinyl')

/**
 * @author lihh
 * @description 给task任务添加名称
 * @param name 任务名称
 * @param fn 任务方法
 */
const withTaskName = (name, fn) => Object.assign(fn, { displayName: name })

const run = async (command) => {
  return new Promise((resolve) => {
    const [cmd, ...args] = command.split(' ')
    const app = spawn(cmd, args, {
      cwd: projectRoot,
      stdio: 'inherit',
      shell: true
    })
    app.on('close', resolve)
  })
}

/**
 * @author lihh
 * @description 表示对路径进行重写
 * @param format 重写格式 格式可能是lib/ es等
 */
const pathRewriter = (format) => {
  return (id) => {
    id = id.replace(/@vu-design/g, `vu-design/${format}`)
    return id
  }
}

/**
 * @author lihh
 * @description 基于through2 进行流转换
 * @param format 格式 es/ lib
 * @returns {(function(*, *, *): void)|*}
 */
const transformFlow = (format) => {
  return function (globFile, encoding, callback) {
    const file = new File(globFile)
    const { contents: contentBuffer } = file
    const replaceContentHandle = pathRewriter(format)
    const newContent = Buffer.isBuffer(contentBuffer)
      ? replaceContentHandle(contentBuffer.toString())
      : contentBuffer
    const res = new File({ ...file, contents: Buffer.from(newContent) })
    this.push(res)
    callback()
  }
}

module.exports = {
  withTaskName,
  run,
  pathRewriter,
  transformFlow
}
