function handleUpdateList(id){

    var editBtn = document.querySelector('.item-list-' + id)   //  -select nút "Sửa" ở danh sách 
    editBtn.style.display = 'none'                             // 1.ẩn nút sửa ở danh sách bên (mục đích để dánh dấu danh sách mình đang định sửa)  
    var createBtn = document.querySelector('#create')          //  - select nút "Create"
    createBtn.style.display = 'none'                           // 2. ẩn nút Create (mục đích để thay thế bằng nút Update)
    var updateBtn = document.querySelector('#update')          //  - select nút "Update" (Nút update được tạo từ trước bên file HTML nhưng để display = none)
    updateBtn.style.display = 'block'                          // 3. hiện ẩn nút "Update" (mục đích để thay thế bằng nút Create)
    

    // ---------handle updateBtn---------
    updateBtn.onclick = function(){                                                      // 4. Lắng nghe sự kiện trên nút Update :
        var newName = document.querySelector('input[name="name"]').value                 // Lấy dữ liệu 
        var newDescription = document.querySelector('input[name="description"]').value   // Lấy dữ liệu
        var dataUpdate = {                                                               // Tạo opject từ dữ liệu 
            name : newName,
            description: newDescription
        }
        updateList(dataUpdate,id)           // 5. truyền object và id vào hàm updateList để gửi đi 
    } 

    function updateList (dataUpdate,id){    // Hàm updateList cũng giống như hàm creatList nhưng thay 'POST' bằng 'Put'
        var option ={
            method :'PUT',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(dataUpdate) 
        }
        fetch(listApi +'/'+id,option)
            .then(function(response){
                return response
            })
    }
}











// Bước 1: bổ sung button "update" vào function renderCourses trong JS: 
`<button onclick = "handlePutCourse(${course.id})"> update </button>`

// Bước 2: tạo button "save" vào file HTML (bên cạnh button Create):
{/* <button id="save">SAVE</button>  */}

// Bước 3: tạo function handlePutCourse có tham số id:
function handlePutCourse(id){
    //3.1 cài chức năng onclick cho nút save và tạo database.
var saveBtn = document.querySelector('#save')
    saveBtn.onclick = function(){
        var name = document.querySelector('input[name="name"]').value
        var description = document.querySelector('input[name="description"]').value
        var text = document.querySelector('input[name="text"]').value
var database ={
            name: name,
            description: description,
            text: text
        }
    //3.2 Viết hàm fetch
       var option = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'},
            body: JSON.stringify(database)
            }
        fetch(API + '/' + id, option)
        .then(res => {return res.json})
        .then(function(){renderCourses()})
    }
}


