$(document).ready(function() {
    $("#btnAdd").click(function(){
        var content = $("#contentId").val()
        var date = $("#dateId").val()

        $("div.items").prepend(`
        <div class="item active">
                    <div class="col5">
                        <img src="images/lichmau.jfif" alt="lich"/>
                    </div>
                    <div class="col70">
                        <a href="#">${content}</a>
                    </div>
                    <div class="col15">
                        ${date}
                    </div>
                    <div class="col10">
                        <input type="button" value="Xoa"/>
                    </div>
                </div>
        `)
    })
})