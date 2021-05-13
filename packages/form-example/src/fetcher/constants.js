export const isRevit = function() {
  return window.boundObject && window.boundObject.isRevit && window.boundObject.isRevit() || (function() { console.log('self web'); return false })()
}

// 后端接口code含义
export const API_CODE = {
  OK: '10000',
  NEED_LOGIN: ['-10010', '-10040', '-10060', '-10070']
}

// 本地开发环境
export const LOCAL_ENV = 'dev'

// 接口地址
const theHost = (function chargeHost() {
  const localHost = {
    dev: {
      yapi: 'http://192.168.2.140:9802/mock/100', // Yapi模拟接口
      online: 'http://192.168.2.131:18081', // 线上开发环境接口
      devBingli: 'http://192.168.2.159:18081', // 冰梨本地接口
      devZuoyou: 'http://192.168.2.108:18081' // 左右本地接口
    },
    test: {
      online: 'http://test.admin.asman.com.cn'
    },
    pro: {
      online: 'https://admin.asman.com.cn'
    }
  }

  // 手动环境，优先级最高，但前提是不是PRO环境
  const which = 'online'

  // 如果是本地开发，且不是在UE4环境中，允许手动控制
  return localHost[LOCAL_ENV][which]
})()

export const LOCAL_HOST = theHost

// 本地模拟登陆用户
export const LOCAL_USER = {
  dev: {
    TOKEN: 'PtE4Njl0RzbjcIj0j5UlfQtBzMPu2ANcyU6uDNzY/ushAUgtvJHQ+w==',
    USER_ID: '541'
  },
  test: {
    TOKEN: '3cd9fcaf69dc4c7e9a19659043e0c3cc',
    USER_ID: '569'
  },
  pro: {}
}

export const OPERATE_TYPE = new Map([
  ['view', 'view'], // view普通浏览
  ['replace', 'replace'], // replace替换列表
  ['change', 'change'], // change换搭列表
  ['collect', 'collect'], // collect 收藏列表
  ['history', 'history'] // history 使用记录
])

export const STAFF_STATUS = {
  NO_STAFF: 0,
  HAS_STAFF: 1,
  DOWN_STAFF: 2
}

// 面板的一些固定配置，skuId，spuId是跟ue4约定的环境配置项所需要的固定传值。（ue4提供）。
export const PANEL_TYPE = new Map([
  [
    'panoCamera',
    {
      name: '全景相机',
      icon: 'iconquanjingxiangji',
      skuId: 100000005,
      spuId: 100000005
    }
  ],
  [
    'panoNavigator',
    {
      name: '全景导航',
      icon: 'iconquanjingdaohang',
      skuId: 100000006,
      spuId: 100000006
    }
  ],
  [
    'spotLight',
    {
      name: '射灯',
      icon: 'iconshedeng',
      skuId: 100000002,
      spuId: 100000002
    }
  ],
  [
    'pointLight',
    {
      name: '点光源',
      icon: 'icondianguangyuan',
      skuId: 100000001,
      spuId: 100000001
    }
  ],
  [
    'beltLight',
    {
      name: '灯带',
      icon: 'icondengdai',
      skuId: 100000008,
      spuId: 100000008
    }
  ],
  [
    'cizhuanGoods',
    {
      name: '',
      icon: ''
    }
  ],
  [
    'chuanglianGoods',
    {
      name: '',
      icon: ''
    }
  ],
  [
    'change',
    {
      name: '换搭列表',
      icon: ''
    }
  ]
])

export const EN2CN = new Map([
  ['height', '高度'],
  ['length', '长度'],
  ['width', '宽度'],
  ['angle', '角度'],
  ['liftoff', '离地']
])

// spuItem的立即使用，下载，替换等功能的配置，是否允许使用
export const DEFAULT_FUN = {
  download: true,
  use: true,
  replace: false,
  change: false
}

export const PAGESIZE = 14

export const floorMaterialOptions = [
  {
    key: 1,
    value: 'BM-XT-SM-0004',
    name: '瓷砖',
    img: 'https://img.asman.com.cn/assets/1567159387205_15543.png'
  },
  {
    key: 2,
    value: 'BM-XT-SM-0003',
    name: '木地板',
    img: 'https://img.asman.com.cn/assets/1567159401605_51882.png'
  },
  {
    key: 3,
    value: 'BM-XT-SM-0010',
    name: '大理石',
    img: 'https://img.asman.com.cn/assets/1567159401568_64748.png'
  }
]

export const ceilingMaterialOptions = [
  {
    key: 1,
    value: 'BM-XT-SM-0005',
    name: '铝扣板',
    img: 'https://img.asman.com.cn/assets/1567159401586_94932.png'
  },
  {
    key: 2,
    value: 'BM-XT-SM-0006',
    name: '石膏板',
    img: 'https://img.asman.com.cn/assets/1567159401624_81154.png'
  },
  {
    key: 3,
    value: 'BM-XT-SM-0008',
    name: '原顶刷白',
    img: 'https://img.asman.com.cn/assets/1567159416876_4085.png'
  }
]

export const wallMaterialOptions = [
  {
    key: 1,
    value: 'BM-XT-SM-0002',
    name: '瓷砖',
    img: 'https://img.asman.com.cn/assets/1567159401547_8673.png'
  },
  {
    key: 2,
    value: 'BM-XT-SM-0001',
    name: '壁纸',
    img: 'https://img.asman.com.cn/assets/1567159367101_1225.png'
  },
  {
    key: 3,
    value: 'BM-XT-SM-0018',
    name: '涂料',
    img: 'https://img.asman.com.cn/assets/1567159416851_71544.png'
  }
]

export const ceilingHeightOptions = [
  {
    key: 1,
    value: '2300',
    name: '2300',
  },
  {
    key: 2,
    value: '2350',
    name: '2350',
  },
  {
    key: 3,
    value: '2400',
    name: '2400',
  },
  {
    key: 4,
    value: '2550',
    name: '2550',
  },
]


export const defaultImg = '//asman-client.oss-cn-hangzhou.aliyuncs.com/dev/desing_unit/BM-YZ-FM-0003.jpg?x-oss-process=image/resize,m_fixed,h_114,w_114'