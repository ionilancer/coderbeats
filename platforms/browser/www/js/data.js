
                                                          today= new Date();

                                                          year = today.getFullYear().toString();
                                                          month =  today.getMonth().toString().length>1 ? (parseInt(today.getMonth())+1).toString() : "0"+(parseInt(today.getMonth())+1).toString();
                                                          day = today.getDate().toString().length>1 ? today.getDate().toString() : "0"+ today.getDate().toString();
                                                          fullDate = year+"-"+month+"-"+day;



                                                          function getFulldate(){
                                                          var today= new Date();

                                                          var year = today.getFullYear().toString();
                                                          var month =  today.getMonth().toString().length>1 ? (parseInt(today.getMonth())+1).toString() : "0"+(parseInt(today.getMonth())+1).toString();
                                                          var day = today.getDate().toString().length>1 ? today.getDate().toString() : "0"+ today.getDate().toString();
                                                          var fullDate = day+"-"+month+"-"+year;
                                                          alert(fullDate);
                                                          return fullDate;
                                                          }
                                                          //coderbeats
                                                 