/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import axios from 'axios'
import config from '../config'

const api = axios.create({
    baseURL: config.ServerEndPoint + '/api/task'
  })

const authToken = config.AuthJWTToken

export default {
    getAllTask() {
        return api.get('getAllTask')
    },
    addTask(task) {
        return api.post('addTask', task, {
            headers: {
                'Authorization': `Bearer ${authToken}`,
            }
        })
    },
    updateTask(taskId,tasks){
        return api.put(`updateTask/${taskId}`,tasks,{
            headers: {
                'Authorization': `Bearer ${authToken}`,
            }
        })
    },
    deleteTask(taskId){
        return api.delete(`deleteTask/${taskId}`,task,{
            headers: {
                'Authorization': `Bearer ${authToken}`,
            }
        })
    }
}