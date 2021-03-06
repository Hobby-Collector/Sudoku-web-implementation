/*----- constants -----*/

//I'm sorry about these variables but they represent a number of different sudoku boards that will be randomly pulled from
//credit to Stephen Ostermiller and his project qqwing.com for these puzzle
const boardsObj = {
    simple: [
    ['.8.4...2......97.........46.....8.......67.59....5.2.7.78.9...4.567.18..19..45..2',
    '681473925542619738937582146725938461814267359369154287278396514456721893193845672'],
    ['....4.........5.....6.8..9.28.3.465..1....8.93.5..64...41......8...3...1..25....4',
    '158943276793625148426187395289314657614752839375896412541278963867439521932561784'],
    ['....2....97...........1.9...27.3.6.1........2..1.5..431....7....9...4.6..63..2.74',
    '318926457975843216246715938527438691439671582681259743154367829792184365863592174'],
    ['....6.....5..2..63...7.9........16....2.......6.2.459.......2.6.793.6..4...17.9..',
    '724563819951428763386719425537891642492657381168234597813945276279386154645172938'],
    ['.47...2..1....9..55.21..3...8......2..452..13....1.48..937............37.........',
    '947835261138269745562174398381946572674528913259317486893751624415692837726483159'],
    ['7.961.4.......25...2.45.16.147.6.....3..4...65.......7362.....4.........47......3',
    '759618432614932578823457169147269385238745916596183247362891754985374621471526893'],
    ['.23..........7....8..65..............52......9..8.7.3...7.2369..34.9..8.6.9.8...5',
    '723941856465378219891652473378265941152439768946817532587123694234596187619784325'],
    ['94..3......8457...2.........7...48.....6..2.4..6.9..353..........4..8.7....92....',
    '941236587638457921257189463572314896893675214416892735389741652124568379765923148'],
    ['...8..4..658.....7..7.....14.....8367.5...9...6..9....91.3...6..8......4.......1.',
    '129867453658134297347259681491725836735681942862493175914372568583916724276548319'],
    ['2.6.341.........6.7..1....4.87.1.....2....8474.........54......3...56...618....25',
    '296734158841529763735168294587412639123695847469873512954281376372956481618347925'],
],
    easy: [
    ['.....4..785..2...3674..3.5..9.2.8............3..........3.87.2572..5.8.4.4..6.3.9',
    '132594687859726413674813952496278531285931746317645298963487125721359864548162379'],
    ['.......23..2.64..5.....76........9.6....3....96..2.54....6....1.3675...9.2.......',
    '671589423892364175354217698218475936547936812963128547789642351436751289125893764'],
    ['.9.....2..7...3......847....8...9.5.9..53.....1............15....2.9.143..5.84.9.',
    "493156827678923415251847369387619254924538671516472938749361582862795143135284796"],
    ['.6......3.8..7.1..5......7..1..3..6...5....9....9..2.57.2..6.....85..7...9.2...1.',
    '467152983983674152521389674219435867635728491874961235752816349148593726396247518'],
    ['........88.4..3.19...17.24.2..4.....9.1..28...8......1......7.55.2...13...3......',
    '126945378874623519359178246235481967941762853687359421418236795562897134793514682'],
    ['...24.....68..........7.........135..7..536.2..14...87.8.........2..5.4.71.83.2..',
    '597248163268319475143576829926781354874953612351462987489627531632195748715834296'],
    ['2618......53.....6.8....5..........1....9...793....85..18..62....27..6.3.7....9..',
    '261854739453279186789163524847625391125398467936417852318946275592781643674532918'],
    ['..91...6..5.76...4.....9......97365........7......8..1.....5....91...538...83...7',
    '829154763153762984764389125418973652532416879976528341387295416291647538645831297'],
    ['5..3.8....2.59.3.8..6.1..4.........6.............2...4.8325.4..21.6...85.4.9...6.',
    '591348627427596318836712549152479836974863152368125974683257491219634785745981263'],
    ['....4...1....9.52...9..5...2.....7.....78..35.7142....9..27..43.....9.7.....3.1..',
    '657842391843197526129365487238956714496781235571423968915278643364519872782634159']
],
    intermediate: [
    ['2.3..54.9.6....2..1.53....6..7.......5.......942......7...41562..62..9....4.3...7',
    '273685419468179235195324876387512694651493728942768351739841562816257943524936187'],
    ['7....4.....3.2...828..71.......3..8..4....13.1.6.8............79276......6.24....',
    '795864321613529748284371596579132684842796135136485972458913267927658413361247859'],
    ['6.5.7....7..1.8.4...........8.7.59..5...1...896..8...4.42....19....4.7..........5',
    '615473892729158346438296157284765931573914268961382574842537619156849723397621485'],
    ['.....741...1.2........4...37..1.6.3.43.2...9..6.....7...2........7..32.5.9.....67',
    '253697418941328756876541923729186534438275691165439872512764389687913245394852167'],
    ['....65.23.....4..6.....19..1..6........4.........935..6.3.2.1.52.9....8..1......4',
    '871965423592384716364271958137652849985417632426893571643728195259146387718539264'],
    ['87.14..252......74...2...9......6...9.....4......7..1.12......7.56..2.8..98.54...',
    '879143625231569874645287193514926738967831452382475916123698547456712389798354261'],
    ['.5416......7....4.3...5.....2..4.3...7.51...84....812.8.1.....7546....3..........',
    '254167983617893542389254716128946375973512468465378129831425697546789231792631854'],
    ['..8...7....9.3564..3.4.1.........47.8...54.9.9..1......76.............51....9....',
    '458629713719835642632471589361982475827354196945167328576218934293746851184593267'],
    ['685..4..3..1........48..1..........2..6...51.4..9.....81...62.5........6...49..3.',
    '685174923971325684324869157198653472736248519452917368819736245243581796567492831'],
    ['......2.......9...31.8......8...2.5.....6.48.5.6...9.1...4...9.62..8..1.15...6.3.',
    '965137248842659173317824569481792356293561487576348921738415692624983715159276834']
],
    expert: [
        ['...5.1...6....974.......68.8.2....5...61....87.9.4.2.6.......97...9.7.1.......4..',
        '478561329625389741193472685832796154546123978719845236281634597364957812957218463'],
        ['......2.6..9......8...3.1....2......58.92.7..19...6..8.26....5.71........5.8..3..',
        '431785296279641583865239174642178935583924761197356428326417859718593642954862317'],
        ['...57.........264.4.8.9..2..7.....8........9...921.4.6...78..12...........2.658..',
        '926574138715832649438691725274956381561348297389217456643789512857123964192465873'],
        ['.2.71...5.....5.9.4......8..5.8.7......6.....7..4.9.16........817...6.5..9....7..',
        '926718435817345692435962187651837249249651873783429516564173928178296354392584761'],
        ['.9..85..4..4..7...58.9.2.6.........3....26.........457......97.7.......2.29..45..',
        '697185234214367895583942761148579623375426189962813457436251978751698342829734516'],
        ['84..1..5..19.6..3.2....8..9.....29..........3....8....5......84.98.563.1....3.6..',
        '846319257719265438235478169381542976652197843974683512563921784498756321127834695'],
        ['..526.3989...........4...6...3..7.8....34.7..5.9..64......34..6....9..5......8..7',
        '745261398961853274238479561413927685826345719579186432197534826684792153352618947'],
        ['6.3...8......6..9..4..2.......8.92...6..3...77.4..5...45.......932....8......275.',
        '693541872271368495548927361315879246869234517724615938457183629932756184186492753'],
        ['75....3.9.......56.....31...6.....13.17...8.......97.4.3...4...4.9.7.5..6.8.9....',
        '751246389392718456846953172264587913917432865583169724135824697429671538678395241'],
        ['.85..714..1.......4...52..81.48...7.3....4.9...9735.8...1.....4......3.....58....',
        '985367142213948765467152938154896273378214596629735481531679824896421357742583619']
],
    current: []
}

/*----- app's state (variables) -----*/

let solvingArr = [];

/*----- cached element references -----*/
//this hold all the div element on the board then is turned into referances to each div
let boardEls = new Array();
/*----- event listeners -----*/
//text changed listener for boardEls
document.getElementById('board').addEventListener('keyup',handleTextChangedEvent)
//input lost focus listener

//difficulty buttons listener
document.getElementById('difficulty').addEventListener('click',handleDifficultyClickEvent)

//dom load event poulates the dom with the boardEls
document.addEventListener('DOMContentLoaded', function(event) {
    for (let i = 0; i < 81; i++) {
        domEl = document.createElement('div')
        boardEls[i] = domEl;
    }
    //make the boardEls a grid
    
    //this makes a 3x3 boardEls of sections and makes a 3x3 
    //boardEls of boardEls elements in each section
    for (let y = 0; y <= 54; y+=27) { // this loops thrice. this is the y position for the miniBoard
        for (let x = 0; x < 9; x+=3) { //this loops thrice. this is the x position for the miniBoard
            //make the sub boards and use the indices of all the 
            //for loops to generate the proper location of each div
            var miniBoard = document.createElement('section')
            
            miniBoard.classList.add(`miniBoard`);
            miniBoard.id = `${x/3}${y/27}`;
            document.getElementById("board").appendChild(miniBoard);
            
            //this creates the elements and adds them to the miniboard
            for (let aY = 0; aY < 27; aY+=9) {// this loops thrice. this is the y position
                for (let aX = 0; aX < 3; aX++) {//this loops thrice. this is the x position
                    // odd math for each of the for loops makes the boardEls array location match 
                    //the location of the element added to the dom boardEls
                    boardEls[aX+aY+y+x].id = `${aX+aY+y+x}`
                    miniBoard.appendChild(boardEls[aX+aY+y+x]);
                }
            }
        }
    }
    boardEls = Array.from(document.querySelectorAll('div'));
    boardEls.sort((a,b)=>{return (a.id - b.id)});
})

/*----- functions -----*/
init();
function init(){
    //clear the board and reset the message
    for (let index = 0; index < boardEls.length; index++){
        boardEls[index].textContent = '';
    }
    document.getElementById("message").textContent = "Sudoku";
    render();

    //this bit of code is for demonstrating a solve and should not be counted in the code
        //fills an array with numbers from 0-80
        solvingArr= Array.from(Array(81).keys());

        //shuffles using the fisher-Yates algorithm for shuffling
        var j, x, i;
        for (i = solvingArr.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = solvingArr[i];
            solvingArr[i] = solvingArr[j];
            solvingArr[j] = x;
        }
}

//render function
function render(){
    if (boardsObj.current.length !== 0) {
        boardEls.forEach((divEl,idx) =>{
            divEl.textContent = (boardsObj.current[0][idx] !== '.' ?  boardsObj.current[0][idx]:"");
            divEl.contentEditable = divEl.textContent === "";
        })
    }
}
//input changed listener function
function handleTextChangedEvent(evt){
    
    //if the tag is a div
    if(evt.target.tagName !== 'DIV'){
        return;
    }else if (evt.keyCode >= 48 && evt.keyCode <= 57){
        evt.target.textContent = evt.key;
    }else if (evt.keyCode < 48 && evt.keyCode !== 9 &&
         evt.keyCode !== 16 && evt.keyCode !== 20|| evt.keyCode > 57){
        evt.target.textContent = "";
    }
    
    if(boardSolved()){
        document.getElementById('message').textContent = "There is nothing to regret with a job well done. -Joe Garcia";
    }
}

//difficulty button listener function
function handleDifficultyClickEvent(evt){
    if (evt.target.tagName !== "BUTTON") {
        return;
    }

    if (evt.target.id === 'hint') {
        if(boardsObj.current.length) hintFunction();
        return;
    }
    // clear the current board
    init();

    //call createBoard to do it's thing
    createBoard(evt.target.id);
    render();
}

//create board function finds a random board from the different array's 
//and assigns it to the current board
function createBoard (boardTypeStr){
    let carrierArr = boardsObj[boardTypeStr][Math.floor(Math.random() * Math.floor(10))];
    boardsObj.current.length = 0;
    boardsObj.current.push(carrierArr[0].split(''));
    boardsObj.current.push(carrierArr[1].split(''));
    return boardsObj.current;
}


//this function is written for demonstration purposes and should not be inventoried
function hintFunction(){
        let carrier = solvingArr.pop();
        boardEls[carrier].textContent = boardsObj.current[1][carrier];
}

function boardSolved(){
    let tempArr = [];
    boardEls.forEach((el,idx)=>{
        if (el.innerText ==='') {return false;}
        tempArr[idx] = (el.innerText === boardsObj.current[1][idx])
    })
    return !tempArr.includes(false);
}