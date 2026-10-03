import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        gears: 'Gears',
        guitars: 'Guitars',
      },
      common: {
        toggleTheme: 'Toggle dark mode',
        menu: 'Menu',
      },
      home: {
        title: 'Software Engineer',
        viewGithub: 'View GitHub',
        aboutHeading: 'About',
        onTheWebHeading: 'On the web',
        exploreHeading: 'Explore',
        description:
          "Hi, I'm Wenzhang, a Cloud DevOps Engineer and Full Stack Developer based in Japan. I'm also a passionate guitarist and DTM enthusiast. To learn more about my work experience, feel free to visit my GitHub and tech blogs. Don't hesitate to reach out to me through any of the following platforms.",
      },
      gears: {
        intro: 'My desk setups over the years and the gear I use every day.',
        setup2026: 'My Desk Setup 2026 ~',
        setup2025: 'My Desk Setup 2025 ~ ',
        setup2024: 'My Desk Setup 2024 ~',
        setup2023: 'My Desk Setup 2022 ~ 2023',
        studioDisplay:
          "Studio Display (2026): The picture is stunning, and the built-in speakers sound great. I'd been using a 2K monitor for a long time, and switching to 5K has made everything so much more comfortable to look at.",
        ergotron: 'Ergotron LX: My monitor arm. It is sturdy and very durable.',
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
        intro: "The guitars I've played over the years.",
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
      common: {
        toggleTheme: '切换深色模式',
        menu: '菜单',
      },
      home: {
        title: '软件工程师',
        viewGithub: '查看 GitHub',
        aboutHeading: '关于我',
        onTheWebHeading: '在网上找到我',
        exploreHeading: '看看更多',
        description:
          '我是Wenzhang，一名常驻日本的云 DevOps 工程师和全栈开发者。我也是一名充满激情的吉他手和 DTM 爱好者。欲了解更多关于我的工作经验，欢迎访问我的 GitHub 和技术博客。随时可以通过以下任何平台与我联系。',
      },
      gears: {
        intro: '这些年的桌面布置，以及我每天都在用的设备。',
        setup2026: '我的桌面布置 2026 ~',
        setup2025: '我的桌面布置 2025 ~ ',
        setup2024: '我的桌面布置 2024 ~',
        setup2023: '我的桌面布置 2022 ~ 2023',
        studioDisplay:
          'Studio Display（2026 款）：画面非常漂亮，内置音响的音效也很好。我之前一直用一台 2K 的显示器，换到 5K 后看着非常舒服。',
        ergotron: 'Ergotron LX：显示器支臂，非常结实耐用。',
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
        intro: '这些年我弹过的吉他。',
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

i18next.on('languageChanged', (lng) => {
  document.documentElement.lang = lng;
});

i18next.use(LanguageDetector).use(initReactI18next).init({
  resources,
  supportedLngs: ['en', 'zh'],
  fallbackLng: 'en',
  detection: {
    order: ['localStorage'],
    caches: ['localStorage'],
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
