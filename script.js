var arr = [
    {dp:'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=720&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', story:'https://plus.unsplash.com/premium_photo-1669704098750-7cd22c35422b?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},

    {dp:'https://images.unsplash.com/photo-1492288991661-058aa541ff43?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', story:'https://images.unsplash.com/photo-1627858165123-7ab5fdd7786d?q=80&w=1058&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},

    {dp:'https://images.unsplash.com/photo-1669789749699-4e45eb326265?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', story:'https://images.unsplash.com/photo-1669789749288-6d38002ca5bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D'},

    {dp:'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fG5hdHVyZXxlbnwwfDF8MHx8fDA%3D', story:'https://images.unsplash.com/photo-1529419412599-7bb870e11810?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyZXxlbnwwfDF8MHx8fDA%3D'},
]

var stories = document.querySelector("#stories")
var clutter = ""
arr.forEach(function(elem , idx ){
    clutter += `<div class="story">
                <img id="${idx}" src="${elem.dp}" alt="">
            </div>`
})

stories.innerHTML = clutter

stories.addEventListener("click", function(dets){
    var value = arr[dets.target.id].story
    document.querySelector('#full-screen').style.display = "block"
    document.querySelector('#full-screen').style.backgroundImage = `url(${value})`

    setTimeout(function(){
        document.querySelector('#full-screen').style.display = "none";
    },3000)
    
})

