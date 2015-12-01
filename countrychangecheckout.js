var states = (function(){ return {
	"Countries": [
		{
			"n":"Canada",
			"v":"CA",
			"s": [
				{
					"n":"Alberta",
					"v":"AB"
				},
				{
					"n":"British Columbia",
					"v":"BC"
				},
				{
					"n":"Manitoba", 
					"v":"MB"
				},
				{
					"n":"New Brunswick",
					"v":"NB"
				},
				{
					"n":"Newfoundland",
					"v":"NL"
				},
				{
					"n":"Northwest Territories",
					"v":"NT"
				},
				{
					"n":"Nova Scotia",
					"v":"NS"
				},
				{
					"n":"Nunavut",
					"v":"NU"
				},
				{
					"n":"Ontario",
					"v":"ON"
				},
				{
					"n":"Prince Edward Island",
					"v":"PE"
				},
				{
					"n":"Quebec",
					"v":"QC"
				},
				{
					"n":"Saskatchewan",
					"v":"SK"
				},
				{
					"n":"Yukon Territory",
					"v":"YT"
				}
			]
		},
		{
			"n":"UnitedStates",
			"v":"US",
			"s": [
				{
					"n":"Alabama",
					"v":"AL"
				},
				{
					"n":"Alaska",
					"v":"AK"
				},
				{
					"n":"Arizona",
					"v":"AZ"
				},
				{
					"n":"Arkansas",
					"v":"AR"
				},
				{
					"n":"California",
					"v":"CA"
				},
				{
					"n":"Colorado",
					"v":"NC"
				},
				{
					"n":"Connecticut",
					"v":"CT"
				},
				{
					"n":"Delaware",
					"v":"DE"
				},
				{
					"n":"District of Columbia",
					"v":"DC"
				},
				{
					"n":"Florida",
					"v":"FL"
				},
				{
					"n":"Georgia",
					"v":"GA"
				},
				{
					"n":"Hawaii",
					"v":"HI"
				},
				{
					"n":"Idaho",
					"v":"ID"
				},
				{
					"n":"Illinois",
					"v":"IL"
				},
				{
					"n":"Indiana",
					"v":"IN"
				},
				{
					"n":"Iowa",
					"v":"IA"
				},
				{
					"n":"Kansas",
					"v":"KS"
				},
				{
					"n":"Kentucky",
					"v":"KY"
				},
				{
					"n":"Louisiana",
					"v":"LA"
				},
				{
					"n":"Maine",
					"v":"ME"
				},
				{
					"n":"Maryland",
					"v":"MD"
				},
				{
					"n":"Massachusetts",
					"v":"MA"
				},
				{
					"n":"Michigan",
					"v":"MI"
				},
				{
					"n":"Minnesota",
					"v":"Mn"
				},
				{
					"n":"Mississippi",
					"v":"MS"
				},
				{
					"n":"Missouri",
					"v":"MO"
				},
				{
					"n":"Montana",
					"v":"MT"
				},
				{
					"n":"Nebraska",
					"v":"NE"
				},
				{
					"n":"Nevada",
					"v":"NV"
				},
				{
					"n":"New Hampshire",
					"v":"NH"
				},
				{
					"n":"New Jersey",
					"v":"NJ"
				},
				{
					"n":"New Mexico",
					"v":"NM"
				},
				{
					"n":"New York",
					"v":"NY"
				},
				{
					"n":"North Carolina",
					"v":"NC"
				},
				{
					"n":"North Dakota",
					"v":"ND"
				},
				{
					"n":"Ohio",
					"v":"OH"
				},
				{
					"n":"Oklahoma",
					"v":"OK"
				},
				{
					"n":"Oregon",
					"v":"OR"
				},
				{
					"n":"Pennsylvania",
					"v":"PA"
				},
				{
					"n":"Rhode Island",
					"v":"RI"
				},
				{
					"n":"South Carolina",
					"v":"SC"
				},
				{
					"n":"South Dakota",
					"v":"SD"
				},
				{
					"n":"Tennessee",
					"v":"TN"
				},
				{
					"n":"Texas",
					"v":"TX"
				},
				{
					"n":"Utah",
					"v":"UT"
				},
				{
					"n":"Vermont",
					"v":"VT"
				},
				{
					"n":"Virginia",
					"v":"VA"
				},
				{
					"n":"Washington",
					"v":"WA"
				},
				{
					"n":"West Virginia",
					"v":"WV"
				},
				{
					"n":"Wisconsin",
					"v":"WI"
				},
				{
					"n":"Wyoming",
					"v":"WY"
				}
			]
		}
	]
};}());

var c_selectors = [
  {country:"billing_country", dropdown:"billing_state"},
  {country:"shipping_country", dropdown:"shipping_state"}
];

for(var i = 0; i < c_selectors.length; i++) {
  setup_state_province(c_selectors[i].country, c_selectors[i].dropdown);
}

//console.log(states);

function setup_state_province(el, dr) {
  var s_country = document.getElementById(el);

  s_country.onchange = function(e) {
    var c_code = s_country.value;
    if(c_code === 'CA') {
      set_states(dr, c_code);
    }
    else if(c_code === 'US') {
      set_states(dr, c_code);
    }
  }
}


function set_states(el, cc) {
  var state_dr = document.getElementById(el);
  var select_data = get_state_list(cc);
  
  state_dr.innerHTML = '';
  console.log("Setting to " + cc);
  //console.log("Data is " + select_data);
  
  for(var i = 0; i < select_data.length; i++) {
    var s = document.createElement("option");
    s.value = select_data[i].v;
    s.innerHTML = select_data[i].n;
    state_dr.appendChild(s);
  }
  
}

function get_state_list (cc) {
  for(var i = 0; i < states.Countries.length; i ++) {
    if(states.Countries[i].v === cc) {
      return states.Countries[i].s;
    }
  }
  return [];
}
