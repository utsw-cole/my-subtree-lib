(function(){
    const container = document.querySelector('.container');
    const feedBack = document.createElement('div');
    feedBack.className = 'feedback';
    feedBack.textContent = '💬';
    container.appendChild(feedBack);

    feedBack.addEventListener('click', function(event) {
        const answer = prompt('Please provide your feedback:');
        if (answer) {
            feedBack.classList.add('recieved-feedback');
            feedBack.textContent = 'Thank you for your feedback!';
        }
    }, { once: true, capture: false });
}());