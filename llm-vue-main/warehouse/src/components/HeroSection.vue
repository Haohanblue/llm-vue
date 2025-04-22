<template>
    <div>
      <!-- 第一个 section -->
    <section class="hero">
        <h1 class="main-title">
            <div class="title-finquent">FinQuent</div>
            <span class="vector-shape">智能金融</span>量化回测平台
        </h1>

        <img src="../assets/vector-1.png" alt="右下角图片" class="bottom-right-image" />
    </section>
  
    <section class="how-it-wor">
        <!-- 左侧部分的图片 -->

        <div class="left-image-container">
            <h2 class="second-left-title">我们的优势</h2>
            <img src="../assets/02.png" alt="" class="left-image" />
        </div>
        
        <!-- 右侧内容部分 -->
        <div class="right-content">
            <!-- 使用 Grid 来排列盒子 -->
            <div class="boxes-container">
            <!-- 左侧的两个盒子 -->
            <div class="s-works" data-wow-delay="0.2s">
                <img src="../assets/img/icon/w2.svg" alt="" class="s-works__icon" />
                <h3 class="semi-title">普惠性</h3>
                <h4 class="h4-text">通过策略生成与一键回测等功能，让非专业用户也能参与量化投资</h4>
            </div>
            <div class="s-works" data-wow-delay="0.3s">
                <img src="../assets/img/icon/w3.svg" alt="" class="s-works__icon" />
                <h3 class="semi-title">智能化</h3>
                <h4 class="h4-text">让原本依赖专业人员手动分析和操作的流程，变得更加自动高效</h4>
            </div>

            <!-- 中间位置的第三个盒子，使用 grid 来控制位置 -->
            <div class="s-works middle-box" data-wow-delay="0.1s">
                <img src="../assets/img/icon/w1.svg" alt="" class="s-works__icon" />
                <h3 class="semi-title">简便性</h3>
                <h4 class="h4-text">无需掌握编程语言和数据建模，即可依赖智能AI自动生成并测试投资策略</h4>
            </div>
            </div>
        </div>
    </section>



  
      <!-- 第三个 section -->
      <section class="thirth-section">
        <div class="auto-container">
            <div class="thirth-title">
                <h2>简要概括<br />该智能金融量化回测平台用到的技术栈</h2>
            </div>
            <div class="clearfix">
                <div class="">
                    <div class="" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div class="inner-box">
                            <h2>外部工具使用 </h2>
                            <div class="icon-box">
                                <span class="border-layer"></span>
                                <i class="iconfont icon-tubiaozhizuomoban-140" style="font-size: 70px;"></i>
                            </div>
                            <p>采用网络搜索引擎等工具搭建智能体系统，丰富拓展了Agent能力，提升智能交互水平。</p>
                        </div>
                    </div>
                </div>
                <div class="">
                    <div class="" data-wow-delay="100ms" data-wow-duration="1500ms">
                        <div class="inner-box">
                            <h2>SQL数据交互 </h2>
                            <div class="icon-box">
                                <span class="border-layer"></span>
                                <i class="iconfont icon-sql" style="font-size: 70px;"></i>
                            </div>
                            <p>采集数据存储至Mysql数据库当中，利用Python的SQLalchemy库完成与Mysql数据库的交互。</p>
                        </div>
                    </div>
                </div>
                <div class="">
                    <div class="" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div class="inner-box">
                            <h2>Agent工作流搭建</h2>
                            <div class="icon-box">
                                <span class="border-layer"></span>
                                <i class="iconfont icon-gongzuoliu" style="font-size: 70px;"></i>
                            </div>
                            <p>利用LangChain框架搭建Agent工作流，引入条件分支，逻辑判断，完成多个模型调用步骤的连接。</p>
                        </div>
                    </div>
                </div>
                <div class="">
                    <div class="" data-wow-delay="300ms" data-wow-duration="1500ms">
                        <div class="inner-box">
                            <h2>大模型API调用</h2>
                            <div class="icon-box">
                                <span class="border-layer"></span>
                                <i class="iconfont icon-damoxing-copy" style="font-size: 70px;"></i>
                            </div>
                            <p>使用市面上商业化大模型提供的OpenAPI完成模型调用，封装了调用接口，可任意选择模型。</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

      <!-- 第四个 section -->
      <section class="fourth-section">
        <div class="container">
            <!-- 左边图片 -->
            <div>
            <img class="showwcase-img" src="../assets/03.png" alt="">
            </div>

            <!-- 右边文字内容 -->
            <div class="text-content">
            <h2>本平台提供以下功能：</h2>
            <h3>🤖 智能问答助手 - 轻松解答金融问题</h3>
            <h3>📈 策略回测系统 - 模拟投资策略</h3>
            <h3>📚 数据展示与分析 - 深度洞察市场变化</h3>
            <!-- 修改为指向 /backtest -->
            <router-link to="/backtest" class="theme_btn border_btn">Have a try</router-link>
            </div>
        </div>
      </section>

    </div>
  </template>
  
  <script setup>
  // 你可以在这里添加逻辑代码，如组件状态或生命周期钩子等
  </script>
  
  <style scoped>
  /* Hero Section */
  .hero {
    height: 100vh;
    background: linear-gradient(to bottom, #3d83f4,#ede7ff);
    color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative; /* 使右下角的图片能相对于这个容器定位 */
  }
  
  /* Main Title */
.main-title {
  font-size: 50px;
  position: relative; /* 改为相对定位 */
  text-align: center; /* 使文本居中 */
  margin-bottom: 400px;
}

.title-finquent {
  display: block; /* 将 FinQuent 设置为块级元素 */
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 10px; /* 为 FinQuent 和后面的文本之间添加一些间距 */
}
  
  /* Vector Shape */
  .vector-shape {
    position: relative;
    display: inline-block;
  }
  
  .vector-shape::before {
    position: absolute;
    content: '';
    left: 0;
    right: 0;
    top: 90%;
    background: url(../assets/img/02.png) no-repeat;
    width: 100%;
    height: 18px;
    z-index: -1;
  }
  
  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    .vector-shape::before {
      display: none;
    }
  }
  
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    .vector-shape::before {
      display: none;
    }
  }
  
  @media (max-width: 767px) {
    .vector-shape::before {
      display: none;
    }
  }
  
  /* 右下角的图片 */
  .bottom-right-image {
    position: absolute;
    bottom: 90px; /* 设置图片距离底部20px */
    right: 20px;  /* 设置图片距离右侧20px */
    width: 500px;  /* 设置图片宽度（根据需要调整） */
    height: auto;  /* 保持图片比例 */
  }

 
  /* Section Container */
.how-it-wor {
  display: flex;
  justify-content: space-between;
  background-color: #ede7ff;
  align-items: center; /* 使整体上下居中 */
  padding: 60px 20px;
}

/* 左侧图片和标题的容器 */
.how-it-wor .left-image-container {
  display: flex;
  flex-direction: column; /* 垂直排列标题和图片 */
  justify-content: center; /* 居中对齐内容 */
  align-items: center; /* 水平居中 */
  height: 100%; /* 确保容器填满其父元素 */
  margin-right: 20px; /* 右侧间距 */
}

/* 左侧标题 */
.how-it-wor .second-left-title {
  font-size: 40px; /* 字体大小 */
  color: #333; /* 字体颜色 */
  text-align: center; /* 居中对齐 */
  margin-bottom: 120px; /* 和图片之间的间距 */
  font-weight: bold; /* 加粗 */
}
/* h4 标签样式 */
.how-it-wor .h4-text {
  font-size: 16px; /* 设置适当的字体大小 */
  color: #333; /* 字体颜色 */
  text-align: center; /* 文本居中 */
  padding: 0 15px; /* 两边的间距，确保内容不贴边 */
  box-sizing: border-box; /* 确保 padding 不影响盒子的宽度 */
  margin-top: 10px; /* 和标题之间的间距 */
}

/* 左侧部分的图片 */
.how-it-wor .left-image {
  width: 100%; /* 设置宽度 */
  height: auto; /* 高度自适应 */
  animation: float-up-down 2s ease-in-out infinite; /* 上下浮动效果 */
  display: block; /* 确保图片为块级元素 */
}

/* 左侧图片的浮动效果 */
@keyframes float-up-down {
  0% {
    transform: translateY(0); /* 初始位置 */
  }
  50% {
    transform: translateY(-10px); /* 向上浮动 10px */
  }
  100% {
    transform: translateY(0); /* 回到初始位置 */
  }
}



/* 右侧内容部分 */
.how-it-wor .right-content {
  width: 50%;
}

/* 使用 Grid 来排列盒子 */
.how-it-wor .boxes-container {
  display: grid;
  grid-template-columns: 1fr 1fr; /* 两列 */
  grid-template-rows: auto; /* 自动调整行高 */
  gap: 30px; /* 盒子之间的间距 */
  position: relative;
}

/* 盒子样式 */
.how-it-wor .s-works {
  width: 300px; /* 盒子的宽度 */
  height: 300px; /* 盒子的高度，保持正方形 */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #ffffff;
  padding-top: 20px; /* 确保图片在盒子的上部分 */
  box-sizing: border-box; /* 确保 padding 不影响布局 */
}

/* 盒子中的图片 */
.how-it-wor .s-works__icon {
  width: 20%;
  height: auto;
  margin-bottom: 15px;
}

/* 盒子的标题 */
.how-it-wor .semi-title {
  font-size: 30px;
  color: #333;
  text-align: center;
}

/* 中间的盒子，使其定位到第二列的中间 */
.how-it-wor .middle-box {
  grid-column: 1; /* 让它位于第1列 */
  grid-row: 1 / span 2; /* 让它在两行中垂直居中 */
  align-self: center; /* 垂直居中 */
}

/*第四部分*/
.fourth-section {
  padding: 80px 20px;
  background-color: #f8f8f8; /* 可根据需要设置背景 */
}

.fourth-section .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap; /* 响应式支持 */
}

.fourth-section .showwcase-img {
    margin-left: 50px;
  max-width: 700px;
  margin-top: 70px;
  width: 100%;
  height: auto;
}

/* 右边文字部分 */
.fourth-section .text-content {
  flex: 1;
  padding-left: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* 各层文字样式（可自定义优化） */
.fourth-section .text-content h3 {
  font-size: 28px;
  margin-bottom: 10px;
  color: #333;
}

.fourth-section .text-content h2 {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #111;
}

.fourth-section .text-content h4 {
  font-size: 22px;
  margin-bottom: 30px;
  color: #555;
}

.theme_btn.border_btn {
  background: transparent;
  margin-top: 100px;
  margin-left: 300px;
  width: fit-content;
  color: #000000;
  border: 2px solid #000108;
  border-radius: 35px;
  padding: 17px 45px;
  font-size: 25px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  line-height: 1;
  display: inline-block;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;

}

/* 悬停样式 */
.theme_btn.border_btn:hover {
  background-color: #000000;
  color: #ffffff;
  border-color: #000000;
}


/* 第三个 section 整体样式 */
.thirth-section {
  background-color: #ede7ff;
  padding: 80px 20px;
}

/* 标题样式 */
.thirth-title {
  text-align: center;
  margin-bottom: 60px;
}

.thirth-title h2 {
  font-size: 36px;
  color: #333;
  line-height: 1.4;
}

/* 清除浮动 */
.clearfix::after {
  content: "";
  display: table;
  clear: both;
}

/* 四个盒子的容器 */
.thirth-section .clearfix > div {
  float: left;
  width: 25%;
  padding: 20px;
  box-sizing: border-box;
}

/* 盒子结构调整，添加一个伪元素用于覆盖动画 */
.inner-box {
  position: relative;
  background: white;
  padding: 30px 20px;
  text-align: center;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  overflow: hidden; /* 限制伪元素不溢出 */
  z-index: 1;
  height: 300px; /* 固定高度 */
}

/* 悬停时的效果 */
.inner-box:hover {
  transform: translateY(-10px);
}

/* 覆盖层动画（红色） */
.inner-box::before {
  content: '';
  position: absolute;
  top: -100%;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #3d83f4;
  transition: top 0.4s ease;
  z-index: 1;
}

/* 悬停时让覆盖层下滑 */
.inner-box:hover::before {
  top: 0;
}

/* 文字层样式，确保在覆盖层之上 */
.inner-box * {
  position: relative;
  z-index: 2;
  transition: color 0.3s ease;
}

/* 悬停时字体变白 */
.inner-box:hover h2,
.inner-box:hover h4,
.inner-box:hover p {
  color: white;
}

/* 保持 icon-box 不受影响 */
.icon-box {
  position: relative;
  margin-bottom: 20px;
  z-index: 2; /* 保证图标不被红色盖住 */
}

/* p 标签样式 */
.inner-box p {
  font-size: 16px;
  color: #666;
  line-height: 1.5;
}

/* 设置默认图标颜色 */
.thirth-section .icon-box .iconfont {
    color: #3d83f4;
    transition: color 0.3s ease; /* 添加平滑过渡效果 */
}

/* 鼠标悬停时改变图标颜色 */
.thirth-section .inner-box:hover .iconfont {
    color: white;
}



  </style>
  