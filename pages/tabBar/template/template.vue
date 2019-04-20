<template>
	<view class="page">
		<page-head :title="title"></page-head>
		<view class="uni-product-list">
		<view class="uni-common-pl">演示用小白接口如何查询模型的数据（下列数据来自模型uniapp，具体可通过教程部署)</view>
			<form @submit="searchOkay()">
				<view class="uni-list">
					<view class="uni-list-cell">
						<view class="uni-list-cell-left">
							输入商品名称
						</view>
						<view class="uni-list-cell-db">
							<input v-model="input" class="uni-input" type="text" placeholder="请输入商品名称" name="title"></input>
						</view>
					</view>
				</view>
				<view class="uni-padding-wrap">
					<view class="uni-btn-v">
						<button type="primary" formType="submit">搜索</button>
					</view>
				</view>
				<view v-for="(item,key) in music" :key="key">
					<view class="uni-list">
						<view class="uni-list-cell">
							<view class="uni-list-cell-left">
								{{item.author}}
							</view>
							<view class="uni-list-cell-db">
								<input v-model="item.title" class="uni-input" type="text" placeholder=" " name="title" disabled></input>
							</view>
						</view>
					</view>
					<view class="page-section page-section-gap" style="text-align: center;">
						<audio style="text-align: left" :src="item.url" :poster="item.pic" :name="item.title" :author="item.author"
						 controls></audio>
					</view>

					<view style="margin-bottom: 20px;">
					</view>
				</view>

			</form>
			<view class="uni-product" v-for="(product,index) in productList" :key="index">
				<view class="image-view">
					<image v-if="renderImage" class="uni-product-image" :src="product.image"></image>
				</view>
				<view class="uni-product-title">{{product.title}}</view>
				<view class="uni-product-price">
					<text class="uni-product-price-favour">￥{{product.originalPrice}}</text>
					<text class="uni-product-price-original">￥{{product.favourPrice}}</text>
					<text class="uni-product-tip">{{product.tip}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import * as okayapi from '../../../components/okayapi/okayapi.js';

	export default {
		data() {
			return {
				title: 'product-list',
				productList: [],
				input: "",
				renderImage: false
			};
		},
		methods: {
			loadData(action = 'add') {
				var params = {
					s: "App.Table.FreeQuery", // 必须，待请求的接口服务名称
					model_name: 'uniapp',
					where: '[["id", ">", "1"]]',
				};
				uni.request({
					url: this.okayapiHost,
					method: 'GET',
					data: okayapi.enryptData(params),
					success: res => {
						this.productList = this.productList.concat(res.data.data.list)
					},
					fail: res => {
						console.log(res);
					},
					complete: () => {}
				});

			},
			searchOkay: function() {
				this.productList = []
				var params = {
					s: "App.Table.FreeQuery", // 必须，待请求的接口服务名称
					model_name: 'uniapp',
					where: '[["title", "LIKE", "' + this.input + '"]]',
				};
				uni.request({
					url: this.okayapiHost,
					method: 'GET',
					data: okayapi.enryptData(params),
					success: res => {
						console.log(res);
						this.productList = this.productList.concat(res.data.data.list)
					},
					fail: res => {
						console.log(res);
					},
					complete: () => {}
				});

			},
		},
		onLoad() {
			this.loadData();
			setTimeout(() => {
				this.renderImage = true;
			}, 300);
		},
		onPullDownRefresh() {
			this.loadData('refresh');
			// 实际开发中通常是网络请求，加载完数据后就停止。这里仅做演示，加延迟为了体现出效果。
			setTimeout(() => {
				uni.stopPullDownRefresh();
			}, 2000);
		},
		onReachBottom() {
			this.loadData();
		}
	};
</script>

<style>

</style>
