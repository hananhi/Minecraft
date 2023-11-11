

    const startBotton=document.getElementById('SB') ;

    

    function start(){

    event.preventDefault(); // Prevent the form from submitting by default

        
    const customURL = 'game.html';
    window.location.href = customURL;
    window.location.assign(customURL);
    
    // Current page won't get saved in the history:
    window.location.replace(customURL); 
    
    
    // Gecko only:
    window.document.location = customURL
    }
    
startBotton.addEventListener('click' ,start);
  
