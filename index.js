$(function(){
    $("#getdata").click(function(){
        var url = "http://localhost:3000/posts";
        $.get(url, function(data){
            console.log(data);  
            var template = $('#template').html();
            for(var i=0;i<data.length;i++){
                var rendered = Mustache.render(template, data[i]);
                $("#posts").append(rendered);
            }
        });
    });
});