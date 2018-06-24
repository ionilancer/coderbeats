 $$ = Dom7;
 app = new Framework7();
   appDate =  fullDate;
tasks=[];
    elementSel=[];     

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
  template: '#page-dynamic-routing',
   mounted(){
  
   
    $("#actualTasknav .title").text(elementSel.title);

console.log(elementSel);
  }
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

function getForm(){

}

function deleteTask(){
  
}

function insertTask(){


}

function updateTask(){
  
}
getDate= function(){

  var data="";




  return data;
}

function taskSettings(){

var x = document.getElementById("taskSettings");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else if (x.style.display ==="block"){
        x.style.display = "none";
    }else{
      x.style.display = "block";
    }

}

function deleteTask(){
  alert("fad");


}






saveTask = function(){
  var x = document.getElementById("taskSettings");
    x.style.display = "none";
    appDate =  $$('#datePic').val();
    taskName =  $$('#formName').val();
    taskDes =  $$('#formDes').val();
repeat ="no"
   db.transaction(function(tx) {
            var sqlInsert ='INSERT INTO task (title, data, task_date, fullDate, year, month, day, hour, repeat) VALUES ';
            sqlInsert+=' ( "'+taskName+'","'+taskDes+'", "'+today+'","'+appDate+'", "'+year+'","'+month+'","'+day+'","sda","no") ';
            //execute query and load index
          tx.executeSql(sqlInsert, [], function(tx, res){
            var selectTask ='SELECT * FROM task WHERE fullDate == "'+ appDate+'";';
            //execute query and load index
            executQuery(tx,selectTask,loadIndex);
            });

   });
}


  changeDate   =function(){
                var date = $$('#datePic').val();  
                $$('.virtual-list').html("<img class='loading' src='img/loading.gif'/>");
                db.transaction(function(tx) {
                         //insert alert()data

            var selectTask ='SELECT * FROM task WHERE fullDate == "'+ date+'";';
            //execute query and load index
            executQuery(tx,selectTask,loadIndex);
          });
  }


















function clickTip(el){

elementSel=[];
var element = Object.keys(tasks).map(function(key, index) {
  elementSel=tasks[index].id == el.id  ?tasks[index] :  null;
});

console.log(Vue.component('page-dynamic-routing'));
}

























function loadIndex(tx,res)
            {           
              if(res.rows.length >0){ $$('.virtual-list').html("<img class='loading' src='img/loading.gif'/>");}else{$$('.loading').remove();template ='<li class="taskNotFound"><div class="item-inner"><div class="item-title-row"><div class="item-title">Tasks not found</div></div></li>';
                      $$('.virtual-list').html(template);}
                //retrieve data
            var items = [];
            tasks=[];
                    for(var iii = 0; iii < res.rows.length; iii++)
                    {
                      var tdate = new Date(res.rows.item(iii).task_date);
                      var tday=res.rows.item(iii).day;
                      tasks.push({
                      id: res.rows.item(iii).id,
                      title: res.rows.item(iii).title,
                      desc: res.rows.item(iii).data.length > 50 ? res.rows.item(iii).data.substr(0,50)+"..." :res.rows.item(iii).data ,
                      hour:  tdate.getHours()+":"+tdate.getMinutes(),
                      link: '/dynamic-route/blog/45/post/'+res.rows.item(iii).id+'/?foo=bar#about'
                    });
                    }
                    
                    
                 virtualList = app.virtualList.create({
                    // List Element
                    el: '.virtual-list',
                     cache: false,
        dynamicHeightBufferSize: 1,
        showFilteredItemsOnly: false,
        renderExternal: undefined,
                    // Pass array with items
                    items: tasks,
                    // Custom search function for searchbar
renderItem:function(list, fragment){
   debugger;

   return true;
},
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
                        '<a href="{{link}}" onclick="clickTip(this);" id="{{id}}" class="item-link item-content">' +
                          '<div class="item-inner">' +

                            '<div class="item-title-row">' +
                              '<div class="item-title">{{title}}</div>' +
                            '</div>' +
                            '<div class="item-subtitle">{{hour}}</div>' +
                            '<div class="item-desc">{{desc}}</div>' +

                          '</div>' +
                        '</a>' +
                      '</li><style></style>',
                    // Item height
                    height: app.theme === 'ios' ? 63 : 85,
                  });












                    
                    if(res.rows.length == 0){
                      template ='<li class="taskNotFound"><div class="item-inner"><div class="item-title-row"><div class="item-title">Tasks not found</div></div></li>';
                      $$('.virtual-list').html(template);

             
                    }else{

                          let counter = countDown(1.01);
                          counter.then( (msg) => {
                                removeLoading();
                          });
                          $$('.taskNotFound').remove();
                    }
            }
                    function removeLoading(){
        $$('.loading').remove();
                    }



























                                  let counter = countDown(1.01);
                                  counter.then( (msg) => {
                                        removeLoading();
                                  });

                                 function countDown(i) {
                                    return promise = new Promise( (resolve, reject) => {
                                      console.log(i--);
                                      if (i > 0) {
                                        setTimeout( () => {
                                          countDown(i).then(resolve);
                                        }, 250);
                                      } else {
                                        resolve('counter finished:');
                                      }

                                    });
                                  }
































function executQuery (tx,sql,callback){
 tx.executeSql(sql,[],callback );
}
// Wait for plugin to load
document.addEventListener("deviceready", onDeviceReady, false);
// Cordova is ready
function onDeviceReady()
{
  $$('#datePic').val(fullDate);
   appDate =  $$('#datePic').val();

    //var db = window.sqlitePlugin.openDatabase({name: "demo.db",location:'default'});
   db = window.openDatabase("demodb3", "1.0", "Demodb3", 1000000);
   db.transaction(function(tx) {
        //create table for test
        tx.executeSql("CREATE TABLE IF NOT EXISTS task (id integer primary KEY AUTOINCREMENT NOT NULL, title text, data text, task_date datetime default current_timestamp, fullDate text, year text, month text, day text, hour text, repeat text)", [], function(tx, res)
        {
            //insert alert()data

            var selectTask ='SELECT * FROM task WHERE fullDate == "'+ appDate+'";';
            //execute query and load index
            executQuery(tx,selectTask,loadIndex);
            
        });
    }, function(err){
        //errors for all transactions are reported here
        alert("Error: " + err.message)
    });
}