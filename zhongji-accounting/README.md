# 中级会计师学习网站

## 📖 项目简介

这是一个完全免费的静态学习网站，专为中级会计师考试备考设计，包含：
- 📚 学习区：按章节在线阅读教材内容
- ✏️ 题库区：做题练习 + 错题集功能
- 📅 学习计划：每日计划制定与进度追踪

## 🚀 快速开始

### 第一步：注册 GitHub 账号
1. 访问 https://github.com
2. 点击 "Sign up" 注册
3. 记住你的用户名

### 第二步：创建仓库
1. 登录 GitHub，点击右上角 "+" → "New repository"
2. 仓库名填写：`你的用户名.github.io`
   - 例如：用户名 zhangsan，就填 `zhangsan.github.io`
3. 选择 "Public"（公开）
4. 勾选 "Add a README file"
5. 点击 "Create repository"

### 第三步：上传文件
1. 进入你的仓库页面
2. 点击 "Add file" → "Upload files"
3. 将本文件夹中的所有文件拖入上传区域
4. 点击 "Commit changes"

### 第四步：开启网站
1. 仓库页面 → "Settings" → 左侧 "Pages"
2. Source 选择 "Deploy from a branch"
3. Branch 选择 "main"，文件夹选 "/(root)"
4. 点击 "Save"
5. 等待 1-2 分钟
6. 访问 `https://你的用户名.github.io`

## 📝 如何导入你的 Word 文档

### 学习内容导入
1. 打开你的 Word 文档
2. 选中一章内容，复制（Ctrl+A → Ctrl+C）
3. 在 `chapters/` 文件夹中创建对应文件：
   - 中级会计实务第1章 → `chapters/shiwu_1.html`
   - 财务管理第3章 → `chapters/caiwu_3.html`
   - 经济法第2章 → `chapters/jingji_2.html`
4. 粘贴内容，用 HTML 标签包裹：
   ```html
   <h2>第一章 标题</h2>
   <h3>一、小标题</h3>
   <p>正文内容...</p>
   <ul>
       <li>列表项1</li>
       <li>列表项2</li>
   </ul>
   ```

### 题目导入
1. 打开 `questions.html`
2. 找到 `<script>` 中的 `allQuestions` 数组
3. 按以下格式添加题目：
   ```javascript
   {
       id: 6,                          // 唯一编号，递增
       subject: 'shiwu',               // shiwu/caiwu/jingji
       chapter: 2,                     // 章节号
       type: 'single',                 // single/multiple/judge
       question: '题目内容...',
       options: [
           { label: 'A', text: '选项A' },
           { label: 'B', text: '选项B' },
           { label: 'C', text: '选项C' },
           { label: 'D', text: '选项D' }
       ],
       answer: 'B',                    // 正确答案（多选用 ['A','C']）
       explanation: '解析内容...'
   }
   ```

## 📂 文件结构

```
你的用户名.github.io/
├── index.html          # 首页
├── chapters.html       # 学习区
├── questions.html      # 题库区
├── plan.html           # 学习计划
├── css/
│   └── style.css       # 样式文件
├── js/
│   └── common.js       # 公共脚本
├── chapters/           # 章节内容文件夹
│   ├── shiwu_1.html    # 实务第1章
│   ├── shiwu_2.html    # 实务第2章
│   ├── caiwu_1.html    # 财管第1章
│   └── ...
└── README.md           # 本说明文件
```

## 🎯 功能说明

### 学习区
- 三科切换：中级会计实务（25章）、财务管理（10章）、经济法（7章）
- 已读标记：看过的章节会显示绿色对勾
- 内容展示：点击章节直接在线阅读，无需下载

### 题库区
- **章节练习**：按科目/章节/题型筛选做题
- **错题集**：答错的题自动加入，可手动收藏/移除
- **查看答案**：先做题，点击后显示对错+解析
- **重新作答**：每题可独立重置

### 学习计划
- **每日计划**：添加今日学习任务，勾选完成
- **进度对比表**：近7天计划 vs 实际完成对比
- **可视化图表**：柱状图直观展示学习情况
- **数据统计**：完成率、总任务数等

## 💾 数据存储

所有学习进度、错题集、计划数据都保存在浏览器本地（LocalStorage）：
- ✅ 换设备不丢失（同一浏览器）
- ✅ 无需登录注册
- ⚠️ 清除浏览器数据会丢失
- 💡 建议定期导出重要数据

## 🔧 自定义修改

### 修改网站标题/颜色
编辑 `css/style.css` 中的 `:root` 变量：
```css
:root {
    --primary: #6366f1;        /* 主色调 */
    --success: #22c55e;        /* 成功色 */
    --danger: #ef4444;         /* 危险色 */
}
```

### 添加更多科目
编辑 `chapters.html` 中的 `subject-tabs` 和对应章节列表。

## ❓ 常见问题

**Q: 网站打不开？**
A: 检查仓库名是否完全匹配 `用户名.github.io`，注意大小写。

**Q: 内容显示乱码？**
A: 确保所有 HTML 文件保存为 UTF-8 编码。

**Q: 手机访问排版错乱？**
A: 网站已做响应式设计，如仍有问题请检查是否使用了不支持的 CSS 属性。

**Q: 如何备份数据？**
A: 在浏览器控制台输入 `JSON.stringify(localStorage)` 可复制所有数据。

## 📄 许可证

本项目完全免费开源，仅供个人学习使用。

---

**祝你考试顺利！🎉**
