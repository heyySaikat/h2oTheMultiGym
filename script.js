document.querySelector('#navBtn').addEventListener('click', function() {
    document.querySelector('.contacts').scrollIntoView({
        behavior: 'smooth'
    });
});

// document.addEventListener('DOMContentLoaded', function() {
//     const gymElement = document.querySelector('.gym');
    
//     gymElement.addEventListener('click', function(event) {
//         event.stopPropagation();
//         gymElement.classList.toggle('active');
//     });

//     document.addEventListener('click', function(event) {
//         if (!gymElement.contains(event.target)) {
//             gymElement.classList.remove('active');
//         }
//     });
// });
// document.addEventListener('DOMContentLoaded', function() {
//     const zumbaElement = document.querySelector('.zumba');
    
//     zumbaElement.addEventListener('click', function(event) {
//         event.stopPropagation();
//         zumbaElement.classList.toggle('active');
//     });

//     document.addEventListener('click', function(event) {
//         if (!zumbaElement.contains(event.target)) {
//             zumbaElement.classList.remove('active');
//         }
//     });
// });
