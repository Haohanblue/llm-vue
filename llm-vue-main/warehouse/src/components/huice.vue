<!-- src/components/huice.vue -->
<template>
    <el-container>
    <el-header style="background-color: #409EFF; color: white; font-size: 24px;">
      在线回测工具
    </el-header>
    <el-main style="padding: 24px">
      <!-- 用户输入表单 -->
      <el-card class="box-card" header="回测参数与公式">
        <el-form
          ref="elForm"
          :model="form"
          label-width="120px"
          @submit.prevent="handleSubmit"
        >
          <!-- 回测参数 -->
          <el-row :gutter="16">
            <el-col :span="8">
              <el-form-item
                label="回测开始日期"
                prop="start_date"

                :rules="[{ required: true, message: '请输入回测开始日期', trigger: 'blur' }]"
              >
                <el-date-picker

                  v-model="form.start_date"
                  type="date"
                  placeholder="选择日期"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                  style="width: 100%"
                />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item
                label="回测结束日期"
                prop="end_date"

                :rules="[{ required: true, message: '请输入回测结束日期', trigger: 'blur' }]"
              >
                <el-date-picker
                  v-model="form.end_date"
                  type="date"
                  placeholder="选择日期"
                   format="YYYY-MM-DD"
                  value-format="YYYY-MM-DD"
                  style="width: 100%"
                />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item
                label="轮动天数"
                prop="ROTATION_DAYS"
                :rules="[{ required: true, message: '请输入轮动天数', trigger: 'blur' }]"
              >
                <el-input-number
                  v-model="form.ROTATION_DAYS"
                  :min="1"
                  style="width: 100%"
                />
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="16">
            <el-col :span="8">
              <el-form-item
                label="每次轮动选股数量"
                prop="NUM_STOCKS"
                :rules="[{ required: true, message: '请输入每次轮动选股数量', trigger: 'blur' }]"
              >
                <el-input-number
                  v-model="form.NUM_STOCKS"
                  :min="1"
                  style="width: 100%"
                />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item
                label="初始资金"
                prop="INITIAL_MONEY"
                :rules="[{ required: true, message: '请输入初始资金', trigger: 'blur' }]"
              >
                <el-input-number
                  v-model="form.INITIAL_MONEY"
                  :min="0"
                  :formatter="formatMoney"
                  :parser="parseMoney"
                  style="width: 100%"
                />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item
                label="交易佣金比例"
                prop="COMMISSION"
                :rules="[{ required: true, message: '请输入交易佣金比例', trigger: 'blur' }]"
              >
                <el-input-number
                  v-model="form.COMMISSION"
                  :min="0"
                  step="0.00001"
                  style="width: 100%"
                />
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="16">
            <el-col :span="8">
              <el-form-item
                label="交易税比例"
                prop="TAX"
                :rules="[{ required: true, message: '请输入交易税比例', trigger: 'blur' }]"
              >
                <el-input-number
                  v-model="form.TAX"
                  :min="0"
                  step="0.0001"
                  style="width: 100%"
                />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item
                label="滑点比例"
                prop="SLIPPAGE"
                :rules="[{ required: true, message: '请输入滑点比例', trigger: 'blur' }]"
              >
                <el-input-number
                  v-model="form.SLIPPAGE"
                  :min="0"
                  step="0.00001"
                  style="width: 100%"
                />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item
                label="止盈百分比"
                prop="STOP_PROFIT"
                :rules="[{ required: true, message: '请输入止盈百分比', trigger: 'blur' }]"
              >
                <el-input-number
                  v-model="form.STOP_PROFIT"
                  :min="0"
                  :max="1"
                  step="0.01"
                  style="width: 100%"
                />
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="16">
            <el-col :span="8">
              <el-form-item
                label="止损百分比"
                prop="STOP_LOSS"
                :rules="[{ required: true, message: '请输入止损百分比', trigger: 'blur' }]"
              >
                <el-input-number
                  v-model="form.STOP_LOSS"
                  :min="0"
                  :max="1"
                  step="0.01"
                  style="width: 100%"
                />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item
                label="股票池类型"
                prop="STOCK_POOL_TYPE"
                :rules="[{ required: true, message: '请选择股票池类型', trigger: 'change' }]"
              >
                <el-select
                  v-model="form.STOCK_POOL_TYPE"
                  placeholder="请选择股票池类型"
                  style="width: 100%"
                >
                  <el-option label="上证指数" value="上证指数"></el-option>
                  <el-option label="深证成指" value="深证成指"></el-option>
                  <el-option label="上证50" value="上证50"></el-option>
                  <el-option label="中小100" value="中小100"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
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
          <!-- 公式部分 -->
          <el-divider />
          <el-row>
            <el-col :span="24">
              <el-form-item
                label="因子列表"
                prop="factor_list"
                :rules="[{ required: true, message: '请选择因子列表', trigger: 'change' }]"
              >
                <el-select
                  v-model="form.factor_list"
                  multiple
                  placeholder="请选择因子列表"
                  style="width: 100%"
                >
                  <el-option
                    v-for="factor in availableFactors"
                    :key="factor"
                    :label="factor"
                    :value="factor"
                  />
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item
                label="公式"
                prop="formula"
                :rules="[{ required: true, message: '请输入公式', trigger: 'blur' }]"
              >
                <el-input
                  type="textarea"
                  v-model="form.formula"
                  rows="4"
                  placeholder="请输入公式"
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item
                label="Pandas 公式"
                prop="pandas_formula"
                :rules="[{ required: true, message: '请输入 Pandas 公式', trigger: 'blur' }]"
              >
                <el-input
                  type="textarea"
                  v-model="form.pandas_formula"
                  rows="4"
                  placeholder="请输入 Pandas 公式"
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item
                label="公式解释"
                prop="explanation"
                :rules="[{ required: true, message: '请输入公式解释', trigger: 'blur' }]"
              >
                <el-input
                  type="textarea"
                  v-model="form.explanation"
                  rows="3"
                  placeholder="请输入公式解释"
                />
              </el-form-item>
            </el-col>
          </el-row>

          <!-- 提交按钮 -->
          <el-form-item>
            <el-button type="primary" :loading="loading" native-type="submit">
              提交回测
            </el-button>
          </el-form-item>
        </el-form>
      </el-card>

      <!-- 回测结果，回测之后才出现 -->
      <el-card class="box-card" header="回测结果" v-if="result_url">
        <iframe
          :src="result_url"
          style="width: 100%; height: 600px; border: none;"
        />
        </el-card>

    </el-main>
    <el-footer style="text-align: center;">
    </el-footer>
  </el-container>
</template>


<script>
import { ref, reactive } from 'vue';
import axios from 'axios';
import {
  ElContainer,
  ElHeader,
  ElMain,
  ElFooter,
  ElCard,
  ElForm,
  ElFormItem,
  ElRow,
  ElCol,
  ElInput,
  ElInputNumber,
  ElDatePicker,
  ElSelect,
  ElOption,
  ElButton,
  ElDivider,
  ElTable,
  ElTableColumn,
  ElSpace,
  ElMessage,
} from 'element-plus';
import VChart from 'vue-echarts';
import { use } from 'echarts/core';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  DataZoomComponent
} from 'echarts/components';
import { LineChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';


// 注册需要的 ECharts 组件
use([
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  DataZoomComponent,
  LineChart,
  CanvasRenderer
]);

export default {
  name: 'Huice',
  components: {
    ElContainer,
    ElHeader,
    ElMain,
    ElFooter,
    ElCard,
    ElForm,
    ElFormItem,
    ElRow,
    ElCol,
    ElInput,
    ElInputNumber,
    ElDatePicker,
    ElSelect,
    ElOption,
    ElButton,
    ElDivider,
    ElTable,
    ElTableColumn,
    ElSpace,
    VChart,
  },
  setup() {
    const elForm = ref(null);

    const form = reactive({
      // 获取当前的unix时间戳
      stock_level: 0.8,
      unix_time: Date.now(),
      start_date: '2020-01-01',
      end_date: '2024-11-01',
      ROTATION_DAYS: 20,
      NUM_STOCKS: 3,
      INITIAL_MONEY: 1000000,
      COMMISSION: 0.00025,
      TAX: 0.0005,
      SLIPPAGE: 0.001,
      STOP_PROFIT: 0.4,
      STOP_LOSS: 0.2,
      STOCK_POOL_TYPE: '中证500', // 这里会被更新为新选项

      factor_list: [
      "brar_ar_hfq",
      "brar_br_hfq",
      "mtm_hfq"
      ],
      formula: "情绪指标 + 动量指标",
      pandas_formula: "(df['brar_ar_hfq'] + df['brar_br_hfq']) / 2 + df['mtm_hfq']",
      explanation: "这个公式通过平均BRAR情绪指标的AR和BR值来衡量市场情绪，同时加上动量指标mtm_hfq来反映股票的动量状态，通过加法运算结合了两者，避免了乘法可能带来的误差放大问题。",

    });

    const availableFactors = [
      "brar_ar_hfq",
      "brar_br_hfq",
      "mtm_hfq"
    ];

    const loading = ref(false);
    const askLoading = ref(false);
    const question = ref('');
    const llmAnswer = ref(null); // 显示 answer 文本
    const llmExtractedJson = ref(null); // 显示 extracted_json
    const result_url = ref('');
    const tableColumns = [
      {
        label: '指标',
        prop: 'key',
        width: '150',
      },
      {
        label: '数值',
        prop: 'value',
      },
    ];

    const resultData = ref([]);

    const chartOption = ref({
      title: {
        text: '策略与基准的累计收益对比',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
        },
      },
      legend: {
        data: ['策略收益', '基准收益'],
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [],
        axisLabel: {
          rotate: 45,
        },
      },
      yAxis: {
        type: 'value',
        name: '累计净收益率 (%)',
        axisLabel: {
          formatter: '{value}%',
        },
      },
      dataZoom: [
        {
          type: 'slider',
          start: 0,
          end: 100,
        },
        {
          type: 'inside',
        },
      ],
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      series: [
        {
          name: '策略收益',
          type: 'line',
          smooth: true,
          data: [],
          lineStyle: {
            color: '#c23531',
          },
          label: {
            show: false,
          },
        },
        {
          name: '基准收益',
          type: 'line',
          smooth: true,
          data: [],
          lineStyle: {
            color: '#2f4554',
          },
          label: {
            show: false,
          },
        },
      ],
    });

    // 格式化初始货币显示
    const formatMoney = (value) => {
      if (typeof value !== 'number') return value;
      return `￥ ${value.toLocaleString()}`;
    };

    const parseMoney = (value) => {
      return value.replace(/￥\s?|(,*)/g, '');
    };

    const handleSubmit = async () => {
      // 验证表单
      // 更改unix_time为当前时间戳
      form.unix_time = Date.now();
      form.formula_dict ={
        factor_list : form.factor_list,
        formula : form.formula,
        pandas_formula : form.pandas_formula,
        explanation : form.explanation,
      }
      elForm.value.validate(async (valid) => {
        if (!valid) {
          ElMessage({
            message: '请检查表单输入',
            type: 'warning',
          });
          return;
        }

        loading.value = true;
        try {
          console.log('提交的表单数据:', form);
          const response = await axios.post('/run', form);
          const data = response.data.data;
          // 假设返回的数据结构与描述一致
          const {
            strategy_return,
            strategy_return_rate,
            benchmark_return,
            alpha,
            beta,
            sharpe,
            max_drawdown,
            win_rate,
            max_consecutive_gains,
            max_consecutive_losses,
            trade_log,
            strategy_returns_list_rounded,
            benchmark_returns_list_rounded,
            dates_list,
            result_url: newResultUrl,
          } = data;
          result_url.value = newResultUrl;
          console.log('回测结果:', result_url.value);
          ///
          // 更新表格数据
          resultData.value = [
            { key: '策略收益', value: strategy_return },
            { key: '收益率', value: `${strategy_return_rate}%` },
            { key: '基准收益', value: `${benchmark_return}%` },
            { key: 'Alpha', value: alpha },
            { key: 'Beta', value: beta },
            { key: '夏普比率', value: sharpe || '无数据' },
            { key: '最大回撤', value: `${max_drawdown}%` },
            { key: '胜率', value: `${win_rate}%` },
            { key: '最大连涨天数', value: `${max_consecutive_gains} 天` },
            { key: '最大连跌天数', value: `${max_consecutive_losses} 天` },
          ];

          // 更新图表数据
          // chartOption.value.xAxis.data = dates_list;
          // chartOption.value.series[0].data = strategy_returns_list_rounded;
          // chartOption.value.series[1].data = benchmark_returns_list_rounded;

          ElMessage({
            message: '回测成功！',
            type: 'success',
          });
        } catch (error) {
          console.error(error);
          ElMessage({
            message: '回测失败，请检查输入参数和网络连接。',
            type: 'error',
          });
        } finally {
          loading.value = false;
        }
      });
    };

    const handleAsk = async () => {
      if (!question.value) {
        ElMessage({
          message: '请输入问题',
          type: 'warning',
        });
        return;
      }
      askLoading.value = true;
      try {
        const response = await axios.post('/ask', { question: question.value });
        const { answer, extracted_json } = response.data;

        // 显示 answer 文本
        llmAnswer.value = answer;

        // 更新表单参数
        if (extracted_json && typeof extracted_json === 'object') {
          Object.assign(form, extracted_json);
          llmExtractedJson.value = JSON.stringify(extracted_json, null, 2);
        } else {
          llmExtractedJson.value = '无提取的 JSON 数据';
        }

        ElMessage({
          message: '大模型已响应',
          type: 'success',
        });
      } catch (error) {
        console.error(error);
        ElMessage({
          message: '请求失败，请稍后再试。',
          type: 'error',
        });
      } finally {
        askLoading.value = false;
      }
    };

    return {
      elForm,
      form,
      loading,
      result_url,
      handleSubmit,
      tableColumns,
      resultData,
      chartOption,
      question,
      handleAsk,
      askLoading,
      llmAnswer,
      llmExtractedJson,
      availableFactors,
      formatMoney,
      parseMoney,
    };
  },
};
</script>

<style>
body {
  background-color: #f0f2f5;
}
.box-card {
  margin-bottom: 20px;
}
.inline-form {
  display: flex;
  width: 100%;
}
</style>
