//滚动
var intIdCls=[];//清除计时器
(function($){
	$.fn.myScroll = function(options){
	//默认配置
	var defaults = {
		speed:40,  //滚动速度,值越大速度越慢
		rowHeight:24 //每行的高度
	};
	var opts = $.extend({}, defaults, options),intId = [];
	function marquee(obj, step){
		obj.find("ul").animate({
			marginTop: '-=1'
		},0,function(){
				var s = Math.abs(parseInt($(this).css("margin-top")));
				if(s >= step){
					$(this).find("li").slice(0, 1).appendTo($(this));
					$(this).css("margin-top", 0);
				}
			});
		}
		if(intIdCls.length>1){
			console.log(intIdCls)
			for(var j in intIdCls){clearInterval(intIdCls[j]);}
			intIdCls=[];
		};
		this.each(function(i){
			clearInterval(intId[i]);
			var sh = opts["rowHeight"],speed = opts["speed"],_this = $(this);
			intId[i] = setInterval(function(){
				if(_this.find("ul").height()<=_this.height()){
					clearInterval(intId[i]);
				}else{
					marquee(_this, sh);
				}
			}, speed);
			intIdCls.push(intId[i]);
		});
	}

})(jQuery);
//表格数据滚动
if($("body").width()<1600){
		$('.tableOne').myScroll({
		speed:80, 
		rowHeight:36
	});
}else{
	$('.tableOne').myScroll({
		speed:80, 
		rowHeight:52 
	});
}
if($("body").width()<1600){
		$('.radarChart_body_box').myScroll({
			speed:80, 
			rowHeight:47
		});
}else{
	$('.radarChart_body_box').myScroll({
		speed:80, 
		rowHeight:52 
	});
}
/******************************************/
function chartArea(AllName,AllData,Alltime){
	var dom = document.getElementById("container");
	var myChart = echarts.init(dom);
	var option = null;
	option = {
		color:["rgba(255, 111, 0,0.8)","rgba(34, 176, 56,0.8)","rgba(0, 108, 255,0.8)"],
	    tooltip:{
	        trigger:'axis',
	        borderColor:"#fff",
	        backgroundColor:"#fff",
	        padding:15,
	        extraCssText: 'box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);',
	        textStyle:{
	        	color:"rgb(51,51,51)",
	        	
	        },
	        axisPointer:{
		            type:'shadow',
		            shadowStyle:{
		            	color:"rgba(231,246,253,0.5)",
	        			
		            	
		            },
		            label:{
		                backgroundColor: '#fff',
		            }
		        },
		    },
		    legend:{
		        data:AllName,
		        left: '0',
		        top:'40',
		        textStyle:{
		        	fontSize:14,
		        }
		        
		    },
		    grid: {
		        left: '0',
		        right:'10px',
		        top:"100px",
		        bottom: '50px',
		        containLabel: true
		    },
		    xAxis : [
		        {
		        	boundaryGap: false,
		            data : Alltime,
		            axisTick:{show: false,},
		            offset:0,
		            axisLine:{
			            lineStyle:{
			                color:'#6e6e6e',
			                 width:0,
			            }
			        } ,
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value',
		            offset:0,
		            axisTick:{show: false,},
		            splitLine:{
		            	show: true,
		            	lineStyle: {
		            		type:"dotted",
					        color: ['#f1f1f1']
					    }
		            },
		            axisLine:{
		                lineStyle:{
		                    color:'#6e6e6e',
		                     width:0,
		                }
		            } ,
		        }
		    ],
			dataZoom: [{
		                type: 'slider',
		                show: true,
		                xAxisIndex: [0],
		                handleSize: 20,//滑动条的 左右2个滑动条的大小
		                height: 10,//组件高度
		                left: 20, //左边的距离
		                right: 15,//右边的距离
		                bottom: 10,//右边的距离
		                handleStyle: {
		                	color:"rgb(0,120,255)",
		                    borderColor: "rgba(0,120,255,0.5)",
		                    borderWidth: "0",
//		                    shadowBlur: 25,
		                    background: "rgb(0,120,255)",
//		                    shadowColor: "rgba(0,120,255,1)",
		                },
		                fillerColor: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
		                    //给颜色设置渐变色 前面4个参数，给第一个设置1，第四个设置0 ，就是水平渐变
		                    //给第一个设置0，第四个设置1，就是垂直渐变
		                    offset: 0,
		                    color: 'rgba(0,120,255,0.5)'
		                }, {
		                    offset: 1,
		                     color: 'rgb(244,244,244)'
		                }]),
		                backgroundColor: 'rgb(244,244,244)',//两边未选中的滑动条区域的颜色
		                borderColor: "rgb(244,244,244)",
		                color:"#000",
		                showDataShadow: false,//是否显示数据阴影 默认auto
		                showDetail: false,//即拖拽时候是否显示详细数值信息 默认true
		                handleIcon: 'M-292,322.2c-3.2,0-6.4-0.6-9.3-1.9c-2.9-1.2-5.4-2.9-7.6-5.1s-3.9-4.8-5.1-7.6c-1.3-3-1.9-6.1-1.9-9.3c0-3.2,0.6-6.4,1.9-9.3c1.2-2.9,2.9-5.4,5.1-7.6s4.8-3.9,7.6-5.1c3-1.3,6.1-1.9,9.3-1.9c3.2,0,6.4,0.6,9.3,1.9c2.9,1.2,5.4,2.9,7.6,5.1s3.9,4.8,5.1,7.6c1.3,3,1.9,6.1,1.9,9.3c0,3.2-0.6,6.4-1.9,9.3c-1.2,2.9-2.9,5.4-5.1,7.6s-4.8,3.9-7.6,5.1C-285.6,321.5-288.8,322.2-292,322.2z',
		                filterMode: 'filter',
			            },
			            //下面这个属性是里面拖到
			            {
			                type: 'inside',
			                show: true,
			                xAxisIndex: [0],
			                start: 1,
			                end: 100
			        }],
		    series:AllData
	};
	if (option && typeof option === "object") {
	    myChart.setOption(option,true,true);
	};
	window.addEventListener("resize",function(){
    	myChart.resize()
    })
}
function mapFun(mapArr){
	var dom = document.getElementById("map");
	var myChart = echarts.init(dom);
	var optionMap = null;
	var convertData = function (data) {
	    var res = [];
	    for (var i = 0; i < data.length; i++) {
	        var geoCoord = geoCoordMap[data[i].name];
	        if (geoCoord) {
	            res.push({
	                name: data[i].name,
	                value: geoCoord.concat(data[i].value)
	            });
	        }
	    }
	    console.log(res)
	    return res;
	};
	optionMap = {
	    backgroundColor: '#fff',
	     tooltip: { 
	     	formatter: function (params) {
	            return params.name + ' : ' + params.value[2];
	        }
	     },
	    geo: {
	        map: 'china',
	        label: {
	            emphasis: {
	                show: false
	            }
	        },
	        left:0,
	        top:0,
	        right:0,
	        bottom:0,
	        itemStyle: {
	            normal: {
	                areaColor: '#e2e3e8',
	                borderColor:"#cbcccc",/**线条颜色*/
					borderWidth:0.5,/**线条宽*/
	            },
	            emphasis: {
	                areaColor: '#cbcccc'
	            }
	        }
	    },
	    series: [
	        {
	            name: 'pm2.5',
	            type: 'effectScatter',
	            coordinateSystem: 'geo',
	            data: convertData(mapArr),
	            
	            symbolSize: function (val) {
	            	//console.log(val[2])
	                return val[2] / 10;
	            },
	            
	            color:'rgba(0,108,255,0.8)',
	            label: {
	                normal: {
	                    show: false
	                },
	                emphasis: {
	                    show: false
	                }
	            },
	            itemStyle: {
	                emphasis: {
	                    borderColor: 'rgba(14, 145, 252, 0.26)',
	                    borderWidth: 10
	                }
	            }
	        }
	    ]
	};
	if (optionMap && typeof optionMap === "object") {
	    myChart.setOption(optionMap, true);
	}
	window.addEventListener("resize",function(){
    	myChart.resize()
    })		
    $("#map").append('<div class="tooltipMap"></div>')
    myChart.on('mouseover', function(params){
    	if(params.color!='rgba(0,108,255,0.8)'){
    		$(".tooltipMap").html(params.name)
			$(".tooltipMap").show()
	        $(".tooltipMap").css("top",params.event.offsetY+10)
	        $(".tooltipMap").css("left",params.event.offsetX+10)
    	}else{
    		$(".tooltipMap").hide()
    	}
    	
    });
    $("#map").on('mouseout', function(params){
	     $(".tooltipMap").hide()
	});
	$(".tooltipMap").mousemove(function(){
		$(".tooltipMap").show()
	});
}


function pieChart1(bottom,position,data){
	var dom = document.getElementById("pieChart1");
	var myChart = echarts.init(dom);
	var app = {};
	option = null;
	option = {
	    tooltip: {
	        trigger: "item",
	        borderColor:"#fff",
	        padding: 10,
	        backgroundColor:"#fff",
        	extraCssText: 'box-shadow: 0 0px 20px 3px rgba(0,0,0,0.3);',
	        formatter:function(val){
	    	return "<h1 style=\"color:#21378d;font-size:16px;font-weight: bold;\">" + val.name + "</h1><p style=\"color:#666;font-size:12px\">\u641C\u7D22\u66DD\u5149\u5360\u6BD4<span style=\"font-size:14px;font-weight: bold;\">" + val.percent + "%</span></p>";
	    },
	    },
	    title : {
		        text: '搜索曝光量分布',
		        x:'center',
		        y:"center"
		},
	    legend: {
	        bottom:bottom,
	        nameGap:'15',
	        itemGap:20,
	        textStyle:{
	            color:"#424242"
	        },
	        data: ["百度", "搜狗搜索", "信息流", "360搜索", "B2B联盟", "其他"],
	    },
    	calculable: true,
    	color:['#001b7d','#0033f3','#3964f9','#7e9bff','#c1ceff','rgb(212,222,254)'],
	    series: [
	        {
	            name: "",
	            type: "pie",
	            radius:position,
	            avoidLabelOverlap: false,
	            label: {
	                normal: {
	                    show: false,
	                    position: 'center'
	                }
	            },
	            data: data
	        }
	    ]
	};
	if (option && typeof option === "object") {
	    myChart.setOption(option, true, true);
	}	
	window.addEventListener("resize",function(){
    	myChart.resize()
    })	
}

function pieChart2(bottom1,bottom,position,data){
	var dom = document.getElementById("pieChart2");
	var myChart = echarts.init(dom);
	var app = {};
	option = null;
	option = {
	    title : {
		        text: '· 搜索曝光设备占比 ·',
		        x:'center',
		        bottom:bottom1
		},
		tooltip: {
	        trigger: 'item',
	        backgroundColor:"#fff",
	        textStyle:{
	        	color:"rgb(51,51,51)",
	        },
        	extraCssText: 'box-shadow: 0 0px 20px 3px rgba(0,0,0,0.3);',
	        formatter: "{a} <br/>{b}: {c} ({d}%)"
		},
		    legend: {
	        bottom:bottom,
	        itemGap:90,
	        data:['移动端搜索','电脑端搜索',]
	    },
	    color:['#47b95d','#115af4'],
	    series: [
	        {
	            name:'访问来源',
	            type:'pie',
	            selectedMode: 'single',
	            radius: position,
	            avoidLabelOverlap: false,
	            label: {
	                normal: {
	                    show: false,
	                    position: 'center'
	                },
	            },
	            labelLine: {
	                normal: {
	                    show: false
	                }
	            },
	            data:data
	        }
	    ]
	};
	if (option && typeof option === "object") {
	    myChart.setOption(option, true);
	}	
	window.addEventListener("resize",function(){
    	myChart.resize()
    })	
}

function radarChart(val1,val2,max){
	var chart1 = echarts.init(document.getElementById("radarChart"));
	var option = {
	    tooltip: {
	    	backgroundColor:"rgba(0,0,0,0.8)",
	        padding:15,
	    },
	    legend: {
	    	orient: 'vertical',
	        data: ['浏览次数', '所占比例'],
	        right:0,
	        bottom:10,
	        itemGap:20
	    },
	    radar: {
	        shape: 'circle',
	        radius:"80%",
	        name: {
	            textStyle: {
	                color: '#666',
	                backgroundColor: '#fff',
	                borderRadius: 3,
	                padding: [3, 5]
	           }
	        },
	        indicator:max
	    },
	    series: [{
	        type: 'radar',
	        color:["rgba(16,124,233,0.6)","rgba(74,182,96,0.4)"],
	        data : [
	            {
	                backgroundColor:"red",
	                value :val1 ,
	                name : '浏览次数',
	                areaStyle: {// 单项区域填充样式
		                normal: {
		                    color: 'rgba(16,124,233,0.6)'       // 填充的颜色。[ default: "#000" ]
		                }
		            }
	            },
	             {
	                value :val2 ,
	                name : '所占比例',
	                areaStyle: {// 单项区域填充样式
		                normal: {
		                    color: 'rgba(74,182,96,0.4)'       // 填充的颜色。[ default: "#000" ]
		                }
		            }
	            }
	        ]
	    }]
	};
	chart1.setOption(option,true,true)	
	window.addEventListener("resize",function(){
    	chart1.resize()
    })	
}

//初始化图表
window.onload=function(){
    //折线图：
	var AllName=['点击数','商机数','转化率'];//产品名
	var AllData=[
        {
            name:'点击数',
            type:'line',
            smooth: true,
            areaStyle: {
            	normal:{
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(255, 111, 0,0.1)'
                    }, {
                        offset: 0.9,
                        color: 'rgba(255, 111, 0,0)'
                    }])
        
                }
            },
            data:[4, 5, 8, 9, 4, 7, 5, 8, 9, 4, 7, 4, 7]
        },
        {
            name:'商机数',
            type:'line',
            smooth: true,
            areaStyle: {
            	normal:{
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(34, 176, 56,0.1)'
                    }, {
                        offset: 0.9,
                        color: 'rgba(34, 176, 56,0)'
                    }])
        
                }
            },
            data:[7, 6, 7, 8, 9, 8, 6, 7, 8, 9, 8, 9, 8]
        },
        {
            name:'转化率',
            type:'line',
            smooth: true,
            areaStyle: {
            	normal:{
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(0, 108, 255,0.1)'
                    }, {
                        offset: 0.9,
                        color: 'rgba(0, 108, 255,0)'
                    }])
        
                }
            },
            data:[4, 3, 10, 4, 9, 10, 3, 10, 4, 9, 10, 9, 10]
        },        
	]//数据
	var Alltime=['周一','周二','周三','周四','周五','周六','周日']
    chartArea(AllName,AllData,Alltime);
    
    //地图
	var mapArr=[
        {name: "海门",value:125},
        {name: "鄂尔多斯",value:155},
        {name: "招远",value:185},
    ];
    mapFun(mapArr);
    
    //环图,饼图
    var data1=[
                {
                    value: 335,
                    name: "百度",
                    itemStyle:{
                        normal:{
                            
                        }
                    }
                },
                {
                    value: 310,
                    name: "搜狗搜索",
                    itemStyle:{
                        normal:{
                            
                            
                        }
                    }
                },
                {
                    value: 234,
                    name: "信息流",
                    itemStyle:{
                        normal:{
                           
                            
                        }
                    }
                   
                },
                {
                    value: 135,
                    name: "360搜索",
                    itemStyle:{
                        normal:{
                           
                            
                        }
                    }
                },
                {
                    value: 1548,
                    name: "B2B联盟",
                    itemStyle:{
                        normal:{
                           
                            
                        }
                    }
                },
                {
                    value: 30,
                    name: "其他",
                    itemStyle:{
                        normal:{
                           
                            
                        }
                    }
                }
            ]
    var data2=[ {value:600, name:'移动端搜索',selected:true}, {value:1000, name:'电脑端搜索'},]
   	if($("body").width()<1600){
		pieChart1(0, ["50%", "75%"],data1);
		pieChart2("30px",0, ["0%", "72%"],data2);
	}else{
		pieChart1(30, ["60%", "88%"],data1);
		pieChart2("60px",30, ["0%", "90%"],data2);
	}
	//雷达图
	var val1=[1, 5, 8, 10, 3, 5,6,8]
	var val2=[3, 6, 2, 1, 6, 7,6,2]
	var max= [
	           { name: 'windows7',max:10},
	           { name: 'windows10',max:10},
	           { name: 'Android',max:10},
	           { name: 'IOS',max:10},
	           { name: 'liunx',max:10},
	           { name: 'MacOS',max:10},
	           { name: '未知',max:10},
	           { name: 'windowsXP',max:10}
	        ]
	radarChart(val1,val2,max)
}
//点击按钮
$(".brokenLine_title_abt a").click(function(){
	$(this).addClass("action").siblings().removeClass("action")
	if($(this).index()==0){//全部
		
	}else if($(this).index()==1){//昨天
		
	}else if($(this).index()==2){//今天
	
	}else if($(this).index()==3){//最近七天
	
	}else if($(this).index()==4){//最近30天
	
	}else{
		alert("出错啦")
	}
	//console.log($(this).index())
	
});

//折线图更新数据
$("#brokenLineAbt").click(function(){
if($("body").width()<1600){
		$('.tableOne').myScroll({
		speed:80, 
		rowHeight:36
	});
}else{
	$('.tableOne').myScroll({
		speed:80, 
		rowHeight:52 
	});
}
if($("body").width()<1600){
		$('.radarChart_body_box').myScroll({
			speed:80, 
			rowHeight:47
		});
}else{
	$('.radarChart_body_box').myScroll({
		speed:80, 
		rowHeight:52 
	});
}})

//雷达图更新数据
$("#radarChartAbt").click(function(){
		//雷达图
	var val1=[0]
	var val2=[0]
	var max= [0
	        ]
	radarChart(val1,val2,max)
})



//日期选择
//console.log(moment().subtract(100, 'days').calendar())
$('#date-range')
.dateRangePicker()
.bind('datepicker-apply',function(event,obj)
{
	//选择时间段后更新数据
    console.log(obj.value.split("to")[0]);
    console.log(obj.value.split("to")[1]);
    $('#date-range').val(obj.value.split("to")[0]+"~"+obj.value.split("to")[1])
})