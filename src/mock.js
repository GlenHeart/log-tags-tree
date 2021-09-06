export default {
  success: true,
  errorDetail: null,
  data: [
    {
      id: 'efb9b63b-a981-4079-8a42-0806dc416c2a',
      apiNo: '4125-0100-01',
      apiDesc: '查询订单审方信息',
      successFlag: true,
      invokedConsumeTime: '184ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: 'e0602e9d-078b-4634-80c2-44f8dba16148',
          apiNo: '3121-0011-01',
          apiDesc: '根据订单标识列表获取可收费订单信息',
          successFlag: true,
          invokedConsumeTime: '179ms',
          ties: 'AMTS',
          domain: 'fin',
          subInvocationList: [
            {
              id: '9a0a2be3-6b7a-422d-8de1-0ec834be6a87',
              apiNo: '2120-0233-01',
              apiDesc: '根据订单标识列表获取订单和订单明细信息',
              successFlag: true,
              invokedConsumeTime: '56ms',
              ties: 'BMTS',
              domain: 'fin',
              subInvocationList: [
                {
                  id: 'f0ae0c85-6122-45cd-8d88-0fc3be541f04',
                  apiNo: '1010-5046-01',
                  apiDesc:
                    '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
                  successFlag: true,
                  invokedConsumeTime: '16ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: 'f30ea139-73a7-4620-9dba-3258a690be1f',
                  apiNo: '1010-5046-01',
                  apiDesc:
                    '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
                  successFlag: true,
                  invokedConsumeTime: '17ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                }
              ]
            },
            {
              id: 'b2822541-113e-41c8-8223-4e774574334b',
              apiNo: '1010-5046-01',
              apiDesc:
                '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
              successFlag: true,
              invokedConsumeTime: '19ms',
              ties: 'MDS',
              domain: 'mdm',
              subInvocationList: []
            },
            {
              id: 'ea1c3ae2-c29c-43a9-8e2b-c48acbd12e2e',
              apiNo: '2110-0026-01',
              apiDesc: '处方查询医嘱',
              successFlag: true,
              invokedConsumeTime: '45ms',
              ties: 'BMTS',
              domain: 'cli',
              subInvocationList: []
            },
            {
              id: '4ed43cee-db50-452b-b288-0b1c1adf97b1',
              apiNo: '2180-7031-01',
              apiDesc: '审方结果查询',
              successFlag: true,
              invokedConsumeTime: '15ms',
              ties: 'BMTS',
              domain: 'mat',
              subInvocationList: [
                {
                  id: '8515abbc-55c0-4405-bac7-bec762826dd2',
                  apiNo: '1100-6008-01',
                  apiDesc: '根据库房标识获取药房配置',
                  successFlag: true,
                  invokedConsumeTime: '2ms',
                  ties: 'MDS',
                  domain: 'mat',
                  subInvocationList: []
                }
              ]
            },
            {
              id: 'f7bbba10-103d-49af-980a-58e95bb3c399',
              apiNo: '1010-5026-01',
              apiDesc:
                '根据概念域ids（必填）和体系状态、值状态查询值、值（值名称、拼音码、五笔码、valueNo）模糊查询值集列表',
              successFlag: true,
              invokedConsumeTime: '18ms',
              ties: 'MDS',
              domain: 'mdm',
              subInvocationList: []
            }
          ]
        }
      ]
    },
    {
      id: '59ef2788-1cab-497f-8fa3-3d2e78ba7b43',
      apiNo: '3210-1401-01',
      apiDesc: '个性化查询接口',
      successFlag: true,
      invokedConsumeTime: '18ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '66e615b6-8905-4382-8fa0-b5110398ed56',
          apiNo: null,
          apiDesc: '查询偏好设置',
          successFlag: true,
          invokedConsumeTime: '9ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        }
      ]
    },
    {
      id: 'eadbd48d-4119-4bd0-8cd1-2f333c89a321',
      apiNo: '3210-1030-01',
      apiDesc: '获取个人默认方案',
      successFlag: true,
      invokedConsumeTime: '2ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: []
    },
    {
      id: '3669da08-14e6-4ff5-8ffc-30a31fbdf0ee',
      apiNo: '3210-1407-01',
      apiDesc: 'HIS新版本-搜索已配置方案列表',
      successFlag: true,
      invokedConsumeTime: '29ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: 'e42d44ce-0954-4502-8b56-5fd63e2e86b4',
          apiNo: '1010-5057-01',
          apiDesc: '根据值集Ids查询值集列表',
          successFlag: true,
          invokedConsumeTime: '18ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        }
      ]
    },
    {
      id: 'd3bd7ac3-4137-48a9-8ca4-058441327640',
      apiNo: '4010-3017-01',
      apiDesc:
        '根据userId获取用户可以登入的系统信息(包含用户自身和对应角色的菜单)',
      successFlag: true,
      invokedConsumeTime: '105ms',
      ties: 'MAS',
      domain: null,
      subInvocationList: [
        {
          id: '042a0f15-6d9d-4d75-8832-5c75454cfd04',
          apiNo: '1010-3009-01',
          apiDesc:
            '根据userId查询应用系统,获取用户可以登入的系统(包含用户自身和对应角色的)',
          successFlag: true,
          invokedConsumeTime: '89ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        },
        {
          id: 'e4349f28-66d6-489d-a819-4d3e9af69224',
          apiNo: '1010-3021-01',
          apiDesc: '查询系统别名信息',
          successFlag: true,
          invokedConsumeTime: '6ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        }
      ]
    },
    {
      id: '8ec9ca08-c26e-460c-8cbb-c0acf3006fb1',
      apiNo: '3210-1081-01',
      apiDesc: 'portal入口中心数据统计',
      successFlag: true,
      invokedConsumeTime: '164ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: 'd2abfb98-d8ce-4740-8c6f-9035c32f14b6',
          apiNo: '3152-71003-01',
          apiDesc: '就诊列表人数统计',
          successFlag: true,
          invokedConsumeTime: '29ms',
          ties: 'AMTS',
          domain: 'enc',
          subInvocationList: []
        },
        {
          id: '37a06d6e-aa6a-40a1-bc17-93006a5253cf',
          apiNo: '3151-2016-01',
          apiDesc: '查询住院床位卡计数',
          successFlag: true,
          invokedConsumeTime: '102ms',
          ties: 'AMTS',
          domain: 'enc',
          subInvocationList: [
            {
              id: '7c9873c2-cc37-4a61-97a5-d7c9b197f371',
              apiNo: '1010-4049-01',
              apiDesc: '根据员工ids查询组织信息',
              successFlag: true,
              invokedConsumeTime: '33ms',
              ties: 'MDS',
              domain: 'mdm',
              subInvocationList: []
            },
            {
              id: 'd1eb7edf-5282-4479-b19c-034ad3d38bb6',
              apiNo: '1010-4049-01',
              apiDesc: '根据员工ids查询组织信息',
              successFlag: true,
              invokedConsumeTime: '16ms',
              ties: 'MDS',
              domain: 'mdm',
              subInvocationList: []
            }
          ]
        }
      ]
    },
    {
      id: '75ae3ea8-e2e5-4e8b-a76f-0b72210b5c53',
      apiNo: '3210-1022-01',
      apiDesc: '查询我的全部日程',
      successFlag: true,
      invokedConsumeTime: '14ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: []
    },
    {
      id: 'be4cb759-00b0-4150-8953-6d5f0aacadaa',
      apiNo: '3210-1019-01',
      apiDesc: '查询指定医生的通知公告',
      successFlag: true,
      invokedConsumeTime: '32ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: []
    },
    {
      id: '22e186a2-338e-45fa-882a-23131b0e816c',
      apiNo: '4010-3018-01',
      apiDesc: '根据userId和菜单Id获取用户的页面元素',
      successFlag: true,
      invokedConsumeTime: '723ms',
      ties: 'MAS',
      domain: null,
      subInvocationList: [
        {
          id: '7d49d093-4b3e-41e5-86a0-5706532be44d',
          apiNo: '1010-3034-01',
          apiDesc:
            '根据用户Id（必选），菜单id（必选）查询元素(包含用户自身已选择的元素和对应角色的元素)',
          successFlag: true,
          invokedConsumeTime: '712ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        }
      ]
    },
    {
      id: '0aa2bbbe-d3ed-4764-9b7d-803ae153956a',
      apiNo: '4160-4105-01',
      apiDesc: '待配药-多条件查询中草药配药申请明细列表',
      successFlag: true,
      invokedConsumeTime: '1369ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: 'e197c435-ba10-446e-80d5-c9ae3d235b60',
          apiNo: '3160-2101-01',
          apiDesc: '住院药房发药查询发药申请按医嘱明细',
          successFlag: true,
          invokedConsumeTime: '1324ms',
          ties: 'AMTS',
          domain: 'mat',
          subInvocationList: [
            {
              id: '61acc352-5294-4f86-9c0e-0e79b52b47b3',
              apiNo: '2160-2102-01',
              apiDesc: '药房发药申请明细列表查询',
              successFlag: true,
              invokedConsumeTime: '565ms',
              ties: 'BMTS',
              domain: 'mat',
              subInvocationList: []
            },
            {
              id: 'dfa4f29c-ab97-4553-a5b5-1e9784b8136c',
              apiNo: '1100-6120-01',
              apiDesc:
                '多条件（药房组织标识、药品类型、药品剂型、启用标志、药品名称、拼音码、五笔码、助记码 ）分页查询药品商品目录列表  不超过100个',
              successFlag: true,
              invokedConsumeTime: '107ms',
              ties: 'MDS',
              domain: 'mat',
              subInvocationList: []
            },
            {
              id: '3d0da391-62a4-47d9-8778-8ca763574a5d',
              apiNo: '1100-2001-01',
              apiDesc:
                '批量查询(根据medicineIds)药品商品、药品服务相关所有聚合信息(不支持分页,限制ids 500个)',
              successFlag: true,
              invokedConsumeTime: '7ms',
              ties: 'MDS',
              domain: 'mat',
              subInvocationList: []
            },
            {
              id: '1dd12ff4-1821-4b68-ac24-c0649b561136',
              apiNo: '2160-2116-01',
              apiDesc: '库房药品入库批次查询-根据药品标识列表',
              successFlag: true,
              invokedConsumeTime: '31ms',
              ties: 'BMTS',
              domain: 'mat',
              subInvocationList: []
            },
            {
              id: '6a629452-23be-46c2-8fbd-1c68d91db1e7',
              apiNo: '2112-2028-01',
              apiDesc: '根据标识查询所有医嘱信息',
              successFlag: true,
              invokedConsumeTime: '73ms',
              ties: 'BMTS',
              domain: 'cli',
              subInvocationList: []
            },
            {
              id: 'cdf09b03-311d-466b-9b37-1bde017e8aa5',
              apiNo: '2153-1001-01',
              apiDesc: '查询banner图基本信息',
              successFlag: true,
              invokedConsumeTime: '202ms',
              ties: 'BMTS',
              domain: 'enc',
              subInvocationList: [
                {
                  id: '66a90704-7a55-4dc4-bfa4-953c8ab2561e',
                  apiNo: '1010-4000-01',
                  apiDesc: '跟据临床业务单元id获取临床业务单元信息',
                  successFlag: true,
                  invokedConsumeTime: '34ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: 'd6466c00-99ea-44c7-8a71-d6617956890d',
                  apiNo: '1150-17003-01',
                  apiDesc: '获取单个住院病床服务',
                  successFlag: true,
                  invokedConsumeTime: '63ms',
                  ties: 'MDS',
                  domain: 'enc',
                  subInvocationList: []
                }
              ]
            },
            {
              id: '32ea3edb-480e-4d09-9e43-d2a1e8559a9b',
              apiNo: '2100-9006-01',
              apiDesc: '根据开立单位查询药品库存信息(最大500条药品)',
              successFlag: true,
              invokedConsumeTime: '7ms',
              ties: 'BMTS',
              domain: 'mat',
              subInvocationList: [
                {
                  id: '09e35ef1-16c3-4ae9-8e3e-febdd27abaa8',
                  apiNo: '1100-2004-01',
                  apiDesc:
                    '批量查询(根据medicineIds)药品商品单位换算相关聚合信息(不支持分页,限制ids 500个)',
                  successFlag: true,
                  invokedConsumeTime: '1ms',
                  ties: 'MDS',
                  domain: 'mat',
                  subInvocationList: []
                }
              ]
            },
            {
              id: 'e9c753f9-2dcb-47b1-a05d-9bdbfb2e05a8',
              apiNo: '2140-1002-01',
              apiDesc: '多个患者信息查询',
              successFlag: true,
              invokedConsumeTime: '524ms',
              ties: 'BMTS',
              domain: 'per',
              subInvocationList: [
                {
                  id: '5d47ca72-a552-4c3f-8263-1543b3b8aef0',
                  apiNo: '1010-4058-01',
                  apiDesc:
                    '根据当前传入的医院soid查询其所有上级组织，返回包含自身的接口',
                  successFlag: true,
                  invokedConsumeTime: '8ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: '6a2f0895-f3a4-416e-86ad-afed3a020a49',
                  apiNo: '1140-1007-01',
                  apiDesc: '据年龄配置方案获取年龄配置信息',
                  successFlag: true,
                  invokedConsumeTime: '2ms',
                  ties: 'MDS',
                  domain: 'per',
                  subInvocationList: []
                },
                {
                  id: '6dec4f7a-9bca-4c33-83d0-b939101a6a2f',
                  apiNo: '1120-0222-01',
                  apiDesc:
                    '医疗保险-根据医疗机构的医疗保险标识列表查询医院医疗保险',
                  successFlag: true,
                  invokedConsumeTime: '250ms',
                  ties: 'MDS',
                  domain: 'fin',
                  subInvocationList: []
                }
              ]
            },
            {
              id: '20e66346-cc41-4c88-8809-a6ebf4e8c8cf',
              apiNo: '2163-4000-02',
              apiDesc: '查询多个患者的就诊诊断',
              successFlag: true,
              invokedConsumeTime: '94ms',
              ties: 'BMTS',
              domain: 'cli',
              subInvocationList: []
            }
          ]
        },
        {
          id: '5f881424-1a12-44f8-8eee-dc886c3f862a',
          apiNo: '1010-5030-01',
          apiDesc: '根据值集Ids查询值集列表',
          successFlag: true,
          invokedConsumeTime: '23ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        }
      ]
    },
    {
      id: '3ab0d529-c55b-4468-8463-8569647833a7',
      apiNo: '3210-1501-12',
      apiDesc: '查询快捷键设置',
      successFlag: true,
      invokedConsumeTime: '105ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '6eee30bd-9e2e-4832-91c0-69752ba1017b',
          apiNo: '1010-5046-01',
          apiDesc:
            '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
          successFlag: true,
          invokedConsumeTime: '50ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        },
        {
          id: 'a5a669f6-0615-4364-bf07-12c27b1789d9',
          apiNo: null,
          apiDesc: '查询偏好设置',
          successFlag: true,
          invokedConsumeTime: '45ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        }
      ]
    },
    {
      id: '7bddbdca-5e66-4bd5-891f-91dabfebe600',
      apiNo: '3210-1501-10',
      apiDesc: '查询个人字号个性化设置',
      successFlag: true,
      invokedConsumeTime: '45ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '5d6ddc5a-26ae-42fb-89fc-1a067b6bebcc',
          apiNo: null,
          apiDesc: '查询偏好设置',
          successFlag: true,
          invokedConsumeTime: '39ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        }
      ]
    },
    {
      id: '2ca1bf63-c2e7-4ecd-b4b1-4cda2521bb4e',
      apiNo: '3210-1501-02',
      apiDesc: '根据用户标识查询可访问的系统及应用菜单',
      successFlag: true,
      invokedConsumeTime: '512ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '6e81d8b4-bcdd-475d-a10b-16085b339a7d',
          apiNo: '1010-3009-01',
          apiDesc:
            '根据userId查询应用系统,获取用户可以登入的系统(包含用户自身和对应角色的)',
          successFlag: true,
          invokedConsumeTime: '241ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        },
        {
          id: 'af2b284c-d385-4d36-86a7-013150b0857a',
          apiNo: '1010-3033-01',
          apiDesc:
            '根据用户Id（必选），系统id（必选）查询应用菜单(包含用户自身已选择的菜单和对应角色的菜单)',
          successFlag: true,
          invokedConsumeTime: '251ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        }
      ]
    },
    {
      id: 'd6b7963e-fee9-461e-8939-95599e0f5056',
      apiNo: '3210-1501-08',
      apiDesc: '通过员工id 查询个性化设置',
      successFlag: true,
      invokedConsumeTime: '60ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '91242543-2dbf-4cdd-b7a9-12d4b04b0320',
          apiNo: null,
          apiDesc: '查询偏好设置',
          successFlag: true,
          invokedConsumeTime: '54ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        }
      ]
    },
    {
      id: '021d60dd-6efe-411a-8cb0-052e3504c851',
      apiNo: '3210-1501-04',
      apiDesc: '查询菜单的操作设置项列表',
      successFlag: true,
      invokedConsumeTime: '33ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: 'c6d3da52-5377-4e65-8f94-5294e6ea47bf',
          apiNo: '1120-0375-01',
          apiDesc: '根据菜单标识列表查询操作设置项列表',
          successFlag: true,
          invokedConsumeTime: '11ms',
          ties: 'MDS',
          domain: 'fin',
          subInvocationList: []
        },
        {
          id: '0ed3530a-53c9-4ab5-8859-d8ba86ee4d23',
          apiNo: '1120-0376-01',
          apiDesc: '根据操作设置项标识列表查询操作设置项列表',
          successFlag: true,
          invokedConsumeTime: '9ms',
          ties: 'MDS',
          domain: 'fin',
          subInvocationList: []
        }
      ]
    },
    {
      id: 'baeb9a96-ed47-4693-8f73-6f572ae1e03a',
      apiNo: '3210-1501-02',
      apiDesc: '根据用户标识查询可访问的系统及应用菜单',
      successFlag: true,
      invokedConsumeTime: '533ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '93c5aa47-0bfd-48b2-878c-2bf0635ac2fe',
          apiNo: '1010-3009-01',
          apiDesc:
            '根据userId查询应用系统,获取用户可以登入的系统(包含用户自身和对应角色的)',
          successFlag: true,
          invokedConsumeTime: '228ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        },
        {
          id: '71a20a3a-6a3b-4d5e-b562-3bf7eab90253',
          apiNo: '1010-3033-01',
          apiDesc:
            '根据用户Id（必选），系统id（必选）查询应用菜单(包含用户自身已选择的菜单和对应角色的菜单)',
          successFlag: true,
          invokedConsumeTime: '288ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        }
      ]
    },
    {
      id: 'a7757a02-5b47-46dd-8078-2c40f1113e9a',
      apiNo: '3210-1501-11',
      apiDesc: '保存快捷键设置',
      successFlag: true,
      invokedConsumeTime: '186ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '8eeecb4b-157e-4255-8753-4f029dc2b704',
          apiNo: '1010-5046-01',
          apiDesc:
            '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
          successFlag: true,
          invokedConsumeTime: '94ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        },
        {
          id: '6128fd7d-2869-4234-82f9-f4056b8edf11',
          apiNo: null,
          apiDesc: '保存偏好设置',
          successFlag: true,
          invokedConsumeTime: '81ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        }
      ]
    },
    {
      id: '1b564637-dd09-453e-88e6-e7d5a8904974',
      apiNo: '3210-1030-01',
      apiDesc: '获取个人默认方案',
      successFlag: true,
      invokedConsumeTime: '14ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: []
    },
    {
      id: '7e3da47f-74cb-4758-8699-8b9f6fedb183',
      apiNo: '3210-1407-01',
      apiDesc: 'HIS新版本-搜索已配置方案列表',
      successFlag: true,
      invokedConsumeTime: '65ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '9d9b0e9d-2cf1-46e1-8854-78574d71303f',
          apiNo: '1010-5057-01',
          apiDesc: '根据值集Ids查询值集列表',
          successFlag: true,
          invokedConsumeTime: '45ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        }
      ]
    },
    {
      id: '5a96132f-58ad-4611-8576-a061d553f3ab',
      apiNo: '3210-1029-01',
      apiDesc: '保存个人默认方案',
      successFlag: true,
      invokedConsumeTime: '82ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: []
    },
    {
      id: '123b5ad4-8e90-4f8c-aaae-cd591ddfb9ec',
      apiNo: '3210-1501-02',
      apiDesc: '根据用户标识查询可访问的系统及应用菜单',
      successFlag: true,
      invokedConsumeTime: '512ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '3aec9e3e-dd67-49f5-8c14-6ea7bb88477e',
          apiNo: '1010-3009-01',
          apiDesc:
            '根据userId查询应用系统,获取用户可以登入的系统(包含用户自身和对应角色的)',
          successFlag: true,
          invokedConsumeTime: '193ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        },
        {
          id: 'b3f30ec2-9f9c-483d-81a3-b3c7d17d40fb',
          apiNo: '1010-3033-01',
          apiDesc:
            '根据用户Id（必选），系统id（必选）查询应用菜单(包含用户自身已选择的菜单和对应角色的菜单)',
          successFlag: true,
          invokedConsumeTime: '298ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        }
      ]
    },
    {
      id: '748226ea-8c03-444b-8aad-5eb71e3f6acf',
      apiNo: '3210-1501-08',
      apiDesc: '通过员工id 查询个性化设置',
      successFlag: true,
      invokedConsumeTime: '36ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: 'b6a59264-d947-40eb-a900-73561ba3bb94',
          apiNo: null,
          apiDesc: '查询偏好设置',
          successFlag: true,
          invokedConsumeTime: '29ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        }
      ]
    },
    {
      id: '96d05720-7cb5-4db2-83d9-b2a0a1a4a9de',
      apiNo: '3210-1022-01',
      apiDesc: '查询我的全部日程',
      successFlag: true,
      invokedConsumeTime: '13ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: []
    },
    {
      id: '4bc6aeeb-67fd-4858-a23a-ef1bff668ce7',
      apiNo: '3210-1019-01',
      apiDesc: '查询指定医生的通知公告',
      successFlag: true,
      invokedConsumeTime: '28ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: []
    },
    {
      id: '7c78ec8e-04bc-4007-8d25-ffac27ff3a80',
      apiNo: '4010-3002-01',
      apiDesc:
        '根据用户id（必填）和系统id（必填）查询菜单（包含用户自身和对应角色的菜单）',
      successFlag: true,
      invokedConsumeTime: '389ms',
      ties: 'MAS',
      domain: null,
      subInvocationList: [
        {
          id: '63448379-1abd-452d-90e6-87747f72a269',
          apiNo: '1010-3006-01',
          apiDesc: '根据系统id（必填）查询该系统的所有菜单api（不支持分页）',
          successFlag: true,
          invokedConsumeTime: '30ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        },
        {
          id: '4b61c108-16b9-4798-8c87-5c91fa8c59dc',
          apiNo: '1010-3033-01',
          apiDesc:
            '根据用户Id（必选），系统id（必选）查询应用菜单(包含用户自身已选择的菜单和对应角色的菜单)',
          successFlag: true,
          invokedConsumeTime: '340ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        }
      ]
    },
    {
      id: 'a53b8009-2c11-4a48-9a38-cdadcbff5c30',
      apiNo: '3210-1032-01',
      apiDesc: '查询portal图片发布信息',
      successFlag: true,
      invokedConsumeTime: '17ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: []
    },
    {
      id: 'fad0d520-e97b-4849-8a21-49421a706091',
      apiNo: '3210-1501-02',
      apiDesc: '根据用户标识查询可访问的系统及应用菜单',
      successFlag: true,
      invokedConsumeTime: '328ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: 'fb72c2cb-3783-40f1-8b97-b5b85908a819',
          apiNo: '1010-3009-01',
          apiDesc:
            '根据userId查询应用系统,获取用户可以登入的系统(包含用户自身和对应角色的)',
          successFlag: true,
          invokedConsumeTime: '106ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        },
        {
          id: '17448054-477d-4cad-8930-9475d2d64a7e',
          apiNo: '1010-3033-01',
          apiDesc:
            '根据用户Id（必选），系统id（必选）查询应用菜单(包含用户自身已选择的菜单和对应角色的菜单)',
          successFlag: true,
          invokedConsumeTime: '206ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        }
      ]
    },
    {
      id: '8cf328b1-29f1-4cac-8ec2-4e73e5cbf071',
      apiNo: '3210-1501-05',
      apiDesc: '获取操作设置项数据集',
      successFlag: true,
      invokedConsumeTime: '71ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '6d7746d8-efa0-4e28-81f4-86bbee3fec7e',
          apiNo: '1120-0376-01',
          apiDesc: '根据操作设置项标识列表查询操作设置项列表',
          successFlag: true,
          invokedConsumeTime: '3ms',
          ties: 'MDS',
          domain: 'fin',
          subInvocationList: []
        }
      ]
    },
    {
      id: 'b28af5ba-9e9c-41e4-91b7-1142e0c686df',
      apiNo: '1100-12000-01',
      apiDesc: '操作设置项-当前库房,个人库房查询',
      successFlag: true,
      invokedConsumeTime: '58ms',
      ties: 'MDS',
      domain: 'mat',
      subInvocationList: []
    },
    {
      id: 'ecd4f3f5-5522-4864-8cda-682c52a84727',
      apiNo: '4142-5001-01',
      apiDesc: '获取读卡组件配置信息',
      successFlag: true,
      invokedConsumeTime: '39ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '83e3bcad-1544-4938-8caa-e7ca804509c2',
          apiNo: '1010-4058-01',
          apiDesc:
            '根据当前传入的医院soid查询其所有上级组织，返回包含自身的接口',
          successFlag: true,
          invokedConsumeTime: '15ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        },
        {
          id: '693487f5-a102-4665-8ea6-005cd181b0c3',
          apiNo: '1140-71015-01',
          apiDesc: '根据综合检索组件代码查询综合检索组件信息',
          successFlag: true,
          invokedConsumeTime: '15ms',
          ties: 'MDS',
          domain: 'per',
          subInvocationList: []
        }
      ]
    },
    {
      id: 'e2c99862-beac-4a62-8fc8-73488c4c776a',
      apiNo: '4010-4043-01',
      apiDesc: '获取业务单元列表界面的树形结构',
      successFlag: true,
      invokedConsumeTime: '323ms',
      ties: 'MAS',
      domain: null,
      subInvocationList: [
        {
          id: '30c2b512-56bf-4c7b-853a-f367a5430ba0',
          apiNo: '1010-4008-01',
          apiDesc:
            '根据员工标识、业务单元类型，组织状态，组织名称、拼音码、五笔码（模糊查询）业务单元',
          successFlag: true,
          invokedConsumeTime: '313ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        }
      ]
    },
    {
      id: 'c20cda52-6ae1-4a37-926c-b7f8d7f59a5e',
      apiNo: '4160-0002-01',
      apiDesc: '药房药柜信息查询',
      successFlag: false,
      invokedConsumeTime: '7ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '821bfc5d-69d3-4310-85c9-955f859d9966',
          apiNo: '1100-6002-01',
          apiDesc: '根据库房标识查询库房信息（同时支持药柜标识查询）',
          successFlag: false,
          invokedConsumeTime: '0ms',
          ties: 'MDS',
          domain: 'mat',
          subInvocationList: []
        }
      ]
    },
    {
      id: 'd8c02b98-5b8c-4b12-8a4e-5296d57b3190',
      apiNo: '4010-3002-01',
      apiDesc:
        '根据用户id（必填）和系统id（必填）查询菜单（包含用户自身和对应角色的菜单）',
      successFlag: true,
      invokedConsumeTime: '346ms',
      ties: 'MAS',
      domain: null,
      subInvocationList: [
        {
          id: '3b74b4c7-d0ce-4abb-879e-95bda45daba5',
          apiNo: '1010-3006-01',
          apiDesc: '根据系统id（必填）查询该系统的所有菜单api（不支持分页）',
          successFlag: true,
          invokedConsumeTime: '41ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        },
        {
          id: 'bfbd4c78-c78e-4512-89a2-1d6fc8488bd3',
          apiNo: '1010-3033-01',
          apiDesc:
            '根据用户Id（必选），系统id（必选）查询应用菜单(包含用户自身已选择的菜单和对应角色的菜单)',
          successFlag: true,
          invokedConsumeTime: '288ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        }
      ]
    },
    {
      id: '4e2191aa-987a-4e6a-9553-793a6808d959',
      apiNo: '4160-0007-01',
      apiDesc: '条件（单据类型名称）领药单列表查询',
      successFlag: true,
      invokedConsumeTime: '11ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '6cac4df2-eede-4964-800c-061be509fd70',
          apiNo: '1100-4002-01',
          apiDesc: '条件（单据类型名称）领药单列表查询',
          successFlag: true,
          invokedConsumeTime: '5ms',
          ties: 'MDS',
          domain: 'mat',
          subInvocationList: []
        }
      ]
    },
    {
      id: 'c8449560-d043-48e3-a2bd-8ecd65425594',
      apiNo: '4160-0008-01',
      apiDesc: '根据概念域术语查询术语信息',
      successFlag: true,
      invokedConsumeTime: '51ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '43ee9865-546b-4645-8051-4238ab2af3d9',
          apiNo: '1010-5026-01',
          apiDesc:
            '根据概念域ids（必填）和体系状态、值状态查询值、值（值名称、拼音码、五笔码、valueNo）模糊查询值集列表',
          successFlag: true,
          invokedConsumeTime: '45ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        }
      ]
    },
    {
      id: '78682fc6-b575-4bad-808a-ff3c4432817d',
      apiNo: '4160-1201-01',
      apiDesc: '查询住院药房配置项信息',
      successFlag: true,
      invokedConsumeTime: '8ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '70a1adef-5064-4e42-8d40-ccc61f697ccd',
          apiNo: '1100-16001-01',
          apiDesc: '查询住院药房配置项信息',
          successFlag: true,
          invokedConsumeTime: '3ms',
          ties: 'MDS',
          domain: 'mat',
          subInvocationList: []
        }
      ]
    },
    {
      id: '6cdf5e74-f50a-4d57-855d-c9519ca01925',
      apiNo: '3210-1501-05',
      apiDesc: '获取操作设置项数据集',
      successFlag: true,
      invokedConsumeTime: '25ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '6ef90103-b0c3-48e7-8dfb-1c575293b429',
          apiNo: '1120-0376-01',
          apiDesc: '根据操作设置项标识列表查询操作设置项列表',
          successFlag: true,
          invokedConsumeTime: '5ms',
          ties: 'MDS',
          domain: 'fin',
          subInvocationList: []
        }
      ]
    },
    {
      id: 'ad55fea6-7b89-4225-82d1-76db15da8ea3',
      apiNo: '1100-12000-01',
      apiDesc: '操作设置项-当前库房,个人库房查询',
      successFlag: true,
      invokedConsumeTime: '11ms',
      ties: 'MDS',
      domain: 'mat',
      subInvocationList: []
    },
    {
      id: '400cd14f-57db-4ed4-b264-ae0ef3010431',
      apiNo: '4160-4105-01',
      apiDesc: '待配药-多条件查询中草药配药申请明细列表',
      successFlag: true,
      invokedConsumeTime: '411ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '2ff61cbb-73da-47fa-836d-51c0c9352816',
          apiNo: '3160-2101-01',
          apiDesc: '住院药房发药查询发药申请按医嘱明细',
          successFlag: true,
          invokedConsumeTime: '390ms',
          ties: 'AMTS',
          domain: 'mat',
          subInvocationList: [
            {
              id: 'c624311c-eb7f-4425-826b-800cb358e81e',
              apiNo: '2160-2102-01',
              apiDesc: '药房发药申请明细列表查询',
              successFlag: true,
              invokedConsumeTime: '85ms',
              ties: 'BMTS',
              domain: 'mat',
              subInvocationList: []
            },
            {
              id: 'd613ce51-7b07-4b35-9b44-ac8a28a70822',
              apiNo: '1100-2001-01',
              apiDesc:
                '批量查询(根据medicineIds)药品商品、药品服务相关所有聚合信息(不支持分页,限制ids 500个)',
              successFlag: true,
              invokedConsumeTime: '23ms',
              ties: 'MDS',
              domain: 'mat',
              subInvocationList: []
            },
            {
              id: 'f15221a9-c10f-46cc-b327-774c378fa63a',
              apiNo: '2100-9006-01',
              apiDesc: '根据开立单位查询药品库存信息(最大500条药品)',
              successFlag: true,
              invokedConsumeTime: '11ms',
              ties: 'BMTS',
              domain: 'mat',
              subInvocationList: [
                {
                  id: '3b266630-87b0-448a-852a-87c467de3f0b',
                  apiNo: '1100-2004-01',
                  apiDesc:
                    '批量查询(根据medicineIds)药品商品单位换算相关聚合信息(不支持分页,限制ids 500个)',
                  successFlag: true,
                  invokedConsumeTime: '3ms',
                  ties: 'MDS',
                  domain: 'mat',
                  subInvocationList: []
                }
              ]
            },
            {
              id: '06ee37f8-7e99-4193-82f5-d15e90e68316',
              apiNo: '2153-1001-01',
              apiDesc: '查询banner图基本信息',
              successFlag: true,
              invokedConsumeTime: '34ms',
              ties: 'BMTS',
              domain: 'enc',
              subInvocationList: [
                {
                  id: 'b780ec14-4366-4111-8910-234458a033f5',
                  apiNo: '1010-4000-01',
                  apiDesc: '跟据临床业务单元id获取临床业务单元信息',
                  successFlag: true,
                  invokedConsumeTime: '8ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                }
              ]
            },
            {
              id: 'fa7ea2ee-1b1c-4c97-861e-b4f511f7aa5d',
              apiNo: '2112-2028-01',
              apiDesc: '根据标识查询所有医嘱信息',
              successFlag: true,
              invokedConsumeTime: '42ms',
              ties: 'BMTS',
              domain: 'cli',
              subInvocationList: []
            },
            {
              id: '7462e172-7062-4b82-8610-1eaad0b34ae5',
              apiNo: '2160-2116-01',
              apiDesc: '库房药品入库批次查询-根据药品标识列表',
              successFlag: true,
              invokedConsumeTime: '46ms',
              ties: 'BMTS',
              domain: 'mat',
              subInvocationList: []
            },
            {
              id: '866516ef-cf4b-4668-afc3-febed92ebe35',
              apiNo: '1100-6120-01',
              apiDesc:
                '多条件（药房组织标识、药品类型、药品剂型、启用标志、药品名称、拼音码、五笔码、助记码 ）分页查询药品商品目录列表  不超过100个',
              successFlag: true,
              invokedConsumeTime: '41ms',
              ties: 'MDS',
              domain: 'mat',
              subInvocationList: []
            },
            {
              id: '7acff901-5670-43d4-8224-4596b00ed6f9',
              apiNo: '1100-6120-01',
              apiDesc:
                '多条件（药房组织标识、药品类型、药品剂型、启用标志、药品名称、拼音码、五笔码、助记码 ）分页查询药品商品目录列表  不超过100个',
              successFlag: true,
              invokedConsumeTime: '19ms',
              ties: 'MDS',
              domain: 'mat',
              subInvocationList: []
            },
            {
              id: 'bb1b56c2-bfd6-4697-88cf-507da4e1d857',
              apiNo: '2163-4000-02',
              apiDesc: '查询多个患者的就诊诊断',
              successFlag: true,
              invokedConsumeTime: '8ms',
              ties: 'BMTS',
              domain: 'cli',
              subInvocationList: []
            },
            {
              id: '35db2ee2-8c27-4507-b835-02a5a8fef16b',
              apiNo: '2140-1002-01',
              apiDesc: '多个患者信息查询',
              successFlag: true,
              invokedConsumeTime: '213ms',
              ties: 'BMTS',
              domain: 'per',
              subInvocationList: [
                {
                  id: '33c87872-9beb-4ba7-854a-7df8e4cba20b',
                  apiNo: '1010-4058-01',
                  apiDesc:
                    '根据当前传入的医院soid查询其所有上级组织，返回包含自身的接口',
                  successFlag: true,
                  invokedConsumeTime: '23ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: '4547edf3-e1af-4c0b-8a66-20f26eea9b45',
                  apiNo: '1140-1007-01',
                  apiDesc: '据年龄配置方案获取年龄配置信息',
                  successFlag: true,
                  invokedConsumeTime: '3ms',
                  ties: 'MDS',
                  domain: 'per',
                  subInvocationList: []
                },
                {
                  id: '34578c58-f00c-47bb-af64-c1e1c470bbf7',
                  apiNo: '1120-0222-01',
                  apiDesc:
                    '医疗保险-根据医疗机构的医疗保险标识列表查询医院医疗保险',
                  successFlag: true,
                  invokedConsumeTime: '121ms',
                  ties: 'MDS',
                  domain: 'fin',
                  subInvocationList: []
                }
              ]
            }
          ]
        },
        {
          id: 'f98b789a-7344-4527-8734-952dd64f3bbf',
          apiNo: '1010-5030-01',
          apiDesc: '根据值集Ids查询值集列表',
          successFlag: true,
          invokedConsumeTime: '6ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        }
      ]
    },
    {
      id: 'a0342b4a-c5c5-4c15-8170-a003c50826d3',
      apiNo: '4160-0002-01',
      apiDesc: '药房药柜信息查询',
      successFlag: true,
      invokedConsumeTime: '28ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: 'b0c80c91-9d82-414a-8707-c2f1cc836095',
          apiNo: '1100-6002-01',
          apiDesc: '根据库房标识查询库房信息（同时支持药柜标识查询）',
          successFlag: true,
          invokedConsumeTime: '21ms',
          ties: 'MDS',
          domain: 'mat',
          subInvocationList: []
        }
      ]
    },
    {
      id: 'abf85bf2-1d0d-4c00-8ea5-c969efb3adfa',
      apiNo: '4160-2101-01',
      apiDesc: '未发药-多条件查询待发药申请单',
      successFlag: true,
      invokedConsumeTime: '92ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: 'ed56c4a4-444a-46f1-82a9-d243a2e03997',
          apiNo: '2160-3106-01',
          apiDesc: '住院退药申请列表/住院退药申请详情列表',
          successFlag: true,
          invokedConsumeTime: '44ms',
          ties: 'BMTS',
          domain: 'mat',
          subInvocationList: []
        },
        {
          id: '9326d76e-20b0-4ea2-8b03-d5045e7fe931',
          apiNo: '2160-2101-01',
          apiDesc: '药房发药申请单列表查询',
          successFlag: true,
          invokedConsumeTime: '65ms',
          ties: 'BMTS',
          domain: 'mat',
          subInvocationList: []
        },
        {
          id: '635dac78-8e21-4c98-94f0-9e96bbc58fa1',
          apiNo: '1100-4008-01',
          apiDesc: '批量查询领药单据类型列表(不支持分页,限制100)',
          successFlag: true,
          invokedConsumeTime: '13ms',
          ties: 'MDS',
          domain: 'mat',
          subInvocationList: []
        }
      ]
    },
    {
      id: 'd0d9823f-78f5-473c-8ef8-2d9b0207e357',
      apiNo: '4160-2104-01',
      apiDesc: '已发药-根据条件查询发药单药品金额',
      successFlag: true,
      invokedConsumeTime: '47ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '503aa11d-bd4c-430d-8573-2d2a525dfd24',
          apiNo: '2160-2110-01',
          apiDesc: '计算住院药房发药金额',
          successFlag: true,
          invokedConsumeTime: '41ms',
          ties: 'BMTS',
          domain: 'mat',
          subInvocationList: []
        }
      ]
    },
    {
      id: 'e612fab2-ef6e-4c51-a9e1-9bbdfe9570ac',
      apiNo: '4180-1001-01',
      apiDesc: '获取术语信息',
      successFlag: true,
      invokedConsumeTime: '27ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '186e38d4-00ae-4c70-8640-0d6f00495588',
          apiNo: '1010-5004-01',
          apiDesc:
            '根据编码体系ids查询编码体系（编码体系、值、命名空间、计量单位）的聚合(不支持分页，ID限制100个内）',
          successFlag: true,
          invokedConsumeTime: '21ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        }
      ]
    },
    {
      id: 'dcbccd9c-1856-493c-8e32-6a93a51bf473',
      apiNo: '4125-0100-01',
      apiDesc: '查询订单审方信息',
      successFlag: true,
      invokedConsumeTime: '350ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '652fd786-8547-42d1-8a09-b86143b43f6d',
          apiNo: '3121-0011-01',
          apiDesc: '根据订单标识列表获取可收费订单信息',
          successFlag: true,
          invokedConsumeTime: '345ms',
          ties: 'AMTS',
          domain: 'fin',
          subInvocationList: [
            {
              id: '9b5c8075-4541-4a0d-8155-1041098a6d87',
              apiNo: '2120-0233-01',
              apiDesc: '根据订单标识列表获取订单和订单明细信息',
              successFlag: true,
              invokedConsumeTime: '136ms',
              ties: 'BMTS',
              domain: 'fin',
              subInvocationList: [
                {
                  id: 'f141f838-715d-4c8c-8b42-19c8d28b08d9',
                  apiNo: '1010-5046-01',
                  apiDesc:
                    '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
                  successFlag: true,
                  invokedConsumeTime: '55ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: '02e1b231-35b6-41c0-bf86-2bf0641ac229',
                  apiNo: '1010-5046-01',
                  apiDesc:
                    '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
                  successFlag: true,
                  invokedConsumeTime: '11ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                }
              ]
            },
            {
              id: '3a61226a-6220-4e38-bb56-4d381a22a01b',
              apiNo: '1010-5046-01',
              apiDesc:
                '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
              successFlag: true,
              invokedConsumeTime: '7ms',
              ties: 'MDS',
              domain: 'mdm',
              subInvocationList: []
            },
            {
              id: 'edf07c42-5041-4490-8a88-234fbacad4f2',
              apiNo: '2110-0026-01',
              apiDesc: '处方查询医嘱',
              successFlag: true,
              invokedConsumeTime: '126ms',
              ties: 'BMTS',
              domain: 'cli',
              subInvocationList: []
            },
            {
              id: 'ded60811-5d89-4e64-8278-68ea1627de0c',
              apiNo: '2180-7031-01',
              apiDesc: '审方结果查询',
              successFlag: true,
              invokedConsumeTime: '39ms',
              ties: 'BMTS',
              domain: 'mat',
              subInvocationList: [
                {
                  id: '22fbe924-1049-436d-8910-27ad36c4dd9b',
                  apiNo: '1100-6008-01',
                  apiDesc: '根据库房标识获取药房配置',
                  successFlag: true,
                  invokedConsumeTime: '5ms',
                  ties: 'MDS',
                  domain: 'mat',
                  subInvocationList: []
                }
              ]
            },
            {
              id: '65d24e5a-ec81-41ad-8364-8840ba8706a9',
              apiNo: '1010-5026-01',
              apiDesc:
                '根据概念域ids（必填）和体系状态、值状态查询值、值（值名称、拼音码、五笔码、valueNo）模糊查询值集列表',
              successFlag: true,
              invokedConsumeTime: '12ms',
              ties: 'MDS',
              domain: 'mdm',
              subInvocationList: []
            }
          ]
        }
      ]
    },
    {
      id: '6b110e76-6344-4b34-a196-1c1e82bc2868',
      apiNo: '4127-0013-01',
      apiDesc: '依据住院就诊标识获取住院押金账户信息',
      successFlag: true,
      invokedConsumeTime: '595ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '0dacd1e9-e5aa-4e58-8db3-8249d65296f5',
          apiNo: '3123-0027-01',
          apiDesc: '依据住院就诊标识获取住院押金账户信息',
          successFlag: true,
          invokedConsumeTime: '42ms',
          ties: 'AMTS',
          domain: 'fin',
          subInvocationList: [
            {
              id: '55774c5a-d702-44c7-bff8-af1a5c40eeb1',
              apiNo: '2121-0038-01',
              apiDesc: '依据户主类型概念标识+户主标识获取账户标识集合',
              successFlag: true,
              invokedConsumeTime: '22ms',
              ties: 'BMTS',
              domain: 'fin',
              subInvocationList: []
            },
            {
              id: '6a0e761b-f36e-4553-bfa2-89d16d2a6a9a',
              apiNo: '2121-0010-01',
              apiDesc: '根据账户标识查询储蓄账户信息',
              successFlag: true,
              invokedConsumeTime: '11ms',
              ties: 'BMTS',
              domain: 'fin',
              subInvocationList: []
            }
          ]
        },
        {
          id: 'a7311329-e080-41ae-9a16-3a23df9a57cd',
          apiNo: '3151-2001-01',
          apiDesc: '根据就诊标识查询住院就诊信息',
          successFlag: true,
          invokedConsumeTime: '541ms',
          ties: 'AMTS',
          domain: 'enc',
          subInvocationList: [
            {
              id: '411d70b2-5919-47f1-ad55-f51e15250373',
              apiNo: '2153-2001-01',
              apiDesc: '根据就诊标识查询住院就诊信息',
              successFlag: true,
              invokedConsumeTime: '133ms',
              ties: 'BMTS',
              domain: 'enc',
              subInvocationList: [
                {
                  id: '9b564870-c344-4670-8bf8-869c53b9f4ee',
                  apiNo: '1010-4033-01',
                  apiDesc: '根据业务单元Id查询业务单元信息',
                  successFlag: true,
                  invokedConsumeTime: '51ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: '6c90c498-d19f-4703-8cdc-67145cae1700',
                  apiNo: '1010-2005-01',
                  apiDesc:
                    '根据ids（必填）查询职工的聚合（不支持分页，限制ids 100个）',
                  successFlag: true,
                  invokedConsumeTime: '40ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                }
              ]
            },
            {
              id: 'b6e4a85f-aa8e-4259-8eb2-c84eb77d6b48',
              apiNo: '2140-1001-01',
              apiDesc: '患者信息查询',
              successFlag: true,
              invokedConsumeTime: '326ms',
              ties: 'BMTS',
              domain: 'per',
              subInvocationList: [
                {
                  id: '55b837cb-f565-4e47-820a-893267f02cf4',
                  apiNo: '1010-4058-01',
                  apiDesc:
                    '根据当前传入的医院soid查询其所有上级组织，返回包含自身的接口',
                  successFlag: true,
                  invokedConsumeTime: '12ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: '70d10ba6-abb3-4274-ae99-5797e562263e',
                  apiNo: '1140-1007-01',
                  apiDesc: '据年龄配置方案获取年龄配置信息',
                  successFlag: true,
                  invokedConsumeTime: '2ms',
                  ties: 'MDS',
                  domain: 'per',
                  subInvocationList: []
                },
                {
                  id: 'fea2ed02-18b0-4fd6-823e-8930e369c2d7',
                  apiNo: '1120-0222-01',
                  apiDesc:
                    '医疗保险-根据医疗机构的医疗保险标识列表查询医院医疗保险',
                  successFlag: true,
                  invokedConsumeTime: '141ms',
                  ties: 'MDS',
                  domain: 'fin',
                  subInvocationList: []
                }
              ]
            },
            {
              id: '2be23f45-654d-4425-8a12-0fb1de536311',
              apiNo: '1010-5030-01',
              apiDesc: '根据值集Ids查询值集列表',
              successFlag: true,
              invokedConsumeTime: '8ms',
              ties: 'MDS',
              domain: 'mdm',
              subInvocationList: []
            },
            {
              id: 'bdf26125-af53-43ea-9726-0bd44fd1fee2',
              apiNo: '2153-2007-01',
              apiDesc: '查询住院患者就诊信息',
              successFlag: true,
              invokedConsumeTime: '48ms',
              ties: 'BMTS',
              domain: 'enc',
              subInvocationList: [
                {
                  id: '70a2b704-d4d4-477b-ae43-b13faf7f60e4',
                  apiNo: '1150-17004-01',
                  apiDesc: '查询住院病床服务',
                  successFlag: true,
                  invokedConsumeTime: '6ms',
                  ties: 'MDS',
                  domain: 'enc',
                  subInvocationList: []
                },
                {
                  id: 'c6eb0356-6c54-4798-b528-7232e4849f6b',
                  apiNo: '1010-4012-01',
                  apiDesc:
                    '根据ids（必填）查询组织的聚合（不支持分页，限制ids 100个）',
                  successFlag: true,
                  invokedConsumeTime: '15ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'fadd4404-d01c-469c-8946-8fc59b81d273',
      apiNo: '4156-1102-01',
      apiDesc: '住院banner信息查询接口',
      successFlag: true,
      invokedConsumeTime: '898ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: 'b27d1052-857a-491c-8abf-538705a48485',
          apiNo: '2153-2001-01',
          apiDesc: '根据就诊标识查询住院就诊信息',
          successFlag: true,
          invokedConsumeTime: '178ms',
          ties: 'BMTS',
          domain: 'enc',
          subInvocationList: [
            {
              id: '74af414d-919b-46af-978c-d107fc289691',
              apiNo: '1010-4033-01',
              apiDesc: '根据业务单元Id查询业务单元信息',
              successFlag: true,
              invokedConsumeTime: '84ms',
              ties: 'MDS',
              domain: 'mdm',
              subInvocationList: []
            },
            {
              id: '23360b85-a7be-4ef1-a68b-37ec25a576a7',
              apiNo: '1150-17003-01',
              apiDesc: '获取单个住院病床服务',
              successFlag: true,
              invokedConsumeTime: '13ms',
              ties: 'MDS',
              domain: 'enc',
              subInvocationList: []
            },
            {
              id: '59efe912-5635-4da0-8f36-c19a66728755',
              apiNo: '1010-2005-01',
              apiDesc:
                '根据ids（必填）查询职工的聚合（不支持分页，限制ids 100个）',
              successFlag: true,
              invokedConsumeTime: '66ms',
              ties: 'MDS',
              domain: 'mdm',
              subInvocationList: []
            }
          ]
        },
        {
          id: '2266c558-1f65-49d2-8c53-e0f4da4d2275',
          apiNo: '2153-9001-01',
          apiDesc: '查询就诊标签',
          successFlag: true,
          invokedConsumeTime: '3ms',
          ties: 'BMTS',
          domain: 'enc',
          subInvocationList: []
        },
        {
          id: '95af9783-b4d2-4636-9c79-0fde91024fcd',
          apiNo: '2153-5004-01',
          apiDesc: '根据就诊标识获取入院健康概况',
          successFlag: true,
          invokedConsumeTime: '3ms',
          ties: 'BMTS',
          domain: 'enc',
          subInvocationList: []
        },
        {
          id: '8bbd3d3b-62b7-4705-8760-60acc1c84bc9',
          apiNo: '2140-1001-01',
          apiDesc: '患者信息查询',
          successFlag: true,
          invokedConsumeTime: '305ms',
          ties: 'BMTS',
          domain: 'per',
          subInvocationList: [
            {
              id: 'b8b33312-8e7b-4303-8e97-be4716c98491',
              apiNo: '1010-4058-01',
              apiDesc:
                '根据当前传入的医院soid查询其所有上级组织，返回包含自身的接口',
              successFlag: true,
              invokedConsumeTime: '4ms',
              ties: 'MDS',
              domain: 'mdm',
              subInvocationList: []
            },
            {
              id: '3f5b84ec-a481-4c61-a3ef-f76a69e6cbc6',
              apiNo: '1140-1007-01',
              apiDesc: '据年龄配置方案获取年龄配置信息',
              successFlag: true,
              invokedConsumeTime: '2ms',
              ties: 'MDS',
              domain: 'per',
              subInvocationList: []
            },
            {
              id: '5c83f415-d141-4792-8c56-834eed940943',
              apiNo: '1120-0222-01',
              apiDesc:
                '医疗保险-根据医疗机构的医疗保险标识列表查询医院医疗保险',
              successFlag: true,
              invokedConsumeTime: '132ms',
              ties: 'MDS',
              domain: 'fin',
              subInvocationList: []
            }
          ]
        },
        {
          id: '92389134-6ceb-4d7f-83c6-81cb97406306',
          apiNo: '3120-0002-01',
          apiDesc: '账户信息查询',
          successFlag: true,
          invokedConsumeTime: '16ms',
          ties: 'AMTS',
          domain: 'fin',
          subInvocationList: [
            {
              id: 'd6cfc81c-0392-463f-814f-a3298e84d589',
              apiNo: '2140-1001-01',
              apiDesc: '患者信息查询',
              successFlag: true,
              invokedConsumeTime: '1ms',
              ties: 'BMTS',
              domain: 'per',
              subInvocationList: []
            },
            {
              id: 'df072c3a-1e85-404b-91a4-4c5a37005be8',
              apiNo: '2121-0038-01',
              apiDesc: '依据户主类型概念标识+户主标识获取账户标识集合',
              successFlag: true,
              invokedConsumeTime: '5ms',
              ties: 'BMTS',
              domain: 'fin',
              subInvocationList: []
            }
          ]
        },
        {
          id: 'bf9fa863-0498-4e94-80f0-21ff53dfd467',
          apiNo: '3123-0007-01',
          apiDesc: '获取住院患者基础费用信息',
          successFlag: true,
          invokedConsumeTime: '286ms',
          ties: 'AMTS',
          domain: 'fin',
          subInvocationList: [
            {
              id: 'ab35d730-87f3-40b3-8cf5-bc74ae1bab84',
              apiNo: '2153-2001-01',
              apiDesc: '根据就诊标识查询住院就诊信息',
              successFlag: true,
              invokedConsumeTime: '3ms',
              ties: 'BMTS',
              domain: 'enc',
              subInvocationList: []
            },
            {
              id: '381099bf-5686-487e-9a8c-7ce288942b7b',
              apiNo: '2121-0053-01',
              apiDesc: '根据住院就诊标识集合批量查询住院押金账户信息',
              successFlag: true,
              invokedConsumeTime: '4ms',
              ties: 'BMTS',
              domain: 'fin',
              subInvocationList: []
            },
            {
              id: 'a2a962f1-c891-40e7-93f3-dde646cfb920',
              apiNo: '2120-0214-01',
              apiDesc: '根据住院就诊标识集合查询住院账单标识集合',
              successFlag: true,
              invokedConsumeTime: '19ms',
              ties: 'BMTS',
              domain: 'fin',
              subInvocationList: [
                {
                  id: '9f0db325-04fa-4668-af01-a21e9d4fe357',
                  apiNo: '1010-5026-01',
                  apiDesc:
                    '根据概念域ids（必填）和体系状态、值状态查询值、值（值名称、拼音码、五笔码、valueNo）模糊查询值集列表',
                  successFlag: true,
                  invokedConsumeTime: '12ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                }
              ]
            },
            {
              id: '5463c8e4-2366-4fa7-b482-6f3131849070',
              apiNo: '1120-0580-01',
              apiDesc: '根据二级账户类型标识查询二级账户类型设置',
              successFlag: true,
              invokedConsumeTime: '185ms',
              ties: 'MDS',
              domain: 'fin',
              subInvocationList: []
            },
            {
              id: '20a09141-2e6f-4465-8b3a-4bc59ec10f45',
              apiNo: '2120-0253-01',
              apiDesc: '根据就诊标识集合查询根据担保金额信息',
              successFlag: true,
              invokedConsumeTime: '10ms',
              ties: 'BMTS',
              domain: 'fin',
              subInvocationList: []
            },
            {
              id: '02107910-fcde-4879-82ef-0bfe81783f8e',
              apiNo: '2120-0254-01',
              apiDesc: '批量获取住院就诊的金额限制信息',
              successFlag: true,
              invokedConsumeTime: '35ms',
              ties: 'BMTS',
              domain: 'fin',
              subInvocationList: [
                {
                  id: '5d7c2190-858c-488f-83b7-16ee7b20ea6e',
                  apiNo: '1010-5046-01',
                  apiDesc:
                    '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
                  successFlag: true,
                  invokedConsumeTime: '23ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                }
              ]
            }
          ]
        },
        {
          id: '0230c8e0-ca90-4a0e-b21d-833cb28dd50e',
          apiNo: '2140-4009-01',
          apiDesc: '查询个人状态值',
          successFlag: true,
          invokedConsumeTime: '5ms',
          ties: 'BMTS',
          domain: 'per',
          subInvocationList: []
        },
        {
          id: '8d93068d-b393-411c-9386-e5826382bf66',
          apiNo: '1150-71013-01',
          apiDesc: '查询banner组件配置',
          successFlag: true,
          invokedConsumeTime: '34ms',
          ties: 'MDS',
          domain: 'enc',
          subInvocationList: []
        }
      ]
    },
    {
      id: '22c6cc88-4ff3-4d26-b11b-bfe6b7bd1f87',
      apiNo: '4127-0023-01',
      apiDesc: '根据住院就诊标识查询住院账单列表',
      successFlag: true,
      invokedConsumeTime: '555ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '1f61cdc6-3772-488d-8054-102a75da4b6c',
          apiNo: '3123-0019-01',
          apiDesc: '根据住院就诊标识查询住院账单列表',
          successFlag: true,
          invokedConsumeTime: '347ms',
          ties: 'AMTS',
          domain: 'fin',
          subInvocationList: [
            {
              id: '6c24e4a7-066b-4d2a-9cff-f24c1005ecbb',
              apiNo: '2120-0112-01',
              apiDesc: '根据住院就诊标识查询住院账单标识集合',
              successFlag: true,
              invokedConsumeTime: '69ms',
              ties: 'BMTS',
              domain: 'fin',
              subInvocationList: [
                {
                  id: '7c50ea3d-8964-4c3a-9af0-074572fe3ae9',
                  apiNo: '1010-5046-01',
                  apiDesc:
                    '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
                  successFlag: true,
                  invokedConsumeTime: '9ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: '2d678740-12f8-4c02-a49c-ba4b6139da72',
                  apiNo: '1010-5046-01',
                  apiDesc:
                    '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
                  successFlag: true,
                  invokedConsumeTime: '10ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                }
              ]
            },
            {
              id: 'a4c13281-2b41-46a6-984c-a61256bbe3c1',
              apiNo: '2120-0113-01',
              apiDesc: '根据住院账单标识查询住院账单列表',
              successFlag: true,
              invokedConsumeTime: '83ms',
              ties: 'BMTS',
              domain: 'fin',
              subInvocationList: [
                {
                  id: 'd94fd18b-d96d-45fa-8098-b55f996bb14d',
                  apiNo: '1010-2005-01',
                  apiDesc:
                    '根据ids（必填）查询职工的聚合（不支持分页，限制ids 100个）',
                  successFlag: true,
                  invokedConsumeTime: '35ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                }
              ]
            },
            {
              id: '9d5b88ce-4b01-42c3-b79a-16f43dadc087',
              apiNo: '2120-0124-01',
              apiDesc: '根据住院结算标识查询住院结算单信息',
              successFlag: true,
              invokedConsumeTime: '48ms',
              ties: 'BMTS',
              domain: 'fin',
              subInvocationList: [
                {
                  id: '7e51a627-0e5b-4c09-8076-b8afa19bffa9',
                  apiNo: '1010-2005-01',
                  apiDesc:
                    '根据ids（必填）查询职工的聚合（不支持分页，限制ids 100个）',
                  successFlag: true,
                  invokedConsumeTime: '13ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: 'e78ef312-b301-4d15-8c00-1951eda87b34',
                  apiNo: '1010-4025-01',
                  apiDesc: '根据ids查询组织主表的集合，(不支持分页id限制100个)',
                  successFlag: true,
                  invokedConsumeTime: '8ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                }
              ]
            },
            {
              id: 'b6b307d7-384c-4432-8a46-b34d7b82284b',
              apiNo: '2120-0069-01',
              apiDesc: '获取医保结算单信息',
              successFlag: true,
              invokedConsumeTime: '128ms',
              ties: 'BMTS',
              domain: 'fin',
              subInvocationList: [
                {
                  id: 'd5855856-c383-4090-8309-140db660e0cc',
                  apiNo: '1120-0222-01',
                  apiDesc:
                    '医疗保险-根据医疗机构的医疗保险标识列表查询医院医疗保险',
                  successFlag: true,
                  invokedConsumeTime: '110ms',
                  ties: 'MDS',
                  domain: 'fin',
                  subInvocationList: []
                }
              ]
            }
          ]
        },
        {
          id: '2b35a1d9-1df0-42e6-84bc-e01bbf4bf90b',
          apiNo: '3151-1001-01',
          apiDesc: '查询患者信息',
          successFlag: true,
          invokedConsumeTime: '196ms',
          ties: 'AMTS',
          domain: 'enc',
          subInvocationList: [
            {
              id: '5a427c8c-7048-4729-ab9e-871a51ed1df3',
              apiNo: '2140-1001-01',
              apiDesc: '患者信息查询',
              successFlag: true,
              invokedConsumeTime: '189ms',
              ties: 'BMTS',
              domain: 'per',
              subInvocationList: [
                {
                  id: 'f2bd90f3-7b3e-4b84-8e87-92aa964a99c1',
                  apiNo: '1010-4058-01',
                  apiDesc:
                    '根据当前传入的医院soid查询其所有上级组织，返回包含自身的接口',
                  successFlag: true,
                  invokedConsumeTime: '10ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: '446c6958-ee5b-42f4-8a76-c2aa62bf1f7a',
                  apiNo: '1140-1007-01',
                  apiDesc: '据年龄配置方案获取年龄配置信息',
                  successFlag: true,
                  invokedConsumeTime: '3ms',
                  ties: 'MDS',
                  domain: 'per',
                  subInvocationList: []
                },
                {
                  id: '0de79b79-7d41-4e38-83b2-32b0b2a974e9',
                  apiNo: '1120-0222-01',
                  apiDesc:
                    '医疗保险-根据医疗机构的医疗保险标识列表查询医院医疗保险',
                  successFlag: true,
                  invokedConsumeTime: '114ms',
                  ties: 'MDS',
                  domain: 'fin',
                  subInvocationList: []
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: '5e37a806-6513-476d-8aad-4c4ffa302584',
      apiNo: '4127-0022-01',
      apiDesc: '根据住院账单标识、明细标识等复合条件查询费用明细',
      successFlag: true,
      invokedConsumeTime: '135ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '314154ca-6527-41aa-bdee-17e77073a5b6',
          apiNo: '3123-0018-01',
          apiDesc: '根据住院账单标识、明细标识等复合条件查询费用明细',
          successFlag: true,
          invokedConsumeTime: '129ms',
          ties: 'AMTS',
          domain: 'fin',
          subInvocationList: [
            {
              id: '92388ecf-ffd6-4cf8-b419-3171c3926bbd',
              apiNo: '2120-0116-01',
              apiDesc: '根据住院账单标识等复合条件查询费用明细',
              successFlag: true,
              invokedConsumeTime: '124ms',
              ties: 'BMTS',
              domain: 'fin',
              subInvocationList: [
                {
                  id: '4ce31a70-048a-4b49-843a-63ea2cf8453c',
                  apiNo: '1120-0169-01',
                  apiDesc: '获取收费大项目信息',
                  successFlag: true,
                  invokedConsumeTime: '10ms',
                  ties: 'MDS',
                  domain: 'fin',
                  subInvocationList: []
                },
                {
                  id: '587a7dd4-98bb-41b8-94ba-99905a17f5ad',
                  apiNo: '1010-4025-01',
                  apiDesc: '根据ids查询组织主表的集合，(不支持分页id限制100个)',
                  successFlag: true,
                  invokedConsumeTime: '2ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: 'f114e731-0182-42ec-868b-fe6c01c4f8d9',
                  apiNo: '1010-2005-01',
                  apiDesc:
                    '根据ids（必填）查询职工的聚合（不支持分页，限制ids 100个）',
                  successFlag: true,
                  invokedConsumeTime: '42ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: '397e90d6-9c92-4b88-8c21-fc52540aef49',
                  apiNo: '1010-7030-01',
                  apiDesc:
                    '根据医疗服务标识列表、keyword、医疗服务类型代码列表、医疗服务状态查询医疗服务信息',
                  successFlag: true,
                  invokedConsumeTime: '34ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: '83bf1d80-0d7c-4116-bf68-4c5da5fb2873',
      apiNo: '4127-0015-01',
      apiDesc: '根据账户标识获取交易信息列表',
      successFlag: true,
      invokedConsumeTime: '21ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: 'f7b3aefe-7b85-44a2-8cd9-6bc545ede485',
          apiNo: '2121-0024-01',
          apiDesc: '根据账户标识获取交易标识列表',
          successFlag: true,
          invokedConsumeTime: '16ms',
          ties: 'BMTS',
          domain: 'fin',
          subInvocationList: [
            {
              id: 'b13f5aad-b988-4860-9af2-2330d745d6b6',
              apiNo: '1010-5046-01',
              apiDesc:
                '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
              successFlag: true,
              invokedConsumeTime: '7ms',
              ties: 'MDS',
              domain: 'mdm',
              subInvocationList: []
            }
          ]
        }
      ]
    },
    {
      id: '380035e0-c8b1-4e4d-97da-609f3d1db72e',
      apiNo: '4127-0013-01',
      apiDesc: '依据住院就诊标识获取住院押金账户信息',
      successFlag: true,
      invokedConsumeTime: '128ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '6127ce98-f6c9-47b8-8481-caf6a1635890',
          apiNo: '3123-0027-01',
          apiDesc: '依据住院就诊标识获取住院押金账户信息',
          successFlag: true,
          invokedConsumeTime: '29ms',
          ties: 'AMTS',
          domain: 'fin',
          subInvocationList: [
            {
              id: 'bd76de76-5c3d-428b-85b0-9a2be47df3fc',
              apiNo: '2121-0038-01',
              apiDesc: '依据户主类型概念标识+户主标识获取账户标识集合',
              successFlag: true,
              invokedConsumeTime: '2ms',
              ties: 'BMTS',
              domain: 'fin',
              subInvocationList: []
            },
            {
              id: '69bbcfca-801f-49da-8dbd-d637e96ed9ac',
              apiNo: '2121-0010-01',
              apiDesc: '根据账户标识查询储蓄账户信息',
              successFlag: true,
              invokedConsumeTime: '16ms',
              ties: 'BMTS',
              domain: 'fin',
              subInvocationList: []
            }
          ]
        },
        {
          id: '488c5f12-70a4-4f1e-8428-7a03321afb91',
          apiNo: '3151-2001-01',
          apiDesc: '根据就诊标识查询住院就诊信息',
          successFlag: true,
          invokedConsumeTime: '89ms',
          ties: 'AMTS',
          domain: 'enc',
          subInvocationList: [
            {
              id: 'cc863e92-93b2-45f8-83f8-294fbb4c8ce5',
              apiNo: '2153-2001-01',
              apiDesc: '根据就诊标识查询住院就诊信息',
              successFlag: true,
              invokedConsumeTime: '31ms',
              ties: 'BMTS',
              domain: 'enc',
              subInvocationList: [
                {
                  id: '20639a6b-fc31-438d-a5b9-4ddf53b44f92',
                  apiNo: '1010-2005-01',
                  apiDesc:
                    '根据ids（必填）查询职工的聚合（不支持分页，限制ids 100个）',
                  successFlag: true,
                  invokedConsumeTime: '14ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                }
              ]
            },
            {
              id: '78cd82cf-25b2-48a4-82c8-9fdb7cb08e1c',
              apiNo: '2153-2007-01',
              apiDesc: '查询住院患者就诊信息',
              successFlag: true,
              invokedConsumeTime: '44ms',
              ties: 'BMTS',
              domain: 'enc',
              subInvocationList: [
                {
                  id: '25cc591a-0e13-4b5e-9631-92fb79364ff1',
                  apiNo: '1150-17004-01',
                  apiDesc: '查询住院病床服务',
                  successFlag: true,
                  invokedConsumeTime: '4ms',
                  ties: 'MDS',
                  domain: 'enc',
                  subInvocationList: []
                },
                {
                  id: '5c09d0a2-6818-40d1-97c8-f06d1a29f61e',
                  apiNo: '1010-4012-01',
                  apiDesc:
                    '根据ids（必填）查询组织的聚合（不支持分页，限制ids 100个）',
                  successFlag: true,
                  invokedConsumeTime: '13ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: '6d816c6b-0de1-4fef-9a97-5e24b1189dec',
      apiNo: '4127-0023-01',
      apiDesc: '根据住院就诊标识查询住院账单列表',
      successFlag: true,
      invokedConsumeTime: '328ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '0ff07bb4-2a72-4070-8247-8058aad98332',
          apiNo: '3123-0019-01',
          apiDesc: '根据住院就诊标识查询住院账单列表',
          successFlag: true,
          invokedConsumeTime: '306ms',
          ties: 'AMTS',
          domain: 'fin',
          subInvocationList: [
            {
              id: 'fcfac1e4-917c-4f30-83c2-c629c0e749b5',
              apiNo: '2120-0112-01',
              apiDesc: '根据住院就诊标识查询住院账单标识集合',
              successFlag: true,
              invokedConsumeTime: '38ms',
              ties: 'BMTS',
              domain: 'fin',
              subInvocationList: [
                {
                  id: '3eefc4d3-a73e-4273-83a6-73784a3fc192',
                  apiNo: '1010-5046-01',
                  apiDesc:
                    '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
                  successFlag: true,
                  invokedConsumeTime: '14ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: '72f20d41-c554-4867-8621-42e208226f7c',
                  apiNo: '1010-5046-01',
                  apiDesc:
                    '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
                  successFlag: true,
                  invokedConsumeTime: '10ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                }
              ]
            },
            {
              id: '4c46a6fc-4e96-4958-982a-51e1c3775ec6',
              apiNo: '2120-0113-01',
              apiDesc: '根据住院账单标识查询住院账单列表',
              successFlag: true,
              invokedConsumeTime: '32ms',
              ties: 'BMTS',
              domain: 'fin',
              subInvocationList: [
                {
                  id: '6ac67a3b-c32f-44f7-82f0-609f32efb7ae',
                  apiNo: '1010-2005-01',
                  apiDesc:
                    '根据ids（必填）查询职工的聚合（不支持分页，限制ids 100个）',
                  successFlag: true,
                  invokedConsumeTime: '12ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                }
              ]
            },
            {
              id: 'b4424bd5-e64e-4c39-8caa-13e095cb47ef',
              apiNo: '2120-0124-01',
              apiDesc: '根据住院结算标识查询住院结算单信息',
              successFlag: true,
              invokedConsumeTime: '51ms',
              ties: 'BMTS',
              domain: 'fin',
              subInvocationList: [
                {
                  id: '0c8cb545-9e56-44bf-82d1-2c12e0a1d017',
                  apiNo: '1010-2005-01',
                  apiDesc:
                    '根据ids（必填）查询职工的聚合（不支持分页，限制ids 100个）',
                  successFlag: true,
                  invokedConsumeTime: '22ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: '2244620b-0f45-40b7-8d23-8530eccf2729',
                  apiNo: '1010-4025-01',
                  apiDesc: '根据ids查询组织主表的集合，(不支持分页id限制100个)',
                  successFlag: true,
                  invokedConsumeTime: '3ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                }
              ]
            },
            {
              id: 'ae528c20-795f-4d08-8d6f-4bdfbf23d902',
              apiNo: '2120-0069-01',
              apiDesc: '获取医保结算单信息',
              successFlag: true,
              invokedConsumeTime: '169ms',
              ties: 'BMTS',
              domain: 'fin',
              subInvocationList: [
                {
                  id: '8eb5e574-c6c7-485e-9b02-9ac30c6049b4',
                  apiNo: '1120-0222-01',
                  apiDesc:
                    '医疗保险-根据医疗机构的医疗保险标识列表查询医院医疗保险',
                  successFlag: true,
                  invokedConsumeTime: '161ms',
                  ties: 'MDS',
                  domain: 'fin',
                  subInvocationList: []
                }
              ]
            }
          ]
        },
        {
          id: '01dbb162-cf4f-4979-8f75-c5b39f2c8410',
          apiNo: '3151-1001-01',
          apiDesc: '查询患者信息',
          successFlag: true,
          invokedConsumeTime: '10ms',
          ties: 'AMTS',
          domain: 'enc',
          subInvocationList: [
            {
              id: '7cc4407a-7204-4a45-a0a2-53930c6436bb',
              apiNo: '2140-1001-01',
              apiDesc: '患者信息查询',
              successFlag: true,
              invokedConsumeTime: '1ms',
              ties: 'BMTS',
              domain: 'per',
              subInvocationList: []
            }
          ]
        }
      ]
    },
    {
      id: '86f71726-a47e-46af-a2f4-166333913d89',
      apiNo: '4156-1102-01',
      apiDesc: '住院banner信息查询接口',
      successFlag: true,
      invokedConsumeTime: '666ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '920c9106-3ed3-493d-88c7-f48ce0d9dc04',
          apiNo: '2153-2001-01',
          apiDesc: '根据就诊标识查询住院就诊信息',
          successFlag: true,
          invokedConsumeTime: '53ms',
          ties: 'BMTS',
          domain: 'enc',
          subInvocationList: [
            {
              id: 'c9496642-86c5-4356-96fd-77d87f3b5743',
              apiNo: '1010-2005-01',
              apiDesc:
                '根据ids（必填）查询职工的聚合（不支持分页，限制ids 100个）',
              successFlag: true,
              invokedConsumeTime: '18ms',
              ties: 'MDS',
              domain: 'mdm',
              subInvocationList: []
            }
          ]
        },
        {
          id: 'a1cad7cc-2726-43c1-8261-8578d807d0b5',
          apiNo: '2153-9001-01',
          apiDesc: '查询就诊标签',
          successFlag: true,
          invokedConsumeTime: '2ms',
          ties: 'BMTS',
          domain: 'enc',
          subInvocationList: []
        },
        {
          id: 'bca173e6-5f25-4eba-8879-849c20effdeb',
          apiNo: '2153-5004-01',
          apiDesc: '根据就诊标识获取入院健康概况',
          successFlag: true,
          invokedConsumeTime: '3ms',
          ties: 'BMTS',
          domain: 'enc',
          subInvocationList: []
        },
        {
          id: 'b61832a7-93ff-4158-baa0-7b5fbb1ecd48',
          apiNo: '2140-1001-01',
          apiDesc: '患者信息查询',
          successFlag: true,
          invokedConsumeTime: '203ms',
          ties: 'BMTS',
          domain: 'per',
          subInvocationList: [
            {
              id: '2284a9d4-a73b-4ec4-9a86-26bc70e5f9bc',
              apiNo: '1010-4058-01',
              apiDesc:
                '根据当前传入的医院soid查询其所有上级组织，返回包含自身的接口',
              successFlag: true,
              invokedConsumeTime: '6ms',
              ties: 'MDS',
              domain: 'mdm',
              subInvocationList: []
            },
            {
              id: '8f95ffd0-7042-491e-a3c8-58999827fee6',
              apiNo: '1140-1007-01',
              apiDesc: '据年龄配置方案获取年龄配置信息',
              successFlag: true,
              invokedConsumeTime: '3ms',
              ties: 'MDS',
              domain: 'per',
              subInvocationList: []
            },
            {
              id: 'ab5bf6cc-29c8-4beb-be75-1b68a880a308',
              apiNo: '1120-0222-01',
              apiDesc:
                '医疗保险-根据医疗机构的医疗保险标识列表查询医院医疗保险',
              successFlag: true,
              invokedConsumeTime: '122ms',
              ties: 'MDS',
              domain: 'fin',
              subInvocationList: []
            }
          ]
        },
        {
          id: 'dbf7d553-90ad-4977-8621-358fc49ac3d2',
          apiNo: '3120-0002-01',
          apiDesc: '账户信息查询',
          successFlag: true,
          invokedConsumeTime: '12ms',
          ties: 'AMTS',
          domain: 'fin',
          subInvocationList: [
            {
              id: 'e9179123-1bf8-4c2d-80aa-635c846fd67b',
              apiNo: '2140-1001-01',
              apiDesc: '患者信息查询',
              successFlag: true,
              invokedConsumeTime: '1ms',
              ties: 'BMTS',
              domain: 'per',
              subInvocationList: []
            },
            {
              id: '7ac0a1a4-04ac-4819-a370-4126a9815670',
              apiNo: '2121-0038-01',
              apiDesc: '依据户主类型概念标识+户主标识获取账户标识集合',
              successFlag: true,
              invokedConsumeTime: '2ms',
              ties: 'BMTS',
              domain: 'fin',
              subInvocationList: []
            }
          ]
        },
        {
          id: '9c6d5b45-5716-456e-ae48-cd80125397d6',
          apiNo: '3123-0007-01',
          apiDesc: '获取住院患者基础费用信息',
          successFlag: true,
          invokedConsumeTime: '323ms',
          ties: 'AMTS',
          domain: 'fin',
          subInvocationList: [
            {
              id: '1c657593-0d61-4175-965a-79db0f1867f6',
              apiNo: '2153-2001-01',
              apiDesc: '根据就诊标识查询住院就诊信息',
              successFlag: true,
              invokedConsumeTime: '9ms',
              ties: 'BMTS',
              domain: 'enc',
              subInvocationList: []
            },
            {
              id: 'd2d86419-7dd1-4fa3-8d33-ce7a3515d128',
              apiNo: '2121-0053-01',
              apiDesc: '根据住院就诊标识集合批量查询住院押金账户信息',
              successFlag: true,
              invokedConsumeTime: '4ms',
              ties: 'BMTS',
              domain: 'fin',
              subInvocationList: []
            },
            {
              id: 'e8cf3280-3a1b-41e0-9eb4-8e04f1cf4176',
              apiNo: '2120-0214-01',
              apiDesc: '根据住院就诊标识集合查询住院账单标识集合',
              successFlag: true,
              invokedConsumeTime: '12ms',
              ties: 'BMTS',
              domain: 'fin',
              subInvocationList: [
                {
                  id: 'd6d26a56-11a1-4a4e-8862-82cfe8154a4c',
                  apiNo: '1010-5026-01',
                  apiDesc:
                    '根据概念域ids（必填）和体系状态、值状态查询值、值（值名称、拼音码、五笔码、valueNo）模糊查询值集列表',
                  successFlag: true,
                  invokedConsumeTime: '6ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                }
              ]
            },
            {
              id: 'bd02b715-1587-4c45-8b6b-ea6f6b051111',
              apiNo: '1120-0580-01',
              apiDesc: '根据二级账户类型标识查询二级账户类型设置',
              successFlag: true,
              invokedConsumeTime: '226ms',
              ties: 'MDS',
              domain: 'fin',
              subInvocationList: []
            },
            {
              id: '85de4e14-2654-4850-8c11-8d6f1e0e2e16',
              apiNo: '2120-0253-01',
              apiDesc: '根据就诊标识集合查询根据担保金额信息',
              successFlag: true,
              invokedConsumeTime: '1ms',
              ties: 'BMTS',
              domain: 'fin',
              subInvocationList: []
            },
            {
              id: '7ff5b5e9-0b3f-475e-8252-a2c4aa8d3550',
              apiNo: '2120-0254-01',
              apiDesc: '批量获取住院就诊的金额限制信息',
              successFlag: true,
              invokedConsumeTime: '43ms',
              ties: 'BMTS',
              domain: 'fin',
              subInvocationList: [
                {
                  id: '2a2aac4f-f5ff-481e-8275-cc71398f114b',
                  apiNo: '1010-5046-01',
                  apiDesc:
                    '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
                  successFlag: true,
                  invokedConsumeTime: '35ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                }
              ]
            }
          ]
        },
        {
          id: 'c27c0804-411c-4341-9b1c-22ac66e0ded8',
          apiNo: '2140-4009-01',
          apiDesc: '查询个人状态值',
          successFlag: true,
          invokedConsumeTime: '3ms',
          ties: 'BMTS',
          domain: 'per',
          subInvocationList: []
        },
        {
          id: '29e4e874-87fa-442a-8d2c-95000003b56c',
          apiNo: '1150-71013-01',
          apiDesc: '查询banner组件配置',
          successFlag: true,
          invokedConsumeTime: '9ms',
          ties: 'MDS',
          domain: 'enc',
          subInvocationList: []
        }
      ]
    },
    {
      id: '822d0d60-7d61-49a5-bc79-a4319ebe171c',
      apiNo: '4127-0015-01',
      apiDesc: '根据账户标识获取交易信息列表',
      successFlag: true,
      invokedConsumeTime: '39ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '90d07394-acbe-4550-952f-0f89cab43577',
          apiNo: '2121-0024-01',
          apiDesc: '根据账户标识获取交易标识列表',
          successFlag: true,
          invokedConsumeTime: '34ms',
          ties: 'BMTS',
          domain: 'fin',
          subInvocationList: [
            {
              id: '2965f472-288b-4a84-918b-d7501a2939ad',
              apiNo: '1010-5046-01',
              apiDesc:
                '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
              successFlag: true,
              invokedConsumeTime: '26ms',
              ties: 'MDS',
              domain: 'mdm',
              subInvocationList: []
            }
          ]
        }
      ]
    },
    {
      id: '1e8fa254-37e4-446b-8fd8-eb43c102139d',
      apiNo: '4127-0022-01',
      apiDesc: '根据住院账单标识、明细标识等复合条件查询费用明细',
      successFlag: true,
      invokedConsumeTime: '73ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '656c01e0-599c-46f1-8699-e9ba94ca5397',
          apiNo: '3123-0018-01',
          apiDesc: '根据住院账单标识、明细标识等复合条件查询费用明细',
          successFlag: true,
          invokedConsumeTime: '68ms',
          ties: 'AMTS',
          domain: 'fin',
          subInvocationList: [
            {
              id: 'c2004c95-0a27-4a7f-80ee-3e96b28e9a73',
              apiNo: '2120-0116-01',
              apiDesc: '根据住院账单标识等复合条件查询费用明细',
              successFlag: true,
              invokedConsumeTime: '62ms',
              ties: 'BMTS',
              domain: 'fin',
              subInvocationList: [
                {
                  id: '1c29e8ff-96bb-4126-95e2-73d4f4e69517',
                  apiNo: '1120-0169-01',
                  apiDesc: '获取收费大项目信息',
                  successFlag: true,
                  invokedConsumeTime: '14ms',
                  ties: 'MDS',
                  domain: 'fin',
                  subInvocationList: []
                },
                {
                  id: 'de87bce9-acef-4854-a5cf-85ec24b2aae0',
                  apiNo: '1010-2005-01',
                  apiDesc:
                    '根据ids（必填）查询职工的聚合（不支持分页，限制ids 100个）',
                  successFlag: true,
                  invokedConsumeTime: '13ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: '7451f435-a793-485d-8c98-6573571264fb',
                  apiNo: '1010-4025-01',
                  apiDesc: '根据ids查询组织主表的集合，(不支持分页id限制100个)',
                  successFlag: true,
                  invokedConsumeTime: '1ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: 'a85d974a-dc8f-4081-8529-f0846f3afdb2',
                  apiNo: '1010-7030-01',
                  apiDesc:
                    '根据医疗服务标识列表、keyword、医疗服务类型代码列表、医疗服务状态查询医疗服务信息',
                  successFlag: true,
                  invokedConsumeTime: '15ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: '6b81df89-7280-47ac-89ea-cdd81b197b8b',
      apiNo: '4180-6001-01',
      apiDesc: '患者列表信息查询',
      successFlag: true,
      invokedConsumeTime: '185ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: 'c3d957d1-6bf3-45da-8582-270c3d76dc3c',
          apiNo: '3180-1001-01',
          apiDesc: '查询发药申请单患者信息',
          successFlag: true,
          invokedConsumeTime: '171ms',
          ties: 'AMTS',
          domain: 'mat',
          subInvocationList: [
            {
              id: 'd1ce01d7-c3bf-49ed-8269-76448677e168',
              apiNo: '2180-6025-01',
              apiDesc:
                '查询发药申请单患者基本信息（分页）待配药，已配药，待发药，待审核，已审核，审核不通过',
              successFlag: true,
              invokedConsumeTime: '68ms',
              ties: 'BMTS',
              domain: 'mat',
              subInvocationList: []
            },
            {
              id: '8e302ad2-7187-444d-8cda-3156a0be0d4b',
              apiNo: '2150-1005-01',
              apiDesc: '就诊健康概况及扩展查询',
              successFlag: true,
              invokedConsumeTime: '7ms',
              ties: 'BMTS',
              domain: 'enc',
              subInvocationList: []
            },
            {
              id: 'dd5a9bc3-cc0b-4a2f-8a0a-1716a1502478',
              apiNo: '2140-71046-01',
              apiDesc: '根据个人身份标识定制化查询患者信息列表',
              successFlag: true,
              invokedConsumeTime: '66ms',
              ties: 'BMTS',
              domain: 'per',
              subInvocationList: [
                {
                  id: '0fcad68b-1663-4f0a-8f18-db0ccb50776e',
                  apiNo: '1010-4058-01',
                  apiDesc:
                    '根据当前传入的医院soid查询其所有上级组织，返回包含自身的接口',
                  successFlag: true,
                  invokedConsumeTime: '5ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: '427bde2e-1173-40cc-8790-bf4999f15790',
                  apiNo: '1140-1007-01',
                  apiDesc: '据年龄配置方案获取年龄配置信息',
                  successFlag: true,
                  invokedConsumeTime: '2ms',
                  ties: 'MDS',
                  domain: 'per',
                  subInvocationList: []
                }
              ]
            },
            {
              id: '0aeee7a1-5a93-4f84-9913-a0ee980298df',
              apiNo: '2150-1029-01',
              apiDesc: '根据角色标识列表查询门诊就诊记录',
              successFlag: true,
              invokedConsumeTime: '40ms',
              ties: 'BMTS',
              domain: 'enc',
              subInvocationList: []
            }
          ]
        },
        {
          id: 'bcc89afb-1d1d-4e44-9aa5-56c87339c10d',
          apiNo: '1100-10003-01',
          apiDesc: '查询指定库房窗口',
          successFlag: false,
          invokedConsumeTime: '1ms',
          ties: 'MDS',
          domain: 'mat',
          subInvocationList: []
        }
      ]
    },
    {
      id: 'af802438-d6fb-4b46-9bb4-5567491beaa9',
      apiNo: '4180-6002-05',
      apiDesc: '根据就诊标识号获取发药明细信息',
      successFlag: true,
      invokedConsumeTime: '177ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '6db61272-6ae3-4533-80d9-b3a4f0b9e592',
          apiNo: '3180-1006-01',
          apiDesc: '根据就诊标识号获取发药明细信息',
          successFlag: true,
          invokedConsumeTime: '153ms',
          ties: 'AMTS',
          domain: 'mat',
          subInvocationList: [
            {
              id: 'b0e2164b-30e3-41a1-96fd-fb8d42c1e815',
              apiNo: '2180-4017-01',
              apiDesc: '获取发药申请单明细信息',
              successFlag: true,
              invokedConsumeTime: '126ms',
              ties: 'BMTS',
              domain: 'mat',
              subInvocationList: [
                {
                  id: '2356c965-ab3d-4245-8659-03e9b67bbc9c',
                  apiNo: '1100-6120-01',
                  apiDesc:
                    '多条件（药房组织标识、药品类型、药品剂型、启用标志、药品名称、拼音码、五笔码、助记码 ）分页查询药品商品目录列表  不超过100个',
                  successFlag: true,
                  invokedConsumeTime: '47ms',
                  ties: 'MDS',
                  domain: 'mat',
                  subInvocationList: []
                }
              ]
            },
            {
              id: 'aeb33f49-6796-4eac-8fca-f4150bcb720e',
              apiNo: '2110-0026-01',
              apiDesc: '处方查询医嘱',
              successFlag: true,
              invokedConsumeTime: '18ms',
              ties: 'BMTS',
              domain: 'cli',
              subInvocationList: []
            }
          ]
        },
        {
          id: 'af03d029-9506-4380-8400-b5c797e2edd9',
          apiNo: '1100-7024-01',
          apiDesc:
            '药品商品ES多条件（商品启用标志、药品类型代码、药品分类代码、精毒麻放代码、抗菌药物等级代码、药品剂型、其中关键字包含【商品名称、药品通用名、药品名英文、药品编码、拼音码、五笔码、助记码】）综合分页查询',
          successFlag: true,
          invokedConsumeTime: '8ms',
          ties: 'MDS',
          domain: 'mat',
          subInvocationList: []
        }
      ]
    },
    {
      id: 'd7d2d065-f712-424b-841e-11f894241630',
      apiNo: '4120-0106-01',
      apiDesc: '查询收费大项目列表',
      successFlag: true,
      invokedConsumeTime: '187ms',
      ties: 'MAS',
      domain: null,
      subInvocationList: [
        {
          id: 'df960abe-f897-4a5f-86d5-f17ea23bf8cb',
          apiNo: '1120-0113-01',
          apiDesc: '查询医疗机构的收费大项目列表',
          successFlag: true,
          invokedConsumeTime: '22ms',
          ties: 'MDS',
          domain: 'fin',
          subInvocationList: []
        },
        {
          id: '4f51d37e-515b-4e37-99d3-f3dc8e2d69d2',
          apiNo: '1010-5038-02',
          apiDesc:
            '根据概念域ids,标签ids,概念ids查询首选（首选编码体系下启用的）值集',
          successFlag: true,
          invokedConsumeTime: '152ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        }
      ]
    },
    {
      id: 'd23ed914-769a-4810-8da0-1198293dea23',
      apiNo: '4127-0037-01',
      apiDesc: '获取创建账单操作标识',
      successFlag: true,
      invokedConsumeTime: '87ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '88cdcb51-4cba-4661-81ec-cf5f75164e94',
          apiNo: '2120-0139-01',
          apiDesc: '获取创建账单操作标识',
          successFlag: true,
          invokedConsumeTime: '82ms',
          ties: 'BMTS',
          domain: 'fin',
          subInvocationList: []
        }
      ]
    },
    {
      id: 'a4b29d36-c2e0-4f77-81f7-a2e8d995ba75',
      apiNo: '4127-0025-01',
      apiDesc:
        '根据住院就诊标识、住院状态等复合条件查询医保住院就诊登记列表--new',
      successFlag: true,
      invokedConsumeTime: '448ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: 'fe60fdab-3531-4531-9a04-2c3b8837194b',
          apiNo: '3123-0021-01',
          apiDesc:
            '根据住院就诊标识、住院状态等复合条件查询医保住院就诊登记列表--new',
          successFlag: true,
          invokedConsumeTime: '159ms',
          ties: 'AMTS',
          domain: 'fin',
          subInvocationList: [
            {
              id: '2480fe54-83aa-4394-9a69-cb25e4c6b0e5',
              apiNo: '2120-0118-01',
              apiDesc:
                '根据住院就诊标识、住院状态等复合条件查询医保住院就诊登记列表',
              successFlag: true,
              invokedConsumeTime: '155ms',
              ties: 'BMTS',
              domain: 'fin',
              subInvocationList: [
                {
                  id: '44715cab-6ed2-4edc-8839-562b2cf0e436',
                  apiNo: '1010-5038-02',
                  apiDesc:
                    '根据概念域ids,标签ids,概念ids查询首选（首选编码体系下启用的）值集',
                  successFlag: true,
                  invokedConsumeTime: '112ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                }
              ]
            }
          ]
        },
        {
          id: 'd8a511a0-54a2-4802-b9ee-5f8a0111db97',
          apiNo: '1010-5046-01',
          apiDesc:
            '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
          successFlag: true,
          invokedConsumeTime: '40ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        },
        {
          id: '311d992e-005e-45f1-8bd9-1da26ede73e6',
          apiNo: '1120-0178-01',
          apiDesc: '医疗保险-查询医院启用的医疗保险列表',
          successFlag: true,
          invokedConsumeTime: '236ms',
          ties: 'MDS',
          domain: 'fin',
          subInvocationList: []
        }
      ]
    },
    {
      id: 'b1453d94-e194-41bd-b921-2c06b1879151',
      apiNo: '4127-0022-01',
      apiDesc: '根据住院账单标识、明细标识等复合条件查询费用明细',
      successFlag: true,
      invokedConsumeTime: '155ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '3fba03ca-981a-4d48-8df8-b9a3acb92929',
          apiNo: '3123-0018-01',
          apiDesc: '根据住院账单标识、明细标识等复合条件查询费用明细',
          successFlag: true,
          invokedConsumeTime: '149ms',
          ties: 'AMTS',
          domain: 'fin',
          subInvocationList: [
            {
              id: '1312bd01-74e9-4889-a765-a7430a35352e',
              apiNo: '2120-0116-01',
              apiDesc: '根据住院账单标识等复合条件查询费用明细',
              successFlag: true,
              invokedConsumeTime: '144ms',
              ties: 'BMTS',
              domain: 'fin',
              subInvocationList: [
                {
                  id: '352c3553-79c6-478d-a81e-56aee5fab042',
                  apiNo: '1120-0169-01',
                  apiDesc: '获取收费大项目信息',
                  successFlag: true,
                  invokedConsumeTime: '19ms',
                  ties: 'MDS',
                  domain: 'fin',
                  subInvocationList: []
                },
                {
                  id: 'f6445a47-aa99-49da-9919-da9ed7bc210b',
                  apiNo: '1010-2005-01',
                  apiDesc:
                    '根据ids（必填）查询职工的聚合（不支持分页，限制ids 100个）',
                  successFlag: true,
                  invokedConsumeTime: '34ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: 'd44d86bd-b34c-4af0-87a8-7bcfb82956d7',
                  apiNo: '1010-4025-01',
                  apiDesc: '根据ids查询组织主表的集合，(不支持分页id限制100个)',
                  successFlag: true,
                  invokedConsumeTime: '1ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: 'e9168368-09a8-4675-aa96-6e152726e247',
                  apiNo: '1010-7030-01',
                  apiDesc:
                    '根据医疗服务标识列表、keyword、医疗服务类型代码列表、医疗服务状态查询医疗服务信息',
                  successFlag: true,
                  invokedConsumeTime: '31ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: '7eeec738-b156-4bf2-808f-621290977771',
      apiNo: '4160-4105-01',
      apiDesc: '待配药-多条件查询中草药配药申请明细列表',
      successFlag: true,
      invokedConsumeTime: '424ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '20a66831-3a72-4d30-98c0-1f85cca64032',
          apiNo: '3160-2101-01',
          apiDesc: '住院药房发药查询发药申请按医嘱明细',
          successFlag: true,
          invokedConsumeTime: '405ms',
          ties: 'AMTS',
          domain: 'mat',
          subInvocationList: [
            {
              id: '1904f071-8cac-4080-b0d5-76d6f32674c9',
              apiNo: '2160-2102-01',
              apiDesc: '药房发药申请明细列表查询',
              successFlag: true,
              invokedConsumeTime: '86ms',
              ties: 'BMTS',
              domain: 'mat',
              subInvocationList: []
            },
            {
              id: '3b849f12-f064-4ffc-bf7e-2c2e175e7067',
              apiNo: '2112-2028-01',
              apiDesc: '根据标识查询所有医嘱信息',
              successFlag: true,
              invokedConsumeTime: '39ms',
              ties: 'BMTS',
              domain: 'cli',
              subInvocationList: []
            },
            {
              id: '4f7b8211-ad9d-4fdb-8e96-9ba9e7b455de',
              apiNo: '2153-1001-01',
              apiDesc: '查询banner图基本信息',
              successFlag: true,
              invokedConsumeTime: '12ms',
              ties: 'BMTS',
              domain: 'enc',
              subInvocationList: [
                {
                  id: '83751632-878a-486f-8816-9d26a85448ab',
                  apiNo: '1010-4000-01',
                  apiDesc: '跟据临床业务单元id获取临床业务单元信息',
                  successFlag: true,
                  invokedConsumeTime: '2ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                }
              ]
            },
            {
              id: 'da1d2c47-77a7-4379-a8ee-b5f39e9dacbc',
              apiNo: '1100-2001-01',
              apiDesc:
                '批量查询(根据medicineIds)药品商品、药品服务相关所有聚合信息(不支持分页,限制ids 500个)',
              successFlag: true,
              invokedConsumeTime: '3ms',
              ties: 'MDS',
              domain: 'mat',
              subInvocationList: []
            },
            {
              id: '2e1b48c5-67fb-4636-82e2-d3be5c279e96',
              apiNo: '2100-9006-01',
              apiDesc: '根据开立单位查询药品库存信息(最大500条药品)',
              successFlag: true,
              invokedConsumeTime: '9ms',
              ties: 'BMTS',
              domain: 'mat',
              subInvocationList: [
                {
                  id: 'c9dffaa7-d393-484b-983f-17241d4b4146',
                  apiNo: '1100-2004-01',
                  apiDesc:
                    '批量查询(根据medicineIds)药品商品单位换算相关聚合信息(不支持分页,限制ids 500个)',
                  successFlag: true,
                  invokedConsumeTime: '2ms',
                  ties: 'MDS',
                  domain: 'mat',
                  subInvocationList: []
                }
              ]
            },
            {
              id: '786fdf25-96a8-4d12-a730-fb1f6965204c',
              apiNo: '1100-6120-01',
              apiDesc:
                '多条件（药房组织标识、药品类型、药品剂型、启用标志、药品名称、拼音码、五笔码、助记码 ）分页查询药品商品目录列表  不超过100个',
              successFlag: true,
              invokedConsumeTime: '28ms',
              ties: 'MDS',
              domain: 'mat',
              subInvocationList: []
            },
            {
              id: '8f9cbb01-4de0-439f-b2a1-c41822d7e002',
              apiNo: '2160-2116-01',
              apiDesc: '库房药品入库批次查询-根据药品标识列表',
              successFlag: true,
              invokedConsumeTime: '31ms',
              ties: 'BMTS',
              domain: 'mat',
              subInvocationList: []
            },
            {
              id: '719c10a4-0a0f-4fe0-878a-08078c25a32b',
              apiNo: '1100-6120-01',
              apiDesc:
                '多条件（药房组织标识、药品类型、药品剂型、启用标志、药品名称、拼音码、五笔码、助记码 ）分页查询药品商品目录列表  不超过100个',
              successFlag: true,
              invokedConsumeTime: '11ms',
              ties: 'MDS',
              domain: 'mat',
              subInvocationList: []
            },
            {
              id: 'b824e134-f9aa-4fbb-84a8-037f7b43878e',
              apiNo: '2140-1002-01',
              apiDesc: '多个患者信息查询',
              successFlag: true,
              invokedConsumeTime: '249ms',
              ties: 'BMTS',
              domain: 'per',
              subInvocationList: [
                {
                  id: '1e6874c7-8fde-4708-944e-feca4cfbc7b6',
                  apiNo: '1010-4058-01',
                  apiDesc:
                    '根据当前传入的医院soid查询其所有上级组织，返回包含自身的接口',
                  successFlag: true,
                  invokedConsumeTime: '6ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: '4b6fb398-ceb1-4948-8d38-21e28b272475',
                  apiNo: '1140-1007-01',
                  apiDesc: '据年龄配置方案获取年龄配置信息',
                  successFlag: true,
                  invokedConsumeTime: '1ms',
                  ties: 'MDS',
                  domain: 'per',
                  subInvocationList: []
                },
                {
                  id: '8420d7c7-f6d8-42f4-808a-e8504ea0c40c',
                  apiNo: '1120-0222-01',
                  apiDesc:
                    '医疗保险-根据医疗机构的医疗保险标识列表查询医院医疗保险',
                  successFlag: true,
                  invokedConsumeTime: '152ms',
                  ties: 'MDS',
                  domain: 'fin',
                  subInvocationList: []
                }
              ]
            },
            {
              id: '37261e97-b14d-4f44-85c9-5ee9e9d01ff5',
              apiNo: '2163-4000-02',
              apiDesc: '查询多个患者的就诊诊断',
              successFlag: true,
              invokedConsumeTime: '12ms',
              ties: 'BMTS',
              domain: 'cli',
              subInvocationList: []
            }
          ]
        },
        {
          id: 'eb9d458e-a87b-4471-8201-d8eea15e5410',
          apiNo: '1010-5030-01',
          apiDesc: '根据值集Ids查询值集列表',
          successFlag: true,
          invokedConsumeTime: '3ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        }
      ]
    },
    {
      id: '8c804ffd-35b9-4688-820a-e83ac7e8b00e',
      apiNo: '4127-0033-01',
      apiDesc: '向指定的账单操作标识添加费用明细',
      successFlag: true,
      invokedConsumeTime: '31ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: 'f95c225e-e5f7-4eeb-98e7-c396918f690b',
          apiNo: '2120-0136-01',
          apiDesc: '向指定的账单操作标识添加费用明细',
          successFlag: true,
          invokedConsumeTime: '26ms',
          ties: 'BMTS',
          domain: 'fin',
          subInvocationList: []
        }
      ]
    },
    {
      id: 'c31f4897-70ef-478c-8589-d6c0472dc699',
      apiNo: '4127-0020-01',
      apiDesc: '创建中途住院账单',
      successFlag: true,
      invokedConsumeTime: '1251ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: 'b014ff9b-2263-4227-85c5-46b575a608ee',
          apiNo: '3123-0016-01',
          apiDesc: '创建住院账单',
          successFlag: true,
          invokedConsumeTime: '1215ms',
          ties: 'AMTS',
          domain: 'fin',
          subInvocationList: [
            {
              id: '76303519-6fcc-4247-acab-d1081e5012f3',
              apiNo: '2120-0111-01',
              apiDesc: '创建中途结算账单',
              successFlag: true,
              invokedConsumeTime: '1179ms',
              ties: 'BMTS',
              domain: 'fin',
              subInvocationList: [
                {
                  id: '13c35e81-5211-414b-9bc4-54b7f5ad3edf',
                  apiNo: '1010-5046-01',
                  apiDesc:
                    '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
                  successFlag: true,
                  invokedConsumeTime: '36ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: '2d677e3b-e303-4500-b205-af2e38ad627d',
                  apiNo: '1010-5046-01',
                  apiDesc:
                    '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
                  successFlag: true,
                  invokedConsumeTime: '8ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: 'f6a032ea-03a7-40a8-8704-c16c877c5e91',
                  apiNo: '1010-5046-01',
                  apiDesc:
                    '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
                  successFlag: true,
                  invokedConsumeTime: '8ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: 'ffbf3ae9-9de1-4e60-9511-91a14d531c4c',
                  apiNo: '1010-2005-01',
                  apiDesc:
                    '根据ids（必填）查询职工的聚合（不支持分页，限制ids 100个）',
                  successFlag: true,
                  invokedConsumeTime: '38ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: '8b3078b1-c009-4323-aeab-e244149eb0ed',
                  apiNo: '1010-2005-01',
                  apiDesc:
                    '根据ids（必填）查询职工的聚合（不支持分页，限制ids 100个）',
                  successFlag: true,
                  invokedConsumeTime: '29ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: 'ab4188d9-d5eb-4468-8aa1-33671010fa78',
                  apiNo: '1010-4025-01',
                  apiDesc: '根据ids查询组织主表的集合，(不支持分页id限制100个)',
                  successFlag: true,
                  invokedConsumeTime: '4ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: '2eb2c4ce-8d83-4587-8946-2133947894ed',
                  apiNo: '1010-2005-01',
                  apiDesc:
                    '根据ids（必填）查询职工的聚合（不支持分页，限制ids 100个）',
                  successFlag: true,
                  invokedConsumeTime: '62ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: 'ee3fc61a-c1ca-4d51-8347-b0fcb4cd5182',
                  apiNo: '1010-5038-02',
                  apiDesc:
                    '根据概念域ids,标签ids,概念ids查询首选（首选编码体系下启用的）值集',
                  successFlag: true,
                  invokedConsumeTime: '372ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: '5290ba67-9c05-43a1-99f8-cb9723f2eb76',
                  apiNo: '1010-2005-01',
                  apiDesc:
                    '根据ids（必填）查询职工的聚合（不支持分页，限制ids 100个）',
                  successFlag: true,
                  invokedConsumeTime: '58ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: 'fc942925-a489-49a3-8cfa-5cc047f40995',
                  apiNo: '1010-6002-01',
                  apiDesc: '根据编码规则id和其他参数获取指定数量的编码',
                  successFlag: true,
                  invokedConsumeTime: '2ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: 'a503e7a2-785a-442c-804b-f07aa1bf9dc6',
                  apiNo: '1120-0222-01',
                  apiDesc:
                    '医疗保险-根据医疗机构的医疗保险标识列表查询医院医疗保险',
                  successFlag: true,
                  invokedConsumeTime: '200ms',
                  ties: 'MDS',
                  domain: 'fin',
                  subInvocationList: []
                },
                {
                  id: 'c435b075-da4b-401b-8d00-2eeb1c7900f2',
                  apiNo: '1010-2005-01',
                  apiDesc:
                    '根据ids（必填）查询职工的聚合（不支持分页，限制ids 100个）',
                  successFlag: true,
                  invokedConsumeTime: '17ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: '17b8caab-2fa6-4f86-8ca2-06bd0b3b4a10',
                  apiNo: '1010-4025-01',
                  apiDesc: '根据ids查询组织主表的集合，(不支持分页id限制100个)',
                  successFlag: true,
                  invokedConsumeTime: '2ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: '1509cdb4-53a8-483d-8058-b11f29efb376',
                  apiNo: '1120-0169-01',
                  apiDesc: '获取收费大项目信息',
                  successFlag: true,
                  invokedConsumeTime: '2ms',
                  ties: 'MDS',
                  domain: 'fin',
                  subInvocationList: []
                },
                {
                  id: '0f2707f8-9f22-4c1c-8a97-f419bb6a656c',
                  apiNo: '1010-2005-01',
                  apiDesc:
                    '根据ids（必填）查询职工的聚合（不支持分页，限制ids 100个）',
                  successFlag: true,
                  invokedConsumeTime: '14ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: '4806ac8a-45bd-434e-95d8-d5c4a3ab8096',
                  apiNo: '1010-4025-01',
                  apiDesc: '根据ids查询组织主表的集合，(不支持分页id限制100个)',
                  successFlag: true,
                  invokedConsumeTime: '1ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: '6188791b-64ee-429e-acf9-0fc3cb4e1355',
                  apiNo: '1010-7030-01',
                  apiDesc:
                    '根据医疗服务标识列表、keyword、医疗服务类型代码列表、医疗服务状态查询医疗服务信息',
                  successFlag: true,
                  invokedConsumeTime: '4ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: '967147cc-e7f0-4fed-8d0e-9412c02ef972',
                  apiNo: '1010-2005-01',
                  apiDesc:
                    '根据ids（必填）查询职工的聚合（不支持分页，限制ids 100个）',
                  successFlag: true,
                  invokedConsumeTime: '15ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: '7aade4bc-4d56-4f0e-84f8-f8dabd1f8b14',
                  apiNo: '1010-4025-01',
                  apiDesc: '根据ids查询组织主表的集合，(不支持分页id限制100个)',
                  successFlag: true,
                  invokedConsumeTime: '2ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: '173c2d97-a01d-49f9-883b-db0379ec2d46',
                  apiNo: '1120-0169-01',
                  apiDesc: '获取收费大项目信息',
                  successFlag: true,
                  invokedConsumeTime: '2ms',
                  ties: 'MDS',
                  domain: 'fin',
                  subInvocationList: []
                },
                {
                  id: 'f15b5064-8a37-4f23-8c6b-5608513237dd',
                  apiNo: '1010-2005-01',
                  apiDesc:
                    '根据ids（必填）查询职工的聚合（不支持分页，限制ids 100个）',
                  successFlag: true,
                  invokedConsumeTime: '13ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: '0b6c1988-0697-4999-bba3-8b4d91af0764',
                  apiNo: '1010-4025-01',
                  apiDesc: '根据ids查询组织主表的集合，(不支持分页id限制100个)',
                  successFlag: true,
                  invokedConsumeTime: '1ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: 'db71ec93-eaa1-4e36-aa30-c01f67aec96f',
                  apiNo: '1010-7030-01',
                  apiDesc:
                    '根据医疗服务标识列表、keyword、医疗服务类型代码列表、医疗服务状态查询医疗服务信息',
                  successFlag: true,
                  invokedConsumeTime: '4ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: '39d528f2-2cfc-479a-8fa2-a3a6e8e321f0',
      apiNo: '4125-0100-01',
      apiDesc: '查询订单审方信息',
      successFlag: true,
      invokedConsumeTime: '192ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: 'feeb8bc3-aa63-4cd3-8bf9-4dc02a70359c',
          apiNo: '3121-0011-01',
          apiDesc: '根据订单标识列表获取可收费订单信息',
          successFlag: true,
          invokedConsumeTime: '187ms',
          ties: 'AMTS',
          domain: 'fin',
          subInvocationList: [
            {
              id: '4d43213f-5669-4099-894e-9ea82204c8aa',
              apiNo: '2120-0233-01',
              apiDesc: '根据订单标识列表获取订单和订单明细信息',
              successFlag: true,
              invokedConsumeTime: '67ms',
              ties: 'BMTS',
              domain: 'fin',
              subInvocationList: [
                {
                  id: 'cd3378ee-268f-4aa1-8200-0489a95c1d48',
                  apiNo: '1010-5046-01',
                  apiDesc:
                    '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
                  successFlag: true,
                  invokedConsumeTime: '11ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: 'ee9755ea-2cc8-4392-a8d6-697ff3a5b4c6',
                  apiNo: '1010-5046-01',
                  apiDesc:
                    '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
                  successFlag: true,
                  invokedConsumeTime: '7ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                }
              ]
            },
            {
              id: '1e672271-8de9-4cf2-8bf4-3cabc875f084',
              apiNo: '1010-5046-01',
              apiDesc:
                '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
              successFlag: true,
              invokedConsumeTime: '20ms',
              ties: 'MDS',
              domain: 'mdm',
              subInvocationList: []
            },
            {
              id: 'afd1564d-aab1-42ce-83f6-7a6b4162f1be',
              apiNo: '2110-0026-01',
              apiDesc: '处方查询医嘱',
              successFlag: true,
              invokedConsumeTime: '52ms',
              ties: 'BMTS',
              domain: 'cli',
              subInvocationList: []
            },
            {
              id: '9970bbf6-539f-4bf3-8beb-5847968f3da5',
              apiNo: '2180-7031-01',
              apiDesc: '审方结果查询',
              successFlag: true,
              invokedConsumeTime: '19ms',
              ties: 'BMTS',
              domain: 'mat',
              subInvocationList: [
                {
                  id: '7f9dc1ee-dfe6-4949-8fa1-c3948c17dd69',
                  apiNo: '1100-6008-01',
                  apiDesc: '根据库房标识获取药房配置',
                  successFlag: true,
                  invokedConsumeTime: '2ms',
                  ties: 'MDS',
                  domain: 'mat',
                  subInvocationList: []
                }
              ]
            },
            {
              id: 'ac3b3b8b-2983-4f2f-ae89-b345f8b97386',
              apiNo: '1010-5026-01',
              apiDesc:
                '根据概念域ids（必填）和体系状态、值状态查询值、值（值名称、拼音码、五笔码、valueNo）模糊查询值集列表',
              successFlag: true,
              invokedConsumeTime: '5ms',
              ties: 'MDS',
              domain: 'mdm',
              subInvocationList: []
            }
          ]
        }
      ]
    },
    {
      id: '9e900271-5e18-47ca-8acf-dc529fc8e6e2',
      apiNo: '4127-0023-01',
      apiDesc: '根据住院就诊标识查询住院账单列表',
      successFlag: true,
      invokedConsumeTime: '270ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: 'a9d84122-8dc9-487d-9178-8f7468775c1b',
          apiNo: '3123-0019-01',
          apiDesc: '根据住院就诊标识查询住院账单列表',
          successFlag: true,
          invokedConsumeTime: '249ms',
          ties: 'AMTS',
          domain: 'fin',
          subInvocationList: [
            {
              id: '3c45c504-6362-420f-8904-c3d3dd146073',
              apiNo: '2120-0112-01',
              apiDesc: '根据住院就诊标识查询住院账单标识集合',
              successFlag: true,
              invokedConsumeTime: '32ms',
              ties: 'BMTS',
              domain: 'fin',
              subInvocationList: [
                {
                  id: '8647fd44-58e3-4e02-a7e7-fc23e214b924',
                  apiNo: '1010-5046-01',
                  apiDesc:
                    '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
                  successFlag: true,
                  invokedConsumeTime: '10ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: '73fee57b-a2f8-4464-a76c-d96dee9c788f',
                  apiNo: '1010-5046-01',
                  apiDesc:
                    '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
                  successFlag: true,
                  invokedConsumeTime: '7ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                }
              ]
            },
            {
              id: '8f28ffbe-462a-4c36-ae8e-f31f0e0c78bd',
              apiNo: '2120-0113-01',
              apiDesc: '根据住院账单标识查询住院账单列表',
              successFlag: true,
              invokedConsumeTime: '27ms',
              ties: 'BMTS',
              domain: 'fin',
              subInvocationList: [
                {
                  id: 'c4c5413a-e1fd-41a0-86e9-d71165c67c24',
                  apiNo: '1010-2005-01',
                  apiDesc:
                    '根据ids（必填）查询职工的聚合（不支持分页，限制ids 100个）',
                  successFlag: true,
                  invokedConsumeTime: '17ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                }
              ]
            },
            {
              id: '985f78c0-5022-4958-8a92-3c4a1083729b',
              apiNo: '2120-0124-01',
              apiDesc: '根据住院结算标识查询住院结算单信息',
              successFlag: true,
              invokedConsumeTime: '38ms',
              ties: 'BMTS',
              domain: 'fin',
              subInvocationList: [
                {
                  id: '0906a3d9-8228-4c88-bcde-f56b580bbc76',
                  apiNo: '1010-2005-01',
                  apiDesc:
                    '根据ids（必填）查询职工的聚合（不支持分页，限制ids 100个）',
                  successFlag: true,
                  invokedConsumeTime: '22ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: 'f3a3cecd-895b-4bf2-8dbf-ad9e3f3b9478',
                  apiNo: '1010-4025-01',
                  apiDesc: '根据ids查询组织主表的集合，(不支持分页id限制100个)',
                  successFlag: true,
                  invokedConsumeTime: '2ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                }
              ]
            },
            {
              id: '97656549-2504-42eb-bb42-07f036663538',
              apiNo: '2120-0069-01',
              apiDesc: '获取医保结算单信息',
              successFlag: true,
              invokedConsumeTime: '135ms',
              ties: 'BMTS',
              domain: 'fin',
              subInvocationList: [
                {
                  id: '8bf0ad8b-f20e-469f-817b-1acef27b356f',
                  apiNo: '1120-0222-01',
                  apiDesc:
                    '医疗保险-根据医疗机构的医疗保险标识列表查询医院医疗保险',
                  successFlag: true,
                  invokedConsumeTime: '122ms',
                  ties: 'MDS',
                  domain: 'fin',
                  subInvocationList: []
                }
              ]
            }
          ]
        },
        {
          id: '2c00e8a6-c211-4a8e-9ae0-0a837ccbb5d1',
          apiNo: '3151-1001-01',
          apiDesc: '查询患者信息',
          successFlag: true,
          invokedConsumeTime: '9ms',
          ties: 'AMTS',
          domain: 'enc',
          subInvocationList: [
            {
              id: 'c50ff1f2-dce9-4463-92f1-99beab584077',
              apiNo: '2140-1001-01',
              apiDesc: '患者信息查询',
              successFlag: true,
              invokedConsumeTime: '1ms',
              ties: 'BMTS',
              domain: 'per',
              subInvocationList: []
            }
          ]
        }
      ]
    },
    {
      id: '6f8f1e4c-947b-470d-96bd-992bb8f9c796',
      apiNo: '4127-0015-01',
      apiDesc: '根据账户标识获取交易信息列表',
      successFlag: true,
      invokedConsumeTime: '18ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '7601adcc-2d32-4825-9c9b-25550ebab591',
          apiNo: '2121-0024-01',
          apiDesc: '根据账户标识获取交易标识列表',
          successFlag: true,
          invokedConsumeTime: '14ms',
          ties: 'BMTS',
          domain: 'fin',
          subInvocationList: [
            {
              id: '9986fc72-657c-4887-b88b-752888c63584',
              apiNo: '1010-5046-01',
              apiDesc:
                '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
              successFlag: true,
              invokedConsumeTime: '8ms',
              ties: 'MDS',
              domain: 'mdm',
              subInvocationList: []
            }
          ]
        }
      ]
    },
    {
      id: 'e0566840-f55c-4529-8b04-2db4c45b1f1a',
      apiNo: '4125-0100-01',
      apiDesc: '查询订单审方信息',
      successFlag: true,
      invokedConsumeTime: '114ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: 'ea27322f-fa5c-414b-ba21-efc6761442a3',
          apiNo: '3121-0011-01',
          apiDesc: '根据订单标识列表获取可收费订单信息',
          successFlag: true,
          invokedConsumeTime: '109ms',
          ties: 'AMTS',
          domain: 'fin',
          subInvocationList: [
            {
              id: '21e505d3-f50a-477a-a563-6b1a9f0ac6f2',
              apiNo: '2120-0233-01',
              apiDesc: '根据订单标识列表获取订单和订单明细信息',
              successFlag: true,
              invokedConsumeTime: '30ms',
              ties: 'BMTS',
              domain: 'fin',
              subInvocationList: [
                {
                  id: '667545b9-b4ab-49b7-8e47-5e9eb84a3785',
                  apiNo: '1010-5046-01',
                  apiDesc:
                    '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
                  successFlag: true,
                  invokedConsumeTime: '7ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: '8bfab7c3-7127-4a1e-9c26-b2cf0ad92c03',
                  apiNo: '1010-5046-01',
                  apiDesc:
                    '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
                  successFlag: true,
                  invokedConsumeTime: '9ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                }
              ]
            },
            {
              id: 'a2efb2f6-17e2-4780-9294-7a82316b0ab4',
              apiNo: '1010-5046-01',
              apiDesc:
                '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
              successFlag: true,
              invokedConsumeTime: '12ms',
              ties: 'MDS',
              domain: 'mdm',
              subInvocationList: []
            },
            {
              id: '8f65166d-ead8-4255-af58-013bb018bdc5',
              apiNo: '2110-0026-01',
              apiDesc: '处方查询医嘱',
              successFlag: true,
              invokedConsumeTime: '25ms',
              ties: 'BMTS',
              domain: 'cli',
              subInvocationList: []
            },
            {
              id: 'c6c3929c-686a-4473-8fbe-1eae88abfafa',
              apiNo: '2180-7031-01',
              apiDesc: '审方结果查询',
              successFlag: true,
              invokedConsumeTime: '13ms',
              ties: 'BMTS',
              domain: 'mat',
              subInvocationList: [
                {
                  id: '0898c6e4-48e4-48c7-85ab-59aac0062b30',
                  apiNo: '1100-6008-01',
                  apiDesc: '根据库房标识获取药房配置',
                  successFlag: true,
                  invokedConsumeTime: '1ms',
                  ties: 'MDS',
                  domain: 'mat',
                  subInvocationList: []
                }
              ]
            },
            {
              id: 'dcdaed82-a6fb-4156-bb65-836df1ce178c',
              apiNo: '1010-5026-01',
              apiDesc:
                '根据概念域ids（必填）和体系状态、值状态查询值、值（值名称、拼音码、五笔码、valueNo）模糊查询值集列表',
              successFlag: true,
              invokedConsumeTime: '6ms',
              ties: 'MDS',
              domain: 'mdm',
              subInvocationList: []
            }
          ]
        }
      ]
    },
    {
      id: '41a7e3da-9699-4dbb-9955-83379dff312e',
      apiNo: '4129-0037-01',
      apiDesc: '查询医院收费点可用的支付方式列表',
      successFlag: true,
      invokedConsumeTime: '142ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '053f0efc-c434-44e2-820e-ad611ba89b08',
          apiNo: '1120-0206-01',
          apiDesc: '获取医院收费点可用的支付方式列表',
          successFlag: true,
          invokedConsumeTime: '21ms',
          ties: 'MDS',
          domain: 'fin',
          subInvocationList: []
        },
        {
          id: '4728c64d-3739-44fe-8c30-bf978e700fa9',
          apiNo: '1120-0012-01',
          apiDesc: '根据医院的支付方式标识查询医院的支付方式信息',
          successFlag: true,
          invokedConsumeTime: '107ms',
          ties: 'MDS',
          domain: 'fin',
          subInvocationList: []
        }
      ]
    },
    {
      id: '65b43488-b2ee-43cd-85b1-d6c10a844eea',
      apiNo: '4129-0076-01',
      apiDesc: '根据住院结算单标识进行HIS预算',
      successFlag: true,
      invokedConsumeTime: '748ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '8fe61203-0814-41d2-99e7-f572b5cb61b6',
          apiNo: '1010-5038-02',
          apiDesc:
            '根据概念域ids,标签ids,概念ids查询首选（首选编码体系下启用的）值集',
          successFlag: true,
          invokedConsumeTime: '170ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        },
        {
          id: 'f57dd4ca-be20-4439-9c01-c70076833f14',
          apiNo: '4120-0218-01',
          apiDesc: '锁定业务资源',
          successFlag: true,
          invokedConsumeTime: '24ms',
          ties: 'MDS',
          domain: 'fin',
          subInvocationList: []
        },
        {
          id: 'ce7697f1-705c-4e0c-8723-a15bf2ae4194',
          apiNo: '3123-0025-01',
          apiDesc: '根据住院结算单标识进行HIS预算',
          successFlag: true,
          invokedConsumeTime: '473ms',
          ties: 'AMTS',
          domain: 'fin',
          subInvocationList: [
            {
              id: 'a5c6ca4e-57a8-4e57-9904-0e762a1a3747',
              apiNo: '1010-5046-01',
              apiDesc:
                '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
              successFlag: true,
              invokedConsumeTime: '35ms',
              ties: 'MDS',
              domain: 'mdm',
              subInvocationList: []
            },
            {
              id: 'ee540c21-b091-49cf-8db2-80fbb00a4c40',
              apiNo: '2153-2001-01',
              apiDesc: '根据就诊标识查询住院就诊信息',
              successFlag: true,
              invokedConsumeTime: '35ms',
              ties: 'BMTS',
              domain: 'enc',
              subInvocationList: []
            },
            {
              id: '25efecf8-af21-4b34-8a1d-9ce2fa72d98a',
              apiNo: '2140-1002-01',
              apiDesc: '多个患者信息查询',
              successFlag: true,
              invokedConsumeTime: '248ms',
              ties: 'BMTS',
              domain: 'per',
              subInvocationList: [
                {
                  id: '467431c5-0bbe-4e79-8d7f-552af168ca9e',
                  apiNo: '1010-4058-01',
                  apiDesc:
                    '根据当前传入的医院soid查询其所有上级组织，返回包含自身的接口',
                  successFlag: true,
                  invokedConsumeTime: '13ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: '2218c796-62fc-4b51-baab-e5bcd462b400',
                  apiNo: '1140-1007-01',
                  apiDesc: '据年龄配置方案获取年龄配置信息',
                  successFlag: true,
                  invokedConsumeTime: '7ms',
                  ties: 'MDS',
                  domain: 'per',
                  subInvocationList: []
                },
                {
                  id: 'a4518a9b-70ac-4de2-8e0c-26145c5c777f',
                  apiNo: '1120-0222-01',
                  apiDesc:
                    '医疗保险-根据医疗机构的医疗保险标识列表查询医院医疗保险',
                  successFlag: true,
                  invokedConsumeTime: '176ms',
                  ties: 'MDS',
                  domain: 'fin',
                  subInvocationList: []
                }
              ]
            },
            {
              id: 'd358b336-8ce9-4c9a-80e6-efd509836db3',
              apiNo: '2121-0038-01',
              apiDesc: '依据户主类型概念标识+户主标识获取账户标识集合',
              successFlag: true,
              invokedConsumeTime: '2ms',
              ties: 'BMTS',
              domain: 'fin',
              subInvocationList: []
            },
            {
              id: 'f3f32a0d-1b4c-4311-b3cd-effae252a143',
              apiNo: '2120-0141-01',
              apiDesc: '根据住院结算单标识计算费用--new',
              successFlag: true,
              invokedConsumeTime: '129ms',
              ties: 'BMTS',
              domain: 'fin',
              subInvocationList: [
                {
                  id: 'fbc8f7be-c63f-4cd0-9011-d425db92dc69',
                  apiNo: '1010-2005-01',
                  apiDesc:
                    '根据ids（必填）查询职工的聚合（不支持分页，限制ids 100个）',
                  successFlag: true,
                  invokedConsumeTime: '33ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: 'cec2c43f-72b7-48b8-8e31-405bde1e1389',
                  apiNo: '1010-4025-01',
                  apiDesc: '根据ids查询组织主表的集合，(不支持分页id限制100个)',
                  successFlag: true,
                  invokedConsumeTime: '2ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: '9ee70a22-7d2c-43b1-9597-30888e9cae00',
                  apiNo: '1120-0169-01',
                  apiDesc: '获取收费大项目信息',
                  successFlag: true,
                  invokedConsumeTime: '3ms',
                  ties: 'MDS',
                  domain: 'fin',
                  subInvocationList: []
                },
                {
                  id: 'e6aaea2b-b19f-40fd-86a7-9be154a4ee63',
                  apiNo: '1010-4025-01',
                  apiDesc: '根据ids查询组织主表的集合，(不支持分页id限制100个)',
                  successFlag: true,
                  invokedConsumeTime: '0ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: 'fce298d5-cba6-4df5-9265-73737c26afae',
                  apiNo: '1010-2005-01',
                  apiDesc:
                    '根据ids（必填）查询职工的聚合（不支持分页，限制ids 100个）',
                  successFlag: true,
                  invokedConsumeTime: '23ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: 'f4c82e52-f546-4ca3-8ea8-2b87d5836b82',
                  apiNo: '1010-7030-01',
                  apiDesc:
                    '根据医疗服务标识列表、keyword、医疗服务类型代码列表、医疗服务状态查询医疗服务信息',
                  successFlag: true,
                  invokedConsumeTime: '5ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'cedf1158-3c29-4a10-b2ae-da2b7a16014b',
      apiNo: '4129-0074-01',
      apiDesc: '根据住院结算单标识获取医保结算单列表',
      successFlag: true,
      invokedConsumeTime: '245ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '0647b4a7-a764-4e11-899b-84104d70fe90',
          apiNo: '2120-0124-01',
          apiDesc: '根据住院结算标识查询住院结算单信息',
          successFlag: true,
          invokedConsumeTime: '44ms',
          ties: 'BMTS',
          domain: 'fin',
          subInvocationList: [
            {
              id: '1c345c97-2482-49f2-85da-9280c18af7f9',
              apiNo: '1010-2005-01',
              apiDesc:
                '根据ids（必填）查询职工的聚合（不支持分页，限制ids 100个）',
              successFlag: true,
              invokedConsumeTime: '21ms',
              ties: 'MDS',
              domain: 'mdm',
              subInvocationList: []
            },
            {
              id: '35bc68aa-a0d9-4d44-8728-a50e3dd0e980',
              apiNo: '1010-4025-01',
              apiDesc: '根据ids查询组织主表的集合，(不支持分页id限制100个)',
              successFlag: true,
              invokedConsumeTime: '6ms',
              ties: 'MDS',
              domain: 'mdm',
              subInvocationList: []
            }
          ]
        },
        {
          id: '83ec08f5-4eef-465b-99b6-b4c73d0acffc',
          apiNo: '2120-0069-01',
          apiDesc: '获取医保结算单信息',
          successFlag: true,
          invokedConsumeTime: '151ms',
          ties: 'BMTS',
          domain: 'fin',
          subInvocationList: [
            {
              id: '781db677-2f8f-4c61-9b02-088a54caf739',
              apiNo: '1120-0222-01',
              apiDesc:
                '医疗保险-根据医疗机构的医疗保险标识列表查询医院医疗保险',
              successFlag: true,
              invokedConsumeTime: '129ms',
              ties: 'MDS',
              domain: 'fin',
              subInvocationList: []
            }
          ]
        }
      ]
    },
    {
      id: 'f5a608de-a2cf-42e6-a3a2-322f32b1fe30',
      apiNo: '4129-0077-01',
      apiDesc: '保存医保预算结果',
      successFlag: true,
      invokedConsumeTime: '320ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '77602baf-20d9-4289-83e7-94d7522526ae',
          apiNo: '3123-0022-01',
          apiDesc: '保存医保预算结果',
          successFlag: true,
          invokedConsumeTime: '285ms',
          ties: 'AMTS',
          domain: 'fin',
          subInvocationList: [
            {
              id: '6021c5db-0502-4b43-9ecf-15df5f1d6aad',
              apiNo: '4120-0226-01',
              apiDesc: '查询指定业务资源的锁定情况',
              successFlag: true,
              invokedConsumeTime: '43ms',
              ties: 'MDS',
              domain: 'fin',
              subInvocationList: []
            },
            {
              id: 'd96f6e3c-2357-4893-8b11-8a9a5d582984',
              apiNo: '2120-0133-01',
              apiDesc: '保存医保预算结果',
              successFlag: true,
              invokedConsumeTime: '232ms',
              ties: 'BMTS',
              domain: 'fin',
              subInvocationList: [
                {
                  id: 'd5843f97-9aed-4d3e-85a4-c63a7248b4e5',
                  apiNo: '1010-5038-02',
                  apiDesc:
                    '根据概念域ids,标签ids,概念ids查询首选（首选编码体系下启用的）值集',
                  successFlag: true,
                  invokedConsumeTime: '71ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: 'b0b0843e-6f8d-4a34-80cb-f9eb1f7e3757',
                  apiNo: '1010-5038-02',
                  apiDesc:
                    '根据概念域ids,标签ids,概念ids查询首选（首选编码体系下启用的）值集',
                  successFlag: true,
                  invokedConsumeTime: '105ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: '4eb01a8c-1cb0-4679-a5a6-25a4e1c6a0c7',
      apiNo: '4129-0078-01',
      apiDesc: '根据结算单标识获取结算单金额信息',
      successFlag: true,
      invokedConsumeTime: '182ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: 'bde60ebe-70cc-491a-8b32-177328ddf53a',
          apiNo: '2120-0124-01',
          apiDesc: '根据住院结算标识查询住院结算单信息',
          successFlag: true,
          invokedConsumeTime: '56ms',
          ties: 'BMTS',
          domain: 'fin',
          subInvocationList: [
            {
              id: '033a8491-fcf0-4a46-851b-ced0964bc6db',
              apiNo: '1010-2005-01',
              apiDesc:
                '根据ids（必填）查询职工的聚合（不支持分页，限制ids 100个）',
              successFlag: true,
              invokedConsumeTime: '23ms',
              ties: 'MDS',
              domain: 'mdm',
              subInvocationList: []
            },
            {
              id: 'eae46de3-d16c-4da9-8c85-310b00d5af41',
              apiNo: '1010-4025-01',
              apiDesc: '根据ids查询组织主表的集合，(不支持分页id限制100个)',
              successFlag: true,
              invokedConsumeTime: '2ms',
              ties: 'MDS',
              domain: 'mdm',
              subInvocationList: []
            }
          ]
        },
        {
          id: 'e67a3d31-2dfa-42ca-8d08-30e15fe53be2',
          apiNo: '3123-0018-01',
          apiDesc: '根据住院账单标识、明细标识等复合条件查询费用明细',
          successFlag: true,
          invokedConsumeTime: '53ms',
          ties: 'AMTS',
          domain: 'fin',
          subInvocationList: [
            {
              id: 'e7fcbb1b-89ef-464b-b9b0-68553b1c874e',
              apiNo: '2120-0116-01',
              apiDesc: '根据住院账单标识等复合条件查询费用明细',
              successFlag: true,
              invokedConsumeTime: '47ms',
              ties: 'BMTS',
              domain: 'fin',
              subInvocationList: [
                {
                  id: 'aaf0cedd-496e-4a68-807e-7f6540670c0d',
                  apiNo: '1120-0169-01',
                  apiDesc: '获取收费大项目信息',
                  successFlag: true,
                  invokedConsumeTime: '6ms',
                  ties: 'MDS',
                  domain: 'fin',
                  subInvocationList: []
                },
                {
                  id: '382984a6-82a1-453a-89d0-d6b604dbb921',
                  apiNo: '1010-2005-01',
                  apiDesc:
                    '根据ids（必填）查询职工的聚合（不支持分页，限制ids 100个）',
                  successFlag: true,
                  invokedConsumeTime: '18ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: '8fd17482-7762-46a4-8b3b-967ce1ac3eca',
                  apiNo: '1010-4025-01',
                  apiDesc: '根据ids查询组织主表的集合，(不支持分页id限制100个)',
                  successFlag: true,
                  invokedConsumeTime: '1ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: 'ad996eb4-14c8-4c07-9b89-0bfa01297ec6',
                  apiNo: '1010-7030-01',
                  apiDesc:
                    '根据医疗服务标识列表、keyword、医疗服务类型代码列表、医疗服务状态查询医疗服务信息',
                  successFlag: true,
                  invokedConsumeTime: '3ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: '4c14188c-5ce7-47fc-8ebb-6b022c020bfe',
      apiNo: '4129-0082-01',
      apiDesc: '依据住院就诊标识获取住院押金账户信息',
      successFlag: true,
      invokedConsumeTime: '92ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '8a30ba5f-cd7e-4370-83a5-6338c2c4a8de',
          apiNo: '3123-0027-01',
          apiDesc: '依据住院就诊标识获取住院押金账户信息',
          successFlag: true,
          invokedConsumeTime: '62ms',
          ties: 'AMTS',
          domain: 'fin',
          subInvocationList: [
            {
              id: '70a2f382-f6e6-44ba-8ab9-e58180ba4819',
              apiNo: '2121-0038-01',
              apiDesc: '依据户主类型概念标识+户主标识获取账户标识集合',
              successFlag: true,
              invokedConsumeTime: '3ms',
              ties: 'BMTS',
              domain: 'fin',
              subInvocationList: []
            },
            {
              id: '1b572bb3-61c2-45ba-9819-3598614cecc8',
              apiNo: '2121-0010-01',
              apiDesc: '根据账户标识查询储蓄账户信息',
              successFlag: true,
              invokedConsumeTime: '51ms',
              ties: 'BMTS',
              domain: 'fin',
              subInvocationList: []
            }
          ]
        }
      ]
    },
    {
      id: 'aef9b2df-e20f-4d15-817c-48043af085c1',
      apiNo: '4122-0049-01',
      apiDesc: '根据个人信息标识查询可用的储蓄账户可用金额列表',
      successFlag: true,
      invokedConsumeTime: '8ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: 'aeb79bc9-b56a-46e1-8d14-ff15bbf6bb87',
          apiNo: '2121-0047-01',
          apiDesc: '根据个人信息标识查询可用的储蓄账户可用金额列表',
          successFlag: true,
          invokedConsumeTime: '3ms',
          ties: 'BMTS',
          domain: 'fin',
          subInvocationList: []
        }
      ]
    },
    {
      id: 'a9dd1410-968c-4322-adcf-c733f6bb22df',
      apiNo: '4127-0016-01',
      apiDesc: '根据账户标识获取可退的充值交易列表',
      successFlag: true,
      invokedConsumeTime: '75ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '3f913b4b-e26e-4f49-8cfc-86fb3f02d1b4',
          apiNo: '2121-0014-01',
          apiDesc: '根据账户标识获取可退的充值交易标识列表',
          successFlag: true,
          invokedConsumeTime: '70ms',
          ties: 'BMTS',
          domain: 'fin',
          subInvocationList: []
        }
      ]
    },
    {
      id: '070f10d3-41a6-405f-9dcc-791ac6052b79',
      apiNo: '4180-6001-01',
      apiDesc: '患者列表信息查询',
      successFlag: true,
      invokedConsumeTime: '37ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '902c138d-afee-4761-978d-68c298ac812e',
          apiNo: '3180-1001-01',
          apiDesc: '查询发药申请单患者信息',
          successFlag: true,
          invokedConsumeTime: '30ms',
          ties: 'AMTS',
          domain: 'mat',
          subInvocationList: [
            {
              id: '90032bcf-c750-4c6f-a910-9961f626d7ab',
              apiNo: '2180-6025-01',
              apiDesc:
                '查询发药申请单患者基本信息（分页）待配药，已配药，待发药，待审核，已审核，审核不通过',
              successFlag: true,
              invokedConsumeTime: '25ms',
              ties: 'BMTS',
              domain: 'mat',
              subInvocationList: []
            }
          ]
        }
      ]
    },
    {
      id: '19182dad-0b59-478b-bb44-24ded37aecd7',
      apiNo: '4125-0100-01',
      apiDesc: '查询订单审方信息',
      successFlag: true,
      invokedConsumeTime: '105ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: 'f29a6912-4c84-42d3-8790-12132763c79e',
          apiNo: '3121-0011-01',
          apiDesc: '根据订单标识列表获取可收费订单信息',
          successFlag: true,
          invokedConsumeTime: '101ms',
          ties: 'AMTS',
          domain: 'fin',
          subInvocationList: [
            {
              id: 'd27c5d59-2b22-4891-9ea4-5859eab5b9c8',
              apiNo: '2120-0233-01',
              apiDesc: '根据订单标识列表获取订单和订单明细信息',
              successFlag: true,
              invokedConsumeTime: '31ms',
              ties: 'BMTS',
              domain: 'fin',
              subInvocationList: [
                {
                  id: 'b4462a48-a406-4f2c-9380-8e7a27e6cd2f',
                  apiNo: '1010-5046-01',
                  apiDesc:
                    '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
                  successFlag: true,
                  invokedConsumeTime: '7ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: '65fa4c95-9238-477e-855d-c6f2ce795135',
                  apiNo: '1010-5046-01',
                  apiDesc:
                    '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
                  successFlag: true,
                  invokedConsumeTime: '8ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                }
              ]
            },
            {
              id: '4bddce61-da00-42d8-8a2d-6f2345a9f40d',
              apiNo: '1010-5046-01',
              apiDesc:
                '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
              successFlag: true,
              invokedConsumeTime: '6ms',
              ties: 'MDS',
              domain: 'mdm',
              subInvocationList: []
            },
            {
              id: '52c861fe-7c2e-4e4f-9ae6-2ed36ae75c24',
              apiNo: '2110-0026-01',
              apiDesc: '处方查询医嘱',
              successFlag: true,
              invokedConsumeTime: '15ms',
              ties: 'BMTS',
              domain: 'cli',
              subInvocationList: []
            },
            {
              id: '80d1e0b8-0f20-401f-87be-4b730aff3e93',
              apiNo: '2180-7031-01',
              apiDesc: '审方结果查询',
              successFlag: true,
              invokedConsumeTime: '20ms',
              ties: 'BMTS',
              domain: 'mat',
              subInvocationList: [
                {
                  id: '2705e680-8097-487f-9f98-c2b0e7629c14',
                  apiNo: '1100-6008-01',
                  apiDesc: '根据库房标识获取药房配置',
                  successFlag: true,
                  invokedConsumeTime: '2ms',
                  ties: 'MDS',
                  domain: 'mat',
                  subInvocationList: []
                }
              ]
            },
            {
              id: 'bcf1784e-5930-4324-9579-dde0b665dc70',
              apiNo: '1010-5026-01',
              apiDesc:
                '根据概念域ids（必填）和体系状态、值状态查询值、值（值名称、拼音码、五笔码、valueNo）模糊查询值集列表',
              successFlag: true,
              invokedConsumeTime: '6ms',
              ties: 'MDS',
              domain: 'mdm',
              subInvocationList: []
            }
          ]
        }
      ]
    },
    {
      id: 'ee79b0c4-20b0-4dc9-8d7f-6df0b97b7fd8',
      apiNo: '4125-0100-01',
      apiDesc: '查询订单审方信息',
      successFlag: true,
      invokedConsumeTime: '196ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: 'b62a341f-257d-4c80-9df1-db1ed3b1a49e',
          apiNo: '3121-0011-01',
          apiDesc: '根据订单标识列表获取可收费订单信息',
          successFlag: true,
          invokedConsumeTime: '190ms',
          ties: 'AMTS',
          domain: 'fin',
          subInvocationList: [
            {
              id: '3d5414a3-36a2-41de-b05d-d9e36383226a',
              apiNo: '2120-0233-01',
              apiDesc: '根据订单标识列表获取订单和订单明细信息',
              successFlag: true,
              invokedConsumeTime: '41ms',
              ties: 'BMTS',
              domain: 'fin',
              subInvocationList: [
                {
                  id: '6255128c-6653-4330-8626-71bd504eb1a8',
                  apiNo: '1010-5046-01',
                  apiDesc:
                    '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
                  successFlag: true,
                  invokedConsumeTime: '6ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: 'f8537010-89ca-4836-8034-b248fd049b8e',
                  apiNo: '1010-5046-01',
                  apiDesc:
                    '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
                  successFlag: true,
                  invokedConsumeTime: '7ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                }
              ]
            },
            {
              id: 'a50815f1-eb60-460e-a2ce-c31ce2175c37',
              apiNo: '1010-5046-01',
              apiDesc:
                '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
              successFlag: true,
              invokedConsumeTime: '18ms',
              ties: 'MDS',
              domain: 'mdm',
              subInvocationList: []
            },
            {
              id: '81807676-107e-4676-bedd-897b160457ea',
              apiNo: '2110-0026-01',
              apiDesc: '处方查询医嘱',
              successFlag: true,
              invokedConsumeTime: '78ms',
              ties: 'BMTS',
              domain: 'cli',
              subInvocationList: []
            },
            {
              id: '60a45569-e137-49ca-9417-c399892bb274',
              apiNo: '2180-7031-01',
              apiDesc: '审方结果查询',
              successFlag: true,
              invokedConsumeTime: '18ms',
              ties: 'BMTS',
              domain: 'mat',
              subInvocationList: [
                {
                  id: 'c0c37f8d-1dd6-4f62-be8c-dfa9a17d7f50',
                  apiNo: '1100-6008-01',
                  apiDesc: '根据库房标识获取药房配置',
                  successFlag: true,
                  invokedConsumeTime: '2ms',
                  ties: 'MDS',
                  domain: 'mat',
                  subInvocationList: []
                }
              ]
            },
            {
              id: '6f7d35d3-1fad-4ee2-893d-2e82f6061ea8',
              apiNo: '1010-5026-01',
              apiDesc:
                '根据概念域ids（必填）和体系状态、值状态查询值、值（值名称、拼音码、五笔码、valueNo）模糊查询值集列表',
              successFlag: true,
              invokedConsumeTime: '11ms',
              ties: 'MDS',
              domain: 'mdm',
              subInvocationList: []
            }
          ]
        }
      ]
    },
    {
      id: 'ea1edf86-a8df-4b75-8888-31cde57e7cdf',
      apiNo: '4180-6001-01',
      apiDesc: '患者列表信息查询',
      successFlag: true,
      invokedConsumeTime: '215ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: 'b3419915-5769-446c-9795-da583074640e',
          apiNo: '3180-1001-01',
          apiDesc: '查询发药申请单患者信息',
          successFlag: true,
          invokedConsumeTime: '200ms',
          ties: 'AMTS',
          domain: 'mat',
          subInvocationList: [
            {
              id: '79d837dc-3edf-4270-bb92-242d8ab497e1',
              apiNo: '2180-6025-01',
              apiDesc:
                '查询发药申请单患者基本信息（分页）待配药，已配药，待发药，待审核，已审核，审核不通过',
              successFlag: true,
              invokedConsumeTime: '64ms',
              ties: 'BMTS',
              domain: 'mat',
              subInvocationList: []
            },
            {
              id: '4ea0f09d-7b80-4f5e-8576-6afe0d97c695',
              apiNo: '2150-1029-01',
              apiDesc: '根据角色标识列表查询门诊就诊记录',
              successFlag: true,
              invokedConsumeTime: '58ms',
              ties: 'BMTS',
              domain: 'enc',
              subInvocationList: []
            },
            {
              id: 'e67bfb2f-dbe5-421f-b51c-6708796070fa',
              apiNo: '2150-1005-01',
              apiDesc: '就诊健康概况及扩展查询',
              successFlag: true,
              invokedConsumeTime: '10ms',
              ties: 'BMTS',
              domain: 'enc',
              subInvocationList: []
            },
            {
              id: 'b2c5a68e-02d3-45b1-95e0-adab7a16280c',
              apiNo: '2140-71046-01',
              apiDesc: '根据个人身份标识定制化查询患者信息列表',
              successFlag: true,
              invokedConsumeTime: '120ms',
              ties: 'BMTS',
              domain: 'per',
              subInvocationList: [
                {
                  id: '8c84db13-b082-4e74-bdfd-ea3f687a2b35',
                  apiNo: '1010-4058-01',
                  apiDesc:
                    '根据当前传入的医院soid查询其所有上级组织，返回包含自身的接口',
                  successFlag: true,
                  invokedConsumeTime: '19ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: '3fcce799-b75e-4321-886d-3d74f500428c',
                  apiNo: '1140-1006-01',
                  apiDesc: '查询所有年龄显示配置',
                  successFlag: true,
                  invokedConsumeTime: '6ms',
                  ties: 'MDS',
                  domain: 'per',
                  subInvocationList: []
                },
                {
                  id: 'ee95ca35-eee5-4a9f-8b17-f95a99740516',
                  apiNo: '1010-4058-01',
                  apiDesc:
                    '根据当前传入的医院soid查询其所有上级组织，返回包含自身的接口',
                  successFlag: true,
                  invokedConsumeTime: '5ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: '429a5cba-6375-4925-bcf3-8538293b56b8',
                  apiNo: '1140-1007-01',
                  apiDesc: '据年龄配置方案获取年龄配置信息',
                  successFlag: true,
                  invokedConsumeTime: '7ms',
                  ties: 'MDS',
                  domain: 'per',
                  subInvocationList: []
                }
              ]
            }
          ]
        },
        {
          id: 'dd732beb-2dd0-41ea-8310-64bd8967afd2',
          apiNo: '1100-10003-01',
          apiDesc: '查询指定库房窗口',
          successFlag: false,
          invokedConsumeTime: '1ms',
          ties: 'MDS',
          domain: 'mat',
          subInvocationList: []
        }
      ]
    },
    {
      id: '6ef46209-adad-448f-854f-9d55c46ffd49',
      apiNo: '4180-6002-05',
      apiDesc: '根据就诊标识号获取发药明细信息',
      successFlag: true,
      invokedConsumeTime: '245ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '1555aaea-8ec7-4d68-bd5b-e0b6e53efd2c',
          apiNo: '3180-1006-01',
          apiDesc: '根据就诊标识号获取发药明细信息',
          successFlag: true,
          invokedConsumeTime: '220ms',
          ties: 'AMTS',
          domain: 'mat',
          subInvocationList: [
            {
              id: 'f5c2b354-4144-4714-9549-522d3b99a8a1',
              apiNo: '2180-4017-01',
              apiDesc: '获取发药申请单明细信息',
              successFlag: true,
              invokedConsumeTime: '132ms',
              ties: 'BMTS',
              domain: 'mat',
              subInvocationList: [
                {
                  id: 'a3daa2a1-77af-4f14-8e2d-446c4a02e350',
                  apiNo: '1100-6120-01',
                  apiDesc:
                    '多条件（药房组织标识、药品类型、药品剂型、启用标志、药品名称、拼音码、五笔码、助记码 ）分页查询药品商品目录列表  不超过100个',
                  successFlag: true,
                  invokedConsumeTime: '49ms',
                  ties: 'MDS',
                  domain: 'mat',
                  subInvocationList: []
                }
              ]
            },
            {
              id: '3884d133-1ddc-40da-80c3-4300ecfe3eba',
              apiNo: '2110-0026-01',
              apiDesc: '处方查询医嘱',
              successFlag: true,
              invokedConsumeTime: '73ms',
              ties: 'BMTS',
              domain: 'cli',
              subInvocationList: []
            }
          ]
        },
        {
          id: '22fb412b-b108-4a6c-b630-534c4854e170',
          apiNo: '1100-7024-01',
          apiDesc:
            '药品商品ES多条件（商品启用标志、药品类型代码、药品分类代码、精毒麻放代码、抗菌药物等级代码、药品剂型、其中关键字包含【商品名称、药品通用名、药品名英文、药品编码、拼音码、五笔码、助记码】）综合分页查询',
          successFlag: true,
          invokedConsumeTime: '7ms',
          ties: 'MDS',
          domain: 'mat',
          subInvocationList: []
        }
      ]
    },
    {
      id: '309c0e0b-2921-4a5f-88f7-c33aba96fd56',
      apiNo: '4125-0100-01',
      apiDesc: '查询订单审方信息',
      successFlag: true,
      invokedConsumeTime: '288ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '9fe630fd-e7e1-4dbb-a441-a0496b572776',
          apiNo: '3121-0011-01',
          apiDesc: '根据订单标识列表获取可收费订单信息',
          successFlag: true,
          invokedConsumeTime: '283ms',
          ties: 'AMTS',
          domain: 'fin',
          subInvocationList: [
            {
              id: 'dea79869-a37e-4235-88d1-5a9e351ffebf',
              apiNo: '2120-0233-01',
              apiDesc: '根据订单标识列表获取订单和订单明细信息',
              successFlag: true,
              invokedConsumeTime: '149ms',
              ties: 'BMTS',
              domain: 'fin',
              subInvocationList: [
                {
                  id: 'afb54be1-9ea9-4e19-8e5c-647008e13883',
                  apiNo: '1010-5046-01',
                  apiDesc:
                    '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
                  successFlag: true,
                  invokedConsumeTime: '64ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: '372f521e-d392-4988-b167-96e467ebf015',
                  apiNo: '1010-5046-01',
                  apiDesc:
                    '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
                  successFlag: true,
                  invokedConsumeTime: '14ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                }
              ]
            },
            {
              id: 'da1e64b0-efd9-4e1a-955d-5cebf05af855',
              apiNo: '1010-5046-01',
              apiDesc:
                '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
              successFlag: true,
              invokedConsumeTime: '7ms',
              ties: 'MDS',
              domain: 'mdm',
              subInvocationList: []
            },
            {
              id: '92780539-de5a-4b16-819a-341c3660b5ab',
              apiNo: '2110-0026-01',
              apiDesc: '处方查询医嘱',
              successFlag: true,
              invokedConsumeTime: '43ms',
              ties: 'BMTS',
              domain: 'cli',
              subInvocationList: []
            },
            {
              id: '67524c3f-6778-4d97-80d7-24a006068eb4',
              apiNo: '2180-7031-01',
              apiDesc: '审方结果查询',
              successFlag: true,
              invokedConsumeTime: '39ms',
              ties: 'BMTS',
              domain: 'mat',
              subInvocationList: [
                {
                  id: '4366eefd-6ded-4c2b-a550-86eda370b260',
                  apiNo: '1100-6008-01',
                  apiDesc: '根据库房标识获取药房配置',
                  successFlag: true,
                  invokedConsumeTime: '5ms',
                  ties: 'MDS',
                  domain: 'mat',
                  subInvocationList: []
                }
              ]
            },
            {
              id: '93606416-86cc-45b0-8407-c9187f9e842b',
              apiNo: '1010-5026-01',
              apiDesc:
                '根据概念域ids（必填）和体系状态、值状态查询值、值（值名称、拼音码、五笔码、valueNo）模糊查询值集列表',
              successFlag: true,
              invokedConsumeTime: '23ms',
              ties: 'MDS',
              domain: 'mdm',
              subInvocationList: []
            }
          ]
        }
      ]
    },
    {
      id: 'e807657c-0cb9-4600-a51e-2182d647c060',
      apiNo: '4125-0100-01',
      apiDesc: '查询订单审方信息',
      successFlag: true,
      invokedConsumeTime: '93ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '5e6103c0-6411-4858-aa0a-71d20244c35e',
          apiNo: '3121-0011-01',
          apiDesc: '根据订单标识列表获取可收费订单信息',
          successFlag: true,
          invokedConsumeTime: '87ms',
          ties: 'AMTS',
          domain: 'fin',
          subInvocationList: [
            {
              id: '5143c274-beca-4d44-845b-359267777c97',
              apiNo: '2120-0233-01',
              apiDesc: '根据订单标识列表获取订单和订单明细信息',
              successFlag: true,
              invokedConsumeTime: '30ms',
              ties: 'BMTS',
              domain: 'fin',
              subInvocationList: [
                {
                  id: 'e6cb8c1e-d824-4a18-a002-e9568de9f0a0',
                  apiNo: '1010-5046-01',
                  apiDesc:
                    '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
                  successFlag: true,
                  invokedConsumeTime: '7ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: 'cfc972b4-45e9-4e4c-9be2-419d614f6f6c',
                  apiNo: '1010-5046-01',
                  apiDesc:
                    '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
                  successFlag: true,
                  invokedConsumeTime: '5ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                }
              ]
            },
            {
              id: '136e9059-c948-42dc-a01c-15771b80a908',
              apiNo: '1010-5046-01',
              apiDesc:
                '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
              successFlag: true,
              invokedConsumeTime: '7ms',
              ties: 'MDS',
              domain: 'mdm',
              subInvocationList: []
            },
            {
              id: 'a7ea5f76-61f5-43f7-93e2-01833f17ec3d',
              apiNo: '2110-0026-01',
              apiDesc: '处方查询医嘱',
              successFlag: true,
              invokedConsumeTime: '12ms',
              ties: 'BMTS',
              domain: 'cli',
              subInvocationList: []
            },
            {
              id: 'a702e28a-7e07-48f0-9a3d-94f9b13fcdac',
              apiNo: '2180-7031-01',
              apiDesc: '审方结果查询',
              successFlag: true,
              invokedConsumeTime: '11ms',
              ties: 'BMTS',
              domain: 'mat',
              subInvocationList: [
                {
                  id: '25424db7-af19-40cb-8791-af65561e558b',
                  apiNo: '1100-6008-01',
                  apiDesc: '根据库房标识获取药房配置',
                  successFlag: true,
                  invokedConsumeTime: '1ms',
                  ties: 'MDS',
                  domain: 'mat',
                  subInvocationList: []
                }
              ]
            },
            {
              id: '4607cd77-b2cc-4f98-8799-781d08a13de7',
              apiNo: '1010-5026-01',
              apiDesc:
                '根据概念域ids（必填）和体系状态、值状态查询值、值（值名称、拼音码、五笔码、valueNo）模糊查询值集列表',
              successFlag: true,
              invokedConsumeTime: '5ms',
              ties: 'MDS',
              domain: 'mdm',
              subInvocationList: []
            }
          ]
        }
      ]
    },
    {
      id: 'c7a0233d-11de-40b7-a0c8-fda658259201',
      apiNo: '4180-6001-01',
      apiDesc: '患者列表信息查询',
      successFlag: true,
      invokedConsumeTime: '104ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: 'c9bc0bd7-9e9d-4fd7-b55e-45428230e547',
          apiNo: '3180-1001-01',
          apiDesc: '查询发药申请单患者信息',
          successFlag: true,
          invokedConsumeTime: '98ms',
          ties: 'AMTS',
          domain: 'mat',
          subInvocationList: [
            {
              id: '4e9313dc-a0a3-497e-b238-f870b7d3a075',
              apiNo: '2180-6025-01',
              apiDesc:
                '查询发药申请单患者基本信息（分页）待配药，已配药，待发药，待审核，已审核，审核不通过',
              successFlag: true,
              invokedConsumeTime: '93ms',
              ties: 'BMTS',
              domain: 'mat',
              subInvocationList: []
            }
          ]
        }
      ]
    },
    {
      id: '71070e71-2004-45a1-a5f4-d313cccbd587',
      apiNo: '4125-0100-01',
      apiDesc: '查询订单审方信息',
      successFlag: true,
      invokedConsumeTime: '90ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '7250b8ee-292b-4fc1-8823-f22f16123199',
          apiNo: '3121-0011-01',
          apiDesc: '根据订单标识列表获取可收费订单信息',
          successFlag: true,
          invokedConsumeTime: '85ms',
          ties: 'AMTS',
          domain: 'fin',
          subInvocationList: [
            {
              id: '1963023d-4316-4843-aa24-1e6042fa3c70',
              apiNo: '2120-0233-01',
              apiDesc: '根据订单标识列表获取订单和订单明细信息',
              successFlag: true,
              invokedConsumeTime: '26ms',
              ties: 'BMTS',
              domain: 'fin',
              subInvocationList: [
                {
                  id: '7967476f-44d7-44d0-8d39-ab960685f414',
                  apiNo: '1010-5046-01',
                  apiDesc:
                    '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
                  successFlag: true,
                  invokedConsumeTime: '7ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: 'a99fc8ff-cac2-425b-8bcf-2ec1a2c26a03',
                  apiNo: '1010-5046-01',
                  apiDesc:
                    '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
                  successFlag: true,
                  invokedConsumeTime: '5ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                }
              ]
            },
            {
              id: 'bbdf1c82-249b-486b-8c46-3c63096c21f6',
              apiNo: '1010-5046-01',
              apiDesc:
                '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
              successFlag: true,
              invokedConsumeTime: '7ms',
              ties: 'MDS',
              domain: 'mdm',
              subInvocationList: []
            },
            {
              id: '6105d465-6831-44f2-8d34-fe0967b492cd',
              apiNo: '2110-0026-01',
              apiDesc: '处方查询医嘱',
              successFlag: true,
              invokedConsumeTime: '13ms',
              ties: 'BMTS',
              domain: 'cli',
              subInvocationList: []
            },
            {
              id: '68fcfafb-57fd-4a75-846f-2491bb0ff9b6',
              apiNo: '2180-7031-01',
              apiDesc: '审方结果查询',
              successFlag: true,
              invokedConsumeTime: '11ms',
              ties: 'BMTS',
              domain: 'mat',
              subInvocationList: [
                {
                  id: 'a7cd584d-9ef5-4a55-8665-ba031fb3c15b',
                  apiNo: '1100-6008-01',
                  apiDesc: '根据库房标识获取药房配置',
                  successFlag: true,
                  invokedConsumeTime: '1ms',
                  ties: 'MDS',
                  domain: 'mat',
                  subInvocationList: []
                }
              ]
            },
            {
              id: 'cb3a46bd-1be5-4204-8a4b-a1c7e9c525c1',
              apiNo: '1010-5026-01',
              apiDesc:
                '根据概念域ids（必填）和体系状态、值状态查询值、值（值名称、拼音码、五笔码、valueNo）模糊查询值集列表',
              successFlag: true,
              invokedConsumeTime: '4ms',
              ties: 'MDS',
              domain: 'mdm',
              subInvocationList: []
            }
          ]
        }
      ]
    },
    {
      id: '8e8468cb-28e2-4048-8615-845fdebacfe2',
      apiNo: null,
      apiDesc: '查询医院登录方式列表',
      successFlag: true,
      invokedConsumeTime: '17ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '244e730f-4b79-4196-b13b-c472bf345ca5',
          apiNo: '1010-4067-01',
          apiDesc: '获取全部子级集团和医院',
          successFlag: true,
          invokedConsumeTime: '4ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        },
        {
          id: '94bf9302-68e9-4f57-b55a-164d4846e3bb',
          apiNo: '1010-4066-01',
          apiDesc: '根据soid获取医院登录方式列表',
          successFlag: true,
          invokedConsumeTime: '4ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        }
      ]
    },
    {
      id: '8eb704e9-d8b8-466a-8614-7b394a4388ad',
      apiNo: null,
      apiDesc: '获取系统背景的登录图片',
      successFlag: true,
      invokedConsumeTime: '18ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '1fb4c4ce-5d02-469b-883f-f683b6a7a9ae',
          apiNo: '1010-3020-01',
          apiDesc: '根据系统id查询系统相关信息',
          successFlag: true,
          invokedConsumeTime: '14ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        }
      ]
    },
    {
      id: '9b9a8b8c-0bd2-48ea-9752-4724fedb0715',
      apiNo: null,
      apiDesc: '校验登录帐号密码',
      successFlag: true,
      invokedConsumeTime: '146ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '3153bd4f-9121-4d65-b498-892181617448',
          apiNo: '1010-4065-01',
          apiDesc: '查询员工服务组织(只返回集团和医院)',
          successFlag: true,
          invokedConsumeTime: '15ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        }
      ]
    },
    {
      id: 'ef2e8569-4a3f-4ef1-ae6f-676573517965',
      apiNo: null,
      apiDesc: '混淆密码用户登录',
      successFlag: true,
      invokedConsumeTime: '179ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '91b4989f-979b-4d58-8f18-bdf3ebe8170f',
          apiNo: '1010-2011-01',
          apiDesc: '根据职工id查询职工单表',
          successFlag: true,
          invokedConsumeTime: '3ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        },
        {
          id: '98e1b71a-716d-49e4-8e1a-fb77c77c5244',
          apiNo: '1010-4058-01',
          apiDesc:
            '根据当前传入的医院soid查询其所有上级组织，返回包含自身的接口',
          successFlag: true,
          invokedConsumeTime: '6ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        },
        {
          id: '273e3e75-1d90-4e59-8660-ada6edade27f',
          apiNo: '220-6101-01',
          apiDesc: '记录用户登录日志',
          successFlag: true,
          invokedConsumeTime: '10ms',
          ties: 'BMTS',
          domain: 'mdm',
          subInvocationList: []
        },
        {
          id: 'aa1e2be7-fa12-41be-800d-64351e609fe0',
          apiNo: '220-6101-01',
          apiDesc: '记录用户审计日志',
          successFlag: true,
          invokedConsumeTime: '14ms',
          ties: 'BMTS',
          domain: 'mdm',
          subInvocationList: []
        }
      ]
    },
    {
      id: '8c884928-febd-49cd-8a1d-25ee5268be1d',
      apiNo: null,
      apiDesc: '获取登陆人员信息',
      successFlag: true,
      invokedConsumeTime: '14ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '89e190a6-2317-49e7-93c3-59f299d00cf1',
          apiNo: '1010-4075-01',
          apiDesc:
            '查询全部医院信息（包含集团，可以根据上parentId判断组织之间的关系）',
          successFlag: true,
          invokedConsumeTime: '9ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        }
      ]
    },
    {
      id: '8b6d91f7-b138-4646-8f0e-8ce483c47819',
      apiNo: null,
      apiDesc: '查询用户基本信息',
      successFlag: true,
      invokedConsumeTime: '58ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: 'e760da77-b468-4b70-8e8d-105b95e7b1d9',
          apiNo: '1010-2071-01',
          apiDesc: '根据id查询职工的聚合_v2(职工接口过滤soid)',
          successFlag: true,
          invokedConsumeTime: '37ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        },
        {
          id: '78f9c631-e664-4e45-84a1-3188e2e45524',
          apiNo: '1010-3016-01',
          apiDesc: '根据用户id查询角色（聚合用户角色、角色）',
          successFlag: true,
          invokedConsumeTime: '10ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        }
      ]
    },
    {
      id: 'aa3a47d3-d188-4f70-9024-e6c96790d4e2',
      apiNo: '3210-1501-12',
      apiDesc: '查询快捷键设置',
      successFlag: true,
      invokedConsumeTime: '31ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '3e964525-1e64-4509-9948-94e1058e77bf',
          apiNo: '1010-5046-01',
          apiDesc:
            '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
          successFlag: true,
          invokedConsumeTime: '11ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        },
        {
          id: 'da95391e-822f-4c2c-89c4-0c739f85ce21',
          apiNo: null,
          apiDesc: '查询偏好设置',
          successFlag: true,
          invokedConsumeTime: '8ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        }
      ]
    },
    {
      id: 'd9e101d8-f0c2-4e21-b687-d49a6168148a',
      apiNo: '3210-1501-02',
      apiDesc: '根据用户标识查询可访问的系统及应用菜单',
      successFlag: true,
      invokedConsumeTime: '212ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '560e6f2d-4e7d-4508-9a08-7df3ed850ddb',
          apiNo: '1010-3009-01',
          apiDesc:
            '根据userId查询应用系统,获取用户可以登入的系统(包含用户自身和对应角色的)',
          successFlag: true,
          invokedConsumeTime: '76ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        },
        {
          id: '9be31ded-f128-4c95-8dfd-309da120d5b5',
          apiNo: '1010-3033-01',
          apiDesc:
            '根据用户Id（必选），系统id（必选）查询应用菜单(包含用户自身已选择的菜单和对应角色的菜单)',
          successFlag: true,
          invokedConsumeTime: '122ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        }
      ]
    },
    {
      id: '4f5425d5-46f2-4392-8ba4-2642a8471678',
      apiNo: '3210-1501-10',
      apiDesc: '查询个人字号个性化设置',
      successFlag: true,
      invokedConsumeTime: '14ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '7684db34-180d-43b6-b944-d1d3768e7e20',
          apiNo: null,
          apiDesc: '查询偏好设置',
          successFlag: true,
          invokedConsumeTime: '9ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        }
      ]
    },
    {
      id: 'ce431de9-5a88-490f-8d02-d0a00370d8ff',
      apiNo: '3210-1501-08',
      apiDesc: '通过员工id 查询个性化设置',
      successFlag: true,
      invokedConsumeTime: '12ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: 'bcc3ff49-e771-47d1-84b8-10d7f6d148de',
          apiNo: null,
          apiDesc: '查询偏好设置',
          successFlag: true,
          invokedConsumeTime: '8ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        }
      ]
    },
    {
      id: '7a530b20-a60d-4e13-80b3-527fd582bc10',
      apiNo: '3210-1501-04',
      apiDesc: '查询菜单的操作设置项列表',
      successFlag: true,
      invokedConsumeTime: '20ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '109373c9-2632-4c63-8aea-03c7aff45d08',
          apiNo: '1120-0375-01',
          apiDesc: '根据菜单标识列表查询操作设置项列表',
          successFlag: true,
          invokedConsumeTime: '2ms',
          ties: 'MDS',
          domain: 'fin',
          subInvocationList: []
        },
        {
          id: '275871f5-1a02-4903-aee1-ec6663c39b5c',
          apiNo: '1120-0376-01',
          apiDesc: '根据操作设置项标识列表查询操作设置项列表',
          successFlag: true,
          invokedConsumeTime: '8ms',
          ties: 'MDS',
          domain: 'fin',
          subInvocationList: []
        }
      ]
    },
    {
      id: '9bf14b9a-6871-4f43-8853-f4800ac773fd',
      apiNo: '3210-1501-02',
      apiDesc: '根据用户标识查询可访问的系统及应用菜单',
      successFlag: true,
      invokedConsumeTime: '242ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: 'af608dab-140b-4f44-9fd7-4cf0c15e14a5',
          apiNo: '1010-3009-01',
          apiDesc:
            '根据userId查询应用系统,获取用户可以登入的系统(包含用户自身和对应角色的)',
          successFlag: true,
          invokedConsumeTime: '83ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        },
        {
          id: 'dfb2e7a8-79fe-45fb-8006-ddef37d37610',
          apiNo: '1010-3033-01',
          apiDesc:
            '根据用户Id（必选），系统id（必选）查询应用菜单(包含用户自身已选择的菜单和对应角色的菜单)',
          successFlag: true,
          invokedConsumeTime: '145ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        }
      ]
    },
    {
      id: '50962485-6def-457a-82c4-c925932f8e96',
      apiNo: '3210-1501-11',
      apiDesc: '保存快捷键设置',
      successFlag: true,
      invokedConsumeTime: '57ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '4aab9e6b-aa7e-429a-855e-fa4caaf08978',
          apiNo: '1010-5046-01',
          apiDesc:
            '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
          successFlag: true,
          invokedConsumeTime: '9ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        },
        {
          id: '91de2ec2-74e2-4b50-aa51-74e64e763f1a',
          apiNo: null,
          apiDesc: '保存偏好设置',
          successFlag: true,
          invokedConsumeTime: '36ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        }
      ]
    },
    {
      id: 'e5117ead-e8c7-40bc-8063-336b75d366bd',
      apiNo: '4010-3002-01',
      apiDesc:
        '根据用户id（必填）和系统id（必填）查询菜单（包含用户自身和对应角色的菜单）',
      successFlag: true,
      invokedConsumeTime: '207ms',
      ties: 'MAS',
      domain: null,
      subInvocationList: [
        {
          id: '55bbca43-ecbd-4a27-8df6-745079307a25',
          apiNo: '1010-3006-01',
          apiDesc: '根据系统id（必填）查询该系统的所有菜单api（不支持分页）',
          successFlag: true,
          invokedConsumeTime: '23ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        },
        {
          id: '235812bc-a401-4412-add1-80118d5a2e8a',
          apiNo: '1010-3033-01',
          apiDesc:
            '根据用户Id（必选），系统id（必选）查询应用菜单(包含用户自身已选择的菜单和对应角色的菜单)',
          successFlag: true,
          invokedConsumeTime: '165ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        }
      ]
    },
    {
      id: '61c15d9a-76dc-411e-8073-211bd4e4ba6d',
      apiNo: '3210-1030-01',
      apiDesc: '获取个人默认方案',
      successFlag: true,
      invokedConsumeTime: '9ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: []
    },
    {
      id: '6dc0f2d1-46e8-4c7e-9a89-a1a6e3e82ecf',
      apiNo: '3210-1407-01',
      apiDesc: 'HIS新版本-搜索已配置方案列表',
      successFlag: true,
      invokedConsumeTime: '77ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: 'edb8d23d-d1e7-451b-832b-e33008cb1580',
          apiNo: '1010-5057-01',
          apiDesc: '根据值集Ids查询值集列表',
          successFlag: true,
          invokedConsumeTime: '42ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        }
      ]
    },
    {
      id: '957648a9-d418-426e-b06b-6ed8d2514c61',
      apiNo: '3210-1029-01',
      apiDesc: '保存个人默认方案',
      successFlag: true,
      invokedConsumeTime: '54ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: []
    },
    {
      id: '13d4a882-9d80-437b-896a-9fd73a72ff66',
      apiNo: '3210-1501-02',
      apiDesc: '根据用户标识查询可访问的系统及应用菜单',
      successFlag: true,
      invokedConsumeTime: '264ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '2232d3fc-3ef8-4ea3-a94f-528f804667b3',
          apiNo: '1010-3009-01',
          apiDesc:
            '根据userId查询应用系统,获取用户可以登入的系统(包含用户自身和对应角色的)',
          successFlag: true,
          invokedConsumeTime: '90ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        },
        {
          id: 'f026a032-982a-4fae-8ca5-3a22913d4f20',
          apiNo: '1010-3033-01',
          apiDesc:
            '根据用户Id（必选），系统id（必选）查询应用菜单(包含用户自身已选择的菜单和对应角色的菜单)',
          successFlag: true,
          invokedConsumeTime: '157ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        }
      ]
    },
    {
      id: '216bb352-9ee5-4085-b93c-e943bad1d5f9',
      apiNo: '3210-1019-01',
      apiDesc: '查询指定医生的通知公告',
      successFlag: true,
      invokedConsumeTime: '40ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: []
    },
    {
      id: 'af4a9d38-1d46-40f3-82e3-543640613526',
      apiNo: '3210-1022-01',
      apiDesc: '查询我的全部日程',
      successFlag: true,
      invokedConsumeTime: '16ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: []
    },
    {
      id: '4f0dc256-71dc-4e16-8fa7-a33404919424',
      apiNo: '3210-1501-08',
      apiDesc: '通过员工id 查询个性化设置',
      successFlag: true,
      invokedConsumeTime: '36ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '1d34a430-db33-4cd0-9379-aaae494bc642',
          apiNo: null,
          apiDesc: '查询偏好设置',
          successFlag: true,
          invokedConsumeTime: '30ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        }
      ]
    },
    {
      id: 'f2be4749-e439-4dfc-8d0f-2c4b27c14ca1',
      apiNo: '3210-1032-01',
      apiDesc: '查询portal图片发布信息',
      successFlag: true,
      invokedConsumeTime: '10ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: []
    },
    {
      id: '74de6a81-e6e8-4d20-8952-be5335117f37',
      apiNo: '3210-1501-02',
      apiDesc: '根据用户标识查询可访问的系统及应用菜单',
      successFlag: true,
      invokedConsumeTime: '232ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: 'aa884b17-a32f-4d06-8623-375343072aec',
          apiNo: '1010-3009-01',
          apiDesc:
            '根据userId查询应用系统,获取用户可以登入的系统(包含用户自身和对应角色的)',
          successFlag: true,
          invokedConsumeTime: '73ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        },
        {
          id: '450dfe4c-9dee-4f44-8120-496e9c2a5a72',
          apiNo: '1010-3033-01',
          apiDesc:
            '根据用户Id（必选），系统id（必选）查询应用菜单(包含用户自身已选择的菜单和对应角色的菜单)',
          successFlag: true,
          invokedConsumeTime: '146ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        }
      ]
    },
    {
      id: '239daec2-7fb3-428f-800d-a62eca8895dc',
      apiNo: '4010-3002-01',
      apiDesc:
        '根据用户id（必填）和系统id（必填）查询菜单（包含用户自身和对应角色的菜单）',
      successFlag: true,
      invokedConsumeTime: '228ms',
      ties: 'MAS',
      domain: null,
      subInvocationList: [
        {
          id: '45d64777-cfbe-403a-89f1-13a9714e4505',
          apiNo: '1010-3006-01',
          apiDesc: '根据系统id（必填）查询该系统的所有菜单api（不支持分页）',
          successFlag: true,
          invokedConsumeTime: '24ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        },
        {
          id: '546865b5-3d15-4efc-929c-47ac3c1d5448',
          apiNo: '1010-3033-01',
          apiDesc:
            '根据用户Id（必选），系统id（必选）查询应用菜单(包含用户自身已选择的菜单和对应角色的菜单)',
          successFlag: true,
          invokedConsumeTime: '182ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        }
      ]
    },
    {
      id: 'e3a451c9-e12e-44fa-8c8f-fde3b4ad6e8e',
      apiNo: '3210-1501-05',
      apiDesc: '获取操作设置项数据集',
      successFlag: true,
      invokedConsumeTime: '40ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '2f471e73-4977-40f1-856b-ee693eb2f0c9',
          apiNo: '1120-0376-01',
          apiDesc: '根据操作设置项标识列表查询操作设置项列表',
          successFlag: true,
          invokedConsumeTime: '6ms',
          ties: 'MDS',
          domain: 'fin',
          subInvocationList: []
        }
      ]
    },
    {
      id: '7b49398f-e8c7-40d1-8109-1a56363830b5',
      apiNo: '1100-12000-01',
      apiDesc: '操作设置项-当前库房,个人库房查询',
      successFlag: true,
      invokedConsumeTime: '26ms',
      ties: 'MDS',
      domain: 'mat',
      subInvocationList: []
    },
    {
      id: '89d0c061-eb2d-4a35-8a11-fb3cd3e47741',
      apiNo: '4010-4043-01',
      apiDesc: '获取业务单元列表界面的树形结构',
      successFlag: true,
      invokedConsumeTime: '184ms',
      ties: 'MAS',
      domain: null,
      subInvocationList: [
        {
          id: 'a6d157a9-dc76-4906-8bc5-88f6969ac06e',
          apiNo: '1010-4008-01',
          apiDesc:
            '根据员工标识、业务单元类型，组织状态，组织名称、拼音码、五笔码（模糊查询）业务单元',
          successFlag: true,
          invokedConsumeTime: '174ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        }
      ]
    },
    {
      id: '446a6b8d-29aa-42f8-a493-fa6684c2eafe',
      apiNo: '4142-5001-01',
      apiDesc: '获取读卡组件配置信息',
      successFlag: true,
      invokedConsumeTime: '33ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '42aa9587-8732-48ed-89f1-41b25fc430db',
          apiNo: '1010-4058-01',
          apiDesc:
            '根据当前传入的医院soid查询其所有上级组织，返回包含自身的接口',
          successFlag: true,
          invokedConsumeTime: '5ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        },
        {
          id: 'c4b806db-6cd9-481c-8849-434a5f4e2f1f',
          apiNo: '1140-71015-01',
          apiDesc: '根据综合检索组件代码查询综合检索组件信息',
          successFlag: true,
          invokedConsumeTime: '18ms',
          ties: 'MDS',
          domain: 'per',
          subInvocationList: []
        }
      ]
    },
    {
      id: '7fcd3ff4-18a4-463d-8d85-dcb7558c2583',
      apiNo: '4160-0008-01',
      apiDesc: '根据概念域术语查询术语信息',
      successFlag: true,
      invokedConsumeTime: '41ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '8734f6a8-87d9-48fa-828e-3f155fa3c8fd',
          apiNo: '1010-5026-01',
          apiDesc:
            '根据概念域ids（必填）和体系状态、值状态查询值、值（值名称、拼音码、五笔码、valueNo）模糊查询值集列表',
          successFlag: true,
          invokedConsumeTime: '36ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        }
      ]
    },
    {
      id: 'c57bdd66-e70d-4a85-8772-211b9fbde9bb',
      apiNo: '4160-1201-01',
      apiDesc: '查询住院药房配置项信息',
      successFlag: true,
      invokedConsumeTime: '18ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '2b3d8cae-669a-449d-8ec8-7ac042a26b7c',
          apiNo: '1100-16001-01',
          apiDesc: '查询住院药房配置项信息',
          successFlag: true,
          invokedConsumeTime: '11ms',
          ties: 'MDS',
          domain: 'mat',
          subInvocationList: []
        }
      ]
    },
    {
      id: '34d15665-b80c-41ac-8dca-9970512ffb83',
      apiNo: '3210-1501-05',
      apiDesc: '获取操作设置项数据集',
      successFlag: true,
      invokedConsumeTime: '21ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: 'db5ee2e9-19e4-4cfc-87f2-658753786c3e',
          apiNo: '1120-0376-01',
          apiDesc: '根据操作设置项标识列表查询操作设置项列表',
          successFlag: true,
          invokedConsumeTime: '3ms',
          ties: 'MDS',
          domain: 'fin',
          subInvocationList: []
        }
      ]
    },
    {
      id: '81995162-f04f-47d3-8973-fb62b512c726',
      apiNo: '1100-12000-01',
      apiDesc: '操作设置项-当前库房,个人库房查询',
      successFlag: true,
      invokedConsumeTime: '9ms',
      ties: 'MDS',
      domain: 'mat',
      subInvocationList: []
    },
    {
      id: 'c69bf154-cc69-4ded-8e82-0ba20a66bdfb',
      apiNo: '4125-0100-01',
      apiDesc: '查询订单审方信息',
      successFlag: true,
      invokedConsumeTime: '110ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: 'c31e431c-adea-41df-9072-f6930cdb4cef',
          apiNo: '3121-0011-01',
          apiDesc: '根据订单标识列表获取可收费订单信息',
          successFlag: true,
          invokedConsumeTime: '105ms',
          ties: 'AMTS',
          domain: 'fin',
          subInvocationList: [
            {
              id: '8add7c8c-290d-4c88-89ff-f9136868aedb',
              apiNo: '2120-0233-01',
              apiDesc: '根据订单标识列表获取订单和订单明细信息',
              successFlag: true,
              invokedConsumeTime: '38ms',
              ties: 'BMTS',
              domain: 'fin',
              subInvocationList: [
                {
                  id: '647a4b1e-029a-4bdf-9605-48031a3b8151',
                  apiNo: '1010-5046-01',
                  apiDesc:
                    '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
                  successFlag: true,
                  invokedConsumeTime: '12ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: 'fae899e4-be62-4099-af60-59a4e494d4d6',
                  apiNo: '1010-5046-01',
                  apiDesc:
                    '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
                  successFlag: true,
                  invokedConsumeTime: '9ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                }
              ]
            },
            {
              id: 'de74ee4a-b251-4518-8a5d-4655c8de4ab2',
              apiNo: '1010-5046-01',
              apiDesc:
                '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
              successFlag: true,
              invokedConsumeTime: '6ms',
              ties: 'MDS',
              domain: 'mdm',
              subInvocationList: []
            },
            {
              id: '5b5571bc-dbb4-45eb-8f35-24b4f5540e84',
              apiNo: '2110-0026-01',
              apiDesc: '处方查询医嘱',
              successFlag: true,
              invokedConsumeTime: '13ms',
              ties: 'BMTS',
              domain: 'cli',
              subInvocationList: []
            },
            {
              id: '84331e30-37e5-42ff-8211-f86f51c162de',
              apiNo: '2180-7031-01',
              apiDesc: '审方结果查询',
              successFlag: true,
              invokedConsumeTime: '18ms',
              ties: 'BMTS',
              domain: 'mat',
              subInvocationList: [
                {
                  id: '695837fd-d708-48c5-8ad0-500b617d3373',
                  apiNo: '1100-6008-01',
                  apiDesc: '根据库房标识获取药房配置',
                  successFlag: true,
                  invokedConsumeTime: '1ms',
                  ties: 'MDS',
                  domain: 'mat',
                  subInvocationList: []
                }
              ]
            },
            {
              id: '71349118-aa5e-43de-9eb6-1758a31c37a9',
              apiNo: '1010-5026-01',
              apiDesc:
                '根据概念域ids（必填）和体系状态、值状态查询值、值（值名称、拼音码、五笔码、valueNo）模糊查询值集列表',
              successFlag: true,
              invokedConsumeTime: '6ms',
              ties: 'MDS',
              domain: 'mdm',
              subInvocationList: []
            }
          ]
        }
      ]
    },
    {
      id: 'a2ba18b3-b775-422d-aded-a52c13c9cd6e',
      apiNo: '4160-4104-01',
      apiDesc: '待配药-多条件查询中草药配药申请单',
      successFlag: true,
      invokedConsumeTime: '19ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '75c36f2d-1e4e-407c-b135-8d0a6d5c413a',
          apiNo: '2160-2101-01',
          apiDesc: '药房发药申请单列表查询',
          successFlag: true,
          invokedConsumeTime: '11ms',
          ties: 'BMTS',
          domain: 'mat',
          subInvocationList: []
        }
      ]
    },
    {
      id: '3845e695-5c80-42c7-bb8a-dec76749a8dd',
      apiNo: '4160-4104-01',
      apiDesc: '待配药-多条件查询中草药配药申请单',
      successFlag: true,
      invokedConsumeTime: '41ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '205a3bfc-9515-42a8-8e71-24f9e9ee3b94',
          apiNo: '2160-2101-01',
          apiDesc: '药房发药申请单列表查询',
          successFlag: true,
          invokedConsumeTime: '35ms',
          ties: 'BMTS',
          domain: 'mat',
          subInvocationList: []
        }
      ]
    },
    {
      id: 'c1bc335c-8bea-4771-9c4c-fb1ce219a7a1',
      apiNo: '4180-6001-01',
      apiDesc: '患者列表信息查询',
      successFlag: true,
      invokedConsumeTime: '162ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '54319182-ee3d-422b-9409-6972cf083075',
          apiNo: '3180-1001-01',
          apiDesc: '查询发药申请单患者信息',
          successFlag: true,
          invokedConsumeTime: '149ms',
          ties: 'AMTS',
          domain: 'mat',
          subInvocationList: [
            {
              id: '10f69ca3-4df5-4745-9725-01c0703f81c3',
              apiNo: '2180-6025-01',
              apiDesc:
                '查询发药申请单患者基本信息（分页）待配药，已配药，待发药，待审核，已审核，审核不通过',
              successFlag: true,
              invokedConsumeTime: '57ms',
              ties: 'BMTS',
              domain: 'mat',
              subInvocationList: []
            },
            {
              id: '5ddeec73-9f3e-44ea-aa29-af2680584e62',
              apiNo: '2150-1005-01',
              apiDesc: '就诊健康概况及扩展查询',
              successFlag: true,
              invokedConsumeTime: '5ms',
              ties: 'BMTS',
              domain: 'enc',
              subInvocationList: []
            },
            {
              id: 'ac60e2d3-619a-4d0a-9e58-27f173b53742',
              apiNo: '2150-1029-01',
              apiDesc: '根据角色标识列表查询门诊就诊记录',
              successFlag: true,
              invokedConsumeTime: '43ms',
              ties: 'BMTS',
              domain: 'enc',
              subInvocationList: []
            },
            {
              id: '2da4dfda-921d-4fed-8fbf-d5b0c4201573',
              apiNo: '2140-71046-01',
              apiDesc: '根据个人身份标识定制化查询患者信息列表',
              successFlag: true,
              invokedConsumeTime: '76ms',
              ties: 'BMTS',
              domain: 'per',
              subInvocationList: [
                {
                  id: '1281b79a-b652-4594-a5a1-7ad805210b96',
                  apiNo: '1010-4058-01',
                  apiDesc:
                    '根据当前传入的医院soid查询其所有上级组织，返回包含自身的接口',
                  successFlag: true,
                  invokedConsumeTime: '10ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: 'da8be873-1b05-41e8-8f7a-484d1549fc8c',
                  apiNo: '1140-1007-01',
                  apiDesc: '据年龄配置方案获取年龄配置信息',
                  successFlag: true,
                  invokedConsumeTime: '5ms',
                  ties: 'MDS',
                  domain: 'per',
                  subInvocationList: []
                }
              ]
            }
          ]
        },
        {
          id: 'f1760740-b956-417a-8022-09e0c01d741c',
          apiNo: '1100-10003-01',
          apiDesc: '查询指定库房窗口',
          successFlag: false,
          invokedConsumeTime: '0ms',
          ties: 'MDS',
          domain: 'mat',
          subInvocationList: []
        }
      ]
    },
    {
      id: '6757d258-af1a-4db8-8792-1399008e4398',
      apiNo: '4180-6002-05',
      apiDesc: '根据就诊标识号获取发药明细信息',
      successFlag: true,
      invokedConsumeTime: '263ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '336b5cf3-1d78-4afc-a066-2d6a7f876185',
          apiNo: '3180-1006-01',
          apiDesc: '根据就诊标识号获取发药明细信息',
          successFlag: true,
          invokedConsumeTime: '245ms',
          ties: 'AMTS',
          domain: 'mat',
          subInvocationList: [
            {
              id: '65035f00-ca8f-433e-828e-b0a40c7e3c6b',
              apiNo: '2180-4017-01',
              apiDesc: '获取发药申请单明细信息',
              successFlag: true,
              invokedConsumeTime: '118ms',
              ties: 'BMTS',
              domain: 'mat',
              subInvocationList: [
                {
                  id: '9c67e6a6-c5f9-4549-91f4-d4feafab149e',
                  apiNo: '1100-6120-01',
                  apiDesc:
                    '多条件（药房组织标识、药品类型、药品剂型、启用标志、药品名称、拼音码、五笔码、助记码 ）分页查询药品商品目录列表  不超过100个',
                  successFlag: true,
                  invokedConsumeTime: '52ms',
                  ties: 'MDS',
                  domain: 'mat',
                  subInvocationList: []
                }
              ]
            },
            {
              id: 'de70d646-f2e4-4638-8fa6-d701c2721377',
              apiNo: '2110-0026-01',
              apiDesc: '处方查询医嘱',
              successFlag: true,
              invokedConsumeTime: '117ms',
              ties: 'BMTS',
              domain: 'cli',
              subInvocationList: []
            }
          ]
        },
        {
          id: 'e07d90a8-48e8-4298-b380-03b034946736',
          apiNo: '1100-7024-01',
          apiDesc:
            '药品商品ES多条件（商品启用标志、药品类型代码、药品分类代码、精毒麻放代码、抗菌药物等级代码、药品剂型、其中关键字包含【商品名称、药品通用名、药品名英文、药品编码、拼音码、五笔码、助记码】）综合分页查询',
          successFlag: true,
          invokedConsumeTime: '4ms',
          ties: 'MDS',
          domain: 'mat',
          subInvocationList: []
        }
      ]
    },
    {
      id: '5d130d99-9de8-4f3e-8c73-aabc195cd72b',
      apiNo: '4160-4101-01',
      apiDesc: '已配药-多条件查询列表',
      successFlag: true,
      invokedConsumeTime: '17ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: 'ad61850e-1bca-444b-8bd8-58d2a552d0a5',
          apiNo: '2160-6101-01',
          apiDesc: '药房配药列表查询',
          successFlag: true,
          invokedConsumeTime: '11ms',
          ties: 'BMTS',
          domain: 'mat',
          subInvocationList: []
        }
      ]
    },
    {
      id: '247093f6-3c55-4184-90b8-6f16fbd84448',
      apiNo: '4160-4104-01',
      apiDesc: '待配药-多条件查询中草药配药申请单',
      successFlag: true,
      invokedConsumeTime: '31ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: 'ab29f2fc-a9f5-4e1b-981a-af4d9502f386',
          apiNo: '2160-2101-01',
          apiDesc: '药房发药申请单列表查询',
          successFlag: true,
          invokedConsumeTime: '25ms',
          ties: 'BMTS',
          domain: 'mat',
          subInvocationList: []
        }
      ]
    },
    {
      id: '01feb50b-303c-4c15-8134-a3aa3d283bca',
      apiNo: '4125-0100-01',
      apiDesc: '查询订单审方信息',
      successFlag: true,
      invokedConsumeTime: '262ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '3907f86e-00b9-440b-857d-3b86911f10fb',
          apiNo: '3121-0011-01',
          apiDesc: '根据订单标识列表获取可收费订单信息',
          successFlag: true,
          invokedConsumeTime: '256ms',
          ties: 'AMTS',
          domain: 'fin',
          subInvocationList: [
            {
              id: '1a64e0b1-6189-44c7-8264-05e264880b9c',
              apiNo: '2120-0233-01',
              apiDesc: '根据订单标识列表获取订单和订单明细信息',
              successFlag: true,
              invokedConsumeTime: '112ms',
              ties: 'BMTS',
              domain: 'fin',
              subInvocationList: [
                {
                  id: '0b5921ff-a467-4e99-b899-ffb55d7bbc6c',
                  apiNo: '1010-5046-01',
                  apiDesc:
                    '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
                  successFlag: true,
                  invokedConsumeTime: '45ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: 'ea643388-8269-4e22-822f-94836dae4e86',
                  apiNo: '1010-5046-01',
                  apiDesc:
                    '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
                  successFlag: true,
                  invokedConsumeTime: '11ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                }
              ]
            },
            {
              id: 'b772218e-c0a5-4d58-87c9-a19fec1de07b',
              apiNo: '1010-5046-01',
              apiDesc:
                '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
              successFlag: true,
              invokedConsumeTime: '28ms',
              ties: 'MDS',
              domain: 'mdm',
              subInvocationList: []
            },
            {
              id: 'ff0af60f-e99b-46e7-a2d3-506529cb50d1',
              apiNo: '2110-0026-01',
              apiDesc: '处方查询医嘱',
              successFlag: true,
              invokedConsumeTime: '40ms',
              ties: 'BMTS',
              domain: 'cli',
              subInvocationList: []
            },
            {
              id: '16810b90-9495-4ecf-821b-81e9bc7ccf59',
              apiNo: '2180-7031-01',
              apiDesc: '审方结果查询',
              successFlag: true,
              invokedConsumeTime: '33ms',
              ties: 'BMTS',
              domain: 'mat',
              subInvocationList: [
                {
                  id: '8d0c2c1d-6563-4aab-b1d1-5d51151c28ea',
                  apiNo: '1100-6008-01',
                  apiDesc: '根据库房标识获取药房配置',
                  successFlag: true,
                  invokedConsumeTime: '4ms',
                  ties: 'MDS',
                  domain: 'mat',
                  subInvocationList: []
                }
              ]
            },
            {
              id: '750421ca-71b5-44f3-a4cb-116ce6644f86',
              apiNo: '1010-5026-01',
              apiDesc:
                '根据概念域ids（必填）和体系状态、值状态查询值、值（值名称、拼音码、五笔码、valueNo）模糊查询值集列表',
              successFlag: true,
              invokedConsumeTime: '20ms',
              ties: 'MDS',
              domain: 'mdm',
              subInvocationList: []
            }
          ]
        }
      ]
    },
    {
      id: '47ba6006-8347-4118-85e7-5c4ec161ab4d',
      apiNo: '4125-0100-01',
      apiDesc: '查询订单审方信息',
      successFlag: true,
      invokedConsumeTime: '104ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '40f26bae-b7bd-43d0-8606-3515442f4f3d',
          apiNo: '3121-0011-01',
          apiDesc: '根据订单标识列表获取可收费订单信息',
          successFlag: true,
          invokedConsumeTime: '100ms',
          ties: 'AMTS',
          domain: 'fin',
          subInvocationList: [
            {
              id: 'eb7d9d7f-d1ec-44d6-814c-e78b7592fdc7',
              apiNo: '2120-0233-01',
              apiDesc: '根据订单标识列表获取订单和订单明细信息',
              successFlag: true,
              invokedConsumeTime: '28ms',
              ties: 'BMTS',
              domain: 'fin',
              subInvocationList: [
                {
                  id: 'b63411d5-207d-4345-8301-0fa1886b396b',
                  apiNo: '1010-5046-01',
                  apiDesc:
                    '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
                  successFlag: true,
                  invokedConsumeTime: '6ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: 'bd309bd2-e697-455b-8c29-c7614506519a',
                  apiNo: '1010-5046-01',
                  apiDesc:
                    '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
                  successFlag: true,
                  invokedConsumeTime: '7ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                }
              ]
            },
            {
              id: '882efb69-7dcb-4971-84b6-241339253562',
              apiNo: '1010-5046-01',
              apiDesc:
                '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
              successFlag: true,
              invokedConsumeTime: '7ms',
              ties: 'MDS',
              domain: 'mdm',
              subInvocationList: []
            },
            {
              id: '0840344b-9dfe-4ddc-a779-23490d7b35f4',
              apiNo: '2110-0026-01',
              apiDesc: '处方查询医嘱',
              successFlag: true,
              invokedConsumeTime: '23ms',
              ties: 'BMTS',
              domain: 'cli',
              subInvocationList: []
            },
            {
              id: '1d42ccc5-8505-4d88-bda8-ebdd3871f60f',
              apiNo: '2180-7031-01',
              apiDesc: '审方结果查询',
              successFlag: true,
              invokedConsumeTime: '13ms',
              ties: 'BMTS',
              domain: 'mat',
              subInvocationList: [
                {
                  id: 'a875532a-980a-469a-8797-f30011cf436e',
                  apiNo: '1100-6008-01',
                  apiDesc: '根据库房标识获取药房配置',
                  successFlag: true,
                  invokedConsumeTime: '1ms',
                  ties: 'MDS',
                  domain: 'mat',
                  subInvocationList: []
                }
              ]
            },
            {
              id: '99b20ce8-f785-4664-a805-e5edcd759fab',
              apiNo: '1010-5026-01',
              apiDesc:
                '根据概念域ids（必填）和体系状态、值状态查询值、值（值名称、拼音码、五笔码、valueNo）模糊查询值集列表',
              successFlag: true,
              invokedConsumeTime: '5ms',
              ties: 'MDS',
              domain: 'mdm',
              subInvocationList: []
            }
          ]
        }
      ]
    },
    {
      id: 'b1989ced-9984-4110-8d30-2fca1c7f48c3',
      apiNo: '4160-4104-01',
      apiDesc: '待配药-多条件查询中草药配药申请单',
      successFlag: true,
      invokedConsumeTime: '15ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '1d87119a-9c1c-48f6-8d08-9fb4cbfb8f46',
          apiNo: '2160-2101-01',
          apiDesc: '药房发药申请单列表查询',
          successFlag: true,
          invokedConsumeTime: '8ms',
          ties: 'BMTS',
          domain: 'mat',
          subInvocationList: []
        }
      ]
    },
    {
      id: 'fedbd9ec-3070-4f1e-819b-a6236b6bf7fc',
      apiNo: '4160-4101-01',
      apiDesc: '已配药-多条件查询列表',
      successFlag: true,
      invokedConsumeTime: '7ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '8c778430-eb67-48a0-8fd8-e5e485a91bf6',
          apiNo: '2160-6101-01',
          apiDesc: '药房配药列表查询',
          successFlag: true,
          invokedConsumeTime: '1ms',
          ties: 'BMTS',
          domain: 'mat',
          subInvocationList: []
        }
      ]
    },
    {
      id: 'c3150d0e-066c-4eb9-8321-53bb26e2023e',
      apiNo: '4160-4104-01',
      apiDesc: '待配药-多条件查询中草药配药申请单',
      successFlag: true,
      invokedConsumeTime: '15ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '66984f45-916d-4cca-ad16-78cac73fb158',
          apiNo: '2160-2101-01',
          apiDesc: '药房发药申请单列表查询',
          successFlag: true,
          invokedConsumeTime: '8ms',
          ties: 'BMTS',
          domain: 'mat',
          subInvocationList: []
        }
      ]
    },
    {
      id: '5c52ad33-cade-42b3-8c66-446210686685',
      apiNo: '4180-6001-01',
      apiDesc: '患者列表信息查询',
      successFlag: true,
      invokedConsumeTime: '38ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '18e184bc-3b6c-45ad-91cf-93dea087cfcd',
          apiNo: '3180-1001-01',
          apiDesc: '查询发药申请单患者信息',
          successFlag: true,
          invokedConsumeTime: '30ms',
          ties: 'AMTS',
          domain: 'mat',
          subInvocationList: [
            {
              id: '676d61f0-883d-4123-8927-3145003825df',
              apiNo: '2180-6025-01',
              apiDesc:
                '查询发药申请单患者基本信息（分页）待配药，已配药，待发药，待审核，已审核，审核不通过',
              successFlag: true,
              invokedConsumeTime: '25ms',
              ties: 'BMTS',
              domain: 'mat',
              subInvocationList: []
            }
          ]
        }
      ]
    },
    {
      id: '74065ff2-8e5f-40bb-9603-85fa3fc85ff3',
      apiNo: '4160-4104-01',
      apiDesc: '待配药-多条件查询中草药配药申请单',
      successFlag: true,
      invokedConsumeTime: '14ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '0fa31d45-0aa1-46eb-85e6-de6a5a2cc5b0',
          apiNo: '2160-2101-01',
          apiDesc: '药房发药申请单列表查询',
          successFlag: true,
          invokedConsumeTime: '7ms',
          ties: 'BMTS',
          domain: 'mat',
          subInvocationList: []
        }
      ]
    },
    {
      id: '286bffaa-d930-463d-a01e-d299b9d8b578',
      apiNo: '4160-4101-01',
      apiDesc: '已配药-多条件查询列表',
      successFlag: true,
      invokedConsumeTime: '7ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '5c46a870-ce5d-4559-ac83-643f6527bf5c',
          apiNo: '2160-6101-01',
          apiDesc: '药房配药列表查询',
          successFlag: true,
          invokedConsumeTime: '1ms',
          ties: 'BMTS',
          domain: 'mat',
          subInvocationList: []
        }
      ]
    },
    {
      id: '985022d0-eef4-4769-adea-593ee1f0aa52',
      apiNo: '4160-4104-01',
      apiDesc: '待配药-多条件查询中草药配药申请单',
      successFlag: true,
      invokedConsumeTime: '12ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: 'e9b47285-0359-44ba-9121-3807633a03ba',
          apiNo: '2160-2101-01',
          apiDesc: '药房发药申请单列表查询',
          successFlag: true,
          invokedConsumeTime: '7ms',
          ties: 'BMTS',
          domain: 'mat',
          subInvocationList: []
        }
      ]
    },
    {
      id: '81aa5732-8b57-4a43-9eef-3734b8377ec6',
      apiNo: '4125-0100-01',
      apiDesc: '查询订单审方信息',
      successFlag: true,
      invokedConsumeTime: '100ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '176d3b40-93f9-47e1-a483-d04a1cc66d37',
          apiNo: '3121-0011-01',
          apiDesc: '根据订单标识列表获取可收费订单信息',
          successFlag: true,
          invokedConsumeTime: '95ms',
          ties: 'AMTS',
          domain: 'fin',
          subInvocationList: [
            {
              id: 'b6013771-0f07-42ca-8c4e-2492336c9aaf',
              apiNo: '2120-0233-01',
              apiDesc: '根据订单标识列表获取订单和订单明细信息',
              successFlag: true,
              invokedConsumeTime: '31ms',
              ties: 'BMTS',
              domain: 'fin',
              subInvocationList: [
                {
                  id: 'c4819bcb-c3d4-4808-8bc0-8c355ed6ec52',
                  apiNo: '1010-5046-01',
                  apiDesc:
                    '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
                  successFlag: true,
                  invokedConsumeTime: '9ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: '0cc4e93b-aa78-4667-8440-3c78a1116b96',
                  apiNo: '1010-5046-01',
                  apiDesc:
                    '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
                  successFlag: true,
                  invokedConsumeTime: '6ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                }
              ]
            },
            {
              id: '2b8d4305-b48b-4606-ac7b-ee6b27d3af1b',
              apiNo: '1010-5046-01',
              apiDesc:
                '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
              successFlag: true,
              invokedConsumeTime: '5ms',
              ties: 'MDS',
              domain: 'mdm',
              subInvocationList: []
            },
            {
              id: '83dabc75-a619-47f3-a9db-03f211f42811',
              apiNo: '2110-0026-01',
              apiDesc: '处方查询医嘱',
              successFlag: true,
              invokedConsumeTime: '17ms',
              ties: 'BMTS',
              domain: 'cli',
              subInvocationList: []
            },
            {
              id: '7216bdea-cf65-4374-a3cc-e612b8256655',
              apiNo: '2180-7031-01',
              apiDesc: '审方结果查询',
              successFlag: true,
              invokedConsumeTime: '13ms',
              ties: 'BMTS',
              domain: 'mat',
              subInvocationList: [
                {
                  id: '09ec3734-6a74-48d8-8e3a-42a01232ccdb',
                  apiNo: '1100-6008-01',
                  apiDesc: '根据库房标识获取药房配置',
                  successFlag: true,
                  invokedConsumeTime: '2ms',
                  ties: 'MDS',
                  domain: 'mat',
                  subInvocationList: []
                }
              ]
            },
            {
              id: 'd4b1159d-dbb3-48c3-83ae-062eb5bbdac6',
              apiNo: '1010-5026-01',
              apiDesc:
                '根据概念域ids（必填）和体系状态、值状态查询值、值（值名称、拼音码、五笔码、valueNo）模糊查询值集列表',
              successFlag: true,
              invokedConsumeTime: '6ms',
              ties: 'MDS',
              domain: 'mdm',
              subInvocationList: []
            }
          ]
        }
      ]
    },
    {
      id: 'cef5b01f-1c7d-4a68-b484-8d4db7d2a67c',
      apiNo: '4160-4101-01',
      apiDesc: '已配药-多条件查询列表',
      successFlag: true,
      invokedConsumeTime: '8ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '24337048-3020-4b2f-8a36-f1a86c04f7b6',
          apiNo: '2160-6101-01',
          apiDesc: '药房配药列表查询',
          successFlag: true,
          invokedConsumeTime: '1ms',
          ties: 'BMTS',
          domain: 'mat',
          subInvocationList: []
        }
      ]
    },
    {
      id: '937047e5-2b2d-405c-8aae-a9293d796a7e',
      apiNo: '4160-4104-01',
      apiDesc: '待配药-多条件查询中草药配药申请单',
      successFlag: true,
      invokedConsumeTime: '13ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '65907815-eb1f-43cd-b131-e6df3b311ac2',
          apiNo: '2160-2101-01',
          apiDesc: '药房发药申请单列表查询',
          successFlag: true,
          invokedConsumeTime: '8ms',
          ties: 'BMTS',
          domain: 'mat',
          subInvocationList: []
        }
      ]
    },
    {
      id: '3c4097d3-712b-4cd7-ae42-9e63ce84d0ab',
      apiNo: '4160-4101-01',
      apiDesc: '已配药-多条件查询列表',
      successFlag: true,
      invokedConsumeTime: '7ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '9d6239be-533f-4eec-8c10-16bb27797e46',
          apiNo: '2160-6101-01',
          apiDesc: '药房配药列表查询',
          successFlag: true,
          invokedConsumeTime: '1ms',
          ties: 'BMTS',
          domain: 'mat',
          subInvocationList: []
        }
      ]
    },
    {
      id: '6017f193-0292-482c-9f62-18b62c192377',
      apiNo: '4160-4104-01',
      apiDesc: '待配药-多条件查询中草药配药申请单',
      successFlag: true,
      invokedConsumeTime: '12ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '6b80f915-7921-45af-80e0-c3708538fb58',
          apiNo: '2160-2101-01',
          apiDesc: '药房发药申请单列表查询',
          successFlag: true,
          invokedConsumeTime: '5ms',
          ties: 'BMTS',
          domain: 'mat',
          subInvocationList: []
        }
      ]
    },
    {
      id: '86e4643e-c80d-4c95-b925-4f7dc09766c8',
      apiNo: '4101-0019-01',
      apiDesc: '根据业务单元Id查询业务单元信息',
      successFlag: true,
      invokedConsumeTime: '88ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '9b07d703-3f26-4c2c-b3f8-e4d050c412f4',
          apiNo: '1010-4033-01',
          apiDesc: '根据业务单元Id查询业务单元信息',
          successFlag: true,
          invokedConsumeTime: '80ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        }
      ]
    },
    {
      id: 'e4427928-4f18-4c4f-8028-b0b346f69aa4',
      apiNo: '4101-0009-01',
      apiDesc:
        '根据业务单元类型，组织状态，组织名称、拼音码、五笔码（模糊查询）业务单元',
      successFlag: true,
      invokedConsumeTime: '95ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '6c50106f-a3ee-4918-a7f5-5d80f2b0b8f7',
          apiNo: '1010-4008-01',
          apiDesc:
            '根据员工标识、业务单元类型，组织状态，组织名称、拼音码、五笔码（模糊查询）业务单元',
          successFlag: true,
          invokedConsumeTime: '87ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        }
      ]
    },
    {
      id: '33c6fd33-04fc-4ccf-9d2a-83a47d6fd5b3',
      apiNo: '4101-0008-01',
      apiDesc: '根据员工姓名、拼音码、五笔码、助记码等查询用户',
      successFlag: true,
      invokedConsumeTime: '57ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: 'da6c1049-e6a6-4005-a9cd-6f680077bd3c',
          apiNo: '1010-2000-01',
          apiDesc:
            '主数据-员工信息-用户信息-登录方式，根据员工姓名、拼音码、五笔码、助记码等（可选、支持模糊擦查询）、在职类型（可选，多选）、在职状态（可选、单选）、专业技术职务类别代码（可选、单选）查询用户（聚合概用户信息、员工信息，登录方式）（支持分页）',
          successFlag: true,
          invokedConsumeTime: '50ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        }
      ]
    },
    {
      id: 'f5821ec4-107c-4072-aac4-aae51330de8a',
      apiNo: '4101-8005-01',
      apiDesc: '采购申请单多条件查询',
      successFlag: true,
      invokedConsumeTime: '78ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '98a441f2-548c-4e7b-90a4-c1c731e433c9',
          apiNo: '2101-8005-01',
          apiDesc: '采购申请单多条件查询',
          successFlag: true,
          invokedConsumeTime: '59ms',
          ties: 'BMTS',
          domain: 'mat',
          subInvocationList: []
        },
        {
          id: '55ef60aa-e8b6-4ddc-8647-eca303c0dde7',
          apiNo: '1010-5030-01',
          apiDesc: '根据值集Ids查询值集列表',
          successFlag: true,
          invokedConsumeTime: '5ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        }
      ]
    },
    {
      id: '590967ad-091e-426d-bd37-c95e9f373a9b',
      apiNo: '4101-8005-01',
      apiDesc: '采购申请单多条件查询',
      successFlag: true,
      invokedConsumeTime: '45ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '04e0e2e1-7b6c-4695-82c8-432dd9d5cc59',
          apiNo: '2101-8005-01',
          apiDesc: '采购申请单多条件查询',
          successFlag: true,
          invokedConsumeTime: '38ms',
          ties: 'BMTS',
          domain: 'mat',
          subInvocationList: []
        }
      ]
    },
    {
      id: '4c584981-09c6-4840-a9f6-b9c781127266',
      apiNo: '4101-8005-01',
      apiDesc: '采购申请单多条件查询',
      successFlag: true,
      invokedConsumeTime: '22ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '6dc3c6ba-faa0-4f60-a5ca-6982167a6431',
          apiNo: '2101-8005-01',
          apiDesc: '采购申请单多条件查询',
          successFlag: true,
          invokedConsumeTime: '6ms',
          ties: 'BMTS',
          domain: 'mat',
          subInvocationList: []
        },
        {
          id: '457011f7-03dc-475e-8f05-e12fcd11a05f',
          apiNo: '1010-5030-01',
          apiDesc: '根据值集Ids查询值集列表',
          successFlag: true,
          invokedConsumeTime: '1ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        }
      ]
    },
    {
      id: 'a9991ba7-96d3-4d04-8200-45f7713b2078',
      apiNo: '4101-8005-01',
      apiDesc: '采购申请单多条件查询',
      successFlag: true,
      invokedConsumeTime: '9ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '388118d6-a843-4afc-b321-273e49a2647a',
          apiNo: '2101-8005-01',
          apiDesc: '采购申请单多条件查询',
          successFlag: true,
          invokedConsumeTime: '4ms',
          ties: 'BMTS',
          domain: 'mat',
          subInvocationList: []
        }
      ]
    },
    {
      id: 'd9a7bc7f-90e1-4590-91e4-1ffb7c22d672',
      apiNo: '4101-8005-01',
      apiDesc: '采购申请单多条件查询',
      successFlag: true,
      invokedConsumeTime: '10ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: 'a3636995-83c3-438a-80d5-94ba07183cd5',
          apiNo: '2101-8005-01',
          apiDesc: '采购申请单多条件查询',
          successFlag: true,
          invokedConsumeTime: '3ms',
          ties: 'BMTS',
          domain: 'mat',
          subInvocationList: []
        }
      ]
    },
    {
      id: 'c1121c63-8eee-4ddb-a4ee-0618b2965955',
      apiNo: '4101-8005-01',
      apiDesc: '采购申请单多条件查询',
      successFlag: true,
      invokedConsumeTime: '18ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: 'd5b3efa7-18f4-41a7-94d8-9a06bcb0e95c',
          apiNo: '2101-8005-01',
          apiDesc: '采购申请单多条件查询',
          successFlag: true,
          invokedConsumeTime: '6ms',
          ties: 'BMTS',
          domain: 'mat',
          subInvocationList: []
        },
        {
          id: '32d6b31d-86cb-4cc9-8bb6-993baa69ecf9',
          apiNo: '1010-5030-01',
          apiDesc: '根据值集Ids查询值集列表',
          successFlag: true,
          invokedConsumeTime: '1ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        }
      ]
    },
    {
      id: '18beceda-4cdd-47bd-99d4-27b6c1c5f898',
      apiNo: '4125-0100-01',
      apiDesc: '查询订单审方信息',
      successFlag: true,
      invokedConsumeTime: '108ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '5111fb9f-c205-47e6-807c-36c23add4b82',
          apiNo: '3121-0011-01',
          apiDesc: '根据订单标识列表获取可收费订单信息',
          successFlag: true,
          invokedConsumeTime: '103ms',
          ties: 'AMTS',
          domain: 'fin',
          subInvocationList: [
            {
              id: '7e0e9ce8-97f7-44f1-8444-a82e38c4347d',
              apiNo: '2120-0233-01',
              apiDesc: '根据订单标识列表获取订单和订单明细信息',
              successFlag: true,
              invokedConsumeTime: '32ms',
              ties: 'BMTS',
              domain: 'fin',
              subInvocationList: [
                {
                  id: 'ff081ca5-3b7c-4d1e-b3b3-be2b3c8439fd',
                  apiNo: '1010-5046-01',
                  apiDesc:
                    '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
                  successFlag: true,
                  invokedConsumeTime: '7ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: 'ce01c221-bea1-42b3-917a-a73af416d8bc',
                  apiNo: '1010-5046-01',
                  apiDesc:
                    '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
                  successFlag: true,
                  invokedConsumeTime: '9ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                }
              ]
            },
            {
              id: '7bf54b8e-dc42-4f74-b585-bc7ea33c4536',
              apiNo: '1010-5046-01',
              apiDesc:
                '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
              successFlag: true,
              invokedConsumeTime: '7ms',
              ties: 'MDS',
              domain: 'mdm',
              subInvocationList: []
            },
            {
              id: 'db45b6cd-e4fc-4d98-9d8d-721a64295845',
              apiNo: '2110-0026-01',
              apiDesc: '处方查询医嘱',
              successFlag: true,
              invokedConsumeTime: '17ms',
              ties: 'BMTS',
              domain: 'cli',
              subInvocationList: []
            },
            {
              id: '0f27e216-126b-4592-8940-1b5eede71956',
              apiNo: '2180-7031-01',
              apiDesc: '审方结果查询',
              successFlag: true,
              invokedConsumeTime: '18ms',
              ties: 'BMTS',
              domain: 'mat',
              subInvocationList: [
                {
                  id: 'e42cb864-e033-4135-84aa-0964ce6368c0',
                  apiNo: '1100-6008-01',
                  apiDesc: '根据库房标识获取药房配置',
                  successFlag: true,
                  invokedConsumeTime: '1ms',
                  ties: 'MDS',
                  domain: 'mat',
                  subInvocationList: []
                }
              ]
            },
            {
              id: '5ee34de8-ee57-47d1-894a-7a2bd5d3b0d5',
              apiNo: '1010-5026-01',
              apiDesc:
                '根据概念域ids（必填）和体系状态、值状态查询值、值（值名称、拼音码、五笔码、valueNo）模糊查询值集列表',
              successFlag: true,
              invokedConsumeTime: '5ms',
              ties: 'MDS',
              domain: 'mdm',
              subInvocationList: []
            }
          ]
        }
      ]
    },
    {
      id: 'c9b7ab03-2d5b-4503-8b3b-f021475619a8',
      apiNo: '3210-1501-05',
      apiDesc: '获取操作设置项数据集',
      successFlag: true,
      invokedConsumeTime: '39ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '846257b6-c302-4681-9be8-235cbea22810',
          apiNo: '1120-0376-01',
          apiDesc: '根据操作设置项标识列表查询操作设置项列表',
          successFlag: true,
          invokedConsumeTime: '7ms',
          ties: 'MDS',
          domain: 'fin',
          subInvocationList: []
        }
      ]
    },
    {
      id: '03f88f65-2805-460e-8607-b3e1565f084d',
      apiNo: '1100-12000-01',
      apiDesc: '操作设置项-当前库房,个人库房查询',
      successFlag: true,
      invokedConsumeTime: '23ms',
      ties: 'MDS',
      domain: 'mat',
      subInvocationList: []
    },
    {
      id: '7c0c4fda-3512-4040-bfc7-a72e547c69f2',
      apiNo: '3210-1501-05',
      apiDesc: '获取操作设置项数据集',
      successFlag: true,
      invokedConsumeTime: '78ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '43d10c27-d86b-4155-8e3c-eec6d86d0b32',
          apiNo: '1120-0376-01',
          apiDesc: '根据操作设置项标识列表查询操作设置项列表',
          successFlag: true,
          invokedConsumeTime: '2ms',
          ties: 'MDS',
          domain: 'fin',
          subInvocationList: []
        }
      ]
    },
    {
      id: '6907c557-cf00-4e30-9e6b-b976f67e2548',
      apiNo: '1100-12000-01',
      apiDesc: '操作设置项-当前库房,个人库房查询',
      successFlag: true,
      invokedConsumeTime: '7ms',
      ties: 'MDS',
      domain: 'mat',
      subInvocationList: []
    },
    {
      id: '94236b2d-4a8c-429a-849f-888a21ef00b0',
      apiNo: '4160-4104-01',
      apiDesc: '待配药-多条件查询中草药配药申请单',
      successFlag: true,
      invokedConsumeTime: '83ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '44d4e4ff-ee97-41ec-bccc-c9c8e45b7c29',
          apiNo: '2160-2101-01',
          apiDesc: '药房发药申请单列表查询',
          successFlag: true,
          invokedConsumeTime: '73ms',
          ties: 'BMTS',
          domain: 'mat',
          subInvocationList: []
        }
      ]
    },
    {
      id: '89223606-5871-4955-874a-16b0d3b06661',
      apiNo: '4101-0009-01',
      apiDesc:
        '根据业务单元类型，组织状态，组织名称、拼音码、五笔码（模糊查询）业务单元',
      successFlag: true,
      invokedConsumeTime: '26ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '965b43e7-d326-45e4-86fc-6f54bfc6f824',
          apiNo: '1010-4008-01',
          apiDesc:
            '根据员工标识、业务单元类型，组织状态，组织名称、拼音码、五笔码（模糊查询）业务单元',
          successFlag: true,
          invokedConsumeTime: '20ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        }
      ]
    },
    {
      id: 'fc861542-fb5e-4c9e-975b-cc89d69a5c97',
      apiNo: '4101-0001-01',
      apiDesc: '获取术语信息',
      successFlag: true,
      invokedConsumeTime: '54ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: 'f7957f9e-fa5e-4457-9038-9321e67bed29',
          apiNo: '1010-5057-01',
          apiDesc: '根据值集Ids查询值集列表',
          successFlag: true,
          invokedConsumeTime: '48ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        }
      ]
    },
    {
      id: 'a176b34d-1a29-4e2b-819a-438f9ec3f137',
      apiNo: '4101-9004-01',
      apiDesc: '多条件查询模板',
      successFlag: true,
      invokedConsumeTime: '52ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '28b97381-96ef-481f-a2c7-509b1ae0d4ce',
          apiNo: '2101-9004-01',
          apiDesc: '多条件查询模板',
          successFlag: true,
          invokedConsumeTime: '24ms',
          ties: 'BMTS',
          domain: 'mat',
          subInvocationList: []
        },
        {
          id: '4b67a13d-e054-4e02-912d-db575f7074e5',
          apiNo: '1010-2048-01',
          apiDesc: '根据员工ids查询员工单表',
          successFlag: true,
          invokedConsumeTime: '6ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        },
        {
          id: 'fa8dacd8-c816-4c0f-8cdb-6819c85623dc',
          apiNo: '1010-4025-01',
          apiDesc: '根据ids查询组织主表的集合，(不支持分页id限制100个)',
          successFlag: true,
          invokedConsumeTime: '5ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        }
      ]
    },
    {
      id: '0bd51336-30e7-4659-a403-c363e045135f',
      apiNo: '4180-6001-01',
      apiDesc: '患者列表信息查询',
      successFlag: true,
      invokedConsumeTime: '188ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '8284de93-3527-4115-86e0-95a06f62eecb',
          apiNo: '3180-1001-01',
          apiDesc: '查询发药申请单患者信息',
          successFlag: true,
          invokedConsumeTime: '173ms',
          ties: 'AMTS',
          domain: 'mat',
          subInvocationList: [
            {
              id: '25a685f2-f690-48ee-af87-b2a6a9abcf38',
              apiNo: '2180-6025-01',
              apiDesc:
                '查询发药申请单患者基本信息（分页）待配药，已配药，待发药，待审核，已审核，审核不通过',
              successFlag: true,
              invokedConsumeTime: '71ms',
              ties: 'BMTS',
              domain: 'mat',
              subInvocationList: []
            },
            {
              id: 'f4cd9916-1c8f-44b9-84c3-f0cb749b54e3',
              apiNo: '2150-1029-01',
              apiDesc: '根据角色标识列表查询门诊就诊记录',
              successFlag: true,
              invokedConsumeTime: '51ms',
              ties: 'BMTS',
              domain: 'enc',
              subInvocationList: []
            },
            {
              id: '740f0337-c95a-42de-8488-9ee376cb6817',
              apiNo: '2140-71046-01',
              apiDesc: '根据个人身份标识定制化查询患者信息列表',
              successFlag: true,
              invokedConsumeTime: '87ms',
              ties: 'BMTS',
              domain: 'per',
              subInvocationList: [
                {
                  id: '1d7e8718-44d6-4b68-8cd8-1f2084adce79',
                  apiNo: '1010-4058-01',
                  apiDesc:
                    '根据当前传入的医院soid查询其所有上级组织，返回包含自身的接口',
                  successFlag: true,
                  invokedConsumeTime: '3ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: '2f427fab-59dc-447b-803f-d32d8f51500f',
                  apiNo: '1140-1007-01',
                  apiDesc: '据年龄配置方案获取年龄配置信息',
                  successFlag: true,
                  invokedConsumeTime: '5ms',
                  ties: 'MDS',
                  domain: 'per',
                  subInvocationList: []
                }
              ]
            },
            {
              id: '783fdbf2-5b36-41ac-9c55-88f9c7889d2b',
              apiNo: '2150-1005-01',
              apiDesc: '就诊健康概况及扩展查询',
              successFlag: true,
              invokedConsumeTime: '17ms',
              ties: 'BMTS',
              domain: 'enc',
              subInvocationList: []
            }
          ]
        },
        {
          id: 'bae80e3a-f015-4862-bdc2-ddb25be61ffc',
          apiNo: '1100-10003-01',
          apiDesc: '查询指定库房窗口',
          successFlag: false,
          invokedConsumeTime: '1ms',
          ties: 'MDS',
          domain: 'mat',
          subInvocationList: []
        }
      ]
    },
    {
      id: '77095bab-4d9a-4dde-84a8-02d73f209ba7',
      apiNo: '4180-6002-05',
      apiDesc: '根据就诊标识号获取发药明细信息',
      successFlag: true,
      invokedConsumeTime: '79ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '3167bee0-03ee-461c-bb73-27097b8b356a',
          apiNo: '3180-1006-01',
          apiDesc: '根据就诊标识号获取发药明细信息',
          successFlag: true,
          invokedConsumeTime: '59ms',
          ties: 'AMTS',
          domain: 'mat',
          subInvocationList: [
            {
              id: '6ef373f2-bfd1-4e39-86bd-80fe19d53b89',
              apiNo: '2180-4017-01',
              apiDesc: '获取发药申请单明细信息',
              successFlag: true,
              invokedConsumeTime: '36ms',
              ties: 'BMTS',
              domain: 'mat',
              subInvocationList: [
                {
                  id: '76533def-152e-4f3a-8efe-b873aa676560',
                  apiNo: '1100-6120-01',
                  apiDesc:
                    '多条件（药房组织标识、药品类型、药品剂型、启用标志、药品名称、拼音码、五笔码、助记码 ）分页查询药品商品目录列表  不超过100个',
                  successFlag: true,
                  invokedConsumeTime: '8ms',
                  ties: 'MDS',
                  domain: 'mat',
                  subInvocationList: []
                }
              ]
            },
            {
              id: 'd21a6b30-40d0-4fb6-9501-5fd1369260ba',
              apiNo: '2110-0026-01',
              apiDesc: '处方查询医嘱',
              successFlag: true,
              invokedConsumeTime: '13ms',
              ties: 'BMTS',
              domain: 'cli',
              subInvocationList: []
            }
          ]
        },
        {
          id: 'c14e4909-cc1b-447a-96cd-7bbdcb6cc4c8',
          apiNo: '1100-7024-01',
          apiDesc:
            '药品商品ES多条件（商品启用标志、药品类型代码、药品分类代码、精毒麻放代码、抗菌药物等级代码、药品剂型、其中关键字包含【商品名称、药品通用名、药品名英文、药品编码、拼音码、五笔码、助记码】）综合分页查询',
          successFlag: true,
          invokedConsumeTime: '5ms',
          ties: 'MDS',
          domain: 'mat',
          subInvocationList: []
        }
      ]
    },
    {
      id: 'a10a6438-aab0-4e16-9913-0188ac24e49d',
      apiNo: '4160-4105-01',
      apiDesc: '待配药-多条件查询中草药配药申请明细列表',
      successFlag: true,
      invokedConsumeTime: '347ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '2dec6ffd-26a4-499e-ba20-ef127f1e2fb0',
          apiNo: '3160-2101-01',
          apiDesc: '住院药房发药查询发药申请按医嘱明细',
          successFlag: true,
          invokedConsumeTime: '317ms',
          ties: 'AMTS',
          domain: 'mat',
          subInvocationList: [
            {
              id: 'e8e29ef9-0e9c-43ce-83d4-5974fb26546f',
              apiNo: '2160-2102-01',
              apiDesc: '药房发药申请明细列表查询',
              successFlag: true,
              invokedConsumeTime: '59ms',
              ties: 'BMTS',
              domain: 'mat',
              subInvocationList: []
            },
            {
              id: '3872b25c-f9b3-4ec5-b166-24e3f7db15e1',
              apiNo: '1100-2001-01',
              apiDesc:
                '批量查询(根据medicineIds)药品商品、药品服务相关所有聚合信息(不支持分页,限制ids 500个)',
              successFlag: true,
              invokedConsumeTime: '2ms',
              ties: 'MDS',
              domain: 'mat',
              subInvocationList: []
            },
            {
              id: '6208c93f-d97f-446d-897c-2c9c14539975',
              apiNo: '2100-9006-01',
              apiDesc: '根据开立单位查询药品库存信息(最大500条药品)',
              successFlag: true,
              invokedConsumeTime: '7ms',
              ties: 'BMTS',
              domain: 'mat',
              subInvocationList: [
                {
                  id: '27cd3af5-d9c8-4478-8cce-ababb818c61c',
                  apiNo: '1100-2004-01',
                  apiDesc:
                    '批量查询(根据medicineIds)药品商品单位换算相关聚合信息(不支持分页,限制ids 500个)',
                  successFlag: true,
                  invokedConsumeTime: '1ms',
                  ties: 'MDS',
                  domain: 'mat',
                  subInvocationList: []
                }
              ]
            },
            {
              id: 'cac3d7a0-ad77-492d-8279-d041d0c11aa8',
              apiNo: '2112-2028-01',
              apiDesc: '根据标识查询所有医嘱信息',
              successFlag: true,
              invokedConsumeTime: '26ms',
              ties: 'BMTS',
              domain: 'cli',
              subInvocationList: []
            },
            {
              id: 'f87cd256-563c-49a2-8732-b83b0112a7a7',
              apiNo: '2160-2116-01',
              apiDesc: '库房药品入库批次查询-根据药品标识列表',
              successFlag: true,
              invokedConsumeTime: '22ms',
              ties: 'BMTS',
              domain: 'mat',
              subInvocationList: []
            },
            {
              id: '65542196-5339-48ca-8d1b-c121d6097951',
              apiNo: '1100-6120-01',
              apiDesc:
                '多条件（药房组织标识、药品类型、药品剂型、启用标志、药品名称、拼音码、五笔码、助记码 ）分页查询药品商品目录列表  不超过100个',
              successFlag: true,
              invokedConsumeTime: '8ms',
              ties: 'MDS',
              domain: 'mat',
              subInvocationList: []
            },
            {
              id: 'de2f2dec-9831-4f94-b51d-1be27b1e185b',
              apiNo: '2153-1001-01',
              apiDesc: '查询banner图基本信息',
              successFlag: true,
              invokedConsumeTime: '28ms',
              ties: 'BMTS',
              domain: 'enc',
              subInvocationList: [
                {
                  id: '805494a0-d043-4ec1-8127-32dc63b7985b',
                  apiNo: '1010-4000-01',
                  apiDesc: '跟据临床业务单元id获取临床业务单元信息',
                  successFlag: true,
                  invokedConsumeTime: '4ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                }
              ]
            },
            {
              id: '276d3a0a-134a-4ad4-9397-b7031b685d76',
              apiNo: '2140-1002-01',
              apiDesc: '多个患者信息查询',
              successFlag: true,
              invokedConsumeTime: '201ms',
              ties: 'BMTS',
              domain: 'per',
              subInvocationList: [
                {
                  id: '69c56fcc-4301-4c22-a084-7b3c1b3120fa',
                  apiNo: '1010-4058-01',
                  apiDesc:
                    '根据当前传入的医院soid查询其所有上级组织，返回包含自身的接口',
                  successFlag: true,
                  invokedConsumeTime: '10ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: '6e82be57-079d-4fa9-87c2-a5aacd242456',
                  apiNo: '1140-1007-01',
                  apiDesc: '据年龄配置方案获取年龄配置信息',
                  successFlag: true,
                  invokedConsumeTime: '3ms',
                  ties: 'MDS',
                  domain: 'per',
                  subInvocationList: []
                },
                {
                  id: '8896e3f1-1256-4cd1-bec0-d95af94431f7',
                  apiNo: '1120-0222-01',
                  apiDesc:
                    '医疗保险-根据医疗机构的医疗保险标识列表查询医院医疗保险',
                  successFlag: true,
                  invokedConsumeTime: '109ms',
                  ties: 'MDS',
                  domain: 'fin',
                  subInvocationList: []
                }
              ]
            },
            {
              id: '29568c3c-da8f-466f-86c7-855b2edc6506',
              apiNo: '2163-4000-02',
              apiDesc: '查询多个患者的就诊诊断',
              successFlag: true,
              invokedConsumeTime: '7ms',
              ties: 'BMTS',
              domain: 'cli',
              subInvocationList: []
            }
          ]
        },
        {
          id: '15253027-6636-477d-8987-64e7c4929169',
          apiNo: '1010-5030-01',
          apiDesc: '根据值集Ids查询值集列表',
          successFlag: true,
          invokedConsumeTime: '2ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        }
      ]
    },
    {
      id: 'c0f123f2-d272-49e1-9271-97365ec2134c',
      apiNo: '4160-4105-01',
      apiDesc: '待配药-多条件查询中草药配药申请明细列表',
      successFlag: true,
      invokedConsumeTime: '623ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '773fdc85-7038-4213-8426-a56475107f00',
          apiNo: '3160-2101-01',
          apiDesc: '住院药房发药查询发药申请按医嘱明细',
          successFlag: true,
          invokedConsumeTime: '593ms',
          ties: 'AMTS',
          domain: 'mat',
          subInvocationList: [
            {
              id: 'e1161132-b22a-4347-816f-5d53c530f6e9',
              apiNo: '2160-2102-01',
              apiDesc: '药房发药申请明细列表查询',
              successFlag: true,
              invokedConsumeTime: '198ms',
              ties: 'BMTS',
              domain: 'mat',
              subInvocationList: []
            },
            {
              id: '7b604d0f-f2b6-47a3-8766-02f0844d373f',
              apiNo: '2112-2028-01',
              apiDesc: '根据标识查询所有医嘱信息',
              successFlag: true,
              invokedConsumeTime: '34ms',
              ties: 'BMTS',
              domain: 'cli',
              subInvocationList: []
            },
            {
              id: '442f0447-3dec-4d29-85d9-492b95234073',
              apiNo: '2153-1001-01',
              apiDesc: '查询banner图基本信息',
              successFlag: true,
              invokedConsumeTime: '32ms',
              ties: 'BMTS',
              domain: 'enc',
              subInvocationList: [
                {
                  id: '2caf2446-5ff8-4b26-8c6e-71947df28775',
                  apiNo: '1010-4000-01',
                  apiDesc: '跟据临床业务单元id获取临床业务单元信息',
                  successFlag: true,
                  invokedConsumeTime: '6ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                }
              ]
            },
            {
              id: '4117692d-60c3-4968-a769-507c44ba69c9',
              apiNo: '1100-6120-01',
              apiDesc:
                '多条件（药房组织标识、药品类型、药品剂型、启用标志、药品名称、拼音码、五笔码、助记码 ）分页查询药品商品目录列表  不超过100个',
              successFlag: true,
              invokedConsumeTime: '47ms',
              ties: 'MDS',
              domain: 'mat',
              subInvocationList: []
            },
            {
              id: '0448e6d8-eaee-4c73-9af7-e9bc03450de6',
              apiNo: '1100-2001-01',
              apiDesc:
                '批量查询(根据medicineIds)药品商品、药品服务相关所有聚合信息(不支持分页,限制ids 500个)',
              successFlag: true,
              invokedConsumeTime: '5ms',
              ties: 'MDS',
              domain: 'mat',
              subInvocationList: []
            },
            {
              id: '63434a92-53b7-4288-8bed-00fc5fb4deda',
              apiNo: '2100-9006-01',
              apiDesc: '根据开立单位查询药品库存信息(最大500条药品)',
              successFlag: true,
              invokedConsumeTime: '9ms',
              ties: 'BMTS',
              domain: 'mat',
              subInvocationList: [
                {
                  id: '9b61bc61-68c2-40e7-8e27-782d6ea019e1',
                  apiNo: '1100-2004-01',
                  apiDesc:
                    '批量查询(根据medicineIds)药品商品单位换算相关聚合信息(不支持分页,限制ids 500个)',
                  successFlag: true,
                  invokedConsumeTime: '3ms',
                  ties: 'MDS',
                  domain: 'mat',
                  subInvocationList: []
                }
              ]
            },
            {
              id: 'f2167291-4042-464c-b955-3d6834aefc1a',
              apiNo: '2160-2116-01',
              apiDesc: '库房药品入库批次查询-根据药品标识列表',
              successFlag: true,
              invokedConsumeTime: '27ms',
              ties: 'BMTS',
              domain: 'mat',
              subInvocationList: []
            },
            {
              id: '06b42fd2-55e6-4f2f-843c-ebc5ec00f3c0',
              apiNo: '1100-6120-01',
              apiDesc:
                '多条件（药房组织标识、药品类型、药品剂型、启用标志、药品名称、拼音码、五笔码、助记码 ）分页查询药品商品目录列表  不超过100个',
              successFlag: true,
              invokedConsumeTime: '14ms',
              ties: 'MDS',
              domain: 'mat',
              subInvocationList: []
            },
            {
              id: '399a99b6-0ff7-4d9c-81a3-f654734d6ae0',
              apiNo: '2163-4000-02',
              apiDesc: '查询多个患者的就诊诊断',
              successFlag: true,
              invokedConsumeTime: '8ms',
              ties: 'BMTS',
              domain: 'cli',
              subInvocationList: []
            },
            {
              id: '16d0d201-6ab3-4cd7-8c94-bea37c4c8b6d',
              apiNo: '2140-1002-01',
              apiDesc: '多个患者信息查询',
              successFlag: true,
              invokedConsumeTime: '302ms',
              ties: 'BMTS',
              domain: 'per',
              subInvocationList: [
                {
                  id: 'bd4102b2-ed5d-43d3-8f93-96262e244099',
                  apiNo: '1010-4058-01',
                  apiDesc:
                    '根据当前传入的医院soid查询其所有上级组织，返回包含自身的接口',
                  successFlag: true,
                  invokedConsumeTime: '13ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: 'fccec52e-e018-45ea-92c1-329fa46f28a1',
                  apiNo: '1140-1007-01',
                  apiDesc: '据年龄配置方案获取年龄配置信息',
                  successFlag: true,
                  invokedConsumeTime: '11ms',
                  ties: 'MDS',
                  domain: 'per',
                  subInvocationList: []
                },
                {
                  id: 'c464ab0c-57b8-4ae6-8c29-0238a6874bca',
                  apiNo: '1120-0222-01',
                  apiDesc:
                    '医疗保险-根据医疗机构的医疗保险标识列表查询医院医疗保险',
                  successFlag: true,
                  invokedConsumeTime: '199ms',
                  ties: 'MDS',
                  domain: 'fin',
                  subInvocationList: []
                }
              ]
            }
          ]
        },
        {
          id: '6ed3872b-7e2a-481c-8f5e-388c06f1d458',
          apiNo: '1010-5030-01',
          apiDesc: '根据值集Ids查询值集列表',
          successFlag: true,
          invokedConsumeTime: '9ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        }
      ]
    },
    {
      id: 'ec45a1b9-6486-4eb9-a089-3a0a5f12e9cc',
      apiNo: '4125-0100-01',
      apiDesc: '查询订单审方信息',
      successFlag: true,
      invokedConsumeTime: '321ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: 'a874b516-d709-43b8-bb23-fd6cd254bccf',
          apiNo: '3121-0011-01',
          apiDesc: '根据订单标识列表获取可收费订单信息',
          successFlag: true,
          invokedConsumeTime: '316ms',
          ties: 'AMTS',
          domain: 'fin',
          subInvocationList: [
            {
              id: '627be610-3f3a-444a-ae89-13c9f58a63fe',
              apiNo: '2120-0233-01',
              apiDesc: '根据订单标识列表获取订单和订单明细信息',
              successFlag: true,
              invokedConsumeTime: '108ms',
              ties: 'BMTS',
              domain: 'fin',
              subInvocationList: [
                {
                  id: '4393a778-b5a6-4c1d-b4c2-78d976d06254',
                  apiNo: '1010-5046-01',
                  apiDesc:
                    '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
                  successFlag: true,
                  invokedConsumeTime: '38ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: 'c9ec3e7d-6205-4f7e-923e-694d7edcb31a',
                  apiNo: '1010-5046-01',
                  apiDesc:
                    '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
                  successFlag: true,
                  invokedConsumeTime: '9ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                }
              ]
            },
            {
              id: '35733e0d-ae66-4996-8558-9f255c59b3ea',
              apiNo: '1010-5046-01',
              apiDesc:
                '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
              successFlag: true,
              invokedConsumeTime: '9ms',
              ties: 'MDS',
              domain: 'mdm',
              subInvocationList: []
            },
            {
              id: 'f50992b7-d966-4065-a75f-b427d4fde1f4',
              apiNo: '2110-0026-01',
              apiDesc: '处方查询医嘱',
              successFlag: true,
              invokedConsumeTime: '102ms',
              ties: 'BMTS',
              domain: 'cli',
              subInvocationList: []
            },
            {
              id: 'b82bac3a-87a9-48c5-8963-1e1bc599e995',
              apiNo: '2180-7031-01',
              apiDesc: '审方结果查询',
              successFlag: true,
              invokedConsumeTime: '46ms',
              ties: 'BMTS',
              domain: 'mat',
              subInvocationList: [
                {
                  id: '843b4c09-9a9a-4520-88c4-8842b748c83b',
                  apiNo: '1100-6008-01',
                  apiDesc: '根据库房标识获取药房配置',
                  successFlag: true,
                  invokedConsumeTime: '5ms',
                  ties: 'MDS',
                  domain: 'mat',
                  subInvocationList: []
                }
              ]
            },
            {
              id: '456f81ae-6bae-430f-8ed4-1568a7085bac',
              apiNo: '1010-5026-01',
              apiDesc:
                '根据概念域ids（必填）和体系状态、值状态查询值、值（值名称、拼音码、五笔码、valueNo）模糊查询值集列表',
              successFlag: true,
              invokedConsumeTime: '28ms',
              ties: 'MDS',
              domain: 'mdm',
              subInvocationList: []
            }
          ]
        }
      ]
    },
    {
      id: '820f0520-70bc-46d8-8972-1f569b1a7067',
      apiNo: '4125-0100-01',
      apiDesc: '查询订单审方信息',
      successFlag: true,
      invokedConsumeTime: '109ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '7eb2b5eb-2914-4ba0-bda8-f7fb4b48ff24',
          apiNo: '3121-0011-01',
          apiDesc: '根据订单标识列表获取可收费订单信息',
          successFlag: true,
          invokedConsumeTime: '105ms',
          ties: 'AMTS',
          domain: 'fin',
          subInvocationList: [
            {
              id: '653c5989-8e5c-4075-8ca9-fb9b80eba09a',
              apiNo: '2120-0233-01',
              apiDesc: '根据订单标识列表获取订单和订单明细信息',
              successFlag: true,
              invokedConsumeTime: '41ms',
              ties: 'BMTS',
              domain: 'fin',
              subInvocationList: [
                {
                  id: '598295c9-1a5d-4a26-81ef-bc91e72adb9e',
                  apiNo: '1010-5046-01',
                  apiDesc:
                    '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
                  successFlag: true,
                  invokedConsumeTime: '11ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: '852ecead-aaed-48d7-8aee-fda93be38406',
                  apiNo: '1010-5046-01',
                  apiDesc:
                    '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
                  successFlag: true,
                  invokedConsumeTime: '9ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                }
              ]
            },
            {
              id: '0516cd5d-ad67-4237-89ad-e07e16dcdeb5',
              apiNo: '1010-5046-01',
              apiDesc:
                '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
              successFlag: true,
              invokedConsumeTime: '6ms',
              ties: 'MDS',
              domain: 'mdm',
              subInvocationList: []
            },
            {
              id: 'f7129e1b-c987-4283-85ed-ead78216ca2b',
              apiNo: '2110-0026-01',
              apiDesc: '处方查询医嘱',
              successFlag: true,
              invokedConsumeTime: '19ms',
              ties: 'BMTS',
              domain: 'cli',
              subInvocationList: []
            },
            {
              id: '7dc9220a-c75b-49ca-bfd8-9c9ad45d2a76',
              apiNo: '2180-7031-01',
              apiDesc: '审方结果查询',
              successFlag: true,
              invokedConsumeTime: '13ms',
              ties: 'BMTS',
              domain: 'mat',
              subInvocationList: [
                {
                  id: 'ba746621-d493-4148-a3f6-cdee5c36b5cd',
                  apiNo: '1100-6008-01',
                  apiDesc: '根据库房标识获取药房配置',
                  successFlag: true,
                  invokedConsumeTime: '1ms',
                  ties: 'MDS',
                  domain: 'mat',
                  subInvocationList: []
                }
              ]
            },
            {
              id: '85598013-0833-4389-8e3c-85b17d22b757',
              apiNo: '1010-5026-01',
              apiDesc:
                '根据概念域ids（必填）和体系状态、值状态查询值、值（值名称、拼音码、五笔码、valueNo）模糊查询值集列表',
              successFlag: true,
              invokedConsumeTime: '5ms',
              ties: 'MDS',
              domain: 'mdm',
              subInvocationList: []
            }
          ]
        }
      ]
    },
    {
      id: 'b4a71030-2e4b-43da-b52b-388ac1061304',
      apiNo: '4180-6001-01',
      apiDesc: '患者列表信息查询',
      successFlag: true,
      invokedConsumeTime: '38ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: 'ba3cfc5c-797b-4e71-92b8-420095486bf4',
          apiNo: '3180-1001-01',
          apiDesc: '查询发药申请单患者信息',
          successFlag: true,
          invokedConsumeTime: '33ms',
          ties: 'AMTS',
          domain: 'mat',
          subInvocationList: [
            {
              id: 'c20f31ea-26dd-4557-a249-3d9544656fef',
              apiNo: '2180-6025-01',
              apiDesc:
                '查询发药申请单患者基本信息（分页）待配药，已配药，待发药，待审核，已审核，审核不通过',
              successFlag: true,
              invokedConsumeTime: '28ms',
              ties: 'BMTS',
              domain: 'mat',
              subInvocationList: []
            }
          ]
        }
      ]
    },
    {
      id: '3edf9b08-7611-4567-89cd-073fce390354',
      apiNo: '4101-9000-03',
      apiDesc: '消耗量',
      successFlag: true,
      invokedConsumeTime: '162ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: 'd9034766-445f-4b4b-8879-661e72558af7',
          apiNo: '2101-9000-03',
          apiDesc: '消耗量',
          successFlag: true,
          invokedConsumeTime: '153ms',
          ties: 'BMTS',
          domain: 'mat',
          subInvocationList: [
            {
              id: 'cb7d9c5c-8ec1-4ad2-95b2-af7832fc4dfb',
              apiNo: '1100-6120-01',
              apiDesc:
                '多条件（药房组织标识、药品类型、药品剂型、启用标志、药品名称、拼音码、五笔码、助记码 ）分页查询药品商品目录列表  不超过100个',
              successFlag: true,
              invokedConsumeTime: '55ms',
              ties: 'MDS',
              domain: 'mat',
              subInvocationList: []
            },
            {
              id: '67b1c9ce-09db-4cfc-a43c-1a12015b02df',
              apiNo: '1100-6002-01',
              apiDesc: '根据库房ID查询药房（药库）聚合信息',
              successFlag: true,
              invokedConsumeTime: '44ms',
              ties: 'MDS',
              domain: 'mat',
              subInvocationList: []
            }
          ]
        }
      ]
    },
    {
      id: 'cd2c9e8e-18d0-47b9-819c-b6547da46ce2',
      apiNo: '4160-4105-01',
      apiDesc: '待配药-多条件查询中草药配药申请明细列表',
      successFlag: true,
      invokedConsumeTime: '239ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: 'f0842a41-19f9-4801-83fb-f333d9b508f5',
          apiNo: '3160-2101-01',
          apiDesc: '住院药房发药查询发药申请按医嘱明细',
          successFlag: true,
          invokedConsumeTime: '224ms',
          ties: 'AMTS',
          domain: 'mat',
          subInvocationList: [
            {
              id: '7bea07a1-02d6-4d36-847d-58ac2712b6b4',
              apiNo: '2160-2102-01',
              apiDesc: '药房发药申请明细列表查询',
              successFlag: true,
              invokedConsumeTime: '50ms',
              ties: 'BMTS',
              domain: 'mat',
              subInvocationList: []
            },
            {
              id: 'f1ed3dca-fbd7-4068-9fd1-bf95ca045c6e',
              apiNo: '2100-9006-01',
              apiDesc: '根据开立单位查询药品库存信息(最大500条药品)',
              successFlag: true,
              invokedConsumeTime: '9ms',
              ties: 'BMTS',
              domain: 'mat',
              subInvocationList: [
                {
                  id: '204a8843-abd1-4526-9edd-aff1406167ce',
                  apiNo: '1100-2004-01',
                  apiDesc:
                    '批量查询(根据medicineIds)药品商品单位换算相关聚合信息(不支持分页,限制ids 500个)',
                  successFlag: true,
                  invokedConsumeTime: '2ms',
                  ties: 'MDS',
                  domain: 'mat',
                  subInvocationList: []
                }
              ]
            },
            {
              id: 'c6d6f7e9-baf4-44a0-9cd6-d38c0f6b8d48',
              apiNo: '1100-2001-01',
              apiDesc:
                '批量查询(根据medicineIds)药品商品、药品服务相关所有聚合信息(不支持分页,限制ids 500个)',
              successFlag: true,
              invokedConsumeTime: '2ms',
              ties: 'MDS',
              domain: 'mat',
              subInvocationList: []
            },
            {
              id: '57d409e9-6d7b-4224-8ada-d15df74b5d35',
              apiNo: '2153-1001-01',
              apiDesc: '查询banner图基本信息',
              successFlag: true,
              invokedConsumeTime: '14ms',
              ties: 'BMTS',
              domain: 'enc',
              subInvocationList: [
                {
                  id: '8138dddd-f3b8-42f0-a42e-1eeba2c46659',
                  apiNo: '1010-4000-01',
                  apiDesc: '跟据临床业务单元id获取临床业务单元信息',
                  successFlag: true,
                  invokedConsumeTime: '2ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                }
              ]
            },
            {
              id: 'b68f1389-e8ee-4803-a609-906e756b02ae',
              apiNo: '2112-2028-01',
              apiDesc: '根据标识查询所有医嘱信息',
              successFlag: true,
              invokedConsumeTime: '11ms',
              ties: 'BMTS',
              domain: 'cli',
              subInvocationList: []
            },
            {
              id: 'ccaba339-9d65-4097-885c-4665d370ce9c',
              apiNo: '2160-2116-01',
              apiDesc: '库房药品入库批次查询-根据药品标识列表',
              successFlag: true,
              invokedConsumeTime: '25ms',
              ties: 'BMTS',
              domain: 'mat',
              subInvocationList: []
            },
            {
              id: 'd6c89c2c-5694-46e2-8931-15f94e96c5f3',
              apiNo: '1100-6120-01',
              apiDesc:
                '多条件（药房组织标识、药品类型、药品剂型、启用标志、药品名称、拼音码、五笔码、助记码 ）分页查询药品商品目录列表  不超过100个',
              successFlag: true,
              invokedConsumeTime: '15ms',
              ties: 'MDS',
              domain: 'mat',
              subInvocationList: []
            },
            {
              id: '211495c4-f79c-4389-919a-1f82a1e71cca',
              apiNo: '2163-4000-02',
              apiDesc: '查询多个患者的就诊诊断',
              successFlag: true,
              invokedConsumeTime: '2ms',
              ties: 'BMTS',
              domain: 'cli',
              subInvocationList: []
            },
            {
              id: '8a5da10f-59c4-400e-9cac-846eba08d980',
              apiNo: '2140-1002-01',
              apiDesc: '多个患者信息查询',
              successFlag: true,
              invokedConsumeTime: '121ms',
              ties: 'BMTS',
              domain: 'per',
              subInvocationList: [
                {
                  id: '7b180510-04b5-4582-84d5-1536390b05b1',
                  apiNo: '1010-4058-01',
                  apiDesc:
                    '根据当前传入的医院soid查询其所有上级组织，返回包含自身的接口',
                  successFlag: true,
                  invokedConsumeTime: '5ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: '5d6b497e-cc61-4c11-b5a5-e73a2b550a55',
                  apiNo: '1140-1007-01',
                  apiDesc: '据年龄配置方案获取年龄配置信息',
                  successFlag: true,
                  invokedConsumeTime: '1ms',
                  ties: 'MDS',
                  domain: 'per',
                  subInvocationList: []
                },
                {
                  id: '26092a73-5b24-4a60-81c0-5dc0a8758e54',
                  apiNo: '1120-0222-01',
                  apiDesc:
                    '医疗保险-根据医疗机构的医疗保险标识列表查询医院医疗保险',
                  successFlag: true,
                  invokedConsumeTime: '85ms',
                  ties: 'MDS',
                  domain: 'fin',
                  subInvocationList: []
                }
              ]
            }
          ]
        },
        {
          id: 'b4db4c18-d0d9-49b4-8cf5-26eb4c9f0f58',
          apiNo: '1010-5030-01',
          apiDesc: '根据值集Ids查询值集列表',
          successFlag: true,
          invokedConsumeTime: '2ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        }
      ]
    },
    {
      id: '96e0ad18-a96d-4bb2-8264-b6b5baac272c',
      apiNo: '3210-1022-01',
      apiDesc: '查询我的全部日程',
      successFlag: true,
      invokedConsumeTime: '13ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: []
    },
    {
      id: 'e54177c2-7fa6-4054-8ff2-b8633e830189',
      apiNo: '4125-0100-01',
      apiDesc: '查询订单审方信息',
      successFlag: true,
      invokedConsumeTime: '108ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '72b4d0dc-2efd-4058-8031-1d8b0757c521',
          apiNo: '3121-0011-01',
          apiDesc: '根据订单标识列表获取可收费订单信息',
          successFlag: true,
          invokedConsumeTime: '102ms',
          ties: 'AMTS',
          domain: 'fin',
          subInvocationList: [
            {
              id: '57a5c7a0-5c4b-4b71-8511-b1e58588e696',
              apiNo: '2120-0233-01',
              apiDesc: '根据订单标识列表获取订单和订单明细信息',
              successFlag: true,
              invokedConsumeTime: '31ms',
              ties: 'BMTS',
              domain: 'fin',
              subInvocationList: [
                {
                  id: 'b0001d02-8279-4c91-8356-4935ce45b131',
                  apiNo: '1010-5046-01',
                  apiDesc:
                    '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
                  successFlag: true,
                  invokedConsumeTime: '8ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: '4fa72677-e988-4da9-acc9-c2e2473e87c2',
                  apiNo: '1010-5046-01',
                  apiDesc:
                    '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
                  successFlag: true,
                  invokedConsumeTime: '6ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                }
              ]
            },
            {
              id: '211854a3-cc8f-4893-81c0-7cdad3224a0d',
              apiNo: '1010-5046-01',
              apiDesc:
                '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
              successFlag: true,
              invokedConsumeTime: '13ms',
              ties: 'MDS',
              domain: 'mdm',
              subInvocationList: []
            },
            {
              id: '10921a6b-4e36-4782-820d-c316d36eb472',
              apiNo: '2110-0026-01',
              apiDesc: '处方查询医嘱',
              successFlag: true,
              invokedConsumeTime: '17ms',
              ties: 'BMTS',
              domain: 'cli',
              subInvocationList: []
            },
            {
              id: '1044088a-c776-453c-9261-de19dd1a3672',
              apiNo: '2180-7031-01',
              apiDesc: '审方结果查询',
              successFlag: true,
              invokedConsumeTime: '13ms',
              ties: 'BMTS',
              domain: 'mat',
              subInvocationList: [
                {
                  id: '242b0c00-2462-4ab8-a5eb-05f98a0ac63a',
                  apiNo: '1100-6008-01',
                  apiDesc: '根据库房标识获取药房配置',
                  successFlag: true,
                  invokedConsumeTime: '2ms',
                  ties: 'MDS',
                  domain: 'mat',
                  subInvocationList: []
                }
              ]
            },
            {
              id: '8b48a126-a898-43db-89c8-0f2a6ebc2471',
              apiNo: '1010-5026-01',
              apiDesc:
                '根据概念域ids（必填）和体系状态、值状态查询值、值（值名称、拼音码、五笔码、valueNo）模糊查询值集列表',
              successFlag: true,
              invokedConsumeTime: '5ms',
              ties: 'MDS',
              domain: 'mdm',
              subInvocationList: []
            }
          ]
        }
      ]
    },
    {
      id: '267d16e8-1c57-4ce4-b8a4-de2399750378',
      apiNo: '3210-1022-01',
      apiDesc: '查询我的全部日程',
      successFlag: true,
      invokedConsumeTime: '6ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: []
    },
    {
      id: '8c74dfaa-6285-4780-81a8-bef056b5c4c8',
      apiNo: '4101-9000-04',
      apiDesc: '消耗量+下限',
      successFlag: true,
      invokedConsumeTime: '708ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '9a6e2e82-aa14-4ece-bb46-748d2dffdb89',
          apiNo: '2101-9000-04',
          apiDesc: '消耗量+下限',
          successFlag: true,
          invokedConsumeTime: '696ms',
          ties: 'BMTS',
          domain: 'mat',
          subInvocationList: [
            {
              id: 'bdf7cd78-10e8-41db-be01-e467c42c054c',
              apiNo: '1100-6120-01',
              apiDesc:
                '多条件（药房组织标识、药品类型、药品剂型、启用标志、药品名称、拼音码、五笔码、助记码 ）分页查询药品商品目录列表  不超过100个',
              successFlag: true,
              invokedConsumeTime: '234ms',
              ties: 'MDS',
              domain: 'mat',
              subInvocationList: []
            },
            {
              id: '4e981ed3-db70-4036-8084-3710491f3c52',
              apiNo: '1100-6120-01',
              apiDesc:
                '多条件（药房组织标识、药品类型、药品剂型、启用标志、药品名称、拼音码、五笔码、助记码 ）分页查询药品商品目录列表  不超过100个',
              successFlag: true,
              invokedConsumeTime: '73ms',
              ties: 'MDS',
              domain: 'mat',
              subInvocationList: []
            },
            {
              id: '687be3d5-d528-482a-8071-b830b6508460',
              apiNo: '1100-6120-01',
              apiDesc:
                '多条件（药房组织标识、药品类型、药品剂型、启用标志、药品名称、拼音码、五笔码、助记码 ）分页查询药品商品目录列表  不超过100个',
              successFlag: true,
              invokedConsumeTime: '109ms',
              ties: 'MDS',
              domain: 'mat',
              subInvocationList: []
            },
            {
              id: '6e941025-8e15-4fc4-b486-2ba03eaf0b24',
              apiNo: '1100-6120-01',
              apiDesc:
                '多条件（药房组织标识、药品类型、药品剂型、启用标志、药品名称、拼音码、五笔码、助记码 ）分页查询药品商品目录列表  不超过100个',
              successFlag: true,
              invokedConsumeTime: '59ms',
              ties: 'MDS',
              domain: 'mat',
              subInvocationList: []
            },
            {
              id: '5f95af1e-0450-4b2a-b57d-34a71ae5993b',
              apiNo: '1100-6120-01',
              apiDesc:
                '多条件（药房组织标识、药品类型、药品剂型、启用标志、药品名称、拼音码、五笔码、助记码 ）分页查询药品商品目录列表  不超过100个',
              successFlag: true,
              invokedConsumeTime: '50ms',
              ties: 'MDS',
              domain: 'mat',
              subInvocationList: []
            },
            {
              id: 'a1b3ae96-3e23-465d-89fe-ad753327e114',
              apiNo: '1100-6120-01',
              apiDesc:
                '多条件（药房组织标识、药品类型、药品剂型、启用标志、药品名称、拼音码、五笔码、助记码 ）分页查询药品商品目录列表  不超过100个',
              successFlag: true,
              invokedConsumeTime: '54ms',
              ties: 'MDS',
              domain: 'mat',
              subInvocationList: []
            },
            {
              id: '55b47792-13e3-467d-b29c-126b038d594e',
              apiNo: '1100-6120-01',
              apiDesc:
                '多条件（药房组织标识、药品类型、药品剂型、启用标志、药品名称、拼音码、五笔码、助记码 ）分页查询药品商品目录列表  不超过100个',
              successFlag: true,
              invokedConsumeTime: '55ms',
              ties: 'MDS',
              domain: 'mat',
              subInvocationList: []
            },
            {
              id: '2c339fe5-55ea-43dd-802f-dd3accff88e2',
              apiNo: '1100-6120-01',
              apiDesc:
                '多条件（药房组织标识、药品类型、药品剂型、启用标志、药品名称、拼音码、五笔码、助记码 ）分页查询药品商品目录列表  不超过100个',
              successFlag: true,
              invokedConsumeTime: '130ms',
              ties: 'MDS',
              domain: 'mat',
              subInvocationList: []
            },
            {
              id: '452dda4c-b09a-47a1-92fe-5bb8e715a6b2',
              apiNo: '1100-6120-01',
              apiDesc:
                '多条件（药房组织标识、药品类型、药品剂型、启用标志、药品名称、拼音码、五笔码、助记码 ）分页查询药品商品目录列表  不超过100个',
              successFlag: true,
              invokedConsumeTime: '80ms',
              ties: 'MDS',
              domain: 'mat',
              subInvocationList: []
            },
            {
              id: 'c542d630-8613-4251-8611-f023ee706fac',
              apiNo: '1100-6120-01',
              apiDesc:
                '多条件（药房组织标识、药品类型、药品剂型、启用标志、药品名称、拼音码、五笔码、助记码 ）分页查询药品商品目录列表  不超过100个',
              successFlag: true,
              invokedConsumeTime: '48ms',
              ties: 'MDS',
              domain: 'mat',
              subInvocationList: []
            },
            {
              id: '2c4238f4-7344-4a31-9dc7-8f0549baa20d',
              apiNo: '1100-6002-01',
              apiDesc: '根据库房ID查询药房（药库）聚合信息',
              successFlag: true,
              invokedConsumeTime: '14ms',
              ties: 'MDS',
              domain: 'mat',
              subInvocationList: []
            }
          ]
        }
      ]
    },
    {
      id: '5b90ff9a-8fd6-449c-8700-b3d67a924ca9',
      apiNo: '4160-4105-01',
      apiDesc: '待配药-多条件查询中草药配药申请明细列表',
      successFlag: true,
      invokedConsumeTime: '901ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: 'e00be5c2-d97f-4362-9cba-e20c2700f364',
          apiNo: '3160-2101-01',
          apiDesc: '住院药房发药查询发药申请按医嘱明细',
          successFlag: true,
          invokedConsumeTime: '883ms',
          ties: 'AMTS',
          domain: 'mat',
          subInvocationList: [
            {
              id: '27cdcc65-692e-4067-86c1-50797967a457',
              apiNo: '2160-2102-01',
              apiDesc: '药房发药申请明细列表查询',
              successFlag: true,
              invokedConsumeTime: '187ms',
              ties: 'BMTS',
              domain: 'mat',
              subInvocationList: []
            },
            {
              id: '945fa9fd-d5c6-4459-8a78-28c58ba2361b',
              apiNo: '1100-6120-01',
              apiDesc:
                '多条件（药房组织标识、药品类型、药品剂型、启用标志、药品名称、拼音码、五笔码、助记码 ）分页查询药品商品目录列表  不超过100个',
              successFlag: true,
              invokedConsumeTime: '110ms',
              ties: 'MDS',
              domain: 'mat',
              subInvocationList: []
            },
            {
              id: '0a3ddfe6-f97d-4ddf-8db2-64ff8ce06fd3',
              apiNo: '2160-2116-01',
              apiDesc: '库房药品入库批次查询-根据药品标识列表',
              successFlag: true,
              invokedConsumeTime: '94ms',
              ties: 'BMTS',
              domain: 'mat',
              subInvocationList: []
            },
            {
              id: '5c313156-5191-4e30-b2ae-ed87eba219a6',
              apiNo: '1100-2001-01',
              apiDesc:
                '批量查询(根据medicineIds)药品商品、药品服务相关所有聚合信息(不支持分页,限制ids 500个)',
              successFlag: true,
              invokedConsumeTime: '1ms',
              ties: 'MDS',
              domain: 'mat',
              subInvocationList: []
            },
            {
              id: '26ccfeed-5738-449b-8b06-84a31300be09',
              apiNo: '2112-2028-01',
              apiDesc: '根据标识查询所有医嘱信息',
              successFlag: true,
              invokedConsumeTime: '58ms',
              ties: 'BMTS',
              domain: 'cli',
              subInvocationList: []
            },
            {
              id: '2a4c91c3-855b-4722-88cb-d1f87567bd8c',
              apiNo: '2153-1001-01',
              apiDesc: '查询banner图基本信息',
              successFlag: true,
              invokedConsumeTime: '25ms',
              ties: 'BMTS',
              domain: 'enc',
              subInvocationList: [
                {
                  id: 'fa16feea-4dd1-4e43-8b3e-a0d208cd6210',
                  apiNo: '1010-4000-01',
                  apiDesc: '跟据临床业务单元id获取临床业务单元信息',
                  successFlag: true,
                  invokedConsumeTime: '17ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                }
              ]
            },
            {
              id: '682659aa-0e5f-4b36-924c-b96f873655ef',
              apiNo: '2100-9006-01',
              apiDesc: '根据开立单位查询药品库存信息(最大500条药品)',
              successFlag: true,
              invokedConsumeTime: '7ms',
              ties: 'BMTS',
              domain: 'mat',
              subInvocationList: [
                {
                  id: '253d7412-c627-4ac7-80bf-86b1b3258d45',
                  apiNo: '1100-2004-01',
                  apiDesc:
                    '批量查询(根据medicineIds)药品商品单位换算相关聚合信息(不支持分页,限制ids 500个)',
                  successFlag: true,
                  invokedConsumeTime: '2ms',
                  ties: 'MDS',
                  domain: 'mat',
                  subInvocationList: []
                }
              ]
            },
            {
              id: 'f3a12b15-d2c9-440e-8824-016fd644fcd2',
              apiNo: '2140-1002-01',
              apiDesc: '多个患者信息查询',
              successFlag: true,
              invokedConsumeTime: '551ms',
              ties: 'BMTS',
              domain: 'per',
              subInvocationList: [
                {
                  id: '6e13ed80-46a6-40ef-b24d-15d31225358a',
                  apiNo: '1010-4058-01',
                  apiDesc:
                    '根据当前传入的医院soid查询其所有上级组织，返回包含自身的接口',
                  successFlag: true,
                  invokedConsumeTime: '82ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: '18103393-2b6a-49b7-9595-707fe2721830',
                  apiNo: '1140-1007-01',
                  apiDesc: '据年龄配置方案获取年龄配置信息',
                  successFlag: true,
                  invokedConsumeTime: '9ms',
                  ties: 'MDS',
                  domain: 'per',
                  subInvocationList: []
                },
                {
                  id: 'd0752d69-4a78-4213-895a-ecc8bb6ade37',
                  apiNo: '1120-0222-01',
                  apiDesc:
                    '医疗保险-根据医疗机构的医疗保险标识列表查询医院医疗保险',
                  successFlag: true,
                  invokedConsumeTime: '310ms',
                  ties: 'MDS',
                  domain: 'fin',
                  subInvocationList: []
                }
              ]
            },
            {
              id: '323b3b54-4e6f-455b-be52-a895d409ceda',
              apiNo: '2163-4000-02',
              apiDesc: '查询多个患者的就诊诊断',
              successFlag: true,
              invokedConsumeTime: '17ms',
              ties: 'BMTS',
              domain: 'cli',
              subInvocationList: []
            }
          ]
        },
        {
          id: 'a0e242b2-f3e5-4c29-a2e6-de17d1030d67',
          apiNo: '1010-5030-01',
          apiDesc: '根据值集Ids查询值集列表',
          successFlag: true,
          invokedConsumeTime: '3ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        }
      ]
    },
    {
      id: 'dff59cc4-73f6-4b48-8c03-93a15927a672',
      apiNo: '4125-0100-01',
      apiDesc: '查询订单审方信息',
      successFlag: true,
      invokedConsumeTime: '98ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '3d931d57-0a8f-4a4e-80b6-bba944dd559e',
          apiNo: '3121-0011-01',
          apiDesc: '根据订单标识列表获取可收费订单信息',
          successFlag: true,
          invokedConsumeTime: '92ms',
          ties: 'AMTS',
          domain: 'fin',
          subInvocationList: [
            {
              id: '6923ac39-873c-4130-a33c-0821510ff4e1',
              apiNo: '2120-0233-01',
              apiDesc: '根据订单标识列表获取订单和订单明细信息',
              successFlag: true,
              invokedConsumeTime: '31ms',
              ties: 'BMTS',
              domain: 'fin',
              subInvocationList: [
                {
                  id: '7a45d8ca-06e2-4823-89bd-811cd2f3ad75',
                  apiNo: '1010-5046-01',
                  apiDesc:
                    '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
                  successFlag: true,
                  invokedConsumeTime: '8ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: '7e488dc2-872d-47e4-8d55-e90de4ef96f9',
                  apiNo: '1010-5046-01',
                  apiDesc:
                    '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
                  successFlag: true,
                  invokedConsumeTime: '8ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                }
              ]
            },
            {
              id: 'd5df842c-122b-4a16-b64f-e24d9dadeb10',
              apiNo: '1010-5046-01',
              apiDesc:
                '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
              successFlag: true,
              invokedConsumeTime: '6ms',
              ties: 'MDS',
              domain: 'mdm',
              subInvocationList: []
            },
            {
              id: 'a18a9410-c60d-4cdc-92b5-decae908f21c',
              apiNo: '2110-0026-01',
              apiDesc: '处方查询医嘱',
              successFlag: true,
              invokedConsumeTime: '16ms',
              ties: 'BMTS',
              domain: 'cli',
              subInvocationList: []
            },
            {
              id: '0e20b7ad-7876-49a1-95d9-c51a5cf7da93',
              apiNo: '2180-7031-01',
              apiDesc: '审方结果查询',
              successFlag: true,
              invokedConsumeTime: '12ms',
              ties: 'BMTS',
              domain: 'mat',
              subInvocationList: [
                {
                  id: 'cb4dcbd4-cece-489f-962b-3881daa61ac6',
                  apiNo: '1100-6008-01',
                  apiDesc: '根据库房标识获取药房配置',
                  successFlag: true,
                  invokedConsumeTime: '2ms',
                  ties: 'MDS',
                  domain: 'mat',
                  subInvocationList: []
                }
              ]
            },
            {
              id: 'd89455a8-41e2-46e7-92b0-8ee5132ae548',
              apiNo: '1010-5026-01',
              apiDesc:
                '根据概念域ids（必填）和体系状态、值状态查询值、值（值名称、拼音码、五笔码、valueNo）模糊查询值集列表',
              successFlag: true,
              invokedConsumeTime: '5ms',
              ties: 'MDS',
              domain: 'mdm',
              subInvocationList: []
            }
          ]
        }
      ]
    },
    {
      id: 'b1e7d0a1-c5ec-48ca-814c-8ec37fe4f03d',
      apiNo: '4160-4104-01',
      apiDesc: '待配药-多条件查询中草药配药申请单',
      successFlag: true,
      invokedConsumeTime: '60ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '84d5ce20-e099-4fcc-9dbb-7e21067e0a42',
          apiNo: '2160-2101-01',
          apiDesc: '药房发药申请单列表查询',
          successFlag: true,
          invokedConsumeTime: '53ms',
          ties: 'BMTS',
          domain: 'mat',
          subInvocationList: []
        }
      ]
    },
    {
      id: 'baf45ca7-9a9b-49d0-928e-f01731fb31a5',
      apiNo: '4160-4105-01',
      apiDesc: '待配药-多条件查询中草药配药申请明细列表',
      successFlag: true,
      invokedConsumeTime: '183ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '880e0ddf-821d-40e0-86b7-728f94b11c5f',
          apiNo: '3160-2101-01',
          apiDesc: '住院药房发药查询发药申请按医嘱明细',
          successFlag: true,
          invokedConsumeTime: '168ms',
          ties: 'AMTS',
          domain: 'mat',
          subInvocationList: [
            {
              id: 'b89c44c2-c694-4efb-8a72-665b4b370ea0',
              apiNo: '2160-2102-01',
              apiDesc: '药房发药申请明细列表查询',
              successFlag: true,
              invokedConsumeTime: '20ms',
              ties: 'BMTS',
              domain: 'mat',
              subInvocationList: []
            },
            {
              id: 'b57945a8-7b83-4831-8838-502404a029e5',
              apiNo: '1100-6120-01',
              apiDesc:
                '多条件（药房组织标识、药品类型、药品剂型、启用标志、药品名称、拼音码、五笔码、助记码 ）分页查询药品商品目录列表  不超过100个',
              successFlag: true,
              invokedConsumeTime: '12ms',
              ties: 'MDS',
              domain: 'mat',
              subInvocationList: []
            },
            {
              id: '29fb465c-e157-4592-b728-830b75110c09',
              apiNo: '2160-2116-01',
              apiDesc: '库房药品入库批次查询-根据药品标识列表',
              successFlag: true,
              invokedConsumeTime: '17ms',
              ties: 'BMTS',
              domain: 'mat',
              subInvocationList: []
            },
            {
              id: 'dea31cea-b90f-4ed0-8c6a-ec51a606f454',
              apiNo: '2112-2028-01',
              apiDesc: '根据标识查询所有医嘱信息',
              successFlag: true,
              invokedConsumeTime: '9ms',
              ties: 'BMTS',
              domain: 'cli',
              subInvocationList: []
            },
            {
              id: 'aac3cbc8-1c6d-49c2-87d7-46c7041d8c12',
              apiNo: '2153-1001-01',
              apiDesc: '查询banner图基本信息',
              successFlag: true,
              invokedConsumeTime: '16ms',
              ties: 'BMTS',
              domain: 'enc',
              subInvocationList: [
                {
                  id: '2c444005-96b5-420e-bd47-2f44e0ccf1bc',
                  apiNo: '1010-4000-01',
                  apiDesc: '跟据临床业务单元id获取临床业务单元信息',
                  successFlag: true,
                  invokedConsumeTime: '3ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                }
              ]
            },
            {
              id: 'fb4eee1a-2a44-415b-ab5b-e1451efee2f8',
              apiNo: '2100-9006-01',
              apiDesc: '根据开立单位查询药品库存信息(最大500条药品)',
              successFlag: true,
              invokedConsumeTime: '8ms',
              ties: 'BMTS',
              domain: 'mat',
              subInvocationList: [
                {
                  id: '662fb393-346e-433d-8816-35be365b0d21',
                  apiNo: '1100-2004-01',
                  apiDesc:
                    '批量查询(根据medicineIds)药品商品单位换算相关聚合信息(不支持分页,限制ids 500个)',
                  successFlag: true,
                  invokedConsumeTime: '2ms',
                  ties: 'MDS',
                  domain: 'mat',
                  subInvocationList: []
                }
              ]
            },
            {
              id: 'ece8e7fd-aa0d-41c0-8fc2-9d2339b005ef',
              apiNo: '1100-2001-01',
              apiDesc:
                '批量查询(根据medicineIds)药品商品、药品服务相关所有聚合信息(不支持分页,限制ids 500个)',
              successFlag: true,
              invokedConsumeTime: '4ms',
              ties: 'MDS',
              domain: 'mat',
              subInvocationList: []
            },
            {
              id: '317e4f17-bba7-4c73-b99e-2df96fac6de9',
              apiNo: '1100-6120-01',
              apiDesc:
                '多条件（药房组织标识、药品类型、药品剂型、启用标志、药品名称、拼音码、五笔码、助记码 ）分页查询药品商品目录列表  不超过100个',
              successFlag: true,
              invokedConsumeTime: '8ms',
              ties: 'MDS',
              domain: 'mat',
              subInvocationList: []
            },
            {
              id: 'f72d37c4-45b4-499e-b66f-d86ec8819cef',
              apiNo: '2163-4000-02',
              apiDesc: '查询多个患者的就诊诊断',
              successFlag: true,
              invokedConsumeTime: '1ms',
              ties: 'BMTS',
              domain: 'cli',
              subInvocationList: []
            },
            {
              id: '9cb22880-285f-46a3-8286-ae22bb8808a7',
              apiNo: '2140-1002-01',
              apiDesc: '多个患者信息查询',
              successFlag: true,
              invokedConsumeTime: '106ms',
              ties: 'BMTS',
              domain: 'per',
              subInvocationList: [
                {
                  id: '81d741aa-be08-4125-819a-f1ec60142f1a',
                  apiNo: '1010-4058-01',
                  apiDesc:
                    '根据当前传入的医院soid查询其所有上级组织，返回包含自身的接口',
                  successFlag: true,
                  invokedConsumeTime: '4ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: 'dc95c51d-3677-4e74-8446-aa0c25524b01',
                  apiNo: '1140-1007-01',
                  apiDesc: '据年龄配置方案获取年龄配置信息',
                  successFlag: true,
                  invokedConsumeTime: '2ms',
                  ties: 'MDS',
                  domain: 'per',
                  subInvocationList: []
                },
                {
                  id: 'db7007d7-4f01-435c-8f76-3597c1678578',
                  apiNo: '1120-0222-01',
                  apiDesc:
                    '医疗保险-根据医疗机构的医疗保险标识列表查询医院医疗保险',
                  successFlag: true,
                  invokedConsumeTime: '75ms',
                  ties: 'MDS',
                  domain: 'fin',
                  subInvocationList: []
                }
              ]
            }
          ]
        },
        {
          id: '889dfd69-81ce-47a2-81e0-9c16a655fab0',
          apiNo: '1010-5030-01',
          apiDesc: '根据值集Ids查询值集列表',
          successFlag: true,
          invokedConsumeTime: '1ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        }
      ]
    },
    {
      id: '24073184-a913-4ab6-8fd5-1808047b63d3',
      apiNo: '4180-6001-01',
      apiDesc: '患者列表信息查询',
      successFlag: true,
      invokedConsumeTime: '244ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: 'b37d553c-46c5-4db6-8ec5-f8a86700f0a4',
          apiNo: '3180-1001-01',
          apiDesc: '查询发药申请单患者信息',
          successFlag: true,
          invokedConsumeTime: '229ms',
          ties: 'AMTS',
          domain: 'mat',
          subInvocationList: [
            {
              id: 'e17db5b8-a580-49ea-8280-72d0621d5c4a',
              apiNo: '2180-6025-01',
              apiDesc:
                '查询发药申请单患者基本信息（分页）待配药，已配药，待发药，待审核，已审核，审核不通过',
              successFlag: true,
              invokedConsumeTime: '111ms',
              ties: 'BMTS',
              domain: 'mat',
              subInvocationList: []
            },
            {
              id: 'fa523284-1aea-4c5c-843b-f44ffd8abfe5',
              apiNo: '2150-1005-01',
              apiDesc: '就诊健康概况及扩展查询',
              successFlag: true,
              invokedConsumeTime: '12ms',
              ties: 'BMTS',
              domain: 'enc',
              subInvocationList: []
            },
            {
              id: '965ee549-f441-46ef-8267-e7edf4bff5b6',
              apiNo: '2150-1029-01',
              apiDesc: '根据角色标识列表查询门诊就诊记录',
              successFlag: true,
              invokedConsumeTime: '48ms',
              ties: 'BMTS',
              domain: 'enc',
              subInvocationList: []
            },
            {
              id: 'ebb8ccea-b4af-41cf-8c2e-399a5446ee8d',
              apiNo: '2140-71046-01',
              apiDesc: '根据个人身份标识定制化查询患者信息列表',
              successFlag: true,
              invokedConsumeTime: '98ms',
              ties: 'BMTS',
              domain: 'per',
              subInvocationList: [
                {
                  id: '57ac5898-ad60-4fe9-a64b-c7c1e95b85ba',
                  apiNo: '1010-4058-01',
                  apiDesc:
                    '根据当前传入的医院soid查询其所有上级组织，返回包含自身的接口',
                  successFlag: true,
                  invokedConsumeTime: '5ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: '224f4ece-a320-455b-8426-59592e35ddf2',
                  apiNo: '1140-1007-01',
                  apiDesc: '据年龄配置方案获取年龄配置信息',
                  successFlag: true,
                  invokedConsumeTime: '6ms',
                  ties: 'MDS',
                  domain: 'per',
                  subInvocationList: []
                }
              ]
            }
          ]
        },
        {
          id: '3c94acc3-e01d-4090-8031-43d04a185dfe',
          apiNo: '1100-10003-01',
          apiDesc: '查询指定库房窗口',
          successFlag: false,
          invokedConsumeTime: '0ms',
          ties: 'MDS',
          domain: 'mat',
          subInvocationList: []
        }
      ]
    },
    {
      id: '695e4754-95ff-410c-8bee-d01647904e65',
      apiNo: '4180-6002-05',
      apiDesc: '根据就诊标识号获取发药明细信息',
      successFlag: true,
      invokedConsumeTime: '118ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: 'e27d9456-1881-414c-82f3-f7bec5fb1128',
          apiNo: '3180-1006-01',
          apiDesc: '根据就诊标识号获取发药明细信息',
          successFlag: true,
          invokedConsumeTime: '97ms',
          ties: 'AMTS',
          domain: 'mat',
          subInvocationList: [
            {
              id: '011e5b41-a964-472c-86f8-1a6b06ee60ef',
              apiNo: '2180-4017-01',
              apiDesc: '获取发药申请单明细信息',
              successFlag: true,
              invokedConsumeTime: '71ms',
              ties: 'BMTS',
              domain: 'mat',
              subInvocationList: [
                {
                  id: 'd3a6b63c-5946-41c9-8917-5180a29b40b9',
                  apiNo: '1100-6120-01',
                  apiDesc:
                    '多条件（药房组织标识、药品类型、药品剂型、启用标志、药品名称、拼音码、五笔码、助记码 ）分页查询药品商品目录列表  不超过100个',
                  successFlag: true,
                  invokedConsumeTime: '9ms',
                  ties: 'MDS',
                  domain: 'mat',
                  subInvocationList: []
                }
              ]
            },
            {
              id: '59bbfbb7-b674-4d46-8287-c1a1f518caf3',
              apiNo: '2110-0026-01',
              apiDesc: '处方查询医嘱',
              successFlag: true,
              invokedConsumeTime: '16ms',
              ties: 'BMTS',
              domain: 'cli',
              subInvocationList: []
            }
          ]
        },
        {
          id: '18d2ca0f-6b4a-47ff-9514-7683d3f6157a',
          apiNo: '1100-7024-01',
          apiDesc:
            '药品商品ES多条件（商品启用标志、药品类型代码、药品分类代码、精毒麻放代码、抗菌药物等级代码、药品剂型、其中关键字包含【商品名称、药品通用名、药品名英文、药品编码、拼音码、五笔码、助记码】）综合分页查询',
          successFlag: true,
          invokedConsumeTime: '5ms',
          ties: 'MDS',
          domain: 'mat',
          subInvocationList: []
        }
      ]
    },
    {
      id: '3c1fd572-9117-4dff-82c7-3b2c216ba96b',
      apiNo: '3210-1501-05',
      apiDesc: '获取操作设置项数据集',
      successFlag: true,
      invokedConsumeTime: '35ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '95aac2f0-0826-427a-a09b-850a5e7723f5',
          apiNo: '1120-0376-01',
          apiDesc: '根据操作设置项标识列表查询操作设置项列表',
          successFlag: true,
          invokedConsumeTime: '6ms',
          ties: 'MDS',
          domain: 'fin',
          subInvocationList: []
        }
      ]
    },
    {
      id: '82ecfdb4-0f70-42f5-8de6-4110eb2619aa',
      apiNo: '1100-12000-01',
      apiDesc: '操作设置项-当前库房,个人库房查询',
      successFlag: true,
      invokedConsumeTime: '20ms',
      ties: 'MDS',
      domain: 'mat',
      subInvocationList: []
    },
    {
      id: '9c1b8513-67ec-4910-8418-101c56b36758',
      apiNo: '4125-0100-01',
      apiDesc: '查询订单审方信息',
      successFlag: true,
      invokedConsumeTime: '438ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '963a4159-0e68-4cc3-ac6c-4451103de1cd',
          apiNo: '3121-0011-01',
          apiDesc: '根据订单标识列表获取可收费订单信息',
          successFlag: true,
          invokedConsumeTime: '432ms',
          ties: 'AMTS',
          domain: 'fin',
          subInvocationList: [
            {
              id: '450beb79-8f0b-4d76-b873-8ca577bf0254',
              apiNo: '2120-0233-01',
              apiDesc: '根据订单标识列表获取订单和订单明细信息',
              successFlag: true,
              invokedConsumeTime: '109ms',
              ties: 'BMTS',
              domain: 'fin',
              subInvocationList: [
                {
                  id: '6b940a48-6daa-4e69-893d-3fa5d681b2ff',
                  apiNo: '1010-5046-01',
                  apiDesc:
                    '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
                  successFlag: true,
                  invokedConsumeTime: '46ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: '79500ada-20ad-40ac-84d4-6c3c55858221',
                  apiNo: '1010-5046-01',
                  apiDesc:
                    '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
                  successFlag: true,
                  invokedConsumeTime: '9ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                }
              ]
            },
            {
              id: '6a98f416-c91a-40fa-b7c8-03221fa02ad4',
              apiNo: '1010-5046-01',
              apiDesc:
                '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
              successFlag: true,
              invokedConsumeTime: '30ms',
              ties: 'MDS',
              domain: 'mdm',
              subInvocationList: []
            },
            {
              id: '30dcd1fa-d58f-4d01-8112-e8fcaf7c2133',
              apiNo: '2110-0026-01',
              apiDesc: '处方查询医嘱',
              successFlag: true,
              invokedConsumeTime: '182ms',
              ties: 'BMTS',
              domain: 'cli',
              subInvocationList: []
            },
            {
              id: '666baff3-4236-4299-9b41-164a85fc9b00',
              apiNo: '2180-7031-01',
              apiDesc: '审方结果查询',
              successFlag: true,
              invokedConsumeTime: '58ms',
              ties: 'BMTS',
              domain: 'mat',
              subInvocationList: [
                {
                  id: '8479c6b0-a29e-4960-8689-695877ac5fba',
                  apiNo: '1100-6008-01',
                  apiDesc: '根据库房标识获取药房配置',
                  successFlag: true,
                  invokedConsumeTime: '11ms',
                  ties: 'MDS',
                  domain: 'mat',
                  subInvocationList: []
                }
              ]
            },
            {
              id: 'c80c2846-ecd7-4b88-8144-369c175b3ebd',
              apiNo: '1010-5026-01',
              apiDesc:
                '根据概念域ids（必填）和体系状态、值状态查询值、值（值名称、拼音码、五笔码、valueNo）模糊查询值集列表',
              successFlag: true,
              invokedConsumeTime: '29ms',
              ties: 'MDS',
              domain: 'mdm',
              subInvocationList: []
            }
          ]
        }
      ]
    },
    {
      id: 'b36d0574-ed77-4df9-875c-f88dcd324a0c',
      apiNo: '4180-6001-01',
      apiDesc: '患者列表信息查询',
      successFlag: true,
      invokedConsumeTime: '56ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '4f29f166-6d12-43fe-8cbd-8bf93d14f8fa',
          apiNo: '3180-1001-01',
          apiDesc: '查询发药申请单患者信息',
          successFlag: true,
          invokedConsumeTime: '51ms',
          ties: 'AMTS',
          domain: 'mat',
          subInvocationList: [
            {
              id: '3547ee6d-2ac5-4465-8382-6b7db1608e54',
              apiNo: '2180-6025-01',
              apiDesc:
                '查询发药申请单患者基本信息（分页）待配药，已配药，待发药，待审核，已审核，审核不通过',
              successFlag: true,
              invokedConsumeTime: '46ms',
              ties: 'BMTS',
              domain: 'mat',
              subInvocationList: []
            }
          ]
        }
      ]
    },
    {
      id: 'df1daab9-1d55-4183-93ac-c8002716eaa2',
      apiNo: '4125-0100-01',
      apiDesc: '查询订单审方信息',
      successFlag: true,
      invokedConsumeTime: '381ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: 'fe6531ba-96ef-414f-8138-5be2ba9f4db1',
          apiNo: '3121-0011-01',
          apiDesc: '根据订单标识列表获取可收费订单信息',
          successFlag: true,
          invokedConsumeTime: '376ms',
          ties: 'AMTS',
          domain: 'fin',
          subInvocationList: [
            {
              id: '3e738885-94a5-4017-a3e0-c95cd085f306',
              apiNo: '2120-0233-01',
              apiDesc: '根据订单标识列表获取订单和订单明细信息',
              successFlag: true,
              invokedConsumeTime: '101ms',
              ties: 'BMTS',
              domain: 'fin',
              subInvocationList: [
                {
                  id: '0963c16a-2f0d-4712-a16b-b1de14fbd0f0',
                  apiNo: '1010-5046-01',
                  apiDesc:
                    '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
                  successFlag: true,
                  invokedConsumeTime: '43ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                },
                {
                  id: '3060424e-8f73-4392-8982-39967df1937e',
                  apiNo: '1010-5046-01',
                  apiDesc:
                    '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
                  successFlag: true,
                  invokedConsumeTime: '7ms',
                  ties: 'MDS',
                  domain: 'mdm',
                  subInvocationList: []
                }
              ]
            },
            {
              id: 'd2c26331-a016-47ad-8f1b-44dd3a8c1240',
              apiNo: '1010-5046-01',
              apiDesc:
                '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
              successFlag: true,
              invokedConsumeTime: '28ms',
              ties: 'MDS',
              domain: 'mdm',
              subInvocationList: []
            },
            {
              id: '6361e484-0ba6-4e62-bf43-9f6b5c941600',
              apiNo: '2110-0026-01',
              apiDesc: '处方查询医嘱',
              successFlag: true,
              invokedConsumeTime: '157ms',
              ties: 'BMTS',
              domain: 'cli',
              subInvocationList: []
            },
            {
              id: '67ddbaf5-e404-438e-9027-6fc875b1ad45',
              apiNo: '2180-7031-01',
              apiDesc: '审方结果查询',
              successFlag: true,
              invokedConsumeTime: '42ms',
              ties: 'BMTS',
              domain: 'mat',
              subInvocationList: [
                {
                  id: '6c8ddbce-ba68-4544-9cf0-1d7165d3dc8c',
                  apiNo: '1100-6008-01',
                  apiDesc: '根据库房标识获取药房配置',
                  successFlag: true,
                  invokedConsumeTime: '11ms',
                  ties: 'MDS',
                  domain: 'mat',
                  subInvocationList: []
                }
              ]
            },
            {
              id: '172be134-c3af-44f2-86b1-cd09ce2ed654',
              apiNo: '1010-5026-01',
              apiDesc:
                '根据概念域ids（必填）和体系状态、值状态查询值、值（值名称、拼音码、五笔码、valueNo）模糊查询值集列表',
              successFlag: true,
              invokedConsumeTime: '25ms',
              ties: 'MDS',
              domain: 'mdm',
              subInvocationList: []
            }
          ]
        }
      ]
    },
    {
      id: 'e4a9c7b4-91c7-46aa-96a3-9419236b5dfe',
      apiNo: '3210-1501-04',
      apiDesc: '查询菜单的操作设置项列表',
      successFlag: true,
      invokedConsumeTime: '32ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: 'db50d460-2840-4673-befc-441bc5433893',
          apiNo: '1120-0375-01',
          apiDesc: '根据菜单标识列表查询操作设置项列表',
          successFlag: true,
          invokedConsumeTime: '6ms',
          ties: 'MDS',
          domain: 'fin',
          subInvocationList: []
        },
        {
          id: '6fd687e4-754e-48e6-aa72-c1d71fbdfbaf',
          apiNo: '1120-0376-01',
          apiDesc: '根据操作设置项标识列表查询操作设置项列表',
          successFlag: true,
          invokedConsumeTime: '16ms',
          ties: 'MDS',
          domain: 'fin',
          subInvocationList: []
        }
      ]
    },
    {
      id: 'c50915df-558f-444e-8dcd-85926cd08c6b',
      apiNo: '3210-1501-02',
      apiDesc: '根据用户标识查询可访问的系统及应用菜单',
      successFlag: true,
      invokedConsumeTime: '480ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '3f8304a2-fa7e-46d2-8235-72dc0610cc12',
          apiNo: '1010-3009-01',
          apiDesc:
            '根据userId查询应用系统,获取用户可以登入的系统(包含用户自身和对应角色的)',
          successFlag: true,
          invokedConsumeTime: '137ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        },
        {
          id: '259c7627-d5ef-4f7b-904c-49698fb93e48',
          apiNo: '1010-3033-01',
          apiDesc:
            '根据用户Id（必选），系统id（必选）查询应用菜单(包含用户自身已选择的菜单和对应角色的菜单)',
          successFlag: true,
          invokedConsumeTime: '329ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        }
      ]
    },
    {
      id: 'bd520a47-f7ca-453b-81c1-f24da9a2d736',
      apiNo: '3210-1501-11',
      apiDesc: '保存快捷键设置',
      successFlag: true,
      invokedConsumeTime: '73ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '0a59cd96-2d4a-4cc5-9361-359a90b463e6',
          apiNo: '1010-5046-01',
          apiDesc:
            '根据概念域Id和概念Ids查询值集列表,返回指定概念域下对应编码体系下和概念IDs匹配的值集（默认是首选编码体系下）',
          successFlag: true,
          invokedConsumeTime: '8ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        },
        {
          id: '08ba0493-28a3-412d-8744-e2f6eddedf76',
          apiNo: null,
          apiDesc: '保存偏好设置',
          successFlag: true,
          invokedConsumeTime: '56ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        }
      ]
    },
    {
      id: '69cfff52-cf30-4002-bdc3-09bb3b6654ac',
      apiNo: '3210-1030-01',
      apiDesc: '获取个人默认方案',
      successFlag: true,
      invokedConsumeTime: '6ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: []
    },
    {
      id: 'c88863e5-2622-4013-8f8e-0e5aea547190',
      apiNo: '3210-1407-01',
      apiDesc: 'HIS新版本-搜索已配置方案列表',
      successFlag: true,
      invokedConsumeTime: '152ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '228e65b6-f18a-4fba-8f29-ed080e5262a1',
          apiNo: '1010-5057-01',
          apiDesc: '根据值集Ids查询值集列表',
          successFlag: true,
          invokedConsumeTime: '129ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        }
      ]
    },
    {
      id: '68978b32-72ce-453e-8649-d7ef6275ddeb',
      apiNo: '3210-1029-01',
      apiDesc: '保存个人默认方案',
      successFlag: true,
      invokedConsumeTime: '42ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: []
    },
    {
      id: 'c2ea6a10-6312-4287-815d-5727af417eb4',
      apiNo: '3210-1501-02',
      apiDesc: '根据用户标识查询可访问的系统及应用菜单',
      successFlag: true,
      invokedConsumeTime: '246ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '79fcf4dc-3bc1-43ee-8cfc-647860eae0ef',
          apiNo: '1010-3009-01',
          apiDesc:
            '根据userId查询应用系统,获取用户可以登入的系统(包含用户自身和对应角色的)',
          successFlag: true,
          invokedConsumeTime: '90ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        },
        {
          id: '869d563e-4c88-4c10-899e-3598b03ed056',
          apiNo: '1010-3033-01',
          apiDesc:
            '根据用户Id（必选），系统id（必选）查询应用菜单(包含用户自身已选择的菜单和对应角色的菜单)',
          successFlag: true,
          invokedConsumeTime: '143ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        }
      ]
    },
    {
      id: 'fb6d214e-9e9d-4886-8279-3e99ad955e2a',
      apiNo: '3210-1501-08',
      apiDesc: '通过员工id 查询个性化设置',
      successFlag: true,
      invokedConsumeTime: '24ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: 'b542c480-afb7-4378-8d62-53692da3566c',
          apiNo: null,
          apiDesc: '查询偏好设置',
          successFlag: true,
          invokedConsumeTime: '19ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        }
      ]
    },
    {
      id: '04d6d5d4-49e9-47b7-9593-f65bded6fd31',
      apiNo: '3210-1022-01',
      apiDesc: '查询我的全部日程',
      successFlag: true,
      invokedConsumeTime: '29ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: []
    },
    {
      id: 'e43cd2d7-658e-48fa-afd9-83fffda89232',
      apiNo: '3210-1019-01',
      apiDesc: '查询指定医生的通知公告',
      successFlag: true,
      invokedConsumeTime: '26ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: []
    },
    {
      id: '9a66d3c0-0e82-41b0-81fd-505555d3f9af',
      apiNo: '3210-1032-01',
      apiDesc: '查询portal图片发布信息',
      successFlag: true,
      invokedConsumeTime: '8ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: []
    },
    {
      id: 'bfa881ce-9078-43a4-85d2-e5e30bc5ed26',
      apiNo: '4010-3002-01',
      apiDesc:
        '根据用户id（必填）和系统id（必填）查询菜单（包含用户自身和对应角色的菜单）',
      successFlag: true,
      invokedConsumeTime: '284ms',
      ties: 'MAS',
      domain: null,
      subInvocationList: [
        {
          id: 'ee4f2ad8-988c-45de-8659-04e56f9e03d1',
          apiNo: '1010-3006-01',
          apiDesc: '根据系统id（必填）查询该系统的所有菜单api（不支持分页）',
          successFlag: true,
          invokedConsumeTime: '39ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        },
        {
          id: 'edabb1ea-5bce-4e7b-84a6-dec413e61851',
          apiNo: '1010-3033-01',
          apiDesc:
            '根据用户Id（必选），系统id（必选）查询应用菜单(包含用户自身已选择的菜单和对应角色的菜单)',
          successFlag: true,
          invokedConsumeTime: '226ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        }
      ]
    },
    {
      id: 'b999fdc3-0b01-41a9-ab1b-4922365136b7',
      apiNo: '3210-1401-01',
      apiDesc: '个性化查询接口',
      successFlag: true,
      invokedConsumeTime: '24ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: '235eed4e-25c4-4da2-835e-84e90531e10e',
          apiNo: null,
          apiDesc: '查询偏好设置',
          successFlag: true,
          invokedConsumeTime: '18ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        }
      ]
    },
    {
      id: 'f27299b9-0332-496b-8e22-dca319090e79',
      apiNo: '3210-1030-01',
      apiDesc: '获取个人默认方案',
      successFlag: true,
      invokedConsumeTime: '2ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: []
    },
    {
      id: '55f742a5-d7c6-4608-a3a9-ab0af7c9468f',
      apiNo: '3210-1407-01',
      apiDesc: 'HIS新版本-搜索已配置方案列表',
      successFlag: true,
      invokedConsumeTime: '39ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: 'd71d7f72-0f77-4f61-8bc1-28dd71b2435d',
          apiNo: '1010-5057-01',
          apiDesc: '根据值集Ids查询值集列表',
          successFlag: true,
          invokedConsumeTime: '21ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        }
      ]
    },
    {
      id: 'b150a974-4683-4016-9e97-cde01ecf0684',
      apiNo: '3210-1029-01',
      apiDesc: '保存个人默认方案',
      successFlag: true,
      invokedConsumeTime: '47ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: []
    },
    {
      id: '5820f595-4dd8-4573-a1cf-6d47b022fd91',
      apiNo: '4010-3017-01',
      apiDesc:
        '根据userId获取用户可以登入的系统信息(包含用户自身和对应角色的菜单)',
      successFlag: true,
      invokedConsumeTime: '98ms',
      ties: 'MAS',
      domain: null,
      subInvocationList: [
        {
          id: '1af65e03-7c32-428f-b63c-7b2c9c919be1',
          apiNo: '1010-3009-01',
          apiDesc:
            '根据userId查询应用系统,获取用户可以登入的系统(包含用户自身和对应角色的)',
          successFlag: true,
          invokedConsumeTime: '75ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        },
        {
          id: 'bbf2c8b0-b493-4fce-89b2-845339e14357',
          apiNo: '1010-3021-01',
          apiDesc: '查询系统别名信息',
          successFlag: true,
          invokedConsumeTime: '11ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        }
      ]
    },
    {
      id: '9fdba252-ad69-43b8-9abe-14834e9b120f',
      apiNo: '3210-1081-01',
      apiDesc: 'portal入口中心数据统计',
      successFlag: true,
      invokedConsumeTime: '80ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: [
        {
          id: 'd3f560c0-2d50-4885-9883-95a8304ad4a0',
          apiNo: '3152-71003-01',
          apiDesc: '就诊列表人数统计',
          successFlag: true,
          invokedConsumeTime: '8ms',
          ties: 'AMTS',
          domain: 'enc',
          subInvocationList: []
        },
        {
          id: '1d4a3bac-3405-4ae5-9054-acbd9e286f82',
          apiNo: '3151-2016-01',
          apiDesc: '查询住院床位卡计数',
          successFlag: true,
          invokedConsumeTime: '47ms',
          ties: 'AMTS',
          domain: 'enc',
          subInvocationList: [
            {
              id: 'fce33b8f-e146-4dbb-823a-73742920b74d',
              apiNo: '1010-4049-01',
              apiDesc: '根据员工ids查询组织信息',
              successFlag: true,
              invokedConsumeTime: '21ms',
              ties: 'MDS',
              domain: 'mdm',
              subInvocationList: []
            },
            {
              id: '88acd0a5-38c7-4b25-ac1b-45338c0ca1f0',
              apiNo: '1010-4049-01',
              apiDesc: '根据员工ids查询组织信息',
              successFlag: true,
              invokedConsumeTime: '9ms',
              ties: 'MDS',
              domain: 'mdm',
              subInvocationList: []
            }
          ]
        }
      ]
    },
    {
      id: '6ead2699-d60f-49a4-9bfb-a0a5fd3b6690',
      apiNo: '3210-1022-01',
      apiDesc: '查询我的全部日程',
      successFlag: true,
      invokedConsumeTime: '5ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: []
    },
    {
      id: '963db157-2bc4-4db6-87af-24f08f98723b',
      apiNo: '3210-1019-01',
      apiDesc: '查询指定医生的通知公告',
      successFlag: true,
      invokedConsumeTime: '11ms',
      ties: 'BAS',
      domain: null,
      subInvocationList: []
    },
    {
      id: 'c92a35c1-7f6f-4db9-99d9-dec8f8625f41',
      apiNo: '4010-3018-01',
      apiDesc: '根据userId和菜单Id获取用户的页面元素',
      successFlag: true,
      invokedConsumeTime: '440ms',
      ties: 'MAS',
      domain: null,
      subInvocationList: [
        {
          id: 'e9fde209-74a7-4dcd-8605-ba2b03f770f2',
          apiNo: '1010-3034-01',
          apiDesc:
            '根据用户Id（必选），菜单id（必选）查询元素(包含用户自身已选择的元素和对应角色的元素)',
          successFlag: true,
          invokedConsumeTime: '433ms',
          ties: 'MDS',
          domain: 'mdm',
          subInvocationList: []
        }
      ]
    }
  ],
  appid: '4002',
  traceid: null,
  hostip: '172.16.7.26'
}
