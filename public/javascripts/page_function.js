/**
 * Created by Administrator on 2016/11/13.
 */


var activeTab = "tab1"; //当前的tab页。默认为第一个tab页。
var previousTab;  //上一个打开的tab页。默认为空。
$(function(){
    //实现事件响应函数，当tab页被显示时会触发
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        //获取当前被显示的tab页标签的aria-controls属性值
        activeTab = $(e.target).attr("aria-controls");
        //获取前一个被显示的tab页标签的aria-controls属性值
        previousTab = $(e.relatedTarget).attr("aria-controls");
    });

    //点击带关闭按钮tab页标签上的x后的响应事件
    $("#closetabbtn").click(function(e){
        $(this).parent().parent().css("display","none"); //隐藏tab头，调用remove方法就是删除了
        $("#closetab").css("display","none"); //隐藏tab正文信息，调用remove方法就是删除了
        if(activeTab=="closetab"){ //判断当前tab页是否是带关闭按钮的tab页，如果是，则显示上次打开的tab页
            $('#contentnavid a[href="#'+previousTab+'"]').tab('show'); //显示tab页
        }
        return false; //一定要return false，阻止事件往上冒泡
    });
});