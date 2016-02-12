<script type="text/javascript">  
    // 博客内的链接在新窗口打开
    $("#cnblogs_post_body a").each(function(){
        $(this).attr("target","_blank");
    }) 
    var pre = $("pre.sourceCode"); //选中需要更改的部分
    if(pre && pre.length){
        pre.each(function() {
            var item = $(this);
            var lang = item.attr("class").split(" ")[1]; //判断高亮的语言
            item.html(item.html().replace(/<[^>]+>/g,"")); //将<pre>标签中的html标签去掉
            item.removeClass();   //移除 class
            item.addClass("brush: " + lang +";"); //根据语言添加笔刷
            SyntaxHighlighter.all();
        })
    }
</script>