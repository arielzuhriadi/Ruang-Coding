function view() {
    const navTogle = document.getElementById("navTogle");
    const btnTogle = document.getElementById("btnTogle");
    const main  = document.getElementById("main");
    
    btnTogle.onclick = function() {
        navTogle.style.display = 'block';
    }

    main.onclick = function() {
        navTogle.style.display = 'none';
    }
}