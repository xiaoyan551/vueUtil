
  <template>
    <div>
  <el-form :model="form" label-width="80px">
    <el-form-item label="用户名" >
      <el-input v-focus-clear v-model="form.username" ></el-input>
    </el-form-item>
    <el-form-item label="手机号码">
      <el-input v-model="form.phone" v-phone></el-input>
    </el-form-item>
    <el-form-item label="工资">
      <el-input v-two-decimal v-model="form.salary" @blur="onHandle"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="form.password" type="password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm">提交</el-button>
    </el-form-item>
  </el-form>
  <input type="text" v-model="iText" v-two-decimal @blur="handleBlur">
</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElForm, ElFormItem, ElInput, ElButton } from 'element-plus'
const iText = ref('')

const form = ref({
  username: '',
  password: '',
  phone: '',
  salary: 0
})

const submitForm = () => {
  console.log(form.value)
}

const onHandle = () => {
  console.log(form.value.salary)
}
const handleBlur = () => {
  console.log(iText.value)
}

</script>

<style scoped lang="scss">
</style>
