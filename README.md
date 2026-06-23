# Cabo Online 🃏

在线多人卡牌游戏 Cabo 的实时网页版本。创建房间，邀请朋友，链接即玩！

## 游戏特色

- 🎯 **记忆推理** - 记住你的牌，猜测对手的牌
- 👥 **2-5人游戏** - 支持多人实时对战
- ⚡ **快速对局** - 一局约30分钟
- 📱 **移动优先** - 专为手机优化的界面
- 🔗 **链接即玩** - 无需下载，分享链接即可加入
- 🎨 **精美动画** - 流畅的卡牌动画和音效

## 游戏规则

Cabo 是一个记忆和推理卡牌游戏：

1. **目标** - 成为分数最低的玩家
2. **手牌** - 每人4张牌，初始可以窥视自己的牌
3. **回合** - 抽牌、使用技能、或替换手牌
4. **技能** - 窥视、偷看、交换、偷看并交换
5. **配对** - 相同数字的牌可以消除
6. **Cabo** - 认为手牌总和最低时可以喊Cabo结束回合

详细规则请查看游戏内的规则页面。

## 技术栈

- **前端**: Next.js 16 + React 19 + TypeScript
- **样式**: Tailwind CSS v4
- **实时通信**: Socket.IO
- **状态管理**: Zustand
- **数据库**: SQLite (better-sqlite3)
- **音效**: Web Audio API

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000)

### 生产构建

```bash
npm run build
npm start
```

## 项目结构

```
src/
├── app/                    # Next.js 页面
│   ├── page.tsx           # 首页（创建/加入房间）
│   ├── room/              # 等待大厅
│   ├── game/              # 游戏页面
│   ├── history/           # 游戏历史
│   ├── rules/             # 规则页面
│   └── api/               # API 路由
├── components/            # React 组件
│   └── Card.tsx          # 卡牌组件
├── lib/                   # 工具库
│   ├── socket.ts         # Socket.IO 客户端
│   ├── sounds.ts         # 音效模块
│   └── db.ts             # 数据库客户端
├── server/                # 服务端逻辑
│   ├── socket-handler.ts # Socket 事件处理
│   ├── room-manager.ts   # 房间管理
│   └── game/             # 游戏逻辑
│       ├── card-logic.ts     # 卡牌逻辑
│       ├── game-state.ts     # 游戏状态
│       ├── game-actions.ts   # 游戏行动
│       └── view-filter.ts    # 视图过滤
└── store/                 # 状态管理
    └── game-store.ts     # Zustand store
```

## PWA 支持

本项目支持 PWA（渐进式网页应用），可以安装到手机主屏幕：

- 添加 manifest.json
- 支持离线缓存
- 可安装到主屏幕
- 全屏体验

## 开发计划

所有核心功能已完成：

- ✅ 项目初始化和类型定义
- ✅ 数据库和游戏历史
- ✅ Socket.IO 实时通信
- ✅ 房间管理和游戏逻辑
- ✅ 完整的 UI 界面
- ✅ 卡牌动画和音效
- ✅ 回合计时器
- ✅ PWA 支持
- ✅ 游戏历史页面

## 许可证

MIT
