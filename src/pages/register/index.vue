<template>
  <div class="container">
    <div class="main">
      <el-form
        :model="ruleForm"
        status-icon
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="账号" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input v-model="ruleForm.checkPass" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >注册</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        pass: "",
        checkPass: "",
      },
    };
  },
  methods: {
    submitForm() {
			const { username, pass, checkPass } = this.ruleForm
      if (username === '') {
				alert('请输入账号')
				return
			}
      if (pass === '') {
				alert('请输入密码')
				return
			}
      if (checkPass === '') {
				alert('请再次输入密码')
				return
			}
      if (pass !== checkPass) {
				alert('两次账号密码不一样')
				return
			}
			alert('注册成功')
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  box-sizing: border-box;
  position: relative;
  width: 100vw;
  height: 100vh;
  .main {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    border: 1px solid #eee;
    padding: 30px 50px 10px 0;
    box-shadow: 0px 3px 3px #c8c8c8;
  }
}
</style>
