$(function(){
    //重置样式开始
    $('.list-button').css('top',$('#content').innerHeight()/2-$('.list-button').innerHeight()/2+'px')
    
    $('.butt1').click(function(){
        $("button").removeClass("buclic")
        $(".butt1").addClass("buclic")
        $(".odiv").removeClass('divactive')
        $('.div1').addClass('divactive')

        
    })
 


    $('#sobo').click(function(e){
        var mobi = $(".search__input").val()
    $.ajax({
    
    url: "http://localhost:3000/soto/oo",      

    type: "POST",                                   

    data: {name:mobi},

    dataType:'json',
   
    success: function (res) {                    
        if(res.length==0){
            alert('0')
            $("#tab").html("<br> <p>没找到试试下面的吧</p><p></p><p></p><br><h3>《自读课本》、《中国少年报》、《小学生必读文库》、《(史记·汉书)故事选编》、《儿童文学》、《少年文艺》、《叶圣陶作品选》、《莎士比亚戏剧故事选》、《科学小博士文库》、《红岩》(节编本)、《冰心作品选》、《珍爱生命远离毒品》、《小学生自然观察日记》、《上下五千年》、《闪闪的红星》、《十万个斗智故事》、《绿野仙踪》、《神秘岛》、《昆虫记》、《杨红樱校园小说》、《格列佛游记》、《世界著名发明家的故事》、《荷马史诗故事》、《金银岛》、《千家诗》、《百家姓》、《寄小读者》、《假如只有三天光明》、《哈克贝星·费思历险记》</h3>")
        }
        else{
            console.log(res)
        $("#tab").html("<br><p> 书名："+res.name+"</p><p>"+res.author+"</p><p>库存量"+res.static.replace(/\b(0+)/gi,"")+"</p></h3></h3><h3>书是打开心灵的钥匙，不管遇到什么挫折和困难，它都会教导我们该怎样去做，解决好每一件事，并提高我们的勇气</h3>")
        }                   
     },

    error: function (err) {                               
         console.log(err); 
         $("#tab").html("<br> <p>没找到试试下面的吧</p><p></p><p></p><br><h3>《自读课本》、《中国少年报》、《小学生必读文库》、《(史记·汉书)故事选编》、《儿童文学》、《少年文艺》、《叶圣陶作品选》、《莎士比亚戏剧故事选》、《科学小博士文库》、《红岩》(节编本)、《冰心作品选》、《珍爱生命远离毒品》、《小学生自然观察日记》、《上下五千年》、《闪闪的红星》、《十万个斗智故事》、《绿野仙踪》、《神秘岛》、《昆虫记》、《杨红樱校园小说》、《格列佛游记》、《世界著名发明家的故事》、《荷马史诗故事》、《金银岛》、《千家诗》、《百家姓》、《寄小读者》、《假如只有三天光明》、《哈克贝星·费思历险记》</h3>")               

      }

  })
  if(e.preventDefault){
     e.preventDefault();
  }else{
  window.event.returnValue == false;
  }

})
//第二页第一次点击和第二次点击事件
var taja=true

$('.butt2').click(function(){
    $("button").removeClass("buclic")
    $(".butt2").addClass("buclic")
    $(".odiv").removeClass('divactive')
    $('.div2').addClass('divactive')
    
    var pag=1
   if(taja){
    pagpass(pag)
    taja=false
}
 $('#addbook').click(function(){
         layer.open({
         type: 2,
         content: 'addBook.html',
         area: ['320px', '195px'],
         maxmin: false
         })

})	

 $("#tbod").click(function(){
     var ev=ev||window.event;
     var target=ev.target||ev.srcElement;
     if(target.nodeName.toLocaleLowerCase() == 'button'){
         switch(target.id){
                case 'xuigai':
                    var id=target.name
                 $.ajax({
                     type:'get',
                     url:'http://localhost:3000/books/book/'+id,
                     data:{},
                     dataType:'json',
                     success:function(result){
                        window.data=result
                        layer.open({
                              type: 2,
                             content: 'editBook.html',
                              area: ['320px', '195px'],
                              maxmin: false
                            })
                     }

                 })
           
                     break;
                 case 'jiechu':
                 var id=target.name
                 $.ajax({
                     type:'get',
                     url:'http://localhost:3000/books/book/'+id,
                     data:{},
                     dataType:'json',
                     success:function(result){
                        window.data=result
                       layer.open({
                            title:data.name,
                              type: 2,
                             content: 'lend.html',
                              area: ['320px', '300px'],
                              maxmin: false,

                            })
                     }

                 })
                     break;
                     case 'delect':
                         alert('删除')
                         break;


         }
     }
 })

//翻下一页js
$("#nextpge").click(function(){
    

    
    var sels = $('select option')
    var len = sels.length
    var pag=$('#test').val()
    var a=parseInt(pag)+1
    var b=parseInt(pag)

    if(len==pag){
        $('#test').val(len)
    }
    else{

        $("#tbod").empty();
        pagpass(a)
        $('#test').val(a)
        $("select option:nth-child("+b+")").removeAttr("selected", true)

        $("select option:nth-child("+a+")").attr("selected", true);
    }
    
    
})
$("#putpge").click(function(){
 
 var sels = $('select option')
 var len = sels.length
 var pag=$('#test').val()
 var a=parseInt(pag)-1
 var b=parseInt(pag)

 $("#tbod").empty()
        pagpass(a)
 //alert(a)
if(pag==1){
    $('#test').val(1)
}
else{
 $('#test').val(a)
     $("select option:nth-child("+a+")").attr("selected", true);
     $("select option:nth-child("+b+")").removeAttr("selected", true)
    }
})

    //test 事件
    $('#test').change(function(){
        var a= $('#test').val()
        $("#tbod").empty()
        pagpass(a)

    })



})

//发送请求
function pagpass(pag){
    $.ajax({
    
    url: "http://localhost:3000/soto/"+pag ,     

    type: "GET",                                   

    data: {},

    success: function (res) {                    
      
        for(var i=0;i<res.length;i++){
            
            $("#tbod").append("<tr><td>"+res[i].id.replace(/\b(0+)/gi,"")+"</td><td>"+res[i].name+"</td><td>"+res[i].author+"</td><td>"+res[i].static.replace(/\b(0+)/gi,"")+"</td><td>"+res[i].rows+"</td><td><button id='xuigai'  name="+res[i].id+"  type='button'>修改</button><button id='jiechu' name="+res[i].id+" type='button'>借办</button></td></tr>")				
           
        }  
     },

    error: function (err) {                               
         console.log(22);                

      }

  })
}
// if(taja){
// 	alert(taja)
// 	pagpass(pag)
// 	taja=false
// }


$('.butt3').click(function(){
    $("button").removeClass("buclic")
    $(".butt3").addClass("buclic")

    $(".odiv").removeClass('divactive')
    $('.div3').addClass('divactive')
    
})

$('.butt4').click(function(){
    $("button").removeClass("buclic")
    $(".butt4").addClass("buclic")
    $(".odiv").removeClass('divactive')
    $('.div4').addClass('divactive')
    
})

$('.butt5').click(function(){
    $("button").removeClass("buclic")
    $(".butt5").addClass("buclic")
    $(".odiv").removeClass('divactive')
    $('.div5').addClass('divactive')
    
})




})