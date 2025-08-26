# Bento Blog with Tags

一个现代化的Bento风格博客，支持标签分类功能。

## 功能特性

- 🏷️ **标签系统**: 每篇博客文章都可以添加多个标签
- 🏠 **首页标签云**: 显示所有可用标签及其文章数量
- 🔍 **标签页面**: 按标签筛选和浏览文章
- 📱 **响应式设计**: 支持各种设备尺寸
- 🎨 **现代UI**: 使用CSS Grid和Glassmorphism设计

## 标签功能使用

### 1. 为博客文章添加标签

在博客文章的frontmatter中添加tags字段：

```markdown
---
title: "文章标题"
description: "文章描述"
image: "图片URL"
pubDate: 2024-01-01
tags: ["标签1", "标签2", "标签3"]
---
```

### 2. 浏览标签

- **首页**: 查看标签云，显示所有标签及其文章数量
- **标签页面**: 访问 `/tags` 查看所有标签的详细列表
- **特定标签**: 点击标签跳转到 `/tags/[标签名]` 查看该标签的所有文章

### 3. 标签组件

项目包含以下标签相关组件：

- `Tag.astro`: 单个标签显示组件
- `TagCloud.astro`: 标签云组件
- `BentoCard.astro`: 博客卡片，显示文章标签

## 项目结构

```
src/
├── components/
│   ├── Tag.astro          # 标签组件
│   ├── TagCloud.astro     # 标签云组件
│   ├── BentoCard.astro    # 博客卡片组件
│   └── Card.astro         # 基础卡片组件
├── content/
│   └── blog/              # 博客文章目录
├── layouts/
│   └── Layout.astro       # 主布局组件
└── pages/
    ├── index.astro         # 首页
    ├── blog/
    │   └── [slug].astro   # 博客文章页面
    └── tags/
        ├── index.astro     # 标签索引页面
        └── [tag].astro     # 特定标签页面
```

## 开发

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览构建结果

```bash
npm run preview
```

## 自定义标签

你可以通过修改以下文件来自定义标签功能：

- `src/content/config.ts`: 修改标签schema
- `src/components/Tag.astro`: 自定义标签样式
- `src/components/TagCloud.astro`: 自定义标签云布局

## 技术栈

- **Astro**: 静态站点生成器
- **TypeScript**: 类型安全
- **CSS Grid**: 现代布局系统
- **Glassmorphism**: 毛玻璃效果设计

## 许可证

MIT License

