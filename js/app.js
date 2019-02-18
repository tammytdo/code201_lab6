'use strict';

//helper functions
var _random = function(min, max){
  return Math.random()*(max-min) + min;
};

// =====================================================================

/*
List of Stores
    List of hours a store is open paired with total numbers

Store Objects {}
    
    min_cust
    max_cust
    avg_cookies_per_customer
    store_name
    store_open: 6
    store_close: 20

    cookies_sold_each_hour []

    calculate_cookies_per_hour (method)
    calculate_cookies_all_hours (method)
    render
}
*/

// =====================================================================
// Render Alki Object

var Alki = {
  min_cust : 2,
  max_cust : 16,
  avg_cookies_per_customer: 4.6,
  store_name : 'Alki',
  store_open: 6,
  store_close: 20,
  cookies_sold_each_hour: [],
};

// Calculates the average number of cookies, per customer, needed each hour
Alki.calculate_cookies_per_hour = function() {
  var random_customers = Math.floor(_random(this.min_cust, this.max_cust));
  return Math.floor(this.avg_cookies_per_customer * random_customers);
};

// Calculates the number of cookies sold each hour
Alki.calculate_cookies_sold_each_hour = function() {
  for (var i = this.store_open; i < this.store_close; i++) {
    var cookies_sold = this.calculate_cookies_per_hour();
    // The .push method adds an amount to the end of the cookies_sold array
    this.cookies_sold_each_hour.push(cookies_sold);
  }
};

// Render function. Storing everything inside a list item.
Alki.render = function() {
  // Creates elements for each list item
  // li > h2(name), ul(store_hours) > li (9am: 30 cookies)
  
  // Represents the unordered list item that is already on the page
  var target = document.getElementById('store-container');
  var li_el =  document.createElement('li');
  var h2_el = document.createElement('h2');
  var ul_el = document.createElement('ul');

  // Grabs the store name attached to the Alki object
  h2_el.textContent = this.store_name;
    
  for (var i = 0; i < this.cookies_sold_each_hour.length; i++) {
    var hour_li_el = document.createElement('li');
    hour_li_el.textContent = this.cookies_sold_each_hour[i];
    ul_el.appendChild(hour_li_el);
  }

  // Puts h2 inside of list item element
  li_el.appendChild(h2_el);
  li_el.appendChild(ul_el);
  target.appendChild(li_el);
};

// init
Alki.calculate_cookies_sold_each_hour();

Alki.render();


// =====================================================================
// Render Cap Hill Object

var CapHill = {
  min_cust : 20,
  max_cust : 38,
  avg_cookies_per_customer : 2.3, 
  store_name : 'Cap Hill',
  store_open : 6,
  store_close : 20,
  cookies_sold_each_hour : [],
};

CapHill.calculate_cookies_per_hour = function() {
  var random_customers = Math.floor(_random(this.min_cust, this.max_cust));
  return Math.floor(this.avg_cookies_per_customer * random_customers);
};

CapHill.calculate_cookies_sold_each_hour = function() {
  for (var i = this.store_open; i < this.store_close; i++) {
    var cookies_sold = this.calculate_cookies_per_hour();
    this.cookies_sold_each_hour.push(cookies_sold);
  }
};

CapHill.render = function() {
  var target = document.getElementById('store-container');
  var li_el =  document.createElement('li');
  var h2_el = document.createElement('h2');
  var ul_el = document.createElement('ul');

  h2_el.textContent = this.store_name;
    
  for (var i = 0; i < this.cookies_sold_each_hour.length; i++) {
    var hour_li_el = document.createElement('li');
    hour_li_el.textContent = this.cookies_sold_each_hour[i];
    ul_el.appendChild(hour_li_el);
  }

  li_el.appendChild(h2_el);
  li_el.appendChild(ul_el);
  target.appendChild(li_el);
};

CapHill.calculate_cookies_sold_each_hour();
CapHill.render(); 


// =====================================================================
// Render 1st & Pike Object

var FirstAndPike = {
  min_cust : 23,
  max_cust : 65,
  avg_cookies_per_customer : 6.3,
  store_name : '1st & Pike',
  store_open : 6,
  store_close : 20,
  cookies_sold_each_hour : [],
};

FirstAndPike.calculate_cookies_per_hour = function() {
  var random_customers = Math.floor(_random(this.min_cust, this.max_cust));
  return Math.floor(this.avg_cookies_per_customer * random_customers);
};

FirstAndPike.calculate_cookies_sold_each_hour = function() {
  for (var i = this.store_open; i < this.store_close; i++) {
    var cookies_sold = this.calculate_cookies_per_hour();
    this.cookies_sold_each_hour.push(cookies_sold);
  }
};

FirstAndPike.render = function() {
  var target = document.getElementById('store-container');
  var li_el =  document.createElement('li');
  var h2_el = document.createElement('h2');
  var ul_el = document.createElement('ul');

  h2_el.textContent = this.store_name;
    
  for (var i = 0; i < this.cookies_sold_each_hour.length; i++) {
    var hour_li_el = document.createElement('li');
    hour_li_el.textContent = this.cookies_sold_each_hour[i];
    ul_el.appendChild(hour_li_el);
  }

  li_el.appendChild(h2_el);
  li_el.appendChild(ul_el);
  target.appendChild(li_el);
};

FirstAndPike.calculate_cookies_sold_each_hour();
FirstAndPike.render();


// =====================================================================
// Render SeaTac Airport Object

var SeaTac = {
  min_cust : 3,
  max_cust : 24,
  avg_cookies_per_customer : 1.2, 
  store_name : 'SeaTac Airport',
  store_open : 6,
  store_close : 20,
  cookies_sold_each_hour : [],
};

SeaTac.calculate_cookies_per_hour = function() {
  var random_customers = Math.floor(_random(this.min_cust, this.max_cust));
  return Math.floor(this.avg_cookies_per_customer * random_customers);
};

SeaTac.calculate_cookies_sold_each_hour = function() {
  for (var i = this.store_open; i < this.store_close; i++) {
    var cookies_sold = this.calculate_cookies_per_hour();
    this.cookies_sold_each_hour.push(cookies_sold);
  }
};

SeaTac.render = function() {
  var target = document.getElementById('store-container');
  var li_el =  document.createElement('li');
  var h2_el = document.createElement('h2');
  var ul_el = document.createElement('ul');

  h2_el.textContent = this.store_name;
    
  for (var i = 0; i < this.cookies_sold_each_hour.length; i++) {
    var hour_li_el = document.createElement('li');
    hour_li_el.textContent = this.cookies_sold_each_hour[i];
    ul_el.appendChild(hour_li_el);
  }

  li_el.appendChild(h2_el);
  li_el.appendChild(ul_el);
  target.appendChild(li_el);
};

// init
SeaTac.calculate_cookies_sold_each_hour();
SeaTac.render();


// =====================================================================
// Render Seattle Center Object

var SeattleCenter = {
  min_cust : 11,
  max_cust : 38,
  avg_cookies_per_customer : 3.7,
  store_name : 'Seattle Center',
  store_open : 6,
  store_close : 20,
  cookies_sold_each_hour : [],
};

SeattleCenter.calculate_cookies_per_hour = function() {
  var random_customers = Math.floor(_random(this.min_cust, this.max_cust));
  return Math.floor(this.avg_cookies_per_customer * random_customers);
};

SeattleCenter.calculate_cookies_sold_each_hour = function() {
  for (var i = this.store_open; i < this.store_close; i++) {
    var cookies_sold = this.calculate_cookies_per_hour();
    this.cookies_sold_each_hour.push(cookies_sold);
  }
};

SeattleCenter.render = function() {
  var target = document.getElementById('store-container');
  var li_el =  document.createElement('li');
  var h2_el = document.createElement('h2');
  var ul_el = document.createElement('ul');

  h2_el.textContent = this.store_name;
    
  for (var i = 0; i < this.cookies_sold_each_hour.length; i++) {
    var hour_li_el = document.createElement('li');
    hour_li_el.textContent = this.cookies_sold_each_hour[i];
    ul_el.appendChild(hour_li_el);
  }

  li_el.appendChild(h2_el);
  li_el.appendChild(ul_el);
  target.appendChild(li_el);
};

SeattleCenter.calculate_cookies_sold_each_hour();
SeattleCenter.render();

// =====================================================================
var Store = function(min_cust, max_cust, avg_cookies_per_customer, store_name, store_open, store_close, cookies_sold_each_hour) {
  this.min_cust = min_cust;
  this.max_cust = max_cust;
  this.avg_cookies_per_customer = avg_cookies_per_customer;
  this.store_name = store_name;
  this.store_open = 6;
  this.store_close = 20;
  this.cookies_sold_each_hour = cookies_sold_each_hour;
};

firstAndPike	23	65	6.3
seaTac Airport	3	24	1.2
seattleCenter	11	38	3.7
capHill	20	38	2.3
var alki = new Store(2, 16, 4.6, 'Alki', 6, 20, []);
