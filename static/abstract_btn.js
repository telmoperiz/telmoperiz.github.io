// Click on Abstract Button
function abstract_btn_click(event)
{
    // Pushed btn
    let btn = event.srcElement;

    // Change arrow
    if (btn.getAttribute('aria-expanded') == 'true')
    {
        btn.innerHTML = '&bigtriangleup; Abstract\n';
    }
    else
    {
        btn.innerHTML = ' &bigtriangledown; Abstract\n';
    }
}


// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {

    // Get all multiple choice buttons
    let btns = document.querySelectorAll('.btn-abstract');

    // Add event listener to all
    btns.forEach(function(btn)
    {
        btn.addEventListener('click', abstract_btn_click);
    });
});
