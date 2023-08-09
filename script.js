var i = 0;
    var txt = 'Willkommen auf meiner Website! Mein Name ist Benni. Lesen Sie hier etwas über mich, meine Vergangenheit und meine Zukunft.'; 
    var speed = 40; 
    
    function typeWriter() {
      if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }