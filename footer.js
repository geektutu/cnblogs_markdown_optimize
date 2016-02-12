<script type="text/javascript">
    var pre = $("pre.sourceCode"); //选中需要更改的部分
    if(pre && pre.length){
        var lang = pre.attr("class").split(" ")[1]; //判断高亮的语言
        pre.html(pre.html().replace(/<[^>]+>/g,"")); //将<pre>标签中的html标签去掉
        pre.removeClass();   //移除 class
        pre.addClass("brush: " + lang +";"); //根据语言添加笔刷
        SyntaxHighlighter.all();
    }
</script>