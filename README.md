# Acetolog

A beautiful & simple hexo theme. Inspired by [typology](https://demo.mekshq.com/typology/) and [Bear](https://demo.mekshq.com/typology/). Aiming to be a simple but elegant blog theme.

![ScreenShot](./screenshot/1.png)

[LiveDemo](https://www.iguan7u.cn)

## Dependency

Acetolog denpende on some extra hexo plugins, in order to have best experience, you should install all of them.

- hexo-renderer-pug
- hexo-renderer-sass
- hexo-wordcount
- hexo-auto-excerpt

```
$: npm install hexo-renderer-pug hexo-renderer-sass hexo-wordcount hexo-auto-excerpt
```

## Install

1. Enter hexo theme folder
```
$: cd themes
```

2. Clone Acetolog from github
```
$: git clone https://github.com/iGuan7u/Acetolog
```

3. Modify hexo config change theme to `Acetolog`
```
theme: Acetolog
```

4. Generate new pages
```
$: hexo clean
$: hexo g
```

## Custom

### Comment

- [Gitalk](https://github.com/gitalk/gitalk)
Gitalk is based on Github issus. It requires less resources than disqus, saving your website loading time, a lot.
By enaling `gitalk` config in acetolog theme `theme/Acetolog/_config.yml` to use it. **Recommanded**

- [Disqus](https://disqus.com)
You can enable `disqus` config in theme config `theme/Acetolog/_config.yml`.

### Analytice

Acetolog support: 

- [GoogleAnalytice](https://analytics.google.com)
- [TencentAnalytice](https://mta.qq.com)
- [BaiduAnalytice](https://tongji.baidu.com)

You can modify the theme config `theme/Acetolog/_config.yml` to enable which one you prefer.

### Dark Mode

Now Acetolog support **Dark Mode**!
You can change the color you prefer in `theme/Acetolog/source/scss/_var.scss`, of course, you can disable it by commented the code below in `theme/Acetolog/source/css/style.scss`

```
@import "../scss/darkTheme";
```

### Main Theme Color

You can modify the main color to your prefer one, which in `$theme_color` in `theme/Acetolog/source/scss/_var.scss`.

### IPC License

You can enable it in theme config `theme/Acetolog/_config.yml`, chinese website may need it.

## License
MIT
