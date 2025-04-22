<el-space direction="vertical" size="large" style="width: 100%; margin-top: 24px;">
    <!-- 回测结果表格 -->
    <el-card class="box-card" header="回测结果">
      <el-table
        :data="resultData"
        border
        style="width: 100%"
        :row-key="'key'"
      >
        <el-table-column prop="key" label="指标" width="150" />
        <el-table-column prop="value" label="数值" />
      </el-table>
    </el-card>

    <!-- 回测结果图表 -->
    <el-card class="box-card" header="策略与基准的累计收益对比">
      <v-chart :option="chartOption" style="width: 100%; height: 400px;"></v-chart>
    </el-card>

    <!-- 与大模型对话 -->
    <el-card class="box-card" header="与大模型对话">
      <el-form @submit.prevent="handleAsk" class="inline-form">
        <el-form-item style="flex: 1;">
          <el-input
            v-model="question"
            placeholder="请输入您的问题"
            style="width: 100%;"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleAsk" :loading="askLoading">
            询问
          </el-button>
        </el-form-item>
      </el-form>
      <el-divider />
      <div v-if="llmAnswer">
        <pre>{{ llmAnswer }}</pre>
      </div>
      <div v-if="llmExtractedJson">
        <pre>{{ llmExtractedJson }}</pre>
      </div>
    </el-card>
  </el-space>