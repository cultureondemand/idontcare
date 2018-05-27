/**
 * scrollVis - encapsulates
 * all the code for the visualization
 * using reusable charts pattern:
 * http://bost.ocks.org/mike/chart/
 */
var iii=0;
var name;
var trigger='';
var numerotrigger='';
var data_a = [
{a:"18-25",b:1},
{a:"26-30",b:8},
{a:"31-35",b:24},
{a:"36-40",b:18},
{a:"41-45",b:13},
{a:"46-50",b:15},
{a:"51+",b:21}
];




var dummydata_a = [
{a:"18-25",b:1},
{a:"26-30",b:1},
{a:"31-35",b:1},
{a:"36-40",b:1},
{a:"41-45",b:90},
{a:"46-50",b:1},
{a:"51+",b:1}
];



var data_b = [
{a:"Male",b:86},
{a:"Female",b:13},
{a:"Trans./Gender Variant/Nonconforming",b:.5},
{a:"Prefer Not To Answer",b:.5}
];



var dummydata_b = [
{a:"Male",b:1},
{a:"Female",b:1},
{a:"Trans./Gender Variant/Nonconforming",b:1},
{a:"Prefer Not To Answer",b:95}
];


var data_c = [
{a:"White",b:69},
{a:"Hisp / Latino",b:12},
{a:"Black / Afr. Amer.",b:6},
{a:"Asian",b:3},
{a:"Amer. Indian / Alaska Native",b:2},
{a:"Native Hawaiian / Pac. Islander",b:1},
{a:"Other",b:3},
{a:"Prefer Not to Answer",b:4}
];



var dummydata_c = [
{a:"White",b:1},
{a:"Hisp / Latino",b:1},
{a:"Black / Afr. Amer.",b:1},
{a:"Asian",b:1},
{a:"Amer. Indian / Alaska Native",b:90},
{a:"Native Hawaiian / Pac. Islander",b:1},
{a:"Other",b:1},
{a:"Prefer Not to Answer",b:1}
];



var dataset = [
 {a:"Married",b:66},
{a:"Single",b:14},
{a:"Divorced",b:14},
{a:"Separated",b:3},
{a:"Domestic Partnership",b:2},
{a:"Widowed",b:1}


];



var dummydataset = [
 {a:"Married",b:1},
{a:"Single",b:1},
{a:"Divorced",b:1},
{a:"Separated",b:1},
{a:"Domestic Partnership",b:1},
{a:"Widowed",b:94}
];









var data_e = [
{a:"< $20K",b:6},
{a:"$20K-$35K",b:11},
{a:"$35K-$50K",b:14},
{a:"$50K-$75K",b:22},
{a:"$75K-$100K",b:16},
{a:"$100K-$150K",b:18},
{a:"$150K-$200K",b:6},
{a:"$200K+",b:3},
{a:"Prefer Not to Answer",b:4}
];



var dummydata_e = [
{a:"< $20K",b:91},
{a:"$20K-$35",b:1},
{a:"$35K-$50K",b:1},
{a:"$50K-$75K",b:1},
{a:"$75K-$100K",b:1},
{a:"$100K-$150K",b:1},
{a:"$150K-$200K",b:1},
{a:"$200K+",b:1},
{a:"Prefer Not to Answer",b:1}
];








var data_f = [
{a:"Full Time",b:54},
{a:"Part Time",b:5},
{a:"Self Employed",b:3},
{a:"Unemployed*",b:8},
{a:"Active Duty",b:5},
{a:"Retired Disabled",b:19},
{a:"Student",b:6}

];



var dummydata_f = [
{a:"Full Time",b:1},
{a:"Part Time",b:90},
{a:"Self Employed",b:1},
{a:"Unemployed*",b:1},
{a:"Active Duty",b:1},
{a:"Retired Disabled",b:1},
{a:"Student",b:1}
];








var data_g = [
{a:"Some college",b:22},
{a:"Bachelors",b:29},
{a:"Masters",b:22},
{a:"Associates",b:14},
{a:"HS grad. or equiv.",b:5},
{a:"Trade, Tech. or Vocat.",b:4},
{a:"Professional Degree",b:3},
{a:"Doctoral",b:1}

];



var dummydata_g = [
{a:"Some college",b:1},
{a:"Bachelors",b:1},
{a:"Masters",b:1},
{a:"Associates",b:91},
{a:"HS grad. or equiv.",b:1},
{a:"Trade, Tech. or Vocat.",b:1},
{a:"Professional Degree",b:1},
{a:"Doctoral",b:1}
];







var data_h = [
{a:"Suburban",b:49},
{a:"Urban",b:24},
{a:"Rural",b:23},
{a:"Military Base CONUS",b:3},
{a:"OCONUS",b:1} 
];



var dummydata_h = [
{a:"Suburban",b:1},
{a:"Urban",b:1},
{a:"Rural",b:1},
{a:"Military Base CONUS",b:95},
{a:"OCONUS",b:1} 
];









var data_i = [
{a:"Army",b:58},
{a:"Marine Corps",b:15},
{a:"Air Force",b:13},
{a:"Navy",b:13},
{a:"Coast Guard",b:1} 
];



var dummydata_i = [
{a:"Army",b:1},
{a:"Marine Corps",b:1},
{a:"Air Force",b:1},
{a:"Navy",b:95},
{a:"Coast Guard",b:1} 
];








var data_j = [
{a:"Officer",b:19},
{a:"Enlisted",b:81}
];



var dummydata_j = [
{a:"Officer",b:1},
{a:"Enlisted",b:1}

];







var data_k = [
{a:"Not separated",b:14},
{a:"2015-2017",b:9},
{a:"2013-2014",b:14},
{a:"2011-2012",b:16},
{a:"2009-2010",b:15},
{a:"2007-2008",b:15},
{a:"2005-2006",b:11},
{a:"2003-2004",b:5},
{a:"2002 or Earlier",b:1}  
 
];



var dummydata_k = [
{a:"Not separated",b:1},
{a:"2015-2017",b:1},
{a:"2013-2014",b:1},
{a:"2011-2012",b:1},
{a:"2009-2010",b:1},
{a:"2007-2008",b:1},
{a:"2005-2006",b:1},
{a:"2003-2004",b:88},
{a:"2002 or Earlier",b:1}  
];







var data_l = [
{a:"Iraq",b:66},
{a:"CONUS",b:41},
{a:"Afghanistan",b:33},
{a:"Kuwait",b:32},
{a:"Cent. Comm. AOR",b:10},
{a:"Qatar",b:9},
{a:"Bahrain",b:7},
{a:"Guantanamo Bay",b:3},
{a:"Other",b:23}  
];



var dummydata_l = [
{a:"Iraq",b:44},
{a:"CONUS",b:1},
{a:"Afghanistan",b:1},
{a:"Kuwait",b:2},
{a:"Cent. Comm. AOR",b:1},
{a:"Qatar",b:24},
{a:"Bahrain",b:23},
{a:"Guantanamo Bay",b:3},
{a:"Other",b:1}  
];








var data_m = [
{a:"Zero Deployments",b:18},
{a:"One Deployment",b:55},
{a:"Two Deployments",b:21},
{a:"Three+ Deployments",b:6}

];



var dummydata_m = [
{a:"Zero Deployments",b:1},
{a:"One Deployment",b:1},
{a:"Two Deployments",b:90},
{a:"Three+ Deployments",b:1}
];




var data_n = [
{a:"Zero Deployments",b:39},
{a:"One Deployment",b:44},
{a:"Two Deployments",b:12},
{a:"Three+ Deployments",b:5}

];



var dummydata_n = [
{a:"Zero Deployments",b:1},
{a:"One Deployment",b:1},
{a:"Two Deployments",b:12},
{a:"Three+ Deployments",b:1}
];



var data_o = [
{a:"Zero Deployments",b:90},
{a:"One Deployment",b:9},
{a:"Two Deployments",b:.5},
{a:"Three+ Deployments",b:.5}

];



var dummydata_o = [
{a:"Zero Deployments",b:1},
{a:"One Deployment",b:1},
{a:"Two Deployments",b:3},
{a:"Three+ Deployments",b:90}
];



var data_p = [
{a:"Zero Deployments",b:98},
{a:"One Deployment",b:2},
{a:"Two Deployments",b:0},
{a:"Three+ Deployments",b:0}

];



var dummydata_p = [
{a:"Zero Deployments",b:1},
{a:"One Deployment",b:1},
{a:"Two Deployments",b:90},
{a:"Three+ Deployments",b:1}
];





var data_q = [
{a:"Indep./No Affiliation",b:38},
{a:"Dem. Party",b:17},
{a:"Repub. Party",b:37},
{a:"Libertarian",b:5},
{a:"Other",b:3}

];



var dummydata_q = [
{a:"Indep./No Affiliation",b:18},
{a:"Dem. Party",b:37},
{a:"Repub. Party",b:7},
{a:"Libertarian",b:35},
{a:"Other",b:3}
];


////
////// support for candidates


var data_r = [
{a:"Trump",b:50},
{a:"Clinton",b:28},
{a:"Johnson",b:11},
{a:"Stein",b:2},
{a:"McMullin",b:1},
{a:"Other",b:8}

];



var dummydata_r = [
{a:"Trump",b:1},
{a:"Clinton",b:2},
{a:"Johnson",b:1},
{a:"Stein",b:90},
{a:"McMullin",b:1},
{a:"Other",b:1}
];




///
/// voter registration

var data_reg = [
{a:"Registered",b:96},
{a:"Not Registerd",b:4}

];



var dummydata_reg = [
{a:"Registered",b:50},
{a:"Not Registerd",b:28}

];









/////////
///mj
var data_s = [
{a:"Strongly Support",b:23},
{a:"Support",b:21},
{a:"Neutral",b:26},
{a:"Oppose",b:12},
{a:"Strongly Oppose",b:18}

];



var dummydata_s = [
{a:"Strongly Support",b:2},
{a:"Support",b:1},
{a:"Neutral",b:2},
{a:"Oppose",b:1},
{a:"Strongly Oppose",b:88}

];
var data_t = [
{a:"Strongly Support",b:34},
{a:"Support",b:29},
{a:"Neutral",b:22},
{a:"Oppose",b:6},
{a:"Strongly Oppose",b:9}

];




var dummydata_t = [
{a:"Strongly Support",b:9},
{a:"Support",b:6},
{a:"Neutral",b:22},
{a:"Oppose",b:29},
{a:"Strongly Oppose",b:34}
];


////
/////


////////// fire arms



var data_u = [
{a:"Strongly Support",b:5},
{a:"Support",b:12},
{a:"Neutral",b:34},
{a:"Oppose",b:21},
{a:"Strongly Oppose",b:28}

];



var dummydata_u = [
{a:"Strongly Support",b:5},
{a:"Support",b:12},
{a:"Neutral",b:34},
{a:"Oppose",b:21},
{a:"Strongly Oppose",b:28}
];






var data_v = [
{a:"Strongly Support",b:18},
{a:"Support",b:39},
{a:"Neutral",b:31},
{a:"Oppose",b:6},
{a:"Strongly Oppose",b:6}

];



var dummydata_v = [
{a:"Strongly Support",b:5},
{a:"Support",b:12},
{a:"Neutral",b:34},
{a:"Oppose",b:21},
{a:"Strongly Oppose",b:28}
];






var data_w = [
{a:"Strongly Support",b:46},
{a:"Support",b:38},
{a:"Neutral",b:9},
{a:"Oppose",b:4},
{a:"Strongly Oppose",b:3}

];



var dummydata_w = [
{a:"Strongly Support",b:5},
{a:"Support",b:12},
{a:"Neutral",b:34},
{a:"Oppose",b:21},
{a:"Strongly Oppose",b:28}
];






var data_x = [
{a:"Strongly Support",b:23},
{a:"Support",b:27},
{a:"Neutral",b:24},
{a:"Oppose",b:13},
{a:"Strongly Oppose",b:13}

];



var dummydata_x = [
{a:"Strongly Support",b:5},
{a:"Support",b:12},
{a:"Neutral",b:34},
{a:"Oppose",b:21},
{a:"Strongly Oppose",b:28}
];






var data_y = [
{a:"Strongly Support",b:41},
{a:"Support",b:27},
{a:"Neutral",b:18},
{a:"Oppose",b:8},
{a:"Strongly Oppose",b:6}

];



var dummydata_y = [
{a:"Strongly Support",b:25},
{a:"Support",b:32},
{a:"Neutral",b:14},
{a:"Oppose",b:1},
{a:"Strongly Oppose",b:28}
];

//////////
////////////////

///////////////
/////////////


var numero_guns = [58];





var data_guns_own_aa = [
{a:"Locked, Unloaded, Ammunition Stored Separately",b:29},
{a:"Locked and Loaded",b:19},
{a:"Unlocked, Unloaded, Ammunition Stored Separately",b:17},
{a:"Would rather not say",b:15},
{a:"Unlocked, Loaded",b:14},
{a:"Other",b:4},
{a:"Unlocked, Unloaded, No Ammunition in Home",b:1},
{a:"Locked, Unloaded, No Ammunition in Home",b:1} 


];



var dummydata_guns_own_aa = [
{a:"Locked, Unloaded, Ammunition Stored Separately",b:19},
{a:"Locked and Loaded",b:1},
{a:"Unlocked, Unloaded, Ammunition Stored Separately",b:27},
{a:"Would rather not say",b:15},
{a:"Unlocked, Loaded",b:14},
{a:"Other",b:14},
{a:"Unlocked, Unloaded, No Ammunition in Home",b:1},
{a:"Locked, Unloaded, No Ammunition in Home",b:1} 
];

////
///////////////











var data_guns_own_a = [
{a:"Strongly Support",b:41},
{a:"Support",b:27},
{a:"Neutral",b:18},
{a:"Oppose",b:8},
{a:"Strongly Oppose",b:6}

];



var dummydata_guns_own_a = [
{a:"Strongly Support",b:25},
{a:"Support",b:32},
{a:"Neutral",b:14},
{a:"Oppose",b:1},
{a:"Strongly Oppose",b:28}
];

////
///////////////


var data_milserve_a = [
{a:"Yes",b:92},
{a:"No",b:8},
{a:"Don't Know",b:0}
];



var dummydata_milserve_a = [
{a:"Yes",b:41},
{a:"No",b:27},
{a:"Don't Know",b:18}
];




var data_milserve_b = [
{a:"Yes",b:82},
{a:"No",b:7},
{a:"Don't Know",b:11}
];



var dummydata_milserve_b = [
{a:"Yes",b:41},
{a:"No",b:27},
{a:"Don't Know",b:18}
];




var data_milserve_c = [
{a:"Yes",b:58},
{a:"No",b:32},
{a:"Don't Know",b:10}
];



var dummydata_milserve_c = [
{a:"Yes",b:41},
{a:"No",b:27},
{a:"Don't Know",b:18}
];




var data_milserve_d = [
{a:"Strongly Support",b:5},
{a:"Support",b:8},
{a:"Neutral",b:25},
{a:"Oppose",b:30},
{a:"Strongly Oppose",b:32}

];



var dummydata_milserve_d = [
{a:"Strongly Support",b:25},
{a:"Support",b:32},
{a:"Neutral",b:14},
{a:"Oppose",b:1},
{a:"Strongly Oppose",b:28}
];



var data_milserve_e = [
{a:"Strongly Support",b:35},
{a:"Support",b:35},
{a:"Neutral",b:16},
{a:"Oppose",b:7},
{a:"Strongly Oppose",b:7}

];



var dummydata_milserve_e = [
{a:"Strongly Support",b:25},
{a:"Support",b:35},
{a:"Neutral",b:16},
{a:"Oppose",b:7},
{a:"Strongly Oppose",b:7}
];

//////////
////////////////
///////////////////////
///////////////////
////// equality
 /////////


var data_equality_a = [
{a:"Yes",b:48},
{a:"No",b:30},
{a:"No Opinion",b:22}
];

var dummydata_equality_a = [
{a:"Yes",b:41},
{a:"No",b:27},
{a:"No Opinion",b:18}
];




var data_equality_b = [
{a:"Yes",b:28},
{a:"No",b:50},
{a:"No Opinion",b:22}
];

var dummydata_equality_b = [
{a:"Yes",b:41},
{a:"No",b:27},
{a:"No Opinion",b:18}
];




var data_equality_c = [
{a:"Positive",b:16},
{a:"Neutral",b:59},
{a:"Negative",b:25}
];

var dummydata_equality_c = [
{a:"Positive",b:22},
{a:"Neutral",b:50},
{a:"Negative",b:28}
];




var data_equality_d = [
{a:"Positive",b:6},
{a:"Neutral",b:28},
{a:"Negative",b:45},
{a:"Unsure",b:21}
];

var dummydata_equality_d = [
{a:"Positive",b:22},
{a:"Neutral",b:50},
{a:"Negative",b:20},
{a:"Unsure",b:5}
];



 /////////////
 //////////////

var numeroA = [12, 1200000, 7300];

var numeroB = [41];

var numeroC = [96];

var numeroD = [88];

var numeroE = [59];

var numeroGuns = [58];


var numeroSupport = [70];


var numeroUnderstand = [16];


var numeroHire = [39];

/////////
//////////
///// perceptions

var dummydata_p_obama = [

{a:"Strongly Agree",b:5},
{a:"Agree",b:12},
{a:"No Opinion",b:34},
{a:"Disagree",b:21},
{a:"Strongly Disagree",b:28}
];

var data_p_obama = [
{a:"Strongly Agree",b:10},
{a:"Agree",b:23},
{a:"No Opinion",b:15},
{a:"Disagree",b:23},
{a:"Strongly Disagree",b:29}
];



var dummydata_p_trump = [

{a:"Strongly Agree",b:5},
{a:"Agree",b:12},
{a:"No Opinion",b:34},
{a:"Disagree",b:21},
{a:"Strongly Disagree",b:28}
];

var data_p_trump = [

{a:"Strongly Agree",b:22},
{a:"Agree",b:31},
{a:"No Opinion",b:19},
{a:"Disagree",b:13},
{a:"Strongly Disagree",b:15}
];




var dummydata_p_congress = [

{a:"Strongly Agree",b:5},
{a:"Agree",b:12},
{a:"No Opinion",b:34},
{a:"Disagree",b:21},
{a:"Strongly Disagree",b:28}
];

var data_p_congress = [

{a:"Strongly Agree",b:1},
{a:"Agree",b:15},
{a:"No Opinion",b:15},
{a:"Disagree",b:45},
{a:"Strongly Disagree",b:24}
];



///////
//////
 

////////////////
/// womens data
////////////////

 



var dummydata_wom_a = [
{a:"Very Important",b:9},
{a:"Important",b:6},
{a:"Moderate Importance",b:22},
{a:"Little Importance",b:29},
{a:"Not Important",b:34}
];

var data_wom_a = [
{a:"Very Important",b:41},
{a:"Important",b:37},
{a:"Moderate Importance",b:16},
{a:"Little Importance",b:4},
{a:"Not Important",b:2}
];



///
///




var dummydata_wom_b = [
{a:"Agree",b:6},
{a:"Disagree",b:9},
{a:"No Opinion",b:22}
];

var data_wom_b = [
{a:"Agree",b:75},
{a:"Disagree",b:15},
{a:"No Opinion",b:10} 
];


var data_wom_c = [
{a:"Agree",b:39},
{a:"Disagree",b:50},
{a:"No Opinion",b:11} 
];

var dummydata_wom_c = [
{a:"Agree",b:30},
{a:"Disagree",b:62},
{a:"No Opinion",b:8} 
];




var dummydata_wom_d = [
{a:"Agree",b:6},
{a:"Disagree",b:9},
{a:"No Opinion",b:22} 
];

var data_wom_d = [
{a:"Agree",b:62},
{a:"Disagree",b:30},
{a:"No Opinion",b:8} 
];




var dummydata_wom_e = [
{a:"Agree",b:6},
{a:"Disagree",b:9},
{a:"No Opinion",b:22} 
];

var data_wom_e = [
{a:"Agree",b:33},
{a:"Disagree",b:56},
{a:"No Opinion",b:11} 
];




var dummydata_wom_f = [
{a:"Agree",b:6},
{a:"Disagree",b:9},
{a:"No Opinion",b:22} 
];

var data_wom_f = [
{a:"Agree",b:53},
{a:"Disagree",b:33},
{a:"No Opinion",b:14} 
];



///
/// Lifting restrictions on women in combat will improve the public recognition of their contributions
var dummydata_wom_g = [
{a:"Agree",b:6},
{a:"Disagree",b:9},
{a:"No Opinion",b:22} 
];

var data_wom_g = [
{a:"Agree",b:39},
{a:"Disagree",b:46},
{a:"No Opinion",b:15} 
];



////
////


////////
////The civilian public treats women veterans with respect

var dummydata_wom_g_ = [
{a:"Strongly Agree",b:34},
{a:"Agree",b:29},
{a:"Neutral",b:22},
{a:"Disagree",b:6},
{a:"Strongly Disagree",b:9}
];

var data_wom_g_ = [
{a:"Strongly Agree",b:3},
{a:"Agree",b:24},
{a:"Neutral",b:32},
{a:"Disagree",b:31},
{a:"Strongly Disagree",b:10}
];

/////////////////////
//////// Fellow service members treat women service members with respect


var dummydata_wom_h_ = [
{a:"Strongly Agree",b:34},
{a:"Agree",b:29},
{a:"Neutral",b:22},
{a:"Disagree",b:6},
{a:"Strongly Disagree",b:9}
];

var data_wom_h_ = [
{a:"Strongly Agree",b:25},
{a:"Agree",b:49},
{a:"Neutral",b:12},
{a:"Disagree",b:10},
{a:"Strongly Disagree",b:4}
];


//////////
//////////////
////// Male military service members treat women service members with respect

var dummydata_wom_i_ = [
{a:"Strongly Agree",b:34},
{a:"Agree",b:49},
{a:"Neutral",b:2},
{a:"Disagree",b:6},
{a:"Strongly Disagree",b:9}
];

var data_wom_i_ = [
{a:"Strongly Agree",b:7},
{a:"Agree",b:36},
{a:"Neutral",b:27},
{a:"Disagree",b:23},
{a:"Strongly Disagree",b:7}
];



//////////
///////////////
//// VA employees treat women veterans with respect

var dummydata_wom_j_ = [
{a:"Strongly Agree",b:34},
{a:"Agree",b:29},
{a:"Neutral",b:22},
{a:"Disagree",b:6},
{a:"Strongly Disagree",b:9}
];

var data_wom_j_ = [
{a:"Strongly Agree",b:7},
{a:"Agree",b:37},
{a:"Neutral",b:35},
{a:"Disagree",b:16},
{a:"Strongly Disagree",b:5}
];



/////////
///////////
/////When asked whether the VA motto should be changed to be more inclusive of all who have served

var dummydata_wom_k_ = [
{a:"Strongly Agree",b:34},
{a:"Agree",b:29},
{a:"Neutral",b:22},
{a:"Disagree",b:6},
{a:"Strongly Disagree",b:9}
];

var data_wom_k_ = [
{a:"Strongly Agree",b:36},
{a:"Agree",b:23},
{a:"Neutral",b:31},
{a:"Disagree",b:5},
{a:"Strongly Disagree",b:5}
];





var dummydata_wom_k__ = [
{a:"Strongly Disagree",b:9},
{a:"Disagree",b:6},
{a:"Neutral",b:22},
{a:"Agree",b:29},
{a:"Strongly Agree",b:34}
];

var data_wom_k__ = [
{a:"Strongly Disagree",b:10},
{a:"Disagree",b:10},
{a:"Neutral",b:40},
{a:"Agree",b:26},
{a:"Strongly Agree",b:14}
];



///////
///////
////
 

var dummydata_wom_l_ = [
{a:"Strongly Disagree",b:9},
{a:"Disagree",b:6},
{a:"Neutral",b:22},
{a:"Agree",b:29},
{a:"Strongly Agree",b:34}
];

var data_wom_l_ = [
{a:"Strongly Disagree",b:5},
{a:"Disagree",b:5},
{a:"Neutral",b:31},
{a:"Agree",b:23},
{a:"Strongly Agree",b:36}
];



var dummydata_wom_m_ = [
{a:"Strongly Disagree",b:9},
{a:"Disagree",b:6},
{a:"Neutral",b:22},
{a:"Agree",b:29},
{a:"Strongly Agree",b:34}
];

var data_wom_m_ = [
{a:"Strongly Disagree",b:5},
{a:"Disagree",b:5},
{a:"Neutral",b:31},
{a:"Agree",b:23},
{a:"Strongly Agree",b:36}
];



var dummydata_wom_n_ = [
{a:"Strongly Disagree",b:9},
{a:"Disagree",b:6},
{a:"Neutral",b:22},
{a:"Agree",b:29},
{a:"Strongly Agree",b:34}
];

var data_wom_n_ = [
{a:"Strongly Disagree",b:5},
{a:"Disagree",b:5},
{a:"Neutral",b:31},
{a:"Agree",b:23},
{a:"Strongly Agree",b:36}
];



var dummydata_wom_o_ = [
{a:"Strongly Disagree",b:9},
{a:"Disagree",b:6},
{a:"Neutral",b:22},
{a:"Agree",b:29},
{a:"Strongly Agree",b:34}
];

var data_wom_o_ = [
{a:"Strongly Disagree",b:5},
{a:"Disagree",b:5},
{a:"Neutral",b:31},
{a:"Agree",b:23},
{a:"Strongly Agree",b:36}
];



var dummydata_wom_p_ = [
{a:"Strongly Disagree",b:9},
{a:"Disagree",b:6},
{a:"Neutral",b:22},
{a:"Agree",b:29},
{a:"Strongly Agree",b:34}
];

var data_wom_p_ = [
{a:"Strongly Disagree",b:5},
{a:"Disagree",b:5},
{a:"Neutral",b:31},
{a:"Agree",b:23},
{a:"Strongly Agree",b:36}
];



var dummydata_wom_q_ = [
{a:"Strongly Disagree",b:9},
{a:"Disagree",b:6},
{a:"Neutral",b:22},
{a:"Agree",b:29},
{a:"Strongly Agree",b:34}
];

var data_wom_q_ = [
{a:"Strongly Disagree",b:5},
{a:"Disagree",b:5},
{a:"Neutral",b:31},
{a:"Agree",b:23},
{a:"Strongly Agree",b:36}
];



var dummydata_wom_r_ = [
{a:"Strongly Disagree",b:9},
{a:"Disagree",b:6},
{a:"Neutral",b:22},
{a:"Agree",b:29},
{a:"Strongly Agree",b:34}
];

var data_wom_r_ = [
{a:"Strongly Disagree",b:5},
{a:"Disagree",b:5},
{a:"Neutral",b:31},
{a:"Agree",b:23},
{a:"Strongly Agree",b:36}
];



///
//////













var dummydata_wom_h = [
{a:"Strongly Disagree",b:9},
{a:"Disagree",b:6},
{a:"Neutral",b:22},
{a:"Agree",b:29},
{a:"Strongly Agree",b:34}
];

var data_wom_h = [
{a:"Strongly Disagree",b:9},
{a:"Disagree",b:6},
{a:"Neutral",b:22},
{a:"Agree",b:29},
{a:"Strongly Agree",b:34}
];


/////
///////

var numero_wom_a = [97];

var numero_wom_b = [90];


///
//////




var dummydata_wom_i = [
{a:"Strongly Disagree",b:9},
{a:"Disagree",b:6},
{a:"Neutral",b:22},
{a:"Agree",b:29},
{a:"Strongly Agree",b:34}
];

var data_wom_i = [
{a:"Strongly Agree",b:49},
{a:"Agree",b:25},
{a:"Neutral",b:12},
{a:"Disagree",b:10},
{a:"Strongly Disagree",b:4}
];



var dummydata_wom_j = [
{a:"Strongly Disagree",b:9},
{a:"Disagree",b:6},
{a:"Neutral",b:22},
{a:"Agree",b:29},
{a:"Strongly Agree",b:34}
];

var data_wom_j = [
{a:"Strongly Disagree",b:7},
{a:"Disagree",b:23},
{a:"Neutral",b:27},
{a:"Agree",b:7},
{a:"Strongly Agree",b:36}
];



var dummydata_wom_k = [
{a:"Strongly Disagree",b:9},
{a:"Disagree",b:6},
{a:"Neutral",b:22},
{a:"Agree",b:29},
{a:"Strongly Agree",b:34}
];

var data_wom_k = [
{a:"Strongly Disagree",b:5},
{a:"Disagree",b:16},
{a:"Neutral",b:35},
{a:"Agree",b:7},
{a:"Strongly Agree",b:37}
];



var dummydata_wom_l = [
{a:"Strongly Disagree",b:9},
{a:"Disagree",b:6},
{a:"Neutral",b:22},
{a:"Agree",b:29},
{a:"Strongly Agree",b:34}
];

var data_wom_l = [
{a:"Strongly Disagree",b:5},
{a:"Disagree",b:5},
{a:"Neutral",b:31},
{a:"Agree",b:23},
{a:"Strongly Agree",b:36}
];



var dummydata_wom_m = [
{a:"Strongly Disagree",b:9},
{a:"Disagree",b:6},
{a:"Neutral",b:22},
{a:"Agree",b:29},
{a:"Strongly Agree",b:34}
];

var data_wom_m = [
{a:"Strongly Disagree",b:10},
{a:"Disagree",b:10},
{a:"Neutral",b:40},
{a:"Agree",b:26},
{a:"Strongly Agree",b:14}
];

////////
///////////
////


///
//////


///////// When asked whether VA adequately provides
//// Women Veterans Program Managers/Coordinators
var dummydata_wom_n = [
{a:"Yes",b:70},
{a:"No",b:30}
];

var data_wom_n = [
{a:"Yes",b:30},
{a:"No",b:70}
];



var dummydata_wom_o = [
{a:"Yes",b:73},
{a:"No",b:27}
];

var data_wom_o = [
{a:"Yes",b:73},
{a:"No",b:27}
];



var dummydata_wom_p= [
{a:"Yes",b:43},
{a:"No",b:57}
];

var data_wom_p = [
{a:"Yes",b:52},
{a:"No",b:48}
];



var dummydata_wom_q = [
{a:"Yes",b:40},
{a:"No",b:60}
];

var data_wom_q = [
{a:"Yes",b:60},
{a:"No",b:40}
];



var dummydata_wom_r = [
{a:"Yes",b:84},
{a:"No",b:16}
];

var data_wom_r = [
{a:"Yes",b:14},
{a:"No",b:86}
];

////////
///////////
////


/////
///////

var numero_wom_c = [83];

var numero_wom_d = [33];

var numero_wom_e = [57];

var numero_wom_f = [8];

var numero_wom_g = [50];

 
///
//////

 

///
//////
 




var dummydata_wom_s = [
{a:"Very Good",b:13},
{a:"Good",b:19},
{a:"Fair",b:39},
{a:"Poor",b:26},
{a:"Very Poor",b:13}
];

var data_wom_s = [
{a:"Very Good",b:13},
{a:"Good",b:20},
{a:"Fair",b:33},
{a:"Poor",b:15},
{a:"Very Poor",b:10}
];



var dummydata_wom_t= [
{a:"Very Good",b:15},
{a:"Good",b:33},
{a:"Fair",b:27},
{a:"Very Poor",b:9},
{a:"Poor",b:16}
];

var data_wom_t = [
{a:"Very Good",b:15},
{a:"Good",b:33},
{a:"Fair",b:27},
{a:"Poor",b:16},
{a:"Very Poor",b:9}
];



var dummydata_wom_u = [
{a:"Very Good",b:22},
{a:"Good",b:40},
{a:"Fair",b:21},
{a:"Poor",b:10},
{a:"Very Poor",b:7}
];

var data_wom_u = [
{a:"Very Good",b:22},
{a:"Good",b:40},
{a:"Fair",b:21},
{a:"Poor",b:10},
{a:"Very Poor",b:7}
];



var dummydata_wom_v = [
{a:"Very Good",b:15},
{a:"Good",b:39},
{a:"Fair",b:29},
{a:"Poor",b:11},
{a:"Very Poor",b:6}

];

var data_wom_v = [
{a:"Very Good",b:15},
{a:"Good",b:39},
{a:"Fair",b:29},
{a:"Poor",b:11},
{a:"Very Poor",b:6}
];

//////////
////////////// 


var dummydata_wom_w = [
{a:"Strongly Agree",b:34},
{a:"Agree",b:29},
{a:"Neutral",b:22},
{a:"Disagree",b:6},
{a:"Strongly Disagree",b:9}
];

var data_wom_w = [
{a:"Strongly Agree",b:34},
{a:"Agree",b:29},
{a:"Neutral",b:22},
{a:"Disagree",b:6},
{a:"Strongly Disagree",b:9},
];



var dummydata_wom_x= [
{a:"Strongly Agree",b:34},
{a:"Agree",b:29},
{a:"Neutral",b:22},
{a:"Disagree",b:6},
{a:"Strongly Disagree",b:9}
];

var data_wom_x = [
{a:"Strongly Agree",b:34},
{a:"Agree",b:29},
{a:"Neutral",b:22},
{a:"Disagree",b:6},
{a:"Strongly Disagree",b:9}
];


/////////////////
////////////
////// one number charts
///// sexual assault
var dummydata_wom_y = [
{a:"DoD Effectively Addressing",b:19}, 
{a:"Not Effectively Addressing",b:81},
{a:"No Opinion",b:1} 
];

var data_wom_y = [
{a:"DoD Effectively Addressing",b:19}, 
{a:"Not Effectively Addressing",b:68},
{a:"No Opinion",b:13} 

];



var dummydata_wom_z = [
{a:"DoD Effectively Addressing",b:33}, 
{a:"Not Effectively Addressing",b:67},
{a:"No Opinion",b:1} 

];

var data_wom_z = [
{a:"DoD Effectively Addressing",b:33}, 
{a:"Not Effectively Addressing",b:42},
{a:"No Opinion",b:25} 

];







var dummydata_wom_aaa = [
{a:"Women",b:45},
{a:"Men",b:55}
];

var data_wom_aaa = [
{a:"Women",b:35},
{a:"Men",b:15}
];







var dummydata_wom_aa = [
{a:"Survivor",b:45},
{a:"N/A",b:55}
];

var data_wom_aa = [
{a:"Survivor",b:35},
{a:"N/A",b:65}
];




var dummydata_wom_bb = [
{a:"Survivor",b:1},
{a:"N/A",b:99}
];

var data_wom_bb = [
{a:"Survivor",b:1},
{a:"N/A",b:99}
];



var dummydata_wom_cc= [
{a:"Reported the Crime",b:60},
{a:"Did Not Report",b:40}
];

var data_wom_cc = [
{a:"Reported the Crime",b:40},
{a:"Did Not Report",b:60}
];


var dummydata_wom_dd= [
{a:"Reported the Crime",b:78},
{a:"Did Not Report",b:12}
];

var data_wom_dd = [
{a:"Reported the Crime",b:28},
{a:"Did Not Report",b:72}
];



var dummydata_wom_ee = [
{a:"Experienced Retaliation",b:21},
{a:"Did not experience retaliation",b:79},
{a:"Prefer not to answer",b:79}
];

var data_wom_ee = [
{a:"Experienced Retaliation",b:71},
{a:"Did not experience retaliation",b:22},
{a:"Prefer not to answer",b:7}
];


var dummydata_wom_ff = [
{a:"Experienced Retaliation",b:14},
{a:"Did not experience retaliation",b:76},
{a:"Prefer not to answer",b:79}
];

var data_wom_ff = [
{a:"Experienced Retaliation",b:64},
{a:"Did not experience retaliation",b:27},
{a:"Prefer not to answer",b:9}
];

///////////
////////////

//////////////////
/////////////////////
// more authority figufe

var dummydata_wom_gg = [
{a:"Less of an Authority Figure",b:9},
{a:"Would Not Impact View",b:6},
{a:"More of an Authority Figure",b:22} 
];

var data_wom_gg = [
{a:"Less of an Authority Figure",b:10},
{a:"Would Not Impact View",b:84},
{a:"More of an Authority Figure",b:6} 
];



 

var dummydata_wom_hh = [
{a:"Less of an Authority Figure",b:18},
{a:"Would Not Impact View",b:77},
{a:"More of an Authority Figure",b:5} 
];

var data_wom_hh = [
{a:"Less of an Authority Figure",b:18},
{a:"Would Not Impact View",b:77},
{a:"More of an Authority Figure",b:5} 
];

 ///////////
 /////
 ////bottom 2
 /////////////

var dummydata_wom_ii = [
{a:"More likely to report",b:56},
{a:"Less likely to report",b:44},
{a:"No impact",b:44}
];

var data_wom_ii = [
{a:"More likely to report",b:46},
{a:"Less likely to report",b:1},
{a:"No impact",b:53}
];

 


var dummydata_wom_jj = [
{a:"More likely to report",b:65},
{a:"Less likely to report",b:35},
{a:"No impact",b:44}
];

var data_wom_jj = [
{a:"More likely to report",b:35},
{a:"Less likely to report",b:2},
{a:"No impact",b:63}
];



////////
///////////
////



//////////////


////////
///////////
////

/////////
/////////
////////////


var dummydata_wom_kk = [
{a:"Strongly Disagree",b:9},
{a:"Disagree",b:6},
{a:"Neutral",b:22},
{a:"Agree",b:29},
{a:"Strongly Agree",b:34}
];

var data_wom_kk = [
{a:"Strongly Disagree",b:9},
{a:"Disagree",b:6},
{a:"Neutral",b:22},
{a:"Agree",b:29},
{a:"Strongly Agree",b:34}
];

 

////////
///////////
////
//////////

/////
/////// post-9/11 GI Bill



var data_gib_a = [
{a:"Eligible",b:92},
{a:"Ineligible",b:8}
];



var dummydata_gib_a = [
{a:"Eligible",b:2},
{a:"Ineligible",b:98}
];




var data_gib_b = [
{a:"Have Used",b:55},
{a:"Transfered to Dependent",b:11},
{a:"Intend to Use",b:24},
{a:"Plan not to use",b:10}
];



var dummydata_gib_b = [
{a:"Have Used",b:4},
{a:"Transfered to Dependent",b:8},
{a:"Intend to Use",b:78},
{a:"Plan not to use",b:10}
];





/////
///////
var numero_gib = [92];

var numero_gib_nocuts = [87];

var numero_gib_a = [55];
var numero_gib_b = [11];
var numero_gib_c = [24];




var data_gib_c = [
{a:"Excellent",b:37},
{a:"Good",b:37},
{a:"Fair",b:11},
{a:"Neutral",b:10},
{a:"Poor",b:5}
];



var dummydata_gib_c = [
{a:"Excellent",b:25},
{a:"Good",b:10},
{a:"Fair",b:15},
{a:"Neutral",b:25},
{a:"Poor",b:25}
];






var dummydata_gib_d = [
{a:"Very Important",b:10},
{a:"Important",b:20},
{a:"Moderately Important",b:20},
{a:"Slightly Important",b:30},
{a:"Not Important",b:20}
];

var data_gib_d = [
{a:"Very Important",b:45},
{a:"Important",b:31},
{a:"Moderately Important",b:13},
{a:"Slightly Important",b:8},
{a:"Not Important",b:3}
];

 




var dummydata_gib_e = [
{a:"Very Important",b:9},
{a:"Important",b:6},
{a:"Moderately Important",b:22},
{a:"Slightly Important",b:29},
{a:"Not Important",b:34}
];

var data_gib_e = [
{a:"Very Important",b:30},
{a:"Important",b:26},
{a:"Moderately Important",b:19},
{a:"Slightly Important",b:13},
{a:"Not Important",b:12}
];

 




var dummydata_gib_f = [
{a:"Very Important",b:9},
{a:"Important",b:6},
{a:"Moderately Important",b:22},
{a:"Slightly Important",b:29},
{a:"Not Important",b:34}
];

var data_gib_f = [
{a:"Very Important",b:69},
{a:"Important",b:19},
{a:"Moderately Important",b:7},
{a:"Slightly Important",b:3},
{a:"Not Important",b:2}
];

 ///////////////////////////////////////////
 ////////////////////////////////
 ///////////////
 ///////////
/////// education
//////////////

var numero_ed_a = [61];
var numero_ed_b = [35];
////
//// loans number
var numero_ed_c = [46];


/// ed benefits used
var dummydata_ed_a = [
{a:"Post-9/11 GI Bill",b:77},
{a:"Montgomery GI Bill",b:9},
{a:"Vocational Rehabilitation",b:7},
{a:"Reserve Education Assistance Program",b:3},
{a:"Other",b:4}
];

var data_ed_a = [
{a:"Post-9/11 GI Bill",b:56},
{a:"Montgomery GI Bill",b:22},
{a:"Vocational Rehabilitation",b:15},
{a:"Reserve Education Assistance Program",b:3},
{a:"Other",b:4}
];

/// type of school
var dummydata_ed_b = [
{a:"Community College",b:56},
{a:"State School",b:22},
{a:"For Profit",b:15},
{a:"Technical, Vocational, Trade",b:13} 
];

var data_ed_b = [
{a:"Community College",b:20},
{a:"State School",b:47},
{a:"For Profit",b:25},
{a:"Technical, Vocational, Trade",b:8} 
];

/// satisfaction with ed program
var dummydata_ed_c = [
{a:"Very Satisfied",b:34},
{a:"Satisfied",b:45},
{a:"Neither Satisfied or Dissatisfied",b:13},
{a:"Dissatisfied",b:8}
];

var data_ed_c = [
{a:"Very Satisfied",b:34},
{a:"Satisfied",b:45},
{a:"Neither Satisfied or Dissatisfied",b:13}, 
{a:"Dissatisfied",b:8}
];

/// amount of debt
var dummydata_ed_d = [
{a:"None",b:50},
{a:"Under $1000",b:2},
{a:"$1,001-$5,000",b:6},
{a:"$5,001-$10,000",b:8},
{a:"$10,001-$15,000",b:8},
{a:"$15,001-$20,000",b:5},
{a:"$20,001-$50,000",b:15},
{a:"$50,001-$100,000",b:15},
 {a:"Above $100,000",b:4}
];

var data_ed_d = [
{a:"None",b:50},
{a:"Under $1000",b:2},
{a:"$1,001-$5,000",b:6},
{a:"$5,001-$10,000",b:8},
{a:"$10,001-$15,000",b:8},
{a:"$15,001-$20,000",b:5},
{a:"$20,001-$50,000",b:13},
{a:"$50,001-$100,000",b:5},
 {a:"Above $100,000",b:3}
];



///////////
 //////////////
 /////////////////
 ///////////////
/// employment
//
/// empl status
/// 2017
var dummydata_employ_a = [
{a:"Full-time employment",b:60},
{a:"Part-time employment",b:22},
{a:"Unemployed and looking for work",b:15},
{a:"Other",b:3} 
];

var data_employ_a = [
{a:"Full-time employment",b:57},
{a:"Part-time employment",b:5},
{a:"Unemployed and looking for work",b:6},
{a:"Other",b:32} 
];

/// 2016
var dummydata_employ_b = [
{a:"Full-time employment",b:60},
{a:"Part-time employment",b:22},
{a:"Unemployed and looking for work",b:15},
{a:"Other",b:3} 
];

var data_employ_b = [
{a:"Full-time employment",b:53},
{a:"Part-time employment",b:7},
{a:"Unemployed and looking for work",b:8},
{a:"Other",b:32} 
];


/// 2015
var dummydata_employ_c = [
{a:"Full-time employment",b:60},
{a:"Part-time employment",b:22},
{a:"Unemployed and looking for work",b:15},
{a:"Other",b:3} 
];

var data_employ_c = [
{a:"Full-time employment",b:46},
{a:"Part-time employment",b:7},
{a:"Unemployed and looking for work",b:10},
{a:"Other",b:37} 
];

/// 2014
var dummydata_employ_d = [
{a:"Full-time employment",b:60},
{a:"Part-time employment",b:22},
{a:"Unemployed and looking for work",b:15},
{a:"Other",b:3} 
];

var data_employ_d = [
{a:"Full-time employment",b:37},
{a:"Part-time employment",b:8},
{a:"Unemployed and looking for work",b:10},
{a:"Other",b:45} 
];



////
//// loans number
var numero_employ_a = [65];

////
//// loans number
var numero_employ_b = [37];
////
//// loans number
var numero_employ_c = [36];
////
//// loans number
var numero_employ_d = [24];



/// Top 5 Industries of Employment
var dummydata_employ_e = [
{a:"Government",b:28},
{a:"Health Care",b:8},
{a:"Telecommunications",b:10},
{a:"Education",b:5},
{a:"Manufacturing",b:45} 
];

var data_employ_e = [
{a:"Government",b:32},
{a:"Health Care",b:9},
{a:"Telecommunications",b:5},
{a:"Education",b:5},
{a:"Manufacturing",b:4} 
];

////////
////////////
//// va health care utilization
///////////////
/// percentage support full privatization
var dummydata_va_a= [
{a:"Support",b:36},
{a:"Do Not Support",b:54},

{a:"No Opinion",b:10}

];

var data_va_a = [
{a:"Support",b:26},
{a:"Do Not Support",b:54},
{a:"No Opinion",b:20}
];
///////////////
/// percentage support full privatization
var dummydata_va_b= [
{a:"Very Good",b:37},
{a:"Good",b:33},
{a:"Fair",b:10},
{a:"Poor",b:10},
{a:"Very Poor",b:10}

];

var data_va_b = [
{a:"Very Good",b:13},
{a:"Good",b:29},
{a:"Fair",b:33},
{a:"Poor",b:15},
{a:"Very Poor",b:10}
];
///////////////
/// percentage support full privatization
var dummydata_va_c= [
{a:"Enrolled",b:46},
{a:"Not Enrolled",b:54}

];

var data_va_c = [
{a:"Enrolled",b:82},
{a:"Not Enrolled",b:18}

];

///////////////
/// forms of care
var dummydata_va_bars= [
{a:"VA health care exclusively",b:5},
{a:"TRICARE and VA health care",b:5},
{a:"VA supplemented by private insurance",b:5},
{a:"VA supplemented by Medicaid/Medicare",b:5},
{a:"DOD and VA health care",b:5},
{a:"Private insurance exclusively",b:5},
{a:"TRICARE exclusively",b:5},
{a:"DOD health care exclusively",b:5},
{a:"Don’t have health insurance",b:5},
{a:"DOD supplemented by private insurance",b:55},

];

var data_va_bars = [
{a:"VA health care exclusively",b:28},
{a:"TRICARE and VA health care",b:17},
{a:"VA supplemented by private insurance",b:15},
{a:"VA supplemented by Medicaid/Medicare",b:4},
{a:"DOD and VA health care",b:2},
{a:"Private insurance exclusively",b:18},
{a:"TRICARE exclusively",b:10},
{a:"DOD health care exclusively",b:3},
{a:"Don’t have health insurance",b:2},
{a:"DOD supplemented by private insurance",b:1},

];




////
//// loans number
var numero_va_a = [28];

////
//// loans number
var numero_va_b = [38];
////
//// loans number
var numero_va_c = [90];


////////
////////////
//// va health care continued
///////////////
/// Clinicians provide quality care to veterans
var dummydata_va_d = [
{a:"Strongly Agree",b:13},
{a:"Agree",b:54},
{a:"Neither Agree Nor Disagree",b:2},
{a:"Disagree",b:2},
{a:"Strongly Disagree",b:20},
{a:"No Opinion",b:9}

];

var data_va_d = [
{a:"Strongly Agree",b:11},
{a:"Agree",b:37},
{a:"Neither Agree Nor Disagree",b:21},
{a:"Disagree",b:18},
{a:"Strongly Disagree",b:10},
{a:"No Opinion",b:3}
];
///////////////

var dummydata_va_e = [
{a:"Strongly Agree",b:13},
{a:"Agree",b:54},
{a:"Neither Agree Nor Disagree",b:2},
{a:"Disagree",b:2},
{a:"Strongly Disagree",b:20},
{a:"No Opinion",b:9}

];

var data_va_e = [
{a:"Strongly Agree",b:14},
{a:"Agree",b:48},
{a:"Neither Agree Nor Disagree",b:23},
{a:"Disagree",b:5},
{a:"Strongly Disagree",b:2},
{a:"No Opinion",b:8}
];




///////////////
/// Clinicians provide quality care to veterans
var dummydata_va_f = [
{a:"Strongly Agree",b:62},
{a:"Agree",b:15},
{a:"Neither Agree Nor Disagree",b:10},
{a:"Disagree",b:2},
{a:"Strongly Disagree",b:2},
{a:"No Opinion",b:9}

];

var data_va_f = [
{a:"Strongly Agree",b:6},
{a:"Agree",b:26},
{a:"Neither Agree Nor Disagree",b:15},
{a:"Disagree",b:31},
{a:"Strongly Disagree",b:20},
{a:"No Opinion",b:2}
];
///////////////

var dummydata_va_g = [
{a:"Strongly Agree",b:2},
{a:"Agree",b:54},
{a:"Neither Agree Nor Disagree",b:20},
{a:"Disagree",b:10},
{a:"Strongly Disagree",b:10},
{a:"No Opinion",b:2}

];

var data_va_g = [
{a:"Strongly Agree",b:15},
{a:"Agree",b:45},
{a:"Neither Agree Nor Disagree",b:22},
{a:"Disagree",b:7},
{a:"Strongly Disagree",b:3},
{a:"No Opinion",b:8}
];





///////////////
/// Clinicians provide timely care to veterans
var dummydata_va_h = [
{a:"Strongly Agree",b:26},
{a:"Agree",b:15},
{a:"Neither Agree Nor Disagree",b:44},
{a:"Disagree",b:2},
{a:"Strongly Disagree",b:10},
{a:"No Opinion",b:3}

];

var data_va_h = [
{a:"Strongly Agree",b:12},
{a:"Agree",b:41},
{a:"Neither Agree Nor Disagree",b:20},
{a:"Disagree",b:16},
{a:"Strongly Disagree",b:8},
{a:"No Opinion",b:3}
];
////////////////////
////////////
//// Clinicians understand the medical needs of veterans
var dummydata_va_i = [
{a:"Strongly Agree",b:16},
{a:"Agree",b:54},
{a:"Neither Agree Nor Disagree",b:3},
{a:"Disagree",b:10},
{a:"Strongly Disagree",b:10},
{a:"No Opinion",b:7}

];

var data_va_i = [
{a:"Strongly Agree",b:4},
{a:"Agree",b:24},
{a:"Neither Agree Nor Disagree",b:36},
{a:"Disagree",b:21},
{a:"Strongly Disagree",b:6},
{a:"No Opinion",b:9}

];







////have used choice program
//// 
var numero_va_d = [20];

////
//// support extensio of Choice Prog
var numero_va_e = [91];
////

////////////////////
////////////
//// Experience with Choice Program
var dummydata_va_j = [
{a:"Excellent",b:24},
{a:"Above Average",b:4},
{a:"Average",b:6},
{a:"Below Average",b:21},
{a:"Very Poor",b:36}
];

var data_va_j = [
{a:"Excellent",b:15},
{a:"Above Average",b:22},
{a:"Average",b:35},
{a:"Below Average",b:13},
{a:"Very Poor",b:15}
 ];


////
//// loans number
var numero_va_f = [76];
////


////////////////////
////////////
//// Satisfaction with Bene
var dummydata_va_k = [
{a:"Satisfied",b:40},
{a:"Not Satisfied",b:24},
{a:"Have Not Used",b:36} 

];

var data_va_k = [
{a:"Satisfied",b:58},
{a:"Not Satisfied",b:25},
{a:"Have Not Used",b:17} 
];


//

var dummydata_va_l = [
{a:"Satisfied",b:40},
{a:"Not Satisfied",b:24},
{a:"Have Not Used",b:36} 

];

var data_va_l = [
{a:"Satisfied",b:14},
{a:"Not Satisfied",b:8},
{a:"Have Not Used",b:78} 
];

//

var dummydata_va_m = [
{a:"Satisfied",b:40},
{a:"Not Satisfied",b:24},
{a:"Have Not Used",b:36} 

];

var data_va_m = [
{a:"Satisfied",b:69},
{a:"Not Satisfied",b:15},
{a:"Have Not Used",b:16} 
];

//

var dummydata_va_n = [
{a:"Satisfied",b:40},
{a:"Not Satisfied",b:24},
{a:"Have Not Used",b:36} 

];

var data_va_n = [
{a:"Satisfied",b:53},
{a:"Not Satisfied",b:5},
{a:"Have Not Used",b:42} 
];

//
 //

var dummydata_va_o = [
{a:"Satisfied",b:40},
{a:"Not Satisfied",b:24},
{a:"Have Not Used",b:36} 

];

var data_va_o = [
{a:"Satisfied",b:17},
{a:"Not Satisfied",b:10},
{a:"Have Not Used",b:73} 
];

//

var dummydata_va_p = [
{a:"Satisfied",b:40},
{a:"Not Satisfied",b:24},
{a:"Have Not Used",b:36} 

];

var data_va_p = [
{a:"Satisfied",b:17},
{a:"Not Satisfied",b:14},
{a:"Have Not Used",b:69} 
];

 
//

var dummydata_va_q = [
{a:"Satisfied",b:40},
{a:"Not Satisfied",b:24},
{a:"Have Not Used",b:36} 

];

var data_va_q = [
{a:"Satisfied",b:8},
{a:"Not Satisfied",b:8},
{a:"Have Not Used",b:84} 
];

 
 ////have used choice program
//// 
  
////////
//////////////////////////////
//// va health care utilization
/////////////////////////
/// have a service injury
//////////////////////////////
var dummydata_mental_a = [
{a:"Yes",b:80},
{a:"No",b:20}

];

var data_mental_a = [
{a:"Yes",b:57},
{a:"No",b:43}
];
///////
////////
////////seeking help
var dummydata_mental_b= [
{a:"Yes",b:80},
{a:"No",b:20}
];

var data_mental_b = [
{a:"Yes",b:73},
{a:"No",b:27}
];
///////////////


////
////  
var numero_mental_a = [16];

////
////  
var numero_mental_b = [53];
////
////  
var numero_mental_c = [80];


////////
/////////////////////
////////////////////
////// suicide
///

////
////  
var numero_suicide_a = [24];

///
////////////////////////
////////
//////// When asked whether they had ever considered taking their own lives
//
////////// 2017
////
var dummydata_suicide_a = [
{a:"Prior to joining the military",b:5},
{a:"Since joining the military",b:37}
];

var data_suicide_a = [
{a:"Prior to joining the military",b:5},
{a:"Since joining the military",b:37}
];
//
////////// 2016
////


var dummydata_suicide_aa = [
{a:"2017 Prior to joining",b:5},
{a:"2017 Since joining",b:37},
 {a:"2015 Prior to joining",b:6},
{a:"2015 Since joining",b:40},
 {a:"2014 Prior to joining",b:6},
{a:"2014 Since joining",b:31} 
];

var data_suicide_aa = [
{a:"2017 Prior to joining",b:5},
{a:"2017 Since joining",b:37},
 {a:"2015 Prior to joining",b:6},
{a:"2015 Since joining",b:40},
 {a:"2014 Prior to joining",b:6},
{a:"2014 Since joining",b:31} 
];


//
//
////////// When asked whether they had ever considered taking their own lives...
////

//
////////// Know a post-9/11 veteran who has attempted suicide
////
//
 ////

var dummydata_suicide_d = [
{a:"2017-2016",b:5},
{a:"2015",b:5},
{a:"2014",b:5}
];

var data_suicide_d = [
{a:"2017-2016",b:65},
{a:"2015",b:54},
{a:"2014",b:47}
];
////
//

//
////////// Know a post-9/11 veteran that has died by suicide
////
//
 ////

var dummydata_suicide_e = [
{a:"2017-2016",b:5},
{a:"2015",b:5},
{a:"2014",b:5}
];

var data_suicide_e = [
{a:"2017-2016",b:58},
{a:"2015",b:45},
{a:"2014",b:40}
];
////
//
//////////  
////
 //////////////////////////
 //////////////
 //////// General Health
 //
 ////////
//
 ////Service Related Injuries


var dummydata_health_a = [
{a:"PTSD",b:6},
{a:"Anxiety",b:5},
{a:"Depression",b:2},
{a:"Tinnitus/Hearing Loss",b:4},
{a:"Musculoskeletal Injuries/ Chronic Pain",b:8},
{a:"TBI",b:9},
{a:"Pulmonary issues",b:9},
{a:"Burns/Scarring",b:1},
{a:"Vision Loss",b:7},
{a:"Other",b:1}
];

var data_health_a = [
{a:"PTSD",b:46},
{a:"Anxiety",b:45},
{a:"Depression",b:42},
{a:"Tinnitus/Hearing Loss",b:41},
{a:"Musculoskeletal Injuries/ Chronic Pain",b:38},
{a:"TBI",b:19},
{a:"Pulmonary issues",b:19},
{a:"Burns/Scarring",b:11},
{a:"Vision Loss",b:7},
{a:"Other",b:19}
];
////
//
//
 ////Service Related Injuries


var dummydata_health_b = [
{a:"Chiropractic Care",b:46},
{a:"Meditation",b:42},
{a:"Yoga",b:41},
{a:"Outdoor Adventure",b:38},
{a:"Acupuncture",b:19},
{a:"Music or Art Therapy",b:19},
{a:"Animal-Assisted",b:11} 

];

var data_health_b = [
{a:"Chiropractic Care",b:29},
{a:"Meditation",b:25},
{a:"Yoga",b:21},
{a:"Outdoor Adventure",b:19},
{a:"Acupuncture",b:17},
{a:"Music or Art Therapy",b:14},
{a:"Animal-Assisted",b:10} 
];
////
//
//////////  
////
 
 /////////////
///////////////
/////////////
////////



////
////  
var numero_health_a = [80];

var numero_health_b = [63];

var numero_health_c = [35];

var numero_health_d = [6];

var numero_health_e = [23];

var numero_health_f = [80];

///
////////////////////////
////////


////////// When asked to rate their overall health before joining the military and now
////
//
 //// before

var dummydata_health_c = [
{a:"Excellent",b:40},
{a:"Good",b:5},
{a:"Fair",b:55}
];

var data_health_c = [
{a:"Excellent",b:74},
{a:"Good",b:23},
{a:"Fair",b:3}
];
////
//
//
 //// after

var dummydata_health_d = [
{a:"Excellent",b:5},
{a:"Good",b:5},
{a:"Fair",b:3},
{a:"Poor",b:3}
];

var data_health_d = [
{a:"Excellent",b:7},
{a:"Good",b:29},
{a:"Fair",b:43},
{a:"Poor",b:21}
];
////
//
//////////  
////

 //// Medications

var dummydata_health_e = [
{a:"Anti-depressant",b:3},
{a:"Opioid",b:3},
{a:"Sleeping Pills",b:5},
{a:"Anti-anxiety",b:5}
];

var data_health_e = [
{a:"Anti-depressant",b:23},
{a:"Opioid",b:23},
{a:"Sleeping Pills",b:22},
{a:"Anti-anxiety",b:20}
];
////
//
//////////  
////
//////////  
////
 //////////////////////////
 //////////////
 //////// Transition Experiences
 //
 ////////
///When asked if they experienced challenges when transitioning out of the military
 ////  

var dummydata_tran_a = [
{a:"None",b:23},
{a:"Few",b:23},
{a:"Some",b:25},
{a:"Many",b:25}
];

var data_tran_a = [
{a:"None",b:10},
{a:"Few",b:16},
{a:"Some",b:42},
{a:"Many",b:32}
];
////
//

////
////  
var numero_tran_a = [42];

var numero_tran_b = [66];

var numero_tran_c = [25];

var numero_tran_d = [63];

var numero_tran_e = [23];

 
///
////////////////////////
////////

////
///////////////
///////////
///////////


var scrollVis = function() {
  // constants to define the size
  // and margins of the vis area.

  var width = window.innerWidth,
    height = window.innerHeight;

  var margin = {
    top: 10,
    left: 20,
    bottom: 80,
    right: 10
  };

  /////
  var countslides = 0;
  // Keep track of which visualization
  // we are on and which was the last
  // index activated. When user scrolls
  // quickly, we want to call all the
  // activate functions that they pass.
  var lastIndex = -1;
  var activeIndex = 0;

  // main svg used for visualization
  var svg = null;

  // d3 selection that will be used
  // for displaying visualizations
  var g = null;

  // When scrolling to a new section
  // the activation function for that
  // section is called.
  var activateFunctions = [];
  // If a section has an update function
  // then it is called while scrolling
  // through the section with the current
  // progress through the section.
  var updateFunctions = [];




  /**
   * chart
   *
   * @param selection - the current d3 selection(s)
   *  to draw the visualization in. For this
   *  example, we will be drawing it in #vis
   */
  var chart = function(selection) {
    selection.each(function() {
      setupSections();
    });
  };

  /**
   * setupVis - creates initial elements for all
   * sections of a visualization.
   */
  setupVis = function() {};

  /**
   * setupSections - each section is activated
   * by a separate function. Here we associate
   * these functions to the sections based on
   * the section's index.
   *
   */
  setupSections = function() {
    // activateFunctions are called each
    // time the active section changes

    activateFunctions[0] = showTitle0;
    activateFunctions[1] = showTitle1;
    activateFunctions[2] = showTitle2;
    activateFunctions[3] = showTitle3;
    activateFunctions[4] = showTitle4;
    activateFunctions[5] = showTitle5;
    activateFunctions[6] = showTitle6;
    activateFunctions[7] = showTitle7;
    activateFunctions[8] = showTitle8;
    activateFunctions[9] = showTitle9;
    activateFunctions[10] = showTitle10;
    activateFunctions[11] = showTitle11;
    activateFunctions[12] = showTitle12;
    activateFunctions[13] = showTitle13;

    activateFunctions[14] = showTitle14;
    activateFunctions[15] = showTitle15;
    activateFunctions[16] = showTitle16;
    activateFunctions[17] = showTitle17;
    activateFunctions[18] = showTitle18;

    activateFunctions[19] = showTitle19;
    activateFunctions[20] = showTitle20;
    activateFunctions[21] = showTitle21;
    activateFunctions[22] = showTitle22;
    activateFunctions[23] = showTitle23;
    activateFunctions[24] = showTitle24;
    activateFunctions[25] = showTitle25;
    activateFunctions[26] = showTitle26;
    activateFunctions[27] = showTitle27;

    // updateFunctions are called while
    // in a particular section to update
    // the scroll progress in that section.
    // Most sections do not need to be updated
    // for all scrolling and so are set to
    // no-op functions.
    for (var i = 0; i < 28 + 1; i++) {
 //////   for (var i = 0; i < window.slides.length + 1; i++) {
      updateFunctions[i] = function() {};
    }

      };

  /**
   * ACTIVATE FUNCTIONS
   *
   * These will be called their
   * section is scrolled to.
   *
   * General pattern is to ensure
   * all content for the current section
   * is transitioned in, while hiding
   * the content for the previous section
   * as well as the next section (as the
   * user may be scrolling up or down).
   *
   */

  /**
   *
   */
   function showTitle0() {
    //////////////
    ////////////
    /////////

    ////////////////////////////////////////////
    ///////// SET INITIAL CONTAINER VISIBILITY
    ////////////////////////////////////////////

    var vis = document.getElementById("vis");
    vis.setAttribute("style", "display:inline-block; ");
    
    var navbarmd = document.getElementById("navbar-md");
    navbarmd.setAttribute("style", "visibility:hidden; ");

 
    var logoOpener = document.getElementById("logoOpener");
    logoOpener.setAttribute("style", "display:inline-block; ");


    

    var bgvid0 = document.getElementById("bgvid0");
    bgvid0.setAttribute("style", "visibility:visible; ");

    

    var stepper = document.getElementById("step-1");
    stepper.setAttribute("style", "visibility:hidden; ");

 


    var greenoverlay = document.getElementById("greenoverlay");
    greenoverlay.setAttribute("style", "visibility:hidden; ");


    var greenoverlay = document.getElementById("greenoverlaycover");
    greenoverlay.setAttribute("style", "visibility:visible; ");

 
    var containerA = document.getElementById("container-1");
    containerA.setAttribute("style", "visibility:hidden; ");

 
 
    ////////////////////////////////////////////
    ////////////////////////////////////////////
    /////////////////////////////
  
 


///////////
///////////
/////////
 if (!numerotrigger) {

  
var start_val = 0,
    duration = 8000,
    end_val = [12, 1200000, 7300];

var qSVG = d3.select("#covernumeros").append("svg").attr("width", width).attr("height", height);

qSVG.selectAll(".txttxt")
    .data(end_val)
    .enter()
    .append("text")
    .text(start_val)
    .attr("class", "txttxt")
    .attr("x", 26)
    .attr("y", function(d, i) {
        return 100 + i * 72
    })
    .transition()
    .duration(3000)
        .tween("text", function(d) {
            var i = d3.interpolate(this.textContent, d),
                prec = (d + "").split("."),
                round = (prec.length > 1) ? Math.pow(10, prec[1].length) : 1;

            return function(t) {
                this.textContent = Math.round(i(t) * round) / round;
            };
        });

        ////////
        ///////
        ////////
        ////////////
        ////////
        


 numerotrigger=1;

}


///////////
//////////////
//////////////////

      if (!trigger) {

  
  //age  
drawPieChart(dummydata_a);


//marital
drawPieChart(dummydataset);

//community
drawPieChart(dummydata_h);

//employment
drawHBarChart(data_f);

//ethnicity
drawHBarChart(data_c);

//gender
drawHBarChartsm(data_b);

//education
drawHBarChart(data_g);

//household income  
drawHBarChart(data_e);

 ///////////
 /////////
 /////////

 

  //age  
drawPieChart(dummydata_i);
//gender
drawPieChart(dummydata_j);

//?
drawPieChart(dummydata_k);

    
//donut
//// former where did you serve
/////////////// drawPieChart(dummydata_l);





  //where did you serve?  
drawHBarChart(data_l);





  //deployments  
drawStackChart(data_m);
//deploy
drawStackChart(data_n);

  //deploy  
drawStackChart(data_o);
//deploy
drawStackChart(data_p);





//ideology
drawPieChart(dummydata_q);

    
//candidate support
drawPieChart(dummydata_r);

//candidate support
drawPieChart(dummydata_reg);

 
   startsmallnumerosA(numeroB);

 ///////////////////////////////////// startsmallnumerosB(numeroC);



  ////// startnumerosB(numeroD);



    startsmallnumerosA(numeroE);

//////


//////




  //mj  
drawStackChart(data_s);
//mh
drawStackChart(data_t);


  //fa  
drawStackChart(data_u);
//fa
drawStackChart(data_v);





  //fa  
drawStackChart(data_w);
//fa
drawStackChart(data_x);
//fa
drawStackChart(data_y);

 ////////

 //////
 //////
 //////
 //////////


//////////////////////////////
////////// 
//////////////////////////////
////////// Gun Ownership & Storage
 /////////////////////////////
 /////////////////////////////

startsmallnumerosA(numero_guns);

drawHBarChart(data_guns_own_aa);


//////////
///////////////////
//////////////////////////////
////////// military service
 /////////////////////////////
//   
drawStackChart(data_milserve_a);
//   
drawStackChart(data_milserve_b);
//   
drawStackChart(data_milserve_c);
//    
drawStackChart(data_milserve_d);
//    
drawStackChart(data_milserve_e);



////////////////////
////////// equality
 ////////////////
//   
drawStackChart(data_equality_a);
//   
drawStackChart(data_equality_c);
//   
drawStackChart(data_equality_b);
// impact  
drawStackChart(data_equality_d);




////
///// perceptions
///////perceptions numbers
  

   startnumerosA(numeroSupport);

   startnumerosB(numeroUnderstand);

   startnumerosC(numeroHire);


/////////////
//////////
 ////////////////
//obama  
drawStackChart(data_p_obama);
//trump  
drawStackChart(data_p_trump);
//congress  
drawStackChart(data_p_congress);





/////



/////////////
///////womens
/////////////////
  //issues  
drawStackChart(data_wom_a);
//////////
/////////////
//women in military questions  
drawStackChart(data_wom_b);
//womens  
drawStackChart(data_wom_c);
//womens  
drawStackChart(data_wom_d);

//womens  
drawStackChart(data_wom_e);
//womens  
drawStackChart(data_wom_f);
//womens  
drawStackChart(data_wom_g);
//womens
//////
/////

///////////////
 
startnumerosA(numero_wom_a);
///
startnumerosB(numero_wom_b);
 /////////////////
//////////////////////////////////////////////////////////////////

 /////////////
 /////////////////
//When asked their level of agreement with the following statement  
//womens  
/// The civilian public treats women veterans with respect
drawStackChart(data_wom_g_);
//womens  
//// Fellow service members treat women service members with respect
drawStackChart(data_wom_h_);
//womens  
drawStackChart(data_wom_i_);
//womens  
drawStackChart(data_wom_j_);
//womens  
drawStackChart(data_wom_k_);
//womens  
drawStackChart(data_wom_k__);
//womens

 /////////////
 /////////////////
 ////////////////
 ///// When asked whether VA adequately provides
 //////////////////////
//womens  
drawStackChart(data_wom_n);
//womens  
drawStackChart(data_wom_o);
//womens  
drawStackChart(data_wom_p);
//womens  
drawStackChart(data_wom_q);
//womens  
drawStackChart(data_wom_r);
//womens
///////////////////
///////////////


startnumerosA(numero_wom_c);
///
startnumerosB(numero_wom_d);
///
startnumerosC(numero_wom_e);
/////////////
 /////////////////

///////////////////
//// rate the following
/// 
 /////////////
 /////////////////
//womens  
///// va support for women
drawStackChart(data_wom_s);
//womens  
drawStackChart(data_wom_t);
//womens  
drawStackChart(data_wom_u);
//womens  
//// Quality of VA Benefits
drawStackChart(data_wom_v);
/////
///
startsmallnumerosA(numero_wom_f);
///
startsmallnumerosA(numero_wom_g);
////
//////////////////////////////////


 /////////////
 ///// sexuak assault
 /////////////////
//womens  
drawStackChart(data_wom_y);
//womens  
drawStackChart(data_wom_z);
//womens  
drawStackChart(data_wom_aa);
//womens  
drawStackChart(data_wom_bb);

//womens  
drawStackChart(data_wom_cc);
//womens  
drawStackChart(data_wom_dd);
//womens 
/// Survivors who experienced retaliation after reporting 
drawStackChart(data_wom_ee);
//womens  
// Survivors who experienced retaliation after reporting
drawStackChart(data_wom_ff);
/////////
//////
drawStackChart(data_wom_gg);
//////////
/////
drawStackChart(data_wom_hh);
//////////
/////
drawStackChart(data_wom_ii);
//////////
/////
drawStackChart(data_wom_jj);
//////////
/////


///////////////////
//// post 9/11 gi bill
/////

drawPieChart(dummydata_gib_a);

drawPieChart(dummydata_gib_b);

drawPieChart(dummydata_gib_c);

//////////
startsmallnumerosA(numero_gib_nocuts);

/////
drawStackChart(data_gib_d);


drawStackChart(data_gib_e);


drawStackChart(data_gib_f);


 //////////
/////
////// education
///
 //////////
startnumerosA(numero_ed_a);

startnumerosB(numero_ed_b);

startnumerosC(numero_ed_c);


drawStackChart(data_ed_a);

drawStackChart(data_ed_b);

drawStackChart(data_ed_c);




drawHBarChart(data_ed_d);

 //////////
/////
//////////
//// employment

drawStackChart(data_employ_a);

drawStackChart(data_employ_b);

drawStackChart(data_employ_c);

drawStackChart(data_employ_d);

drawHBarChart(data_employ_e);

startnumerosA(numero_employ_a);

startnumerosB(numero_employ_b);

startnumerosC(numero_employ_c);

startnumerosA(numero_employ_d);



////////
/// va health care utilization
///////

  //age  
drawPieChart(dummydata_va_a);
//gender
drawPieChart(dummydata_va_b);

//?
drawPieChart(dummydata_va_c);


drawHBarChart(data_va_bars);


startnumerosA(numero_va_a);

startnumerosB(numero_va_b);

startnumerosC(numero_va_c);


//////////
////
//// va health care utilization

drawStackChart(data_va_d);

drawStackChart(data_va_e);

drawStackChart(data_va_f);

drawStackChart(data_va_g);

drawStackChart(data_va_h);

drawStackChart(data_va_i);


drawStackChart(data_va_j);



startnumerosA(numero_va_d);

startnumerosB(numero_va_e);

startnumerosA(numero_va_f);



drawStackChart(data_va_k);


drawStackChart(data_va_l);


drawStackChart(data_va_m);


drawStackChart(data_va_n);


drawStackChart(data_va_o);


drawStackChart(data_va_p);


drawStackChart(data_va_q);

/////
///////
//// mental health
startnumerosA(numero_mental_a);

 
startnumerosB(numero_mental_b);

startnumerosC(numero_mental_c);

drawStackChart(data_mental_a);


drawStackChart(data_mental_b);




/////
///////
//// suicide 
startnumerosA(numero_suicide_a);

 
drawHBarChart(data_suicide_aa);

///////////drawHBarChartsm(data_suicide_b);
///////drawHBarChartsm(data_suicide_c);
drawHBarChartsm(data_suicide_d);
drawHBarChartsm(data_suicide_e);


/////
//// general health
// 
/// service related injuries
///
drawHBarChart(data_health_a);


drawHBarChart(data_health_b);


startnumerosA(numero_health_a);
startnumerosB(numero_health_b);
startnumerosC(numero_health_c);
startnumerosA(numero_health_d);
startnumerosB(numero_health_e);
startnumerosC(numero_health_f);


drawStackChart(data_health_c);
drawStackChart(data_health_d);


drawHBarChartsm(data_health_e);

///
//////
///////////////
/// transition experiences
///////////

drawStackChart(data_tran_a);
startnumerosA(numero_tran_a);
startnumerosB(numero_tran_b);
startnumerosC(numero_tran_c);
startnumerosA(numero_tran_d);
startnumerosB(numero_tran_e);





///
/////
/*

*/

 
////////////
///////////////
//////////////////
 trigger=1;
iii='';
} else {



/*
  //gender
changePieChart(dummydata_a,"svg0");


  //gender
changePieChart(dummydata_b,"svg1");

//?
changePieChart(dummydata_c,"svg2");

    
//donut
changePieChart(dummydataset,"svg3");




  //gender
changePieChart(dummydata_e,"svg4");


  //gender
changePieChart(dummydata_f,"svg5");

//?
changePieChart(dummydata_g,"svg6");

    
//donut
changePieChart(dummydata_h,"svg7");






////////////
////
///////
///////
//////////




  //gender
changePieChart(dummydata_i,"svg8");


  //gender
changePieChart(dummydata_j,"svg9");

//?
changePieChart(dummydata_k,"svg10");

    
//donut
changePieChart(dummydata_l,"svg11");



//?
changePieChart(dummydata_q,"svg16");

    
//donut
changePieChart(dummydata_r,"svg17");

 




/////////////
/////////////////
  //womens  
drawStackChart(dummydata_wom_a,"svg8");
//////////
/////////////
//womens///////////////////
//womens  
drawStackChart(dummydata_wom_b,"svg9");
//womens  
drawStackChart(dummydata_wom_c,"svg10");
//womens  
drawStackChart(dummydata_wom_d,"svg11");
//womens  
drawStackChart(dummydata_wom_e,"svg12");
//womens  
drawStackChart(dummydata_wom_f,"svg13");
//womens  
drawStackChart(dummydata_wom_g,"svg14");
//womens

 
 /////////////



///////////////
startnumerosA(numero_wom_a);
///
startnumerosB(numero_wom_b);
/////////////
 /////////////////




 /////////////////
//womens  
drawStackChart(dummydata_wom_g_,"svg17");
//womens  
drawStackChart(dummydata_wom_h_,"svg18");
//womens  
drawStackChart(dummydata_wom_i_,"svg19");
//womens  
drawStackChart(dummydata_wom_j_,"svg20");
//womens  
drawStackChart(dummydata_wom_k_,"svg21");
//womens  
drawStackChart(dummydata_wom_k__,"svg22");
//womens
///////////////////


 /////////////
 /////////////////
//womens  
drawStackChart(dummydata_wom_n,"svg23");
//womens  
drawStackChart(dummydata_wom_o,"svg24");
//womens  
drawStackChart(dummydata_wom_p,"svg25");
//womens  
drawStackChart(dummydata_wom_q,"svg26");
//womens  
drawStackChart(dummydata_wom_r,"svg27");
//womens
///////////////////
///////////////
 
///////////////////
///////////////
startnumerosA(numero_wom_c);
///
startnumerosB(numero_wom_d);
///
startnumerosC(numero_wom_e);
///
startsmallnumerosA(numero_wom_f);
///
startsmallnumerosB(numero_wom_g);
/////////////
 /////////////////



 /////////////
 /////////////////
//womens  
drawStackChart(dummydata_wom_s,"svg33");
//womens  
drawStackChart(dummydata_wom_t,"svg34");
//womens  
drawStackChart(dummydata_wom_u,"svg35");
//womens  
drawStackChart(dummydata_wom_v,"svg36");
//womens  




 /////////////
 /////////////////
//womens  
drawStackChart(dummydata_wom_y,"svg37");
//womens  
drawStackChart(dummydata_wom_z,"svg38");
//womens  
drawStackChart(dummydata_wom_aa,"svg39");
//womens  
drawStackChart(dummydata_wom_bb,"svg40");

//womens  
drawStackChart(dummydata_wom_cc,"svg41");
//womens  
drawStackChart(dummydata_wom_dd,"svg42");
//womens  
drawStackChart(dummydata_wom_ee,"svg43");
//womens  
drawStackChart(dummydata_wom_ff,"svg44");
//womens  







 /////////////
 /////////////////
//womens  
drawStackChart(dummydata_wom_gg,"svg45");
//womens  
drawStackChart(dummydata_wom_hh,"svg46");
//womens  
drawStackChart(dummydata_wom_ii,"svg47");
//womens  
drawStackChart(dummydata_wom_jj,"svg48");

/////////
////////

 



*/

 

}
    
    ///////////
    ///////////
  }

  /**
   *
   */
  function showTitle1() {
    ////////////////////////////////////////////
    ////////// Video item to turn off
    //////////
    ///////// var videoplay = document.getElementById('bgvid0');
    ///////// videoplay.setAttribute("style", "display:none; ");
    ///////////////////////////////////////////

    var greenoverlaycover = document.getElementById("greenoverlaycover");
    greenoverlaycover.setAttribute("style", "visibility:visible; ");

 
    ////////////////////////////////////////////
    ////////// Scroll prompt image turned off
    var scrollimg = document.getElementById("scrollimg");
    scrollimg.setAttribute("style", "display:none; ");


    var navbarmd = document.getElementById("navbar-md");
    navbarmd.setAttribute("style", "visibility:visible; ");
    navbarmd.setAttribute("style", "z-index:99999999; ");

 var covermenu = document.getElementById("covermenu");
    covermenu.setAttribute("style", "display:none; ");

 


    var logoOpener = document.getElementById("logoOpener");
    logoOpener.setAttribute("style", "display:none; ");



    var bgvid0 = document.getElementById("bgvid0");
    bgvid0.setAttribute("style", "visibility:hidden; ");



    var greenoverlay = document.getElementById("greenoverlay");
    greenoverlay.setAttribute("style", "visibility:visible; ");


    var containerA = document.getElementById("container-1");
    containerA.setAttribute("style", "visibility:hidden; ");


  }

  /**
   *
   *
   */
   
   
  function showTitle2() {
    
      

    var containerA = document.getElementById("container-1");
    containerA.setAttribute("style", "visibility:visible; ");



    var greenoverlay = document.getElementById("greenoverlay");
    greenoverlay.setAttribute("style", "visibility:visible; ");


//////////////
/// demographic pie charts
///////////////////


iii=0;

//donut refresh
changePieChart(data_a,"svg0");
 
  
//donut refresh
changePieChart(dataset,"svg1");

  //gender
changePieChart(data_h,"svg2");

  

  //gender
changeHBarChart(data_f,"svg3");


//donut refresh
changeHBarChart(data_c,"svg4");


//donut refresh
changeHBarChartsm(data_b,"svg5");
 
//?
changeHBarChart(data_g,"svg6");

    
//donut
changeHBarChart(data_e,"svg7");

/**/

////////
//////////
///////////////

  }

  /////////////
  //////////

  /**
   *
   */
  function showTitle3() {
  
    var containerA = document.getElementById("container-1");
    containerA.setAttribute("style", "visibility:hidden; ");

 
  //////  var greenoverlay = document.getElementById("greenoverlay");
  ///////////  greenoverlay.setAttribute("style", "visibility:hidden; ");

iii=8;

  //gender
changePieChart(data_i,"svg8");


  //gender
changePieChart(data_j,"svg9");

//?
changePieChart(data_k,"svg10");

 /*
 */


/////////////
 //// bar charts now

    
//Where did you serve
 changeHBarChart(data_l,"svg11");

 
  //number of deployments
changeStackChart(data_m,"svg12");


  // 
changeStackChart(data_n,"svg13");

//
changeStackChart(data_o,"svg14");

    
// 
changeStackChart(data_p,"svg15");

 /**/
//////////




/////////////
/////////////////
  //womens  

 ///////////////////////

  }

  ///////
  ///////

  /**
   *
   *
   */
  function showTitle4() {

    iii=16;

  
// political ideology
changePieChart(data_q,"svg16");
    
// supportcandidates
changePieChart(data_r,"svg17");
    
// voter reg
changePieChart(data_reg,"svg18");

 /* 
*/
startsmallnumerosA(numeroB,"svg19");

  
  }

  /////
  ////////

  /**
   *
   */
  function showTitle5() {
 //////////////////
 // THE ISSUES
/// flag burning

iii=20;

    startsmallnumerosA(numeroE,"svg20");


   
// 
changeStackChart(data_s,"svg21");
  
// 
changeStackChart(data_t,"svg22");
  
// 
changeStackChart(data_u,"svg23");
  
// 
changeStackChart(data_v,"svg24");
  
// 
changeStackChart(data_w,"svg25");
  
// 
changeStackChart(data_x,"svg26");
  
// 
changeStackChart(data_y,"svg27");

 

    var greenoverlay = document.getElementById("greenoverlay");
    greenoverlay.setAttribute("style", "visibility:visible; ");


  }

  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle6() {


iii=28;



//// guns

startsmallnumerosA(numero_guns,"svg28");

changeHBarChart(data_guns_own_aa,"svg29");





  }

  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle7() {


iii=30;

//////////
///////////////////
//////////////////////////////
////////// military service
 /////////////////////////////
//   
changeStackChart(data_milserve_a,"svg30");
//   
changeStackChart(data_milserve_b,"svg31");
//   
changeStackChart(data_milserve_c,"svg32");
//    
changeStackChart(data_milserve_d,"svg33");
//    
changeStackChart(data_milserve_e,"svg34");




  }


  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle8() {

iii=35;

    ////////////////////
////////// equality
 ////////////////
//   
changeStackChart(data_equality_a,"svg35");
//   
changeStackChart(data_equality_c,"svg36");
//   
changeStackChart(data_equality_b,"svg37");
// impact  
changeStackChart(data_equality_d,"svg38");





  }

  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle9() {
iii=39;



////
///// perceptions
///////perceptions numbers
  

   startnumerosA(numeroSupport,"svg39");

   startnumerosB(numeroUnderstand,"svg40");

   startnumerosC(numeroHire,"svg41");

/////////////
//////////
 ////////////////
//obama  
changeStackChart(data_p_obama,"svg42");
//trump  
changeStackChart(data_p_trump,"svg43");
//congress  
changeStackChart(data_p_congress,"svg44");



  }

  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle10() {


iii=45;



/////////////
///////womens
/////////////////
  //issues  
changeStackChart(data_wom_a,"svg45");
//////////
/////////////
//women in military questions  
changeStackChart(data_wom_b,"svg46");
//womens  
changeStackChart(data_wom_c,"svg47");
//womens  
changeStackChart(data_wom_d,"svg48");

//womens  
changeStackChart(data_wom_e,"svg49");
//womens  
changeStackChart(data_wom_f,"svg50");
//womens  
changeStackChart(data_wom_g,"svg51");
//womens
//////
/////



  }

  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle11() {

iii=52;

    //womens
//////
/////

///////////////
 
startnumerosA(numero_wom_a,"svg52");
///
startnumerosB(numero_wom_b,"svg53");
 /////////////////
//////////////////////////////////////////////////////////////////

 /////////////
 /////////////////
//When asked their level of agreement with the following statement  
//womens  
/// The civilian public treats women veterans with respect
changeStackChart(data_wom_g_,"svg54");
//womens  
//// Fellow service members treat women service members with respect
changeStackChart(data_wom_h_,"svg55");
//womens  
changeStackChart(data_wom_i_,"svg56");
//womens  
changeStackChart(data_wom_j_,"svg57");
//womens  
changeStackChart(data_wom_k_,"svg58");
//womens  
changeStackChart(data_wom_k__,"svg59");
//womens

 /////////////
 /////////////////
 ////////////////
 ///// When asked whether VA adequately provides
 //////////////////////
//womens  
changeStackChart(data_wom_n,"svg60");
//womens  
changeStackChart(data_wom_o,"svg61");
//womens  
changeStackChart(data_wom_p,"svg62");
//womens  
changeStackChart(data_wom_q,"svg63");
//womens  
changeStackChart(data_wom_r,"svg64");
//womens
///////////////////
///////////////



  }

  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle12() {

iii=65;

    //womens
///////////////////
///////////////


startnumerosA(numero_wom_c,"svg65");
///
startnumerosB(numero_wom_d,"svg66");
///
startnumerosC(numero_wom_e,"svg67");
/////////////
 /////////////////

///////////////////
//// rate the following
/// 
 /////////////
 /////////////////
//womens  
///// va support for women
changeStackChart(data_wom_s,"svg68");
//womens  
changeStackChart(data_wom_t,"svg69");
//womens  
changeStackChart(data_wom_u,"svg70");
//womens  
//// Quality of VA Benefits
changeStackChart(data_wom_v,"svg71");
/////
///
startsmallnumerosA(numero_wom_f,"svg72");
///
startsmallnumerosA(numero_wom_g,"svg73");
////
//////////////////////////////////





  }

  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle13() {


iii=74;


 /////////////
 ///// sexuak assault
 /////////////////
//womens  
changeStackChart(data_wom_y,"svg74");
//womens  
changeStackChart(data_wom_z,"svg75");
//womens  
changeStackChart(data_wom_aa,"svg76");
//womens  
changeStackChart(data_wom_bb,"svg77");

//womens  
changeStackChart(data_wom_cc,"svg78");
//womens  
changeStackChart(data_wom_dd,"svg79");
//womens 
/// Survivors who experienced retaliation after reporting 
changeStackChart(data_wom_ee,"svg80");
//womens  
// Survivors who experienced retaliation after reporting
changeStackChart(data_wom_ff,"svg81");
/////////
//////
changeStackChart(data_wom_gg,"svg82");
//////////
/////
changeStackChart(data_wom_hh,"svg83");
//////////
/////
changeStackChart(data_wom_ii,"svg84");
//////////
/////
changeStackChart(data_wom_jj,"svg85");
//////////
/////



  }

  ////////////////
  /////////////////////////
  ///////////////////////


  function showTitle14() {


   ///// var greenoverlay = document.getElementById("greenoverlay");
   ///// greenoverlay.setAttribute("style", "visibility:hidden; ");

iii=86;




///////////////////
//// post 9/11 gi bill
/////

changePieChart(data_gib_a,"svg86");

changePieChart(data_gib_b,"svg87");

changePieChart(data_gib_c,"svg88");

//////////
startsmallnumerosA(numero_gib_nocuts,"svg89");

/////
changeStackChart(data_gib_d,"svg90");


changeStackChart(data_gib_e,"svg91");


changeStackChart(data_gib_f,"svg92");


 //////////



  }

  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle15() {

iii=93;

    //////////
/////
////// education
///
 //////////
startnumerosA(numero_ed_a,"svg93");

startnumerosB(numero_ed_b,"svg94");

startnumerosC(numero_ed_c,"svg95");


changeStackChart(data_ed_a,"svg96");

changeStackChart(data_ed_b,"svg97");

changeStackChart(data_ed_c,"svg98");




changeHBarChart(data_ed_d,"svg99");

 //////////
/////


  }

  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle16() {

iii=100;


 //////////
/////
//////////
//// employment

changeStackChart(data_employ_a,"svg100");

changeStackChart(data_employ_b,"svg101");

changeStackChart(data_employ_c,"svg102");




 changeStackChart(data_employ_d,"svg103");


changeHBarChart(data_employ_e,"svg104");

startnumerosA(numero_employ_a,"svg105");

startnumerosB(numero_employ_b,"svg106");

startnumerosC(numero_employ_c,"svg107");

startnumerosA(numero_employ_d,"svg108");



////////


  }

  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle17() {


iii=109;


////////
/// va health care utilization
///////

  //age  
changePieChart(data_va_a,"svg109");
//gender
changePieChart(data_va_b,"svg110");

//?
changePieChart(data_va_c,"svg111");


/// bar chart
changeHBarChart(data_va_bars,"svg112");


startnumerosA(numero_va_a,"svg113");



startnumerosB(numero_va_b,"svg114");

startnumerosC(numero_va_c,"svg115");


//////////
////
//// va health care utilization

changeStackChart(data_va_d,"svg116");

changeStackChart(data_va_e,"svg117");

changeStackChart(data_va_f,"svg118");

changeStackChart(data_va_g,"svg119");

changeStackChart(data_va_h,"svg120");

changeStackChart(data_va_i,"svg121");
changeStackChart(data_va_j,"svg122");

startsmallnumerosA(numero_va_d,"svg123");

startsmallnumerosA(numero_va_e,"svg124");

////




  }

  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle18() {

    ////
////
iii=125;


startnumerosA(numero_va_f,"svg125");



changeStackChart(data_va_k,"svg126");


changeStackChart(data_va_l,"svg127");


changeStackChart(data_va_m,"svg128");


changeStackChart(data_va_n,"svg129");


changeStackChart(data_va_o,"svg130");


changeStackChart(data_va_p,"svg131");


changeStackChart(data_va_q,"svg132");

/////
///////


  }

  ////////////////
  /////////////////////////
  ///////////////////////



  function showTitle19() {

iii=133;

    /////
///////
//// mental health
startnumerosA(numero_mental_a,"svg133");

startnumerosB(numero_mental_b,"svg134");

startnumerosC(numero_mental_c,"svg135");

 
changeStackChart(data_mental_a,"svg136");


changeStackChart(data_mental_b,"svg137");




  }

  ////////////////
  /////////////////////////
  ///////////////////////


  function showTitle20() {

iii=138;

    startnumerosA(numero_suicide_a,"svg138");

 
changeHBarChart(data_suicide_aa,"svg139");

/////////////// changeHBarChartsm(data_suicide_b,"svg140");
/////////////// changeHBarChartsm(data_suicide_c,"svg141");
changeHBarChartsm(data_suicide_d,"svg140");
changeHBarChartsm(data_suicide_e,"svg141");



  }

  ////////////////
  /////////////////////////
  ///////////////////////


  function showTitle21() {

iii=142;

    changeHBarChart(data_health_a,"svg142");


changeHBarChart(data_health_b,"svg143");


startnumerosA(numero_health_a,"svg144");
startnumerosB(numero_health_b,"svg145");
startnumerosC(numero_health_c,"svg146");
startnumerosA(numero_health_d,"svg147");
startnumerosB(numero_health_e,"svg148");
startnumerosC(numero_health_f,"svg149");



changeStackChart(data_health_c,"svg150");
changeStackChart(data_health_d,"svg151");
 
    changeHBarChartsm(data_health_e,"svg152");

  }

  ////////////////
  /////////////////////////
  ///////////////////////


  function showTitle22() {

      
iii=153;


///
//////
///////////////
/// transition experiences
///////////

changeStackChart(data_tran_a,"svg153");
startnumerosA(numero_tran_a,"svg154");
startnumerosB(numero_tran_b,"svg155");
startnumerosC(numero_tran_c,"svg156");
startnumerosA(numero_tran_d,"svg157");
startnumerosB(numero_tran_e,"svg158");


d3.select("#mapcontain").select("svg").remove();
d3.select("#mapcontain").select("g").remove();


    

  }

 ////////////////
  /////////////////////////
  ///////////////////////


  function showTitle23() {
 







  //Width and height
      var w = 960;
      var h = 600;

      //Define map projection
      var projection = d3.geo.albersUsa()
                   .translate([w/2, h/2])
                   .scale([1280]);

      //Define path generator
      var path = d3.geo.path()
               .projection(projection);

      //Define quantize scale to sort data values into buckets of color
      var color = d3.scale.quantize()

      ///      .range(["#9aada6", "#c2cec9","#efefef","#888888","#333333","#294636", "#3a634d", "#000000", "#e2d497", "#417a4f", "#cddeb7", "#78933f", "#284635"]);
    .range(["#dcf428","#9aada6", "#c2cec9","#efefef","#888888","#333333","#294636", "#3a634d", "#000000", "#e2d497", "#417a4f", "#cddeb7", "#78933f", "#284635"]);

              //////////  .range(["#fef0d9","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#990000"]);
                //Colors taken from colorbrewer.js, included in the D3 download

      //Create SVG element
      var svg = d3.select("#mapcontain")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

      //Load in agriculture data
      d3.csv("states.csv", function(data) {

        //Set input domain for color scale
        color.domain([
          d3.min(data, function(d) { return d.ValidPercent; }),
          d3.max(data, function(d) { return d.ValidPercent; })
        ]);

        //Load in GeoJSON data
        d3.json("us_states.json", function(json) {

          //Merge the ag. data and GeoJSON
          //Loop through once for each ag. data value
          for (var i = 0; i < data.length; i++) {

            //Grab state name
            var dataState = data[i].Name;

            //Grab data value, and convert from string to float
            var dataValue = parseFloat(data[i].ValidPercent);

            //Find the corresponding state inside the GeoJSON
            for (var j = 0; j < json.features.length; j++) {

              var jsonState = json.features[j].properties.name;

              if (dataState == jsonState) {

                //Copy the data value into the JSON
                json.features[j].properties.value = dataValue;

                //Stop looking through the JSON
                break;

              }
            }
          }

          //Bind data and create one path per GeoJSON feature
          svg.selectAll("path")
             .data(json.features)
             .enter()
             .append("path")
             .attr("d", path)
             .style("fill", function(d) {
                //Get data value
                var value = d.properties.value;

                if (value) {
                  //If value exists…
                  return color(value);
                } else {
                  //If value is undefined…
                  return "#ccc";
                }
             });

        });

      });







  }

  ////////////////
  /////////////////////////
  ///////////////////////





  function showTitle24() {
 

d3.select("#mapcontain").select("svg").remove();
d3.select("#mapcontain").select("g").remove();


 


  }


  function showTitle25() {
 

 


  }


  function showTitle26() {
 

        var titleCloser = document.getElementById("titleCloser");
    titleCloser.setAttribute("style", "display:none; ");



  }


  function showTitle27() {
 

        var titleCloser = document.getElementById("titleCloser");
    titleCloser.setAttribute("style", "display:inline-block; ");



  }





  ////////////////
  /////////////////////////
  ///////////////////////
  /**
   * UPDATE FUNCTIONS
   *
   * These will be called within a section
   * as the user scrolls through it.
   *
   * We use an immediate transition to
   * update visual elements based on
   * how far the user has scrolled
   *
   */

  /**



  /**
   * DATA FUNCTIONS
   *
   * Used to coerce the data into the
   * formats we need to visualize
   *
   */

  /**
   * activate -
   *
   * @param index - index of the activated section
   */
  chart.activate = function(index) {
    activeIndex = index;
    var sign = activeIndex - lastIndex < 0 ? -1 : 1;
    var scrolledSections = d3.range(lastIndex + sign, activeIndex + sign, sign);
    scrolledSections.forEach(function(i) {
      activateFunctions[i]();
    });
    lastIndex = activeIndex;
  };

  /**
   * update
   *
   * @param index
   * @param progress
   */
  chart.update = function(index, progress) {
    updateFunctions[index](progress);
  };

  // return chart function
  return chart;
};

/**
 * display - called once data
 * has been loaded.
 * sets up the scroller and
 * displays the visualization.
 *
 * @param data - loaded tsv data
 */
function display() {
  // create a new plot and
  // display it
  var plot = scrollVis();
  d3.select("#vis")
    ////  .datum(data)
    .call(plot);

  // setup scroll functionality
  var scroll = scroller().container(d3.select("#graphic"));

  // pass in .step selection as the steps
  scroll(d3.selectAll(".step"));

  // setup event handling
  scroll.on("active", function(index) {
    // highlight current step text
    for (var i = 0; i < window.slides.length; i++) {
      var slide = window.slides[i];
      if (i + 1 === index) {
        slide.show();
        console.log("show");
      } else {
        slide.hide();
        console.log("hide");
      }
    }

    ////////////////document.body.style.backgroundImage = "url("+index+".jpg)";

    d3.selectAll("#step-" + index).style("visibility", function(d, i) {
      return i == index ? "none" : "inline-block";
    });

    d3.selectAll("#step-" + (index - 1)).style("visibility", function(d, i) {
      return i == index ? "inline-block" : "none";
    });

    d3.selectAll("#step-" + (index + 1)).style("visibility", function(d, i) {
      return i == index ? "inline-block" : "none";
    });

    ///////////var getBG = document.getElementById( 'container'+index );
    ///////    getBG.setAttribute("style", "background-image:url("+index+".jpg); "  );

    ///////// console.log(index);

    // activate current section
    plot.activate(index);
  });

  scroll.on("progress", function(index, progress) {
    plot.update(index, progress);
  });
}

// load data and display
document.addEventListener("DOMContentLoaded", function() {
  display();
});

window.addEventListener("resize", onResize);

function onResize(h) {
  var height = window.windowHeight;
  var width = window.windowWidth;

  //////var eBG = document.getElementById("bg" + h);
  /////eBG.style.height = eBG.parentElement.clientHeight;


    // sectionPositions will be each sections
    // starting position relative to the top
    // of the first section.
    

   resize();

 




  /////////


iii=0;

//donut refresh
changePieChart(data_a,"svg0");
 
  
//donut refresh
changePieChart(dataset,"svg1");

  //gender
changePieChart(data_h,"svg2");

  

  //gender
changeHBarChart(data_f,"svg3");


//donut refresh
changeHBarChart(data_c,"svg4");


//donut refresh
changeHBarChartsm(data_b,"svg5");
 
//?
changeHBarChart(data_g,"svg6");

    
//donut
changeHBarChart(data_e,"svg7");

/**/

////////
//////////
///////////////
 

 
  //////  var greenoverlay = document.getElementById("greenoverlay");
  ///////////  greenoverlay.setAttribute("style", "visibility:hidden; ");

iii=8;

  //gender
changePieChart(data_i,"svg8");


  //gender
changePieChart(data_j,"svg9");

//?
changePieChart(data_k,"svg10");

 /*
 */


/////////////
 //// bar charts now

    
//Where did you serve
 changeHBarChart(data_l,"svg11");

 
  //number of deployments
changeStackChart(data_m,"svg12");


  // 
changeStackChart(data_n,"svg13");

//
changeStackChart(data_o,"svg14");

    
// 
changeStackChart(data_p,"svg15");

 /**/
//////////




/////////////
/////////////////
 

    iii=16;

  
// political ideology
changePieChart(data_q,"svg16");
    
// supportcandidates
changePieChart(data_r,"svg17");
    
// voter reg
changePieChart(data_reg,"svg18");

 /* 
*/
startsmallnumerosA(numeroB,"svg19");

 

iii=20;

    startsmallnumerosA(numeroE,"svg20");


   
// 
changeStackChart(data_s,"svg21");
  
// 
changeStackChart(data_t,"svg22");
  
// 
changeStackChart(data_u,"svg23");
  
// 
changeStackChart(data_v,"svg24");
  
// 
changeStackChart(data_w,"svg25");
  
// 
changeStackChart(data_x,"svg26");
  
// 
changeStackChart(data_y,"svg27");

 
 


iii=28;



//// guns

startsmallnumerosA(numero_guns,"svg28");

changeHBarChart(data_guns_own_aa,"svg29");




 


iii=30;

//////////
///////////////////
//////////////////////////////
////////// military service
 /////////////////////////////
//   
changeStackChart(data_milserve_a,"svg30");
//   
changeStackChart(data_milserve_b,"svg31");
//   
changeStackChart(data_milserve_c,"svg32");
//    
changeStackChart(data_milserve_d,"svg33");
//    
changeStackChart(data_milserve_e,"svg34");



 

iii=35;

    ////////////////////
////////// equality
 ////////////////
//   
changeStackChart(data_equality_a,"svg35");
//   
changeStackChart(data_equality_c,"svg36");
//   
changeStackChart(data_equality_b,"svg37");
// impact  
changeStackChart(data_equality_d,"svg38");





 
iii=39;



////
///// perceptions
///////perceptions numbers
  

   startnumerosA(numeroSupport,"svg39");

   startnumerosB(numeroUnderstand,"svg40");

   startnumerosC(numeroHire,"svg41");

/////////////
//////////
 ////////////////
//obama  
changeStackChart(data_p_obama,"svg42");
//trump  
changeStackChart(data_p_trump,"svg43");
//congress  
changeStackChart(data_p_congress,"svg44");



   

iii=45;



/////////////
///////womens
/////////////////
  //issues  
changeStackChart(data_wom_a,"svg45");
//////////
/////////////
//women in military questions  
changeStackChart(data_wom_b,"svg46");
//womens  
changeStackChart(data_wom_c,"svg47");
//womens  
changeStackChart(data_wom_d,"svg48");

//womens  
changeStackChart(data_wom_e,"svg49");
//womens  
changeStackChart(data_wom_f,"svg50");
//womens  
changeStackChart(data_wom_g,"svg51");
//womens
//////
/////

 
  ////////////////
  /////////////////////////
  /////////////////////// 


///
/////
/*

*/
 
////////////
///////////////
//////////////////
  


}



function numeros() {


console.log("count");






}






