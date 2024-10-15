// contentScript.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'scrapeTable') {
      const table = document.querySelector('#divAttendanceDetails .table.table-striped');
      const tableData = [];

      if (table) {
          const rows = table.querySelectorAll('tbody tr');

          rows.forEach(row => {
              const cells = row.querySelectorAll('td');
              const rowData = {
                  courseCode: cells[0].innerText.trim(),
                  courseName: cells[1].innerText.trim(),
                  subjectType: cells[2].innerText.trim(),
                  totalClasses: parseInt(cells[3].innerText.trim(), 10),
                  totalPresent: parseInt(cells[4].innerText.trim(), 10),
                  totalAttendance: parseFloat(cells[5].innerText.trim()),
                  calc:0
              };
              tableData.push(rowData);
          });
          tableData.forEach(data =>{
            data['calc'] = calculate(data['totalPresent'],data['totalClasses'])
          })
       
       let cut = document.getElementById('scrapeButton')
       console.log(cut)
       if (table) {
            // Add a new "Calc" header
            const headerRow = table.querySelector('thead tr');
            const calcHeader = document.createElement('th');
            calcHeader.innerText = 'Calc';
            headerRow.appendChild(calcHeader);

            // Iterate over each row in the table body and add a "Calc" cell
            const rows = table.querySelectorAll('tbody tr');
            let i = 0;
            rows.forEach(row => {
                const calcCell = document.createElement('td');
                calcCell.innerText = tableData[i]['calc']; // or whatever value you want for "Calc"
                if(tableData[i]['calc']<0){
                  calcCell.style.color = 'green'
                }
                else if(tableData[i]['calc']===0){
                  console.log('damn')
                }
                else{
                  calcCell.style.color = 'red'
                }
                i += 1
                row.appendChild(calcCell);
            });
        } else {
            alert('Table not found!,Make sure you click the "Go to college site" button again after logging in"');
        }
           
      } else {
          alert('Table not found!,Make sure you click the "Go to college site button again after logging in"');
      }
      const hide = document.getElementById('tab_1')
      const show = document.getElementById('tab_6')

      hide.classList.remove("active");
      show.classList.add('active')
      show.classList.add('show')
  }
  function less(y){
    let i=0;
    let sum = 0;
    let bum = 0;
    while(y<75){
        i++;
        sum = (hoursOccured*1) + (i*1);
        bum =  (hoursAttend*1) + (i*1);
        y = (bum/ sum) * 100;
    }
    return i
    
  }
  function higher(z){
    let i=0;
    let sum = 0;
    while(z>=75){
        i++;
        sum = (hoursOccured*1) + (i*1);
        z = ( hoursAttend / sum  ) * 100;
    }
    i--;
    return -i
  }
  function calculate(x,y){
    
    hoursAttend = x
    hoursOccured = y
    percentage =( hoursAttend / hoursOccured ) * 100;
    if(percentage<75){
        return less(percentage);
    }
    else if(percentage>=75){
        return higher(percentage);
    }
  }
});
