$(document).ready(function(){

          let mass = new Array(); // массив всех занятых клеток
          let mass_xx = new Array(); // массив клеток с "х"
          let mass_o = new Array(); // массив клеток с "0"
          let v = 0; // флаг, есть ли победитель (если да, то "1")
            let hod = 1;

          $(".cell").on("click", function(){
              let cell_text = $(this).text();
              if(cell_text != "") {
                  alert("taken");
              }
             else if(hod % 2 === 0){
                 hod = hod + 1;
                   $(this).text("o");

                  let id_cell = $(this).attr('id');
                  id_cell = parseInt(id_cell);

                  mass.push(id_cell);
                  mass_o.push(id_cell);

                  mass_o.sort();

                 victory(mass_o, "zeros");


             }
              else {
                  hod = hod + 1;
                  $(this).text("x");

                  let id_cell = $(this).attr('id');
                  id_cell = parseInt(id_cell);

                  mass.push(id_cell);
                  mass_xx.push(id_cell);

                  mass_xx.sort();

                  let v = victory(mass_xx, "Player");

              }
                 if (hod === 10){
        alert("Draw");
                    mass.length = 0;
                  mass_xx.length = 0;
                  mass_o.length = 0;
                  hod = 1;
    }

          });

          // check for winners
          function victory(metka, user){

              let srt1 = 0; // variable to check first line
              let srt2 = 0; // переменная проверки второй строки
              let srt3 = 0; // переменная проверки третьей строки

              let st1 = 0; // переменная проверки первого столбца
              let st2 = 0; // переменная проверки второго столбца
              let st3 = 0; // переменная проверки третьего столбца

              let d1 = 0; // переменная проверки первой диагонали
              let d2 = 0; // переменная проверки второй диагонали

              for (let i = 0; i < metka.length; i++){
                  switch(metka[i]) {
                      case 1: { srt1++; st1++; d1++; break; }
                      case 2: { srt1++; st2++; break; }
                      case 3: { srt1++; st3++; d2++; break; }
                      case 4: { srt2++; st1++; break; }
                      case 5: { srt2++; st2++; d1++; d2++;  break; }
                      case 6: { srt2++; st3++; break; }
                      case 7: { srt3++; st1++; d2++; break; }
                      case 8: { srt3++; st2++; break; }
                      case 9: { srt3++; st3++; d1++;break; }
                  }

                  if(srt1 == 3 || srt2 == 3 || srt3 == 3)
                  {
                      $(".victory").text("Winner " + user);
                      $(".victory").css("display", "block");
                      victoryBegin(user);
                  }
                  if(st1 == 3 || st2 == 3 || st3 == 3)
                  {
                      $(".victory").text("Winner " + user);
                      $(".victory").css("display", "block");
                      victoryBegin(user);
                  }
                  if(d1 == 3 || d2 == 3)
                  {
                      $(".victory").text("Winner " + user);
                      $(".victory").css("display", "block");
                      victoryBegin(user);
                  }
              }

              if(srt1 == 3 || srt2 == 3 || srt3 == 3 || st1 == 3 || st2 == 3 || st3 == 3 || d1 == 3 || d2 == 3)
                  return 1;
          }


          // if won
          function victoryBegin(user){

              setTimeout(function(){
                  $(".victory").css("display", "none");
                  $(".cell").text("");

                  let raund = $(".statistics span").text();
                  raund++;
                  $(".statistics span").text(raund);

                  if(user == "zeros")
                  {
                      let num = $(".num_c").text();
                      num++;
                      $(".num_c").text(num);
                  }
                  else
                  {
                      let num = $(".num_u").text();
                      num++;
                      $(".num_u").text(num);
                  }
                  mass.length = 0;
                  mass_xx.length = 0;
                  mass_o.length = 0;
                  hod = 1;
              }, 2000);

          }

          // DRAW
          function noneVictory(){
              setTimeout(function(){
                  $(".victory").text("Draw");
                  $(".victory").css("display", "block");

              }, 2000);

              setTimeout(function(){
                  $(".victory").css("display", "none");
                  $(".cell").text("");

                  let raund = $(".statistics span").text();
                  raund++;
                  $(".statistics span").text(raund);

                  mass.length = 0;
                  mass_xx.length = 0;
                  mass_o.length = 0;
                  hod = 1;

              }, 2000);
          }

      })
