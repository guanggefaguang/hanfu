const mode = 1; //0 生产  1 测试

const prod = {
  api: "https://api2.dfei.vip",
}

const test = {
  api: "https://api2.dfei.vip",
}

const dev = {
  api: "https://api2.dfei.vip",
}

const dir = {
  ...(mode == 0 ? prod : (mode == 1 ? test : dev))
}

module.exports = dir