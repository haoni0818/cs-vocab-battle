/* ============================================================
   排行榜后端配置（共享榜）—— 只需填一行 databaseURL
   ------------------------------------------------------------
   1) 去 https://console.firebase.google.com 建个项目
   2) 左侧 Build → Realtime Database → 创建数据库 → 选「测试模式(test mode)」
   3) 建好后页面顶部有一条形如：
        https://你的项目-default-rtdb.firebaseio.com
        （或亚洲区: https://你的项目-default-rtdb.asia-southeast1.firebasedatabase.app）
   4) 把那条 URL 原样粘到下面引号里，保存、push 到 GitHub。搞定。

   不填(留空)= 只用本机排行榜。这个 URL 是公开安全的(不是密码)。
   ============================================================ */
window.CG_FIREBASE_DB = "https://cs-vocab-default-rtdb.asia-southeast1.firebasedatabase.app";
