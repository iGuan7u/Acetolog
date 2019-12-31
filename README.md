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

3. Modify hexo config `_config.yml` to use `Acetolog`

4. Generate new pages
```
$: hexo clean
$: hexo g
```

## Analyze

AcetoLog support [TencentAnalyze](https://mta.qq.com), you can modify the theme config `./theme/Acetolog/_config.yml` to enable it.
