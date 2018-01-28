var vm = new Vue({
	el: '#s-container',
	data: function() {
		return {
			vName: 'lily',
			vReady: false,
			vReadyText: "数据获取中，请稍后...",
			msgList: [],
			srcUrl:"123",
			m2:[{
				"type": "voice",
				"url": "Sona.mp3",
				"duration": 259,
			}, {
				"type": "voice",
				"url": "tada.wav",
				"duration": 2,
			}]
		};
	},
	computed: {

	},
	watch: {
		
	},
	created: function(){
		this.init()
		this.getShareData()
	},
	methods: {
		init:function(){
			//console.log(audio)
		},
		listenUrl: function (url){
              this.srcUrl = url
        },
		getShareData:function(){
			//ajax请求获取的数据
			this.msgList = [{
				"username": "告白气球",
				"avatar": "http://1.jpg",
				"rank": 2,
				"rate": "80%",
				"type": "voice",
				"url": "Sona.mp3",
				"duration": 259,
				"resId": 107192078

			}, {
				"username": "lily",
				"avatar": "http://1.jpg",
				"rank": 3,
				"rate": "80%",
				"url": "tada.wav",
				"duration": 223,
				"resId": 449205

			},{
				"username": "天魔啊哦",
				"avatar": "http://1.jpg",
				"rank": 5,
				"rate": "90%",
				"url": "https://tps.staff.xdf.cn/tpsfiles/otsdata/ots/2018/1/22/8D80/8D806542-9447-4878-91B4-F6058E390304.mp3",
				"duration": 253,
				"resId": 410316
			}];
			//store.commit("setMsgList",msgList)
			
		},
		ready: function() {
			//store.commit("setPlayReady", true)
		},
		error: function() {
			
		}
	},
	components: {
		'player': Player,
	}

})

