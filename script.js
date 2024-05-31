let onOff = true;
window.onload = function() {
    
    $("#read-more").bind("click", () => { 
        const element =  $("#read-more").text(); 
        if(onOff) {
            $("#read-more").text("close ");
            onOff = false;
        }
        else {
            onOff = true;
            $("#read-more").text("read more...");
        }
    });


}
