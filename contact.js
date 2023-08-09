var i = 0;
    var txt = '“Es ist von großem Vorteil, die Fehler, aus denen man lernen kann, recht früh zu machen.” – Winston Churchill'; 
    var speed = 40; 
    
    function typeWriter() {
      if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }