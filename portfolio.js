function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};
window.onload = function(){
//SET CLONES
    const initSlides = document.querySelectorAll('.slides');
    const slider = document.querySelector('#slider');
    const lastSlideClone = initSlides[initSlides.length-1].cloneNode(true);
    const oneBeforeLastSlideClone = initSlides[initSlides.length-2].cloneNode(true);
    const firstSlideClone = initSlides[0].cloneNode(true);
    const secoundSlideClone = initSlides[1].cloneNode(true);
    let sliderLength;
    const setSlidesClones = ()=>{
        slider.prepend(lastSlideClone);
        slider.prepend(oneBeforeLastSlideClone);
        slider.append(firstSlideClone);
        slider.append(secoundSlideClone);
        //set activeSphere & update sliderLength
        lastSlideClone.classList.add('activeSphere');
        sliderLength = document.querySelectorAll('#slider .slides').length;
    }
    setSlidesClones(); 
//SLIDER
    let shiftCounter= 0;
    const startMouseCoord = {
        'x':0,
        'y':0
    };
    const endMouseCoord = {
        'x':0,
        'y':0
    };
    const updateActiveStatus = ()=>{
        document.querySelector('.activeSphere').classList.remove('activeSphere');
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
    const setTransition = ()=> slider.style.transition = '0.5s';
    const removeTransition = ()=> slider.style.transition = 'none';
    const sliderLoop = (end,direction)=>{
        removeTransition();
        shiftCounter = end;
        direction == true ? setSliderTranslateX() : setSliderTranslateY();
    }
    const horizontalMove=()=>{
        if(endMouseCoord.x < startMouseCoord.x && shiftCounter !== sliderLength-3){
            shiftCounter++;
        }
        else if(endMouseCoord.x < startMouseCoord.x && shiftCounter == sliderLength-3){
            sliderLoop(1,true);
            shiftCounter++;
        }
        else if(endMouseCoord.x > startMouseCoord.x && shiftCounter !== 0){
            shiftCounter--;
        }
        else if(endMouseCoord.x > startMouseCoord.x && shiftCounter == 0){
            sliderLoop(sliderLength-4,true);
            shiftCounter--;
        }
        setSliderTranslateX();
        setTransition();
        updateActiveStatus();
    };
    const verticalMove=()=>{
        if(endMouseCoord.y < startMouseCoord.y && shiftCounter !== sliderLength-3){
            shiftCounter++;
        }
        else if(endMouseCoord.y < startMouseCoord.y && shiftCounter == sliderLength-3){
            sliderLoop(1,false);
            shiftCounter++;
        }
        else if(endMouseCoord.y > startMouseCoord.y && shiftCounter !== 0){
            shiftCounter--;
        }
        else if(endMouseCoord.y > startMouseCoord.y && shiftCounter == 0){
            sliderLoop(sliderLength-4,false);
            shiftCounter--;
        }
        setSliderTranslateY();
        setTransition();
        updateActiveStatus();
    };
    const checkMoveDirection = (evt)=>{
        if(startMouseCoord.x !== evt.clientX || startMouseCoord.y !== evt.clientY){
            if(evt.changedTouches){
                endMouseCoord.x = evt.changedTouches[0].clientX;
                endMouseCoord.y = evt.changedTouches[0].clientY;
                document.removeEventListener('touchend',checkMoveDirection,false);
            }else{
                endMouseCoord.x = evt.clientX;
                endMouseCoord.y = evt.clientY;
                document.removeEventListener('mouseup',checkMoveDirection,false);
            }
            const sliderFlexDirect = window.getComputedStyle(slider).getPropertyValue('flex-direction');
            sliderFlexDirect == 'row' ? horizontalMove() : verticalMove();
        }  
    };
    const moveSlider = (evt)=>{
        if(evt.target.matches(".linkIcons") == false && evt.target.matches(".slides") == false && evt.target !== evt.currentTarget ){
            evt.preventDefault();
            if(evt.touches){
                startMouseCoord.x = evt.touches[0].clientX;
                startMouseCoord.y = evt.touches[0].clientY;
                document.addEventListener('touchend',checkMoveDirection,false);
            }else{
                startMouseCoord.x = evt.clientX;
                startMouseCoord.y = evt.clientY;
                document.addEventListener('mouseup',checkMoveDirection,false);
            }
        }
        evt.stopPropagation();
    };
    slider.addEventListener('mousedown',moveSlider);
    slider.addEventListener('touchstart',moveSlider);
//STICKY MENUS  
    const hamburger = document.querySelector('#hamburger');
    const mainMenu = document.querySelector('#menu');
    const stickMenu = obj=> window.scrollY >= window.innerHeight ? obj.style.position = 'fixed' : obj.style.position = 'static';
    window.addEventListener('scroll',()=>{
        stickMenu(hamburger);
        stickMenu(mainMenu);
    })
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
        const currentActive = document.querySelector('.activeItem');
        currentActive.classList.remove('activeItem');
        sphereMenuItems[currentPage].classList.add('activeItem');
    }
    window.addEventListener('scroll',updateSideMenu,false);
//RESIZER
    const sliderContainer = document.querySelector('#sliderContainer');
    const slides = document.querySelectorAll('.slides');
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
            const starImg = new Image();
            starImg.src = './image/star.png';
            c.drawImage(starImg, this.x, this.y,starImg.width*this.size,starImg.height*this.size);
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
    let starsArray = [];
    let starsQuantity = 20;
    const starsQuantityOnMobile = 15;
    function createStars(array){
        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;
        isMobileDevice() == true ? starsQuantity = starsQuantityOnMobile : starsQuantity = starsQuantity;
        for (let i = 0; i < starsQuantity; i++) {
            const x = Math.random()*canvasWidth;
            const y = Math.random()*canvasHeight;
            const size = (Math.random()+1)*0.07;
            const color ='225,224,222';
            const vx = Math.random()*0.3-0.15;
            const vy = Math.random()*0.3-0.15;
            const star = new Star(x,y,size,color,vx,vy);
            array.push(star);
        }
    }
//ANIMATION FUNCTION
    function animation(){
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