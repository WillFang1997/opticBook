<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-title uni-common-pl"></view>
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					设备
				</view>
				<view class="uni-list-cell-db">
					<picker @change="bindPickerChange" :range="arrays">
						<view class="uni-input">{{arrays[index]}}</view>
					</picker>
				</view>
			</view>
		</view>
		<view>
			<form @submit="submit()">
				<view class="uni-list">
					<view class="uni-list-cell">
						<view class="uni-list-cell-left">
							时间
						</view>
						<view class="uni-list-cell-db">
							<picker @change="bindPickerChangeTime" :range="arrayTime">
								<view class="uni-input">{{arrayTime[indexTime]}}</view>
							</picker>
						</view>
					</view>
				</view>
				<view class="uni-list" style="margin-top: 20px;">
					<view class="uni-list-cell">
						<view class="uni-list-cell-left">
							预约人
						</view>
						<view class="uni-list-cell-db">
							<input v-model="inputName" />
						</view>
					</view>
				</view>
				<view class="uni-list" style="margin-top: 20px;">
					<view class="uni-list-cell">
						<view class="uni-list-cell-left">
							备注
						</view>
						<view class="uni-list-cell-db">
							<input v-model="input" />
						</view>
					</view>
				</view>
				<view class="uni-padding-wrap">
					<view class="uni-btn-v">
						<button type="primary" formType="submit">预约</button>
					</view>
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
				title: '信息光电子学院设备预约',
				input: '',
				inputName: '',
				page: 1,
				array: [],
				arrayTime: [],
				arrays: [],
				index: 0,
				indexTime: 0,
			}
		},
		onLoad: function() {
			this.loadData()
		},
		methods: {
			getAfterFormatDate(days) { // 如果需要计算当前的日期 传 0 即可 (此例是考虑时分秒的情况)
				let dd = new Date()
				dd.setDate(dd.getDate() + days) // 获取days天后的日期
				let y = dd.getFullYear()
				let m = (dd.getMonth() + 1) < 10 ? ('0' + (dd.getMonth() + 1)) : (dd.getMonth() + 1)
				let d = dd.getDate() < 10 ? ('0' + dd.getDate()) : dd.getDate()
				return y + '-' + m + '-' + d
			},
			submit: function() {
				var data = ''
				let date = new Date().getTime()
				let diff = 0
				let day = new Date().getDay()
				switch (this.arrayTime[this.indexTime]) {
					case '本周二上午':
						data = '{"tues_morn":"1"}'
						diff = day - 2 > 0 ? day - 2 : 2 - day
						break;
					case '本周二下午':
						data = '{"tues_after":"1"}'
						diff = day - 2 > 0 ? day - 2 : 2 - day
						break;
					case '下周二下午':
						data = '{"next_tues_after":"1"}'
						diff = day - 2 > 0 ? 7 - day + 2 : 2 - day + 7
						break;
					case '下周二上午':
						data = '{"next_tues_morn":"1"}'
						diff = day - 2 > 0 ? 7 - day + 2 : 2 - day + 7
						break;
					case '本周四上午':
						data = '{"thur_morn":"1"}'
						diff = day - 4 > 0 ? day - 4 : 4 - day
						break;
					case '本周四下午':
						data = '{"thur_after":"1"}'
						diff = day - 4 > 0 ? day - 4 : 4 - day
						break;
					case '下周四下午':
						data = '{"next_thur_after":"1"}'
						diff = day - 4 > 0 ? 7 - day + 4 : 4 - day + 7
						break;
					case '下周四上午':
						data = '{"next_thur_morn":"1"}'
						diff = day - 4 > 0 ? 7 - day + 4 : 4 - day + 7
						break;
					default:
						break;
				}

				var params = {
					s: "App.Table.Update", // 必须，待请求的接口服务名称
					model_name: 'machine',
					id: this.array[this.index]['id'],
					data: data
				};
				uni.request({
					url: this.okayapiHost,
					method: 'GET',
					data: okayapi.enryptData(params),
					success: res => {

					},
					fail: res => {
						console.log(res);
					},
					complete: () => {}
				});

				let bookTime = this.getAfterFormatDate(diff)
				var paramsCreate = {
					s: "App.Table.Create", // 必须，待请求的接口服务名称
					model_name: 'log',
					data: '{"username":"willFang","machine_name":"' + this.arrays[this.index] +
						'","book_time":"' + bookTime + '('+this.arrayTime[this.indexTime]+')","remark":"' + this.input + '","book_status":"1"}'
				};
				uni.request({
					url: this.okayapiHost,
					method: 'GET',
					data: okayapi.enryptData(paramsCreate),
					success: res => {
						uni.showToast({
							icon: 'success',
							title: '预约成功',
						})
						uni.navigateTo({
							url: './API' //到时候改到我的预约
						})
					},
					fail: res => {
						console.log(res);
					},
					complete: () => {}
				});
			},
			loadData(action = 'add') {
				var params = {
					s: "App.Table.FreeQuery", // 必须，待请求的接口服务名称
					model_name: 'machine',
					where: '[["id", ">", "0"]]',
				};
				uni.request({
					url: this.okayapiHost,
					method: 'GET',
					data: okayapi.enryptData(params),
					success: res => {
						let data = res.data.data.list
						let arrays = []
						this.array = data
						for (let i = 0; i < data.length; i++) {
							arrays.push(data[i]['machine_name'])
						}
						//来来来 做个判定 如果今天周二或周四以上，去除本周二跟本周四
						let date = new Date().getDay();
						let arrayTime = []
						if (this.array[this.index]['tues_morn'] == 0 && date < 2) {
							arrayTime.push('本周二上午')
						}
						if (this.array[this.index]['tues_after'] == 0 && date < 2) {
							arrayTime.push('本周二下午')
						}
						if (this.array[this.index]['thur_morn'] == 0 && date < 4) {
							arrayTime.push('本周四上午')
						}
						if (this.array[this.index]['thur_after'] == 0 && date < 4) {
							arrayTime.push('本周四下午')
						}
						if (this.array[this.index]['next_tues_morn'] == 0) {
							arrayTime.push('下周二上午')
						}
						if (this.array[this.index]['next_tues_after'] == 0) {
							arrayTime.push('下周二下午')
						}
						if (this.array[this.index]['next_thur_morn'] == 0) {
							arrayTime.push('下周四上午')
						}
						if (this.array[this.index]['next_thur_after'] == 0) {
							arrayTime.push('下周四下午')
						}
						this.arrayTime = arrayTime
						this.arrays = arrays
					},
					fail: res => {
						console.log(res);
					},
					complete: () => {}
				});
			},
			bindPickerChange: function(e) {
				this.index = e.target.value
				let arrayTime = []
				//来来来 做个判定 如果今天周二或周四以上，去除本周二跟本周四
				let date = new Date().getDay();
				if (this.array[this.index]['tues_morn'] == 0 && date < 2) {
					arrayTime.push('本周二上午')
				}
				if (this.array[this.index]['tues_after'] == 0 && date < 2) {
					arrayTime.push('本周二下午')
				}
				if (this.array[this.index]['thur_morn'] == 0 && date < 4) {
					arrayTime.push('本周四上午')
				}
				if (this.array[this.index]['thur_after'] == 0 && date < 4) {
					arrayTime.push('本周四下午')
				}
				if (this.array[this.index]['next_tues_morn'] == 0) {
					arrayTime.push('下周二上午')
				}
				if (this.array[this.index]['next_tues_after'] == 0) {
					arrayTime.push('下周二下午')
				}
				if (this.array[this.index]['next_thur_morn'] == 0) {
					arrayTime.push('下周四上午')
				}
				if (this.array[this.index]['next_thur_after'] == 0) {
					arrayTime.push('下周四下午')
				}
				this.arrayTime = arrayTime
				this.indexTime = 0

			},
			bindPickerChangeTime: function(e) {
				this.indexTime = e.target.value
			},
			onReachBottom() {
				this.addOkay();
				uni.showLoading({
					title: '加载中'
				})
			}
		}
	}
</script>
