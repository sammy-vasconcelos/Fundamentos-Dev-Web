// npm i node-schedule
// serve para agendar a execução de tarefas

import { scheduleJob } from 'node-schedule';

const tarefa1 = scheduleJob('*/5 * 16  * * 1', function () {
    console.log('executando tarefa', new Date().getSeconds());
})