!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(i){"use strict";var n=function(t,s){this.$element=i(t),this.defaults=i.extend({},n.defaults,this.$element.data(),i.isPlainObject(s)?s:{}),this.init()};n.prototype={constructor:n,init:function(){var t=this.$element.html(),s=new Date(this.defaults.date||t);s.getTime()&&(this.content=t,this.date=s,this.find(),this.defaults.autoStart&&this.start())},find:function(){var t=this.$element;this.$days=t.find("[data-days]"),this.$hours=t.find("[data-hours]"),this.$minutes=t.find("[data-minutes]"),this.$seconds=t.find("[data-seconds]"),0<this.$days.length+this.$hours.length+this.$minutes.length+this.$seconds.length&&(this.found=!0)},reset:function(){this.found?(this.output("days"),this.output("hours"),this.output("minutes"),this.output("seconds")):this.output()},ready:function(){var t,s=this.date,e={};return!!s&&((t=s.getTime()-(new Date).getTime())<=0?(this.end(),!1):(e.days=t,e.hours=e.days%864e5,e.minutes=e.hours%36e5,e.seconds=e.minutes%6e4,e.milliseconds=e.seconds%1e3,this.days=Math.floor(e.days/864e5),this.hours=Math.floor(e.hours/36e5),this.minutes=Math.floor(e.minutes/6e4),this.seconds=Math.floor(e.seconds/1e3),this.deciseconds=Math.floor(e.milliseconds/100),!0))},start:function(){!this.active&&this.ready()&&(this.active=!0,this.reset(),this.autoUpdate=this.defaults.fast?setInterval(i.proxy(this.fastUpdate,this),100):setInterval(i.proxy(this.update,this),1e3))},stop:function(){this.active&&(this.active=!1,clearInterval(this.autoUpdate))},end:function(){this.date&&(this.stop(),this.days=0,this.hours=0,this.minutes=0,this.seconds=0,this.deciseconds=0,this.reset(),this.defaults.end())},destroy:function(){this.date&&(this.stop(),this.$days=null,this.$hours=null,this.$minutes=null,this.$seconds=null,this.$element.empty().html(this.content),this.$element.removeData("countdown"))},fastUpdate:function(){0<=--this.deciseconds?this.output("deciseconds"):(this.deciseconds=9,this.update())},update:function(){0<=--this.seconds?this.output("seconds"):(this.seconds=59,0<=--this.minutes?this.output("minutes"):(this.minutes=59,0<=--this.hours?this.output("hours"):(this.hours=23,0<=--this.days?this.output("days"):this.end())))},output:function(t){if(this.found)switch(t){case"deciseconds":this.$seconds.text(this.getSecondsText());break;case"seconds":this.$seconds.text(this.seconds);break;case"minutes":this.$minutes.text(this.minutes);break;case"hours":this.$hours.text(this.hours);break;case"days":this.$days.text(this.days)}else this.$element.empty().html(this.template())},template:function(){return this.defaults.text.replace("%s",this.days).replace("%s",this.hours).replace("%s",this.minutes).replace("%s",this.getSecondsText())},getSecondsText:function(){return this.active&&this.defaults.fast?this.seconds+"."+this.deciseconds:this.seconds}},n.defaults={autoStart:!0,date:null,fast:!1,end:i.noop,text:"%s days, %s hours, %s minutes, %s seconds"},n.setDefaults=function(t){i.extend(n.defaults,t)},i.fn.countdown=function(e){return this.each(function(){var t=i(this),s=t.data("countdown");s||t.data("countdown",s=new n(this,e)),"string"==typeof e&&i.isFunction(s[e])&&s[e]()})},i.fn.countdown.constructor=n,i.fn.countdown.setDefaults=n.setDefaults,i(function(){i("[countdown]").countdown()})});