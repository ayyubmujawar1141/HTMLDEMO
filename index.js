document.getElementById("counter").innerText = 0;
        var count = 0;
        document.getElementById("but").addEventListener("click",function(){
            var divElement = document.getElementById("divelement");
            divElement.innerText = "My changed text";

            count = count + 1;
            document.getElementById("counter").innerText = count;
        });