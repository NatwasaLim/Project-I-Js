$(function(){
    // $("#getdata").click(function(){
    //     $("#posts").empty();

    //     var url = "http://localhost:3000/posts";
    //     $.get(url, function(data){
    //         console.log(data);  
    //         var template = $('#template').html();
    //         for(var i=0;i<data.length;i++){
    //             var rendered = Mustache.render(template, data[i]);
    //             $("#posts").append(rendered);
    //         }
    //     });
    // });

    $("#submit").click(function(){
        // $("#posts").empty();
        console.log("test");
        var newposts = {};
        newposts.id = null;
        newposts.table = $("#exampleFormControlSelect1").val();
        newposts.menu = $("#Inputmenu").val();
        newposts.staff = $("#Inputstaff").val();
        console.log("Table : " + newposts.table);
        console.log("menu : " + newposts.menu);
        console.log("staff : " + newposts.staff);
        
        var url = "http://localhost:3000/posts";
        $.post(url, newposts, function(data, status){
            console.log("Inserted " + data);
        });

        $.get(url, function(data){
            $("#post_table_no").empty();
            $("#post_menu").empty();
            $("#post_staff").empty();
                $("#post_table_no").append(data[data.length-1].table);
                $("#post_menu").append(data[data.length-1].menu);
                $("#post_staff").append(data[data.length-1].staff);

        });


        // $.post("http://localhost:3000/posts", newposts, function (data, status) {
        //     console.log("Inserted " + data);
        // });

        // var template = $('#template').html();
        // var mytext = $("#text").val();
        // console.log("mytext : " + mytext);
        // var rendered = Mustache.render(template, mytext);
        // $("#posts").append(rendered);
        // var url = "http://localhost:3000/posts";
        // $.get(url, function(data){
        //     console.log(data.length);  
        //     var template = $('#template').html();
        //     for(var i=data.length;i<=data.length;i++){
        //         var rendered = Mustache.render(template, data[i-1]);
        //         $("#posts").append(rendered);
        //     }
        // });
    });
    $("#clear").click(function(){
        $("#posts").empty();
       
        });
    });
/*function deleteEmpty(clear){
        for(var k in clear)
         if(k == "children"){
             if(obj[k]){
                     deleteEmpty(obj[k]);
             }else{
                   delete clear.children;
              } 
         }
    }

    for(var i=0;i<data.length;i++){
        deleteEmpty(a.children[i])
}*/