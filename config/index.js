export const config = {
    /**
     * 公众号配置
     */

    // 公众号APP_ID
    APP_ID: "wx8ce81330832cd44b",

    // 公众号APP_SECRET
    APP_SECRET: "fd8d2891f0024698bc6694174acff62c",

    // 模板消息id
    TEMPLATE_ID: "IYZk4275UI1Kmu1GuxeXJ_h_mZcGxAUl_ZU637Qn8JY",

    // 回调消息模板id, 用来看自己有没有发送成功的那个模板
    CALLBACK_TEMPLATE_ID: "circle299",

    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如
    USERS: [{name: '男朋友', id: "DingJY0317"},],
    // 接收成功回调消息的微信号，（一般来说只填自己的微信号, name填不填无所谓）
    CALLBACK_USERS: [{name: '自己',id: "circle299"},],
     
    /**
     * 信息配置
     */

    /** 天气相关 */

    // 所在省份
    PROVINCE: "安徽",
    // 所在城市
    CITY: "合肥",

      /** 日期相关 */

    // 在一起的日子，格式同上
    LOVE_DATE: "2022-07-30",
   
    /** 每日一言 */

    // 好文节选的内容类型
    // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
    LITERARY_PREFERENCE: ""


    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是我们结婚的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}

// 共推送 {{need_post_num.DATA}}  人
// 成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
// 成功用户: {{success_post_ids.DATA}}
// 失败用户: {{fail_post_ids.DATA}}
