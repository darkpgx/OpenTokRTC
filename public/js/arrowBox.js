var source = $('#arrowBox').html();
var template = Handlebars.compile(source);
$('.arrow_box').css('color', 'white');
var mail = {name:"#mailButton", msg: {title: "Send Feedback!", body: "Allows participants to collaborate more effectively remotely. OpenTok takes advantage of Google’s screen-sharing extension for Chrome."}},
    filters = {name: "#filtersButton", msg: {title: "Filters", body: "Some Text!"}},
    roomLink = {name: "#roomLinkButton", msg: {title: "Share Room Link!", body: "Some Text!"}},
    record = {name: "#recordButton", msg: {title: "Start Recording", body: "Some Text!"}},
    chat = {name: "#chatButton", msg: {title: "Text Chat", body: "Some More Text!"}};

var arrow_box_start = function(button){
  var left = $(button.name).offset().left - $('.arrow_box').width();
  $('.arrow_box').css('left', left);
  $('.arrow_box').css('display', 'block');
  var context = button.msg;
  var html = template(context);
  $('.arrow_box').html(html);
}

$("#mailButton").mouseover(function(){
  arrow_box_start(mail);
});

$("#mailButton").mouseleave(function(){
  $('.arrow_box').css('display', 'none');
});

$("#filtersButton").mouseover(function(){
  arrow_box_start(filters);
});

$("#filtersButton").mouseleave(function(){
  $('.arrow_box').css('display', 'none');
});

$("#recordButton").mouseover(function(){
  arrow_box_start(record);
});

$("#recordButton").mouseleave(function(){
  $('.arrow_box').css('display', 'none');
});

$("#roomLinkButton").mouseover(function(){
  arrow_box_start(roomLink);
});

$("#roomLinkButton").mouseleave(function(){
  $('.arrow_box').css('display', 'none');
});

$("#chatButton").mouseover(function(){
  arrow_box_start(chat);
});

$("#chatButton").mouseleave(function(){
  $('.arrow_box').css('display', 'none');
});
