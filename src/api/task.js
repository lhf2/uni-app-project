import http from '../utils/request';

// 最新任务列表
export const getTaskLists = (params) => http('GET', '/api/freelancers/tasksV2', params);
