 $$ = Dom7;
 app = new Framework7();
today= new Date();
tasks=[];
year = today.getFullYear().toString().length>1 ? today.getFullYear().toString() : "0"+today.getFullYear().toString();
month = today.getMonth().toString().length>1 ? today.getMonth().toString() : "0"+today.getMonth().toString();
day = today.getDate().toString().toString().length>1 ? today.getDate().toString().toString() : "0"+ today.getDate().toString();

fullDate = year+"-"+month+"-"+day;
// Init F7 Vue Plugin
Vue.use(Framework7Vue, Framework7)

// Init Page Components
Vue.component('page-about', {
  template: '#page-about'
});
Vue.component('page-form', {
  template: '#page-form'
});
Vue.component('page-dynamic-routing', {
  template: '#page-dynamic-routing'
});
Vue.component('page-not-found', {
  template: '#page-not-found'
});
Vue.component('page-task', {
  template: '#page-task'
});
// Init App
new Vue({
  el: '#app',
  // Init Framework7 by passing parameters here
  framework7: {
    root: '#app', // App root element
    id: 'io.framework7.testapp', // App bundle ID
    name: 'Framework7', // App name
    theme: 'auto', // Automatic theme detection
    // App routes
    routes: [
      {
        path: '/about/',
        component: 'page-about'
      },
      {
        path: '/task/',
        component: 'page-task'
      },
      {
        path: '/form/',
        component: 'page-form'
      },
      {
        path: '/dynamic-route/blog/:blogId/post/:postId/',
        component: 'page-dynamic-routing'
      },
      {
        path: '(.*)',
        component: 'page-not-found',
      },
    ],
  }
});

function selectTask(){

}

function deleteTask(){
  
}

function insertTask(){
  tx.executeSql(, function(tx,res)
    {

    }

}

function updateTask(){
  
}


  clickDate   =function(){

                var date = $$('#datePic').val();             
                db.transaction(function(tx) {
                tx.executeSql("SELECT * FROM task WHERE id != ? AND fullDate == '"+ date+"';", [3], function(tx, res){
                          console.log(tasks);
                  
                    alert(date);
        
                    tasks=[];
                    for(var iii = 0; iii < res.rows.length; iii++)
                    {
                      var tdate = new Date(res.rows.item(iii).task_date);
                      var tday=res.rows.item(iii).day;
                      tasks.push({
                      title: res.rows.item(iii).title,
                      hour:  tdate.getHours()+":"+tdate.getMinutes(),
                      link: '/dynamic-route/blog/45/post/'+res.rows.item(iii).id+'/?foo=bar#about'
                    });
                    }
                console.log(tasks);
                  

                  var virtualList = app.virtualList.create({
                    // List Element
                    el: '.virtual-list',
                    // Pass array with items
                    items: tasks,
                    // Custom search function for searchbar
                    searchAll: function (query, items) {
                      var found = [];
                      for (var i = 0; i < items.length; i++) {
                        if (items[i].title.toLowerCase().indexOf(query.toLowerCase()) >= 0 || query.trim() === '') found.push(i);
                      }
                      return found; //return array with mathced indexes
                    },
                    // List item Template7 template
                    itemTemplate:
                      '<li>' +
                        '<a href="{{link}}" class="item-link item-content">' +
                          '<div class="item-inner">' +
                            '<div class="item-title-row">' +
                              '<div class="item-title">{{title}}</div>' +
                            '</div>' +
                            '<div class="item-subtitle">{{hour}}</div>' +
                          '</div>' +
                        '</a>' +
                      '</li>',
                    // Item height
                    height: app.theme === 'ios' ? 63 : 73,
                  });
                });});
  }

//events
var example2 = new Vue({
  el: '#titleTaskDate',
  data: {
    name: 'Vue.js'
  },


  // define methods under the `methods` object
  methods: {
    clickDate: function (event) {
      // `this` inside methods points to the Vue instance
      alert('Hello ' + this.name + '!')
      // `event` is the native DOM event
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
})


function clickTip(){

 
}


// Wait for plugin to load
document.addEventListener("deviceready", onDeviceReady, false);

// Cordova is ready
function onDeviceReady()
{

    //var db = window.sqlitePlugin.openDatabase({name: "demo.db",location:'default'});
   db = window.openDatabase("demodb3", "1.0", "Demodb3", 1000000);
    db.transaction(function(tx) {

        //create table
        tx.executeSql("CREATE TABLE IF NOT EXISTS task (id integer primary key, title text, data text, task_date datetime default current_timestamp, fullDate text, year text, month text, day text, hour text, repeat text)", [], function(tx, res){
            //insert data

            tx.executeSql("INSERT INTO task (id, title, data, task_date, fullDate, year, month, day, hour, repeat) VALUES (?,?,?,?,?,?,?,?,?,?),(?,?,?,?,?,?,?,?,?,?)", [2, "task1","Description", today, fullDate, year,month,day,"sda","no",4, "task2","Description", today, "2018-06-20", year,month,day+1,"sda","no"], function(tx,res)
            {
            var items = [];
                //retrieve data
               // alert("sdf");
              
                tx.executeSql("SELECT * FROM task WHERE id != ? AND fullDate == '"+fullDate+"' ;", [3], function(tx, res){
                  
                    for(var iii = 0; iii < res.rows.length; iii++)
                    {
                      var tdate = new Date(res.rows.item(iii).task_date);
                      var tday=res.rows.item(iii).day;
                      tasks.push({
                      title: res.rows.item(iii).title,
                      hour:  tdate.getHours()+":"+tdate.getMinutes(),
                      link: '/dynamic-route/blog/45/post/'+res.rows.item(iii).id+'/?foo=bar#about'
                    });
                    }
            console.log(tasks);
                  var virtualList = app.virtualList.create({
                    // List Element
                    el: '.virtual-list',
                    // Pass array with items
                    items: tasks,
                    // Custom search function for searchbar
                    searchAll: function (query, items) {
                      var found = [];
                      for (var i = 0; i < items.length; i++) {
                        if (items[i].title.toLowerCase().indexOf(query.toLowerCase()) >= 0 || query.trim() === '') found.push(i);
                      }
                      return found; //return array with mathced indexes
                    },
                    // List item Template7 template
                    itemTemplate:
                      '<li>' +
                        '<a href="{{link}}" class="item-link item-content">' +
                          '<div class="item-inner">' +
                            '<div class="item-title-row">' +
                              '<div class="item-title">{{title}}</div>' +
                            '</div>' +
                            '<div class="item-subtitle">{{hour}}</div>' +
                          '</div>' +
                        '</a>' +
                      '</li>',
                    // Item height
                    height: app.theme === 'ios' ? 63 : 73,
                  });
                })

            });

        });

    }, function(err){

        //errors for all transactions are reported here
        alert("Error: " + err.message)

    });
}