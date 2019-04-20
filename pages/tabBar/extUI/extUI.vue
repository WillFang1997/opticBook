<template>
	<view>
		<page-head :title="title"></page-head>
		<!-- #ifdef MP-WEIXIN -->
		<view class="me-title">
			<view class="me-title-image">
				<open-data type="userAvatarUrl"></open-data>
			</view>
			<view class="me-title-nickname">
				<open-data type="userNickName"></open-data>
			</view>
		</view>
		<!-- #endif -->
		<view>
			<form @submit="login()">
				<view class="uni-list">
					<view class="uni-list-cell">
						<view class="uni-list-cell-left">
							账号
						</view>
						<view class="uni-list-cell-db">
							<input v-model="nickname" class="uni-input" type="text" placeholder=" " name="title"></input>
						</view>
					</view>
				</view>
				<view class="uni-list">
					<view class="uni-list-cell">
						<view class="uni-list-cell-left">
							密码
						</view>
						<view class="uni-list-cell-db">
							<input v-model="password" class="uni-input" type="password" placeholder=" " name="title"></input>
						</view>
					</view>
				</view>
				<view class="uni-padding-wrap">
					<view class="uni-btn-v">
						<button type="primary" formType="submit">登陆</button>
					</view>
				</view>
				<view class="action-row">
					<navigator url="../reg/reg">注册账号</navigator>
					<text>|</text>
					<navigator url="../pwd/pwd">忘记密码</navigator>
				</view>
			</form>
		</view>
	</view>
</template>
<script>
	import * as okayapi from '../../../components/okayapi/okayapi.js';


	export default {
		data() {
			return {
				title: 'login',
				first: '',
				nickname: '',
				password: '',
			}
		},
		methods: {
			login: function() {
				var params = {
					s: "App.Table.FreeQuery", // 必须，待请求的接口服务名称
					model_name: 'user',
					where: '[["username", "=", "' + this.nickname + '"],["user_password", "=", "' + this.password + '"]]'
				};
				uni.request({
					url: this.okayapiHost,
					method: 'GET',
					data: okayapi.enryptData(params),
					success: res => {
						console.log(res);
						let data = res.data.data.list
						if (data.length == 1) {
							uni.showToast({
								icon: 'success',
								title: '登入成功',
							})
							this.user = data[0]
						} else {
							uni.showToast({
								icon: 'none',
								title: '登入失败,请确认账号密码',
							})
						}
					},
					fail: res => {
						console.log(res);
					},
					complete: () => {}
				});
				var str = '';
				for (let key in okayapi.enryptData(params)) {
					str += key + "=" + okayapi.enryptData(params)[key] + '&';
				}
				this.first = this.okayapiHost + '?' + str;
			},
		}
	}
</script>
<style>
	.me-title {
		height: 80px;
		width: 100%;
		background-color: rgb(255, 255, 255);
	}

	.me-title view {
		float: left;
	}

	.me-title-image {
		width: 60px;
		height: 60px;
		margin-top: 10px;
		margin-left: 20px;
		overflow: hidden;
		display: block;
		border-radius: 5px;
		box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
	}

	.me-title-nickname {
		margin: 20px;
	}    .action-row {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
	
	.action-row navigator {
	    color: #007aff;
	    padding: 0 20upx;
	}
</style>
