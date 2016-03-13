<script type="text/javascript">  
    var setMyBlog = {
        setCopyright: function() {
            //设置版权信息，转载出处自动根据页面url生成
            var info_str = '<p>作者：<a target="_blank">@gzdaijie</a><br>'+
                '本文为作者原创，转载请注明出处：<a class="uri"></a></p><hr></hr>', 
                info = $(info_str),
                info_a = info.find("a"),
                url = window.location.href;
            $(info_a[0]).attr("href","https://github.com/gzdaijie");
            $(info_a[1]).attr("href",url).text(url);
            $("#cnblogs_post_body").prepend(info);
        },
        setCodeRow: function(){
            // 代码行号显示
            var pre = $("pre.sourceCode"); //选中需要更改的部分
            if(pre && pre.length){
                pre.each(function() {
                    var item = $(this);
                    var lang = item.attr("class").split(" ")[1]; //判断高亮的语言
                    item.html(item.html().replace(/<[^>]+>/g,"")); //将<pre>标签中的html标签去掉
                    item.removeClass().addClass("brush: " + lang +";"); //根据语言添加笔刷
                    SyntaxHighlighter.all();
                })
            }
        },
        setAtarget: function() {
            // 博客内的链接在新窗口打开
            $("#cnblogs_post_body a").each(function(){
                this.target = "_blank";
            }) 
        },
        setContent: function() {
            // 根据h2、h3标签自动生成目录
            var captions_ori = $("#cnblogs_post_body h2"),
                captions = $("#cnblogs_post_body h2,#cnblogs_post_body h3").clone(),
                content = $("<blockquote><h4>目录</h4></blockquote>");
            $("#cnblogs_post_body").prepend(content.append(captions));
            var index = -1;
            captions.replaceWith(function(){
                var self = this;
                if(self.tagName == "H2" || self.tagName == "h2"){
                    // 设置点击目录跳转
                    index += 1;
                    $('<a name="' + '_caption_' + index + '"></a>').insertBefore(captions_ori[index]); 
                    return '<a href="#_caption_' + index + '"><strong>' + self.innerHTML + '</strong></a><br>';
                } else {
                    return self.innerHTML + "<br>";
                }
            });
        },
        runAll: function() {
            /* 运行所有方法
             * setAtarget() 博客园内标签新窗口打开
             * setContent() 设置目录
             * setCopyright() 设置版权信息
             * setCodeRow() 代码行号显示
             */ 
            this.setAtarget(); 
            this.setContent();
            this.setCopyright();
            this.setCodeRow();
        }
    }
    setMyBlog.runAll();
</script>