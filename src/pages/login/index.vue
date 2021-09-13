<template>
	<div class="personal">
		<div class="personal-c">
			<div class="head">
				<div class="avatar"></div>
			</div>
			<div class="main">
				<div class="tips">
					<span>请登录</span>
				</div>
				<div class="main-head">
					<span>输入您的手机号</span>
					<span @click="toRegister">注册账号</span>
				</div>
				<div class="form">
					<input v-model="loginInfo.username" placeholder="账号" />
					<input
						v-model="loginInfo.password"
						placeholder="密码"
						type="password"
						password
					/>
				</div>
				<div class="btn">
					<el-button type="success" long @click="userLogin">登录</el-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			loginInfo: {},
      message: {
        username: 'lzn',
        password: '123456'
      }
		}
	},
	methods: {
		userLogin() {
			console.log(this.loginInfo)
			if (!this.loginInfo.username) {
				alert('请输入账号')
				return
			}
			if (!this.loginInfo.password) {
				alert('请输入密码')
				return
			}
			if (this.loginInfo.username !== this.message.username) {
				alert('账号错误')
				return
			}
			if (this.loginInfo.password !== this.message.password) {
				alert('密码错误')
				return
			}
      alert('登录成功')
      this.$router.push('/home')
		},
		toRegister() {
			this.$router.push('/register')
		},
	}
}
</script>

<style lang="less" scoped>
.personal {
	.personal-c {
		width: 660px;
		margin: 0 auto;
		.head {
			height: 186px;
			.avatar {
				width: 200px;
				height: 72px;
				margin: 0 auto;
				padding-top: 128px;
				background: url('../../assets/login/avatar.png') no-repeat center;
				background-size: contain;
			}
		}
		.main {
			width: 100%;
			overflow: hidden;
			.tips {
				overflow: hidden;
				span {
					float: left;
					width: 132px;
					height: 62px;
					font-size: 44px;
					font-family: PingFang SC;
					font-weight: 500;
					line-height: 62px;
					color: rgba(21, 21, 21, 1);
					opacity: 1;
					margin-bottom: 36px;
				}
			}
			.main-head {
				display: flex;
				justify-content: space-between;
				margin-bottom: 14px;
				span {
					width: 196px;
					height: 40px;
					font-size: 28px;
					font-family: PingFang SC;
					font-weight: 500;
					line-height: 30px;
					color: rgba(21, 21, 21, 1);
					opacity: 1;
				}
				span:last-child {
					width: 168px;
					height: 40px;
					font-size: 28px;
					font-family: PingFang SC;
					font-weight: 400;
					line-height: 30px;
					color: rgba(126, 126, 126, 1);
					opacity: 1;
				}
			}
			/deep/.form {
				.ivu-input {
					height: 102px;
					margin: 14px 0px;
					font-size: 28px;
					padding-left: 24px;
					font-family: PingFang SC;
					font-weight: 400;
					color: rgba(126, 126, 126, 1);
				}
				.ivu-input-suffix {
					width: 170px;
					display: block;
					line-height: 120px;
					font-size: 28px;
					font-family: PingFang SC;
					font-weight: 400;
					color: rgba(21, 21, 21, 1);
				}
				.ivu-input-suffix i {
					display: inline-block;
					font-size: 66px;
					margin-top: 50px;
				}
			}
			.btn {
				margin-top: 29px;
				overflow: hidden;
				.ivu-btn-success {
					background-image: linear-gradient(to right, #648324, #7ba22b);
					border: none;
					height: 102px;
					font-size: 32px;
					font-family: PingFang SC;
					font-weight: 400;
					color: rgba(255, 255, 255, 1);
					opacity: 1;
				}
				.clickRegister {
					height: 40px;
					font-size: 28px;
					font-family: PingFang SC;
					font-weight: 400;
					line-height: 44px;
					color: rgba(56, 170, 253, 1);
					opacity: 1;
					float: right;
					margin-top: 36px;
				}
			}
			.tel {
				overflow: hidden;
				margin: 0 auto;
				margin-top: 492px;
				span:first-child {
					font-size: 28px;
					color: #151515;
				}
				span {
					width: 308px;
					height: 85px;
					font-size: 32px;
					font-family: PingFang SC;
					font-weight: 400;
					line-height: 44px;
					color: rgba(56, 170, 253, 1);
					opacity: 1;
				}
			}
		}
	}
}
</style>
