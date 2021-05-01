// spawn é para executar de forma assíncrona os comandos no sheel 
const { spawn } = require('child_process');
//o mesmo que o comando $> ls -lh /sur 
const ls = spawn('ls', ['-lh', './']);
// const cmd = 'sar'
// const params = '-u'
// const docker = spawn(`${cmd}`, [`${params}`,'2','30']);
// const cmd = 'ping'
// const params = '192.168.1.1'
// const ping = spawn(`${cmd}`, [`${params}`]);
const cmd = 'speedtest'
const params = ''
const speedtest = spawn(`${cmd}`, [`${params}`]);




speedtest.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

speedtest.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

speedtest.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});