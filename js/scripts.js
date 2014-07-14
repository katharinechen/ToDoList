$(document).ready(function() {

  $("#form").submit(function(event) {

    var name = $("#name").val();
    var priority = parseInt($("#priority").val());
    var task = $("#task").val();

    var newTask = {"name": name, "priority": priority, "task": task };

    event.preventDefault();

    $(".list").show();
    $("#results").show();
    $("#results").append("<li class='entry'><span class='specific-task'>" + newTask.task + "</span></li>");

    $("#name").val("");
    $("#priority").val("");
    $("#task").val("");

    $(".specific-task").last().click(function() {
      $("#full-list").show();
      $("#full-list h2").text(newTask.name);
      $('#name2').text(newTask.name);
      $('div#priority2').html("<b>Priority: </b>" + newTask.priority);
      $('div#task2').html("<b>Task Assignment: </b>" + newTask.task);
      $('div#buttons').html("<button type='click' id='delete-button'>Mark as Done</button><button type='click' id='hide'>Hide</button>");

      $("#delete-button").click(function(event) {
        $("li").last().remove();
        $("#full-list").hide();
      });

      $("#hide").last().click(function(event){
        $("#full-list").hide();
      });
    });
  });
});
