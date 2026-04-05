import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        gears: 'Gears',
        guitars: 'Guitars',
      },
      home: {
        title: 'Software Engineer',
        viewGithub: 'View GitHub',
        description:
          "Hi, I'm Wenzhang, a Cloud DevOps Engineer and Full Stack Developer based in Japan. I'm also a passionate guitarist and DTM enthusiast. To learn more about my work experience, feel free to visit my GitHub and tech blogs. Don't hesitate to reach out to me through any of the following platforms.",
      },
      gears: {
        setup2025: 'My Desk Setup 2025 ~ ',
        setup2024: 'My Desk Setup 2024 ~',
        setup2023: 'My Desk Setup 2022 ~ 2023',
        iphone:
          "iPhone: I've been an Apple user for over 10 years and am currently using the iPhone 16 Pro.",
        keyboards:
          "Keychron K2V2 and K3: The K2V2 has red switches, while the K3 has brown switches. Personally, I prefer the typing feel of the K2V2.",
        macbook:
          "M2 Pro MacBook: I've always used Macs for development. Currently, my company provides an M3 Pro MacBook, which has higher specs than my personal MacBook.",
        monitor: 'Portable screen: I don\'t use it much now.',
        beats:
          'Beats Studio: I frequently use them for listening to and creating music.',
        airpods:
          'AirPods (2nd generation): I bought them in 2019 and have used them for many years. They are still in use and very durable.',
      },
      guitars: {
        g00: 'Martin D-28 Street Legend(2025~)',
        g01: 'PRS(2024~)',
        g02: 'Yamaha Mini Guitar(2018~)',
        g03: 'Gibson USA(2018~2023)',
        g04: 'Fender Stratocaster Japan(2017~2019)',
        g05: 'Fender Telecaster Japan(2016~2017)',
        g06: 'Yeah Man!',
        g07: 'Some Old Stuffs',
        g08: 'Guitar And Watches',
        g09: 'Kelord And I(2014) I Miss You Bro.',
      },
    },
  },
  zh: {
    translation: {
      nav: {
        home: '首页',
        gears: '设备',
        guitars: '吉他',
      },
      home: {
        title: '软件工程师',
        viewGithub: '查看 GitHub',
        description:
          '我是Wenzhang，一名常驻日本的云 DevOps 工程师和全栈开发者。我也是一名充满激情的吉他手和 DTM 爱好者。欲了解更多关于我的工作经验，欢迎访问我的 GitHub 和技术博客。随时可以通过以下任何平台与我联系。',
      },
      gears: {
        setup2025: '我的桌面设置 2025 ~ ',
        setup2024: '我的桌面设置 2024 ~',
        setup2023: '我的桌面设置 2022 ~ 2023',
        iphone:
          '苹果老用户了，已使用 Apple 产品超过 10 年，目前使用 iPhone 16 Pro。',
        keyboards:
          'Keychron K2V2 和 K3：K2V2 红轴，K3 茶轴。我个人更喜欢 K2V2 的打字手感。',
        macbook:
          '我一直在使用 Mac 进行开发。目前，公司配备的 M3 Pro MacBook 性能比我个人的Mac更高。',
        monitor: '便携屏：现在用得不多了。',
        beats: 'Beats Studio：我经常用它来听音乐和创作音乐。',
        airpods:
          'AirPods（第二代）：我在 2019 年购买，使用多年，至今仍在使用，非常耐用。',
      },
      guitars: {
        g00: 'Martin D-28 Street Legend(2025~)',
        g01: 'PRS(2024~)',
        g02: 'Yamaha Mini Guitar(2018~)',
        g03: 'Gibson USA(2018~2023)',
        g04: 'Fender Stratocaster Japan(2017~2019)',
        g05: 'Fender Telecaster Japan(2016~2017)',
        g06: 'Yeah Man!',
        g07: '旧友们',
        g08: '吉他和手表',
        g09: '我和Kelord(2014) 朋友我很想你。',
      },
    },
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
