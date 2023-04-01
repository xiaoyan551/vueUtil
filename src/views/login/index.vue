<template>
  <div class="login-container">
    <el-form ref="loginFormRef" :model="loginFormData" :rules="rules" class="login-form">
      <h3 class="login-title">Login</h3>
      <el-form-item prop="username">
        <el-input v-model="loginFormData.username" placeholder="Username"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="loginFormData.password" type="password" placeholder="Password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login(loginFormRef)">Login</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import type { FormInstance, FormRules } from 'element-plus'

const router = useRouter()
const loginFormRef = ref<FormInstance>()

const loginFormData = reactive({
  username: '',
  password: ''
})

const rules = reactive<FormRules>({
  username: [{ required: true, message: 'Please input your username', trigger: 'blur' }],
  password: [{ required: true, message: 'Please input your password', trigger: 'blur' }]
})

const login = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
      resetForm(loginFormRef.value)
      router.push('/home')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.login-form {
  width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.login-title {
  text-align: center;
  margin-bottom: 20px;
}
</style>
