let action = document.querySelector('#Action');
action.addEventListener('click', () => {
    let actionbutton = document.querySelector('#lowerbox');

    actionbutton.innerHTML = '';
    let onlyactionmovies = `
            <div class="box">
                <div class="topbox"><img src="https://image.tmdb.org/t/p/original/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg"></div>
                <div class="innerbox"><span>Deadpool&Wolverine</span><p>07-24-2024</p> </div>
            </div>
            <div class="box">
                <div class="topbox"><img src="https://image.tmdb.org/t/p/original/pjnD08FlMAIXsfOLKQbvmO0f0MD.jpg"></div>
                <div class="innerbox"><span>Twisters</span><p>07-10-2024</p></div>
            </div>`;


    actionbutton.innerHTML = onlyactionmovies;




})
let Thriller = document.querySelector("#Thriller");
Thriller.addEventListener('click', () => {
    let deletelowerbox = document.querySelector('#lowerbox');
    deletelowerbox.innerHTML = '';
    let addlowerbox = ` 
                     <div class="box">
                <div class="topbox"><img src="https://image.tmdb.org/t/p/original/okVLmXL5y18dfN2R4ufMZEGaeCd.jpg"></div>
                <div class="innerbox"><span>Kill</span><p>07-24-2024</p></div>
            </div>
            <div class="box">
                <div class="topbox"><img src="https://image.tmdb.org/t/p/original/2RVcJbWFmICRDsVxRI8F5xRmRsK.jpg"></div>
                <div class="innerbox"><span>A Quiet Place</span><p>06-26-2024</p></div>
            </div>
            <div class="box">
                <div class="topbox"><img src="https://image.tmdb.org/t/p/original/hdFIdXwS8FSN2wIsuotjW1mshI0.jpg"></div>
                <div class="innerbox"><span>Hangman</span><p>07-24-2024</p> </div>
            </div>`;
    deletelowerbox.innerHTML = addlowerbox;



})
let Animation1 = document.querySelector("#Animation");
Animation1.addEventListener('click', () => {
    let deletelowerbox = document.querySelector('#lowerbox');
    deletelowerbox.innerHTML = '';
    let addlowerbox = `
        <div class="box">
                <div class="topbox"><img src="https://image.tmdb.org/t/p/original/3q01ACG0MWm0DekhvkPFCXyPZSu.jpg"></div>
                <div class="innerbox"><span>Bad Boys:Ride or Die</span><p>06-05-2024</p> </div>
            </div>
     `;
    deletelowerbox.innerHTML = addlowerbox;



})
let Horror = document.querySelector("#Horror");
Horror.addEventListener('click', () => {
    let deletelowerbox = document.querySelector('#lowerbox');
    deletelowerbox.innerHTML = '';
    let addlowerbox = `
      <div class="box"id="box9">
                <div class="topbox"><img src="https://image.tmdb.org/t/p/original/8yPSYhooj8nyBbmV3GVdLDwuE7e.jpg"></div>
                <div class="innerbox"><span>The man</span><p>07-24-2024</p> </div>
     `;
    deletelowerbox.innerHTML = addlowerbox;



})
let Drama = document.querySelector("#Drama");
Drama.addEventListener('click', () => {
    let deletelowerbox = document.querySelector('#lowerbox');
    deletelowerbox.innerHTML = '';
    let addlowerbox = `
      <div class="box">
                <div class="topbox"><img src="https://image.tmdb.org/t/p/original/stKGOm8UyhuLPR9sZLjs5AkmncA.jpg"></div>
                <div class="innerbox"><span>Inside Out 2</span><p>06-11-2024</p> </div>
            </div>
            <div class="box">
                <div class="topbox"><img src="https://image.tmdb.org/t/p/original/lgkPzcOSnTvjeMnuFzozRO5HHw1.jpg"></div>
                <div class="innerbox"><span>Despicable Me 4</span><p>07-24-2024</p></div>
            </div>`;
    deletelowerbox.innerHTML = addlowerbox;



})
let Scifi = document.querySelector("#Scifi");
Scifi.addEventListener('click', () => {
    let deletelowerbox = document.querySelector('#lowerbox');
    deletelowerbox.innerHTML = '';
    let addlowerbox = `
         <div class="box">
                <div class="topbox"><img src="https://image.tmdb.org/t/p/original/3q01ACG0MWm0DekhvkPFCXyPZSu.jpg"></div>
                <div class="innerbox"><span>Bad Boys:Ride or Die</span><p>06-05-2024</p> </div>
            </div>
            <div class="box"id="box10">
                <div class="topbox"><img src="https://image.tmdb.org/t/p/original/9SSEUrSqhljBMzRe4aBTh17rUaC.jpg"></div>
                <div class="innerbox"><span>mr robot</span><p>07-24-2024</p> </div>
            </div>
            
     `;
    deletelowerbox.innerHTML = addlowerbox;



})
let All = document.querySelector("#All");
All.addEventListener('click', () => {
    let addlowerbox = document.querySelector('#lowerbox');
    addlowerbox.innerHTML = `

            <div class="box">
                <div class="topbox"><img src="https://image.tmdb.org/t/p/original/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg"></div>
                <div class="innerbox"><span>Deadpool&Wolverine</span><p>07-24-2024</p> </div>
            </div>
            <div class="box">
                <div class="topbox"><img src="https://image.tmdb.org/t/p/original/pjnD08FlMAIXsfOLKQbvmO0f0MD.jpg"></div>
                <div class="innerbox"><span>Twisters</span><p>07-10-2024</p></div>
            </div>
            <div class="box">
                <div class="topbox"><img src="https://image.tmdb.org/t/p/original/stKGOm8UyhuLPR9sZLjs5AkmncA.jpg"></div>
                <div class="innerbox"><span>Inside Out 2</span><p>06-11-2024</p> </div>
            </div>
            <div class="box">
                <div class="topbox"><img src="https://image.tmdb.org/t/p/original/lgkPzcOSnTvjeMnuFzozRO5HHw1.jpg"></div>
                <div class="innerbox"><span>Despicable Me 4</span><p>07-24-2024</p></div>
            </div>
            <div class="box">
                <div class="topbox"><img src="https://image.tmdb.org/t/p/original/3q01ACG0MWm0DekhvkPFCXyPZSu.jpg"></div>
                <div class="innerbox"><span>Bad Boys:Ride or Die</span><p>06-05-2024</p> </div>
            </div>
            <div class="box">
                <div class="topbox"><img src="https://image.tmdb.org/t/p/original/okVLmXL5y18dfN2R4ufMZEGaeCd.jpg"></div>
                <div class="innerbox"><span>Kill</span><p>07-24-2024</p></div>
            </div>
            <div class="box">
                <div class="topbox"><img src="https://image.tmdb.org/t/p/original/2RVcJbWFmICRDsVxRI8F5xRmRsK.jpg"></div>
                <div class="innerbox"><span>A Quiet Place</span><p>06-26-2024</p></div>
            </div>
            <div class="box">
                <div class="topbox"><img src="https://image.tmdb.org/t/p/original/hdFIdXwS8FSN2wIsuotjW1mshI0.jpg"></div>
                <div class="innerbox"><span>Hangman</span><p>07-24-2024</p> </div>
            </div>

            <div class="box"id="box9">
                <div class="topbox"><img src="https://image.tmdb.org/t/p/original/8yPSYhooj8nyBbmV3GVdLDwuE7e.jpg"></div>
                <div class="innerbox"><span>The man</span><p>07-24-2024</p> </div>
            </div>
            <div class="box"id="box10">
                <div class="topbox"><img src="https://image.tmdb.org/t/p/original/9SSEUrSqhljBMzRe4aBTh17rUaC.jpg"></div>
                <div class="innerbox"><span>mr robot</span><p>07-24-2024</p> </div>
            </div>
    


`;






})