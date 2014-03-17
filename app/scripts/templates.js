Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  data.buffer.push("<div class=\"navbar navbar-fixed-top navbar-inverse\" role=\"navigation\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n            <span class=\"sr-only\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" href=\"/\">DigiStore</a>\n        </div>\n        <div class=\"collapse navbar-collapse\">\n          <ul class=\"nav navbar-nav\">\n            <li class=\"active\"><a href=\"/#/cart\">Cart</a></li>\n            <li><a href=\"/#/products\">Shop</a></li>\n          </ul>\n        </div><!-- /.nav-collapse -->\n      </div><!-- /.container -->\n    </div><!-- /.navbar -->\n\n<div class='container' style=\"padding-top: 50px\">\n\n  <hr>\n  ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n  <div class='text-muted'><small>Foot</small></div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["cart"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        <tbody>\n          <tr>\n            <td><img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("product.avatar")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" class='thumbnail'></td>\n            <td> ");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" </td>\n            <td>$");
  data.buffer.push(escapeExpression((helper = helpers['format-price'] || (depth0 && depth0['format-price']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "currentPrice", options) : helperMissing.call(depth0, "format-price", "currentPrice", options))));
  data.buffer.push("</td>\n            <td>\n              ");
  stack1 = helpers._triageMustache.call(depth0, "quantity", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n              <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "more", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">+</button>\n              <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "less", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">-</button>\n            </td>\n            <td>$");
  data.buffer.push(escapeExpression((helper = helpers['format-price'] || (depth0 && depth0['format-price']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "subtotal", options) : helperMissing.call(depth0, "format-price", "subtotal", options))));
  data.buffer.push("</td>\n            <td><button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteItem", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">Remove</button>\n          </tr>\n           ");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Checkout");
  }

  data.buffer.push("<h1>Cart</h1>\n  <div class=\"table-responsive\">\n    <table class=\"table table-bordered\">\n        <thead>\n          <tr>\n            <th>Product</th>\n            <th></th>\n            <th>Price</th>\n            <th>Quantity</th>\n            <th>Subtotal</th>\n            <th></th>\n          </tr>\n        </thead>\n          ");
  stack1 = helpers.each.call(depth0, "items", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          <tr>\n            <td></td>\n            <td></td>\n            <td></td>\n            <td></td>\n\n            <td>Total:$");
  data.buffer.push(escapeExpression((helper = helpers['format-price'] || (depth0 && depth0['format-price']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "total", options) : helperMissing.call(depth0, "format-price", "total", options))));
  data.buffer.push("</td>\n          </tr>\n        </tbody>\n      </table>\n\n      ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "order", options) : helperMissing.call(depth0, "link-to", "order", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>");
  return buffer;
  
});

Ember.TEMPLATES["confirmation"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  data.buffer.push("Confirmed! ");
  stack1 = helpers._triageMustache.call(depth0, "customerName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});

Ember.TEMPLATES["home"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<h1>Welcome Home</h1>");
  
});

Ember.TEMPLATES["order"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<h1>ORDER</h1>\n\n<form role=\"form\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "add", {hash:{
    'target': ("newItem"),
    'on': ("submit")
  },hashTypes:{'target': "STRING",'on': "STRING"},hashContexts:{'target': depth0,'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n    <div class=\"form-group\">\n      <label>Name: </label>\n      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("customerName")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n    </div>\n    <div class=\"form-group\">\n      <label>Email: </label>\n      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("email")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n    </div>\n    <div class=\"form-group\">\n      <label>Credit Card: </label>\n      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("creditCardNumber")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n    </div>\n    <div class=\"form-group\">\n      <label>CVV: </label>\n      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("cvv")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n    </div>\n    <div class=\"form-group\">\n      <label>Expiration Date: </label>\n      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("expDate")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n    </div>\n    <div class=\"form-group\">\n      <label>Zip Code: </label>\n      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("zip")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n    </div>\n    <div class=\"form-group\">\n      <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submitBilling", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">Submit</button>\n    </div>\n</form>\n\n\n\n");
  return buffer;
  
});

Ember.TEMPLATES["product"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<h1>\n  ");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n  <small class='muted'>(");
  data.buffer.push(escapeExpression((helper = helpers['format-price'] || (depth0 && depth0['format-price']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "price", options) : helperMissing.call(depth0, "format-price", "price", options))));
  data.buffer.push(")</small>\n</h1>\n\n<div class='row'>\n  <div class='col-lg-8'>\n    <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("image")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" class='thumbnail col-lg-12' />\n  </div>\n  <div class='col-lg-12'>\n    ");
  stack1 = helpers._triageMustache.call(depth0, "description", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["products"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n      <div class=\"col-lg-4\">\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "product", "", options) : helperMissing.call(depth0, "link-to", "product", "", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          <strong><p>$");
  stack1 = helpers._triageMustache.call(depth0, "price", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p></strong>\n          <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addToCart", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">Add To Cart</button>\n        </div>\n      ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n          <h4>");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4>\n          <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("avatar")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" class='thumbnail' />\n          ");
  return buffer;
  }

  data.buffer.push("<h1>Products Directory</h1>\n <h3>All Products</h3>\n    <div class=\"row\">\n      ");
  stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  <div class='col-lg-10'>\n    ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n</div>");
  return buffer;
  
});