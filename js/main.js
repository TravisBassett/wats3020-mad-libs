// WATS 3020 Mad Libs Assignment

//the following code collects values for the mad-libs game
let honorific = prompt('Please enter an honorific title (e.g. Mister or Colonel).','Mr');

let authorName = prompt('What is your full name?', 'UserFirstName UserLastName');

let adjective1 = prompt('Give me a descriptive word.','shiny');

let vehicle = prompt('Give me a type of vehicle.','unicycle');

let vehiclePart = prompt('Give me a vehicle part.','wheel');

let parking = prompt('Give me a place you park your vehicle.','garage');

let precious = prompt('Give me a the name of a precious object.','gold');

let noiseMaker = prompt('Give me a the name of something that makes a sound.','popper');

let crowdBehavior = prompt('Give me something that people do together as a group.','commune');

let adjective2 = prompt('Give me a descriptive word.','slow');

let adjective3 = prompt('Give me a descriptive word.','nice');

let color = prompt('Give me a the name of a color.','purple');

let familyMember = prompt('Give me a type of family member.','cousin');

let organ = prompt('Give me a organ of the human body.','stomache');

let bodyPart1 = prompt('Give me a body part.','ear');

let bodyPart2 = prompt('Give me a body part.', 'hand');

let bodyPart3 = prompt('Give me a body part.', 'toe');

let thing = prompt('Give me an object.','table');

let thing2 = prompt('Give me an object you might give somebody you love.','flower');

let thing3 = prompt('Give me an object you might give somebody you like.','present');

let adjective4 = prompt('Give me a word to describe the vehicle.','cheap');

let adjective5 = prompt('Give me another word to describe the vehicle.','useful');

////////////////////////////////////////////////////////////////////////
// Section Numbers
//
// The poem we are using has section numbers. This allows the user to
// generate their own.
let userNumber = prompt('Give me your lucky number', '9');

//creates number2 and number3 using userNumber as a basis
let number2 = userNumber+1;
let number3 = userNumber-1;

// DO NOT EDIT BELOW THIS LINE /////////////////////////////////////////
//
// The code below his line handles variable replacement into the HTML file.
// Please do not edit this code unless you are attempting a stretch goal.

let titleText = `O ${honorific}! My ${honorific}! by <small>${authorName}</small>`;
let titleHeading = document.querySelector("#madlib-title");
titleHeading.innerHTML = titleText;

let storyText = `

    ${userNumber}
    O ${honorific}! my ${honorific}! our ${adjective1} trip is done;
    The ${vehicle} has weather'd every rack, the ${precious} we sought is won;
    The ${parking} is near, the ${noiseMaker} I hear, the people all ${crowdBehavior},
    While follow ${bodyPart1} the steady keel, the vessel ${adjective4} and ${adjective5}:
    But O ${organ}! ${organ}! ${organ}!
    O the bleeding drops of ${color},
    Where on the ${vehiclePart} my ${honorific} lies,
    Fallen ${adjective2} and ${adjective3}.

    ${number2}
    O ${honorific}! my ${honorific}! rise up and hear the ${noiseMaker};
    Rise up-for you the ${thing} is flung-for you the bugle trills;
    For you ${thing2} and ribbon'd ${thing3}-for you the shores a-crowding;
    For you they ${crowdBehavior}, the swaying mass, their eager faces turning;
    Here ${honorific}! dear ${familyMember}!
    This ${bodyPart2} beneath your ${bodyPart3};
    It is some dream that on the ${vehiclePart},
    You've fallen ${adjective2} and ${adjective3}.

    ${number3}
    My ${honorific} does not answer, his lips are pale and still;
    My ${familyMember} does not feel my arm, he has no pulse nor will;
    The ${vehicle} is anchor'd safe and sound, its voyage closed and done;
    From fearful trip, the victor ${vehicle}, comes in with ${precious} won;
    Exult, O shores, and ring, O ${noiseMaker}!
    But I, with mournful tread,
    Walk the ${vehiclePart} my ${honorific} lies,
    Fallen ${adjective2} and ${adjective3}.
`;
let storyParagraph = document.querySelector("#madlib-text");
storyParagraph.innerHTML = storyText;