import { uniqueId } from 'lodash'

/**
 * @description 给菜单数据补充上 path 字段
 * @description https://github.com/d2-projects/Neuro-Network/issues/209
 * @param {Array} menu 原始的菜单数据
 */
function supplementPath (menu) {
  return menu.map(e => ({
    ...e,
    path: e.path || uniqueId('d2-menu-empty-'), ...e.children ? {
      children: supplementPath(e.children)
    } : {}
  }))
}

export const menuHeader = supplementPath([])

export const menuAside = supplementPath([{
  path: '/index',
  title: '总览',
  icon: 'home'
}, {
  path: '/data',
  title: '数据中心',
  icon: 'database'
}, {
  path: '/model',
  title: '模型训练',
  icon: 'film',
  children: [{
    path: '/page1',
    title: '训练管理',
    icon: 'film'
  }, {
    path: '/page2',
    title: '开发环境',
    icon: 'film'
  }]
}, {
  path: '/data',
  title: '模型仓库',
  icon: 'database'
}, {
  path: '/data',
  title: '推理服务',
  icon: 'database'
}, {
  path: '/data',
  title: '镜像管理',
  icon: 'database'
}, {
  path: '/data',
  title: '零代码开发',
  icon: 'database'
}])
