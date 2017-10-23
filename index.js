$(function () {

    $("#submit").click(function () {
        // $("#posts").empty();
        var template = $('#template').html();
        var newposts = {};
        newposts.id = null;
        newposts.table = $("#ipTb").val();
        newposts.menu = $("#ipmenu").val();
        newposts.staff = $("#ipstaff").val();
        var url = "http://localhost:3000/posts";
        $.post(url, newposts, function (data, status) {
            console.log("Inserted " + data);
            $("#ipTb").val("");
            $("#ipmenu").val("");
            $("#ipstaff").val("");
        });


        $.get(url, function (data) {
           // $("#post_table_no").empty();
           // $("#post_menu").empty();
           // $("#post_staff").empty();
           // $("#post_table_no").append(data[data.length - 1].table);
           // $("#post_menu").append(data[data.length - 1].menu);
           // $("#post_staff").append(data[data.length - 1].staff);

           console.log(data.length);  
           var template = $('#template').html();
           for(var i=data.length;i<=data.length;i++){
               var rendered = Mustache.render(template, data[i-1]);
               $("#posts").append(rendered);
           }

        });

    });



    $("#clear").click(function () {
        function deletepost(id){
            alert('delete ' + id);
          
            //Delete from back end
            $.ajax({
                url: "http://localhost:3000/posts/" + id, // post id
                type: "DELETE" // Use DELETE
            })
          
            //Delete from front end
            $("#post"+id).empty();
          }

    });


});
