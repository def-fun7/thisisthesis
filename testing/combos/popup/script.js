const popup = document.getElementById('popup');
const pageNum = document.getElementById('pageNo');
const myPopup = document.getElementById('myPopup');

window.onload = function(){
    popup.style.display = "block";
}

function closePopup(){
    popup.style.display = "none";
}

let pageNo = 1;

var s1 = `Few moments ago, not too far away ...`;
var s2 = `there was a cat that lived on a strange blue planet. Very little is known about its home planet and far more less about the cat itself. its name is long lost to the anuals of history. some even doubt it ever existed. All that remains are some fragments from a document titled, 'Perhaps Diary', that only contains what can only be described as peculiar 'thought experiments'. Only few of them has been translated and made public in their entirety.` ;
var s3 = `This one is one of the partially recovered experiment, titled, 'la-', and goes like,`;
var s4 = `Imagine two beings.`;
var s5 = ` let's name them "umiko" and "faya", because... somethings are better mysterious.`;
var s6 = `umiko is a {enter height and unit} female from a species called "humankind" where the heights range from {show min and max and unit}. Her height (they use different pronouns for different species (because... well ask them) and for females they use "she/her") is important because of where she lives.

and she lives just a {proper_distance} from the event horizon (according to herself) of a schwarzchild black hole, whose mass is tied to her height in an elegant mathematical way. The black hole is just enough massive so that at it's event horizon, the gravitational gradient or tidal forces is same as they would be for a person with an height of one meter at her home planet. This is so she doesn't get sphegatiffied. 

As her height {enter height and unit} changes so does the mass {ideal mass} of the black hole. (try it)

based on her current height, she is living around a black hole named {sdss name}, (don't ask why it's called that), that has a mass of { used mass}, which is {mass diff} because universe isn't ideal.  {sdss name} is located at right ascension of {RA} decimal degrees and declination of {dec} decimal degrees from her home planet and has a event horizon at {rs}, which is also it's schwarzchild radius.

from her home planet prespective, the black hole has a comoving distance (distance between her home planet and the bh considering no expansion of the universe) of {co_dist} and cosmological redshift factor of {z_c}. From her home planet the black hole can be seen as it was when universe was {age} because light takes time to travel.

but that is enough about umiko. let's talk about faya.` ;

var s7 = `faya used to live with umiko but was then banned from ever coming pass any black hole (why? because universe is a crazy place). The nearest she could get was to the point where the gravitational accelaration due to that black hole is same as the gravitational accelaration on the surface of her home planet satellite, (from some text it was known as moon) due to her home planet which is almost {g at moon due to earth}. in other words next to nothing.

based on the current umiko's bh, umiko was {coord_d} away from the event horizon according to faya measurement, meaning her radial distance from the black hole was {r}

factoring in faya's restriction, she can only get as close as {D} from the center of the black hole, which meant they were {d} apart.

worlds apart...
but not separate ways...`;

var s8 = `like any good friends who have lived in the universe together long enough, they had a contengcy plan, "flash messages".
The method was quite simple and as long as the laws of the universe doesn't suddenly decided to go bananas, workable.

They would uses flashes of light to send each other messages, to communicate. (there is always a way). They agreed on the wavelength of light they will use, that is {obs_w} and the duration of a single dot, that was {t_do} and dash that was {t_da}.

But when did universe ever made things easy for anyone? Due to the gravitational redshift factor of {z_g}, in order for umiko to observe {obs_w}, faya will have to use the light of wavelength {em_b} because it will get blueshift and will be {obs_w} when it reached umiko. in case of umiko, she will have to use {em_a} because it will get redshift thanks to GR.

If this was not good enough, for dot and dash to be {t_do} and {t_da} for umiko, faya would have to use durations of dot and dashes of {t_oB} and {t_daB} because gravitational time dialtion is a thing. on the other hand, umiko would have to make her flash durations insanely small as {t_oA} and {t_daA} for it to be same as they agreed.

From faya point of view, each message would take {sig_tr_time} to reach and recieve.`;

var s9 = `that was the thought experiment.
what it meant and was meant to represent? ask the cat.`;

var s10 = `based on this, to grasp the full reality of their situation and how something as simple and taken for gurranted, like talking can be complex and crazy because of how the universe works, this site further allows you to send messages, acting as faya and umiko all by yourself, that will on the outside will go immediately, but if you read the message timing, it will become cleared to you. also the message will be in morse, (on hover or hold will decoded back to english), to show how completley absurd it looks unless you know what is being said.`;

var s11 = `so...`;

var a = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11];

function back(){
    if(pageNo > 1){
        pageNo -= 1;
        pageNum.innerHTML = pageNo+'/11';
        myPopup.innerHTML = a[pageNo-1];
    }
}

function forward(){
    if (pageNo <11){
        pageNo += 1;
        pageNum.innerHTML = pageNo +'/11';
        myPopup.innerHTML = a[pageNo-1];
    }
}

