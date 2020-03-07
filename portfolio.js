window.onload = function(){
//SET CLONES
    let slides = document.querySelectorAll('.slides');
    const slider = document.querySelector('#slider');
    const lastSlideClone = slides[slides.length-1].cloneNode(true);
    const oneBeforeLastSlideClone = slides[slides.length-2].cloneNode(true);
    const firstSlideClone = slides[0].cloneNode(true);
    const secoundSlideClone = slides[1].cloneNode(true);
    const setSlidesClones = ()=>{
        slider.prepend(lastSlideClone);
        slider.prepend(oneBeforeLastSlideClone);
        slider.append(firstSlideClone);
        slider.append(secoundSlideClone);
        //set activeSphere & update slides
        lastSlideClone.classList.add('activeSphere');
        slides = document.querySelectorAll('.slides');
    }
    setSlidesClones();  







//SLIDER
    let shiftCounter= 0;
    
    const triggers = document.querySelectorAll('.slides .sphereContainer');
    const startMouseCoord = {
        'x':0,
        'y':0
    };
    const endMouseCoord = {
        'x':0,
        'y':0
    };

    
    


    const updateActiveStatus = ()=>{
        for(slide of slides)
            slide.classList.remove('activeSphere');
        slides[shiftCounter+1].classList.add('activeSphere');
    };
    const setSliderTranslateY = ()=>{
        const oneSlideHeight = slides[0].offsetHeight;
        slider.style.transform = `translateY(-${oneSlideHeight * shiftCounter}px) translateX(0px)`;
    };
    const setSliderTranslateX = ()=>{
        const oneSlideWidth = slides[0].offsetWidth;
        slider.style.transform = `translateX(-${oneSlideWidth * shiftCounter}px) translateY(0px)`;
    };
    const horizontalMove=()=>{
        //przeskok
   
        if(endMouseCoord.x < startMouseCoord.x && shiftCounter < triggers.length-3)
            shiftCounter++;
        else if(endMouseCoord.x > startMouseCoord.x && shiftCounter > 0)
            shiftCounter--;

        setSliderTranslateX();
        updateActiveStatus();
    };
    const verticalMove=()=>{
        if(endMouseCoord.y < startMouseCoord.y && shiftCounter < triggers.length-3)
            shiftCounter++;
        else if(endMouseCoord.y > startMouseCoord.y && shiftCounter > 0)
            shiftCounter--;

        setSliderTranslateY();
        updateActiveStatus();
    };
    const checkMoveDirection = (evt)=>{
        if(startMouseCoord.x !== evt.clientX && startMouseCoord.y !== evt.clientY){
            if(evt.changedTouches){
                endMouseCoord.x = evt.changedTouches[0].clientX;
                endMouseCoord.y = evt.changedTouches[0].clientY;
                document.removeEventListener('touchend',checkMoveDirection);
            }else{
                endMouseCoord.x = evt.clientX;
                endMouseCoord.y = evt.clientY;
                document.removeEventListener('mouseup',checkMoveDirection);
            }
            const sliderFlexDirect = window.getComputedStyle(slider).getPropertyValue('flex-direction');
            sliderFlexDirect == 'row' ? horizontalMove() : verticalMove();
            
            
        }  
    };
    const moveSlider = (evt)=>{
        if(evt.target.matches(".linkIcons") == false){
            evt.preventDefault();
            if(evt.touches){
                startMouseCoord.x = evt.touches[0].clientX;
                startMouseCoord.y = evt.touches[0].clientY;
                document.addEventListener('touchend',checkMoveDirection);
            }else{
                startMouseCoord.x = evt.clientX;
                startMouseCoord.y = evt.clientY;
                document.addEventListener('mouseup',checkMoveDirection);
            }
        }
        evt.stopPropagation();
    };
    for(trigger of triggers){
        trigger.addEventListener('mousedown',moveSlider);
        trigger.addEventListener('touchstart',moveSlider);
    }

//ustawiam clony 
//przy puszczenieniu 
//sprawdzam 'shiftCounter'
//jezeli jest rowny  1-> length-2, length-1 ->3
// transition wylaczam 
//ustawiam przesuniecie 
//poruszam slider






















//STICKY MENUS  
    const stickMenu = (obj)=> window.scrollY > window.innerHeight ? obj.style.position = 'fixed' : obj.style.position = 'static';
    const hamburger = document.querySelector('#hamburger');
    const mainMenu = document.querySelector('#menu');
    window.addEventListener('scroll',()=>stickMenu(hamburger)); 
    window.addEventListener('scroll',()=>stickMenu(mainMenu)); 
//HAMBURGER TOGGLER
    const asideMenu = document.querySelector('#asideMenu');
    hamburger.addEventListener('click',function(){
        this.classList.toggle('toggleHamburger');
        asideMenu.classList.toggle('showAsideMenu');
    })
//ASIDE MENU ACTIVE
    const sphereMenuItems = document.querySelectorAll('.sphereMenuItem');
    const updateSideMenu = ()=>{
        const currentPage = Math.round(window.scrollY / window.innerHeight);
        for (let i = 0; i < sphereMenuItems.length; i++) {
            const item = sphereMenuItems[i];
            currentPage == i ? item.classList.add('activeItem') : item.classList.remove('activeItem');
        }
    }
    window.addEventListener('scroll',updateSideMenu);
//RESIZER
    const sliderContainer = document.querySelector('#sliderContainer');
    //const slider = document.querySelector('#slider');
    //slides = document.querySelectorAll('.slides');
    const slidesLength = slides.length;
    const sliderFlexDirect = window.getComputedStyle(slider).getPropertyValue('flex-direction');
    const setSlidesWidth = ()=>{
        slider.style.width = `${(sliderContainer.offsetWidth*slidesLength)/3}px`;
        slider.style.height = '100%';
        setSliderTranslateX();
    };
    const setSlidesHeight = ()=>{
        slider.style.height = `${(sliderContainer.offsetHeight*slidesLength)/3}px`;
        slider.style.width = '100%';
        setSliderTranslateY();
    };
    window.addEventListener('resize',()=>{
        const sliderFlexDirect = window.getComputedStyle(slider).getPropertyValue('flex-direction');
        sliderFlexDirect === 'row' ? setSlidesWidth() : setSlidesHeight();
    });
    sliderFlexDirect === 'row' ? setSlidesWidth() : setSlidesHeight();
///////////CANVAS BACKGROUND
//VARIABLES    
    const canvas = document.querySelector("#canvasBck");
    const c = canvas.getContext("2d");
    let starsArray = [];
//STYLE
    const setCanvasDimensions = ()=>{
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
//STAR OBJECT
    class Star{
        constructor(x,y,size,color,vx,vy){
            this.x = x;
            this.y = y;
            this.vx = vx;
            this.vy = vy;
            this.size = size;
            this.color = color;
        }
        draw(){
        ///ARMS    
            c.beginPath();
            c.moveTo(this.x,this.y);
            c.lineTo(this.x+1*this.size,this.y-5*this.size);
            c.lineTo(this.x+2*this.size,this.y);
            c.lineTo(this.x+7*this.size,this.y+1*this.size);
            c.lineTo(this.x+2*this.size,this.y+2*this.size);
            c.lineTo(this.x+1*this.size,this.y+7*this.size);
            c.lineTo(this.x+0,this.y+2*this.size);
            c.lineTo(this.x-5*this.size,this.y+1*this.size);
            c.lineTo(this.x,this.y);
            c.fillStyle =  `rgba(${this.color},0.7)`;
            c.fill();
        //LARGE CIRCLE
            c.beginPath();
            c.arc(this.x+1*this.size,this.y+1*this.size,2.7*this.size,0,Math.PI*2,false);
            c.fillStyle =  `rgba(${this.color},0.6)`;
            c.fill();
            c.shadowBlur = 10;
            c.shadowColor = `rgb(${this.color})`;
        //SMALL CIRCLE
            c.beginPath();
            c.arc(this.x+1*this.size,this.y+1*this.size,2.0*this.size,0,Math.PI*2,false);
            c.fillStyle =  `rgba(${this.color},0.8)`;
            c.fill();
            c.shadowBlur = 10;
            c.shadowColor = `rgb(${this.color})`;
        }
        update(){
            this.draw();
        ///MOVE
            this.x += this.vx;
            this.y += this.vy;
        ///STAY IN BORDER
            if(canvas.width <= this.x - 7* this.size ||  this.x + 7* this.size <= 0) 
                this.vx = -this.vx;
            if(canvas.height <= this.y - 7* this.size ||  this.y + 7* this.size <= 0) 
                this.vy = -this.vy;
        }
    }
//CREATE STARS
    let starsQuantity = 30;
    const starsQuantityOnMobile = 20;
    function createStars(array){
        window.innerWidth < 801 && window.innerHeight > window.innerWidth ? starsQuantity = starsQuantityOnMobile : starsQuantity = starsQuantity;
        for (let i = 0; i < starsQuantity; i++) {
            const x = Math.random()*canvas.width;
            const y = Math.random()*canvas.height;
            const size = Math.random()*0.6;
            const color ='225,224,222';
            const vx = Math.random()*0.2-0.1;
            const vy = Math.random()*0.2-0.1;
            const star = new Star(x,y,size,color,vx,vy);
            array.push(star);
        }
    }
//ANIMATION FUNCTION
    function animation()
    {
        requestAnimationFrame(animation);
        c.clearRect(0,0,innerWidth,innerHeight);
        
        for(star of starsArray)
            star.update();
    }
//CANVAS RESIZE 
    window.addEventListener('resize',()=>{
    starsArray=[];
    setCanvasDimensions();
    createStars(starsArray);
    })
//INITIALIZATION
    animation();
    setCanvasDimensions();
    createStars(starsArray);
    updateSideMenu();
}